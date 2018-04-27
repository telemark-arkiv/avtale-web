const dev = process.env.NODE_ENV !== 'production'
if (dev) {
  require('dotenv').config()
}
const next = require('next')
const { serverRuntimeConfig } = require('./next.config')
const micro = require('micro')
const { parse: urlParse } = require('url')
const { setup, login, callback, logout } = require('./api')
const redirect = (res, location, statusCode = 302) => { res.statusCode = statusCode; res.setHeader('Location', location); res.end() }
const session = require('micro-cookie-session')({
  name: 'session',
  keys: [serverRuntimeConfig.SESSION_KEY],
  maxAge: 24 * 60 * 60 * 1000
})
const port = parseInt(process.env.PORT, 10) || 3000
const app = next({ dev })
const handle = app.getRequestHandler()

const server = micro(async (req, res) => {
  session(req, res)
  const { pathname } = await urlParse(req.url, true)
  if (pathname === '/api/login') {
    if (serverRuntimeConfig.DEMO) {
      req.session.data = require('./test/user.json')
      redirect(res, '/')
      return
    }
    return login(req, res)
  } else if (pathname === '/api/logout') {
    req.session = null
    if (serverRuntimeConfig.DEMO) {
      redirect(res, '/')
      return
    }
    return logout(req, res)
  } else if (pathname === '/loggedIn') {
    try {
      const callbackData = await callback(req, res)
      req.session.data = callbackData
      redirect(res, '/')
    } catch (error) {
      throw error
    }
  } else {
    return handle(req, res)
  }
})

app.prepare().then(() => {
  server.listen(port, err => {
    if (err) throw err
    if (!serverRuntimeConfig.DEMO) setup()
    console.log(`> Ready on http://localhost:${port}`)
  })
})

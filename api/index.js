const axios = require('axios')
const { stringify } = require('querystring')
const { parse: urlParse } = require('url')
const redirect = (res, location, statusCode = 302) => { res.statusCode = statusCode; res.setHeader('Location', location); res.end() }
const pkg = require('../package.json')
let { serverRuntimeConfig: config } = require('../next.config')

function log (level, message) {
  if (config.debug) {
    const formatedMessage = typeof message === 'object' ? JSON.stringify(message) : message
    console.log(`[${level.toUpperCase()}] ${new Date().toUTCString()} ${pkg.name} - ${pkg.version}: ${formatedMessage}`)
  }
}

async function getUserInfo (token) {
  try {
    log('info', `Retrieving user info from ${config.metadata.userinfo_endpoint}`)
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    const { data } = await axios(config.metadata.userinfo_endpoint)
    return data
  } catch (error) {
    log('error', error.response ? JSON.stringify(error.response.data, null, 2) : error)
    throw error
  }
}

async function getToken (code) {
  const payload = stringify({
    client_id: config.auth.client_id,
    code,
    redirect_uri: config.auth.redirect_uri,
    resource: 'profile',
    client_secret: config.client_secret,
    grant_type: config.grant_type
  })

  log('info', `Retriving token from ${config.metadata.token_endpoint}`)

  try {
    const { data } = await axios.post(config.metadata.token_endpoint, payload)
    log('info', `Got token from ${config.metadata.token_endpoint}`)
    return data
  } catch (error) {
    log('error', error.response ? JSON.stringify(error.response.data, null, 2) : error)
    throw error
  }
}

exports.setup = async () => {
  try {
    log('info', `Requesting metadata from ${config.autodiscover_url}`)
    const { data: metadata } = await axios.get(config.autodiscover_url)
    log('info', `Got data from ${config.autodiscover_url}`)
    config.metadata = metadata
    return
  } catch (error) {
    throw error
  }
}

exports.login = (req, res) => {
  const params = stringify(config.auth)
  log('info', `Authorizing through ${config.metadata.authorization_endpoint}`)
  return redirect(res, `${config.metadata.authorization_endpoint}?${params}`)
}

exports.logout = (req, res) => {
  const params = stringify({ post_logout_redirect_uri: config.domain })
  log('info', `Logging out through ${config.metadata.end_session_endpoint}`)
  return redirect(res, `${config.metadata.end_session_endpoint}?${params}`)
}

exports.callback = async (req, res) => {
  const { query } = urlParse(req.url, true)
  log('info', `Recivied callback data`)
  if (query.state !== config.auth.state) {
    throw new Error('Failed to login - Invalid state')
  }
  log('info', `Validated token`)
  try {
    log('info', `Retrieving graph api token`)
    const token = await getToken(query.code)
    const userProfile = await getUserInfo(token.access_token)
    return userProfile
  } catch (error) {
    throw error
  }
}

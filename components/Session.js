import { Component } from 'react'

export default Page => class Session extends Component {
  static getInitialProps (ctx) {
    const { req, query } = ctx
    const user = req && req.session ? req.session.data : {}
    if (!user) {
      ctx.res.writeHead(301, { Location: '/api/login' })
      ctx.res.end()
      return
    }
    return { user, query }
  }

  render () {
    return (
      <Page {...this.props} />
    )
  }
}

import { Component } from 'react'

export default Page => class Session extends Component {
  static getInitialProps (ctx) {
    const { req } = ctx
    const user = req && req.session ? req.session.data : null
    return { user }
  }

  render () {
    return (
      <Page {...this.props} />
    )
  }
}

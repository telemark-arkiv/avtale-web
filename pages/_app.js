import App, {Container} from 'next/app'
import React from 'react'
import Page from '../components/Page'
import Link from 'next/link'

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    const { req, res, query } = ctx
    const user = req && req.session ? req.session.data : {}
    if (res && !user) {
      res.writeHead(301, { Location: '/api/login' })
      res.end()
      return {}
    }
    const pageProps = { user, query }

    return {pageProps}
  }

  render () {
    const {Component, pageProps} = this.props
    return (
      <Container>
        { pageProps && pageProps.user
          ? <Page {...pageProps}>
            <Component {...pageProps} />
          </Page>
          : <Link href='/api/login'>Logg inn</Link>
        }
      </Container>
    )
  }
}

const uuid = require('uuid/v4')

// Basic config
const config = {
  domain: process.env.IDP_DOMAIN || 'https://avtaler.t-fk.no', // URL to your app
  oidcUrl: process.env.IDP_OIDC_URL || 'https://oidc.difi.no', // Base URL to OIDC-server
  client_id: process.env.IDP_CLIENT_ID || 'client_id', // // Klientens tildelte id
  client_secret: process.env.IDP_CLIENT_SECRET || 'client_secret' // Klientens tildelte secret
}

module.exports = {
  serverRuntimeConfig: {
    DEMO: process.env.DEMO || false,
    SESSION_KEY: process.env.SESSION_KEY || 'Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go',
    debug: true,
    domain: config.domain,
    autodiscover_url: config.oidcUrl + '/.well-known/openid-configuration',
    client_secret: config.client_secret, // Klientens tildelte secret
    grant_type: 'authorization_code',
    auth: {
      client_id: config.client_id, // Klientens tildelte id
      response_type: 'code', // Her støtter vi kun 'code'
      redirect_uri: config.domain + '/loggedIn', // URI som sluttbruker skal redirectes tilbake til etter fullført authentisering. Kun forhåndsregistrerte url’er kan brukes
      scope: 'openid', // Scope som forespørres. Kan være en liste separert med whitespace. For autentiseringer må openid brukes
      state: uuid(), // Verdi som settes av klient og returneres i callback-responsen etter fullført autentisering. Bør benyttes til å implementere CSRF-beskyttelse
      nonce: uuid(), // Verdi som settes av klient og returneres som en del av ID token. Bør brukes til å binde en klient-sesjon til et gitt ID-token, og hindre replay attacks
      ui_locales: 'nb', // Ønsket språk brukt i Id-porten. støtter nb, nn, en eller se
      acr_values: 'Level3' // Ønsket sikkerhetsnivå, kan være Level3 eller Level4
    }
  }
}

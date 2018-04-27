import Head from 'next/head'
import getConfig from 'next/config'
const { publicRuntimeConfig: { COMPANY, APP, COLORS } } = getConfig()

export default ({ children }) => (
  <div className='container'>
    <Head>
      <meta name='viewport' content='initial-scale=0.8, maximum-scale=0.8, minimum-scale=0.8 user-scalable=no, width=device-width' />
      <link rel='icon' sizes='192x192' href={COMPANY.icon192x192} />
      <link rel='apple-touch-icon' href={COMPANY.icon152x152} />
      <link rel='shortcut icon' href={COMPANY.favicon} />
      <link rel='stylesheet' href='//fonts.googleapis.com/icon?family=Material+Icons' />
      <title>{COMPANY.name} - {APP.name} - {APP.version}</title>
    </Head>
    { children }
    <style jsx global>
      {`
        body {
          background: #f2f2f2;
          font-family: 'Open sans', sans-serif;
          margin: 0;
          padding: 0;
          height: 100%;
          text-align: center;
        }
        ::selection {
          background: ${COLORS.secondary};
          color: ${COLORS.secondaryOpposite};
        }
        h1 {
          font-weight: 400;
          font-size: 24px;
        }
        h2 {
          -webkit-margin-after: auto;
          font-weight: normal;
        }
        h4 {
          font-size: 20px;
          line-height: 1;
          font-weight: 400;
          font-family: Arial, sans-serif;
          margin: 0;
        }
        a {
          text-decoration: none;
          cursor: pointer;
          color: ${COLORS.secondary};
        }
        a:hover {
          color: ${COLORS.secondaryLight};
        }
        .container {
          display: grid;
          grid-template-areas:
            "header header header"
            ". content ."
            "footer footer footer";
          grid-template-columns: 30px auto 30px;
          grid-template-rows: auto 1fr auto;
        }
        .center {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}
    </style>
  </div>
)

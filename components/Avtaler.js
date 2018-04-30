import { Fragment } from 'react'
import { Icon, Box } from './styles'
import Link from 'next/link'

const avtaler = [
  {
    title: 'Elev-PC kontrakt',
    signed: true,
    href: '/avtale?id=1',
    description: 'Leieforholdet mellom Telemark fylkeskommune og eleven er regulert av vilkårene i denne avtalen.'
  },
  {
    title: 'IT-reglement',
    signed: false,
    href: '/avtale?id=2',
    description: 'Telemark fylkeskommune har retningslinjer for bruk av digitale hjelpemidler, e-post og internett. Disse gjelder for ansatte, elever, konsulenter og andre som får tilgang til fylkeskommunens systemer og utstyr.'
  },
  {
    title: 'IT-reglement',
    signed: false,
    href: '/avtale?id=2',
    description: 'Telemark fylkeskommune har retningslinjer for bruk av digitale hjelpemidler, e-post og internett. Disse gjelder for ansatte, elever, konsulenter og andre som får tilgang til fylkeskommunens systemer og utstyr.'
  },
  {
    title: 'IT-reglement',
    signed: false,
    href: '/avtale?id=2',
    description: 'Telemark fylkeskommune har retningslinjer for bruk av digitale hjelpemidler, e-post og internett. Disse gjelder for ansatte, elever, konsulenter og andre som får tilgang til fylkeskommunens systemer og utstyr.'
  },
  {
    title: 'Lån av lærebøker og andre læremidler',
    signed: true,
    href: '/avtale?id=3',
    description: 'Formålet med avtalen er å formalisere låneforholdet av bøker, lærebøker og andre læremidler mellom Telemark fylkeskommune og eleven. Avtaleperiodene løper fra avtaleinngåelse og så lenge eleven er elev ved den aktuelle skolen, eller at alle lån er tilbakelevert.'
  }
]

const Title = ({ data }) => (
  <h1 style={{ fontFamily: 'Oswald', color: 'rgb(158, 158, 158)', fontSize: '30px', fontWeight: '300' }}>
    { data }
  </h1>
)

const SignertLabel = () => (
  <span className='signert'>
    <Icon name='done' style={{ color: '#49ca4d', verticalAlign: 'middle', fontSize: '20px' }} /> Signert
    <style jsx>
      {`
        .signert {
          float: left;
          color: #999;
          font-size: 12px;
          line-height: 24px;
          text-transform: uppercase;
          font-family: 'Open Sans', 'sans';
        }
      `}
    </style>
  </span>
)

const UsignertLabel = () => (
  <span className='usignert'>
    <Icon name='clear' style={{ color: '#ff6c6c', verticalAlign: 'middle', fontSize: '20px' }} /> Ikke signert
    <style jsx>
      {`
        .usignert {
          float: left;
          color: #999;
          font-size: 12px;
          line-height: 24px;
          text-transform: uppercase;
          font-family: 'Open Sans', 'sans';
        }
      `}
    </style>
  </span>
)

const UsignertAvtale = ({ data }) => (
  <Box>
    <Link href={data.href}>
      <a>
        <UsignertLabel />
        <h4 style={{ marginRight: '70px' }}>{data.title}</h4>
        <p className='description'>
          {data.description}
        </p>
        <style jsx>
          {`
          .description {
            color: #999;
            font-size: 13px;
          }
      `}
        </style>
      </a>
    </Link>
  </Box>
)

const SignertAvtale = ({ data }) => (
  <Box>
    <Link href={data.href}>
      <a>
        <SignertLabel />
        <h4 style={{ marginRight: '70px' }}>{data.title}</h4>
      </a>
    </Link>
  </Box>
)

const HeaderButtons = () => (
  <div className='nav'>
    <Link href=''><a className='checked'>Alle</a></Link>
    <Link href=''><a>Usignerte</a></Link>
    <Link href=''><a>Signerte</a></Link>
    <style jsx>
      {`
        .nav a {
          background: white;
          margin-right: 10px;
          margin-bottom: 10px;
          color: #333333;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);
          border-radius: 2px;
          min-width: 90px;
          padding: 0 12px;
          cursor: pointer;
          display: inline-block;
          line-height: 36px;
          outline: none;
          text-transform: uppercase;
          -webkit-transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1), -webkit-box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1);
          transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1), -webkit-box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1);
          transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1), -webkit-box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1);
        }
        .checked {
          background: #6ac4ae !important;
          color: white !important;
        }
      `}
    </style>
  </div>
)

const Signert = ({ avtaler }) => {
  if (!avtaler) return ''
  return (
    <Fragment>
      <Title data='Signerte kontrakter' />
      <div className='avtale-wrapper'>
        {avtaler.map((item, index) => <SignertAvtale key={index} data={item} />)}
      </div>
      <style jsx>
        {`
          .avtale-wrapper {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            grid-column-gap: 14px;
            grid-row-gap: 14px;
          }
        `}
      </style>
    </Fragment>
  )
}

const Usignert = ({ avtaler }) => {
  if (!avtaler) return ''
  return (
    <Fragment>
      <Title data='Signerte kontrakter' />
      <div className='avtale-wrapper'>
        {avtaler.map((item, index) => <UsignertAvtale key={index} data={item} />)}
      </div>
      <style jsx>
        {`
          .avtale-wrapper {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            grid-column-gap: 14px;
            grid-row-gap: 14px;
          }
        `}
      </style>
    </Fragment>
  )
}

export default () => {
  const signert = avtaler.filter(item => item.signed)
  const usignert = avtaler.filter(item => !item.signed)
  return (
    <Fragment>
      <HeaderButtons />
      <Usignert avtaler={usignert} />
      <Signert avtaler={signert} />
    </Fragment>
  )
}

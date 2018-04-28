import { Fragment } from 'react'
import { Icon, Box } from './styles'

const Title = ({ data }) => (
  <h1 style={{ fontFamily: 'Oswald', color: 'rgb(158, 158, 158)', fontSize: '30px', fontWeight: '300' }}>
    { data }
  </h1>
)

const Signert = () => (
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

const Usignert = () => (
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

const Avtale = ({ data }) => (
  <Box>
    <a href={data.href}>
      { data.signed ? <Signert /> : <Usignert /> }
      <h4>{data.title}</h4>
      { !data.signed &&
        <p className='description'>
          {data.description}
        </p>
      }
      <style jsx>
        {`
        .description {
          color: #999;
          font-size: 13px;
        }
      `}
      </style>
    </a>
  </Box>
)

export default () => (
  <Fragment>
    <Title data='Usignerte kontrakter' />
    <div className='avtale-wrapper'>
      {avtaler.filter(item => !item.signed).map((item, index) => <Avtale key={index} data={item} />)}
    </div>
    <Title data='Signerte kontrakter' />
    <div className='avtale-wrapper'>
      {avtaler.filter(item => item.signed).map((item, index) => <Avtale key={index} data={item} />)}
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

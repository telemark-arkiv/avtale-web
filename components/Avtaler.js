import { Icon, Box } from './styles'

const avtaler = [
  {
    title: 'Elev-PC kontrakt',
    icon: 'done',
    href: '/avtale?id=1',
    description: 'Leieforholdet mellom Telemark fylkeskommune og eleven er regulert av vilkårene i denne avtalen.',
    sign: true
  },
  {
    title: 'IT-reglement',
    icon: 'done',
    href: '/avtale?id=2',
    description: 'Telemark fylkeskommune har retningslinjer for bruk av digitale hjelpemidler, e-post og internett. Disse gjelder for ansatte, elever, konsulenter og andre som får tilgang til fylkeskommunens systemer og utstyr.'
  },
  {
    title: 'Avtale om lån av lærebøker og andre læremidler',
    icon: 'done',
    href: '/avtale?id=3',
    description: 'Formålet med avtalen er å formalisere låneforholdet av bøker, lærebøker og andre læremidler mellom Telemark fylkeskommune og eleven. Avtaleperiodene løper fra avtaleinngåelse og så lenge eleven er elev ved den aktuelle skolen, eller at alle lån er tilbakelevert.'
  }
]

const Avtale = ({ data }) => (
  <Box style={{ minHeight: '80px' }}>
    <a href={data.href}>
      <h4>{data.title}</h4>
      <p className='description'>
        {data.description}
        { data.sign && <i style={{ color: '#ff6c6c' }}><br /><br />Denne avtalen må signeres</i> }
      </p>
      <Icon name={data.icon} style={{ color: '#49ca4d' }} />
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
  <div className='avtale-wrapper'>
    {avtaler.map((item, index) => <Avtale key={index} data={item} />)}
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
  </div>
)

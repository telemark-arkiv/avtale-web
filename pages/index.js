import Session from '../components/Session'
import Page from '../components/Page'
import Avtaler from '../components/Avtaler'

const Title = ({ data }) => (
  <h1 style={{ fontFamily: 'Oswald', color: 'rgb(158, 158, 158)', fontSize: '30px', fontWeight: '300' }}>
    { data }
  </h1>
)

const Index = ({ user }) => (
  <Page user={user}>
    <Title data='Usignerte kontrakter' />
    <Avtaler />
    <Title data='Signerte kontrakter' />
  </Page>
)

export default Session(Index)

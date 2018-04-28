import Session from '../components/Session'
import Page from '../components/Page'
import Avtaler from '../components/Avtaler'

const Index = ({ user }) => (
  <Page user={user}>
    <Avtaler />
  </Page>
)

export default Session(Index)

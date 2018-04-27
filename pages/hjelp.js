import Session from '../components/Session'
import Page from '../components/Page'

const Help = ({ user }) => (
  <Page user={user}>
    DON'T PANIC
  </Page>
)

export default Session(Help)

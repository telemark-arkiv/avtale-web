import Session from '../components/Session'

const Index = ({ user }) => (
  <div>Hello {user.pid}!</div>
)

export default Session(Index)

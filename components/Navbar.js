import getConfig from 'next/config'
import Link from 'next/link'
const { publicRuntimeConfig: { COMPANY, APP, COLORS } } = getConfig()

export default ({ user = false }) => (
  <nav>
    <ul className='left'>
      <li>
        <Link href='/'>
          <img className='logo' alt={COMPANY.name} src={COMPANY.logo} />
        </Link>
      </li>
      <li>
        <Link href='/'>
          <span className='app-name'>{APP.name}</span>
        </Link>
      </li>
    </ul>
    { user
      ? <ul className='right'>
        <li>
          <Link prefetch href='/hjelp'>
            Hjelp
          </Link>
        </li>
        <li>
          <Link href='/api/logout'>
            Logg ut
          </Link>
        </li>
      </ul>
      : <ul className='right'>
        <li><Link href='/api/login'>Logg inn</Link></li>
      </ul>
    }
    <style jsx>{`
      img {
        width: 36px;
      }
      nav {
        grid-area: header;
        display: flex;
        justify-content: space-between;
        background: ${COLORS.primary};
        margin-bottom: 20px;
        height: 60px;
        -webkit-box-shadow: 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .2);
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .2);
      }
      ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        align-items: center;
      }
      ul.left {
        justify-content: flex-start;
        margin-left: 24px;
      }
      ul.right {
        justify-content: flex-end;
      }
      li {
        text-transform: uppercase;
        margin: 10px;
        align-self: center;
      }
      .logo {
        width: 36px;
        margin-left: 10px;
      }
      @media screen and (max-width: 800px) {
        .app-name {
          display: none;
        }
      }
    `}
    </style>
  </nav>
)

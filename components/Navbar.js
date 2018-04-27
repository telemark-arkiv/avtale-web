import getConfig from 'next/config'
const { publicRuntimeConfig: { COMPANY, APP, COLORS } } = getConfig()

export default ({ user = false }) => (
  <nav>
    <ul className='left'>
      <li>
        <a href='/'>
          <img className='logo' alt={COMPANY.name} src={COMPANY.logo} />
        </a>
      </li>
      <li>
        <a href='/'>
          <span className='app-name'>{APP.name}</span>
        </a>
      </li>
    </ul>
    { user
      ? <ul className='right'>
        <li>
          <a href='/api/logout'>
            Logg ut
          </a>
        </li>
      </ul>
      : <ul className='right'>
        <li><a href='/api/login'>Logg inn</a></li>
      </ul>
    }
    <style jsx>{`
      img {
        width: 36px;
      }
      .menu {
        border-bottom: 1px solid #d6d6d6;
        line-height: 50px;
        width: 100%;
        text-align: left;
        min-width: 190px;
      }
      .menu:hover, .menu:hover a {
        background: ${COLORS.secondary};
        color: ${COLORS.secondaryOpposite};
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
        font-size: large;
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

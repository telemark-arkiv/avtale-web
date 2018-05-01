import { Icon } from './index'

export default ({ icon, iconColor, children }) => (
  <span className='label'>
    <Icon name={icon} style={{ color: iconColor, verticalAlign: 'middle', fontSize: '20px' }} /> {children}
    <style jsx>
      {`
        .label {
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

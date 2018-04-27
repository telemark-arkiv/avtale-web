export default (props) => (
  <a href={props.href} style={{ ...props.style }} target='_blank'>
    {props.children}
    <style jsx>
      {`
       a {
          background-color: white;
          color: #353535;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 14px;
          padding: 0 8px;
          line-height: 40px
          cursor: pointer;
          text-transform: uppercase;
          border-radius: 2px;
          transition: all 0.3s ease 0s;
        }

        a:hover {
          background-color: #b9b9b9;
        }

      `}
    </style>
  </a>
)

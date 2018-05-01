export default (props) => (
  <h1 style={{ ...props.style }} className='title'>
    {props.children}
    <style jsx>
      {`
        .title {
          font-family: 'Oswald';
          color: rgb(158, 158, 158);
          font-size: 30px;
          font-weight: 300;
        }
      `}
    </style>
  </h1>
)

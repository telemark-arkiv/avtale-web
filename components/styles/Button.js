import { Fragment } from 'react'
import getConfig from 'next/config'
const { publicRuntimeConfig: { COLORS } } = getConfig()

export default (props) => {
  const propTypes = {
    onClick: props.onClick,
    disabled: props.disabled,
    value: props.value,
    type: props.type || 'button',
    name: props.name,
    autoFocus: props.autoFocus
  }
  return (
    <Fragment>
      <input {...propTypes} />
      <style jsx>
        {`
          input {
            background-color: ${props.backgroundColor || 'white'};
            border: 0px;
            color: ${props.color ? props.color : props.backgroundColor ? 'white' : '#353535'};
            text-align: center;
            text-decoration: none;
            display: inline-block;
            padding: 10 px;
            font-size: ${props.fontSize || '14px'};
            width: ${props.width || '175px'};
            height: ${props.height || '40px'};
            line-height: 40px
            margin: 10px;
            cursor: pointer;
            text-transform: uppercase;
            border-radius: 2px;
            transition: all 0.3s ease 0s;
            -webkit-appearance: none;
          }

          input:focus, input:active {
            outline: 0;
          }

          input:hover {
            background-color: ${COLORS.primary};
            color: ${COLORS.primaryOpposite};
          }

          input:disabled {
            background: #eaeaea;
            color: #cccccc;
            border-color: white;
          }
        `}
      </style>
    </Fragment>
  )
}

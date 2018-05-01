import { Fragment, Component } from 'react'
import { Box, Title, Label } from './styles'
import Link from 'next/link'
import avtaler from '../test/dummy-avtaler'

const HeaderButtons = ({ filterCategory, choosen }) => (
  <div className='nav'>
    <a onClick={() => filterCategory(false)} className={!choosen && 'checked'}>Alle</a>
    <a onClick={() => filterCategory('unsigned')} className={choosen === 'unsigned' && 'checked'}>Usignerte</a>
    <a onClick={() => filterCategory('signed')} className={choosen === 'signed' && 'checked'}>Signerte</a>
    <style jsx>
      {`
        .nav a {
          background: white;
          margin-right: 10px;
          margin-bottom: 10px;
          color: #333333;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);
          border-radius: 2px;
          min-width: 90px;
          padding: 0 12px;
          cursor: pointer;
          display: inline-block;
          line-height: 36px;
          outline: none;
          text-transform: uppercase;
          -webkit-transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1), -webkit-box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1);
          transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1), -webkit-box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1);
          transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1), -webkit-box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1);
        }
        .checked {
          background: #6ac4ae !important;
          color: white !important;
        }
      `}
    </style>
  </div>
)

const UsignertAvtale = ({ data }) => (
  <Box>
    <Link href={data.href}>
      <a>
        <Label icon='clear' iconColor='#ff6c6c'>Signert</Label>
        <h4 style={{ marginRight: '70px' }}>{data.title}</h4>
        <p className='description'>
          {data.description}
        </p>
        <style jsx>
          {`
          .description {
            color: #999;
            font-size: 13px;
          }
      `}
        </style>
      </a>
    </Link>
  </Box>
)

const SignertAvtale = ({ data }) => (
  <Box>
    <Link href={data.href}>
      <a>
        <Label icon='done' iconColor='#49ca4d'>Signert</Label>
        <h4 style={{ marginRight: '70px' }}>{data.title}</h4>
      </a>
    </Link>
  </Box>
)

const SignerteAvtaler = ({ avtaler }) => {
  if (!avtaler) return ''
  return (
    <Fragment>
      <Title>Signerte avtaler</Title>
      <div className='avtale-wrapper'>
        {avtaler.map((item, index) => <SignertAvtale key={index} data={item} />)}
      </div>
      <style jsx>
        {`
          .avtale-wrapper {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            grid-column-gap: 14px;
            grid-row-gap: 14px;
          }
        `}
      </style>
    </Fragment>
  )
}

const UsignerteAvtaler = ({ avtaler }) => {
  if (!avtaler) return ''
  return (
    <Fragment>
      <Title>Usignerte avtaler</Title>
      <div className='avtale-wrapper'>
        {avtaler.map((item, index) => <UsignertAvtale key={index} data={item} />)}
      </div>
      <style jsx>
        {`
          .avtale-wrapper {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            grid-column-gap: 14px;
            grid-row-gap: 14px;
          }
        `}
      </style>
    </Fragment>
  )
}

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      category: false
    }
    this.filterCategory = this.filterCategory.bind(this)
  }

  filterCategory (name) {
    this.setState({ category: name })
  }

  render () {
    const signert = avtaler.filter(item => item.signed)
    const usignert = avtaler.filter(item => !item.signed)
    const category = this.state.category
    return (
      <Fragment>
        <HeaderButtons filterCategory={this.filterCategory} choosen={category} />
        { !category && <Fragment><UsignerteAvtaler avtaler={usignert} /><SignerteAvtaler avtaler={signert} /></Fragment> }
        { category === 'unsigned' && <UsignerteAvtaler avtaler={usignert} /> }
        { category === 'signed' && <SignerteAvtaler avtaler={signert} /> }
      </Fragment>
    )
  }
}

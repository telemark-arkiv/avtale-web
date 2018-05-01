import React from 'react'
import { Box, Button } from '../components/styles'

export default ({ user, query }) => (
  <div className='avtale-wrapper'>
    <Box>
      <h4>Avtale { query && query.id }</h4>
      <p className='description'>
      Leieforholdet mellom Telemark fylkeskommune og eleven er regulert av vilkårene i denne avtalen.
      </p>
    </Box>
    <Box>
      <label htmlFor='pc1'>Egen PC</label>
      <input name='pc' id='pc1' value='1' type='radio' checked />
      <p className='description'>asdasd ..</p>
    </Box>
    <Box>
      <label htmlFor='pc2'>Kjøp PC</label>
      <input name='pc' id='pc2' value='2' type='radio' />
      <p className='description'>asdasd ..</p>
    </Box>
    <Box>
      <p>
        <Button type='submit' value='Signer avtale' />
      </p>
    </Box>
    <style jsx>
      {`
        .description {
          color: #999;
          font-size: 13px;
        }
        .avtale-wrapper {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(1fr, 1fr));
          grid-column-gap: 14px;
          grid-row-gap: 14px;
        }
    `}
    </style>
  </div>
)

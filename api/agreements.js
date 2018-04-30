const axios = require('axios')
const jwt = require('jsonwebtoken')
const { serverRuntimeConfig: config } = require('../next.config')

const createJwt = () => jwt.sign({}, config.AGREEMENTS_API_JWT, { expiresIn: 120 })

exports.getAgreements = async id => {
  const options = {
    url: config.AGREEMENTS_API,
    method: 'post',
    headers: {
      Authorization: `Bearer ${createJwt()}`
    },
    data: {
      partUserId: id
    }
  }
  try {
    const { data } = await axios(options)
    return data
  } catch (error) {
    throw error
  }
}

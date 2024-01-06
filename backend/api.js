const axios = require("axios")

const baseURL = 'http://iranplay.xyz/'

const API = async (url, method = 'GET', body = {}, headers = {}) => {
  // const cookies = new Cookies();
  // const token = await cookies.get("token");
  // if(token){
  //     headers.authorization = `Bearer ${token}`
  // }

  let res = null
  let err = null

  await axios({
    method,
    url,
    baseURL,
    headers,
    data: body
  })
    .then((response) => {
      res = response
    })
    .catch((error) => {
      err = error
    })
    .finally(() => {})
  return { res, err }
}
module.exports = API
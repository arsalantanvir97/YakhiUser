import axios from 'axios'
import { baseURL } from './api'

const addPayPalScript = async ({ setclientid, setSdkReady }) => {
  const { data: clientId } = await axios.get(`${baseURL}/config/paypal`)
  setclientid(clientId)
  const script = document?.createElement('script')
  script.type = 'text/javascript'
  script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
  script.async = true
  script.onload = () => {
    setSdkReady(true)
  }
  if (document?.body) {
    console.log('document?.body', document?.body)
    document?.body?.appendChild(script)
  }
}
export default addPayPalScript

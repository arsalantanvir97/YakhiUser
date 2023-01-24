import axios from 'axios'
import { baseURL } from './api'

const addPayPalScript = async ({ setclientid, setSdkReady }) => {
  const { data: clientId } = await axios.get(`${baseURL}/config/paypal`)
  console.log()
  setclientid(clientId)
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
  script.async = true
  script.onload = () => {
    setSdkReady(true)
  }
  document.body.appendChild(script)
}
export default addPayPalScript

import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
const el = document.createElement('div')
el.innerHTML = `Please ${(<Link to='/Login'>Login</Link>)}or ${(
  <Link to='/Signup'>Signup</Link>
)} to proceed further`

const UnauthorizedAlert = () => {
  Swal.fire({
    icon: 'info',
    title: '',
    html:
      'Please ' +
      '<a href="/Login">Login</a> or ' +
      ' <a href="/Signup">Signup</a> ' +
      ' to proceed further',
    showConfirmButton: false,
    timer: 3000,
  })
}

export default UnauthorizedAlert

import  './NavLogo.css'
import logo from '../../assets/logo.png'
export default function NavLogo() {
  return (
    <div className='NavLogo'>
      <img className='img-logo' src={logo} />
      <div className='div-title'>
        <h4 className='title-pri'>Titulo principal</h4>
        <h4>AQUÍ IRA UNA PEQUEÑA DESCRIPCIÍON</h4>
      </div>
    </div>
  )
}

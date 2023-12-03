import './App.css'
import MainDescription from './components/MainDescription/MainDescription'
import Navbar from './components/Navbar/Navbar'
import NavLogo from './components/NavLogo/NavLogo'
function App() {

  return (
    <>
      <div className='div-principal'>
        <NavLogo />
        <Navbar />
      </div>
      <MainDescription/>
    </>
  )
}

export default App

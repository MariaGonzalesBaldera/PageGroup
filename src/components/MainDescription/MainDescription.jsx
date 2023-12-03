import Card from '../Card/Card'
import './MainDescription.css'
import grupo from '../../assets/grupo.jpg'

export default function MainDescription() {
  return (
    <div className='main-texto'>
    <div className='div-text-principal'>
      <h3>PRESENTACIÓN</h3>
      <div className='div-presentacion-text'>
      Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas , las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
      </div>
      <img className='img-des' src={grupo}/>
    </div>
    <div className='div-text-secundary'>
      <Card titulo={"OTRAS PÁGINAS DE TU INTERES"} description={<div>
        <ul>
          <li><a href='#'>Entrada uno</a></li>
          <li><a href='#'>Enlace de tu interes</a></li>
          <li><a href='#'>Bibliografia</a></li>
        </ul> 
      </div>}/>
      <Card titulo={"LINK DE DOCUMENTACIÓN"} description={<div>
        entrada de otro documento
      </div>}/>
    </div>
  </div>
  )
}

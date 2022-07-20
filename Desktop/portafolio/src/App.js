import Navbar from './components/Navbar'
import portada from './img/portada.jpg'
import linked from './img/linkedin.png'
import github from './img/github.png'
import './style.css'
import html from './img/html.png'
import css from './img/css.png'
import bootstrap from './img/bootstrap.png'
import javascript from './img/javascript.png'
import react from './img/react.png'
import sql from './img/sql.png'
import python from './img/python.png'
import npm from './img/npm.png'
import figma from './img/figma.png'
import xd from './img/xd.png'
import { FaCopy } from 'react-icons/fa'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import WSPGallery from './components/wsp-gallery.jsx'

function App() {

  const  galleryImages  =  [ 
    { 
      original : 'https://picsum.photos/id/1018/1000/600/' 
    } , 
    { 
      original : 'https://picsum.photos/id/1015/1000/600/' 
    } , 
    { 
      original : 'https: //picsum.photos/id/1019/1000/600/' 
    } , 
  ] ;

  return (
    <div className="App">
      <Navbar />
      <div>
        <img className='w-100' src={portada}></img>
        <div className='container portada m-5 py-5'>
            <h1 className='text-white'>LAURA ARELLANO</h1>
            <h6 className='text-white'>Front End Developer</h6>
            <br />
            <div className='icons mt-5'>
              <a href='https://www.linkedin.com/in/m-laura-arellano/' target="_blank"><img src={linked}></img></a>
              <a className='m-3' href='https://github.com/marellanorero' target="_blank"><img src={github}></img></a>
            </div>
            <CopyToClipboard text = "marellanonorero@gmail.com">
            <div className='text-white mt-3'>
                <p >marellanonorero@gmail.com <FaCopy /></p>
            </div>
            </CopyToClipboard>
        </div>
      </div>
      <div className='container w-50 mt-5 py-5'>
      <a name="acercade"><h3 className='mb-3'>Hello World!</h3></a>
        <p>
          Apasionada por la fotografía, el diseño y la tecnología, me encuentro en búsqueda activa para puestos que me permitan aportar mis conocimientos y seguir desarrollándome en el área Front End. <br />
          Soy una persona creativa, con gran iniciativa y responsable. Me gusta mantenerme actualizada en cuanto a nuevas tecnologías y tendencias. Actualmente me encuentro participando en un bootcamp y creando un proyecto de la mano de otros desarrolladores Full Stack. <br />
          <br />
          Mis lenguajes favoritos son HTML, CSS y Javascript. <br />
          Manejo cómodamente React. <br />
          Tengo conocimiento en Back End SQL Alchemy, Python y Flask. <br />
          Me encanta trabajar en equipo, poder aprender de otros. <br />
          Mi motivación es buscar el arte en la programación! <br />

          ¡Gracias por visitar mi portafolio!
        </p>
        <button className='btn btn-secondary'>CV Español</button>
        <button className='btn btn-secondary m-3'>CV Inglés</button>
      </div>
      <div className='container w-50 mt-5 py-5'>
        <h5>Hard Skills</h5> 
        <div className='hard  d-flex justify-content-beetwen '>
          <img className='html' src={html}></img>
          <img className='css' src={css}></img>
          <img className='js' src={javascript}></img>
          <img className='bt' src={bootstrap}></img>
          <img className='rc' src={react}></img>
          <img className='sql' src={sql}></img>
          <img className='pt' src={python}></img>
          <img className='npm' src={npm}></img>
          <img className='fg' src={figma}></img>
          <img className='xd' src={xd}></img>
        </div>
      </div>
      <div className='container w-50 mt-5 py-5'>
        <h5>Soft Skills</h5>
        
        <p className='mt-4'>Capacidad para trabajo en equipo</p>

        <p>Capacidad para comunicar</p>

        <p>Resolución de problemas</p>

        <p>Constante aprendizaje</p>

        <p>Autodisciplina</p>

        <p>Compromiso</p>

        <p>Inglés intermedio</p>
        
      </div>
      <div className='bg bg-light'>
        <div className='container w-50 py-5'>
        <a name="formacion"><h3>Formación</h3></a>
          <br />
          <br />
          
          <div>
            <h6><strong>UX/UI - CoderHouse</strong></h6>
            <span></span><p className='coder mt-3'>UX/UI Básico - Ver certificado</p>
            <span></span><p className='coder'>UX/UI Avanzado - Ver certificado</p>
            <span></span><p className='coder'>UX Research - Ver certificado</p>
            <span></span><p className='coder'>UI Design - Ver certificado</p>
          </div>
          <hr className='my-5' />
          <div>
          <h6><strong>Código - 4 Geeks Academy Chile</strong></h6>
          <span></span><p className='coder mt-3'>Ver certificado</p>
          </div>
        </div>
        <div>
        <div className='bg bg-white'>
          <div className='container w-50 py-5'>
          <a name="trabajos"><h3>Trabajos</h3></a>
              <WSPGallery galleryImages = {galleryImages}/>
          </div>
        </div>
        </div>
      </div>
      <div className='bg bg-light mt-5 '>
        <div className='container w-50 py-5'>
          <a name="contacto"><h3 className='mb-3'><strong>Contacto</strong></h3></a>
          <p>Espero tu visita haya sido satisfactoria, puedes contactarme en:</p>
          <CopyToClipboard text = "marellanonorero@gmail.com">
            <div className='text-white mt-3'>
                <p >marellanonorero@gmail.com <FaCopy /></p>
            </div>
            </CopyToClipboard>
          <div className='icons mt-5'>
            <a href='https://www.linkedin.com/in/m-laura-arellano/' target="_blank"><img src={linked}></img></a>
            <a className='m-3' href='https://github.com/marellanorero' target="_blank"><img src={github}></img></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

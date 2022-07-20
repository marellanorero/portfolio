const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid d-flex justify-content-between">
                <a className="navbar-brand" href="#">Laura Arellano</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    
                        <li className="nav-item">
                            <a  className="nav-link"  href="#acercade" title="Ir a acerca de Laura">Acerca</a> 
                        </li>
                        <li className="nav-item">
                            <a  className="nav-link"  href="#formacion" title="Ir a formación de Laura">Formación</a>
                        </li>
                        <li className="nav-item">
                            <a  className="nav-link"  href="#trabajos" title="Ir a trabajos de Laura">Trabajos</a>
                        </li>
                        <li className="nav-item">
                            <a  className="nav-link"  href="#contacto" title="Ir contactar a Laura">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
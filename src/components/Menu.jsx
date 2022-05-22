import '../styles/styles.scss'
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import Logo from '../img/Etec-fondo-blanco2.png'

const Menu = () => {

    const [user, setUser] = useState(true);
    const [navState, setNavState] = useState(false);
    const [dropdown, setDropdown] = useState(false);


    const location = useLocation()

    return (  
        <header id='header'> 
            <nav className="navbar navbar-expand-lg bg-light fixed-top menu">
                <div className="container-lg">
                    {
                        user ? (
                            <img className='navLogo' src={Logo} alt="" />
                        ): (
                            <span className='d-none'></span>
                        )
                    }

                    <a className="navbar-brand d-lg-none navTitle" href="#!">GBBS</a>

                    <button className="navbar-toggler" onClick={(e) => {setNavState(!navState)}}>
                        <FontAwesomeIcon icon={faBars}/>
                    </button>
                    <div className={`collapse navbar-collapse navListContainer ${navState ? 'show' : ''}`} id="navbarSupportedContent">
                        {
                            user ? (
                                <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink to='/' className="nav-link" aria-current="page">Inicio</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        {
                                            location.pathname === '/' ? (
                                                <a className="nav-link" href="#nosotros">Nosotros</a>
                                            ): (
                                                <NavLink to='/' className="nav-link">Nosotros</NavLink>
                                            )
                                        }
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/foros' className="nav-link">Foros</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/emails' className="nav-link">Emails</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/mensajeria' className="nav-link" >Mensajeria</NavLink>
                                    </li>
                                </ul>
                            ): (
                                <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink to='/' className="nav-link" aria-current="page" href="#">Inicio</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#nosotros">Nosotros</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#organizaciones">Organizaciones</a>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/login' className="nav-link" href="#" onClick={(e) => {setUser(!user)}}>Usuario</NavLink>
                                    </li>
                                </ul>
                            )
                        }

                        {
                            user ? (
                                <span className="navbar-text">
                                    <a className="nav-link dropdown-toggle" href="#!" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={(e) => setDropdown(!dropdown)}>
                                        manudiiez
                                    </a>
                                    <ul className={`dropdown-menu ${dropdown ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#!">Perfil</a></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><a className="dropdown-item" href="#!" onClick={(e) => setUser(!user)}>Cerrar sesion</a></li>
                                    </ul>

                                </span>
                            ):(
                                <span className='d-none'></span>
                            )
                        }
                    </div>
                </div>
            </nav>
        </header>
    );
}
 
export default Menu;
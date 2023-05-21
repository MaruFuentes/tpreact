import React from 'react'

import './NavBar.css'
import { CartWidget } from './CartWidget';
import {Link} from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-md">
                <Link className="navbar-brand" to={'/'}>4Esquinas3D</Link>
                {/* <a className="navbar-brand" href="#">4Esquinas3D</a> */}
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Categorias
                        </a>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to={'/category/mate'}>Mates</Link></li>
                            <li><Link className="dropdown-item" to={'/category/soporte'}>Soporte</Link></li>
                            <li><Link className="dropdown-item" to={'/category/artofi'}>Articulos de Oficina</Link></li>
                           
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to={'/personalizados'}>Personalizados</Link>
                       
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" to={'/nosotros'}>Nosotros</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" to={'/contacto'}>Contacto</Link>
                    </li>
                </ul>
            </div>
            <CartWidget />
        </nav>

    )
}

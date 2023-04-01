import React from 'react'

import './NavBar.css'
import { CartWidget } from './CartWidget'

export const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-md">
                <a class="navbar-brand" href="#">4Esquinas3D</a>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Productos
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Mates</a></li>
                            <li><a class="dropdown-item" href="#">Soporte</a></li>
                            <li><a class="dropdown-item" href="#">Articulos de Oficina </a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Personalizados</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Nosotros</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Contacto</a>
                    </li>
                </ul>
            </div>
            <CartWidget />
        </nav>

    )
}

import React from "react";
import { InertiaLink, usePage } from '@inertiajs/inertia-react'
import route from "ziggy-js";


const Menu: React.FC  = () => {

    const SharedData:any = usePage();

        return(
            <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
                <div className="container">
                    <a className="navbar-brand" href={route('expense.list')}>
                        {SharedData.props.app.name}
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto">

                        </ul>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item dropdown">
                                {SharedData.props.auth.user ?<a id="navbarDropdown" className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    { SharedData.props.auth.user.name }
                                </a>: <InertiaLink href={route('login')} >Login</InertiaLink>}

                                {SharedData.props.auth.user ? <div className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <InertiaLink className="dropdown-item" href={'/logout'}>
                                        Logout
                                    </InertiaLink>

                                </div> : "" }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
}


export default Menu;
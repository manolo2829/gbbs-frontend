import { useState, useEffect } from 'react';
import '../styles/styles.scss'

const Login = () => {

    return(
        <div id="login">
            <div className="container-md">
                <div className="row backgroundContainer">
                    <div className="col-6 backgroundContainerLogin">
                        {/* <!-- Login --> */}
                        <h3>¿Ya tienes cuenta?</h3>
                        <p>Inicie sesion para entrar a la pagina</p>
                        <button id="btn-login">Iniciar Sesion</button>
                    </div>
                    <div className="col-6 backgroundContainerSignIn">
                        {/* <!-- Singin --> */}
                        <h3>¿Aun no tienes cuenta?</h3>
                        <p>Registrate para entrar a la pagina</p>
                        <button id="btn-singin">Registrarse</button>
                    </div>
                </div>
                <div className="row">
                    <form action="" className="login-form">
                        {/* <!-- Login --> */}
                        <h2>Iniciar sesion</h2>
                        <input type="text" placeholder="Correo Electronico"/>
                        <input type="password" placeholder="Contraseña"/>
                        <button type="submit">Ingresar</button>
                    </form>
                    <form action="" class="register-form">
                        {/* <!-- Singin --> */}
                        <h2>Registro</h2>
                        <input type="text" placeholder="Nombre Completo"/>
                        <input type="text" placeholder="Nombre de Usuario"/>
                        <input type="text" placeholder="Correo Electronico"/>
                        <input type="password" placeholder="Contraseña"/>
                        <button type="submit">Registrarse</button>
                    </form>
                </div>
            </div>
        </div>
    )
}




export default Login
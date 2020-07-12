import React from "react";
import { Link } from "react-router-dom";

export default ({ handleSubmit, handleChange }) => {
  return (
    <div className="login">
      <div className="login-img"></div>
      <div className="login-container">
        <h2 className="login-heading">
       Welcome
        </h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <ul className="login-ul-form ">
            <li className="login-li ">
            <label>Email</label>
              <input
                id="email"
                type="email"
                className="login-input"
                name="email"
                onChange={handleChange}
              />
             
            </li>
            <li className="login-li">
            <label>Password</label>
              <input
                id="password"
                type="password"
                className="login-input"
                name="password"
                onChange={handleChange}
              />
              
            </li>
          </ul>

          <br />
          <button type="submit" className="login-button">
            Ingresar
          </button>
        </form>
      </div>
    </div>
    //     <div>
    //         <div className="col-md-12">
    //             <h1 className="text-center mt-3">Iniciar Sesion</h1>
    //             <hr />
    //         </div>

    //         {/* <!-- ACA EMPIEZA LA COLUMNA IZQUIERDA DE LA PANTALLA (FOTOS)--> */}
    //         <div className="row">
    //             <div className="col-md-9 banner-sec">
    //                         <div >
    //                             <img className="d-block img-fluid" src="assets/img/img-products/fondo.jpg" alt="First slide" width="500px" height="300px"/>
    //                             <div className="carousel-caption d-none d-md-block">
    //                                 {/* <div className="banner-text">
    //                                     <h2>Empeza a sumar puntos</h2>
    //                                     <p>Obtene puntos y canjealos para un mayor descuento</p>
    //                                 </div> */}
    //                             </div>
    //                         </div>

    //             </div>
    //             {/* <!-- ACA TERMINA LA COLUMNA IZQUIERDA DE LA PANTALLA (FOTOS)-->
    // <!-- ACA EMPIEZA LA COLUMNA DERECHA DE LA PANTALLA (FORM)--> */}
    //             <div className="col login-sec">

    //                 <form className="login-form clearfix" onSubmit={handleSubmit}>
    //                     <div className="form-group">
    //                         <label>Email</label>
    //                         <input id="email" type="email" className="form-control" name="email"  onChange={handleChange}/>

    //                     </div>
    //                     <div className="form-group">
    //                         <label>Password</label>
    //                         <input id="password" type="password" className="form-control" name="password" onChange={handleChange}/>

    //                     </div>
    //                     <button type="submit" className="btn btn-success float-right">Ingresar</button>
    //                 </form>

    //                 {/* <div className="text-danger font-weight-bold">
    //                 <ul>

    //                 </ul>
    //             </div> */}
    //                 <div className="etc-login-form clearfix mt-2">
    //                     <div className="text-center"><p>Aún no tenes cuenta? <br/><Link to={`/register`} >Registrate acá</Link></p></div>
    //                 </div>

    //                 {/* <!-- PARA IMPRIMIR LOS ERRORES --> */}

    //             </div>
    //             {/* <!-- ACA TERMINA LA COLUMNA DERECHA DE LA PANTALLA (FORM)--> */}
    //         </div>
    //     </div >
  );
};

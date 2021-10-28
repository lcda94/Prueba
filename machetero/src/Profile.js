import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {
  const {isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (<div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     
      <header>
        <section className="Header"> 
         {/*<img src= {imgharambee} />*/}
        </section>
      </header>
      
      <nav>
        <ul className="navbar">
          <li id="Inicio"><a href="#news">Inicio</a></li>
          <li id="Nuestro equipo"><a href="#nuestroequipo">Nuestro equipo</a></li>
          <li id="Información de ventas"><a href="#informaciondeventas">Información de ventas</a></li>
          <li id="Información de personal "><a href="#informaciondepersonal">Información de personal</a></li>
          <li id="Permisos de usuario"><a href="#permisosdeusuario">Permisos de usuario</a></li>
          <li id="Log out"><a href="#logout">Log out</a></li>
          <li><form><input type="search" name="q" placeholder="Buscar" />
        <a href="https://www.google.com.co" target="_blank" onclick="window.open(this.href, this.target, 'width=500,height=300'); return false;" rel="noreferrer"><input type="submit" defaultValue="Ir" name="Find" /> </a>
      </form></li>
        </ul>
      </nav>
    
    
  
    
      <main>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <section className="formulario">
          <div className="contenedor">
            <div className="form">
              <form action>
                <div className="form-header">
                  <h1 className="form-title"><span><b>Información de ventas</b></span></h1>
                </div>
                <label htmlFor="IUVenta" className="form-label">IU Venta</label>
                <input type="text" className="form-input" name="IU Venta" placeholder="Ingresa el IU de venta" />
                <label htmlFor="Cliente" className="form-label">Cliente</label>
                <input type="text" className="form-input" name="Cliente" placeholder="Ingresa los nombres y apellidos del cliente" />
                <label htmlFor="Valor de la Venta" className="form-label">Valor de la Venta</label>
                <input type="number" className="form-input" name="Valor de la Venta" placeholder="Ingresa el valor total de la venta" />
                <label htmlFor="Descripción detallada" className="form-label">Descripción detallada</label>
                <input type="text" className="form-input" name="Descripción detallada" placeholder="Descripción detallada" />
                <label htmlFor="Fecha inicial de pago" className="form-label"> Fecha inicial de pago</label>
                <input type="date" className="form-input" name="Fecha inicial de pago" placeholder="Ingresa la fecha inicial de pago" />
                <label htmlFor="Fecha futura de pago" className="form-label">Fecha futura de pago</label>
                <input type="date" className="form-input" name="Fecha futura de pago" placeholder="Ingresa la fecha futura de pago" />
                <label htmlFor="IU(Vendedor)" className="form-label">IU(Vendedor)</label>
                <input type="text" className="form-input" name="IU(Vendedor)" placeholder="Ingresa el IU(Vendedor" />
                <label htmlFor="Vendedor" className="form-label">Vendedor</label>
                <input type="text" className="form-input" name="Vendedor" placeholder="Ingresa los nombres y apellidos del vendedor" />
                <input type="submit" defaultValue="Enviar datos de la venta" className="btn-submit" />
              </form>
            </div>
          </div>
        </section>
        <br />
        <br />
        <section className="footer">
          <br />
          <br />
          <p>©Copyright 2021 Harambee. Todos los derechos reservados.</p>
        </section>
      </main></div>
    )
  );
};

import { useState } from 'react'
import './CSS/App.css'
import RecetaHeader from './RecetaHeader'
import RecetaMain from './RecetaMain'

function App() {

  return (
    <>
      <header>

        <div className='contenedorMenu'>

          <img className="logo" src="../public/img/Logo.png" />

          <form className='contenedorBusqueda'>
            <input type='text' id='inputBusqueda' className='inputBusqueda' required></input>
            <button type="submit" id='buttonBusqueda' className='buttonBusqueda'>
            <img className="ImagenBusqueda"  src='../public/img/busqueda.png'/>

            </button>
          </form>

        </div>

        <div className='contenedorTiposRecetasHeader'>
          <RecetaHeader src="./public/img/Espaguetis.jpg" alt="imagen de espaguetis" nombre="Pastas" />
          <RecetaHeader src="./public/img/CarneConPapa.jpg" alt="carne con papas" nombre="Carnes" />
          <RecetaHeader src="./public/img/PolloHervido.jpg" alt="pollo hervido" nombre="Pollo" />
          <RecetaHeader src="./public/img/Hamburguesa.jpg" alt="Hamburguesas" nombre="Hamburguesa" />
          <RecetaHeader src="./public/img/Pizzas.jpg" alt="Pizzas" nombre="Pizzas" />
          <RecetaHeader src="./public/img/Cocteles.jpg" alt="Cocteles" nombre="Cocteles" />
          <RecetaHeader src="./public/img/Ensalada.jpg" alt="Ensalada" nombre="Ensalada" />
          <RecetaHeader src="./public/img/Mariscos.jpg" alt="Mariscos" nombre="Mariscos" />
          <RecetaHeader src="./public/img/Kebab.jpg" alt="Kebab" nombre="Kebab" />

        </div>
      </header>

      <main>

        <div className='contenedorRecetasMain'>
          <RecetaMain src="./public/img/Espaguetis.jpg" alt="imagen de espaguetis" nombre="Espaquetis" />
          <RecetaMain src="./public/img/CarneConPapa.jpg" alt="carne con papas" nombre="Carne con papas" />
          <RecetaMain src="./public/img/PolloHervido.jpg" alt="pollo hervido" nombre="Pollo hervido" />
          <RecetaMain src="./public/img/Hamburguesa.jpg" alt="Hamburguesas" nombre="Hamburguesa" />
          <RecetaMain src="./public/img/Pizzas.jpg" alt="Pizzas" nombre="Pizza con peperoni" />
          <RecetaMain src="./public/img/Cocteles.jpg" alt="Cocteles" nombre="Margarita" />
          <RecetaMain src="./public/img/Ensalada.jpg" alt="Ensalada" nombre="Ensalada Cesar" />
          <RecetaMain src="./public/img/Mariscos.jpg" alt="Mariscos" nombre="Tabla de mariscos" />
          <RecetaMain src="./public/img/Kebab.jpg" alt="Kebab" nombre="Kebab de carne" />

        </div>
      </main>

      <footer>

      </footer>

    </>
  )
}

export default App

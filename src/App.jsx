import { useState } from 'react'
import './App.css'
import RecetaHeader from './RecetaHeader'
import RecetaMain from './RecetaMain'

function App() {

  return (
    <>
      <header>

        <h1> De mi cocina a la tuya</h1>

        <div className='contenedorRecetasHeader'>
          <RecetaHeader />
          <RecetaHeader />
          <RecetaHeader />
          <RecetaHeader />
          <RecetaHeader />
          <RecetaHeader />
          <RecetaHeader />
          <RecetaHeader />
          <RecetaHeader />
          <RecetaHeader />
          <RecetaHeader />
          <RecetaHeader />
          <RecetaHeader />

        </div>
      </header>

      <main>

        <div className='contenedorRecetasMain'>
          <RecetaMain />
          <RecetaMain />
          <RecetaMain />
          <RecetaMain />


        </div>
      </main>

    </>
  )
}

export default App

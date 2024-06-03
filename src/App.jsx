
import { useRecetas } from './Hook/useRecetas'
import './CSS/App.css'
import Header from './Header'
import RecetaHeader from './component/RecetaHeader'
import RecetaMain from './component/RecetaMain'

function App() {

  const {data} = useRecetas()


  return (
    <>
      <header>
        <Header/>
        <div className='contenedorTiposRecetasHeader'>
        {data.map((receta) => (
            <RecetaHeader key={receta.id} receta={receta}/>
          ))}
      
        </div>
      </header>

      <main>

        <div className='contenedorRecetasMain'>
        {data.map((receta) => (
            <RecetaMain key={receta.id} receta={receta}/>
          ))}

        </div>
      </main>

    </>
  )
}

export default App

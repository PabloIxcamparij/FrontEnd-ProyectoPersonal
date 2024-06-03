import "./CSS/Header.css"

function Header() {
    return (

        <div className='contenedorMenu'>

            <img className="logo" src="/img/Logo.png" />

            <form className='contenedorBusqueda'>
                <input type='text' id='inputBusqueda' className='inputBusqueda' required></input>
                <button type="submit" id='buttonBusqueda' className='buttonBusqueda'>
                    <img className="ImagenBusqueda" src='/img/busqueda.png' />

                </button>
            </form>

        </div>
    )
}

export default Header
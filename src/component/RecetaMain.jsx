import PropTypes from 'prop-types';
import "../CSS/Main.css"

export default function RecetaMain({ receta }) {

    const { name, image } = receta

    const textoRecortado = name.length > 15 ? name.slice(0, 15) + '..' : name;

    return (
        <div className="ImagenMain">
            <img className="img-main" src={`/img/${image}.jpg`} alt={name} />
            <button className="icon-container">
                <svg className="icono" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
            </button>
            <h3>{textoRecortado}</h3>
        </div>
    )

}

RecetaMain.propTypes = {
    receta: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};
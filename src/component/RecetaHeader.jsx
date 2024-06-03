import "../CSS/BarraNavegacion.css"
import PropTypes from 'prop-types';


export default function RecetaHeader({ receta }) {
    const {name, image } = receta

    const textoRecortado = name.length > 7? name.slice(0, 7) + '..' : name;

    
    return (
        
        <div className="ImagenTipoRecetasHeader">
            <img className="img-header"  src={`/img/${image}.jpg`} alt={name} />
            <h3>{textoRecortado}</h3>
        </div>
    )

}


// Tener cuidado con los props
RecetaHeader.propTypes = {
    receta: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};
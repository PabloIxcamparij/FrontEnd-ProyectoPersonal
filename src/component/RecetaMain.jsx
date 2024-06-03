import PropTypes from 'prop-types';



export default function RecetaMain({ receta }) {

    const {name, image } = receta

    const textoRecortado = name.length > 15? name.slice(0, 15) + '..' : name;

    return (
        <div className="ImagenMain">
            <img className="img-main"  src={`/img/${image}.jpg`} alt={name} />
            <h3>{textoRecortado}</h3>
        </div>
    )

}

// Tener cuidado con los props
RecetaMain.propTypes = {
    receta: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};
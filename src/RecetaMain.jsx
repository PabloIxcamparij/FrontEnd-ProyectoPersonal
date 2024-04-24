export default function RecetaMain({ src, alt, nombre }) {
    const textoRecortado = nombre.length > 15? nombre.slice(0, 15) + '..' : nombre;

    return (
        <div className="ImagenMain">
            <img className="img-main"  src={src} alt={alt} />
            <h3>{textoRecortado}</h3>
        </div>
    )

}
export default function RecetaHeader({ src, alt, nombre }) {
    const textoRecortado = nombre.length > 11? nombre.slice(0, 11) + '..' : nombre;

    
    return (
        
        <div className="ImagenTipoRecetasHeader">
            <img className="img-header"  src={src} alt={alt} />
            <h3>{textoRecortado}</h3>
        </div>
    )

}
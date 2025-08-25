
import React from 'react';

const CustomJumbotron = () => {
  return (
    <div 
      className="bg-image rounded my-3 d-flex align-items-center position-relative"
      style={{
        backgroundImage: "url('https://images2.alphacoders.com/870/870882.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '45vh'
      }}
    >
      {/* Overlay para oscurecer la imagen de fondo */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100 rounded"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1
        }}
      ></div>
      
      {/* Contenido del texto */}
      <div className="container position-relative" style={{zIndex: 2}}>
        <div className="text-start">
          <h1 className="display-4 fw-light text-white mb-4" style={{textShadow: '3px 3px 6px rgba(0,0,0,0.9)'}}>
            GameShop - Tu Tienda Gamer
          </h1>
          <h3 className="lead text-light mb-4" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.9)'}}>
            Descubre los mejores videojuegos al mejor precio. Desde los últimos lanzamientos hasta los clásicos más queridos, tenemos todo lo que necesitas para vivir aventuras épicas. ¡Tu próximo juego favorito te está esperando!
          </h3>
          <button className="btn btn-primary btn-lg shadow-lg">
            A jugar!!!
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomJumbotron;
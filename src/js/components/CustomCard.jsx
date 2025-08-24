export function CustomCard() {
  const imageStyle = {
    height: "400px",
    objectFit: "cover",
    objectPosition: "center",
  };

  return (
    <div className="card-group">
      <div className="card">
        <img
          src="https://i.blogs.es/juegos/16215/xbox_scarlett/fotos/noticias/xbox_scarlett-5207432.jpg"
          className="card-img-top"
          alt="..."
          style={imageStyle}
        />
        <div className="card-body">
          <h5 className="card-title text-center">FAR CRY 6</h5>
          <p className="card-text">
            <b> ¡Sumérgete en el caos de Yara con Far Cry 6! </b> Únete a la
            revolución en una isla tropical convertida en dictadura. En un mundo
            abierto lleno de peligros y aventuras épicas. 🔥 Combate explosivo
            con armas caseras y vehículos destructivos 🌴 Mundo abierto masivo
            con junglas, ciudades y costas por explorar ⚡ Historia intensa con
            personajes inolvidables y giros inesperados 🎮 Cooperativo online -
            juega con amigos en toda la campaña ¡La revolución te necesita! No
            dejes que Castillo siga en el poder. Consigue Far Cry 6 ahora y
            libera Yara del terror. 💥🏝️
          </p>
        </div>
        <div className="card-footer text-center">
          <button type="button" className="btn btn-primary">
            {" "}
            <b>$4.99</b>Comprar
          </button>
        </div>
      </div>

      <div className="card">
        <img
          src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2017/02/mario-kart-8-deluxe-caratula.jpg?tf=384x"
          className="card-img-top"
          alt="..."
          style={imageStyle}
        />
        <div className="card-body">
          <h5 className="card-title text-center">MARIO KART 8</h5>
          <p className="card-text">
            <b>
              {" "}
              ¡Prepárate para la experiencia de carreras más emocionante de
              Nintendo!
            </b>{" "}
            Mario Kart 8 Deluxe te ofrece adrenalina pura con sus espectaculares
            circuitos anti-gravedad, 48 pistas increíbles y todos tus personajes
            favoritos. Compite con hasta 8 amigos localmente o enfréntate a
            jugadores de todo el mundo online. Con gráficos impresionantes,
            jugabilidad perfecta y diversión garantizada para toda la familia.
            ¡No te quedes atrás en la línea de meta - consigue tu copia hoy y
            domina las pistas! 🏁🎮
          </p>
        </div>
        <div className="card-footer text-center">
          <button type="button" className="btn btn-primary">
            {" "}
            <b>$4.99</b>Comprar
          </button>
        </div>
      </div>
      <div className="card">
        <img
          src="https://i.3djuegos.com/juegos/11043/the_master_chief_collection/fotos/ficha/the_master_chief_collection-2548530.webp"
          className="card-img-top"
          alt="..."
          style={imageStyle}
        />
        <div className="card-body">
          <h5 className="card-title text-center">HALO</h5>
          <p className="card-text">
            <b>¡El destino de la humanidad está en tus manos con Halo!</b> Vive
            la legendaria saga que definió los shooters en consola. Encarna al
            icónico Jefe Maestro y enfrenta la amenaza alienígena del Covenant
            en batallas épicas que pondrán a prueba tu valentía y estrategia. ⚔️
            Combate cinematográfico con armas futuristas y vehículos
            emblemáticos 🌌 Campaña épica que revolucionó el gaming para siempre
            🎯 Multijugador legendario - enfréntate a jugadores de todo el mundo
            🤖 Banda sonora icónica que te pondrá la piel de gallina La
            humanidad cuenta contigo 🚀✨
          </p>
        </div>
        <div className="card-footer text-center">
          <button type="button" className="btn btn-primary">
            {" "}
            <b>$4.99</b>Comprar
          </button>
        </div>
      </div>
      <div className="card">
        <img
          src="https://preview.redd.it/cod-the-last-three-games-have-all-had-great-cover-arts-v0-33p4r7lm1s8b1.png?width=640&crop=smart&auto=webp&s=34f70f92214d3ae9b4ec4d701260ad2764370efb"
          className="card-img-top"
          alt="..."
          style={imageStyle}
        />
        <div className="card-body">
          <h5 className="card-title text-center">CALL OF DUTY</h5>
          <p className="card-text">
            <b>¡Responde al llamado del deber con Call of Duty!</b>
            Prepárate para la experiencia de combate más intensa y realista del
            gaming. Desde las trincheras de la Segunda Guerra Mundial hasta las
            batallas futuristas, Call of Duty te pone en el centro de la acción
            militar más explosiva. 💥 Acción frenética con gráficos de última
            generación 🎖️ Campañas épicas basadas en conflictos reales e
            históricos 🔫 Multijugador competitivo - demuestra quién es el mejor
            soldado ⚡ Modo Zombies - sobrevive a hordas interminables 🌍 Battle
            Royale masivo - sé el último en pie El campo de batalla te espera,
            soldado. Tu escuadrón cuenta contigo. ¿Estás listo para el desafío?
          </p>
        </div>
        <div className="card-footer text-center">
          <button type="button" className="btn btn-primary">
            {" "}
            <b>$4.99</b>Comprar
          </button>
        </div>
      </div>
    </div>
  );
}

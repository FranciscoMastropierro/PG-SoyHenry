import React from "react";
import news1 from '../../assets/news8.png'
import news2 from '../../assets/news10.jpg'
import news3 from '../../assets/news11.jpg'
import news4 from '../../assets/news13.jpg'
import newsReal1 from '../../assets/noticiasReal1.jpeg'
import style from '../../styles/news.module.css'

export default function News() {

    return (
        <div className={style.wrapper}>
            <h1 className={style.titulo}>NEWS</h1>
            <div className={style.containerNews}>
                <div>
                    <img src={newsReal1} alt='imagen de noticia' className={style.img} />
                </div>
                <div>
                    <p className={style.texto}>El Ministerio de Tecnologías de la Información y las Comunicaciones le otorgó oficialmente los permisos a Starlink para que funcione en el país. Según las autoridades, el proyecto ofrece una oportunidad para mejorar la conexión de las zonas rurales en el territorio.

                        “En nuestra ruta por cerrar la brecha digital desde todos los puntos de vista, la entrada de esta nueva compañía al país significó una mejora sustancial en la forma en que se conectarán las regiones, pues gracias a la tecnología satelital de actores como Starlink se ampliará la oferta en el mercado, y gracias a los beneficios establecidos en el nuevo régimen, el dinero que deja de percibir el MinTIC en materia de pagos por uso de espectro podrán ser reinvertidos para mejora del servicio al usuario final”, afirmó Carmen Ligia Valderrama Rojas, Ministra TIC.

                        La Resolución 376 de 2022 busca abrir el camino para que lleguen nuevas empresas satelitales al país. Con este mismo permiso, se buscará mejorar las conexiones 4G y 5G en Colombia.

                    </p>
                </div>
            </div>
            <div className={style.containerNews}>
                <div>
                    <p className={style.texto}>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                </div>
                <div>
                    <img src={news1} alt='imagen de noticia' className={style.img} />
                </div>
            </div>
            <div className={style.containerNews}>
                <div>
                    <img src={news3} alt='imagen de noticia' className={style.img} />
                </div>
                <div>
                    <p className={style.texto}>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                </div>
            </div>
            <div className={style.containerNews}>
                <div>
                    <p className={style.texto}>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                </div>
                <div>
                    <img src={news4} alt='imagen de noticia' className={style.img} />
                </div>
            </div>
        </div>
    )
}
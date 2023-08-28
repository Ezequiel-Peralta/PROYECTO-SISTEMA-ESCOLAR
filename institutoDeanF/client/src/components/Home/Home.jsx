
import style from "./Home.module.css"
import FooterPag from "../Footer/FooterPag";

const Home = () => {
    return (
        <div className={style.divbody}>
            <div className={style.divcontainer}>
            
                <main className={style.contenido}>
                    <h1>Bienvenido al sistema educativo de autogestión para la Institucion educativa Dean Funes</h1>
                </main>
                <FooterPag/>
            </div>
        </div>
    )


}




export default Home;



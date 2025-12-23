import style from "./Main.module.css";
import Ecommerce from "./Ecommerce";
import bgImage from "../assets/jumbotron.jpg"
import Cards from "./CardsList";


function Main() {
    return (
        <>
            <main>
                <div className={style.jumbotron}>
                </div>

                <Cards />

                <Ecommerce />


            </main>
        </>

    )
}

export default Main
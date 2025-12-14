import style from "./Main.module.css";
import Ecommerce from "./Ecommerce";
import bgImage from "../assets/jumbotron.jpg"


function Main() {
    return (
        <>
            <main>
                <div className={style.jumbotron}>
                    <div className={style.container}>--Content goes Here--</div>


                </div>



                <Ecommerce />


            </main>
        </>

    )
}

export default Main
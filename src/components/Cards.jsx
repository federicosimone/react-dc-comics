import style from "./Cards.module.css"
import comics from "../assets/dc-comics-2/comics"

function Cards() {
    return (
        <>
            <div className={style.container}>
                <button className={`${style.blueBackground} ${style.textColorWhite} ${style.series}`}>
                    CURRENT SERIES
                </button>
                <div className={style.flex}>

                    {
                        comics.map(card => {
                            return (
                                <div className={style.cardContainer}>
                                    <a href="#"></a>
                                    <img src={card.thumb} className={`${style.cardImage} ${style.imgZoom}`} alt="ciao" />
                                    <p className={style.label}>{card.series}</p>
                                </div>

                            )
                        })
                    }

                </div>
            </div >
        </>
    )
}

export default Cards
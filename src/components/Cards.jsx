import style from "./Cards.module.css"
import comics from "../assets/dc-comics-2/comics"

function Cards() {
    return (
        <>
            <div className={`${style.container} ${style.flex}`}>
                {
                    comics.map(card => {
                        return (
                            <div className={style.cardContainer}>
                                <img src={card.thumb} className={style.cardImage} alt="ciao" />
                                <p className={style.label}>{card.series}</p>
                            </div>

                        )
                    })
                }


            </div >
        </>
    )
}

export default Cards
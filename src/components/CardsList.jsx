import style from "./CardsList.module.css"
import comics from "../assets/dc-comics-2/comics"
import Card from "./Card"
import batmanBg from "../assets/batman.png"

function Cards() {
    return (
        <>
            <div className={style.container}>
                <button className={`${style.blueBackground} ${style.textColorWhite} ${style.series}`}>
                    CURRENT SERIES
                </button>

                <div className={style.flex}>

                    {
                        comics.map(comic => {
                            return <Card fumetto={comic} />
                        })
                    }

                </div>
            </div >
        </>
    )
}

export default Cards
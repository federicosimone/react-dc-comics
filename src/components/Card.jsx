import style from "./Card.module.css"

function Card(props) {

    const card = props.fumetto;

    return (
        <div key={card.id} className={style.cardContainer}>
            <a href="#"></a>
            <img src={card.thumb} className={`${style.cardImage} ${style.imgZoom} col-md-6`} alt="comics-cover" />
            <p className={style.label}>{card.series}</p>
            <div className={style.heart}><i class="fa-solid fa-heart"></i></div>
        </div>

    )
}

export default Card
import style from "./Card.module.css"

function Card(props) {

    const card = props.card;

    return (
        <div key={card.id} className={style.cardContainer}>
            <a href="#"></a>
            <img src={card.thumb} className={`${style.cardImage} ${style.imgZoom} col-md-6`} alt="comics-cover" />
            <p className={style.label}>{card.series}</p>
        </div>

    )
}

export default Card
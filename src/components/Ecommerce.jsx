import style from "./Ecommerce.module.css"
import DigitalComics from "../assets/buy-comics-digital-comics.png"
import merchandise from "../assets/buy-comics-merchandise.png"
import subscription from "../assets/buy-comics-subscriptions.png"
import locator from "../assets/buy-comics-shop-locator.png"
import powerVisa from "../assets/buy-dc-power-visa.svg"

function Ecommerce() {
    return (
        <>
            <div className={style.background}>
                <div className={`${style.boxed} ${style.iconListWhite} ${style.container} `}>
                    <div className={` ${style.containerBuy}`}><img src={DigitalComics} alt="digital-comics" className={style.buyIcons} /><a href="#" className={style.buyText}>DIGITAL COMICS</a></div>
                    <div className={` ${style.containerBuy}`}><img src={merchandise} alt="digital-comics" className={style.buyIcons} /><a href="#" className={style.buyText}>DC MERCHANDISE</a></div>
                    <div className={` ${style.containerBuy}`}><img src={subscription} alt="digital-comics" className={style.buyIcons} /><a href="#" className={style.buyText}>SUBSCRIPTION</a></div>
                    <div className={` ${style.containerBuy}`}><img src={locator} alt="digital-comics" className={`${style.buyIcons} ${style.locatorIcon}`} /><a href="#" className={style.buyText}>COMIC SHOP LOCATOR</a></div>
                    <div className={` ${style.containerBuy}`}><img src={powerVisa} alt="digital-comics" className={style.buyIcons} /><a href="#" className={style.buyText}>DC POWER VISA</a></div>
                </div>
            </div>
        </>
    )
}

export default Ecommerce
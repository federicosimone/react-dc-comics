import style from "./Footer.module.css"
import fb from "../assets/footer-facebook.png"

function Footer() {
    return (
        <>
            <div className={style.background}>
                <div className={style.boxed}>
                    Icone varie
                </div>
            </div>

            <div className={style.comicsbackground}>
                <div className={style.boxed}>
                    <div className={style.liste}>
                        liste
                    </div>
                    <div className={style.logodc}>
                        Immagine DC in trasparenza
                    </div>
                </div>
            </div>
            <div className={style.graybackground}>
                <div className={`${style.boxed} ${style.followus}`}>
                    <div>
                        <button>SIGN-OP NOW!</button>
                    </div>
                    <div>
                        <span>FOLLOW US</span>
                        <a href="#"><img src={fb} alt="fb" className={style.socialIcons} /></a>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Footer
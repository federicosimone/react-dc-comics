import style from "./Footer.module.css"
import fb from "../assets/footer-facebook.png"
import twitter from "../assets/footer-twitter.png"
import youtube from "../assets/footer-youtube.png"
import pinterest from "../assets/footer-pinterest.png"
import periscope from "../assets/footer-periscope.png"

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
                        <button className={style.signButton}>SIGN-UP NOW!</button>
                    </div>
                    <div className={style.rightFollow}>
                        <div className={style.blue}>FOLLOW US</div>
                        <ul className={style.iconList}>
                            <li><a href="#"><img src={fb} alt="fb" className={style.socialIcons} /></a></li>
                            <li><a href="#"><img src={twitter} alt="twitter" className={style.socialIcons} /></a></li>
                            <li><a href="#"><img src={youtube} alt="youtube" className={style.socialIcons} /></a></li>
                            <li><a href="#"><img src={pinterest} alt="pinterest" className={style.socialIcons} /></a></li>
                            <li><a href="#"><img src={periscope} alt="periscope" className={style.socialIcons} /></a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Footer
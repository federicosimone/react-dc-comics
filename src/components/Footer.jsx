import style from "./Footer.module.css"
import fb from "../assets/footer-facebook.png"
import twitter from "../assets/footer-twitter.png"
import youtube from "../assets/footer-youtube.png"
import pinterest from "../assets/footer-pinterest.png"
import periscope from "../assets/footer-periscope.png"
import DigitalComics from "../assets/buy-comics-digital-comics.png"
import merchandise from "../assets/buy-comics-merchandise.png"
import subscription from "../assets/buy-comics-subscriptions.png"
import locator from "../assets/buy-comics-shop-locator.png"
import powerVisa from "../assets/buy-dc-power-visa.svg"

function Footer() {
    return (
        <>
            <div className={style.background}>
                <div className={`${style.boxed} ${style.iconListWhite} ${style.container} `}>
                    <div className={`${style.eCommerceLabel} ${style.containerBuy}`}><img src={DigitalComics} alt="digital-comics" className={style.buyIcons} /><span className={style.buyText}>DIGITAL COMICS</span></div>
                    <div className={`${style.eCommerceLabel} ${style.containerBuy}`}><img src={merchandise} alt="digital-comics" className={style.buyIcons} /><span className={style.buyText}>DC MERCHANDISE</span></div>
                    <div className={`${style.eCommerceLabel} ${style.containerBuy}`}><img src={subscription} alt="digital-comics" className={style.buyIcons} /><span className={style.buyText}>SUBSCRIPTION</span></div>
                    <div className={`${style.eCommerceLabel} ${style.containerBuy}`}><img src={locator} alt="digital-comics" className={style.buyIcons} /><span className={style.buyText}>COMIC SHOP LOCATOR</span></div>
                    <div className={`${style.eCommerceLabel} ${style.containerBuy}`}><img src={powerVisa} alt="digital-comics" className={style.buyIcons} /><span className={style.buyText}>DC POWER VISA</span></div>
                </div>
            </div>

            <div className={style.comicsbackground}>
                <div className={`${style.boxed} ${style.container}`}>
                    <div className={`${style.liste} ${style.container}`}>
                        <div>
                            <h4>DC COMICS</h4>
                            <ul className={style.listeFooter}>
                                <li><a href="#">Characters</a></li>
                                <li><a href="#">Comics</a></li>
                                <li><a href="#">Movies</a></li>
                                <li><a href="#">TV</a></li>
                                <li><a href="#">Games</a></li>
                                <li><a href="#">Videos</a></li>
                                <li><a href="#">News</a></li>
                            </ul>
                            <h4 className={style.paddingTop}>SHOP</h4>
                            <ul className={style.listeFooter}>
                                <li><a href="#">Shop DC</a></li>
                                <li><a href="#">Shop DC Collectibles</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4>DC</h4>
                            <ul className={style.listeFooter}>
                                <li><a href="#">Therms of use</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Ad Choices</a></li>
                                <li><a href="#">Advertising</a></li>
                                <li><a href="#">Jobs</a></li>
                                <li><a href="#">Subscription</a></li>
                                <li><a href="#">Talent Workshops</a></li>
                                <li><a href="#">CPSC Certificates</a></li>
                                <li><a href="#">Ratings</a></li>
                                <li><a href="#">Shop Help</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4>SITES</h4>
                            <ul className={style.listeFooter}>
                                <li><a href="#">DC</a></li>
                                <li><a href="#">MAD magazine</a></li>
                                <li><a href="#">DC Kids</a></li>
                                <li><a href="#">DC Universe</a></li>
                                <li><a href="#">DC Power Visa</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.logodc}>

                    </div>
                </div>
            </div >
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
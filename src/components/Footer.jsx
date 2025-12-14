import style from "./Footer.module.css"
import fb from "../assets/footer-facebook.png"
import twitter from "../assets/footer-twitter.png"
import youtube from "../assets/footer-youtube.png"
import pinterest from "../assets/footer-pinterest.png"
import periscope from "../assets/footer-periscope.png"

const DCComics = [
    { id: 1, title: "Characters", link: "#" },
    { id: 2, title: "Comics", link: "#" },
    { id: 3, title: "Movies", link: "#" },
    { id: 4, title: "TV", link: "#" },
    { id: 5, title: "Games", link: "#" },
    { id: 6, title: "Videos", link: "#" },
    { id: 7, title: "News", link: "#" },
];

const Shop = [
    { id: 1, title: "Shop DC", link: "#" },
    { id: 2, title: "Shop DC Collectibles", link: "#" }

];

const Dc = [
    { id: 1, title: "Therms of use", link: "#" },
    { id: 2, title: "Privacy Policy", link: "#" },
    { id: 3, title: "Ad Choices", link: "#" },
    { id: 4, title: "Advertising", link: "#" },
    { id: 5, title: "Jobs", link: "#" },
    { id: 6, title: "Subscription", link: "#" },
    { id: 7, title: "Talent Workshops", link: "#" },
    { id: 8, title: "CPSC Certificates", link: "#" },
    { id: 9, title: "Ratings", link: "#" },
    { id: 10, title: "Shop Help", link: "#" },
    { id: 11, title: "Contact Us", link: "#" }
];

const Sites = [
    { id: 1, title: "DC", link: "#" },
    { id: 2, title: "MAD Magazine", link: "#" },
    { id: 3, title: "DC Kids", link: "#" },
    { id: 4, title: "DC Universe", link: "#" },
    { id: 5, title: "DC Power Visa", link: "#" },
]

function Footer() {
    return (
        <>
            <div className={style.comicsbackground}>
                <div className={`${style.boxed} ${style.container}`}>
                    <div className={`${style.liste} ${style.container}`}>
                        <div>
                            <h4>DC COMICS</h4>
                            <ul className={style.listeFooter}>
                                {
                                    DCComics.map((item) => {
                                        return <li key={item.id}><a href={item.link}>{item.title}</a></li>
                                    })
                                }
                            </ul>
                            <h4 className={style.paddingTop}>SHOP</h4>
                            <ul className={style.listeFooter}>
                                {
                                    Shop.map((item) => {
                                        return <li key={item.id}><a href={item.link}>{item.title}</a></li>
                                    })
                                }
                            </ul>
                        </div>
                        <div>
                            <h4>DC</h4>
                            <ul className={style.listeFooter}>
                                {
                                    Dc.map((item) => {
                                        return <li key={item.id}><a href={item.link}>{item.title}</a></li>
                                    })
                                }
                            </ul>
                        </div>
                        <div>
                            <h4>SITES</h4>
                            <ul className={style.listeFooter}>
                                {
                                    Sites.map((item) => {
                                        return <li key={item.id}><a href={item.link}>{item.title}</a></li>
                                    })
                                }
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
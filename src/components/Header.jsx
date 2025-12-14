import logo from "../assets/dc-logo.png"
import style from "../components/Header.module.css"

const navItems = [
    { title: "CHARACTERS", link: "#" },
    { title: "COMICS", link: "#" },
    { title: "MOVIES", link: "#" },
    { title: "TV", link: "#" },
    { title: "GAMES", link: "#" },
    { title: "COLLECTIBLES", link: "#" },
    { title: "VIDEOS", link: "#" },
    { title: "FANS", link: "#" },
    { title: "NEWS", link: "#" },
    { title: "SHOP", link: "#" }
];

export default function Header() {
    return (
        <>
            <header>
                <nav>
                    <div id="logo">
                        <a href="https://www.dc.com/"><img src={logo} alt="logo" /></a>
                    </div>
                    <div>
                        <ul>
                            {
                                navItems.map(item => {
                                    return <li><a href={item.link}>{item.title}</a></li>

                                })





                            }
                            {/*<li><a href="#">CHARACTERS</a></li>
                            <li><a href="#">COMICS</a></li>
                            <li><a href="#">MOVIES</a></li>
                            <li><a href="#">TV</a></li>
                            <li><a href="#">GAMES</a></li>
                            <li><a href="#">COLLECTIBLES</a></li>
                            <li><a href="#">VIDEOS</a></li>
                            <li><a href="#">FANS</a></li>
                            <li><a href="#">NEWS</a></li>
                            <li><a href="#">SHOP</a></li>*/}
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

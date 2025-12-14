import logo from "../assets/dc-logo.png"
import style from "../components/Header.module.css"

const navItems = [
    { id: 1, title: "CHARACTERS", link: "#", },
    { id: 2, title: "COMICS", link: "#" },
    { id: 3, title: "MOVIES", link: "#" },
    { id: 4, title: "TV", link: "#" },
    { id: 5, title: "GAMES", link: "#" },
    { id: 6, title: "COLLECTIBLES", link: "#" },
    { id: 7, title: "VIDEOS", link: "#" },
    { id: 8, title: "FANS", link: "#" },
    { id: 9, title: "NEWS", link: "#" },
    { id: 10, title: "SHOP", link: "#" }
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
                                navItems.map((item) => {
                                    return <li><a href={item.link}>{item.title}</a></li>
                                })
                            }
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

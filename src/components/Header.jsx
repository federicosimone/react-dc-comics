import logo from "../assets/dc-logo.png"
import style from "../components/Header.module.css"

export default function Header() {
    return (
        <>
            <header>
                <nav>
                    <div id="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div>
                        <ul>
                            <li><a href="#">CHARACTERS</a></li>
                            <li><a href="#">COMICS</a></li>
                            <li><a href="#">MOVIES</a></li>
                            <li><a href="#">TV</a></li>
                            <li><a href="#">GAMES</a></li>
                            <li><a href="#">COLLECTIBLES</a></li>
                            <li><a href="#">VIDEOS</a></li>
                            <li><a href="#">FANS</a></li>
                            <li><a href="#">NEWS</a></li>
                            <li><a href="#">SHOP</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

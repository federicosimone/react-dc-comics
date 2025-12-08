import style from "./Footer.module.css"

function Footer() {
    return (
        <>
            <div className={style.background}>
                <div className={style.icone}>
                    Icone varie
                </div>
            </div>

            <div className={style.graybackground}>
                <div className={style.boxed}>
                    <div className={style.liste}>
                        liste
                    </div>
                    <div className={style.logodc}>
                        Immagine DC in trasparenza
                    </div>
                </div>
            </div>
            <div>FollowUs</div>

        </>
    )
}
export default Footer
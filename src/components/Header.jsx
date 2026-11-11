import { useState } from "react"

const Header = () => {
    const [open, setOpen] = useState(false)
    const close = () => setOpen(false)

    return (
        <header className="header">
            <div className="container header__inner">
                <a href="#top" className="logo" onClick={close}>
                    CS<span>2</span>
                </a>

                <button
                    className={open ? "burger burger--open" : "burger"}
                    onClick={() => setOpen(!open)}
                    aria-label="Menu"
                >
                    <i></i>
                    <i></i>
                    <i></i>
                </button>

                <nav className={open ? "nav nav--open" : "nav"}>
                    <a href="#top" onClick={close}>Home</a>
                    <a href="#weapons" onClick={close}>Weapons</a>
                    <a href="#maps" onClick={close}>Maps</a>
                    <a href="#footer" onClick={close}>Contacts</a>
                </nav>
            </div>
        </header>
    )
}

export default Header
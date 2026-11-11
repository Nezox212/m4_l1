const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="container footer__inner">
                <div>
                    <p className="footer__logo">CS<span>2</span> </p>
                    <p>Fan project. Not affiliated with Valve.</p>
                </div>
                <div className="footer__right">
                    <a href="#top" className="up">Back to top</a>
                    <p>© {new Date().getFullYear()}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
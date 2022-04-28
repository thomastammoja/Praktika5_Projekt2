function Menu() {
    return (
        <div className="App">
            <div><h4>Praktika 5 (Projekt 2)</h4></div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">

                    <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="container navbar-nav mr-auto">
                            <a href='/'>Avaleht</a>
                        </ul>
                    </div>
                </nav>
            </header>
            <div className="container" id="navbarSupportedContent">
                <div className="row">
                    <div className="col-md-12">
                        <a className="nav-link" href="/" style={{ color: "white" }}>Avaleht</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
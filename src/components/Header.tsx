import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";


export default function Header(){
    return        <nav className="navbar navbar-expand-lg fixed-top" >
        <div className="container">
            <a className="navbar-brand" href="#">
                <img
                    id="MDB-logo"
                    src="https://mdbcdn.b-cdn.net/wp-content/uploads/2018/06/logo-mdb-jquery-small.png"
                    alt="MDB Logo"
                    draggable="false"
                    height="30"
                />
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-3">
                    <li className="nav-item">
                        <a className="nav-link active d-flex align-items-center" aria-current="page" href="#">
                            <FontAwesomeIcon icon={faBars} className="me-2" />
                            <i className="fas fa-bars pe-2"></i>Menu
                        </a>
                    </li>
                </ul>
                <ul className="navbar-nav ms-3">
                    <li className="nav-item me-3">
                        <a className="nav-link d-flex align-items-center" href="#!">
                            Demos
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link d-flex align-items-center me-3" href="#!">
                            <i className="fas fa-bookmark pe-2"></i> Components
                        </a>
                    </li>
                </ul>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-3">
                    <li className="nav-item">
                        <a className="nav-link active d-flex align-items-center" aria-current="page" href="#">
                            <i className="fas fa-bars pe-2"></i>Docs
                        </a>
                    </li>
                </ul>
                <ul className="navbar-nav ms-3">
                    <li className="nav-item me-3">
                        <a className="nav-link d-flex align-items-center" href="#!">
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link d-flex align-items-center me-3" href="#!">
                            <i className="fas fa-bookmark pe-2"></i> Buy now
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}
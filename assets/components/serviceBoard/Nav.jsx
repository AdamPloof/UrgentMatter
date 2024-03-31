import React from "react";

function dropdowMenu(title, items) {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {title}
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </li>

    );
}

export default function Nav(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary service-board-nav">
            <div className="container-fluid">
                <div className="nav-left">
                    <span className="navbar-brand pb-0 h1 me-5">UrgentMatter <span className="text-muted">- Farewell Center</span></span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#serviceBoardNav" aria-controls="serviceBoardNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="serviceBoardNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Your work</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Filters</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Dashboards</a>
                            </li>
                            {dropdowMenu('People', [])}
                            <li className="nav-item">
                                <a className="nav-link" href="#">Apps</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-btn btn btn-info" href="#">Create</a>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="nav-right">
                    <span>JBergeron</span>
                </div>
            </div>
        </nav>
    );
}

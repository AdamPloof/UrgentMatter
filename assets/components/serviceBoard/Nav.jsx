import React, { useContext } from "react";
import { ModeContext } from "../ModeContext";
import { 
    SERVICE_BOARD,
    SERVICE_BOARD_DEMO,
    LOGIN,
    LOGOUT,
    AGENTS
} from "../../includes/paths";
import { MODE } from "../../includes/consts";

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

function demoBadge() {
    return (
        <div className="nav-demo-badge me-3">
            Demo
        </div>
    );
}

function userInfo(username) {
    if (!username) {
        return (
            <div className="log-link">
                <a className="nav-link" href={LOGIN}>Login</a>
            </div>
        );
    }

    return (
        <React.Fragment>
            <div className="user-info d-flex flex-row pe-3 justify-content-center align-items-center">
                <div className="user-avatar pe-2">
                    <img heigh="30" width="30" src={`${AGENTS}/jbergeron.jpg`} alt="Agent avatar" />
                </div>
                <div className="username">
                    {username}
                </div>
            </div>
            <div className="log-link">
                <a className="nav-link" href={LOGOUT}>Logout</a>
            </div>
        </React.Fragment>
    );
}

export default function Nav(props) {
    const mode = useContext(ModeContext);
    const serviceBoardUrl = mode === MODE.DEMO ? SERVICE_BOARD_DEMO : SERVICE_BOARD;

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary service-board-nav">
            <div className="container-fluid">
                <div className="nav-left">
                    <a className="logo-link" href={serviceBoardUrl}>
                        <span className="navbar-brand pb-0 h1 me-5">UrgentMatter <span className="text-muted">- Farewell Center</span></span>
                    </a>
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
                <div className="nav-right pe-3">
                    {mode === MODE.DEMO ? demoBadge() : null}
                    {userInfo(props.username)}
                </div>
            </div>
        </nav>
    );
}

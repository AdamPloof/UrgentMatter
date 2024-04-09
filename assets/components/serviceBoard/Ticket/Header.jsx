import React, { useContext } from "react";
import { ModeContext } from "../../ModeContext";
import { ticketKey, ticketType } from "../../../includes/utils";
import { 
    SERVICE_BOARD,
    SERVICE_BOARD_DEMO,
    TICKET_DETAIL,
    ICONS
} from "../../../includes/paths";
import { MODE } from "../../../includes/consts";

export default function Header(props) {
    const mode = useContext(ModeContext);
    const serviceBoardUrl = mode === MODE.DEMO ? SERVICE_BOARD_DEMO : SERVICE_BOARD;
    if (!props.ticket) {
        // TODO: return loader
        return;
    }

    return (
        <div className="ticket-element ticket-element-borderless">
            <div className="ticket-nav">
                {headerNav(props.ticket.id, serviceBoardUrl, props.hasPrev, props.hasNext)}
            </div>
            <div className="ticket-title pt-2 pb-2">
                <h2>{props.ticket.subject}</h2>
            </div>
            <div className="ticket-options">
                {ticketOptions()}
            </div>
        </div>
    );
}

function headerNav(ticketId, serviceBoardUrl, hasPrev, hasNext) {
    return (
        <React.Fragment>
            <div className="nav-back">
                <a href={serviceBoardUrl} className="ps-2">
                    Back
                </a>
            </div>
            <div className="ticket-key">
                <div className="key-left me-2">
                    {ticketType()}
                </div>
                <div className="key-right">
                    {ticketKey(ticketId)}
                </div>
            </div>
            <div className="prev-next-wrapper">
                {previousBtn(ticketId, hasPrev)}
                {nextBtn(ticketId, hasNext)}
            </div>
        </React.Fragment>
    );
}

function previousBtn(ticketId, hasPrev) {
    if (!hasPrev) {
        return (
            <a href="#" className="prev-btn disabled"></a>
        );
    } else {
        return (
            <a href={`${TICKET_DETAIL}/${ticketId - 1}`} className="prev-btn"></a>
        );
    }
}

function nextBtn(ticketId, hasNext) {
    if (!hasNext) {
        return (
            <a href="#" className="next-btn disabled"></a>
        );
    } else {
        return (
            <a href={`${TICKET_DETAIL}/${ticketId + 1}`} className="next-btn"></a>
        );
    }
}

function ticketOptions() {
    return (
        <React.Fragment>
            <button className="btn btn-outline-secondary">
                <img className="pe-2" src={`${ICONS}/icon_fast_delete.svg`} alt="Fast delete" />
                Stash
            </button>
                <div className="dropdown">
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img className="pe-2" src={`${ICONS}/icon_break_link.svg`} alt="Break link" />
                        Not my problem
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
                <div className="dropdown">
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Create
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            <button className="btn btn-outline-secondary">...</button>
        </React.Fragment>
    );
}

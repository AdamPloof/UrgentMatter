import React, { useContext } from "react";
import { ModeContext } from "../../ModeContext";
import { ticketKey, ticketType } from "../../../includes/utils";
import { 
    SERVICE_BOARD,
    SERVICE_BOARD_DEMO,
    TICKET_DETAIL,
    ICONS,
    EASTER_EGGS
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
                {ticketOptions(props)}
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

function ticketOptions(props) {
    return (
        <React.Fragment>
            <button 
                className="btn btn-outline-secondary"
                onClick={() => {
                    stash();
                }}
            >
                <img className="pe-2" src={`${ICONS}/icon_fast_delete.svg`} alt="Fast delete" />
                Stash
            </button>
                <div className="dropdown">
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img className="pe-2" src={`${ICONS}/icon_break_link.svg`} alt="Break link" />
                        Not my problem
                    </button>
                    <ul className="dropdown-menu">
                        <li><a
                            className="dropdown-item"
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                props.setEasterEggTitle('It never is');
                                props.setEasterEggContent(problemThem);
                                props.setShowEasterEgg(true);
                            }}
                        >Someone else's</a></li>
                        <li><a
                            className="dropdown-item"
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                props.setEasterEggTitle('It usually is');
                                props.setEasterEggContent(problemBoss);
                                props.setShowEasterEgg(true);
                            }}
                        >The boss</a></li>
                        <li><a
                            className="dropdown-item"
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                props.setEasterEggTitle('Ok, I\'ll own it this time');
                                props.setEasterEggContent(problemMe);
                                props.setShowEasterEgg(true);
                            }}
                        >Actually, that one was me</a></li>
                    </ul>
                </div>
                <div className="dropdown">
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Create
                    </button>
                    <ul className="dropdown-menu">
                        <li><a
                            className="dropdown-item"
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                props.setEasterEggTitle('What English word has three consecutive double letters?');
                                props.setEasterEggContent(riddle);
                                props.setShowEasterEgg(true);
                            }}
                        >Riddle</a></li>
                        <li><a
                            className="dropdown-item"
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                props.setEasterEggTitle('It was like that when I got here');
                                props.setEasterEggContent(excuse);
                                props.setShowEasterEgg(true);
                            }}
                        >Excuse</a></li>
                        <li><a
                            className="dropdown-item"
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                props.setEasterEggTitle('Every time I\'m in the kitchen, you in the kitchen.');
                                props.setEasterEggContent(complaint);
                                props.setShowEasterEgg(true);
                            }}
                        >Complaint</a></li>
                    </ul>
                </div>
            <button 
                className="btn btn-outline-secondary"
                onClick={(e) => {
                    e.preventDefault();
                    props.setEasterEggTitle('Optional');
                    props.setEasterEggContent(outOfOptions);
                    props.setShowEasterEgg(true);
                }}
            >...</button>
        </React.Fragment>
    );
}

function stash() {
    const shift = [
        // keyframes
        { transform: "translateX(0px)" },
        { transform: "translateX(-2300px)" },
    ];
    const timing= {
        // timing options
        duration: 5000,
        iterations: 1,
    };
    const app = document.getElementById('ticket-component');
    app.animate(shift, timing);   
}

const problemThem = (
    <div className="easter-egg-content">
        <img width="600" src={`${EASTER_EGGS}/calvin_1.jpg`} alt="Calvin and Hobbes cartoon" />
    </div>
);

const problemBoss = (
    <div className="easter-egg-content">
        <img width="600" src={`${EASTER_EGGS}/calvin_2.jpg`} alt="Calvin and Hobbes cartoon" />
    </div>
);

const problemMe = (
    <div className="easter-egg-content">
        <img width="600" src={`${EASTER_EGGS}/calvin_3.jpg`} alt="Calvin and Hobbes cartoon" />
    </div>
);

const riddle = (
    <div className="easter-egg-content">
        <img width="400" src={`${EASTER_EGGS}/magic_confrontation.jpg`} alt="epic confrontation magic card" />
    </div>
);

const excuse = (
    <div className="easter-egg-content">
        <img width="400" src={`${EASTER_EGGS}/magic_savage.jpg`} alt="epic confrontation magic card" />
    </div>
);

const complaint = (
    <div className="easter-egg-content">
        <img width="400" src={`${EASTER_EGGS}/magic_punch.jpg`} alt="epic confrontation magic card" />
    </div>
);

const outOfOptions = (
    <div className="easter-egg-content">
        <p>You've run out of options.</p>
    </div>
);

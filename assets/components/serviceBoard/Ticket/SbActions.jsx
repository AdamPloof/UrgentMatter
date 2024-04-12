import React from "react";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import StatusSelect from "../Queue/StatusSelect";
import { TICKET_STATUS } from "../../../includes/consts";
import { ICONS } from "../../../includes/paths";

export default function SbActions(props) {
    return (
        <div className="sb-actions ticket-element ticket-element-borderless d-flex flex-column">
            <div className="sb-actions-top pb-3">
                {widgetTray(props)}
            </div>
            <div className="sb-action-bottom d-flex flex-row justify-content-start">
                <div className="sb-action-status me-3">
                    <StatusSelect status={randStatus()} />
                </div>
                <div className="sb-action-actions">
                    <div className="dropdown">
                        <button className="btn btn-outline-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img height="30" width="30" className="actions-btn-icon pe-2" src={`${ICONS}/widget_warp_whistle.svg`} alt="Break link" />
                            Warp whistle
                        </button>
                        <ul className="dropdown-menu">
                            <li><a
                                className="dropdown-item"
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    warpLevel3();
                                }}
                            >Level 3</a></li>
                            <li><a
                                className="dropdown-item"
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    warpPenultimate();
                                }}
                            >Penultimate level</a></li>
                            <li><a
                                className="dropdown-item"
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    props.setEasterEggTitle('It is time for...');
                                    props.setEasterEggContent(warpBoss);
                                    props.setShowEasterEgg(true);
                                }}
                            >Boss fight</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

function widgetTray(props) {
    return (
        <div className="sb-actions-widget-tray d-flex flex-row justify-content-end">
            <div className="sb-widget">
                <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id="mustache-tooltip">Pretend to be a different tech</Tooltip>}
                >
                    <a href="#">
                        <img height="25" width="25" src={`${ICONS}/widget_mustache.svg`} alt="Disguise action" />
                    </a>
                </OverlayTrigger>
            </div>
            <div className="sb-widget">
                <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id="atlas-tooltip">Shoulder the burden</Tooltip>}
                >
                    <a href="#">
                        <img height="25" width="25" src={`${ICONS}/widget_atlas.svg`} alt="Shoulder the burden action" />
                    </a>
                </OverlayTrigger>
            </div>
            <div className="sb-widget">
                <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id="fingers-crossed-tooltip">Promise to get to this one soon</Tooltip>}
                >
                    <a href="#">
                        <img height="25" width="25" src={`${ICONS}/widget_fingers_crossed.svg`} alt="All done (lol) action" />
                    </a>
                </OverlayTrigger>
            </div>
            <div className="sb-widget">
                <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id="fish-tooltip">Fish</Tooltip>}
                >
                    <a href="#">
                        <img height="25" width="25" src={`${ICONS}/widget_salmon.svg`} alt="Go fish action" />
                    </a>
                </OverlayTrigger>
            </div>
            <div className="sb-widget">
            <div className="dropdown">
                <a className="more-option dropdown-toggle" href="#" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <strong>...</strong>
                </a>
                <ul className="dropdown-menu">
                    <li><a
                        className="dropdown-item"
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            props.setEasterEggTitle('Printerrrrrrrooorr');
                            props.setEasterEggContent(print);
                            props.setShowEasterEgg(true);
                        }}
                    >Print</a></li>
                    <li><a
                        className="dropdown-item"
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            props.setEasterEggTitle('Art Vandalay');
                            props.setEasterEggContent(exportEgg);
                            props.setShowEasterEgg(true);
                        }}
                    >Export</a></li>
                    <li><a
                        className="dropdown-item"
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            props.setEasterEggTitle('There\'s only one Notary Public \'round here');
                            props.setEasterEggContent(notarize);
                            props.setShowEasterEgg(true);
                        }}
                    >Notarize</a></li>
                </ul>
                    </div>
            </div>
        </div>
    );
}

function warpLevel3() {
    const spin = [
        { transform: "rotate(0) scale(1)" },
        { transform: "rotate(360deg) scale(0)" },
    ];
    const timing = {
        duration: 2000,
        iterations: 1,
    };
    const app = document.getElementById('ticket-component');
    app.animate(spin, timing);
}

function warpPenultimate() {
    const shift = [
        // keyframes
        { transform: "translateY(0px)" },
        { transform: "translateY(-300px)" },
        { transform: "translateY(-200px)" },
        { transform: "translateY(400px) translateX(-300px)" },
        { transform: "translateY(-100px)" },
        { transform: "translateY(-500px) translateX(-600px)" },
        { transform: "translateY(0px)" },
        { transform: "translateY(300px) translateX(700px)" },
        { transform: "translateY(-400px) translateX(-300px)" },
        { transform: "translateY(100px)" },
        { transform: "translateY(-500px) translateX(600px)" },
        { transform: "translateY(0px)" },
        { transform: "translateY(-300px) translateX(-700px)" },
    ];
    const timing= {
        // timing options
        duration: 3500,
        iterations: 1,
    };
    const app = document.getElementById('ticket-component');
    app.animate(shift, timing);
}

const warpBoss = (
    <div className="easter-egg-content">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/_bNNHYsr5_Y?si=2zKgEozduAPC1gyi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
);

function randStatus() {
    const eligbleStatuses = Object.keys(TICKET_STATUS).filter(s => {
        return s != 'COMPLETE' && s != 'CANCELLED';
    })
    const status = eligbleStatuses[Math.floor(Math.random() * eligbleStatuses.length)];

    return status;
}

const print = (
    <div className="easter-egg-content">
        <div className="alert alert-danger">
            <p className="lead">Print Erorr!</p>
            <p>Sorry, we can't complete your request.</p>
            <h4>Error details</h4>
            <pre>PC LOAD LETTER</pre>
            <p>Print spooler has become unspooled please see vendor for interminable wait for on-site service.</p>
            <small>Gonna be at least two, three weeks before they can get the part. And that's if they order em today. Which they won't.</small>
        </div>
    </div>
);

const exportEgg = (
    <div className="easter-egg-content">
        <div className="alert alert-info">
            <p className="lead">:(</p>
            <p>Sorry, we just can't</p>
            <h4>An unexpected error has occurred</h4>
            <pre>
                0x00000001 	THERE IS A BSOD MISMATCH BETWEEN YOUR MEMCACHE <br/>
                RESORT LOADOUT AND APC INDEX DRIVER DEST QUANDRY.
            </pre>
            <p>Don't bother trying to figure this one out. You're not going to get anywhere.</p>
        </div>
    </div>
);

const notarize = (
    <div className="easter-egg-content">
        <div className="alert alert-warning">
            <p className="lead">Teams has been forcefully quit</p>
            <p>Not a very good team player now is that?</p>
            <h4>Reinstall, reboot and home makeover required</h4>
            <pre>
                Hello, my name is Filamina. I'm a Microsoft consumer relations technical support<br/>
                underwriter specialist and I get paid absolutely nothing for<br/>
                this work but I'll be happy to help you today.<br/>
                <br/>
                It sounds like you are experiencing an issue with a Teams desktop application.<br/>
                <br/>
                Here are some troubleshooting steps that may help:<br/>
            </pre>
            <ul>
                <li>Reinstall Teams 3-5 times</li>
                <li>Reinstall Teams a few more times</li>
                <li>Switch to Teams classic, then back to New Teams and then back to New New Teams</li>
                <li>Switch to Slack</li>
            </ul>
        </div>
    </div>
);

import React from "react";
import StatusSelect from "../Queue/StatusSelect";
import { TICKET_STATUS } from "../../../includes/consts";
import { ICONS } from "../../../includes/paths";

export default function SbActions(props) {
    return (
        <div className="sb-actions ticket-element ticket-element-borderless d-flex flex-column">
            <div className="sb-actions-top pb-3">
                {widgetTray()}
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
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

function randStatus() {
    const eligbleStatuses = Object.keys(TICKET_STATUS).filter(s => {
        return s != 'COMPLETE' && s != 'CANCELLED';
    })
    const status = eligbleStatuses[Math.floor(Math.random() * eligbleStatuses.length)];

    return status;
}

function widgetTray() {
    return (
        <div className="sb-actions-widget-tray d-flex flex-row justify-content-end">
            <div className="sb-widget">
                <a href="#">
                    <img height="25" width="25" src={`${ICONS}/widget_mustache.svg`} alt="Disguise action" />
                </a>
            </div>
            <div className="sb-widget">
                <a href="#">
                    <img height="25" width="25" src={`${ICONS}/widget_atlas.svg`} alt="Shoulder the burden action" />
                </a>
            </div>
            <div className="sb-widget">
                <a href="#">
                    <img height="25" width="25" src={`${ICONS}/widget_fingers_crossed.svg`} alt="All done (lol) action" />
                </a>
            </div>
            <div className="sb-widget">
                <a href="#">
                    <img height="25" width="25" src={`${ICONS}/widget_salmon.svg`} alt="Go fish action" />
                </a>
            </div>
            <div className="sb-widget">
            <div className="dropdown">
                <a className="more-option dropdown-toggle" href="#" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <strong>...</strong>
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
                    </div>
            </div>
        </div>
    );
}

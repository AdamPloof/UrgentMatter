import React, { useContext } from "react";
import { ICONS, SERVICE_BOARD, SERVICE_BOARD_DEMO } from "../../includes/paths";
import { ModeContext } from "../ModeContext";
import { MODE } from "../../includes/consts";

export default function Sidebar(props) {
    const mode = useContext(ModeContext);
    const serviceBoardUrl = mode === MODE.DEMO ? SERVICE_BOARD_DEMO : SERVICE_BOARD;

    return (
        <div className="service-board-sidebar">
            <div className="sb-header">
                <div className="header-title">
                    <a href={serviceBoardUrl}>
                        <h3>IT salute desk</h3>
                    </a>
                </div>
                <div className="header-body">
                    <div className="header-logo">
                        <img width="40" src={`${ICONS}/logo_death_star.png`} alt="Death start logo"></img>
                    </div>
                    <div className="header-description">
                        <a href={serviceBoardUrl}>
                            <span>Farewell project</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="sb-section">
                <div className="section-title">
                    <h5>Queues</h5>
                </div>
                <div className="section-body">
                    <div className="sb-item">
                        <a className="sb-link" href="#">All open</a>
                    </div>
                    <div className="sb-item active">
                        <a className="sb-link" href="#">Assigned to me</a>
                    </div>
                    <div className="sb-item">
                        <a className="sb-link" href="#">Unassigned</a>
                    </div>
                    <div className="sb-item">
                        <a className="sb-link" href="#">Ignore forever</a>
                    </div>
                    <div className="sb-item">
                        <a className="sb-link" href="#">All closed</a>
                    </div>
                </div>
            </div>
            <div className="sb-section">
                <div className="section-title">
                    <h5>Knowledge</h5>
                </div>
                <div className="section-body">
                    <div className="sb-item">
                        <div className="sb-icon">
                            <img src={ICONS + '/icon_knowledge_base.svg'} alt="Knowledge base icon" />
                        </div>
                        <a className="sb-link" href="#">Knowledge base</a>
                    </div>
                    <div className="sb-item">
                        <div className="sb-icon">
                            <img src={ICONS + '/icon_reports.svg'} alt="Reports icon" />
                        </div>
                        <a className="sb-link" href="#">Reports</a>
                    </div>
                </div>
            </div>
            <div className="sb-section">
                <div className="section-title">
                    <h5>Channels & People</h5>
                </div>
                <div className="section-body">
                    <div className="sb-item">
                        <div className="sb-icon">
                            <img src={ICONS + '/icon_channels.svg'} alt="Channels icon" />
                        </div>
                        <a className="sb-link" href="#">Channels</a>
                    </div>
                    <div className="sb-item">
                        <div className="sb-icon">
                            <img src={ICONS + '/icon_customers.svg'} alt="Customers icon" />
                        </div>
                        <a className="sb-link" href="#">Customers</a>
                    </div>
                </div>
            </div>
            <div className="sb-section">
                <div className="section-title">
                    <h5>Shortcuts</h5>
                </div>
                <div className="section-body">

                </div>
            </div>
        </div>
    );
}
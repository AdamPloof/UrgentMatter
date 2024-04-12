import React, { useContext, useState, useEffect } from "react";
import { ICONS, SERVICE_BOARD, SERVICE_BOARD_DEMO } from "../../includes/paths";
import { ModeContext } from "../ModeContext";
import { MODE } from "../../includes/consts";
import { randInt } from "../../includes/utils";

export default function Sidebar(props) {
    const mode = useContext(ModeContext);
    const serviceBoardUrl = mode === MODE.DEMO ? SERVICE_BOARD_DEMO : SERVICE_BOARD;

    const [openCount, setOpenCount] = useState(41);
    const [assignedCount, setAssignedCount] = useState(props.ticketCount);
    const [unassignedCount, setUnassignedCount] = useState(10);
    const [ignoreCount, setIgnoreCount] = useState(15);
    const [closedCount, setClosedCount] = useState(7);

    const coinToss = () => {
        const coin = Math.floor(Math.random() * 2);
        return coin === 1;
    };

    useEffect(() => {
        const timer = setInterval(() => {
            if (coinToss()) {
                setOpenCount((openCount) => {
                    return openCount + randInt(16);
                });
            }

            if (coinToss()) {
                setAssignedCount((assignedCount) => {
                    return assignedCount + randInt(12);
                });
            }

            if (coinToss()) {
                setUnassignedCount((unassignedCount) => {
                    return unassignedCount + randInt(6);
                });
            }

            if (coinToss()) {
                setIgnoreCount((ignoreCount) => {
                    return ignoreCount + randInt(9);
                });
            }

            if (coinToss()) {
                setClosedCount((closedCount) => {
                    return closedCount - randInt(3);
                });
            }
        }, 4000);
    }, []);

    const badgeClass = (count) => {
        let badgeClass = 'badge rounded-pill';
        if (count < 25) {
            return badgeClass;
        } else if (count < 50) {
            badgeClass += ' text-bg-info';
        } else if (count < 75) {
            badgeClass += ' text-bg-warning';
        } else if (count >= 75) {
            badgeClass += ' text-bg-danger';
        }

        return badgeClass;
    }

    const queueClass = (queueName) => {
        if (queueName == props.activeQueue) {
            return "sb-item justify-content-between active";
        } else {
            return "sb-item justify-content-between";
        }
    }

    const handleChangeTickets = (queueName) => {
        if (queueName == 'assigned' && props.activeQueue != 'assigned') {
            props.loadRealTickets();
        } else if (queueName != props.activeQueue) {
            props.loadFauxTickets();
        }
    };

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
                    <div className={queueClass('open')}>
                        <div className="sb-item-left">
                            <a
                                className="sb-link"
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    props.setActiveQueue('open');
                                    if (props.linkMode) {
                                        window.location = serviceBoardUrl;
                                    }
                                    handleChangeTickets('open');
                                }}
                            >All open</a>
                        </div>
                        <div className="sb-item-right">
                            <span className={badgeClass(openCount)}>{openCount}</span>
                        </div>
                    </div>
                    <div className={queueClass('assigned')}>
                        <div className="sb-item-left">
                            <a
                                className="sb-link"
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    props.setActiveQueue('assigned');
                                    if (props.linkMode) {
                                        window.location = serviceBoardUrl;
                                    }
                                    handleChangeTickets('assigned');
                                }}
                            >Assigned to me</a>
                        </div>
                        <div className="sb-item-right">
                            <span className={badgeClass(assignedCount)}>{assignedCount}</span>
                        </div>
                    </div>
                    <div className={queueClass('unassigned')}>
                        <div className="sb-item-left">
                            <a
                                className="sb-link"
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    props.setActiveQueue('unassigned');
                                    if (props.linkMode) {
                                        window.location = serviceBoardUrl;
                                    }
                                    handleChangeTickets('unassigned');
                                }}
                            >Unassigned</a>
                        </div>
                        <div className="sb-item-right">
                            <span className={badgeClass(unassignedCount)}>{unassignedCount}</span>
                        </div>
                    </div>
                    <div className={queueClass('ignore')}>
                        <div className="sb-item-left">
                            <a
                                className="sb-link"
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    props.setActiveQueue('ignore');
                                    if (props.linkMode) {
                                        window.location = serviceBoardUrl;
                                    }
                                    handleChangeTickets('ignore');
                                }}
                            >Ignore forever</a>
                        </div>
                        <div className="sb-item-right">
                            <span className={badgeClass(ignoreCount)}>{ignoreCount}</span>
                        </div>
                    </div>
                    <div className={queueClass('closed')}>
                        <div className="sb-item-left">
                            <a
                                className="sb-link"
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    props.setActiveQueue('closed');
                                    if (props.linkMode) {
                                        window.location = serviceBoardUrl;
                                    }
                                    handleChangeTickets('closed');
                                }}
                            >All closed</a>
                        </div>
                        <div className="sb-item-right">
                            <span className={badgeClass(closedCount)}>{closedCount}</span>
                        </div>
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
                        <a
                            className="sb-link"
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                props.setEasterEggTitle('The more you know');
                                props.setEasterEggContent(knowledgeBase);
                                props.setShowEasterEgg(true);
                            }}
                        >Knowledge base</a>
                    </div>
                    <div className="sb-item">
                        <div className="sb-icon">
                            <img src={ICONS + '/icon_reports.svg'} alt="Reports icon" />
                        </div>
                        <a
                            className="sb-link"
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                props.setEasterEggTitle('Gonna need that on my desk by 3 O\'Clock');
                                props.setEasterEggContent(reports);
                                props.setShowEasterEgg(true);
                            }}
                        >Reports</a>
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
                        <a
                            className="sb-link"
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                props.setEasterEggTitle('ABC, NBC, CBS, that\'s all we had');
                                props.setEasterEggContent(channels);
                                props.setShowEasterEgg(true);
                            }}
                        >Channels</a>
                    </div>
                    <div className="sb-item">
                        <div className="sb-icon">
                            <img src={ICONS + '/icon_customers.svg'} alt="Customers icon" />
                        </div>
                        <a
                            className="sb-link"
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                props.setEasterEggTitle('Always put the customer 4th, right behind safety');
                                props.setEasterEggContent(customers);
                                props.setShowEasterEgg(true);
                            }}
                        >Customers</a>
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

const knowledgeBase = (
    <div className="easter-egg-contenter">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/0qcED35LL8I?si=EWnGbnQeBJF6aOvq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
);

const reports = (
    <div className="easter-egg-contenter">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/AZMSAzZ76EU?si=2EcVNo9RTQXFeE7P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
);

const channels = (
    <div className="easter-egg-contenter">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/6i-nMWgBUp0?si=VevS2HHDVVDAYivD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
);

const customers = (
    <div className="easter-egg-contenter">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/wX9Sc88qreg?si=5coNlCxWbs_MP3qy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
);

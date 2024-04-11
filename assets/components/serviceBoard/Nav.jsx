import React, { useContext } from "react";
import { ModeContext } from "../ModeContext";
import { 
    SERVICE_BOARD,
    SERVICE_BOARD_DEMO,
    LOGIN,
    LOGOUT,
    AGENTS,
    EASTER_EGGS
} from "../../includes/paths";
import { MODE } from "../../includes/consts";

function dropdowMenu(title, items) {
    let itemCnt = 0;
    return (
        <li key={`nav_item_${title}`} className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {title}
            </a>
            <ul className="dropdown-menu">
                {items.map(item => {
                    itemCnt++;

                    if (item.divider) {
                        return (
                            <li key={`nav_li_${title}_${itemCnt}`}><hr className="dropdown-divider" /></li>
                        );
                    }

                    return (
                        <li key={`nav_li_${title}_${itemCnt}`}>
                            <a
                                className="dropdown-item"
                                href="#"
                                onClick={item.click}
                            >
                                {item.description}
                            </a>
                        </li>                        
                    );
                })}
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

// Nav - Your work
const recentWork = (
    <div className="easter-egg-content">
        <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/oby_0RrPC-k?si=Kd5G_uQvQO1TdW09"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
        ></iframe>
    </div>
);

const futureWork = (
    <div className="easter-egg-content">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/terB-PBT3c4?si=3g5kTBshjzdSy-3a" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
);

const computerWork = (
    <div className="easter-egg-contenter">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/RFHgMdHA44g?si=lbR_ebBlV5qR1sUM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
);

const fireSafetyWork = (
    <div className="easter-egg-content">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/f5NRGlamFSE?si=_v8km7-S4bA8SVSF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
);

// Nav - Projects
const itSupportProj = (
    <div className="easter-egg-content">
        <p>
        <a target="_blank" href="https://www.theonion.com/man-wishes-computer-could-do-thing-it-already-can-do-1819574776">RICHMOND, VA</a>—Though confirming he is mostly satisfied with his newly acquired Mac desktop, local man Peter Selwyn said Wednesday he is disappointed that it is unable to do something that in fact every modern computer, including his own, is already capable of doing...
        </p>
    </div>
);

const manhattanProj = (
    <div className="easter-egg-content">
        <p>
            <a target="_blank" href="https://www.theonion.com/man-still-thinks-of-computer-virus-as-cartoon-worm-that-1851392076">PLANTATION, FL</a>—Despite being a grown-ass adult in the year 2024, local resident Stu Jeffries told reporters Tuesday that he still thinks of a computer virus as a cartoon worm that bites through your screen...
        </p>
    </div>
);

const alanParsonsProj = (
    <div className="easter-egg-content">
        <p>
            <a href="https://www.theonion.com/report-system-update-means-computer-going-to-have-to-g-1846545298" target="_blank">SALEM, OR</a>—Promising that it would only take a few moments so don’t get too upset, sources confirmed Friday that your system update means the computer is going to have to go away for a little while. Yes computer is going bye-bye, but sources promised computer will come back...
        </p>
    </div>
);

// Nav - Filters
const allWorkFilt = (
    <div className="easter-egg-content">
        <h5>Name that amusement park!</h5>
        <p>
            Riders go past a statue of Henry defecating, through a kennel, and past bones and piles of feces. There are also speakers throughout the ride which make farting sounds, as well as barks.
        </p>
        <p><a href="https://en.wikipedia.org/wiki/Hundeprutterutchebane" target="_blank">The answer will astound you!</a></p>
    </div>
);

const evenMoreWorkFilt = (
    <div className="easter-egg-content">
        <p>Was this really real? This is some <a href="https://en.wikipedia.org/wiki/Dancing_plague_of_1518" target="_blank">intersting trivia</a> for OP Jeopardy sessions.</p>
    </div>
);

// Nav - Dashboards
const bogusDashboard = (
    <div className="easter-egg-content">
        <img src={`${EASTER_EGGS}/dashboard_junk.jpg`} alt="Junk dashboard" width="600" />
    </div>
);

const fancyDashboard = (
    <div className="easter-egg-content">
        <img src={`${EASTER_EGGS}/dashboard_fancy.jpg`} alt="Fancy dashboard" width="600" />
    </div>
);

const civicDashboard = (
    <div className="easter-egg-content">
        <img src={`${EASTER_EGGS}/dashboard_civic.jpg`} alt="1999-2000 Civic dashboard" width="600" />
    </div>
);

// Nav - People
const techPeople = (
    <div className="easter-egg-content">
        <img src={`${EASTER_EGGS}/cabin_1.jpg`} alt="Junk dashboard" width="600" />
    </div>
);

const custPeople = (
    <div className="easter-egg-content">
        <img src={`${EASTER_EGGS}/cabin_2.jpg`} alt="Junk dashboard" width="600" />
    </div>
);

const oldPeople = (
    <div className="easter-egg-content">
        <img src={`${EASTER_EGGS}/cabin_3.jpg`} alt="Junk dashboard" width="600" />
    </div>
);

const joePeople = (
    <div className="easter-egg-content">
        <img src={`${EASTER_EGGS}/cabin_4.jpg`} alt="Junk dashboard" width="600" />
    </div>
);

// Nav - Apps
const minesweeperApp = (
    <div className="easter-egg-content">
        <p><a href="https://minesweeper.online/" target="_blank">This thing's</a> freakin' impossible!</p>
    </div>
);

const solitaireApp = (
    <div className="easter-egg-content">
        <p>Beat grandma's <a href="https://www.solitr.com/" target="_blank">high score!</a></p>
    </div>
);

const skiFreeApp = (
    <div className="easter-egg-content">
        <p>Watch out for <a href="https://skifreeonline.com/" target="_blank">the abomidable snow monster</a>!</p>
    </div>
);

export default function Nav(props) {
    const mode = useContext(ModeContext);
    const serviceBoardUrl = mode === MODE.DEMO ? SERVICE_BOARD_DEMO : SERVICE_BOARD;

    const navDropdowns = [
        {
            title: 'Your work',
            items: [
                {
                    description: 'Recent',
                    click: (e) => {
                        e.preventDefault();
                        props.setEasterEggTitle('Recent work');
                        props.setEasterEggContent(recentWork);
                        props.setShowEasterEgg(true);
                    }
                },
                {
                    description: 'Distant past',
                    click: (e) => {
                        e.preventDefault();
                        props.setEasterEggTitle('Give him the stick');
                        props.setEasterEggContent(futureWork);
                        props.setShowEasterEgg(true);
                    }
                },
                {
                    description: 'Computer',
                    click: (e) => {
                        e.preventDefault();
                        props.setEasterEggTitle('Stop all the downloadin\'');
                        props.setEasterEggContent(computerWork);
                        props.setShowEasterEgg(true);
                    }
                },
                {
                    description: 'Fire safety',
                    click: (e) => {
                        e.preventDefault();
                        props.setEasterEggTitle('My god did that smell good');
                        props.setEasterEggContent(fireSafetyWork);
                        props.setShowEasterEgg(true);
                    }
                },
            ]
        },
        {
            title: 'Projects',
            items: [
                {
                    description: 'IT Support',
                    click: (e) => {
                        e.preventDefault();
                        props.setEasterEggTitle('Support group for IT');
                        props.setEasterEggContent(itSupportProj);
                        props.setShowEasterEgg(true);
                    }
                },
                {
                    description: 'Manhattan',
                    click: (e) => {
                        e.preventDefault();
                        props.setEasterEggTitle('Projected project growth is 250%');
                        props.setEasterEggContent(manhattanProj);
                        props.setShowEasterEgg(true);
                    }
                },
                {
                    divider: true
                },
                {
                    description: 'The Alan Parson\'s Project',
                    click: (e) => {
                        e.preventDefault();
                        props.setEasterEggTitle('Freakin\' lasers');
                        props.setEasterEggContent(alanParsonsProj);
                        props.setShowEasterEgg(true);
                    }
                },
            ]
        },
        {
            title: 'Filters',
            items: [
                {
                    description: 'All work',
                    click: (e) => {
                        e.preventDefault();
                        props.setEasterEggTitle('Daily double');
                        props.setEasterEggContent(allWorkFilt);
                        props.setShowEasterEgg(true);
                    }
                },
                {
                    description: 'Even more work',
                    click: (e) => {
                        e.preventDefault();
                        props.setEasterEggTitle('Final Jeopardy');
                        props.setEasterEggContent(evenMoreWorkFilt);
                        props.setShowEasterEgg(true);
                    }
                },
            ]
        },
        {
            title: 'Dashboards',
            items: [
                {
                    description: 'Bogus stats',
                    click: (e) => {
                        e.preventDefault();
                        props.setEasterEggTitle('Can you put this back together before lunch?');
                        props.setEasterEggContent(bogusDashboard);
                        props.setShowEasterEgg(true);
                    }
                },
                {
                    description: 'But why?',
                    click: (e) => {
                        e.preventDefault();
                        props.setEasterEggTitle('But why?');
                        props.setEasterEggContent(fancyDashboard);
                        props.setShowEasterEgg(true);
                    }
                },
                {
                    description: 'Honda Civic',
                    click: (e) => {
                        e.preventDefault();
                        props.setEasterEggTitle('1999-2000 Honda Civic, tricks out real nice');
                        props.setEasterEggContent(civicDashboard);
                        props.setShowEasterEgg(true);
                    }
                },
            ]
        },
        {
            title: 'People',
            items: [
                {
                    description: 'Technicians',
                    click: (e) => {
                        e.preventDefault();
                        props.setEasterEggTitle('Teamwork');
                        props.setEasterEggContent(techPeople);
                        props.setShowEasterEgg(true);
                    }
                },
                {
                    divider: true
                },
                {
                    description: 'Customers',
                    click: (e) => {
                        e.preventDefault();
                        props.setEasterEggTitle('There is no "I" in team');
                        props.setEasterEggContent(custPeople);
                        props.setShowEasterEgg(true);
                    }
                },
                {
                    description: 'Old folks',
                    click: (e) => {
                        e.preventDefault();
                        props.setEasterEggTitle('But there is an "I" in pie.');
                        props.setEasterEggContent(oldPeople);
                        props.setShowEasterEgg(true);
                    }
                },
                {
                    description: 'Joey Joe Joe Jr. Shabadoo',
                    click: (e) => {
                        e.preventDefault();
                        props.setEasterEggTitle('Meat pie. Meat\'s an anagram of team... or something.');
                        props.setEasterEggContent(joePeople);
                        props.setShowEasterEgg(true);
                    }
                },
            ]
        },
        {
            title: 'Apps',
            items: [
                {
                    description: 'Minesweeper',
                    click: (e) => {
                        e.preventDefault();
                        props.setEasterEggTitle('You gotta play by feel');
                        props.setEasterEggContent(minesweeperApp);
                        props.setShowEasterEgg(true);
                    }
                },
                {
                    description: 'Solitaire',
                    click: (e) => {
                        e.preventDefault();
                        props.setEasterEggTitle('Where the real work gets done');
                        props.setEasterEggContent(solitaireApp);
                        props.setShowEasterEgg(true);
                    }
                },
                {
                    description: 'SkiFree',
                    click: (e) => {
                        e.preventDefault();
                        props.setEasterEggTitle('Classic, simply classic');
                        props.setEasterEggContent(skiFreeApp);
                        props.setShowEasterEgg(true);
                    }
                },
            ]
        },
    ];

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
                            {navDropdowns.map(navItem => {
                                return dropdowMenu(navItem.title, navItem.items);
                            })}
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

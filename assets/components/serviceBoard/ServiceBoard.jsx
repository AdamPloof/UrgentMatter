import React, { useState, useEffect, useContext } from "react";
import { fetchData } from "../../includes/utils";
import { 
    FETCH_TICKETS,
    GENERATE_TICKETS
} from "../../includes/paths";
import { MODE } from "../../includes/consts";

import { ModeContext } from "../ModeContext";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import Queue from "./Queue/Queue";
import EasterEggModal from "./EasterEggModal";

export default function ServiceBoard(props) {
    const mode = useContext(ModeContext);
    const [activeQueue, setActiveQueue] = useState('assigned');
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [showEasterEgg, setShowEasterEgg] = useState(false);
    const [easterEggTitle, setEasterEggTitle] = useState('');
    const [easterEggContent, setEasterEggContent] = useState(null);

    useEffect(() => {
        if (mode === MODE.DEMO) {
            fetchFauxTickets();
        } else {
            // Just FYI, if this gets called in demo mode, it'll just
            // return a 401 response
            fetchTickets();
        }
    }, []);

    // TODO: display loader
    const fetchTickets = async () => {
        const url = FETCH_TICKETS;
        try {
            const tickets = await fetchData(url);
            setTickets(tickets);
            setLoading(false);
        } catch (e) {
            setError('Error: could not fetch ticket data');
            console.error(e);
        }
    };

    const fetchFauxTickets = async () => {
        const url = GENERATE_TICKETS + '/20';
        try {
            const fauxTickets = await fetchData(url);
            setTickets(fauxTickets);
            setLoading(false);
        } catch (e) {
            setError('Error: could not fetch ticket data');
            console.error(e);
        }
    };

    const handleCloseEasterEgg = () => {
        setShowEasterEgg(false);
    };

    return (
        <React.Fragment>
            <Nav
                username={props.username}
                setShowEasterEgg={setShowEasterEgg}
                setEasterEggTitle={setEasterEggTitle}
                setEasterEggContent={setEasterEggContent}
            />
            <div className="service-board-layout">
                <Sidebar
                    activeQueue={activeQueue}
                    setActiveQueue={setActiveQueue}
                    ticketCount={tickets.length}
                    setShowEasterEgg={setShowEasterEgg}
                    setEasterEggTitle={setEasterEggTitle}
                    setEasterEggContent={setEasterEggContent}
                    linkMode={false}
                    loadRealTickets={fetchTickets}
                    loadFauxTickets={fetchFauxTickets}
                />
                <Queue
                    activeQueue={activeQueue}
                    tickets={tickets}
                    loading={loading}
                    error={error}
                />
            </div>
            <EasterEggModal
                title={easterEggTitle}
                content={easterEggContent}
                show={showEasterEgg}
                handleClose={handleCloseEasterEgg}
            />
        </React.Fragment>
    );
}

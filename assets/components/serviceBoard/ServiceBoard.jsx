import React, { useState, useEffect } from "react";
import { fetchData } from "../../includes/utils";
import { 
    FETCH_TICKETS,
    GENERATE_TICKETS
} from "../../includes/paths";

import Nav from "./Nav";
import Sidebar from "./Sidebar";
import Queue from "./Queue/Queue";

export default function ServiceBoard(props) {
    const [tickets, setTickets] = useState([]);

    // TODO: once the tickets are fetched, they should just be const
    // probable useRef for these. tickets is the only thing that really needs
    // to have changeable state
    const [fauxTickets, setFauxTickets] = useState([]);
    const [loadingTickets, setLoadingTickets] = useState(true);
    const [loadingFauxTickets, setLoadingFauxTickets] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchTickets();
        fetchFauxTickets();
    }, []);

    // TODO: display loader
    const fetchTickets = async () => {
        const url = FETCH_TICKETS;
        try {
            const tickets = await fetchData(url);
            setTickets(tickets);
            setLoadingTickets(false);
        } catch (e) {
            setError('Error: could not fetch ticket data');
            console.error(e);
        }
    };

    const fetchFauxTickets = async () => {
        const url = GENERATE_TICKETS + '/20';
        try {
            const fauxTickets = await fetchData(url);
            setFauxTickets(fauxTickets);
            setLoadingFauxTickets(false);
        } catch (e) {
            setError('Error: could not fetch ticket data');
            console.error(e);
        }
    };

    return (
        <React.Fragment>
            <Nav username={props.username} />
            <div className="service-board-layout">
                <Sidebar />
                <Queue
                    tickets={tickets}
                    loading={loadingTickets}
                    error={error}
                />
            </div>
        </React.Fragment>
    );
}

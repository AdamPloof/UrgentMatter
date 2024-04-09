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

export default function ServiceBoard(props) {
    const mode = useContext(ModeContext);
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    return (
        <React.Fragment>
            <Nav username={props.username} />
            <div className="service-board-layout">
                <Sidebar />
                <Queue
                    tickets={tickets}
                    loading={loading}
                    error={error}
                />
            </div>
        </React.Fragment>
    );
}

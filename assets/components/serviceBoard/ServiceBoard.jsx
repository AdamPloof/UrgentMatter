import React, { useState, useEffect } from "react";
import { 
    FETCH_TICKET,
    FETCH_TICKETS,
    GENERATE_TICKETS
} from "../../includes/paths";

export default function ServiceBoard() {
    const [tickets, setTickets] = useState([]);
    const [fauxTickets, setFauxTickets] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchTickets();
        fetchFauxTickets();
    }, []);

    const fetchTickets = async () => {
        const url = FETCH_TICKETS;
        try {
            const tickets = await fetchData(url);
            setTickets(tickets);
        } catch (e) {
            console.error(e);
        }
    };

    const fetchFauxTickets = async () => {
        const url = GENERATE_TICKETS + '/20';
        try {
            const fauxTickets = await fetchData(url);
            setFauxTickets(fauxTickets);
        } catch (e) {
            console.error(e);
        }
    };

    const fetchData = async (url) => {
        setLoading(true);
        const params = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        };
        let data = null;
        let err = null;
        try {
            const res = await fetch(url, params);
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}, url: ${url}`);
            }

            data = await res.json();
        } catch (e) {
            err = e;
        } finally {
            setLoading(false);

            if (data) {
                return data;
            } else if (err !== null) {
                return Promise.reject(err);
            } else {
                return Promise.reject(new Error('Could not fetch data for: ' + url));
            }
        }
    };

    return (
        <div className="service-board-container">
            <h1>Service Board - Testing</h1>

            <div className="container">
                <h2>Tickets</h2>
                <ul>
                    {tickets.map(t => {
                        return (
                            <li>{t.subject}</li>
                        );
                    })}
                </ul>
            </div>

            <div className="container">
                <h2>Faux Tickets</h2>
                <ul>
                    {fauxTickets.map(t => {
                        return (
                            <li>{t.subject}</li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

import React, { useState, useEffect } from "react";
import { fetchData } from "../../../includes/utils";
import { FETCH_TICKET } from "../../../includes/paths";
import Nav from "../Nav";
import Sidebar from "../Sidebar";
import TicketSidebar from "./TicketSidebar";
import Header from "./Header";
import Body from "./Body";

export default function Ticket(props) {
    const [ticket, setTicket] = useState(null);
    const [hasPrev, setHasPrev] = useState(false);
    const [hasNext, setHasNext] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchTicket();
    }, []);

    const fetchTicket = async () => {
        const url = `${FETCH_TICKET}/${props.ticketId}`;
        try {
            const ticketData = await fetchData(url);
            setTicket(ticketData.ticket);
            setHasPrev(ticketData.hasPrev);
            setHasNext(ticketData.hasNext);
            setLoading(false);
        } catch (e) {
            setError('Error: could not fetch ticket data');
            console.error(e);
        }
    };

    return (
        <React.Fragment>
            <Nav />
            <div className="ticket-layout">
                <Sidebar />
                <div className="ticket-container">
                    <div className="ticket-content">
                        <div className="ticket-element-wrapper">
                            <Header
                                hasPrev={hasPrev}
                                hasNext={hasNext}
                                loading={loading}
                                ticket={ticket}
                            />
                        </div>
                        <div className="ticket-element-wrapper">
                            <Body loading={loading} ticket={ticket} />
                        </div>
                    </div>
                    <TicketSidebar loading={loading} ticket={ticket} />
                </div>
            </div>
        </React.Fragment>
    );
}

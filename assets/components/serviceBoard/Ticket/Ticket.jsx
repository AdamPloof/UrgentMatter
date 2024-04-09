import React, { useState, useEffect, useContext } from "react";
import { fetchData } from "../../../includes/utils";
import { FETCH_TICKET, GENERATE_TICKET } from "../../../includes/paths";
import { MODE } from "../../../includes/consts";
import { ModeContext } from "../../ModeContext";
import Nav from "../Nav";
import Sidebar from "../Sidebar";
import TicketSidebar from "./TicketSidebar";
import Header from "./Header";
import Body from "./Body";

export default function Ticket(props) {
    const mode = useContext(ModeContext);
    const [ticket, setTicket] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchTicket();
    }, []);

    const fetchTicket = async () => {
        let url;
        if (mode === MODE.DEMO) {
            url = `${GENERATE_TICKET}/${props.ticketId}`;
        } else {
            // Throws 401 if in demo mode
            url = `${FETCH_TICKET}/${props.ticketId}`;
        }

        try {
            const ticketData = await fetchData(url);
            setTicket(ticketData.ticket);
            setLoading(false);
        } catch (e) {
            setError('Error: could not fetch ticket data');
            console.error(e);
        }
    };

    return (
        <React.Fragment>
            <Nav username={props.username} />
            <div className="ticket-layout">
                <Sidebar />
                <div className="ticket-container">
                    <div className="ticket-content">
                        <div className="ticket-element-wrapper">
                            <Header
                                hasPrev={ticket ? ticket.prev : false}
                                hasNext={ticket ? ticket.next : false}
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

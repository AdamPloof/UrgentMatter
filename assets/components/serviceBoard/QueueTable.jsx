import React from "react";

import TableLoader from "./TableLoader";
import { 
    TICKET_TYPES,
    TICKET_STATUS,
    TICKET_SLA
} from "../../includes/consts";

export default function QueueTable(props) {
    if (props.loading) {
        return (
            <TableLoader />
        );
    }

    return (
        <table className="table table-borderless queue-table">
            <thead>
                <tr>
                    <th scope="col">
                        <input 
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="queueSelectAll"
                        />
                    </th>
                    <th scope="col">T</th>
                    <th scope="col">Key</th>
                    <th scope="col">Summary</th>
                    <th scope="col">Reporter</th>
                    <th scope="col">Assignee</th>
                    <th scope="col">Status</th>
                    <th scope="col">Created</th>
                    <th scope="col">Urgency</th>
                    <th scope="col">SLA</th>
                </tr>
            </thead>
            <tbody>
                {props.tickets.map(t => ticketRow(t))}
            </tbody>
        </table>
    );
}

function ticketRow(ticket) {
    return (
        <tr key={`ticketRow${ticket.id}`}>
            <td>
                <input 
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id={`queueSelect${ticket.id}`}
                />
            </td>
            <td>{ticketType(TICKET_TYPES.BILL_GATES)}</td>
            <td>{ticketKey(ticket.id)}</td>
            <td>{ticketSummary(ticket)}</td>
            <td>{ticket.submitter}</td>
            <td>{assignee(ticket)}</td>
            <td>{status()}</td>
            <td>{ticket.submitted}</td>
            <td>{ticket.urgency.description}</td>
            <td>{sla()}</td>
        </tr>
    );
}

/**
 * TODO: This should link to the ticket view (not yet created)
 * the base path for the ticket should come from paths.js
 * 
 * @param {Element} ticket 
 */
function ticketSummary(ticket) {
    return (
        <a class="queue-link" href="#">{ticket.subject}</a>
    );
}

/**
 * ticketType, status and SLA can effectively be randomly selected. It would probably look more natural though
 * if we have certain types, statuses and SLAs that are more common.
 * 
 * TODO: select quasi-random ticketType, status and SLA.
 * 
 * @param {string} ticketType must be one of the values of the TICKET_TYPE const
 */
function ticketType(ticketType) {
    return <img className="ticket-type-icon" src={ticketType.src} alt={ticketType.altText} />
}

/**
 * @return {string}
 */
function ticketKey(ticketId) {
    return `UM-${ticketId}`;
}

/**
 * 
 * @param {Object} ticket 
 * @return {string} basically JBergeron for real tickets a random person or unassigned if faux ticket
 */
function assignee(ticket) {
    return 'JBergeron';
}

/**
 * TODO: for now status and sla are just returning the description.
 * eventually these should probably return dom elements
 * 
 * @return {string} should be one of the TICKET_STATUS const values
 */
function status() {
    return TICKET_STATUS.IGNORED.description;
}

/**
 * @return {string} should be one of the TICKET_SLA const values
 */
function sla() {
    return TICKET_SLA.BREACHED.description;
}

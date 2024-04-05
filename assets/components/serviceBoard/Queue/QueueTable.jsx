import React from "react";

import TableLoader from "../TableLoader";
import AgentSelect from "./AgentSelect";
import StatusSelect from "./StatusSelect";
import { 
    TICKET_TYPES,
    TICKET_SLA
} from "../../../includes/consts";

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
            <td>{ticketType(TICKET_TYPES.CRYO_CHAMBER)}</td>
            <td>{ticketKey(ticket.id)}</td>
            <td>{ticketSummary(ticket)}</td>
            <td>{ticket.submitter}</td>
            <td className="select-td"><AgentSelect ticketId={ticket.id} /></td>
            <td className="select-td"><StatusSelect /></td>
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
        <a className="queue-link" href="#">{ticket.subject}</a>
    );
}

/**
 * ticketType, status and SLA can effectively be randomly selected. It would probably look more natural though
 * if we have certain types, statuses and SLAs that are more common.
 */
function ticketType() {
    const ticketTypes = Object.values(TICKET_TYPES);
    const ticketType = ticketTypes[Math.floor(Math.random() * ticketTypes.length)];
    return <img width="20" className="ticket-type-icon" src={ticketType.src} alt={ticketType.altText} />
}

/**
 * @return {string}
 */
function ticketKey(ticketId) {
    return `UM-${ticketId}`;
}

/**
 * @return {string} should be one of the TICKET_SLA const values
 */
function sla() {
    return TICKET_SLA.BREACHED.description;
}

import React from "react";

import TableLoader from "../TableLoader";
import AgentSelect from "./AgentSelect";
import StatusSelect from "./StatusSelect";
import { TICKET_DETAIL } from "../../../includes/paths";
import { 
    TICKET_TYPES,
    TICKET_STATUS,
    TICKET_SLA,
    URGENCY_MAP
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
                {props.tickets.map((t, idx, arr) => ticketRow(t, idx, arr))}
            </tbody>
        </table>
    );
}

function ticketRow(ticket, ticketIdx, ticketsArr) {
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
            <td className="select-td">
                <StatusSelect status={calcStatusLvl(ticketIdx, ticketsArr)} />
            </td>
            <td>{ticket.submitted}</td>
            <td>{urgency(ticket.urgency)}</td>
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
        <a className="queue-link" href={`${TICKET_DETAIL}/${ticket.id}`}>{ticket.subject}</a>
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

function urgency(urgency) {
    let icon = URGENCY_MAP[urgency.description];

    // backup in case I messed up the map
    if (!icon) {
        icon = Object.values(URGENCY_MAP)[1];
    }

    return (
        <div className="urgency">
            <img width="20" className="urgency-icon" src={icon} alt={urgency.description} />
            <span className="urgency-description ps-2">
                {urgency.description}
            </span>
        </div>
    );
}

/**
 * @return {string} should be one of the TICKET_SLA const values
 */
function sla() {
    const slas = Object.values(TICKET_SLA);
    const sla = slas[Math.floor(Math.random() * slas.length)];

    return (
        <div className={sla.className}>
            <img width="20" className="sla-icon" src={sla.icon} alt={sla.description} />
            <span className="sla-description ps-2">
                {sla.description}
            </span>
        </div>
    );
}

/**
 * Calculate the status level for a given ticket in the tickets array based on
 * the desired proportion for certain status levels.
 * 
 * Since we're not sorting based on status or anything like that (though maybe we should)
 * this just applies the appropriate status based on the ticket's position in the ticket array
 * 
 * Status levels proportions:
 *  - Ignored: 25%
 *  - Forgotten: 25%
 *  - Purgatory: 15%
 *  - Waiting: 15%
 *  - In progress: 10%
 *  - Pending: 10%
 * 
 * @param {number} idx the index in the array
 * @param {Array} arr the array
 */
function calcStatusLvl(idx, arr) {
    const idxPos = idx / (arr.length -1); // as percent of total array
    let statusLvl = Object.keys(TICKET_STATUS)[0]; // default
    for (let [key, status] of Object.entries(TICKET_STATUS)) {
        if (status.proportionPosStart === NaN) {
            continue;
        }
        
        if (idxPos >= status.proportionPosStart && idxPos <= status.proportionPosEnd) {
            statusLvl = key;
        }
    }

    return statusLvl;
}

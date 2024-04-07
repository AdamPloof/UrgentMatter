import React from "react";
import { AVATARS } from "../../../includes/paths";

export default function Body(props) {
    if (!props.ticket) {
        // TODO: return loader
        return;
    }

    return (
        <div className="ticket-element">
            <div className="element-content">
                <div className="ticket-body-header">
                    {submitter(props.ticket)}
                    
                </div>
                <div className="ticket-body">
                    {description(props.ticket)}
                </div>
            </div>
        </div>
    );
}

function submitter(ticket) {
    return (
        <div className="ticket-submitter-wrapper">
            <div className="submitter-avatar pe-2">
                <img className="avatar-img" width="50" height="50" src={`${AVATARS}/${ticket.avatar}`} alt={ticket.avatar} />
            </div>
            <div className="submitter-info">
                <div className="pb-1">
                    <strong>{ticket.submitter}</strong> raised this request via {requestSource()}
                </div>
                <div>
                    {/* TODO: good opportunity for silliness */}
                    <small>
                        <a href="#">View request in alternate reality</a>
                    </small>
                </div>
            </div>
        </div>
    );
}

function description(ticket) {
    return (
        <React.Fragment>
            <div className="mb-2"><strong>Description</strong></div>
            <div>
                <p>
                    {/* TODO: need to properly turn line breaks into <p> tags */}
                    {ticket.body}
                </p>
            </div>
        </React.Fragment>
    );
}

/**
 * TODO: get random assortment of request sources
 */
function requestSource() {
    return (
        <strong>Phone Call</strong>
    );
}

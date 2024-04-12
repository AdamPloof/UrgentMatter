import React, { useState } from "react";
import { AVATARS } from "../../../includes/paths";
import { uniqueKey, randChoice } from "../../../includes/utils";
import { ALTERNATE_REALITY_TICKETS } from "../../../includes/consts";

export default function Body(props) {
    const [alternateReality, setAlternateReality] = useState(false);

    if (!props.ticket) {
        // TODO: return loader
        return;
    }

    return (
        <div className="ticket-element">
            <div className="element-content">
                <div className="ticket-body-header">
                    {submitter(props.ticket, alternateReality, setAlternateReality)}
                    
                </div>
                <div className="ticket-body">
                    {description(props.ticket, alternateReality)}
                </div>
            </div>
        </div>
    );
}

function submitter(ticket, alternateReality, setAlternateReality) {
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
                        <a 
                            href="#"
                            onClick={() => {
                                setAlternateReality(alternateReality ? false : true);
                            }}
                        >
                            {alternateReality ? 'Back to the real world' : 'View request in alternate reality'}
                        </a>
                    </small>
                </div>
            </div>
        </div>
    );
}

function description(ticket, alternateReality) {
    if (alternateReality) {
        return (
            <React.Fragment>
                <div className="mb-2"><strong>Description</strong></div>
                <div>
                    {splitParagraphs(randChoice(ALTERNATE_REALITY_TICKETS))}
                </div>
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <div className="mb-2"><strong>Description</strong></div>
            <div>
                {splitParagraphs(ticket.body)}
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

function splitParagraphs(text) {
    const lineBreak = new RegExp(/(\r|\n)+/);
    const paragraphs = text.split(lineBreak);

    return (
        <React.Fragment>
            {paragraphs.map(p => <p key={uniqueKey()}>{p}</p>)}
        </React.Fragment>
    );
}

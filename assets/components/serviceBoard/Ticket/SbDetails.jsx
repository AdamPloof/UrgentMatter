import React from "react";
import SbCollapsibleElement from "./SbCollapsibleElement";
import AgentSelect from "../Queue/AgentSelect";
import { sidebarListItem } from "../../../includes/utils";
import { AVATARS } from "../../../includes/paths";

export default function SbDetails(props) {
    return (
        <SbCollapsibleElement
            title={'Details'}
            content={content(props.ticket)}
            startExpanded={true}
        />
    );
}

function content(ticket) {
    if (!ticket) {
        // TODO: return loader
        return (
            <div className="sidebar-list"></div>
        );
    }

    return (
        <div className="sidebar-list">
            {organizations()}
            {urgency(ticket)}
            {/* TODO: randomize agent if auto-gen ticket */}
            {agent(ticket)}
            {submitter(ticket)}
            {requestType()}
            {productCategorization()}
            {operationalCategorization()}
            {responders()}
            {majorIncident()}
        </div>
    );
}

function organizations() {
    return sidebarListItem('Organizations', 'No organization here');
}

function urgency(ticket) {
    return sidebarListItem('Urgency', ticket.urgency.description);
}

function agent(ticket) {
    const agentSelect = <AgentSelect ticketId={ticket.id} />;
    return sidebarListItem('Agent', agentSelect);
}

function submitter(ticket) {
    const submitter = (
        <div className="agent-info">
            <img width="32" className="agent-img me-2" src={`${AVATARS}/${ticket.avatar}`} alt={ticket.avatar + ' avatar'} />
            <span className="agent-name">{ticket.submitter}</span>
        </div>
    );
    return sidebarListItem('Submitter', submitter);
}

function requestType() {
    return sidebarListItem('Request type', 'Coffee station request');
}

function productCategorization() {
    return sidebarListItem('Product categorization', 'Not my problem');
}

function operationalCategorization() {
    return sidebarListItem('Operational categorization', 'They could\'ve just googled it');
}

function responders() {
    return sidebarListItem('Responders', 'None');
}

function majorIncident() {
    return sidebarListItem('Major incident', 'They never are');
}

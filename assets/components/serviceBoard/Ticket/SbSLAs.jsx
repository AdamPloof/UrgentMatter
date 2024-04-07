import React, { useState } from "react";
import SbCollapsibleElement from "./SbCollapsibleElement";
import { ICONS } from "../../../includes/paths";
import { getShortMonth, formatHours, randInt } from "../../../includes/utils";

// TODO: countdown SLAs
export default function SbSLAs(props) {
    const [responseCountdown, setResponseCountdown] = useState(randInt(24));
    const [resolveCountdown, setResolveCountdown] = useState(randInt(24));

    return (
        <SbCollapsibleElement
            title={'SLAs'}
            startExpanded={true}
            content={content(responseCountdown, resolveCountdown)}
        />
    );
}

function content(responseCountdown, resolveCountdown) {
    return (
        <React.Fragment>
            <div className="sb-sla d-flex flex-row mb-3">
                {slaCountdown(responseCountdown)}
                {timeTo('do something, anything')}
            </div>
            <div className="sb-sla d-flex flex-row">
                {slaCountdown(resolveCountdown)}
                {timeTo('cancel, err... resolve')}
            </div>
        </React.Fragment>
    );
}

function slaCountdown(hoursLeft) {
    const respDate = new Date();

    const daysAgo = randInt(7);
    respDate.setDate(respDate.getDate() - daysAgo);
    respDate.setHours(hoursLeft);
    const countdown = getShortMonth(respDate.getMonth()) + ` ${respDate.getDate()} ` + formatHours(respDate.getHours());

    return (
        <div className="sla-countdown me-3">
            <span>{countdown}</span>
            <img className="ms-2" height="25" width="25" src={`${ICONS}/icon_time_bomb.svg`} alt="" />
        </div>
    );
}

function timeTo(toWhat) {
    const hours = randInt(24);

    return (
        <div className="sla-time-to d-flex flex-column justify-content-center">
            <div>Time to {toWhat}</div>
            <div><small>within {hours}h</small></div>
        </div>
    );
}

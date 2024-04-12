import React from "react";
import { TICKET_TYPES, TICKET_SLA } from "./consts";

export async function fetchData(url) {
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
        if (data) {
            return data;
        } else if (err !== null) {
            return Promise.reject(err);
        } else {
            return Promise.reject(new Error('Could not fetch data for: ' + url));
        }
    }
};

/**
 * @return {string}
 */
export function ticketKey(ticketId) {
    return (
        <span>{`UM-${ticketId}`}</span>
    );
}

/**
* ticketType, status and SLA can effectively be randomly selected. It would probably look more natural though
* if we have certain types, statuses and SLAs that are more common.
*/
export function ticketType() {
   const ticketTypes = Object.values(TICKET_TYPES);
   const ticketType = ticketTypes[Math.floor(Math.random() * ticketTypes.length)];

   return <img width="20" className="ticket-type-icon" src={ticketType.src} alt={ticketType.altText} />
}

/**
 * @return {string} should be one of the TICKET_SLA const values
 */
export function sla() {
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
 * @param {number} monthNum 
 * @return {string} the short month name for a given month number (0 indexed)
 */
export function getShortMonth(monthNum) {
    const months = ['Jan', 'Feb', 'Mar', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[monthNum];
}

/**
 * Convert hours number to AM/PM string
 * 
 * e.g. 13 = '1:00 PM'
 * 
 * @param {number} hours
 * @return {string} the formatted hours
 */
export function formatHours(hours) {
    if (hours === 0) {
        return '12:00 AM';
    }

    const amPm = hours >= 12 ? 'PM' : 'AM';
    const hoursStr = hours > 12 ? `${hours - 12}:00` : `${hours}:00`;

    return `${hoursStr} ${amPm}`;
}

/**
 * @param {number} max the highest integer allowed for the random number
 */
export function randInt(max) {
    return Math.floor(Math.random() * max);
}

/**
 * Return a random element from an array
 * 
 * @param {array} arr 
 * @return {str|int|float|null}
 */
export function randChoice(arr) {
    return arr[randInt(arr.length)];
}

export function sidebarListItem(label, value) {
    return (
        <div className="sidebar-list-item">
            <div className="list-item-label">{label}</div>
            <div className="list-item-value">{value}</div>
        </div>
    );
}

export function uniqueKey() {
    return "id" + Math.random().toString(16).slice(2);
}

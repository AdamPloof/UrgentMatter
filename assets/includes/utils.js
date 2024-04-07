import React from "react";
import { TICKET_TYPES } from "./consts";

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

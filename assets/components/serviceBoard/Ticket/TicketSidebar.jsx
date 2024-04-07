import React from "react";
import SbActions from "./SbActions";
import SbSLAs from "./SbSLAs";

export default function TicketSidebar(props) {
    return (
        <div className="ticket-sidebar d-flex flex-column me-4">
            <div className="ticket-element-wrapper justify-content-end">
                <SbActions />
            </div>
            <div className="ticket-element-wrapper">
                <SbSLAs />
            </div>
        </div>
    )
}

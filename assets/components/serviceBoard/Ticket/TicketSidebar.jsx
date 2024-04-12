import React from "react";
import SbActions from "./SbActions";
import SbSLAs from "./SbSLAs";
import SbDetails from "./SbDetails";

export default function TicketSidebar(props) {
    return (
        <div className="ticket-sidebar d-flex flex-column me-4">
            <div className="ticket-element-wrapper justify-content-end">
                <SbActions
                    setShowEasterEgg={props.setShowEasterEgg}
                    setEasterEggTitle={props.setEasterEggTitle}
                    setEasterEggContent={props.setEasterEggContent}
                />
            </div>
            <div className="ticket-element-wrapper">
                <SbSLAs />
            </div>
            <div className="ticket-element-wrapper">
                <SbDetails ticket={props.ticket} />
            </div>
        </div>
    )
}

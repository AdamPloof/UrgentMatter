import React, { StrictMode } from "react";
import { createRoot } from 'react-dom/client'
import ServiceBoard from "./serviceBoard/ServiceBoard";
import Ticket from "./serviceBoard/Ticket/Ticket";

function main() {
    let component = null;
    let targetContainer = null;

    const serviceBoardContainer = document.getElementById('service-board-component');
    if (serviceBoardContainer) {
        component = <ServiceBoard />;
        targetContainer = serviceBoardContainer;
    }

    const ticketContainer = document.getElementById('ticket-component');
    if (ticketContainer) {
        component = <Ticket ticketId={ticketContainer.dataset.ticketId} />;
        targetContainer = ticketContainer;
    }

    if (!component) {
        return;
    }

    const root = createRoot(targetContainer);
    root.render(
        <StrictMode>
            {component}
        </StrictMode>
    );
}

document.addEventListener('DOMContentLoaded', main);

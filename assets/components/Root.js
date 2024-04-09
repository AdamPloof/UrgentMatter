import React, { StrictMode } from "react";
import { createRoot } from 'react-dom/client'
import { ModeContext, ModeProvider } from "./ModeContext";
import { MODE } from "../includes/consts";
import ServiceBoard from "./serviceBoard/ServiceBoard";
import Ticket from "./serviceBoard/Ticket/Ticket";

function main() {
    let component = null;
    let targetContainer = null;
    let mode;

    const serviceBoardContainer = document.getElementById('service-board-component');
    if (serviceBoardContainer) {
        component = <ServiceBoard 
            username={serviceBoardContainer.dataset.username}
        />;
        mode = serviceBoardContainer.dataset.demoMode ? MODE.DEMO : MODE.STD;
        targetContainer = serviceBoardContainer;
    }

    const ticketContainer = document.getElementById('ticket-component');
    if (ticketContainer) {
        component = <Ticket
            ticketId={ticketContainer.dataset.ticketId}
            username={ticketContainer.dataset.username}
        />;
        mode = ticketContainer.dataset.demoMode ? MODE.DEMO : MODE.STD;
        targetContainer = ticketContainer;
    }

    if (!component) {
        return;
    }

    const root = createRoot(targetContainer);
    root.render(
        <StrictMode>
            <ModeProvider mode={mode}>
                {component}
            </ModeProvider>
        </StrictMode>
    );
}

document.addEventListener('DOMContentLoaded', main);

import React, { StrictMode } from "react";
import { createRoot } from 'react-dom/client'
import TicketPortal from "./portal/TicketPortal";

function main() {
    const appContainer = document.getElementById('app-container');
    if (!appContainer) {
        return;
    }

    const root = createRoot(appContainer);
    root.render(
        <StrictMode>
            <TicketPortal />
        </StrictMode>
    );
}

document.addEventListener('DOMContentLoaded', main);

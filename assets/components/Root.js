import React, { StrictMode } from "react";
import { createRoot } from 'react-dom/client'
import TicketPortal from "./portal/TicketPortal";

const appContainer = document.getElementById('app-container');
const root = createRoot(appContainer);
root.render(
    <StrictMode>
        <TicketPortal />
    </StrictMode>
);

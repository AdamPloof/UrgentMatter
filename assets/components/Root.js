import React, { StrictMode } from "react";
import { createRoot } from 'react-dom/client'
import ServiceBoard from "./serviceBoard/ServiceBoard";

function main() {
    const serviceBoardContainer = document.getElementById('service-board-component');
    if (!serviceBoardContainer) {
        return;
    }

    const root = createRoot(serviceBoardContainer);
    root.render(
        <StrictMode>
            <ServiceBoard />
        </StrictMode>
    );
}

document.addEventListener('DOMContentLoaded', main);

import React from "react";
import Breadcrumbs from "./Breadcrumbs";

export default function QueueHeader(props) {
    return (
        <div className="queue-header">
            <Breadcrumbs />
            <div className="queue-title">
                <h3>Assigned to me</h3>
            </div>
        </div>
    );
}

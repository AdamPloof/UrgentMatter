import React from "react";
import Breadcrumbs from "../Breadcrumbs";

export default function QueueHeader(props) {
    // TODO: should probably pass the queue options as an object instead of loosey-goosey string
    const headerName = () => {
        let name;
        switch (props.activeQueue) {
            case 'open':
                name = 'All open';
                break;
            case 'assigned':
                name = 'Assigned to me';
                break;
            case 'unassigned':
                name = 'Unassigned';
                break;
            case 'ignore':
                name = 'Ignore forever';
                break;
            case 'closed':
                name = 'All closed';
                break;
            default:
                name = 'Assigned to me';
        }

        return name;
    };

    return (
        <div className="queue-header">
            <Breadcrumbs />
            <div className="queue-title">
                <h3>{headerName()}</h3>
            </div>
        </div>
    );
}

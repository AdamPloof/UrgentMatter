import React from 'react';
import QueueHeader from './QueueHeader';
import QueueTable from './QueueTable';

export default function Queue(props) {
    return (
        <div className="queue-container">
            <QueueHeader activeQueue={props.activeQueue} />
            <QueueTable
                activeQueue={props.activeQueue}
                tickets={props.tickets}
            />
        </div>
    );
}

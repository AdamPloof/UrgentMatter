import React, { useState, useRef } from "react";
import { TICKET_STATUS } from "../../../includes/consts";
import { useOutsideClickListener } from '../../../includes/hooks';

// TODO: only one agent select should be able to be active at any given time
// also clicking outside of the selector should close it
export default function StatusSelect(props) {
    const [status, setStatus] = useState({...TICKET_STATUS.IGNORED});
    const [active, setActive] = useState(false);

    const selectWrapper = useRef(null);
    useOutsideClickListener(selectWrapper, (event) => {
        setActive(false);
    });

    return (
        <div className="status-select-wrapper" ref={selectWrapper}>
            <div className="status-select">
                <div className={`${status.className} status-info selected`} onClick={() => setActive(true)}>
                    <span className="status-description">{status.description}</span>
                </div>
            </div>
            <div className={active ? "status-select active" : "status-select hide"}>
                {Object.values(TICKET_STATUS).map(status => {
                    return (
                        <div 
                            className={`${status.className} status-info`} 
                            key={`${props.ticketId}_status_opt_${status.transition}`}
                            onClick={() => {
                                setStatus({...status});
                                setActive(false);
                            }}
                        >
                            <span className="status-description">{status.transition}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

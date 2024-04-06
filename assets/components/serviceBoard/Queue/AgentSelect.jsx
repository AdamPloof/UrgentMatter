import React, { useState, useRef } from "react";
import { AGENTS } from "../../../includes/paths";
import { useOutsideClickListener } from '../../../includes/hooks';

// TODO: only one agent select should be able to be active at any given time
// also clicking outside of the selector should close it
export default function AgentSelect(props) {
    const agents = [
        {name: 'JBergeron', img: 'jerry.jpg', alt: 'Jerry agent image'},
        {name: 'GConstanza', img: 'george.jpg', alt: 'George agent image'},
        {name: 'CKramer', img: 'kramer.jpg', alt: 'Kramer agent image'},
        {name: 'EBenis', img: 'elaine.jpg', alt: 'Elaine agent image'},
        {name: 'Unassigned', img: 'unassigned.svg', alt: 'Unassigned agent image'},
    ];
    const [agent, setAgent] = useState({...agents[0]});
    const [active, setActive] = useState(false);

    const selectWrapper = useRef(null);
    useOutsideClickListener(selectWrapper, (event) => {
        setActive(false);
    });

    return (
        <div className="agent-select-wrapper" ref={selectWrapper}>
            <div className="agent-select">
                <div className="agent-info" onClick={() => setActive(true)}>
                    <img width="32" className="agent-img me-2" src={`${AGENTS}/${agent.img}`} alt={agent.alt} />
                    <span className="agent-name">{agent.name}</span>
                </div>
            </div>
            <div className={active ? "agent-select active" : "agent-select hide"}>
                {agents.map(agent => {
                    return (
                        <div 
                            className="agent-info" 
                            key={`${props.ticketId}_agent_opt_${agent.name}`}
                            onClick={() => {
                                setAgent({...agent});
                                setActive(false);
                            }}
                        >
                            <img width="32" className="agent-img me-2" src={`${AGENTS}/${agent.img}`} alt={agent.alt} />
                            <span className="agent-name">{agent.name}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

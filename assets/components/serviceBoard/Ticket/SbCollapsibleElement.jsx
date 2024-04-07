import React, { useState } from "react";

export default function SbCollapsibleElement(props) {
    const [expanded, setExpanded] = useState(props.startExpanded ? true : false);

    const content = () => {
        if (expanded) {
            return props.content;
        } else {
            return null;
        }
    };

    const elementCls = expanded ?
        "ticket-element ticket-element-collapsible expanded" :
        'ticket-element ticket-element-collapsible collapsed';

    return (
        <div className={elementCls}>
            <div 
                className="element-header" 
                role="button"
                onClick={(e) => {
                    setExpanded(expanded ? false : true);
                }}
            >
                <div className="header-title">
                    <h5>
                        {props.title}
                    </h5>
                </div>
                <div className="header-control">
                    <a className="sb-expand-control" role="button" href="#"></a>
                </div>
            </div>
            <div className="element-content">
                {content()}
            </div>
        </div>
    );
}

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

    return (
        <div className="ticket-element ticket-element-collapsible">
            <div className="element-header">
                <div className="header-title">
                    {props.title}
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

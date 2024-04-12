import React, { useState, useEffect } from "react";
import { 
    randChoice,
    uniqueKey,
    getShortMonth,
    formatHours
} from "../../../includes/utils";
import { COMMENTS } from "../../../includes/consts";

export default function Comments(props) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        if (!props.submitter) {
            return;
        }

        const timer = setInterval(() => {
            if (coinToss()) {
                setComments((comments) => {
                    return [...comments, {
                        submitter: makeSubmitter(),
                        body: randChoice(COMMENTS)
                    }];
                });
            }
        }, 10000);
    }, [props.submitter]);

    const makeSubmitter = () => {
        const others = ['You', 'Special Agent Jack Bower', 'ICWeiner'];
    
        return coinToss() ? props.submitter : randChoice(others);
    }

    return (
        <React.Fragment>
            <h5 className="mt-4">Activity</h5>
            <div className="ticket-element mt-3">
                <div className="element-content">
                    <div className="comments-body">
                        {comments.length > 0 ? comments.map(c => comment(c)) : <small className="text-muted">No comments</small>}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

function coinToss() {
    const coin = Math.floor(Math.random() * 2);
    return coin === 1;
};

function postedDate() {
    const now = new Date();
    const month = getShortMonth(now.getMonth());
    const day = now.getDate();
    const hour = formatHours(now.getHours());

    return `${month} ${day} ${hour}`;
}

function comment(content) {
    return (
        <React.Fragment key={uniqueKey()}>
            <div className="comment-msg">
                <div className="comment-msg-header d-flex flex-row justify-content-between">
                    <div className="msg-header-left">
                        <strong>{content.submitter}</strong>
                    </div>
                    <div className="msg-header-right">
                        {postedDate()}
                    </div>
                </div>
                <div className="text-muted comment-msg-body">
                    {content.body}
                </div>
            </div>
        </React.Fragment>
    );
}

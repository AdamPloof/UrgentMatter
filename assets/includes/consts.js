import { ICONS } from "./paths";

export const TICKET_TYPES = {
    HALLUCINATION: {
        altText: 'Hallucination',
        src: ICONS + '/tt_hallucinations.svg'
    },
    NOT_MY_PROBLEM: {
        altText: 'Not my problem',
        src: ICONS + '/tt_not_my_problem.svg'
    },
    BILL_GATES: {
        altText: 'Get Bill Gates in here!',
        src: ICONS + '/tt_bill_gates.svg'
    },
    SRSLY: {
        altText: 'srsly?',
        src: ICONS + '/tt_srsly.svg'
    },
};

// TODO: other properties of status will be color or class
// for styling, maybe order they should appear in list?
export const TICKET_STATUS = {
    IGNORED: {
        description: 'Ignored',
    },
    FORGOTTEN: {
        description: 'Forgotten',
    },
    IN_PURGATORY: {
        description: 'In Purgatory',
    },
    WAITING_ON_USER: {
        description: 'Waiting on user lol',
    },
    PENDING: {
        description: 'Pending cancel',
    },
    IN_PROGRESS: {
        description: 'In progress (of cancelling)'
    }
};

export const TICKET_SLA = {
    ON_TARGET: {
        description: 'On target... stay on target',
    },
    BREACHED: {
        description: 'Breached'
    }
};

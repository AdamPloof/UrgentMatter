import React, { useContext } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ModeContext } from "../ModeContext";
import { MODE } from "../../includes/consts";

/**
 * A quick way to display some hidden gem, just pop it up in a modal!
 */
export default function EasterEggModal(props) {
    const mode = useContext(ModeContext);
    const modalClass = mode === MODE.DEMO ? 'easter-egg-modal easter-egg-demo' : 'easter-egg-modal';

    return (
        <>
            <Modal show={props.show} onHide={props.handleClose} className={modalClass}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.content}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={props.handleClose}>
                        Alright
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

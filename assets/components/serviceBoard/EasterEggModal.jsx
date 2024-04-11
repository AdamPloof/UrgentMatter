import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

/**
 * A quick way to display some hidden gem, just pop it up in a modal!
 */
export default function EasterEggModal(props) {
    return (
        <>
            <Modal show={props.show} onHide={props.handleClose} className="easter-egg-modal" >
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

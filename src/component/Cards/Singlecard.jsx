import {useState} from "react";
import "../../Assets/Css/singleCard.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const SingleCard = ({show, handleClose, handleShow}) => {

	return (
		<>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}
export default SingleCard;

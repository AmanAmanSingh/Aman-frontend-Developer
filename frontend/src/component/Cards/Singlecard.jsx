import {useContext, useState} from "react";
import "../../Assets/Css/singleCard.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {SearchContext} from "../../Context/seacrhContext";

const SingleCard = ({show, handleClose, handleShow}) => {
	const cardContext = useContext(SearchContext);

	console.log(cardContext.singleCardData);

	return (
		<>

			<Modal show={show} centered onHide={handleClose}>
				{/*<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>*/}
				<Modal.Body style={{
					display: 'flex', justifyContent: 'center'
				}}>

					<div className="card" >
						<img src="" alt="" className="card-image" />
						<div className="card-content">
							<h2 className="card-title"> Details : <span></span>  {cardContext.singleCardData[0]?.details}</h2>
							<h2 className="card-title">Type : <span>{cardContext.singleCardData[0]?.type}</span> </h2>
							<h2 className="card-title"> Status :  <span> {cardContext.singleCardData[0]?.status}</span></h2>
							<h2 className="card-title">Reuse Count : <span>{cardContext.singleCardData[0]?.reuse_count}</span>  </h2>
							<h2 className="card-title">Original Launch : <span>{cardContext.singleCardData[0]?.original_launch}</span>  </h2>
							<h2 className="card-title">Original Launch Unix : <span>{cardContext.singleCardData[0]?.original_launch_unix}</span>  </h2>
							<h2 className="card-title"> Capsule Id : <span>{cardContext.singleCardData[0]?.capsule_id} </span>  </h2>
						</div>
					</div>
				</Modal.Body>
				<Modal.Footer style={{display: 'flex', justifyContent: 'center'}}>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}
export default SingleCard;

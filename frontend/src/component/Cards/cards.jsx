import {useContext, useState} from "react";
import "../../Assets/Css/cards.css"
import SingleCard from "./Singlecard";
import Search from "../Search/search";
import useFetch from "../../CoustomHook/fetch";
import {SearchContext} from "../../Context/seacrhContext";


const Cards = () => {

	const [show, setShow] = useState(false);
	const [activePage, setActivePage] = useState(1);
	const [status, setStatus] = useState(" ");
	const searchBy = useContext(SearchContext);

	//console.log(searchBy.status, "jnbhvgfhdghjk")
	let url = `${process.env.REACT_APP_BACKEND_URL}/capsules/pagination/?page=${activePage}&pagesize=4`;

	if(searchBy.status === "status") {
		url += `&status=${searchBy.capsuleValue}`;
	} else if(searchBy.type === "type") {
		url += `&type=${searchBy.capsuleValue}`;
	} else if(searchBy.original_launch_unix === "original_launch") {
		url += `&original_launch_unix=${searchBy.capsuleValue}`;
	}

	const cardData = useFetch(url);


	const handlePopup = () => {
		setShow(!show)
	}

	const handlePageClick = (pageNumber) => {
		setActivePage(pageNumber);
	};

	return (
		<>

			<section className="section">
				<article className="cards-article">
					{cardData?.data?.map((item, i) => {
						return (
							<>
								<div className="card-container" key={i}>
									<div className="card">
										<img src="" alt="" className="card-image" />
										<div className="card-content">
											<h2 className="card-title">Type : <span>{item?.type}</span> </h2>
											<h2 className="card-title"> Status :  <span> {item?.status}</span></h2>
											<h2 className="card-title">Reuse Count : <span>{item?.reuse_count}</span>  </h2>
											<h2 className="card-title">Original Launch Unix : <span>{item?.original_launch_unix}</span>  </h2>
											<h2 className="card-title"> Capsule Id : <span>{item?.capsule_id} </span>  </h2>
											{/*<h2 className="card-title"> Details : <span></span>  {item?.details}</h2>*/}
										</div>
									</div>
								</div>
							</>
						)
					})}



				</article>

				<article className="pagination-article">
					<div className="pagination">
						<ul>
							<li>
								<a
									className={activePage === 1 ? 'prev disabled' : 'prev'}
									onClick={() => handlePageClick(activePage - 1)}
								>
									Prev
								</a>
							</li>
							<li>
								<a
									className={activePage === 1 ? 'active' : ''}
									onClick={() => handlePageClick(1)}
								>
									1
								</a>
							</li>
							<li>
								<a
									className={activePage === 2 ? 'active' : ''}
									onClick={() => handlePageClick(2)}
								>
									2
								</a>
							</li>
							<li>
								<a
									className={'next'}
									onClick={() => handlePageClick(activePage + 1)}
								>
									Next
								</a>
							</li>
						</ul>
					</div>

				</article>

			</section>




			<SingleCard
				show={show}
				handleShow={handlePopup}
				handleClose={handlePopup}
			/>
		</>
	)
}
export default Cards;

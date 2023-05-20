import {useContext, useState} from "react";
import "../../Assets/Css/search.css"
import Cards from "../Cards/cards";
import {SearchContext} from "../../Context/seacrhContext";

const Search = () => {

	const setfilterBy = useContext(SearchContext);
	console.log(setfilterBy, "connnn")


	const handleSearchByChange = (e) => {
		const searchBy = e.target.value;
		if(searchBy == "status") {
			setfilterBy.setStatus(searchBy)
			setfilterBy.setOriginal_launch_unix("")
			setfilterBy.setType("")

		} else if(searchBy == "type") {
			setfilterBy.setType(searchBy)
			setfilterBy.setStatus("")
			setfilterBy.setOriginal_launch_unix("")

		} else if(searchBy == "original_launch_unix") {
			setfilterBy.setOriginal_launch_unix(searchBy)
			setfilterBy.setStatus("")
			setfilterBy.setType("")
		}
	}

	//console.log(status, type, original_launch_unix)

	return (
		<>
			<section className="search-capsules-container">
				<article>
					<select id="search-capsules" onChange={handleSearchByChange}>
						<option value="">Search Capsules By</option>
						<option value="status">Status</option>
						<option value="type">Type</option>
						<option value="original_launch_unix">Original Launch Unix</option>
					</select>
				</article>

				<article>
					<input type="text" id=""
						placeholder="write your capsule value..."
						value={setfilterBy.capsuleValue}
						onChange={(e) => {setfilterBy.setCapsuleValue(e.target.value)}}
					/>
				</article>


			</section>

		</>
	)
}

export default Search;

import {useEffect, useState} from "react";

function useFetch(url) {

	console.log(url, "url")
	const [response, setResponse] = useState([]);

	const Token = localStorage.getItem("authtoken");

	useEffect(() => {
		fetch(url, {
			method: "GET",
			headers: {
				authorization: Token,
				'Content-type': 'Application/json',
			},
		}).then(res => {
			return res.json();
		}).then(data => {
			setResponse(data)
		})

	}, [url])

	console.log(response, "resssss")
	return response;
}
export default useFetch;
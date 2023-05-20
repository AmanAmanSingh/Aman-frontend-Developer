import {useState} from "react";
import {useEffect} from "react";
import {Link, Navigate, useNavigate} from "react-router-dom";
import "../../Assets/Css/login.css"

const Signup = () => {
	const [loginUser, setLoginUser] = useState({username: "", email: "", password: ""});
	const [msg, setMsg] = useState(null);
	const [error, setError] = useState(" ");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("verfying...");

		const data = await fetch(`${process.env.REACT_APP_BACKEND_URL}/signup`, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(loginUser),
		}).then((data) => {
			return data.json();
		}).then(data => {
			console.log(data, "fghjhghj");
			if(data.message !== "sucess") {
				console.log("here")
				setMsg(data.message);
			} else {
				navigate("/signin");
			}
		}).catch(e => {
			console.log(e)
		})

	}

	const disable = (loginUser.username && loginUser.email && loginUser.password);


	return (

		<>
			<section className="loginPage">
				<div className="login-container">
					<label className="label_login">Username:</label>
					<input type="text" name="username" id="username" required onChange={(e) => {setLoginUser({...loginUser, username: e.target.value})}} value={loginUser.username} />

					<label className="label_login" >Email:</label>
					<input type="email" name="email" id="email" required onChange={(e) => {setLoginUser({...loginUser, email: e.target.value})}} value={loginUser.email} />

					<label className="label_login">Password:</label>
					<input type="password" name="password" id="password" required onChange={(e) => {setLoginUser({...loginUser, password: e.target.value})}} value={loginUser.password} />

					<button className="login-btn" onClick={handleSubmit} disabled={disable ? false : true}>SignUp</button>
					{msg && <h3 style={{color: "black"}}><i className="fa fa-spinner" aria-hidden="true"></i></h3>}

					<div className="Signup-link">
						<Link to="/signin">	SignIn</Link>
					</div>
				</div>
			</section>
		</>
	)
}
export default Signup;
import {useState} from "react";
import {useEffect} from "react";
import {Link, Navigate, useNavigate} from "react-router-dom";
import "../../Assets/Css/login.css"
import Loader from "../Loader/loader";
import Signup from "../SignUp/signup";

const Login = () => {
	const [loginUser, setLoginUser] = useState({email: "", password: ""});
	const [msg, setMsg] = useState(null);
	const [error, setError] = useState("")
	const [isloading, setIsloading] = useState(false)
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setMsg(" ");
		setIsloading(true)
		const data = await fetch(`${process.env.REACT_APP_BACKEND_URL}/signin`, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(loginUser),
		}).then((data) => {
			return data.json()
		}).then((response) => {
			console.log(response, "response")
			if(response?.status === "failed") {
				setMsg(response?.message)
			} else {
				localStorage.setItem("authtoken", response?.token);
				localStorage.setItem("id", response?.id);
				localStorage.setItem("name", response?.name);
				navigate("/");
			}
			setIsloading(false)
		}).catch(e => {
			// console.log(e, "e")
			setError("credentials not Match")
			setIsloading(false)

		})

	}
	const disable = (loginUser.email && loginUser.password);


	return (

		<>
			<section className="loginPage">
				<div className="login-container">

					<label className="label_login" >Email:</label>
					<input type="email" name="email" id="email" required onChange={(e) => {setLoginUser({...loginUser, email: e.target.value})}} value={loginUser.email} />

					<label className="label_login">Password:</label>
					<input type="password" name="password" id="password" required onChange={(e) => {setLoginUser({...loginUser, password: e.target.value})}} value={loginUser.password} />

					<button className="login-btn" onClick={handleSubmit} disabled={disable ? false : true}>{isloading ? <Loader /> : <>SignIn</>}</button>

					<div className="Signup-link">
						<Link to="/signup">
							SignUp
						</Link>
					</div>
				</div>
			</section>
		</>
	)
}
export default Login;
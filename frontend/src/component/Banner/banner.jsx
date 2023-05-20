import {Link, useNavigate} from "react-router-dom";
import "../../Assets/Css/banner.css"
import bannerBackground from "../../Assets/Images/banner-background.jpg";
import bannerBackground3 from "../../Assets/Images/banner-background3.jpg";


const Banner = () => {
	let userDetail = localStorage.getItem("authtoken");
	let username = localStorage.getItem("name");

	const navigate = useNavigate()

	const Logoutbutton = () => {
		localStorage.setItem("authtoken", "");
		localStorage.setItem("token", "")
		localStorage.setItem("id", "");
		localStorage.setItem("name", "");
		window.location.reload();
		navigate("/")
	};


	return (
		<>
			<section className="banner-container" id="banner_header">
				<article className="banner-section">
					<img src={bannerBackground} alt="img" />
					<div className="banner-section-text" >
						<div className="singin_signup_container">
							<ul>
								{!userDetail &&
									<>
										<li>
											<Link to="/signin">SignIn</Link>
										</li>
										<li>
											<Link to="/signup">SignUp</Link>
										</li>
									</>

								}

								{userDetail && <li>
									< span className="logout" onClick={Logoutbutton}> LogOut </span>
								</li>}
							</ul>
							{username &&
								<p>Hello {username}, welcome to our platform</p>
							}
						</div>
						<h1>EXPLORE THE COSMOS</h1>
						<h3>UNVEIL THE MYSTERIES OF THE UNIVERSE</h3>
					</div>
				</article>

				<article className="banner-section2">
					<img src={bannerBackground3} alt="img" />
					<div className="banner-section-text2">
						<h1>WHERE HISTORY MEETS THE FUTURE</h1>
						<h3>EXPERIENCE THE EPIC LEGACY OF SPACE CAPSULES PRESERVED IN OUR WAREHOUSE</h3>
					</div>
				</article>
			</section>
		</>
	)
}
export default Banner;
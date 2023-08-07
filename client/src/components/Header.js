import { Link } from "react-router-dom";
import { RxHamburgerMenu } from 'react-icons/rx';
import { useEffect, useState } from "react";
import { PopUp } from "../utilities/components/PopUp";





const Header = (props) => {

	var [menuState, setManuState] = useState(false);
	var [PopUp1, PopUp1Toggler] = PopUp(ProfileMenu, false);

	useEffect(() => {
		if (window.innerWidth > 767) {
			setManuState(true);
		}
	}, [])



	function ProfileMenu() {
		return (
			<div className="absolute -translate-x-1/2 mt-1 p-1 rounded-md border gc-border-green bg-white ">
				<button className="gc-hover-text-green p-1">Log&nbsp;out</button>
			</div>
		)
	}

	function Menu() {
		if (!menuState) {
			return (<></>);
		} else {
			return (
				<div className="text-sm flex justify-around items-center  ">
					<Link ><div className="p-1 mx-3 gc-hover-text-green hover:scale-110 duration-300">About</div></Link>
					<Link ><div className="p-1 mx-3 gc-hover-text-green hover:scale-110 duration-300">Contact</div></Link>
					{
						!props.loginStatus ? (
							<Link to="/LogIn">
								<div className="py-1 px-2 mx-3 hover:scale-105 border rounded-md gc-text-green gc-border-green duration-300">
									LogIn/SignIn
								</div>
							</Link>
						) : (
						<>
							<div onClick={PopUp1Toggler} className="flex mx-2 items-center justify-center text-center h-8 w-8 rounded-full border-[3px] gc-border-green gc-text-black text-lg">{props.userName[0]}</div>
							<PopUp1 />
						</>
						)
					}
				</div>
			)
		}
	}


	return (
		<nav className="border p-2 md:flex justify-between items-center gc-text-black" style={{ borderColor: "#503524" }}>
			<div className="flex justify-between">
				<img src="/assets/images/GreenCode_Logo_main.png" alt="main logo"
					className="h-6" />
				<button className="md:hidden text-3xl p-1" onClick={() => { setManuState((pre) => !pre) }}>
					<RxHamburgerMenu />
				</button>
			</div>
			<Menu />
		</nav>
	)
}

export default Header;
import React from "react";
import Common from "./Common";
import web from "../../src/images/img2.svg";
const Home = () => {
	return (
		<>
			<Common
				name="Grow Your Business With"
				btnName="Get Started"
				to="/service"
				img={web}
			/>
		</>
	);
};
export default Home;

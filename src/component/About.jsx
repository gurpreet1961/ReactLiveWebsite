import React from "react";
import Common from "./Common";
import web from "../../src/images/img1.svg";
const About = () => {
	return (
		<>
			<Common
				name="Welcom to About page"
				btnName="Contact Now"
				to="/contact"
				img={web}
			/>
		</>
	);
};
export default About;

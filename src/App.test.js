import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
	render(<App />);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});

{
	//<div className="container-fluid nav_bg">
	// 	<div className="row">
	// 		<div className="col-10 mx-auto"></div>
	// 	</div>
	// </div>;
}

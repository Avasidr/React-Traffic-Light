import React, {useState} from "react";


//create your first component
const Home = () => {
	const [ selectedColor, setSelectedColor ] = useState("red");
	return (
		<div>
			<div className="stick"></div>
			<div className="traffic-light">
			<div 
			onClick={() => setSelectedColor("red")}
			className = {
				"light red-light" + ((selectedColor === "red") ? " glowing-circle" : "")
				}></div>
			<div 
			onClick={() => setSelectedColor("orange")}
			className = {
				"light orange-light" + ((selectedColor === "orange") ? " glowing-circle" : "")
				}></div>
			<div 
			onClick={() => setSelectedColor("green")}
			className = {
				"light green-light" + ((selectedColor === "green") ? " glowing-circle" : "")
			}></div>
		</div>
		</div>
		
	);
};

export default Home;

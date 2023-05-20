import React from "react";
import { useState } from "react";


//create your first component


const Home = () => {
	const [glow, setGlow] = useState('')
	return (
		<div className="text-center">
			<div>
				<div className="trafficTop"></div>
				<div className="trafficBody">
					<p onClick={() => setGlow('red')} className={`${glow === 'red'? 'red glow': 'red'}`}></p>
					<p onClick={() => setGlow('yellow')} className={`${glow === 'yellow'? 'yellow glow': 'yellow'}`}></p>
					<p onClick={() => setGlow('green')} className={`${glow === 'green'? 'green glow': 'green'}`}></p>
				</div>
			</div>
		</div>
	);
};

export default Home;

import React from "react";
import Cajas from "./cajas.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const SecondsCounter = (props) => {
	return(
	<div className="Counter p-3 mb-2 bg-primary text-white">
		
		<div className="Icono badge bg-secondary width: 140px;"><i class="fa fa-clock"></i></div>
		<Cajas nums={props.nums}/>
	</div>
	
		
	
	);	
};

export default SecondsCounter; 

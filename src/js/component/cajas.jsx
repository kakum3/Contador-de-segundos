import React from "react";




//create your first component
const Cajas = (props) => {
	const html = props.nums.map(myFunction)
	function myFunction(t,i){
		return(<div className="badge bg-secondary" key={i}>{t}</div> )
	}
	console.log(html);
	return (
		[html]
	
	);
};

export default Cajas;

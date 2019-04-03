import React from 'react';
import "./style.css";

const Card = props => (
	<div 
	className="Cards col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3" 
	key={props.id}
	onClick={() => props.handleClick(props.id, props.clicked)}
	>
		<img 
		id={props.name}
    src={props.image}
    alt="picture failed to load"
		/>
	</div>
);

export default Card;
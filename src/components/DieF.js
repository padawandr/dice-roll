import React from 'react';
import './Die.css';

function DieF({ face, rolling }) {
	return (
		<i className={`Die fas fa-dice-${face} ${rolling && 'shaking'}`} />
	);
}

export default DieF;

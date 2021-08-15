import React, { useState } from 'react';
import DieF from './DieF';
import './RollDice.css';

function setDie(sides) {
	return sides[Math.floor(Math.random() * sides.length)];
}

function roll(sides, setDieAlpha, setDieBeta, setRolling) {
	setDieAlpha(setDie(sides));
	setDieBeta(setDie(sides));
	setRolling(true);
	setTimeout(() => setRolling(false), 1000);
}

function RollDiceF() {
	const sides = [ 'one', 'two', 'three', 'four', 'five', 'six' ];

	const [ dieAlpha, setDieAlpha ] = useState('six');
	const [ dieBeta, setDieBeta ] = useState('one');
	const [ rolling, setRolling ] = useState(false);

	return (
		<section className="RollDice">
			<DieF face={dieAlpha} rolling={rolling} />
			<DieF face={dieBeta} rolling={rolling} />
			<button onClick={() => roll(sides, setDieAlpha, setDieBeta, setRolling)} disabled={rolling}>
				{rolling ? 'Rolling...' : 'Roll Dice!'}
			</button>
		</section>
	);
}

export default RollDiceF;

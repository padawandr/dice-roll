import React, { Component } from 'react';
import Die from './Die';

class RollDice extends Component {
	static defaultProps = {
		sides: [ 'one', 'two', 'three', 'four', 'five', 'six' ]
	};

	constructor(props) {
		super(props);
		this.state = {
			dieAlpha: 'one',
			dieBeta: 'six'
		};
		this.roll = this.roll.bind(this);
	}

	randomFace() {
		return Math.floor(Math.random() * this.props.sides.length);
	}

	roll() {
		const newDieAlpha = this.props.sides[this.randomFace()];
		const newDieBeta = this.props.sides[this.randomFace()];

		this.setState({ dieAlpha: newDieAlpha, dieBeta: newDieBeta });
	}

	render() {
		return (
			<>
				<Die face={this.state.dieAlpha} />
				<Die face={this.state.dieBeta} />
				<button onClick={this.roll}>Roll Dice!</button>
			</>
		);
	}
}

export default RollDice;

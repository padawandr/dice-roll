import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
	static defaultProps = {
		sides: [ 'one', 'two', 'three', 'four', 'five', 'six' ]
	};

	constructor(props) {
		super(props);
		this.state = { dieAlpha: 'one', dieBeta: 'six', rolling: false };
		this.roll = this.roll.bind(this);
	}

	randomFace() {
		return Math.floor(Math.random() * this.props.sides.length);
	}

	roll() {
		const newDieAlpha = this.props.sides[this.randomFace()];
		const newDieBeta = this.props.sides[this.randomFace()];

		this.setState({ dieAlpha: newDieAlpha, dieBeta: newDieBeta, rolling: true });

		setTimeout(() => this.setState({ rolling: false }), 1000);
	}

	render() {
		return (
			<section className="RollDice">
				<Die face={this.state.dieAlpha} rolling={this.state.rolling} />
				<Die face={this.state.dieBeta} rolling={this.state.rolling} />
				<button onClick={this.roll} disabled={this.state.rolling}>
					{this.state.rolling ? 'Rolling...' : 'Roll Dice!'}
				</button>
			</section>
		);
	}
}

export default RollDice;

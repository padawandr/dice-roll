import React, { Component } from 'react';
import RollDice from './components/RollDice';
import RollDiceF from './components/RollDiceF';

class App extends Component {
	render() {
		return (
			<>
				<RollDice />
				<hr />
				<RollDiceF />
			</>
		);
	}
}

export default App;

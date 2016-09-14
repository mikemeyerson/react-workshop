import React from 'react';
import { render } from 'react-dom';

// createElement(element type, props, children)
// ES6: var deprecated for const, let
// ES6: const props = { heading: heading } ----> { heading }
// const App = ({ heading }) => React.createElement(
// 	'h1', {className: heading}, 'Hello hello!!'
// );

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			heading: 'hehe',
			isH2Clicked: false,
			fontSize: 40,
			counter: 0
		};
	}

	// Arrow syntax allows "this" to refer to Object's scope still
	// Would use this.handleChangingColor = this.handleChangingColor.bind(this);
	handleChangingColor = () => {
		this.setState(
			{
				isClicked: !this.state.isClicked,
				fontSize: --this.state.fontSize
			}
		);
	};

	incrementCounter = () => {
		this.setState(
			{
				counter: this.state.counter + 1
			}
		)
	};

	decrementCounter = () => {
		this.setState(
			{
				counter: this.state.counter - 1
			}
		)
	};

	render() {

		const myStyle = {
			backgroundColor: this.state.isClicked ? 'green' : 'red',
			color: this.state.isClicked ? 'red' : 'green',
			fontSize: this.state.fontSize
		};

		return (
			/* JSX Syntax - escape to javascript using {} */
			<div>
				<h1 className={this.state.heading+this.props.heading}>Hello World.</h1>
				<h2
					style={ myStyle }
					onClick={this.handleChangingColor}
				>
					im shrinking
				</h2>
				<h3>My Counter</h3>
				<div>
					<span
						onClick={this.incrementCounter}
					>
						+
					</span>
					<span>
						{this.state.counter}
					</span>
					<span
						onClick={this.decrementCounter}
					>
						-
					</span>
				</div>
			</div>
		);
		// return React.createElement(
		// 	'h1', {className: this.state.heading}, 'Hello amex!!'
		// );
	}
}

render(React.createElement(App, {heading: 'AMEX'}), document.getElementById('app'));

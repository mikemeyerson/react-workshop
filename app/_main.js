import React from 'react';
import { render } from 'react-dom';
import CreditCardForm from './CreditCardForm.js';

// const App = ({ heading }) => React.createElement(
// 	'h1', {className: heading}, 'Hello Universe'
// );

// class ShrinkingH1 extends React.Component {
// 	render() {
// 		return (
// 			<h1
// 				style={ {fontSize: this.props.fontSize} }
// 				onMouseOver={this.props.decreaseFontSize}
// 			>
// 				Hello World
// 			</h1>
// 		)
// 	}
// }

// props = { fontSize: number, decreaseFontSize: Function }
// const ShrinkingH1 = ({ fontSize, decreaseFontSize }) => (
const ShrinkingH1 = (props) => (
			<h1
				style={ {fontSize: props.fontSize} }
				onMouseOver={props.decreaseFontSize}
			>
				Hello World
			</h1>
);


class ColorChangingH2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isH2Clicked: false
		}
	}

	handleChangingColor = () => {
		this.setState(
			{
				isH2Clicked: !this.state.isH2Clicked
			}
		);
	}

	render() {
		// ES6: const isH2Clicked = this.state.isH2Clicked;
		const { isH2Clicked } = this.state;
		const { color1, color2 } = this.props;
		const myStyle = {
			backgroundColor: isH2Clicked ? (color1 || "green") : (color2 || "red"),
			color: 'white'
		};
		return (
			<h2
				style={myStyle}
				onClick={this.handleChangingColor}
			>
				Hello React
			</h2>
		);
	}
}

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 14
		}
	}

	handleIncrement = () => {
		this.setState({ count: this.state.count + 1});
	}

	handleDecrement = () => {
		this.setState({ count: this.state.count - 1});
	}

	render() {
		const myStyle = {
			counterFontSize: { fontSize: 40 }
		};

		const { user } = this.props;

		return (
			<div>
				<h3> {user ? `${user}'s` : "My" } counter </h3>
				<div style={myStyle.counterFontSize}>
					<button onClick={this.handleIncrement}> + </button>
					<span> {this.state.count} </span>
					<button onClick={this.handleDecrement}> - </button>
				</div>
			</div>
		);
	}
}

// Counter.PropTypes = {
// 	user: React.propTypes.isRequired
// }

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			h1FontSize: 30,
			userInfo: [
				{ name: 'John', age: 15 },
				{ name: 'Mike', age: 25 },
				{ name: 'Angel', age: 30}
			]
		}
	}

	handleDecreaseFontSize = () => {
		this.setState({
			h1FontSize: this.state.h1FontSize - 1
		});
	}

	handleSubmit = (creditCardInfo) => {
		// Post creditCardInfo to backend, and get token....etc
	};

	render() {
		const { h1FontSize } = this.state;
		const users = this.state.userInfo.map(
			user => <li>{`${user.name} who is ${user.age}`}</li>
		);
		return (
			<div>
				{JSON.stringify(this.state)}
				<ShrinkingH1
					fontSize={h1FontSize}
					decreaseFontSize={this.handleDecreaseFontSize}
				/>
				<ColorChangingH2 color1="blue" color2="yellow"/>
				<Counter user="Mike"/>
				<CreditCardForm handleSubmit={this.handleSubmit} />
				<ul>
					{users}
				</ul>
			</div>
		);
	}
}

render(React.createElement(App, {heading: 'AMEX'}), document.getElementById('app'));

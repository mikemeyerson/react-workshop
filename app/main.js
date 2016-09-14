import React from 'react';
import { render } from 'react-dom';

// const App = ({ heading }) => React.createElement(
// 	'h1', {className: heading}, 'Hello Universe'
// );

// Class names must ALWAYS be capitalized
// class ShrinkingH1 extends React.Component {
//
// 	render() {
// 		const { fontSize, decreaseFontSize } = this.props;
// 		return (
// 			<h1
// 				style={ {fontSize: fontSize} }
// 				onMouseOver={decreaseFontSize}
// 			>
// 				Hello World
// 			</h1>
// 		);
// 	}
// }

// Pure Component version of above Class declaration
const ShrinkingH1 = ({fontSize, decreaseFontSize}) => (
	<h1
		style={ {fontSize: fontSize} }
		onMouseOver={decreaseFontSize}
	>
		Hello World
	</h1>
);

class ColorChangingH2 extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isH2Clicked: false
		};
	}

	handleChangingColor = () => {
		this.setState(
			{
				isH2Clicked: !this.state.isH2Clicked
			}
		);
	}

	render() {
		const { isH2Clicked } = this.state;
		const { color1, color2 } = this.props;
		const myStyle = {
			backgroundColor: isH2Clicked ? (color1 || 'green') : (color2 || 'red'),
			color: 'white'
		};

		return (
			<h2
				style={myStyle}
				onClick={this.handleChangingColor}
			>
				Hello React
			</h2>
		)
	}
}

class Counter extends React.Component {
	static propTypes = {
    user: React.PropTypes.string.isRequired
  };

	constructor(props) {
		super(props);
		this.state = {
			counter: 0
		};
	}

	incrementCounter = () => {
		this.setState({
			counter: this.state.counter + 1
		});
	}

	decrementCounter = () => {
		this.setState({
			counter: this.state.counter - 1
		});
	}

	render() {
		const myStyle = {
			counterFontSize: {fontSize: 40}
		};

		const { user } = this.props;
		//Could also use ES6 interpolation
		return (
			<div>
				<h3> {user ? user + "'s" : 'My'} counter </h3>
				<div style={myStyle.counterFontSize}>
					<button
						onClick={this.incrementCounter}
					>
						+
					</button>
					<span> {this.state.counter} </span>
					<button
						onClick={this.decrementCounter}
					>
						-
					</button>
				</div>
			</div>
		);
	}
}

class MyInput extends React.Component {
	render() {
		return (
			<div>
				<h3>{this.props.label}</h3>
				<input
					placeholder="type something..."
					onChange={this.props.inputHandler}
				/>
			</div>
		);
	}
}

class SubmitButton extends React.Component {
	render() {
		const myStyle = {
			marginTop: 10,
			padding: 5
		}

		return (
			<button
				style={myStyle}
				onClick={this.props.clickHandler}
			>
				Submit
			</button>
		);
	}
}

class CreditCardForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			creditCardValue: '',
			expDateValue: '',
			zipCodeValue: '',
			isInvalid: false
		};
	}

	handleCreditCardInput = (event) => {
		this.setState({
			creditCardValue: event.target.value
		});
	}

	handleExpDateInput = (event) => {
		this.setState({
			expDateValue: event.target.value
		});
	}

	handleZipCodeInput = (event) => {
		this.setState({
			zipCodeValue: event.target.value
		});
	}

	handleSubmit = () => {
		const { creditCardValue } = this.state;
		if (creditCardValue.length < 14 || creditCardValue.length > 16) {
			this.setState({ isInvalid: true });
		} else {
			this.setState({ isInvalid: false });
			this.props.submitHandler(this.state);
		}
	}

	render() {
		return (
			<div>
				{JSON.stringify(this.state)}
				<MyInput
					label="Credit card number"
					inputHandler={this.handleCreditCardInput}
				/>
				<MyInput
					label="Exp Date"
					inputHandler={this.handleExpDateInput}
				/>
				<MyInput
					label="Zip Code"
					inputHandler={this.handleZipCodeInput}
				/>
				{this.state.isInvalid && <p style={{color: 'red'}}>Your input is invalid</p>}
				<SubmitButton clickHandler={this.handleSubmit}/>
			</div>
		);
	}
}

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			h1FontSize: 30
		};
	}

	handleDecreaseFontSize = () => {
		this.setState({
			h1FontSize: this.state.h1FontSize - 1
		});
	}

	handleSubmit = (creditCardInfo) => {
		//Post to backend, get token, etc.
		console.info('finished!!');
		console.info(creditCardInfo);
	}

	render() {
		return (
			<div>
				<ShrinkingH1
					fontSize={this.state.h1FontSize}
					decreaseFontSize={this.handleDecreaseFontSize}
				/>
				<ColorChangingH2 color1="grey" color2="#F78e87" />
				<Counter user="Mike"/>
				<CreditCardForm submitHandler={this.handleSubmit}/>
			</div>
		);
	}
}

render(React.createElement(App, {heading: 'AMEX'}), document.getElementById('app'));

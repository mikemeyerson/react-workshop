import React from 'react';


// Can use ?string for optionally defined string but required attribute in state
// or zipcode?: to be optional attribute in state
type State = {
	cardNumber: string,
	expYear: string,
	zipcode: string,
	isInvalid: boolean
};

// handleSubmit: Function
type Props = {
	handleSubmit: (argument: State) => void
};

class MyInput extends React.Component {
	render() {
		return (
			<div>
				<h3> {this.props.label} </h3>
				<input
					placeholder="type something..."
					onChange={this.props.handleInput}
				/>
			</div>
		);
	}
}

export default class CreditCardForm extends React.Component {
	state: State;

	constructor(props: Props) {
		super(props);
		this.state = {
			cardNumber: '',
			expYear: '',
			zipcode: '',
			isInvalid: false
		};
	}

	handleCCNumberInput = (event: { target: { value: string } }) => {
		this.setState({ cardNumber: event.target.value });
	}

	handleExpYearInput = (event: { target: { value: string } }) => {
		this.setState({ expYear: event.target.value });
	}

	handleZipcodeInput = (event: { target: { value: string } }) => {
		this.setState({ zipcode: event.target.value });
	}

	handleSubmit = () => {
		const { cardNumber } = this.state;
		if (cardNumber.length < 14 || cardNumber.length > 16 ) {
			this.setState({ isInvalid: true })
		} else {
			this.props.handleSubmit(this.state)
		}
	}

	render() {
		return (
			<div>
				{JSON.stringify(this.state)}
				<MyInput
					label="Credit card number"
					handleInput={this.handleCCNumberInput}
				/>
				<MyInput
					label="Expiration Year"
					handleInput={this.handleExpYearInput}
				/>
				<MyInput
					label="Zipcode"
					handleInput={this.handleZipcodeInput}
				/>
				{this.state.isInvalid && <p style={{color: 'red'}}>Your input is invalid </p>}
				<button onClick={this.handleSubmit}> Submit </button>
			</div>
		);
	}
}

// Only gives warning in run-time - why we use flow instead
// CreditCardForm.PropTypes = {
// 	handleSubmit: React.propTypes.Func
// };

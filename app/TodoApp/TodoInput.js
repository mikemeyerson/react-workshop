import React from 'react';

export default class TodoInput extends React.Component {
	render() {
		return (
			<div>
				<input
					placeholder="type your todo"
					onChange={this.props.inputHandler}
					onKeyDown={this.props.keyDownHandler}
					value={this.props.inputValue}
				/>
				<button onClick={this.props.submitHandler}>
					Submit
				</button>
			</div>
		);
	}
}

import React from 'react';
import TodoInput from './TodoInput';
import TodoBoard from './TodoBoard';

export default class TodoApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			myTodos: [],
			inputValue: ''
		};
	}

	handleInput = (event) => {
		this.setState({ inputValue: event.target.value });
	};

	addToBoard = () => {
		const { myTodos, inputValue } = this.state;
		this.setState({
			myTodos: [...myTodos, inputValue],
			// myTodos: myTodos.concat([inputValue]),
			inputValue: ''
		});
	};

	handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			this.addToBoard();
		}
	}

	render() {
		const { myTodos, inputValue } = this.state;
		return (
			<div>
				{JSON.stringify(this.state)}
				<h1>To Do App</h1>
				<TodoInput
					inputValue={this.state.inputValue}
					inputHandler={this.handleInput}
					submitHandler={this.addToBoard}
					keyDownHandler={this.handleKeyDown}
				/>
				<TodoBoard myTodos={this.state.myTodos}/>
			</div>
		);
	}
}

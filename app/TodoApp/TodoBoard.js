/* @flow */
import React from 'react';
import TodoItem from './TodoItem';

type Props = {
	myTodos: Array<string>
};

export default class TodoBoard extends React.Component {
	props: Props;

	render() {
		const todoBoardStyle = {
			width: 250,
			height: 500,
			border: '1px solid black'
		};

		const todos = this.props.myTodos.map(
			item => <TodoItem todo={item} />
		);

		return (
			<div style={todoBoardStyle}>
				<ul>
					{todos}
				</ul>
			</div>
		);
	}
}

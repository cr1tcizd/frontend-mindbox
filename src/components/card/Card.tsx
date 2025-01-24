import { useContext, useState } from 'react'
import cls from './Card.module.css'
import { v4 as uuidv4 } from 'uuid'
import Todo from '../todo/Todo'
import { ITodosContext, TodosContext } from '../../app/context/TodosContext'

import ArrowBottomSvg from './../../assets/arrowBottom.svg?react'
import CardBottom, { activeButton } from '../CardBottom/CardBottom'

export interface ITodo {
	id: string
	text: string
	completed: boolean
}

export default function Card() {
	const [text, setText] = useState<string>('')
	const { addTodo, todos, activeFilter } = useContext(
		TodosContext
	) as ITodosContext

	const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter' && text !== '') {
			const id = uuidv4()
			addTodo({ id, text, completed: false })
			setText('')
		}
	}

	const filteredTodos =
		activeFilter === activeButton.ACTIVE
			? todos.filter(item => item.completed === false)
			: activeFilter === activeButton.COMPLETED
			? todos.filter(item => item.completed === true)
			: todos

	return (
		<div className={cls.card}>
			<div className={cls.inputContainer}>
				<ArrowBottomSvg width={15} className={cls.bottomArrow} />
				<input
					className={cls.input}
					type='text'
					value={text}
					onChange={e => setText(e.target.value)}
					onKeyDown={handleEnterPress}
					placeholder='What needs to be done?'
				/>
			</div>
			{filteredTodos.map(todo => (
				<Todo key={todo.id} todo={todo} />
			))}
			<CardBottom />
			<div className={cls.backgroundCard}></div>
			<div className={cls.backgroundCard2}></div>
		</div>
	)
}

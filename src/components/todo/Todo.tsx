import cls from './Todo.module.css'
import CheckMark from './../../assets/check.svg?react'
import { ITodo } from '../card/Card'
import { useContext, useState } from 'react'
import { ITodosContext, TodosContext } from '../../app/context/TodosContext'

interface TodoProps {
	todo: ITodo
}

export default function Todo({ todo }: TodoProps) {
	const { completed, text } = todo
	const { check } = useContext(TodosContext) as ITodosContext
	const [status, setStatus] = useState(completed)

	const handleCheckMark = () => {
		check(todo)
		setStatus(prev => !prev)
	}

	return (
		<div className={cls.todo}>
			<div
				className={
					status
						? `${cls.checkMark} ${cls.checkMarkActive}`
						: `${cls.checkMark}`
				}
				onClick={handleCheckMark}
			>
				<CheckMark className={cls.check} width={15} />
			</div>
			<p
				className={status ? `${cls.text} ${cls.textCompleted}` : `${cls.text}`}
			>
				{text}
			</p>
		</div>
	)
}

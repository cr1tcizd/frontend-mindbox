import { useContext } from 'react'
import cls from './CardBottom.module.css'
import { ITodosContext, TodosContext } from '../../app/context/TodosContext'

export default function CardBottom() {
	const { getRemain, todos } = useContext(TodosContext) as ITodosContext

	const handleActiveTodo = () => {}

	return (
		<div className={cls.bottom}>
			<p className={cls.bottomLeft}>{getRemain()} items left</p>
			<div className={cls.bottomCenter}>
				<button className={cls.btn}>All</button>
				<button className={cls.btn}>Active</button>
				<button className={cls.btn}>Completed</button>
			</div>
			<button className={cls.bottomRight}>Clear completed</button>
		</div>
	)
}

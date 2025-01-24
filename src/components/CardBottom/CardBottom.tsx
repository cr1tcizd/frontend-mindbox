import { useContext } from 'react'
import cls from './CardBottom.module.css'
import { ITodosContext, TodosContext } from '../../app/context/TodosContext'

export enum activeButton {
	ALL = 'all',
	ACTIVE = 'active',
	COMPLETED = 'completed',
}

export default function CardBottom() {
	const { handleFilter, setTodos, todos } = useContext(
		TodosContext
	) as ITodosContext

	const handleClearCompleted = () => {
		setTodos(todos.filter(todo => todo.completed === false))
	}

	const remainTodo = todos.filter(item => !item.completed).length

	return (
		<div className={cls.bottom}>
			<p className={cls.bottomLeft}>{remainTodo} items left</p>
			<div className={cls.bottomCenter}>
				<button
					className={cls.btn}
					onClick={() => handleFilter(activeButton.ALL)}
				>
					All
				</button>
				<button
					className={cls.btn}
					onClick={() => handleFilter(activeButton.ACTIVE)}
				>
					Active
				</button>
				<button
					className={cls.btn}
					onClick={() => handleFilter(activeButton.COMPLETED)}
				>
					Completed
				</button>
			</div>
			<button className={cls.btn} onClick={handleClearCompleted}>
				Clear completed
			</button>
		</div>
	)
}

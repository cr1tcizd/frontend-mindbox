import { useContext, useState } from 'react'
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

	const [activeBtn, setActiveBtn] = useState<activeButton>(activeButton.ALL)

	const handleClearCompleted = () => {
		setTodos(todos.filter(todo => todo.completed === false))
	}

	const remainTodo = todos.filter(item => !item.completed).length

	return (
		<div className={cls.bottom}>
			<p className={cls.bottomLeft}>{remainTodo} items left</p>
			<div className={cls.bottomCenter}>
				<button
					className={
						activeBtn === activeButton.ALL
							? `${cls.btn} ${cls.btnActive}`
							: cls.btn
					}
					onClick={() => {
						handleFilter(activeButton.ALL)
						setActiveBtn(activeButton.ALL)
					}}
				>
					All
				</button>
				<button
					className={
						activeBtn === activeButton.ACTIVE
							? `${cls.btn} ${cls.btnActive}`
							: cls.btn
					}
					onClick={() => {
						handleFilter(activeButton.ACTIVE)
						setActiveBtn(activeButton.ACTIVE)
					}}
				>
					Active
				</button>
				<button
					className={
						activeBtn === activeButton.COMPLETED
							? `${cls.btn} ${cls.btnActive}`
							: cls.btn
					}
					onClick={() => {
						handleFilter(activeButton.COMPLETED)
						setActiveBtn(activeButton.COMPLETED)
					}}
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

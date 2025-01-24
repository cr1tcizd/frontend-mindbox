import { createContext, ReactNode, useState } from 'react'
import { ITodo } from '../../components/card/Card'
import { activeButton } from '../../components/CardBottom/CardBottom'

export interface ITodosContext {
	todos: ITodo[]
	addTodo: (todo: ITodo) => void
	check: (todo: ITodo) => void
	handleFilter: (btn: activeButton) => void
	activeFilter: activeButton
	setTodos: (todos: ITodo[]) => void
}

export const TodosContext = createContext<ITodosContext | null>(null)

export const TodosProvider = ({ children }: { children: ReactNode }) => {
	const localCats = JSON.parse(localStorage.getItem('todos') || '[]')
	const [todos, setTodos] = useState<ITodo[]>(localCats)
	const [activeFilter, setActiveFilter] = useState<activeButton>(
		activeButton.ALL
	)

	const addTodo = (todo: ITodo) => {
		setTodos([...todos, todo])
		localStorage.setItem('todos', JSON.stringify([...todos, todo]))
	}

	const check = (todo: ITodo) => {
		todo.completed = !todo.completed
		setTodos(
			todos.map(item =>
				item.id === todo.id ? { ...item, completed: todo.completed } : item
			)
		)
		localStorage.setItem(
			'todos',
			JSON.stringify(
				todos.map(item =>
					item.id === todo.id ? { ...item, completed: todo.completed } : item
				)
			)
		)
	}

	const handleFilter = (btn: activeButton) => {
		setActiveFilter(btn)
	}

	return (
		<TodosContext.Provider
			value={{
				todos,
				addTodo,
				check,
				handleFilter,
				activeFilter,
				setTodos,
			}}
		>
			{children}
		</TodosContext.Provider>
	)
}

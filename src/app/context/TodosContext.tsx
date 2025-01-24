import { createContext, ReactNode, useState } from 'react'
import { ITodo } from '../../components/card/Card'

export interface ITodosContext {
	todos: ITodo[]
	addTodo: (todo: ITodo) => void
	check: (todo: ITodo) => void
	getRemain: () => number
}

export const TodosContext = createContext<ITodosContext | null>(null)

export const TodosProvider = ({ children }: { children: ReactNode }) => {
	const localCats = JSON.parse(localStorage.getItem('todos') || '[]')
	const [todos, setTodos] = useState<ITodo[]>(localCats)

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

	const getRemain = () => {
		return todos.filter(item => !item.completed).length
	}

	const activeTodos = () => {}

	return (
		<TodosContext.Provider value={{ todos, addTodo, check, getRemain }}>
			{children}
		</TodosContext.Provider>
	)
}

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import { TodosProvider } from './app/context/TodosContext.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<TodosProvider>
			<App />
		</TodosProvider>
	</StrictMode>
)

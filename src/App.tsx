import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './context/themeContext'
import { Dashboard, Login } from './pages'

function App() {
	return (
		<ThemeProvider>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/" element={<Dashboard />} />
				<Route path="*" element={<Dashboard />} />
			</Routes>
		</ThemeProvider>
	)
}

export default App

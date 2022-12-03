import { EuiProvider, EuiThemeProvider } from '@elastic/eui'
import { createContext, FC, ReactNode, useState } from 'react'
import { EmptyFunc, Theme } from '../types'

interface IThemeContext {
	mode: Theme
	toggleTheme: EmptyFunc
}

interface IThemeProvider {
	children?: ReactNode | JSX.Element | ReactNode[]
}

export const ThemeContext = createContext<IThemeContext>({
	mode: 'light',
	toggleTheme: () => {},
})

export const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
	const [mode, setMode] = useState<Theme>('dark')

	const overrides = {
		colors: {
			LIGHT: { primary: '#0b5cff' },
			DARK: { primary: '#0b5cff' },
		},
	}

	const toggleTheme = () => {
		if (mode === 'light') {
			setMode('dark')
		} else {
			setMode('light')
		}
	}

	const value = {
		mode,
		toggleTheme,
	}

	return (
		<ThemeContext.Provider value={value}>
			<EuiProvider colorMode={mode}>
				<EuiThemeProvider modify={overrides}> {children}</EuiThemeProvider>
			</EuiProvider>
		</ThemeContext.Provider>
	)
}

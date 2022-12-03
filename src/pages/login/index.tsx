import {
	EuiButton,
	EuiButtonIcon,
	EuiFlexGroup,
	EuiFlexItem,
	EuiImage,
	EuiPanel,
	EuiSpacer,
	EuiText,
	EuiTextColor,
} from '@elastic/eui'
import React, { useContext } from 'react'
import styles from './index.module.scss'
import Animation from '@/assets/animation.gif'
import Logo from '@/assets/logo.png'
import Google from '@/assets/google.svg'
import { ThemeContext } from '@/context/themeContext'

const Login = () => {
	const { mode, toggleTheme } = useContext(ThemeContext)

	return (
		<EuiFlexGroup
			alignItems="center"
			justifyContent="center"
			className={styles.login}
		>
			<EuiFlexItem grow={false}>
				<EuiPanel paddingSize="xl">
					<EuiFlexGroup justifyContent="center" alignItems="center">
						<EuiFlexItem>
							<EuiImage src={Animation} alt="Welcome" />
						</EuiFlexItem>
						<EuiFlexItem>
							<EuiImage src={Logo} alt="logo" size={230} />
							<EuiSpacer size="xs" />

							<EuiText textAlign="center" grow={true}>
								<h3>
									<EuiTextColor>One platform to </EuiTextColor>
									<EuiTextColor color="#0b5cff">connect</EuiTextColor>
								</h3>
							</EuiText>
							<EuiSpacer size="l" />
							<EuiButton>
								Login with Google{' '}
								<EuiImage src={Google} alt="Google" size={20} />
							</EuiButton>
						</EuiFlexItem>
					</EuiFlexGroup>
				</EuiPanel>
			</EuiFlexItem>
		</EuiFlexGroup>
	)
}

export default Login

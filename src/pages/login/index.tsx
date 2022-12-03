import {
	EuiButton,
	EuiFlexGroup,
	EuiFlexItem,
	EuiImage,
	EuiPanel,
	EuiSpacer,
	EuiText,
	EuiTextColor,
} from '@elastic/eui'
import Animation from '@/assets/animation.gif'
import Logo from '@/assets/logo.png'
import Google from '@/assets/google.svg'
import { firebaseAuth, userRef } from '@/config/firebase'
import { addDoc, getDocs, query, where } from 'firebase/firestore'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@/store/hooks'
import { setUser } from '@/store/slices/authSlice'
import styles from './index.module.scss'

const Login = () => {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	const handleLogin = async () => {
		const provider = new GoogleAuthProvider()

		const { user } = await signInWithPopup(firebaseAuth, provider)
		const { displayName, email, uid } = user

		if (email) {
			// to check if there's any user id in the DB
			// which corresponds to the current user id
			const fireStoreQuery = query(userRef, where('uid', '==', uid))

			// Get users from the DB
			const fetchedUsers = await getDocs(fireStoreQuery)

			// Checking if we have any user with the current user id
			// and if we don't
			// we add a new user
			if (fetchedUsers.docs.length === 0) {
				await addDoc(userRef, {
					uid,
					email,
					name: displayName,
				})
			}
		}

		if (displayName && email && uid) {
			dispatch(setUser({ name: displayName, email, uid }))
		}

		navigate('/')
	}

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
							<EuiButton onClick={handleLogin}>
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

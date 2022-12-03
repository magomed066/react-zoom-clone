import { IInitialUserState, IUser } from '@/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: IInitialUserState = {
	user: null,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<IUser>) {
			state.user = action.payload
		},
	},
})

export const { setUser } = authSlice.actions

export default authSlice.reducer

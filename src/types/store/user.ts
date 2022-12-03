export interface IUser {
	uid: string
	email: string
	name: string
}

export interface IInitialUserState {
	user: IUser | null
}

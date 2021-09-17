import React, { useContext, createContext } from 'react';
import { makeAutoObservable } from 'mobx';

export class AuthStore {
	_username: string | null = null;
	_email: string | null = null;
	_avatarUrl: string | null = null;

	constructor() {
		makeAutoObservable(this);
	}

	get username(): string {
		if (!this._username) {
			throw new Error('User Not Logged In');
		}
		return this._username;
	}

	isLoggedIn(): boolean {
		if (this._username) return true;
		return false;
	}

	login({
		givenName,
		email,
		photoUrl,
	}: {
		givenName?: string;
		email?: string;
		photoUrl?: string;
	}) {
		this._username = givenName || null;
		this._email = email || null;
		this._avatarUrl = photoUrl || null;
	}

	logout() {
		this._username = null;
	}
}

const authStore = new AuthStore();
const AuthContext = createContext<AuthStore>(authStore);
export const useAuthStore = () => useContext(AuthContext);

export function AuthStoreProvider({ children }: { children: React.ReactNode }) {
	return (
		<AuthContext.Provider value={authStore}>
			{children}
		</AuthContext.Provider>
	);
}

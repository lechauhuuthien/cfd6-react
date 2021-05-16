import { createContext, useContext, useEffect, useState } from 'react';
import authAPI from '../services/authAPI';

const AuthContext = createContext({});
export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ user, children }) => {
	const [currentUser, setCurrentUser] = useState(user);
	const [isLoginOpen, setIsLoginOpen] = useState(false);

	useEffect(() => {
		localStorage.setItem('user', JSON.stringify(currentUser));
	}, [currentUser]);

	async function handleLogin(username, password) {
		/*------------------------------*/
		try {
			let res = await authAPI.login({ username, password });
			if (res.data) {
				setCurrentUser({...res.data});
				return {
					success: true,
				};
			} else if (res.error) {
				return {
					error: res.error,
				};
			}
			/*------------------------------*/
		} catch (err) {}
	}
	return (
		<AuthContext.Provider value={{ currentUser, setCurrentUser, isLoginOpen, setIsLoginOpen, handleLogin }}>
			{children}
		</AuthContext.Provider>
	);
};

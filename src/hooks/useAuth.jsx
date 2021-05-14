import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ user, children }) => {
	const [currentUser, setCurrentUser] = useState(user);
	const [isLoginOpen, setIsLoginOpen] = useState(false);

	useEffect(() => {
		localStorage.setItem('user', JSON.stringify(currentUser));
	}, [currentUser])

	return (
		<AuthContext.Provider value={{ currentUser, setCurrentUser, isLoginOpen, setIsLoginOpen }}>{children}</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);

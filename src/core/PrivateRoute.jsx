import { Redirect, Route } from 'react-router';
import { useAuth } from '../hooks/useAuth';

function PrivateRoute(props) {
	const { currentUser, setIsLoginOpen } = useAuth();
    /*------------------------------*/
	if (!currentUser) {
		setTimeout(() => {
			setIsLoginOpen(true);
		}, 100);
		return <Redirect to="/" />;
	}
    /*------------------------------*/
	return <Route {...props} />;
}

export default PrivateRoute;

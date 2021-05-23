import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { setLoginStatus } from '../redux/actions/authAction';

function PrivateRoute(props) {
	const { user } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	/*------------------------------*/
	if (!user) {
		setTimeout(() => {
			dispatch(setLoginStatus(true));
		}, 100);
		return <Redirect to="/" />;
	}
	/*------------------------------*/
	return <Route {...props} />;
}

export default PrivateRoute;

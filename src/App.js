import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import './App.css';
import './assets/style/custom.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/Login';
import Nav from './components/Nav';
import PrivateRoute from './core/PrivateRoute';
import { AuthProvider } from './hooks/useAuth';
import CoinPresentPage from './pages/coinPresent';
import CooperationPage from './pages/cooperation';
import CourseDetailPage from './pages/courseDetail';
import CoursesPage from './pages/courses';
import EmailPage from './pages/email';
import FaqPage from './pages/faq';
import HomePage from './pages/home';
import Page404 from './pages/page404';
import PaymentPage from './pages/payment';
import ProfilePage from './pages/profile';
import ProjectPage from './pages/project';
import RegisterPage from './pages/register';
import TeamPage from './pages/team';
import store from './redux';

function App() {
	/*------------------------------*/
	// let user = JSON.parse(localStorage.getItem('user'));
	/*------------------------------*/
	return (
		<Provider  store={store}>
			{/* // <AuthProvider user={user}> */}
			<div className="App">
				<Header />
				<Nav />
				<Login />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/courses/:slug" component={CourseDetailPage} />
					<Route exact path="/courses" component={CoursesPage} />
					<Route path="/email" component={EmailPage} />
					<Route path="/faq" component={FaqPage} />
					<Route path="/coin" component={CoinPresentPage} />
					<Route path="/cooperation" component={CooperationPage} />
					<PrivateRoute path="/profile" component={ProfilePage} />
					<Route path="/projects" component={ProjectPage} />
					<Route path="/register/:slug" component={RegisterPage} />
					<Route path="/team" component={TeamPage} />
					<Route path="/payment" component={PaymentPage} />
					<Route component={Page404} />
				</Switch>
				<Footer />
			</div>
			{/* // </AuthProvider> */}
		</Provider>
	);
}

export default App;

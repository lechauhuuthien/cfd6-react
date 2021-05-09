import './App.css';
import './assets/style/custom.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import CoinPresentPage from './pages/coinPresent';
import CourseDetailPage from './pages/courseDetail';
import CoursesPage from './pages/courses';
import EmailPage from './pages/email';
import FaqPage from './pages/faq';
import HomePage from './pages/home';
import CooperationPage from './pages/cooperation';
import ProfilePage from './pages/profile';
import ProjectPage from './pages/project';
import RegisterPage from './pages/register';
import TeamPage from './pages/team';
import PaymentPage from './pages/payment';
import Page404 from './pages/page404';
import { Route, Switch } from 'react-router';
import Nav from './components/Nav';

function App() {
	return (
		<div className="App">
			<Header />
			<Nav />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/courses/:slug" component={CourseDetailPage} />
				<Route exact path="/courses" component={CoursesPage} />
				<Route path="/email" component={EmailPage} />
				<Route path="/faq" component={FaqPage} />
				<Route path="/coin" component={CoinPresentPage} />
				<Route path="/cooperation" component={CooperationPage} />
				<Route path="/profile" component={ProfilePage} />
				<Route path="/projects" component={ProjectPage} />
				<Route path="/register" component={RegisterPage} />
				<Route path="/team" component={TeamPage} />
				<Route path="/payment" component={PaymentPage} />
				<Route component={Page404} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;

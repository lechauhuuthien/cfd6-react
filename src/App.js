import './App.css';
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

function App() {
	return (
		<div className="App">
			<Header />
			{/* <HomePage /> */}
			{/* <CoursesPage /> */}
			{/* <CourseDetailPage /> */}
			{/* <EmailPage /> */}
			{/* <FaqPage /> */}
			{/* <CoinPresentPage /> */}
			{/* <CooperationPage /> */}
			{/* <ProfilePage /> */}
			{/* <ProjectPage /> */}
			{/* <RegisterPage /> */}
			{/* <TeamPage /> */}
			{/* <PaymentPage /> */}
			{/* <Page404 /> */}
			<Footer />
		</div>
	);
}

export default App;

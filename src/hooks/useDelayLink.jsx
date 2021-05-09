import { useHistory } from 'react-router';
import $ from 'jquery'

function useDelayLink() {
	const history = useHistory();
	return function delayLink(e) {
		e.preventDefault();
		const href = e.currentTarget.getAttribute('href');
		if (href) {
            $('.loading-page').css({'transform' : "translate(-50%, -50%) scale(200)", "transition" : "all 0.5s ease"});
			setTimeout(() => {
				history.push(href);
                $('.loading-page').css({'transform' : "translate(-50%, -50%) scale(0)", "transition" : "all 0.5s ease"});
			}, 500);
		}
	};
}

export default useDelayLink;

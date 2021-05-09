import { useState } from 'react';

const EMAIL_PATTERN = /^[a-z][a-z0-9_\.]{2,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/i,
	PHONE_PATTERN = /(84|0[3|5|7|8|9])+([0-9]{8,10})\b/,
	URL_PATTERN = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/i,
	NAME_PATTERN = /^[a-zA-Z\s]*$/;

function useFormValidate(initialState, validate) {
	const [form, setForm] = useState(initialState);
	const [error, setError] = useState({});
	/*------------------------------*/
	const { rule, message } = validate;
	/*------------------------------*/
	function onInputChange(e) {
		let name = e.target.name;
		let value = e.target.value;
		let type = e.target.type;
		if (type === 'checkbox') {
			value = e.target.checked;
		}
		setForm({
			...form,
			[name]: value,
		});
	}
	/*------------------------------*/
	function check() {
		let errorObj = {};
		/*---------*/
		for (const key in rule) {
			if (Object.hasOwnProperty.call(rule, key)) {
				let r = rule[key] || {};
                let m = message[key] || {};
				/*---------*/
				if (r?.required && !form[key]?.trim()) {
					errorObj[key] = m?.required || 'Vui lòng không để trống';
				}
				/*---------*/
				if (r?.pattern && form[key]?.trim()) {
					let { pattern } = r;

					if (pattern === 'email') pattern = EMAIL_PATTERN;
					if (pattern === 'phone') pattern = PHONE_PATTERN;
					if (pattern === 'url') pattern = URL_PATTERN;
					if (pattern === 'name') pattern = NAME_PATTERN;

					if (!pattern?.test(form[key])) {
						errorObj[key] = m?.pattern || 'Vui lòng nhập đúng định dạng';
					}
				}
			}
		}
        /*---------*/
		setError(errorObj);
		return errorObj;
	}
	/*------------------------------*/
	return {
		form,
		error,
		onInputChange,
		check,
	};
}

export default useFormValidate;

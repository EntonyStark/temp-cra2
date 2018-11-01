import { UA_LANGUAGE, RU_LANGUAGE, EN_LANGUAGE } from '../constants/actionTypes';

const DEFAULT_LANGUAGE = RU_LANGUAGE;
export const ALLOWED_LANGUAGES = [RU_LANGUAGE, EN_LANGUAGE, UA_LANGUAGE];

export default () => {
	let currentLang = '';

	if (navigator.languages && navigator.languages.length) {
		// latest versions of Chrome and Firefox set this correctly
		const language = navigator[0];
		currentLang = language;
	} else if (navigator.userLanguage) {
		// IE only
		currentLang = navigator.userLanguage;
	} else {
		// latest versions of Chrome, Firefox, and Safari set this correctly
		currentLang = navigator.language;
	}

	currentLang = typeof lang !== 'undefined' ? currentLang.split('-')[0].toLowerCase() : '';

	return ALLOWED_LANGUAGES.includes(currentLang) ? currentLang : DEFAULT_LANGUAGE;
};

import i18n from '../../i18n';
import getBrowserLanguage from '../../utils/language';

import { SET_PLATFORM_LANGUAGE } from '../../constants/actionTypes';

const USER_LANG = getBrowserLanguage();

const INITIAL_LANG_CONF = {
	language: USER_LANG,
	literals: i18n[USER_LANG],
};

export default (state = INITIAL_LANG_CONF, { type, payload }) => {
	switch (type) {
		case SET_PLATFORM_LANGUAGE: {
			return {
				language: payload,
				literals: i18n[payload],
			};
		}
		default:
			return state;
	}
};

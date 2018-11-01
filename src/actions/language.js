import { SET_PLATFORM_LANGUAGE } from '../constants/actionTypes';

import { database, auth } from '../firebaseConfig';

const langRef = database.ref('/language');

const setPlatformLanguage = payload => ({
	type: SET_PLATFORM_LANGUAGE,
	payload,
});

export const setLang = payload => dispatch => {
	const { lang, user } = payload;
	dispatch(setPlatformLanguage(lang));

	// set user language in database
	langRef.child(user.uid).set({ language: lang });
};

export const startListeningForLang = () => dispatch => {
	langRef.on('value', snapshot => {
		const { uid } = auth.currentUser;
		const all = snapshot.val();

		dispatch(setPlatformLanguage(all[uid].language));
	});
};

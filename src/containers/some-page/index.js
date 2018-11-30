import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { auth, storage, database } from '../../firebaseConfig';

export default class SomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: null,
		};

		this.userRef = database.ref('/users');
		this.storageRef = storage.ref('/user-images');
	}

	static propTypes = {
		history: PropTypes.object,
	};

	componentDidMount() {
		auth.onAuthStateChanged(currentUser => {
			// we are watching our status in fire base and if he change we set data
			this.setState({ currentUser });
		});
	}

	handleChange = e => {
		// flow for download file in firebase
		const { currentUser } = this.state;
		const file = e.target.files[0];

		const uploadTask = this.storageRef
			.child(currentUser.uid) // set key for user
			.child(file.name)
			.put(file, { contentType: file.type });

		uploadTask.on('state_changed', snapshot => {
			console.log('snapshot', `${(snapshot.bytesTransferred / snapshot.totalBytes) * 100} %`);
		});

		uploadTask
			.then(snapshot => snapshot.ref.getDownloadURL())
			.then(downloadURL => {
				this.userRef
					.child(currentUser.uid) // set key for user
					.child('photoURL') // set key for user property
					.set(downloadURL);
				return downloadURL;
			})
			.catch(err => console.log(err));
	};

	render() {
		return (
			<div>
				<div>
					<p>ololo file</p>
					<input type="file" name="file" onChange={this.handleChange} />
				</div>
			</div>
		);
	}
}

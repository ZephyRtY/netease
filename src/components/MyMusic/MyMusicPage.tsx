import React, { useEffect } from 'react';
import { user } from '../../utils/user';
import { PlaylistsContainer } from './Playlists';
import { SongListContain } from './SongList';
import './style/myMusic.scss';
export const MyMusicPage = (props: { user: typeof user }) => {
	useEffect(() => {
		props.user.LogIn('15527657001', 'yty7895123');
		return () => {
			console.log('log out');
			props.user.LogOut();
		};
	}, []);
	return (
		<div className="myMusic-container">
			<PlaylistsContainer user={user} />
			<SongListContain />
		</div>
	);
};

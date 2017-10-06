import React from 'react';
import Song from './Song'

export default ({songs}) => (
		<div className='song-container'>{songs.map(({id, artist, track, url, rank}) =>
				<div className='each-song'>
					<div className='rank' key={id}>
						<li className='rank'>{rank}</li>
					</div>
					<div className='img'>
						<img className='img' src={url} />
					</div>
					<div className='song-info'>
						<li className='track'> {track} </li>
						<li className='artist'> {artist} </li>
					</div>
			</div>
		)}</div>
	);

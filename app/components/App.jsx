import React from 'react'
import Header from './Header'
import List from './List'
import Banner from './Banner'
import uuid from 'uuid';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			songs: [
				{
					'id': uuid.v4(),
					'artist': 'Cardi B',
					'track': 'Bodak Yellow (Money Moves)',
					'url': 'http://charts-static.billboard.com/img/2016/03/cardi-b-n38.jpg',
					'rank': '1'
				},
				{
					'id': uuid.v4(),
					'artist': 'Post Malone Featuring 21 Savage',
					'track': 'Rockstar',
					'url': 'http://charts-static.billboard.com/img/2017/01/post-malone.jpg',
					'rank': 2
				},
				{
					'id': uuid.v4(),
					'artist': 'Taylor Swift',
					'track': 'Look What You Made Me Do',
					'url': 'http://charts-static.billboard.com/img/2016/12/taylor-swift.jpg',
					'rank': 3
				},
				{
					'id': uuid.v4(),
					'artist': 'Logic Featuring Alessia Cara & Khalid',
					'track': '1-800-273-8255',
					'url': 'http://charts-static.billboard.com/img/2017/05/logic-oea.jpg',
					'rank': 4
				},
				{
					'id': uuid.v4(),
					'artist': 'Luis Fonsi & Daddy Yankee Featuring Justin Bieber',
					'track': 'Despacito',
					'url': 'http://charts-static.billboard.com/img/2017/01/luis-fonsi-rkx-despacito-4j3.jpg',
					'rank': 5
				},
				{
					'id': uuid.v4(),
					'artist': 'French Montana Featuring Swae Lee',
					'track': 'Unforgettable',
					'url': 'http://charts-static.billboard.com/img/2017/04/french-montana.jpg',
					'rank': 6
				},
				{
					'id': uuid.v4(),
					'artist': 'Portugal. The Man',
					'track': 'Feel It Still',
					'url': 'http://charts-static.billboard.com/img/2007/08/portugal-the-man-l5z.jpg',
					'rank': 7
				},
				{
					'id': uuid.v4(),
					'artist': 'Imagine Dragons',
					'track': 'Believer',
					'url': 'http://charts-static.billboard.com/img/1840/12/imagine-dragons-hy6.jpg',
					'rank': 8
				},
				{
					'id': uuid.v4(),
					'artist': 'Yo Gotti Featuring Nicki Minaj',
					'track': 'Rake It Up',
					'url': 'http://charts-static.billboard.com/img/2017/07/yo-gotti.jpg',
					'rank': 9
				},
				{
					'id': uuid.v4(),
					'artist': 'Demi Lovato',
					'track': 'Sorry Not Sorry',
					'url': 'http://charts-static.billboard.com/img/2017/07/demi-lovato.jpg',
					'rank': 10
				}
			]
		};
	}

	render() {
		const {songs} = this.state;

		return (
			<div>
				<Header />
				< Banner />
				<List songs={songs}/>
			</div>
		);
	}
}



export default App;
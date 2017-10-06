import React from 'react'

class Banner extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='banner-container'>
				<h3 className='banner'>THE HOT 10</h3>
			</div>
		);
	}
}

export default Banner;
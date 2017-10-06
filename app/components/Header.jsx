import React from 'react'

class Header extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='title-container'>
				<h1 className='title'>HotBeatz</h1>
			</div>
		);
	}
}

export default Header;
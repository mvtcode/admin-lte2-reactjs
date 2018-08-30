import $ from 'jquery';
import React, { Component } from "react";
import Modal from 'react-bootstrap-modal';
import YoutubePlayer from 'react-youtube-player';

class PlayerModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isShow: false,
			id: ''
		};

		this.player = React.createRef();

		this.show = this.show.bind(this);
		this.close = this.close.bind(this);
	}

	show(id){
		this.setState({
			isShow: true,
			id
		});
		setTimeout(() => {
			$('.modal').css({display: 'block', 'padding-right': '15px'});
		}, 100);

		// this.player.current.playVideo();

		// this.player.current.on('stateChange', (a, b) => {
		// 	console.log(a, b);
		// });
		console.log(this.player.current);
	};

	close() {
		this.state.isShow = false;
		this.setState(this.state);
	};

	render() {
		return (
			<React.Fragment>
				<Modal show={this.state.isShow} onHide={this.close} aria-labelledby="ModalHeader">
					<Modal.Header closeButton>
						<Modal.Title id='ModalHeader'>Video player</Modal.Title>
					</Modal.Header>
					<Modal.Body style={{height: 351}}>
						<YoutubePlayer
							ref={this.player}
							playbackState='playing'
							videoId={this.state.id}
							configuration={
								{
									showinfo: 0,
									controls: 1,
									enablejsapi: 1,
									fs: 1,
									hl: 'vi',
									loop: 0
								}
							}
						/>
					</Modal.Body>
				</Modal>
			</React.Fragment>
		);
	}

	componentDidMount() {
		console.log(this.player.current);
	}

	componentWillReceiveProps() {
		console.log(this.player.current);
	}

	componentDidUpdate() {
		console.log(this.player.current);
	}

	onYouTubePlayerAPIReady() {
		console.log('111');
	}
}

export default PlayerModal;
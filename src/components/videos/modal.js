/**
 * File: modal
 * Created by: tanmv
 * Date: 31/07/2018
 * Time: 16:37
 *
 */
import $ from 'jquery';
import React, { Component } from "react";
import Modal from 'react-bootstrap-modal';

class VideoModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isShow: false
		};

		this.showModal = this.showModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.saveAndClose = this.saveAndClose.bind(this);
	}

	showModal() {
		this.setState({isShow: true});
		setTimeout(() => {
			$('.modal').css({display: 'block', 'padding-right': '15px'});
		}, 100);
	};

	closeModal() {
		this.setState({isShow: false});
	};

	saveAndClose() {
		if (typeof this.props.onChange === 'function') {
			this.props.onChange({
				a: 1,
				b: 2
			});
		}
		this.closeModal();
	}

	render() {
		return (
			<React.Fragment>
				<Modal
					show={this.state.isShow}
					onHide={this.closeModal}
					aria-labelledby="ModalHeader"
				>
					<Modal.Header closeButton>
						<Modal.Title id='ModalHeader'>A Title Goes here</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<p>Some Content here</p>
					</Modal.Body>
					<Modal.Footer>
						<button className='btn btn-primary' onClick={this.saveAndClose}>
							Save
						</button>
						<Modal.Dismiss className='btn btn-default'>Cancel</Modal.Dismiss>
					</Modal.Footer>
				</Modal>
			</React.Fragment>
		);
	}
}

export default VideoModal;
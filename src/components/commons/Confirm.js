/**
 * File: Confirm
 * Created by: tanmv
 * Date: 31/07/2018
 * Time: 16:34
 *
 */

import $ from 'jquery';
import React, { Component } from "react";
import Modal from 'react-bootstrap-modal';

class Confirm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isShow: false
		};

		this.showModal = this.showModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.confirm = this.confirm.bind(this);
	}

	showModal() {
		this.setState({isShow: true});
		setTimeout(() => {
			$('.modal').css({display: 'block', 'padding-right': '15px'});
		}, 100);
	};

	closeModal() {
		this.setState({isShow: false});
		if (typeof this.props.onClose === 'function') {
			this.props.onClose();
		}
	};

	confirm(b) {
		this.setState({isShow: false});
		if (typeof this.props.onConfirm === 'function') {
			this.props.onConfirm(b);
		}
	};

	render() {
		return (
			<React.Fragment>
				<Modal
					show={this.state.isShow}
					onHide={this.closeModal}
					aria-labelledby="ModalHeader"
				>
					<Modal.Header closeButton>
						<Modal.Title id='ModalHeader'>{this.props.title || 'Confirm'}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<p>{this.props.content || 'content'}</p>
					</Modal.Body>
					<Modal.Footer>
						<button className='btn btn-primary' onClick={this.confirm(true)}>
							{this.props.btOk || 'Ok'}
						</button>
						<button className='btn btn-default' onClick={this.confirm(false)}>
							{this.props.btCancel || 'Cancel'}
						</button>
						{/*<Modal.Dismiss className='btn btn-default'>{this.props.btCancel || 'Cancel'}</Modal.Dismiss>*/}
					</Modal.Footer>
				</Modal>
			</React.Fragment>
		);
	}
}

export default Confirm;
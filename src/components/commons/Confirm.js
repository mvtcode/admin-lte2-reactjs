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
			title: '',
			content: '',
			btOk: '',
			btCancel: '',
			isShow: false,
			callback: null
		};

		this.showModal = this.showModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.confirm = this.confirm.bind(this);
	}

	showModal({title, content, btOk, btCancel, callback}) {
		this.setState({
			isShow: true,
			title: title || 'Confirm',
			content: content || 'Contents',
			btOk: btOk || 'Ok',
			btCancel: btCancel || 'Cancel',
			callback
		});
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
		if (typeof this.state.callback === 'function') {
			this.state.callback(b);
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
						<Modal.Title id='ModalHeader'>{this.state.title}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<p>{this.state.content}</p>
					</Modal.Body>
					<Modal.Footer>
						<button className='btn btn-primary' onClick={() => this.confirm(true)}>
							{this.state.btOk}
						</button>
						<button className='btn btn-default' onClick={() => this.confirm(false)}>
							{this.state.btCancel}
						</button>
						{/*<Modal.Dismiss className='btn btn-default'>{this.props.btCancel || 'Cancel'}</Modal.Dismiss>*/}
					</Modal.Footer>
				</Modal>
			</React.Fragment>
		);
	}
}

export default Confirm;
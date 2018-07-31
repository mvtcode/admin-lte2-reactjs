/**
 * File: Prompt
 * Created by: tanmv
 * Date: 31/07/2018
 * Time: 16:34
 *
 */

import $ from 'jquery';
import React, { Component } from "react";
import Modal from 'react-bootstrap-modal';

class Prompt extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isShow: false,
			value: ''
		};

		this.showModal = this.showModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	showModal() {
		this.setState({...this.state, isShow: true});
		setTimeout(() => {
			$('.modal').css({display: 'block', 'padding-right': '15px'});
		}, 100);
	};

	closeModal() {
		this.setState({...this.state, isShow: false});
		if (typeof this.props.onClose === 'function') {
			this.props.onClose();
		}
	};

	confirm(b) {
		this.setState({...this.state, isShow: false});
		if (typeof this.props.onConfirm === 'function') {
			this.props.onConfirm(this.state.value);
		}
	};

	handleChange(event) {
		this.state.value = event.target.value;
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
						<Modal.Title id='ModalHeader'>{this.props.title || 'Confirm'}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<p>{this.props.content || 'content'}</p>
						<p><imput type="text" value={this.state.value} onChange={this.handleChange} /></p>
					</Modal.Body>
					<Modal.Footer>
						<button className='btn btn-primary' onClick={this.confirm}>
							{this.props.btOk || 'Ok'}
						</button>
						<Modal.Dismiss className='btn btn-default'>{this.props.btCancel || 'Cancel'}</Modal.Dismiss>
					</Modal.Footer>
				</Modal>
			</React.Fragment>
		);
	}
}

export default Prompt;
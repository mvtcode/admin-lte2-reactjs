/**
 * File: Alert
 * Created by: tanmv
 * Date: 31/07/2018
 * Time: 16:34
 *
 */

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

class Alert extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			content: '',
			btOk: '',
			isShow: false,
			callback: null
		};

		this.showModal = this.showModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	showModal({title, content, btOk, btCancel, callback}) {
		this.setState({
			isShow: true,
			title: title || 'Alert',
			content: content || 'Contents',
			btOk: btOk || 'Ok',
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
						<Modal.Dismiss className='btn btn-primary'>{this.state.btOk}</Modal.Dismiss>
					</Modal.Footer>
				</Modal>
			</React.Fragment>
		);
	}
}

export default Alert;
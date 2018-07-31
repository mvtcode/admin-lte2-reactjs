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
			isShow: false
		};

		this.showModal = this.showModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
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

	render() {
		return (
			<React.Fragment>
				<Modal
					show={this.state.isShow}
					onHide={this.closeModal}
					aria-labelledby="ModalHeader"
				>
					<Modal.Header closeButton>
						<Modal.Title id='ModalHeader'>{this.props.title || 'Alert'}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<p>{this.props.content || 'content'}</p>
					</Modal.Body>
					<Modal.Footer>
						<Modal.Dismiss className='btn btn-default'>{this.props.btOk || 'Ok'}</Modal.Dismiss>
					</Modal.Footer>
				</Modal>
			</React.Fragment>
		);
	}
}

export default Alert;
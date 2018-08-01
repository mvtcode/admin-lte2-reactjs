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
			isShow: false,
			info: {
				_id: '',
				name: '',
				description: '',
				type: '',
				key: '',
				path: '',
				file: ''
			}
		};

		this.showModal = this.showModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.saveAndClose = this.saveAndClose.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	showModal(info) {
		this.setState({isShow: true, info: info? info: {} });
		setTimeout(() => {
			$('.modal').css({display: 'block', 'padding-right': '15px'});
		}, 100);
	};

	closeModal() {
		this.setState({isShow: false});
	};

	saveAndClose() {
		if (typeof this.props.onChange === 'function') {
			this.props.onChange(this.state.info);
		}
	}

	handleChange(key, event){
		this.state.info[key] = event.target.value;
		this.setState(this.state);
	}

	render() {
		return (
			<React.Fragment>
				<Modal show={this.state.isShow} onHide={this.closeModal} aria-labelledby="ModalHeader">
					<Modal.Header closeButton>
						<Modal.Title id='ModalHeader'>{this.state.info._id? 'Edit video': 'Add video'}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<form role="form" className="form-horizontal" data-toggle="validator">
							<div className="form-group">
								<label className="col-sm-3 control-label">Id:</label>
								<div className="col-sm-9">
									<input value={this.state.info._id} type="text" className="form-control" placeholder="id" disabled/>
								</div>
							</div>
							<div className="form-group">
								<label className="col-sm-3 control-label">Name:</label>
								<div className="col-sm-9">
									<input value={this.state.info.name} onChange={(event) => this.handleChange('name', event)} type="text" className="form-control" placeholder="Video name" required/>
								</div>
							</div>
							<div className="form-group">
								<label className="col-sm-3 control-label">Video type:</label>
								<div className="col-sm-9">
									<select value={this.state.info.type} onChange={(event) => this.handleChange('type', event)} className="form-control" style={{fontWeight: 'bold'}}>
										<option value="youtube">Youtube</option>
										<option disabled value="file">File</option>
									</select>
								</div>
							</div>
							<div className="form-group">
								<label className="col-sm-3 control-label">Youtube id:</label>
								<div className="col-sm-9">
									<input value={this.state.info.key} onChange={(event) => this.handleChange('key', event)} type="text" className="form-control" placeholder="Youtube id" required/>
								</div>
							</div>
							<div className="form-group">
								<label className="col-sm-3 control-label">Description:</label>
								<div className="col-sm-9">
									<textarea onChange={(event) => this.handleChange('description', event)} rows="3" className="form-control" placeholder="Video description" required>{this.state.description}</textarea>
								</div>
							</div>
						</form>
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
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
import * as youtube from '../../services/youtube';

const infoInit = {
	_id: '',
	name: '',
	description: '',
	type: 'youtube',
	key: '',
	path: '',
	file: ''
};

class VideoModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isShow: false,
			message: '',
			index: 0,
			info: {}
		};

		this.show = this.show.bind(this);
		this.close = this.close.bind(this);
		this.save = this.save.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	show(info, index) {
		this.setState({isShow: true, index, message: '', info: info? info: Object.assign({}, infoInit) });
		setTimeout(() => {
			$('.modal').css({display: 'block', 'padding-right': '15px'});
		}, 100);
	};

	close() {
		this.state.isShow = false;
		this.setState(this.state);
	};

	setMessage(message) {
		this.state.message = message;
		this.setState(this.state);
	};

	save() {
		if (typeof this.props.onSave === 'function') {
			this.props.onSave(this.state.info, this.state.index);
		}
	}

	handleChange(key, event){
		this.state.info[key] = event.target.value;
		this.setState(this.state);
	}

	render() {
		return (
			<React.Fragment>
				<Modal show={this.state.isShow} onHide={this.close} aria-labelledby="ModalHeader">
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
									<select onChange={(event) => this.handleChange('type', event)} className="form-control" style={{fontWeight: 'bold'}}>
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
									<textarea value={this.state.info.description} onChange={(event) => this.handleChange('description', event)} rows="3" className="form-control" placeholder="Video description" required></textarea>
								</div>
							</div>
						</form>
					</Modal.Body>
					<Modal.Footer>
						<div className="row">
							<div className="col-sm-7">
								{this.state.message}
							</div>
							<div className="col-sm-5">
								<button className='btn btn-primary' onClick={this.save}>
									Save
								</button>
								<Modal.Dismiss className='btn btn-default'>Cancel</Modal.Dismiss>
							</div>
						</div>
					</Modal.Footer>
				</Modal>
			</React.Fragment>
		);
	}
}

export default VideoModal;
import React, { Component } from "react";
import Pagination from "react-js-pagination";
import {pageType} from "../../actions";
import stores from '../../stores';
import Modal from './modal';
import Confirm from '../commons/Confirm';
import Alert from '../commons/Alert';
import * as videoService from '../../services/videos';

class Videos extends Component {
	constructor(props) {
		super(props);

		this.handlePageChanged = this.handlePageChanged.bind(this);
		this.showModal = this.showModal.bind(this);
		this.edit = this.edit.bind(this);
		this.remove = this.remove.bind(this);

		this.state = {
			page: {
				total: 0,
				page_size: 5,
				page_index: 1,
				visiblePage: 5
			},
			list: []
		};

		this.modal = React.createRef();
		this.modalConfirm = React.createRef();
		this.modalAlert = React.createRef();
	}

	componentWillMount() {
		stores.dispatch({
			type: pageType.SET_PAGE,
			info: {
				title: 'Videos',
				name: 'Videos',
				description: 'Manager'
			}
		});
	}

	handlePageChanged(newPage) {
		const state = this.state;
		state.page.page_index = newPage;
		this.setState(state);
	}

	showModal() {
		this.modal.current.showModal();
	};

	save(data) {
		console.log(data);
	};

	render() {
		return (
			<React.Fragment>
				<div className="row">
					<div className="col-xs-12">
						<div className="box">
							<div className="box-header">
								<h3 className="box-title">List videos</h3>
							</div>
							<div className="box-body">
								<div className="dataTables_wrapper form-inline dt-bootstrap">
									<div className="row">
										<div className="col-sm-12">
											<table className="table table-bordered table-striped">
												<thead>
												<tr>
													<th>No.</th>
													<th>Name</th>
													<th>Type</th>
													<th>key</th>
													<th>Description</th>
													<th>Action</th>
												</tr>
												</thead>
												<tbody>
												{
													this.state.list.map((_info, index) => {
														return (
															<tr key={index}>
																<td>{index + 1}</td>
																<td>{_info.name}</td>
																<td>{_info.key}</td>
																<td>{_info.type}</td>
																<td>{_info.description}</td>
																<td>
																	<a href="javascript:void(0)" onClick={() => this.edit(_info, index)}>Edit</a> | <a href="javascript:void(0)" onClick={() => this.remove(_info, index)}>Delete</a>
																</td>
															</tr>
														);
													})
												}
												</tbody>
											</table>
										</div>
									</div>

									<div className="row">
										<div className="col-sm-5">
											<div className="dataTables_info">Showing 1 to 10 of 57 entries</div>
										</div>
										<div className="col-sm-7">
											<Pagination
												totalItemsCount={this.state.page.total}
												itemsCountPerPage={this.state.page.page_size}
												activePage={this.state.page.page_index}
												pageRangeDisplayed={this.state.page.visiblePage}
												onChange={this.handlePageChanged}
												firstPageText={<i className='fa fa-fast-backward'/>}
												lastPageText={<i className='fa fa-fast-forward'/>}
												prevPageText={<i className='fa fa-step-backward'/>}
												nextPageText={<i className='fa fa-step-forward'/>}
											/>
										</div>
									</div>

								</div>
							</div>

							<div className="box-footer">
								<div className="row">
									<div className="col-xs-12 text-center">
										<button onClick={this.showModal} className="btn btn-primary" type="button"><i className="fa fa-plus"></i> Add</button>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>

				<Modal ref={this.modal} onChange={this.save} />
				<Confirm ref={this.modalConfirm}/>
				<Alert ref={this.modalAlert}/>
			</React.Fragment>
		);
	}

	async componentDidMount() {
		try {
			const res = await videoService.list({
				page_index: 0
			});

			if(res.error === 0) {
				const list = res.list;
				this.state.list = res.list;
				this.state.page.total = list.length;
				this.setState(this.state);
			} else {
				const self = this;
				this.modalAlert.current.showModal({
					title: 'Error',
					content: res.message,
					callback: function() {
						if(res.error === 401) {
							self.props.history.push(window.location.pathname + window.location.search);
						}
					}
				});
			}
		} catch (e) {
			this.modalAlert.showModal({
				title: 'Error',
				content: 'Get API list videos error'
			});
		}
	}

	edit(info, index) {
		this.modal.current.showModal(info);
	}

	remove(info, index) {
		const self = this;
		this.modalConfirm.current.showModal({
			title: 'Confirm delete',
			content: `Are your want delete video "${info.name}"?`,
			callback: (result) => {
				if(result) {
					self.state.list.splice(index, 1);
					self.setState(self.state);
					self.modalAlert.current.showModal({
						title: 'Deleted',
						content: 'The video has deleted'
					});
				}
			}
		});
	}
}

export default Videos;
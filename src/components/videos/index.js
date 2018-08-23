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
		this.save = this.save.bind(this);
		this.loadData = this.loadData.bind(this);

		this.state = {
			page: {
				total: 0,
				page_size: 20,
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
													<th className="text-center" style={{width: '4%'}}>No.</th>
													<th style={{width: '10%'}}>Thumb</th>
													<th style={{width: '20%'}}>Name</th>
													<th style={{width: '5%'}}>Type</th>
													<th style={{width: '5%'}}>key</th>
													<th style={{width: '46%'}}>Description</th>
													<th style={{width: '10%'}} className="text-center">Action</th>
												</tr>
												</thead>
												<tbody>
												{
													this.state.list.map((_info, index) => {
														return (
															<tr key={index}>
																<td className="text-center">{(this.state.page.page_index - 1) * this.state.page.page_size + index + 1}</td>
																<td><img src={_info.thumb ? _info.thumb: 'https://placehold.it/220x124?text=no+image'}/></td>
																<td>{_info.name}</td>
																<td>{_info.type}</td>
																<td>{_info.key}</td>
																<td>{_info.description.left(300)}</td>
																<td className="text-center">
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
											<div style={{display: this.state.list && this.state.list.length > 0? 'block': 'none'}} className="dataTables_info">Showing {(this.state.page.page_index - 1) * this.state.page.page_size + 1} to {(this.state.page.page_index - 1) * this.state.page.page_size + this.state.list.length} of {this.state.page.total} entries</div>
										</div>
										<div className="col-sm-7">
											<div style={{display: this.state.page.total > this.state.page.page_size? 'block': 'none'}}>
												<Pagination style={{display: 'block'}}
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
							</div>

							<div className="box-footer">
								<div className="row">
									<div className="col-xs-12 text-center">
										<button onClick={() => this.showModal(null)} className="btn btn-primary" type="button"><i className="fa fa-plus"></i> Add</button>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>

				<Modal ref={this.modal} onSave={this.save} />
				<Confirm ref={this.modalConfirm}/>
				<Alert ref={this.modalAlert}/>
			</React.Fragment>
		);
	}

	async loadData(page_index) {
		try {
			const res = await videoService.list({ page_index });

			if(res.error === 0) {
				const list = res.list;
				this.state.list = res.list;
				this.state.page.total = list.length;
				if(res.paging) {
					this.state.page.total = res.paging.total;
					this.state.page.page_size = res.paging.page_size;
					this.state.page.page_index = res.paging.page_index + 1;
				}
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

	async componentDidMount() {
		await this.loadData(0);
	}

	showModal(info, index) {
		this.modal.current.show(info, index);
	};

	handlePageChanged(page_index) {
		this.loadData(page_index - 1);
	}

	async save(info, index) {
		try {
			if(info._id) {
				const res = await videoService.update(info);
				if(res.error === 0) {
					this.state.list[index] = info;
					this.setState(this.state);
					this.modal.current.close();
				} else {
					this.modal.current.setMessage(res.message);
				}
			} else {
				const res = await videoService.add(info);
				if(res.error === 0) {
					if(this.state.page.page_index > 1) {
						await this.loadData(0);
					} else {
						this.state.list.unshift(res.info);
						this.state.page.total++;
						if(this.state.list.length > this.state.page.page_size) {
							this.state.list.pop();
						}
						this.setState(this.state);
					}
					this.modal.current.close();
				} else {
					this.modal.current.setMessage(res.message);
				}
			}
		} catch (e) {
			console.error('Save', e);
		}
	};

	edit(info, index) {
		this.showModal(info, index);
	}

	remove(info, index) {
		const self = this;
		this.modalConfirm.current.showModal({
			title: 'Confirm delete',
			content: `Are your want delete video "${info.name}"?`,
			callback: async (result) => {
				if(result) {
					const res = await videoService.remove(info._id);
					if(res.error === 0) {
						self.state.list.splice(index, 1);
						self.state.page.total--;
						if(self.state.list.length === 0 && this.state.page.page_index > 1) {
							await self.loadData(this.state.page.page_index - 2);
						} else {
							self.setState(self.state);
						}
					} else {
						self.modalAlert.current.showModal({
							title: 'Error',
							content: res.message
						});
					}
				}
			}
		});
	}
}

export default Videos;
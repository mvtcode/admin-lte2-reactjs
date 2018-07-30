import React, { Component } from "react";
import Pagination from "react-js-pagination";
import {pageType} from "../../actions";
import stores from '../../stores';

class Videos extends Component {
	constructor(props) {
		super(props);

		this.handlePageChanged = this.handlePageChanged.bind(this);

		this.state = {
			page: {
				total: 450,
				page_size: 20,
				page_index: 1,
				visiblePage: 5
			}
		};
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
													<th>Rendering engine</th>
													<th>Browser</th>
													<th>Platform(s)</th>
													<th>Engine version</th>
													<th>CSS grade</th>
												</tr>
												</thead>
												<tbody>
												<tr>
													<td>Trident</td>
													<td>Internet
														Explorer 4.0
													</td>
													<td>Win 95+</td>
													<td> 4</td>
													<td>X</td>
												</tr>
												<tr>
													<td>Trident</td>
													<td>Internet
														Explorer 5.0
													</td>
													<td>Win 95+</td>
													<td>5</td>
													<td>C</td>
												</tr>
												</tbody>
												<tfoot>
												<tr>
													<th>Rendering engine</th>
													<th>Browser</th>
													<th>Platform(s)</th>
													<th>Engine version</th>
													<th>CSS grade</th>
												</tr>
												</tfoot>
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
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Videos;
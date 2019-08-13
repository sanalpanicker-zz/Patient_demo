import React, { Component, Fragment } from 'react';
import GridTable from '../grid-table/grid-table.component';
import data from '../../data/data.json';
import './recent-orders.styles.scss';

class RecentOrders extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.setState({ data });
  }

  render() {
    //sending in predefined header values
    const headerVal = ['patient name', 'order date', 'metadata', 'medication'];
    return (
      <Fragment>
        {this.state.data ? (
          <div className="recent_orders">
            <div className="recent_orders__header">Recent Orders</div>
            <GridTable headerValues={headerVal} rowData={this.state.data} customButtons={true} />
          </div>
        ) : <div>....loading</div>}
      </Fragment>
    );
  }
}

export default RecentOrders;

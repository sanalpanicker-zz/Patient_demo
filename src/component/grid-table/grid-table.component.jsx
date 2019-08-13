/**
 * GridTable will be a functional component to render the table
 */

import React, { Fragment } from 'react';
import './grid-table.styles.scss';

const GridTable = (props) => {
  return (
    <Fragment>
      <div className="grid-table-row">
        {
          props.headerValues.map((headerTitle) => {
            return <div className="grid-table-cell__header">{headerTitle.toUpperCase()}</div>;
          })
        }
        {props.customButtons ? <div className="grid-table-cell__header--button" /> : null}
        {
          props.rowData.map((row) => {
            return (
              <Fragment>
                {props.headerValues.map((title) => {
                  return <div className={title === props.headerValues[0] ? `grid-table-cell status ${row.status}` : 'grid-table-cell'} data-title={title}>{row[`${title}`]}</div>;
                })
                }
                {props.customButtons ? <div className="grid-table-cell--button" data-title="detail"><button type="button" className="mn-button">Details</button></div> : null}
              </Fragment>
            );
          })
        }
      </div>
    </Fragment>
  );
};


export default GridTable;

/* eslint-disable react/forbid-prop-types */
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import React, { Component } from "react";
import "react-bootstrap-table/dist/react-bootstrap-table.min.css";
import "./style.scss";

class DefaultTable extends Component {
  render() {
    const { list, columns, loading } = this.props;
    const options = {
      paginationSize: 3,
      noDataText: loading ? "Loading..." : "There is no data to display.",
      sizePerPage: 5,
      sizePerPageList: [5, 15, 30, 100],
      mode: "click",
      blurToSave: true,
      searchDelayTime: 1500
    };

    const renderColumns = Object.keys(columns).map(column => {
      return (
        <TableHeaderColumn
          dataField={column}
          isKey={column === "id"}
          key={column || 0}
        >
          {columns[column]}
        </TableHeaderColumn>
      );
    });

    return (
      <div>
        <BootstrapTable
          bodered
          search
          trClassName={this.trClassFormat}
          options={options}
          data={list}
          pagination={true}
          deleteRow={false}
          remote={false}
          multiColumnSearch
          containerStyle={{
            padding: "4%",
            width: "100%"
          }}
          headerStyle={{
            marginBottom: "auto"
          }}
          striped
          hover
        >
          {renderColumns}
        </BootstrapTable>
      </div>
    );
  }
}

export default DefaultTable;

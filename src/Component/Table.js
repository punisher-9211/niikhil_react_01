import React from "react";
const Table = props => {
  const getKeys = function() {
    console.log("props:" + Object.keys(props.data));
    return Object.keys(props.data);
  };

  const getHeader = function() {
    var keys = getKeys();
    return keys.map((key, index) => {
      return <th key={key}>{key.toUpperCase()}</th>;
    });
  };

  const getRowsData = function() {
    var items = props.data;
    var keys = getKeys();
    return items.map((row, index) => {
      return (
        <tr key={index}>
          <RenderRow key={index} data={row} keys={keys} />
        </tr>
      );
    });
  };
  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>{getHeader()}</tr>
        </thead>
        <tbody>{getRowsData()}</tbody>
      </table>
    </div>
  );
};
export default Table;
const RenderRow = props => {
  return props.keys.map((key, index) => {
    return <td key={props.data[key]}>{props.data[key]}</td>;
  });
};

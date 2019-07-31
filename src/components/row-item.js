import React from "react";

const Row = ({ data, index, style }) => {
  if (!data[index]) return null;

  return (
    <div className="ListItem" style={style}>
      <div className="ListItem-Id">{data[index].id}</div>
      <div className="ListItem-Name">
        {`${data[index].first_name} ${data[index].last_name}`}
      </div>
      <div className="ListItem-Count">{data[index].count}</div>
    </div>
  );
};

export default Row;

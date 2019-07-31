import React from "react";

const Header = ({ width }) => (
  <div className="ListItem ListItem-Header" style={{ width: `${width}px` }}>
    <div className="ListItem-Id">User ID</div>
    <div className="ListItem-Name">Name</div>
    <div className="ListItem-Count">Login attempts</div>
  </div>
);

export default Header;

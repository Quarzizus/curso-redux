import React from "react";
import "./styles/User.scss";

const User = ({ userData }) => {
  return (
    <tr className="User">
      <td>{userData.id}</td>
      <td>{userData.name}</td>
      <td>{userData.email}</td>
    </tr>
  );
};

export default User;

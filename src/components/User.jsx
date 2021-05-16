import React from "react";
import { Link } from "react-router-dom";
import Icon from "../images/avocado.svg";
import "./styles/User.scss";

const User = ({ userData }) => {
  return (
    <tr className="User">
      <td className="User_id">{userData.id}</td>
      <td>{userData.name}</td>
      <td>{userData.email}</td>
      <td>
        <Link className="Link" to={`/users/${userData.id}`}>
          <img src={Icon} alt="" />
        </Link>
      </td>
    </tr>
  );
};

export default User;

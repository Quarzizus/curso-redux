import React, { useEffect } from "react";
import User from "./User";
import { connect } from "react-redux";
import "./styles/Users.scss";
import * as usersAction from "../actions/usersAction";

const Users = ({ traerTodosUsuarios, users }) => {
  useEffect(() => {
    traerTodosUsuarios();
  }, []);
  return (
    <table className="default">
      <thead>
        {console.log(users)}
        <tr>
          <th>N°</th>
          <th>Nombre</th>
          <th>Correo</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <User key={user.id} userData={user} />
        ))}
      </tbody>
    </table>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
};

export default connect(mapStateToProps, usersAction)(Users);

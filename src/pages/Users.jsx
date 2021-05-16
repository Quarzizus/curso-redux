import React, { useEffect } from "react";
import User from "../components/User";
import Spinner from "../components/Spinner";
import { connect } from "react-redux";
import "./styles/Users.scss";
import * as usersAction from "../actions/usersAction";

const Users = ({ loading, traerTodos, users }) => {
  useEffect(() => {
    traerTodos();
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <table className="default">
        <thead>
          <tr>
            <th>N°</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Icon</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <User key={user.id} userData={user} />
          ))}
        </tbody>
      </table>
    );
  }
};

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
};

export default connect(mapStateToProps, usersAction)(Users);

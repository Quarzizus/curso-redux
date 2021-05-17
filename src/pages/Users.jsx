import React, { useEffect } from "react";
import User from "../components/User";
import Spinner from "../components/Spinner";
import { connect } from "react-redux";
import "./styles/Users.scss";
import * as usersAction from "../actions/usersAction";

const Users = (props) => {
  useEffect(() => {
    if (!props.users.length) {
      props.traerTodos();
    }
  }, []);

  if (props.loading) {
    return (
      <>
        {console.log(props.loading)}
        <Spinner />
      </>
    );
  } else {
    return (
      <table className="default">
        <thead>
          {console.log(props.loading)}
          <tr>
            <th>N°</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Icon</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((user) => (
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

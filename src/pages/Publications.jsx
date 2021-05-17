import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as usersAction from "../actions/usersAction";
import * as publicationsAction from "../actions/publicationsAction";

// destructuring and rename
const { traerTodos: usersTraerTodos } = usersAction;
const { traerPorUser: publicationsTraerPorUser } = publicationsAction;

const Publications = (props) => {
  useEffect(async () => {
    const { usersTraerTodos, publicationsTraerPorUser } = props;
    const userId = props.match.params.userId;
    console.log(userId);
    if (!props.usersReducer.users.length) {
      await usersTraerTodos();
    }
    if (!("publicactionsKey" in props.usersReducer.users[userId])) {
      publicationsTraerPorUser(userId);
    }
  }, []);

  return (
    <div>
      {console.log(props)}
      <h1>Hola</h1>
    </div>
  );
};

const mapStateToProps = ({ usersReducer, publicationsReducer }) => {
  return {
    usersReducer,
    publicationsReducer,
  };
};

const mapDispatchToProps = {
  usersTraerTodos,
  publicationsTraerPorUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Publications);

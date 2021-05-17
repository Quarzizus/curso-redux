import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as usersAction from "../actions/usersAction";
import * as publicationsAction from "../actions/publicationsAction";

// destructuring and rename
const { traerTodos: usersTraerTodos } = usersAction;
const { traerPorUser: publicationsTraerPorUser } = publicationsAction;

const Publications = (props) => {
  const userId = props.match.params.userId;

  useEffect(async () => {
    if (!props.usersReducer.users.length) {
      await props.usersTraerTodos();
    }
    props.publicationsTraerPorUser(userId);
  }, []);

  return (
    <div>
      {console.log(props)}
      <h1>{userId}</h1>
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

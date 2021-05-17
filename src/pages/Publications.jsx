import React, { useEffect } from "react";
import Spinner from "../components/Spinner";
import { connect } from "react-redux";
import * as usersAction from "../actions/usersAction";
import * as publicationsAction from "../actions/publicationsAction";

// destructuring and rename
const { traerTodos: usersTraerTodos } = usersAction;
const { traerPorUser: publicationsTraerPorUser } = publicationsAction;

const Publications = (props) => {
  const {
    usersTraerTodos,
    publicationsTraerPorUser,
    usersReducer,
    publicationsReducer,
    match: {
      params: { userId },
    },
  } = props;
  const currentlyUser = usersReducer.users[userId];
  useEffect(async () => {
    if (!usersReducer.users.length) {
      await usersTraerTodos();
    }
    if (!("publicactionsKey" in currentlyUser)) {
      publicationsTraerPorUser(userId);
    }
    if (usersReducer.error) {
      return;
    }
  }, []);

  if (publicationsReducer.loading || !usersReducer.users.length) {
    return (
      <>
        {console.log(publicationsReducer.loading)}
        <Spinner />
      </>
    );
  } else {
    return (
      <div>
        <h1>Holi {currentlyUser.name}</h1>
        {console.log(publicationsReducer)}
      </div>
    );
  }
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

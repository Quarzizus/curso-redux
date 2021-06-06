import React, { useEffect } from "react";
import Spinner from "../components/Spinner";
import { connect } from "react-redux";
import * as usersAction from "../actions/usersAction";
import * as publicationsAction from "../actions/publicationsAction";

// destructuring and rename
const { traerTodos: usersTraerTodos } = usersAction;
const { traerPorUser: publicationsTraerPorUser } = publicationsAction;

const Publications = (props) => {
  useEffect(async () => {
    const {
      usersReducer: { users, error },
      usersTraerTodos,
      publicationsTraerPorUser,
      match: {
        params: { userId },
      },
    } = props;
    const currentlyUser = users[userId - 1];
    // Length
    !users.length ? await usersTraerTodos() : null;
    !("publicationsKey" in currentlyUser)
      ? await publicationsTraerPorUser(userId)
      : null;
    // Error Users
    error ? null : null;
  }, []);

  const usersRender = () => {
    const {
      usersReducer: { users, error, loading },
      match: {
        params: { userId },
      },
    } = props;
    const currentlyUser = users[userId - 1];
    //Error
    error ? null : null;

    //Render
    if (!users.length || loading) {
      return <Spinner />;
    } else {
      return (
        <>
          {console.log(currentlyUser.name)}
          <h2> Hola {currentlyUser.name} !</h2>
        </>
      );
    }
  };

  const publicationsRender = () => {
    const {
      usersReducer: { users, error, loading: usersLoading },
      publicationsReducer: { publications, loading },
      match: {
        params: { userId },
      },
    } = props;
    const currentlyUser = users[userId - 1];

    // Error User
    error ? null : null;
    if (!users.length || usersLoading) {
      return <Spinner />;
    }
    // Render
    if (
      loading ||
      !publications.length ||
      !("publicationsKey" in users[userId - 1])
    ) {
      return <Spinner />;
    } else {
      return (
        <div>
          {console.log(currentlyUser)}
          {publications[currentlyUser.publicationsKey].map((publication) => (
            <div key={publication.id}>
              <h2>{publication.title}</h2>
              <p>{publication.body}</p>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div>
      {usersRender()}
      {publicationsRender()}
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

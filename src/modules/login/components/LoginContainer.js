import React, { Component } from 'react';
import { connect } from 'react-redux';
import { usernameChanged, passwordChanged, startLogin, loginUser } from '../actions/AuthActions';
import Login from './Login';

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  usernameChanged,
  passwordChanged,
  startLogin,
  loginUser
})(Login);

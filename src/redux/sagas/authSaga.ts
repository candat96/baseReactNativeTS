
import { delay, put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { call, fork, take } from 'redux-saga/effects';
import { authActions, LoginPayload } from '../slices';

export function* watchAuthSaga() {
    yield takeLatest(authActions.login.type, handleLogin)
  }

  function* handleLogin(action : PayloadAction<LoginPayload>) {
    try {
        console.log("DDitj con me may saga ak  ", action.payload )
    } catch (error) {
      
    }
}






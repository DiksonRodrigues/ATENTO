import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';

import users from './users/users.reducers';
import params from './params/params.reducers';
import device from './device/device.reducers';
import company from './company/company.reducers';
import loading from './loading/loading.reducers';
import session from './session/session.reducers';
import storage from './storage/storage.reducers';
import journeys from './journeys/journeys.reducers';
import evaluation from './evaluation/evaluation.reducers';
import sendingEvaluations from './sendingEvaluations/sendingEvaluations.reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['storage', 'journeys', 'params', 'company', 'users'],
};

const rootReducers = combineReducers({
  loading,
  params,
  users,
  device,
  company,
  session,
  journeys,
  storage,
  evaluation,
  sendingEvaluations,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(thunk),
    (window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()) ||
      compose,
  ),
);

const persistor = persistStore(store);

export { store, persistor };

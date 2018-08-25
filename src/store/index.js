import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import saga from '../sagas';
import reducer from '../reducers';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)


const sagaMiddleware = createSagaMiddleware();
const createStoreWithMiddleware = compose(
  applyMiddleware(
    sagaMiddleware,
  ),
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(persistedReducer, initialState);
  sagaMiddleware.run(saga);
  persistStore(store, { }, () => {
    console.log(store);
  });
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

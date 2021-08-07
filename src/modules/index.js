import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storageSession from "redux-persist/lib/storage/session";
import scroll from "./scroll";
import size from "./size";

// type of store
// localstorage 경로
// : import storage from 'redux-persist/lib/storage'
// Redux-persist한테 나는 localstorage를 사용할 것이라고 알려주는것

// sessiongstorage 경로
// : import storageSession from 'redux-persist/lib/storage/session';
// Redux-persist한테 나는 sessionstorage를 사용할 것이라고 알려주는것

const persistConfig = {
  //새로운 persistConfig 설정
  key: "root",
  // reducer 객체의 어느 지점에서 부터 데이터를 저장할 것인지 설정해주는것이 key이다.
  // root부터 시작한다고 지정해준다.
  storage: storageSession,
  //import 한 성격의 storeage 저장, session 스토리지에 저장할 것이다
  //localStoreage에 저장할거라면, storage:storeage, (import storage from 'redux-persist/lib/storage')
  whitelist: ["scroll"],
  //유지 및 저장할 데이터를 배열안에 넣어주기, combineReducer 안에 있는 값을 써주면 됨,
};

export const rootReducer = combineReducers({
  scroll,
  size,
});
export default persistReducer(persistConfig, rootReducer);
// persistReducer 함수안에 persistConfig와  rootReducer를 넣어서 export default 해준다.
// 이 뜻은 수정된 rootReducer를 persistConfig의 조건에 맞게 persist하여 export 하겠다는 뜻이다.
// 단순하게 rootReducer에 persist능력을 추가해준것이다.

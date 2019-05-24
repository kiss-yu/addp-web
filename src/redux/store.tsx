

import ReactHookRedux,{IReactHooksRedux} from 'react-hooks-redux';
const redux:IReactHooksRedux =  ReactHookRedux({
    isDev: true, // 打印日志
    initialState: { name: 'nix', age: 0 },
})
export const Provider = redux.Provider
export const store = redux.store
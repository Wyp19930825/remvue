import ajax from './ajax'
// //商品信息
export const gamesList = (flag) => ajax('/api/games/order',{flag})
export const gamesList1 = () => ajax('/api/games/order1')
export const toutiao = () => ajax('/api/toutiao/list')
export const users = ({ user, pwd }) => ajax('/api/users/login',{user,pwd},"POST")
//     //查询一个
// export const gamesOne = (id) => ajax('/api/games/one', { id })
//     //用户信息
// export const userLogin = (user, pass) => ajax('/api/users/login', { user, pass }, "POST")
//     //限定查询
// export const limitList = (flag) => ajax('/api/games/limit', { flag })
//     //注册用户
// export const adduser = ({ user, pass }) => ajax('/api/users/oneusers', { user, pass }, "POST")

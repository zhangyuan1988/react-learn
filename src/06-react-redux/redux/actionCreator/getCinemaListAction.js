import axios from 'axios'


// thunk写法不支持promise
// function getCinemaListAction() {

//     // 直接返回函数 使用trunk
//     return  (dispatch) => {
//         // 不能使用异步数据
//         axios({
//             url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=8851606',
//             method: 'GET',
//             headers: {
//                 'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"164864080277695958384641","bc":"110100"}',
//                 'X-Host': 'mall.film-ticket.cinema.list'
//             }
//         }).then((res)=>{
//             console.log(res.data.data.cinemas);
//             dispatch({
//                 type: "change-list",
//                 value: res.data.data.cinemas
//             })
//         })


//     }
// }


// promise 写法
// function getCinemaListAction() {

//     // 直接返回promise
//     return axios({
//         url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=8851606',
//         method: 'GET',
//         headers: {
//             'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"164864080277695958384641","bc":"110100"}',
//             'X-Host': 'mall.film-ticket.cinema.list'
//         }
//     }).then((res) => {
//         console.log(res.data.data.cinemas);
//         return {
//             type: "change-list",
//             value: res.data.data.cinemas
//         }
//     })
// }

async function getCinemaListAction() {

    // 直接返回promise
    const res = await axios({
        url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=8851606',
        method: 'GET',
        headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"164864080277695958384641","bc":"110100"}',
            'X-Host': 'mall.film-ticket.cinema.list'
        }
    })
    return {
        type: "change-list",
        value: res.data.data.cinemas
    }
}


// getCinemaListAction().then((res) => {
//     // redux-promise
// })

export default getCinemaListAction
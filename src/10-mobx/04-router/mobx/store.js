import { observable, action, configure ,runInAction} from 'mobx'
import axios from 'axios'

configure({
    // 严格模式
    enforceActions: 'always'
})

// // 可观察对象
// const store = observable({
//     isTabbarShow: true,
//     list: [],
//     cityName: '北京',
//     changeShow() {
//         this.isTabbarShow = true
//     },
//     changeHide() {
//         this.isTabbarShow = false
//     }
// }, {
//     // 第二个参数是action
//     changeShow: action,
//     changeHide: action// 标记两个方法是action，专门修改可观测的value
// })

class Store {
    // 使用装饰器

    @observable isTabbarShow = true;
    @observable list = [];
    @action changeShow() {
        this.isTabbarShow = true
    }
    @action changeHide() {
        this.isTabbarShow = false
    }

    @action async getList() {
        // 直接返回promise
        const res = await axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=8851606',
            method: 'GET',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"164864080277695958384641","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        })
        // this.list = res.data.data.cinemas
        // 异步修改数据时，要加这个函数
        runInAction(()=>{
            this.list = res.data.data.cinemas
        })
    }
}

const store = new Store()

export default store
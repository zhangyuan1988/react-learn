import App from '../App'

import Enzyme, { shallow, mount } from 'enzyme' // 需要适配器
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });
describe('react-test-render', function () {
    // 固定写法 名字自定义
    it('app 的名字是todo', function () {
        // 浅渲染成虚拟dom 浅层渲染
        const app = shallow(<App />)

        expect(app.find('h1').text()).toEqual('todo')
    })

    it('删除功能', function () {
        // 渲染真实dom
        const app = mount(<App />)
        const todoLength = app.find('li').length
        // 找到元素 at中是第几个 后面是模拟事件
        app.find('button.del').at(0).simulate('click')

        expect(app.find('li').length).toEqual(todoLength - 1)
    })

    it('add', function () {
        // 渲染真实dom
        const app = mount(<App />)
        const todoLength = app.find('li').length
        const addInput = app.find('input')
        addInput.value = '123'
        app.find('.add').simulate('click')
        expect(app.find('li').length).toEqual(todoLength + 1)
    })
})
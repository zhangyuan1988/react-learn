import ShallRender from "react-test-renderer/shallow"
import ReactTestUtils from 'react-dom/test-utils'
import App from '../App'

describe('react-test-render', function () {
    // 固定写法 名字自定义
    it('app 的名字是todo', function () {
        // 浅渲染成虚拟dom
        const render = new ShallRender()
        render.render(<App />)

        // 拿到节点
        console.log(render.getRenderOutput().props.children[0].type);

        // 期望值 
        expect(render.getRenderOutput().props.children[0].type).toBe('h1')
        expect(render.getRenderOutput().props.children[0].props.children).toBe('todo')
    })

    it('删除功能', function () {
        // 渲染真实dom
        const app = ReactTestUtils.renderIntoDocument(<App />)

        // 拿到旧按钮列表
        const todoItems = ReactTestUtils.scryRenderedDOMComponentsWithTag(app, 'li')

        // 获取单个按钮
        const deleteButton = todoItems[0].querySelector('button')

        // 模拟点击
        ReactTestUtils.Simulate.click(deleteButton)

        // 拿到新的按钮列表
        const todoItemsAfter = ReactTestUtils.scryRenderedDOMComponentsWithTag(app, 'li')

        expect(todoItems.length - 1).toBe(todoItemsAfter.length)
    })

    it('add', function () {
        // 渲染真实dom
        const app = ReactTestUtils.renderIntoDocument(<App />)

        // 拿到旧按钮列表
        const todoItems = ReactTestUtils.scryRenderedDOMComponentsWithTag(app, 'li')

        const addInput = ReactTestUtils.scryRenderedDOMComponentsWithTag(app, 'input')

        addInput.value = 'aaaaaaaaa'

        // 拿到的是数组
        // const addButton = ReactTestUtils.scryRenderedDOMComponentsWithClass(app,'add')
        const addButton = ReactTestUtils.findRenderedDOMComponentWithClass(app, 'add')

        ReactTestUtils.Simulate.click(addButton)

        // 拿到新的按钮列表
        const todoItemsAfter = ReactTestUtils.scryRenderedDOMComponentsWithTag(app, 'li')

        expect(todoItems.length + 1).toBe(todoItemsAfter.length)
    })
})
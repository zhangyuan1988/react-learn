function* test() {
    console.log(111);
    // 相当于断点 后面跟的对象作为返回值
    // 可以接收值
    const input1 = yield '111-输出'
    console.log(input1);
    const input2 = yield '222-输出'
    console.log(333, input2);
    const input3 = yield '333-输出'
    console.log(444);
}
// 状态机
// generator
const init = test()

// 第一次传参无效
const res1 = init.next()
// {value: '111-输出', done: false}
console.log(res1); // done 为true时 执行结束
const res2 = init.next('aaa')
const res3 = init.next('ccc')


function* test1() {

    setTimeout(() => {
        console.log('111--success');
        init2.next()
    }, 1000)

    yield

    setTimeout(() => {
        console.log('222--success');
        init2.next()
    }, 1000)

    yield

    setTimeout(() => {
        console.log('333--success');

    }, 1000)

}

const init2 = test1()

init2.next()
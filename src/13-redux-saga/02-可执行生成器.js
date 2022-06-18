function getData1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 1000)
    })
}

function getData2(a) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + 1);
        }, 1000)
    })
}

function getData3(a) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + 1);
        }, 1000)
    })
}


function* gen() {
    // 将每个返回值，传入下一个异步
    const f1 = yield getData1()
    console.log(f1);
    const f2 = yield getData2(f1)
    console.log(f2);
    const f3 = yield getData3(f2)
    console.log(f3);
}

// 自动执行函数
function run(fn) {
    // 传入一个生成器函数
    const g = fn();

    //   递归调用
    function next(data) {
        const res = g.next(data)

        // 如果生成器执行完了 就返回最后一个
        if (res.done) { return res.value }

        // 返回的是promise对象需要在这里then
        // 没有执行完 继续调用 并将这次的值传给下一次执行函数
        res.value.then((res) => {
            next(res)
        })
    }

    next()

}
run(gen)

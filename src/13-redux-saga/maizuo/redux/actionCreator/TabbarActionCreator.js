function hide() {
    // 写逻辑
    return {
        type: 'hide-tabbar'
    }
}

function show() {
    return {
        type: 'show-tabbar'
    }
}

module.exports = { show, hide }
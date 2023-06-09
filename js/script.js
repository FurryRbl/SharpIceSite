console.log("欢迎访问 SharpIce 的个人站点👋");

// 错误回调
window.onerror = function (message, source, lineno, colno, error) {
    if (error != null) { // 用于判断自定义错误是否返回null，自定义错误会自行处理。
        SharpIce.DiaLog.Error(`
        <div style="text-align: left; background-color: mediumspringgreen; border-radius: 1rem; padding: 1rem;">
            消息：${message}
            </br></br>
            位置：${source}
            </br></br>
            行：${lineno}
            </br></br>
            列：${colno}
            </br></br>
            错误：${error}
        </div>
        `);
    }
}

jQuery(window).on("load", () => { //页面渲染完成后回调
    GlobalReloadFunctions();
});

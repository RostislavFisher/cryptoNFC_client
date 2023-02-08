module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/media/dist/' : 'https://192.168.1.102:8080',
    outputDir: '../CWU_Server/media/dist',
    indexPath: '../../templates/base-vue.html', // relative to outputDir!
    runtimeCompiler: true,
    chainWebpack: config => {
        /*
        The arrow function in writeToDisk(...) tells the dev server to write
        only index.html to the disk.

        The indexPath option (see above) instructs Webpack to also rename
        index.html to base-vue.html and save it to Django templates folder.

        We don't need other assets on the disk (CSS, JS...) - the dev server
        can serve them from memory.

        See also:
        https://cli.vuejs.org/config/#indexpath
        https://webpack.js.org/configuration/dev-server/#devserverwritetodisk-
        */
        config.devServer
            .public('https://192.168.1.102:8080')
            .hotOnly(true)
            .headers({"Access-Control-Allow-Origin": "*"})
            .writeToDisk(filePath => filePath.endsWith('index.html'));
    }
}

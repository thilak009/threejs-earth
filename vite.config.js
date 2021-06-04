import vitePluginString from 'vite-plugin-string'

module.exports ={
    plugins:[
        vitePluginString()
    ],
    build:{
        chunkSizeWarningLimit: 1000
    }
}
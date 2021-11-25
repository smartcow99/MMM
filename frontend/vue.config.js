module.exports= {
    devServer: {
        proxy: {
            '/*': {
                target: 'http://34.64.76.43:3000'
            }
        }
    }
}
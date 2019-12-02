// 请把生产环境的 redirect_url，client_id 和 client_secret 中的 "****", 换成自己创建的 OAuth App 的具体参数即可。
const config = {
    'oauth_uri': 'https://github.com/login/oauth/authorize',
    'redirect_uri': 'http://biaochenxuying.cn/login',
    'client_id': '****',
    'client_secret': '****',
};

// 本地开发环境下 （参数可以直接用）
if (process.env.NODE_ENV === 'development') {
    config.redirect_uri = "http://localhost:3001/login"
    config.client_id = "e7885f2e53cc4060c139"
    config.client_secret = "ae319e064bf2c391e384ba209eac9cdc596ba63d"
}
export default config;
let filterPages = ['login', 'register']
export default async function auth({req, route, store, redirect}) {
    if (filterPages.indexOf(route.name) !== -1) {
        return;
    }
    if (store.state.account.isLogin === null) {
        let cookies = null
        if (process.server) {
            cookies = req.cookies
        }
        await store.dispatch('account/userinfo', cookies)
    }
    if (store.state.account.isLogin === false) {
        redirect('/login')
    }
}

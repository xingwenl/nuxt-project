import http from '../http'
// export const topicsFetch = http('/topics')
// export const topicsFetch = () => {
//     return http('/topics')
// }
export default  {
    register (data) {
        return http({
            url: '/account/register',
            method: 'POST',
            data
        })
    },
    login (data) {
        return http({
            url: '/account/login',
            method: 'POST',
            data
        })
    }
}

import http from '../http'
// export const topicsFetch = http('/topics')
// export const topicsFetch = () => {
//     return http('/topics')
// }
export default  {
    topics (data) {
        return http({
            url: '/account/all_user',
            method: 'GET',
            data: {
                limit: 10,
                mdrender: true,
                ...data
            }
        })
    },
    topicsId (data) {
        return http({
            url: `/topic/${data.id}`,
            method: 'GET'
        })
    }
}

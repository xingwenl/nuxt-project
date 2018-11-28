import http from '../http'
// export const topicsFetch = http('/topics')
// export const topicsFetch = () => {
//     return http('/topics')
// }
export default  {
    async topic (data) {
        let res = await http({
            url: '/topic'
        })
        return res;
    },
    topicsId (data) {
        return http({
            url: `/topic/${data.id}`,
            method: 'GET'
        })
    }
}

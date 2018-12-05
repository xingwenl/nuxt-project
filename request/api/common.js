import http from '../http'
export default  {
    
    upload_images ($file) {
        if (!$file) {
            console.log('没文件')
            return Promise.resolve()
        }
        var formdata = new FormData();
        formdata.append('topic_img', $file);
        return http({
            url: `/topic/upload_images`,
            method: 'POST',
            data: formdata,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}

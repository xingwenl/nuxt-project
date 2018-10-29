import {default as devConfig} from './default.js';

let proConfig = {
    devEnv: true,
    port: 3001,
    apiPort:3001,
    apiHost:"http://0.0.0.0",
    sslModel: false,
    uploadPath:'/../../static/img/'
}
let disConfig = Object.assign({}, devConfig, proConfig);

export default disConfig;
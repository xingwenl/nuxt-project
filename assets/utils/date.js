class FormatDate {
  
  
  /**
   *
   * @description 得到前一天或后一天的时间
   * @param {*} num 前一天 或 后一天
   * @param {*} str 分割字符
   * @returns
   * @memberof FormatDate
   */
  getDay(num, str) {
    var today = new Date();
    var nowTime = today.getTime();
    var ms = 24*3600*1000*num;
    today.setTime(parseInt(nowTime + ms));
    var oYear = today.getFullYear();
    var oMoth = (today.getMonth() + 1).toString();
    if (oMoth.length <= 1) oMoth = '0' + oMoth;
    var oDay = today.getDate().toString();
    if (oDay.length <= 1) oDay = '0' + oDay;
    return oYear + str + oMoth + str + oDay;
  }

  /**
   * @description 获取北京时间
   * @param time 时间
   * @returns
   * @memberof FormatDate
   */
  getBJDate (time) {
    //获得当前运行环境时间
    var d = new Date(), currentDate = time ? new Date(time) : new Date(), tmpHours = currentDate.getHours();
    //算得时区
    var time_zone = -d.getTimezoneOffset() / 60;
    //少于0的是西区 西区应该用时区绝对值加京八区 重新设置时间（西区时间比东区时间早 所以加时区间隔）
    if (time_zone < 0) {
        time_zone = Math.abs(time_zone) + 8; currentDate.setHours(tmpHours + time_zone);
    } else {
        //大于0的是东区  东区时间直接跟京八区相减
        time_zone -= 8; currentDate.setHours(tmpHours - time_zone);
    }
    return currentDate;
  }

/**
 * @description 根据时间戳间隔 返回 几天几小时
 *
 * @param {Number} times 123456
 * @returns {Object} {day: 1, hour: 1, min: 1, sec: 1}
 * @memberof FormatDate
 */
timeByLength (times) {
    return {
        day: parseInt(times / 60 / 60 / 24),
        hour: parseInt(times / 60 / 60 % 24),
        min: Math.ceil(times / 60 % 60),
        sec: parseInt(times % 60)
    }
  }
}




/**
 *  @constant
 *  @default
 */
const RED = 0xff0000;


export default new FormatDate()

/**
 * @description 时间格式化
 * @param {Number} time
 * @param @{String} fmt = [yyyyMMddhhmmss] 可选值
 */
export function formatDate(time, fmt){
    var now = new Date();
    if (!time) {
        date = now
    }else {
        var date = new Date(time);
        if(date == "Invalid Date"){
            date = now;
        }
    }
    var o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
    };
    if(/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for(var k in o)
        if(new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

/**
 *  @constant [yyyy-MM-dd hh:mm:ss]
 *  @type {string}
 */
export const DATE_NORMAL = "yyyy-MM-dd hh:mm:ss"

/**
 *  @constant [yyyy-MM-dd hh:mm]
 *  @type {string}
 */
export const DATE_MM = "yyyy-MM-dd hh:mm"

/**
 *  @constant [yyyy-MM-dd]
 *  @type {string}
 */
export const DATE_DD = "yyyy-MM-dd"

export const DATE_STR = "yyyyMMddhhmmss"

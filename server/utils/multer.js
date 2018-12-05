import multer from 'multer'
import {formatDate, DATE_STR} from '../../assets/utils/date'

class multerUtils{
	constructor(desc) {

	}

	instance(desc) {
		return multer({
			storage: this.storage(desc)
		})
	}


	storage(desc) {
		return	multer.diskStorage({
			// 设置上传后文件路径，uploads文件夹会自动创建。
			destination: desc ,
			// 给上传文件重命名，获取添加后缀名，
			filename: function (req, file, cb) {
                console.log(file)
                const fileFormat = (file.originalname).split('.');
                const t = formatDate(null, DATE_STR)
				cb(null, `${file.fieldname}_${t}.${fileFormat.pop()}`);
			}
		});
	}
}
export default new multerUtils()
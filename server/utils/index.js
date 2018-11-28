'use strict';
import Crypto from './crypto'
class Utils{

	constructor() {
		this.extendClass(this, Crypto);
	}

	// 合并class
	extendClass (mainClass, newClass) {
		var a = new newClass()
		for (let i of Object.getOwnPropertyNames(Object.getPrototypeOf(a))) {
			if (i !== 'constructor' || !mainClass[i]) {
				mainClass[i] = a[i];
			}
		}
	}

	// 去除重复
	deReplication(arr1,arr2,str) {
		const len = arr2.length;
		if (!arr1 && !arr1.length) return arr1;
		if (len === 0) return arr1;
		return	arr1.filter(function(obj){
					var isHas = false;
					for (var i = 0; i < len; i++) {
						if (arr2[i][str] == obj[str]) {
							isHas = true;
							break;
						}
					}
					return !isHas;
				})
	}

	isEmpty (o) {
		if (undefined === o || 
			false === o ||
			null === o ||
			'' === o) {
			return true;
		}
		return false;
	}

	isEmptyObject (o) {
		if (this.isEmpty(o)) return true;
		for (var p in o) {
			if (p !== undefined) {
				return false;
			}
		}
		return true;
    }
    
    /**
	 * @description 检查是否为NULL
	 * @param [Object] 检查对象
	 * @param [String] 过滤字段
	 * @returns [Boolean] 有空值则返回true
	 */
	hasNullParams (data, filter = []) {
		for (let key in data) {
			if (filter.indexOf(data) === -1) {
				if (this.isEmpty(data[key])) {
					return true
				}
			}
		}
		return false;
	}
}

export default new Utils()
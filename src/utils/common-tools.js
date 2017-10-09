/**
 * Created by yangshan on 2017/8/31.
 */
import clone from '@/utils/clone'
// import Cookies from 'js-cookie'
// import request from './fetch.js'
let request = function () {}
import { bankCodes } from '../static-data/options'

// null : false
// undefined : false
// NaN : false
// '' : false
// 0 : true
// '0' : true
// {} : true
// other : true
export function falseButNotZero (obj) {
  if (!obj) {
    if (obj === 0) {
      return true
    } else {
      return false
    }
  } else {
    return true
  }
}
export function totalFalse (obj) {
  return !falseButNotZero(obj)
}

// 设置微信浏览器title
function setTitle (router, route) {
  let tmpRoute
  for (let i = 0, len = router.length; i < len; i++) {
    let r = router[i]
    if (r.children) {
      for (let j = 0, lenj = r.children.length; j < lenj; j++) {
        let rj = r.children[j]
        if (rj.name === route.name) {
          tmpRoute = rj
          break
        }
      }
    } else {
      if (r.name === route.name) {
        tmpRoute = route
        break
      }
    }
  }
  // console.log('tmpRoute = ',tmpRoute)
  // let tmpRoute = router.find(r => r.name === route.name)
  // console.log('tmpRoute = ', tmpRoute);
  if (tmpRoute) {
    let titleName = tmpRoute.titleName
    let title = document.querySelector('title')
    if (titleName) {
      // console.log('titleName = ', titleName);
      // console.log('title = ',title);
      title.innerHTML = titleName
    } else {
      title.innerHTML = '赎楼贷'
    }
  }
}

// 连续日期字符串转date格式
function toDate (str) {
  let year = str.slice(0, 4)
  let month = str.slice(4, 6)
  let day = str.slice(6, 8)
  let newDate = [year, month, day].join('-')
  return new Date(newDate)
}

// 处理applicate Object
function dealApplicant (applicant) {
  let tmp = clone(applicant)
  // tmp.addressCityCodes = eval(tmp.addressCityCodes)
  if (tmp.addressCity) {
    tmp.addressCity = [tmp.addressCity]
  } else {
    tmp.addressCity = ['北京']
  }
  // tmp.addressCity = [tmp.addressCity]
  return tmp
}

// 保存前处理applicant Object
function dealapplicantBeforSave (applicant) {
  let tmp = clone(applicant)
  // if (tmp.addressCity) {
  //   tmp.addressCity = tmp.addressCity[0]
  // }
  // console.log('tmp = ', tmp)
  if (applicant.bankCode) {
    tmp.bankName = bankCodes.find(item => item.key === applicant.bankCode).value
    tmp.bankCardName = tmp.name
  }
  tmp.birthdate = tmp.idNumber.slice(6, 10) + '-' + tmp.idNumber.slice(10, 12) + '-' + tmp.idNumber.slice(12, 14)
  // console.log(tmp.birthdate)
  return tmp
}
// 处理house Object
function dealHouse (house, defaultHouse) {
  let defaultHouseExtra = defaultHouse.extra
  let tmp = clone(house)
  let dHouse = clone(defaultHouse)
  // if (tmp.city) {
  //   // let cityRaw = tmp.city.split('#')[0]
  //   let cityCodeRaw = tmp.city.split('#')[1]
  //   tmp.cityCode = eval(cityCodeRaw)
  // }
  if (tmp.city) {
    tmp.city = [tmp.city]
  } else {
    tmp.city = ['北京']
  }
  for (let i in tmp) {
    if (!totalFalse(tmp[i])) { // 不是false
      dHouse[i] = tmp[i]
    }
  }
  // Object.assign(dHouse,tmp)
  dHouse.extra = defaultHouseExtra
  console.log('defaultHouse = ', defaultHouse)
  console.log('house = ', house)
  console.log('dHouse = ', dHouse)
  return dHouse
}

// 保存前处理house Object
function dealHouseBeforSave (house) {
  let tmp = clone(house)
  if (tmp.city) {
    tmp.city = tmp.city[0]
  }
  console.log('tmp = ', tmp)
  return tmp
}

// 获取图片的名字
function getImgName (nameUrl) {
  let name = nameUrl.split('/').pop()
  return name
}

// 获取图片的名字
function boolean2String (str) {
  if (str === 'true') {
    return true
  } else if (str === 'false') {
    return false
  } else {
    return str
  }
}

//  -------- global 中用到的函数

function isNowLoginPage () {
  return window.location.hash.indexOf('/login') > -1
}
function isFromLoginPage (from) {
  return from.path.indexOf('/login') > -1
}
function isToLoginPage (to) {
  return to.path.indexOf('/login') > -1
}
function addGetWeChatCodeTimes () {
  if (localStorage.getWeChatCodeTimes || +localStorage.getWeChatTimes === 0) {
    localStorage.getWeChatTimes = +localStorage.getWeChatTimes + 1
  } else {
    localStorage.getWeChatTimes = 1
  }
}
function getWeChatCodeTimes () {
  return localStorage.getWeChatTimes
}

function hasGetWeChatCode () {
  // console.log('localStorage.getWeChatTimes = ', localStorage.getWeChatTimes);
  // console.log('localStorage.getWeChatTimes + 0 = ', +localStorage.getWeChatTimes);
  if (!localStorage.getWeChatTimes) {
    return false
  } else if (!+localStorage.getWeChatTimes) {
    return false
  }
  return true
}

function readyToCodeLogin () {
  if (!boolean2String(localStorage.readyToCodeLogin)) {
    localStorage.readyToCodeLogin = true
    return false
  }
  return true
}

function Err401Existed () {
  if (!boolean2String(localStorage.Err401Triggered)) {
    console.log('没触发')
    localStorage.Err401Triggered = true
    return false
  }
  console.log('触发')
  return true
}

function initLocalStorage () {
  localStorage.readyToCodeLogin = false
  // localStorage.Err401Triggered = false
  localStorage.getWeChatTimes = 0
  delete localStorage.initCode
  delete localStorage.verificationCode
  delete localStorage.mobile
}
function getParameter () {
  let getParameterByName = (a => {
    if (a === '') return {}
    let b = {}
    for (let i = 0; i < a.length; ++i) {
      let p = a[i].split('=')
      if (p.length !== 2) continue
      b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, ' '))
    }
    return b
  })(window.location.search.substr(1).split('&'))
  return getParameterByName || {}
}

//  ---------- global 中用到的函数

// upload image中用到的函数

export function setFormData (file, currentGroup, taskType, imgUrls) {
  let formData = new FormData()
  formData.append('group', currentGroup)
  formData.append('taskType', taskType)
  // formData.append('taskType', 'xiahu');
  formData.append('overwrite', true)
  formData.append('file', file, currentGroup + imgUrls[currentGroup].length)
  return formData
}

export function setImgUrl (url, imgUrls, currentGroup) {
  imgUrls[currentGroup].push({
    url,
    name: currentGroup + (+imgUrls[currentGroup].length + 1)
  })
}

export function setCurrentInfo (target, currentGroup, currentDirection) {
  return {
    currentGroup: target.dataset.group,
    currentDirection: target.dataset.direction,
  }
}

export function changeTest(tt) {
  tt = 5
}

function uploadImage (orderId, formData) {
  return request({
    url: `v1/orders/${orderId}/attachment`,
    method: 'POST',
    data: formData,
    useFormData: true,
  })
}

export function uploadImg (file, base64, imgUrls, currentGroup, orderId) {
  setImgUrl(base64, imgUrls, currentGroup)
  // console.log('going to uploadImg')
  let formData = setFormData(file, currentGroup, 'xiahu', imgUrls)
  // console.log('going to uploadImg222')
  // console.log('file = ', file)
  // console.log('base64 = ', base64)
  // console.log('imgUrls = ', imgUrls)
  // console.log('currentGroup = ', currentGroup)
  // console.log('orderId = ', orderId)
  // console.log('formData = ', formData)
  return uploadImage(orderId, formData)
    .then(res => {
      console.log('res = ', res)
    })
    .catch(error => {
      console.log('error', error)
    })
}

// upload image中用到的函数
function addZero (str) {
  str = '' + str
  str = str.length < 2 ? '0' + str : str
  return str
}
export function timestamp (d) {
  let date = d || new Date()
  if (date instanceof Date) {
    let year = date.getFullYear()
    let month = 1 + date.getMonth()
    month = addZero(month)
    let day = date.getDate()
    day = addZero(day)
    let hour = date.getHours()
    hour = addZero(hour)
    let minute = date.getMinutes()
    minute = addZero(minute)
    let second = date.getSeconds()
    second = addZero(second)
    let formatedate = '' + year + month + day + hour + minute + second
    return formatedate
  }
  return date
}

export function difIdNumber (idNumber) {
  let newId = +idNumber + timestamp()
  console.log('newId = ', newId)
  console.log('idNumber = ', idNumber)
  newId = timestamp() + Math.floor(Math.random() * 10000)
  return newId
}

export function replaceEmptyfields (orginalObj, newObj) {
  let tmp = clone(orginalObj)
  for (let i in newObj) {
    let newObjItem = newObj[i]
    if (!totalFalse(newObjItem)) { // 不为空
      if (typeof newObjItem !== Object) { // 基础类型
        // console.log('i = ', i)
        tmp[i] = newObjItem
      } else { // 对象
        tmp[i] = replaceEmptyfields(tmp[i], newObjItem)
      }
    }
  }
  return tmp
}

export function formatDate (d) {
  let year = d.getFullYear()
  let month = d.getMonth() + 1
  month = month > 9 ? month : '0' + month
  let day = d.getDate()
  day = day > 9 ? day : '0' + day
  return year + '-' + month + '-' + day
}

export function getNextDateString (inDateString) {
  let today = new Date()
  if (inDateString) {
    today = new Date(inDateString)
  }
  let tomo = new Date(today.getTime() + 24 * 60 * 60 * 1000)
  console.log('today = ', today)
  console.log('tomo = ', tomo)
  return formatDate(tomo)
}

export {
  setTitle, toDate, dealApplicant, dealHouse,
  dealHouseBeforSave, dealapplicantBeforSave,
  getImgName, boolean2String, isNowLoginPage,
  addGetWeChatCodeTimes, hasGetWeChatCode,
  readyToCodeLogin, initLocalStorage, getParameter
  , Err401Existed,
  isFromLoginPage, isToLoginPage, getWeChatCodeTimes
}

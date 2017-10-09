/**
 * Created by yangshan on 2017/9/22.
 */
import { applicantLabel, houseLabel } from '../static-data/options'
import { totalFalse, falseButNotZero } from '../utils/common-tools'
const labels = { applicantLabel, houseLabel }
export const inputFieldSetting = [


  // //
  // {
  //   type: 'input',
  //   propName: 'businessTerm',
  //   parentObject: ['applicant', 'extra'],
  // },
  //
  // {
  //   type: 'input',
  //   propName: 'graduatedSchool',
  //   parentObject: ['applicant'],
  // },


  // 工作信息


  {
    type: 'input',
    propName: 'companyAddress',
    parentObject: ['applicant'],
  },

  // 单位性质
  {
    type: 'select',
    propName: 'companyType',
    option: 'companyTypes',
    parentObject: ['applicant']
  },
  {
    type: 'select',
    propName: 'professionType',
    option: 'professionTypes',
    parentObject: ['applicant']
  },


// 自雇

  {
    type: 'input',
    propName: 'companyName',
    parentObject: ['applicant', 'extra'],
    isShow: 'professionType === 1',
  },
  {
    type: 'input',
    propName: 'businessTerm',
    parentObject: ['applicant', 'extra'],
    isShow: 'professionType === 1',
  },
  {
    type: 'input',
    propName: 'companyAnnualIncome',
    parentObject: ['applicant', 'extra'],
    isShow: 'professionType === 1',
  },
  {
    type: 'select',
    propName: 'officeOwner',
    option: 'officeOwnerTypes',
    parentObject: ['applicant', 'extra'],
    isShow: 'professionType === 1',
  },


// 自雇字段结束

// 受薪
  // 职业类型/工作类型
  {
    type: 'select',
    propName: 'professionCatType',
    option: 'professionCatTypes',
    parentObject: ['applicant', 'extra'],
    isShow: 'professionType === 0',
  },
  // 职称
  {
    type: 'select',
    propName: 'professionalTitle',
    option: 'professionalTitles',
    parentObject: ['applicant'],
    isShow: 'professionType === 0',
  },
  // 职务
  {
    type: 'select',
    propName: 'title',
    option: 'titles',
    parentObject: ['applicant'],
    isShow: 'professionType === 0',
  },

  // 职业
  {
    type: 'input',
    propName: 'profession',
    parentObject: ['applicant'],
    isShow: 'professionType === 0'
  },

  // 岗位
  {
    type: 'input',
    propName: 'mainJob',
    parentObject: ['applicant', 'extra'],
    isShow: 'professionType === 0'
  },
  // 单位电话
  {
    type: 'input',
    propName: 'companyPhone',
    parentObject: ['applicant'],
    isShow: 'professionType === 0'
  },
  // 工作单位
  {
    type: 'input',
    propName: 'company',
    parentObject: ['applicant'],
  },


// 受薪字段结束

//   个人年收入
  {
    type: 'input',
    propName: 'annualIncome',
    parentObject: ['applicant'],
  },
// 客户类型
  {
    type: 'select',
    propName: 'clientWorkType',
    option: 'clientWorkTypes',
    parentObject: ['applicant', 'extra']
  },

  // 工作年限
  {
    type: 'input',
    propName: 'yearOfWork',
    parentObject: ['applicant'],
  },

// 单位省市
  {
    type: 'autoFill',
    propName: 'officeCity',
    targetPropName: 'officeCityCodes',
    parentObject: ['applicant'],

  },


  // 单位省市code
  {
    type: 'cascadeSelect',
    propName: 'officeCityCodes',
    option: 'cities',
    cascadeNumber: 3,
    cascadeName: ['省', '市', '区'],
    parentObject: ['applicant']

  },

// '产业情况'
  {
    type: 'autoFill',
    propName: 'industryName',
    targetPropName: 'industryCodes',
    parentObject: ['applicant'],

  },


  // *************************************
  // 从事行业code
  {
    type: 'cascadeSelect',
    propName: 'industryCodes',
    option: 'industries',
    cascadeNumber: 4,
    cascadeName: ['一级门类', '二级门类', '三级门类', '四级门类'],
    parentObject: ['applicant'],

  },

  // 地址code
  {
    type: 'cascadeSelect',
    propName: 'addressCityCodes',
    option: 'cities',
    cascadeNumber: 3,
    cascadeName: ['省', '市', '区'],
    parentObject: ['applicant']
  },


  // *************************************

// 地址省市
  {
    type: 'autoFill',
    propName: 'addressCity',
    targetPropName: 'addressCityCodes',
    parentObject: ['applicant']
  },

// 共同居住人
  {
    type: 'select',
    propName: 'commonResident',
    option: 'commonResidents',
    parentObject: ['applicant']
  },
  {
    type: 'input',
    propName: 'householdNowAddress',
    parentObject: ['applicant'],
  },


  {
    type: 'select',
    propName: 'addressType',
    option: 'addressTypes',
    parentObject: ['applicant', 'extra']
  },
  //
  {
    type: 'select',
    propName: 'gender',
    option: 'genders',
    parentObject: ['applicant']
  },
  {
    type: 'select',
    propName: 'housingSituation',
    option: 'housingSituations',
    parentObject: ['applicant']
  },


  {
    type: 'select',
    propName: 'maritalStatus',
    option: 'maritalStatus',
    parentObject: ['applicant']
  },

  // 已婚字段

  {
    type: 'input',
    propName: 'spouseName',
    parentObject: ['applicant'],
    isShow: 'maritalStatus === 5,6',
  },
  {
    type: 'input',
    propName: 'spouseIdNumber',
    parentObject: ['applicant'],
    isShow: 'maritalStatus === 5,6',
  },
// 已婚字段结束


  // 补充房产信息

  // 建筑类型
  {
    type: 'select',
    propName: 'buildingType',
    option: 'buildingTypes',
    parentObject: ['house']
  },
  // 修建时间
  {
    type: 'calendar',
    propName: 'buildTime',
    parentObject: ['house']
  },
  // 小区名称
  {
    type: 'input',
    propName: 'communityName',
    parentObject: ['house'],
  },
  // 建筑面积
  {
    type: 'input',
    propName: 'constructionArea',
    parentObject: ['house'],
  },
  // 楼层
  {
    type: 'input',
    propName: 'floor',
    parentObject: ['house'],
  },

  // 房型：一室/二室...
  {
    type: 'select',
    propName: 'propertyType',
    option: 'propertyTypes',
    parentObject: ['house']
  },

  // 土地使用年限
  {
    type: 'input',
    propName: 'propertyYears',
    parentObject: ['house'],
  },


  // 购买时间
  {
    type: 'calendar',
    propName: 'purchaseTime',
    parentObject: ['house']
  },
  // 购买单价
  {
    type: 'input',
    propName: 'purchaseUnitPrice',
    parentObject: ['house'],
  },
  // 购买总价
  {
    type: 'input',
    propName: 'totalPrice',
    parentObject: ['house'],
  },
  // 使用面积
  {
    type: 'input',
    propName: 'usefulArea',
    parentObject: ['house'],
  },

  // 规划用途
  {
    type: 'select',
    propName: 'planningPurpose',
    option: 'planningPurposes',
    parentObject: ['house']
  },

  // 房屋登记时间
  {
    type: 'calendar',
    propName: 'houseRegisterDate',
    parentObject: ['house', 'extra']
  },

  // 套内建筑面积
  {
    type: 'input',
    propName: 'houseUsedArea',
    parentObject: ['house', 'extra'],
  },


  // 土地使用权取得方式
  {
    type: 'select',
    propName: 'landGain',
    option: 'landGains',
    parentObject: ['house', 'extra']
  },

  // 房屋所有情况
  {
    type: 'select',
    propName: 'ownerType',
    option: 'ownerTypes',
    parentObject: ['house', 'extra']
  },

]

export const inputFieldGroupSetting = {
  applicant: {
    api: {},
    get: 'getApplicantDetailByOrderId',
    post: 'addApplicantInfo2OrderAuto',
    defaultObject: {},
    currentObject: {},
    chineseName: '申请人工作信息',
    triggerProps: {},
  },
  house: {
    api: {},
    get: 'getHouseDetail',
    post: 'addHouseInfo2Order',
    defaultObject: {},
    currentObject: {},
    chineseName: '抵押房产信息',
    triggerProps: {},
  }
}


export function initFieldsLabel() {

  for (let i in inputFieldSetting) {
    let item = inputFieldSetting[i]
    // if(item.propName === 'officeowner'){
    //   console.log("labels[item.parentObject[0] + 'Label'] = ", labels[item.parentObject[0] + 'Label'])
    //   console.log('label = ',labels[item.parentObject[0] + 'Label'][item.propName])
    //   console.log('item = ',item)
    // }
    if (item.parentObject.length === 1) {
      // console.log('item.parentObject[0] = ', item.parentObject[0])
      // console.log('labels = ', labels)

      item.label = labels[item.parentObject[0] + 'Label'][item.propName]
    } else if (item.parentObject.length === 2) {
      item.label = labels[item.parentObject[0] + 'Label'][item.parentObject[1]][item.propName]
    }

    if (item.isShow) {
      item.showTriggerPropName = item.isShow.split('===')[0].trim()
      item.showTriggerValue = item.isShow.split('===')[1].trim()
    }
    if (!item.noRequired) {
      item.noRequired = false; // 默认都需要填写
      item.initNoRequired = false; // 初始必填
    } else {
      item.initNoRequired = true; // 初始非必填
    }
  }
  console.log('执行完毕！')
}

// initFieldsLabel()

function trigger(targetPropValue, showTriggerValue) {
  if (showTriggerValue.indexOf(',') === -1) {
    // console.log('targetPropValue = ', targetPropValue, ' showTriggerValue = ', showTriggerValue)
    // console.log('targetPropValue === showTriggerValue ? ', targetPropValue === showTriggerValue)
    return targetPropValue === showTriggerValue
  } else {
    let flag = false
    let testValues = showTriggerValue.split(',')
    testValues.forEach(item => {
      if (targetPropValue + '' === item + '') flag = true
    })
    return flag
  }
}

function getCascatedPropValue(obj, targetName, fields) {
  let targetField = fields.find(i => i.propName === targetName)
  let targetPropName = targetField.propName
  // console.log('targetPropName = ', targetPropName)
  // console.log('targetField.parentObject.length = ', targetField.parentObject.length)
  if (targetField.parentObject.length === 1) {
    // console.log('obj[targetPropName] = ', obj[targetPropName], 'obj = ', obj)
    return obj[targetPropName]
  } else if (targetField.parentObject.length === 2) {
    console.log(propName, ' = ', obj[targetField.parentObject[1]][targetPropName])
    return obj[targetField.parentObject[1]][targetPropName]
  } else {
    console.log('targetField.parentObject.length > 2!')
  }


}

export function showFlex(el, binding) {
  let item = binding.value.item
  let targetName = item.showTriggerPropName
  let fields = binding.value.fields
  let obj = binding.value.obj
  // if (item.propName === 'mainJob') {
  //   console.log('targetPropValue = ', getCascatedPropValue(obj, targetName, fields));
  //   console.log('showTriggerValue = ', item.showTriggerValue);
  //   console.log('trigger(targetPropValue, item.showTriggerValue) = ', trigger(getCascatedPropValue(obj, targetName, fields), item.showTriggerValue))
  // }
  if (targetName) {

    let targetPropValue = getCascatedPropValue(obj, targetName, fields)
    // console.log('tem.propName = ', item.propName)


    // console.log('targetPropValue = ', targetPropValue)
    if (trigger(targetPropValue, item.showTriggerValue)) {
      if (getComputedStyle(el).display.trim() !== 'flex') {
        // console.log('tofalse')
        el.style.display = 'flex'
        if (item.initNoRequired) {
          item.noRequired = true // 初始非必填，永远非必填
        } else {
          item.noRequired = false
        }
      }
    } else {
      // console.log('totrue')
      item.noRequired = true
      el.style.display = 'none'
    }
  }
}

export function codeNameArray(options, option) {
  if (option) {
    // console.log('options = ', options, 'option = ', option)
    let tmp = options.find(item => '' + item.key === '' + option)
    if (tmp) {
      return tmp.value
    } else {
      return ''
    }

  }
  return ''
}

export function getFieldValue(field, obj) {
  let value = null
  if (field.parentObject.length === 1) {
    value = obj[field.propName]
  } else if (field.parentObject.length === 2) {
    // if (field.propName === 'houseRegisterDate') {
    //   console.log('obj[field.parentObject[1]] = ', obj[field.parentObject[1]])
    //   console.log('obj[field.parentObject[1]][field.propName] = ', obj[field.parentObject[1]][field.propName])
    //
    // }
    value = obj[field.parentObject[1]][field.propName]
  }
  return value
}
export function fieldNoValue(field, obj) {
  // if (field.propName === 'houseRegisterDate') {
  //   console.log('field = ', field)
  //   console.log('obj = ', obj)
  //   console.log('getFieldValue(field, obj) = ', getFieldValue(field, obj))
  //   console.log('totalFalse( getFieldValue(field, obj)) = ', totalFalse(getFieldValue(field, obj)))
  // }
  let value = getFieldValue(field, obj)
  if (value instanceof Array) {
    // console.log('检测数组！ ', value)
    for (let i = 0, len = value.length; i < len; i++) {
      if (totalFalse(value[i])) {
        return true
      }
    }
  }
  if (!totalFalse(value)) { // 有值
    return false
  } else { // 完全没有值
    // console.log('fieldNoValue! value = ', value)
    return true
  }
}

export function getFieldsByParentObject(objectName) {
  let array = inputFieldSetting.filter(item =>
    item.parentObject[0] === objectName
  )
  return array
}


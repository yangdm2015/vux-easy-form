/**
 * Created by yangshan on 2017/8/25.
 */
import industries from './industries'
import cities from './cities'

export const applicantLabel = {
  name: '张蕊',
  gender: '性别',
  homePhone: null,
  mobile: '手机号码',
  phoneBrand: null,
  phoneStatus: null,
  idType: null,
  idNumber: '230102197707064407',
  bankCode: '307',
  bankCardNumber: 6226770329887627,
  bankCardName: '平安银行',
  householdNowProvince: null,
  householdNowCity: null,
  householdNowAddress: '通讯地址', // 通讯地址
  householdType: null,
  householdProvince: null,
  householdCity: null,
  householdAddress: '户籍地址',
  payPeriod: 1, // 还款间隔，默认为1，页面不需要展示。
  addressCity: '居住地址',
  addressCityCodes: '居住省市', //  []
  officeCity: '单位省市',
  officeCityCodes: '单位省市', //  []
  company: '公司名称',
  companyType: '公司类型',
  industryName: '产业情况',
  industryCodes: '从事行业', // []
  // industryCode: null,
  profession: '职业',
  professionalTitle: '职称',
  title: '职务',
  yearOfWork: '工作年限',
  annualIncome: '个人年收入',
  annualIncomeRemarks: null,
  graduatedSchool: '毕业学校',
  educationLevel: '最高学历',
  maritalStatus: '婚姻状况',
  spouseName: '配偶姓名',
  spouseMobile: '配偶手机号码',
  spouseIdType: '身份证',
  spouseIdNumber: '配偶证件号码',
  marriageTime: null,
  spouseHouseholdType: null,
  spouseHouseholdProvince: null,
  spouseHouseholdCity: null,
  spouseHouseholdAddress: null,
  spouseCompany: null,
  spouseCompanyType: '公司类型',
  spouseIndustry: null,
  familyMonthlyIncome: null,
  emergencyContactName: '紧急联系人1', // 紧急联系人1
  emergencyContactMobile: 13872629287, // '紧急联系人电话'
  emergencyContactName2: null, // 紧急联系人2
  emergencyContactMobile2: null, // 紧急联系人2电话
  ec1RwBorrower: '1', // 紧急联系人1与借款人关系
  ec2RwBorrower: null, // 紧急联系人2与借款人关系
  ec1RType: '0', // 关系类型
  ec2RType: null,
  housingSituation: '现住房情况',
  commonResident: '共同居住人',
  professionType: '职业类别',

  companySize: null,
  companyAddress: '公司地址',
  companyPhone: '办公电话',

  increaseCreditItems: null,
  // officeOwner: '经营场所所有权',
  email: '',
  birthdate: '2010-02-02',
  // clientWorkType: null,
  extra: {
    clientLoanType: null,
    clientWorkType: '客户类型',
    addressType: '通讯地址类型',
    registerNumber: null,
    officeOwner: '经营场所所有权',
    businessTerm: '经营年限',
    companyAnnualIncome: '企业年收入',
    employeeCount: '0',
    mainJob: '岗位',
    companyName: '经营实体名称', // 经营实体名称
    professionCatType: '职业类型', // 职业类型
  }
}
export const houseLabel = {
  accountSituation: null,
  address: '房屋地址',
  addressConsistentWithLicense: null,
  buildTime: '修建时间',
  buildingType: '房屋类型',
  certNumber: 12312,
  city: ['北京'],
  communityName: '小区名称',
  constructionArea: '建筑面积（平方米）',
  constructionTime: null,
  floor: '楼层',
  hasElevator: null,
  landUsageCertNumber: null,
  // nameOfOwner: null,
  orientation: '朝南',
  parkingSituation: null,
  plannedLandUsage: null,
  propertyType: '房屋类型',
  propertyYears: '土地使用年限',
  proportionOfHousing: null,
  purchaseTime: '购买时间',
  purchaseUnitPrice: '购买单价',
  purchaseWay: null,
  realEstateCertNumber: null,
  roomsNumber: 2,
  // spouseName: null,
  surroundings: null,
  totalPrice: '购买总价',
  usefulArea: '使用面积',
  carInformation: null,
  financialProduct: null,
  planningPurpose: '规划用途',
  extra: {
    houseUsedArea: '套内建筑面积', // 套内建筑面积
    landGain: '土地使用权取得方式', // 土地使用权取得方式
    houseRegisterDate: '房屋登记时间', // 房屋登记时间
    ownerType: '房屋所有情况', // 房屋所有情况
  }
}
const applicantDefault = {
  name: '',
  gender: '',
  homePhone: null,
  mobile: '',
  phoneBrand: null,
  phoneStatus: null,
  idType: '0',
  idNumber: '',
  bankCode: '',
  bankCardNumber: '',
  bankCardName: '',
  householdNowProvince: null,
  householdNowCity: null,
  householdNowAddress: '', // 通讯地址
  householdType: null,
  householdProvince: null,
  householdCity: null,
  householdAddress: '',
  payPeriod: 1,
  addressCity: '',
  addressCityCodes: '',
  officeCity: '',
  officeCityCodes: '',
  company: '',
  companyType: '',
  industryName: '',
  industryCodes: [],
  // industryCode: null,
  profession: '',
  professionalTitle: '',
  title: null,
  yearOfWork: null,
  annualIncome: null,
  annualIncomeRemarks: null,
  graduatedSchool: null,
  educationLevel: '1',
  maritalStatus: '0',
  spouseName: null,
  spouseMobile: null,
  spouseIdType: '身份证',
  spouseIdNumber: null,
  marriageTime: null,
  spouseHouseholdType: null,
  spouseHouseholdProvince: null,
  spouseHouseholdCity: null,
  spouseHouseholdAddress: null,
  spouseCompany: null,
  spouseCompanyType: null,
  spouseIndustry: null,
  familyMonthlyIncome: null,
  emergencyContactName: '', // 紧急联系人1
  emergencyContactMobile: '', // '紧急联系人电话'
  emergencyContactName2: null, // 紧急联系人2
  emergencyContactMobile2: null, // 紧急联系人2电话
  ec1RwBorrower: '1', // 紧急联系人1与借款人关系
  ec2RwBorrower: null, // 紧急联系人2与借款人关系
  ec1RType: '0', // 关系类型
  ec2RType: null,
  housingSituation: '',
  commonResident: '',
  professionType: null,

  companySize: null,
  companyAddress: '',
  companyPhone: '',

  increaseCreditItems: null,
  email: '',
  birthdate: '',
  // clientWorkType: null,
  extra: {
    clientLoanType: null,
    clientWorkType: '',
    addressType: '1',
    registerNumber: null,
    officeOwner: null,
    businessTerm: '',
    companyAnnualIncome: '',
    employeeCount: '0',
    mainJob: '',
    companyName: null, // 经营实体名称
    professionCatType: null, // 职业类型
  }
}
const houseDefault = {
  accountSituation: null,
  address: '',
  addressConsistentWithLicense: null,
  buildTime: '',
  buildingType: null,
  certNumber: '',
  city: [],
  communityName: '',
  constructionArea: null,
  constructionTime: null,
  floor: '',
  hasElevator: null,
  landUsageCertNumber: null,
  // nameOfOwner: null,
  orientation: '',
  parkingSituation: null,
  plannedLandUsage: null,
  propertyType: '',
  propertyYears: '',
  proportionOfHousing: null,
  purchaseTime: null,
  purchaseUnitPrice: null,
  purchaseWay: null,
  realEstateCertNumber: null,
  roomsNumber: 2,
  // spouseName: null,
  surroundings: null,
  totalPrice: null,
  usefulArea: null,
  carInformation: null,
  financialProduct: null,
  planningPurpose: null,
  extra: {
    houseUsedArea: null, // 套内建筑面积
    landGain: '', // 土地使用权取得方式
    houseRegisterDate: '', // 房屋登记时间
    ownerType: '', // 房屋所有情况
  }
}
const allOrientations = [
  { value: '朝南', key: '朝南' },
  { value: '朝北', key: '朝北' },
  { value: '朝东', key: '朝东' },
  { value: '朝西', key: '朝西' },
  { value: '南北', key: '南北' },
  { value: '其它', key: '其它' }
]
const houseTypes = [
  { key: '0', value: '普通住宅' },
  { key: '1', value: '别墅' },
  { key: '2', value: '其它' }
]
const educations = [{
  key: '1',
  value: '大学'
}, {
  key: '2',
  value: '研究生及以上'
}, {
  key: '3',
  value: '大专'
}, {
  key: '4',
  value: '中专'
}, {
  key: '5',
  value: '技术学校'
}, {
  key: '6',
  value: '高中'
}, {
  key: '7',
  value: '初中'
}, {
  key: '8',
  value: '小学'
}, {
  key: '9',
  value: '文盲或半文盲'
}, {
  key: '10',
  value: '未知'
}]

export const clientWorkTypes = [
  { value: '一般自然人', key: '0' },
  { value: '个体工商户', key: '1' },
  { value: '小微企业主', key: '2' }
]

const maritalStatus = [{
  key: '0',
  value: '未婚'
}, {
  key: '2',
  value: '离异'
}, {
  key: '3',
  value: '丧偶'
}, {
  key: '4',
  value: '其他'
}, {
  key: '5',
  value: '已婚无子女'
}, {
  key: '6',
  value: '已婚有子女'
}]
const livingConditions = [{
  key: '1',
  value: '未婚'
}, {
  key: '2',
  value: '已婚'
}]
const
  professionTypes = [{
    key: '0',
    value: '受薪'
  }, {
    key: '1',
    value: '自雇'
  }]
const relationshipTypes = [{
  key: '1',
  value: '未婚'
}, {
  key: '2',
  value: '已婚'
}]
const applicantRelationshipTypes = [{
  key: '1',
  value: '未婚'
}, {
  key: '2',
  value: '已婚'
}]
const time = [{
  key: '6',
  value: '6期'
}, {
  key: '12',
  value: '12期'
}, {
  key: '24',
  value: '24期'
}, {
  key: '36',
  value: '36期'
}]
const periods = [{
  key: 6,
  value: '6期'
}, {
  key: 12,
  value: '12期'
}, {
  key: 24,
  value: '24期'
}, {
  key: 36,
  value: '36期'
}]
const businessTypes = [{
  key: '1',
  value: '银行贷款赎楼'
}, {
  key: '2',
  value: '非银行金融机构贷款赎楼'
}]
const IdInfos = [
  'idCardFaceUrl',
  'portraitUrl',
  'idNumber',
  'name',
  'gender',
  'birthday',
  'address',
  'nationality',
  'cardIssuer'
]
const rwApplicant = [ // 与申请人的关系
  { value: '父母', key: '1' },
  { value: '配偶', key: '2' },
  { value: '子女', key: '3' },
  { value: '兄弟姐妹', key: '4' },
  { value: '朋友', key: '5' },
  { value: '同事', key: '6' },
  { value: '合伙人', key: '7' },
  { value: '其他', key: '8' },
];
const relationshipType = [ // 关系类型
  { value: '其他联系人', key: '0' },
  { value: '直系联系人', key: '1' },
];
let housingSituations = [
  { key: '租赁', value: '租赁' },
  { key: '自置有贷款', value: '自置有贷款' },
  { key: '自置无贷款', value: '自置无贷款' },
  { key: '单位', value: '单位' },
  { key: '其他', value: '其他' }
];
let taskTypeBtnShow = {
  产调核房征信补件: '下户'
}
const bankCodes = [
  { value: '工商银行', key: '102' },
  { value: '农业银行', key: '103' },
  { value: '中国银行', key: '104' },
  { value: '建设银行', key: '105' },
  { value: '交通银行', key: '301' },
  { value: '中信银行', key: '302' },
  { value: '平安银行', key: '307' },
  { value: '广发银行', key: '306' },
  { value: '兴业银行', key: '309' },
  { value: '光大银行', key: '303' },
  { value: '浦发银行', key: '310' },
  { value: '民生银行', key: '305' },
  { value: '上海银行', key: '401' },
  { value: '华夏银行', key: '304' },
  { value: '邮储银行', key: '100' },
];

const companyTypes = [
  { key: '100', value: '党政机关' },
  { key: '200', value: '事业单位' },
  { key: '300', value: '军队' },
  { key: '400', value: '社会团体' },
  { key: '500', value: '内资企业' },
  { key: '510', value: '国有企业' },
  { key: '520', value: '集体企业' },
  { key: '530', value: '股份合作企业' },
  { key: '540', value: '联营企业' },
  { key: '550', value: '有限责任公司' },
  { key: '560', value: '股份有限公司' },
  { key: '570', value: '私营企业' },
  { key: '600', value: '外商投资企业(含港、澳、台)' },
  { key: '610', value: '中外合资经营企业(含港、澳、台)' },
  { key: '620', value: '中外合作经营企业(含港、澳、台)' },
  { key: '630', value: '外资企业(含港、澳、台)' },
  { key: '640', value: '外商投资股份有限公司(含港、澳、台)' },
  { key: '700', value: '个体经营' },
  { key: '800', value: '其他' },
  { key: '900', value: '未知' },
];
export const commonResidents = [
  { key: '父母', value: '父母' },
  { key: '配偶及子女', value: '配偶及子女' },
  { key: '朋友', value: '朋友' },
  { key: '独居', value: '独居' },
  { key: '其他', value: '其他' },
]
export const addressTypes = [
  { key: '1', value: '住宅' },
  { key: '2', value: '单位' }
]
export const genders = [
  { key: '0', value: '女' },
  { key: '1', value: '男' }
]
export const professionCatTypes = [
  { key: '0', value: '国家机关、党群组织、企业、事业单位负责人' },
  { key: '1', value: '专业技术人员' },
  { key: '2', value: '办事人员和有关人员' },
  { key: '3', value: '商业、服务业人员' },
  { key: '4', value: '农、林、牧、渔、水利业生产人员' },
  { key: '5', value: '生产、运输操作人员及有关人员' },
  { key: '6', value: '军人' },
  { key: '7', value: '不便分类的其他从业人员' },
  { key: '8', value: '未知' },
]
export const propertyTypes = [
  { value: '一室', key: '一室' },
  { value: '二室', key: '二室' },
  { value: '三室', key: '三室' },
  { value: '四室', key: '四室' },
  { value: '五室', key: '五室' },
  { value: '五室以上', key: '五室以上' }
];
export const titles = [
  { key: '0', value: '高级领导(局级及以上或大公司高级管理人员)' },
  { key: '1', value: '中级领导(局级以下或大公司中级管理人员)' },
  { key: '2', value: '一般员工' },
  { key: '3', value: '其它' },
  { key: '4', value: '未知' },
]
export const professionalTitles = [ // 职称
  { value: '无', key: '0' },
  { value: '高级', key: '1' },
  { value: '中级', key: '2' },
  { value: '初级', key: '3' },
  { value: '未知', key: '4' },
];

export const buildingTypes = [
  { key: '0', value: '普通住宅' },
  { key: '1', value: '别墅' },
  { key: '2', value: '其它' }
];
export const planningPurposes = [
  { key: '商业', value: '商业' },
  { key: '住宅', value: '住宅' },
  { key: '商住', value: '商住' }
]

export const landGains = [ // 土地使用权取得方式
  { key: '出让', value: '出让' },
  { key: '划拨', value: '划拨' },
  { key: '70年产权', value: '70年产权' },
  { key: '其它', value: '其它' },
]
export const ownerTypes = [ // 房屋所有情况
  { key: '单独所有', value: '单独所有' },
  { key: '共同所有', value: '共同所有' }
]

export const officeOwnerTypes = [ // 经营场所所有权
  { key: '0', value: '自置有贷款' },
  { key: '1', value: '自置无贷款' },
  { key: '2', value: '租赁' },
  { key: '3', value: '其他' },
]


export {
  educations, livingConditions, professionTypes,
  relationshipTypes, applicantRelationshipTypes, time,
  maritalStatus, periods, businessTypes, applicantDefault,
  rwApplicant, relationshipType, housingSituations,
  houseDefault, allOrientations, houseTypes, taskTypeBtnShow,
  bankCodes, companyTypes, industries, cities
}
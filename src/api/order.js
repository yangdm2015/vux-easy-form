import request from '../utils/fetch.js';
import axios from 'axios';
import * as myFilter from 'vue-filters/index';
import { v1sld, v1toc, v1 } from '@/global'
import Vue from 'vue'
import { dealApplicant, dealapplicantBeforSave } from '../utils/common-tools'
// import clone from '../'
// 进件
// export function createOrder(orderId, query) {
//   return request({
//     url: '/v1/orders/' + orderId,
//     method: 'post',
//     data: query
//   })
// }

export function createOrder(order) {
  return request({
    url: v1sld + 'pre-orders/order',
    method: 'post',
    data: order
  })
}

export function createOrder1(order) {
  return Vue.http.post(' https://blade-api-dev.fangfintech.com/blade/v1/sld/pre-orders', {})
  // return Vue.http.get('https://mint-api-dev.fangfintech.com/bohe/v1/institutions/31e33ab0-a7f1-4cff-959a-ae3a92687f11/product')
}


// 身份证识别
export function ocrIdCard(formData) {
  let config = {
    headers: { 'content-type': 'multipart/form-data' }
  };
  // console.log('process.env.API_ROOT = ',process.env.API_ROOT)
  return axios.post(`${process.env.API_ROOT}v1/ocr/idcard`, formData, config)
}

// 上传图片
export function uploadImage(orderId, formData) {

  return request({
    url: `v1/orders/${orderId}/attachment`,
    method: 'POST',
    data: formData,
    useFormData: true,
  })
}

// 进件上传申请人信息
export function addApplicantInfo2Order(orderId, applicant) {
  return request({
    url: v1sld + `pre-orders/${orderId}/applicant`,
    method: 'POST',
    data: applicant
  });
}

// 进件上传申请人信息（未处理过的）
export function addApplicantInfo2OrderAuto(orderId, applicant) {
  let tmp = dealapplicantBeforSave(applicant)
  return request({
    url: v1sld + `pre-orders/${orderId}/applicant`,
    method: 'POST',
    data: tmp
  });
}


// 销售员 获取 进件详情
export function getOrderDetail(orderId) {
  return request({
    url: v1sld + `pre-orders/${orderId}/order`,
    method: 'GET',
    params: {}
  });
}

// 销售员 获取 申请人详情
export function getApplicantDetail(orderId) {
  return request({
    url: v1sld + `pre-orders/${orderId}/applicant`,
    method: 'GET',
    params: {}
  });
}

// 用orderId请求申请人id
export function getApplicantDetailByOrderId(orderId) {
  return getOrderDetail(orderId).then(rsp => {
    // console.log('在api中 得到的订单信息是：', rsp.data.data)
    let applicantUid = rsp.data.data.applicantUid
    if (applicantUid) {
      return this.getApplicantDetail(orderId)
    } else {
      return 'ok'
    }
  }).then(rsp => {
    // console.log('在api中 得到的申请人信息是：', rsp)
    if (rsp.data) {
      let tmp = rsp
      tmp.data.data = dealApplicant(rsp.data.data)
      return tmp
    } else {
      return false
    }
  })
}

// 销售员 获取 房产详情
export function getHouseDetail(orderId) {
  return request({
    url: v1sld + `pre-orders/${orderId}/house`,
    method: 'GET',
    params: {}
  });
}


// 进件上传房产信息
export function addHouseInfo2Order(orderId, house) {
  return request({
    url: v1sld + `pre-orders/${orderId}/house`,
    method: 'POST',
    data: house
  });
}

// 获取征信协议链接

export function getProtocalUrl(orderId) {
  return request({
    url: v1 + `toc/orders/${orderId}/agreements/first?taskType=征信授权协议&loanType=SHU_LOU_DAI`,
    method: 'GET',
    params: {}
  })
}

// url跳转
export function redirect(url) {
  return `${process.env.API_ROOT}/v1/redirect?url=${url}`;
}

export function smsCode(mobile) {
  return request({
    url: `/v1/sms/check-code/${mobile}`,
    method: 'get',
  });
}

// 获取已上传的图片
export function getImgUrl(params, orderId) {
  return request({
    url: v1 + `orders/${orderId}/attachments`,
    method: 'get',
    params: { ...params, taskType: 'jinjian' },
  });
}

// 获取城市列表
export function getCityList() {
  return request({
    url: v1 + 'cities',
    method: 'get',
  });
}

// 获取合约内容
export function getAgreement(url) {
  return request({
    url: v1 + 'redirect',
    method: 'get',
    params: { url }
  });
}

// 确认进件
export function orderConfirm(orderId) {
  return request({
    url: v1sld + `pre-orders/${orderId}/confirm`,
    method: 'POST'
  });
}


// 销售员 获取 已进件进件详情
export function getComfirmedOrderDetail(orderId) {
  return request({
    // url: v1 + `my-orders/search`,
    url: v1 + `orders/${orderId}`,
    method: 'GET',
    params: {}
  });
}


// 销售员 获取 已进件进件列表
export function getMyOrderList() {
  return request({
    url: v1 + 'my-orders/search',
    method: 'GET',
    params: {}
  });
}


// 销售员 获取 全部进件详情
export function getOrderDetailForWhole(orderId) {
  return request({
    url: v1sld + `orders/${orderId}`,
    method: 'GET',
    params: {}
  });
}

// 以上是用到的


// uuid生成器
export function createUuid() {
  return request({
    url: '/v1/generators/uuid',
    method: 'GET',
    params: {}
  })
}

// 获取销售员信息
export function getSalesInfo(uid) {
  return request({
    url: `/v1/toc/sales/${uid}`,
    method: 'GET',
    params: {}
  })
}

// 统计信息
export function getMetrics() {
  return request({
    url: '/v1/orders/metrics',
    method: 'GET',
    params: {}
  })
}


// 银行卡识别
export function ocrBankCard(formData) {
  let config = {
    headers: { 'content-type': 'multipart/form-data' }
  };
  return axios.post(`${process.env.API_ROOT}/v1/ocr/bankcard`, formData, config)
}


// 银行卡三要素验证
export function verifyId(bankcard, idcard, realname) {
  return request({
    url: `/v1/bankcard3/verify?bankcard=${bankcard}&idcard=${idcard}&realname=${realname}`,
    method: 'get',
    params: null
  })
}

// 申请人照片验证
export function verifyFace(idcard, realname, base64Str) {
  return request({
    url: '/v1/idfaceIdentity',
    method: 'post',
    data: { base64Str, idcard, realname }
  })
}

let templateId = '28114999163121402';
// 生成合同
export function startSign(orderId, userAccount, userPhone) {
  let obj = {
    templateId,
    orderId,
    title: 'hupo1号签合同测试',

    signerInfoList: [
      {
        sigerIndex: 0,
        account: 'wenjunj@hupofintech.com',
        isAutoSign: 1,
        phone: '18810809769',
        signerInfo: {
          account: 'wenjunj@hupofintech.com',
          idCard: '888888',
          name: 'hupo纷钛科技有限公司',
          caType: 2
        },
        signData: {
          name: 'jiewenjun',
          commodityName: '耐克运动鞋',
          idcard: '37080119880116',
          amount: '688'
        }
      },
      {
        sigerIndex: 1,
        account: userAccount,
        phone: userPhone
      },
    ]
  };
  return request({
    url: '/v1/enjoysign/startsign',
    method: 'post',
    data: obj
  })
}

// 合同签署
export function signPage(orderId, redirectUrl, userAccount, idCard, name) {
  let obj = {
    templateId,
    orderId,
    redirectUrl,
    signerInfo: {
      account: userAccount,
      idCard,
      name,
      caType: 4
    }
  };
  return request({
    url: '/v1/enjoysign/signpage',
    method: 'post',
    data: obj
  })
}


// 修改进件
export function editOrder(orderId, query) {
  return request({
    url: `/v1/pre-orders/${orderId}`,
    method: 'patch',
    data: query
  })
}

// 确认进件
export function confirmOrder(orderId) {
  return request({
    url: `/v1/pre-orders/${orderId}/confirm`,
    method: 'POST',
    data: {}
  });
}

// 进件列表
export function getOrders(params) {
  return request({
    url: '/v1/customers/orders',
    method: 'GET',
    params
  });
}


// 获取验证码
export function getVerifyCode(orderId) {
  return request({
    url: `/v1/orders/${orderId}/security_codes`,
    method: 'GET',
    params: {}
  });
}

// 我的进件列表
export function getMyOrders(params) {
  return request({
    url: '/v1/customers/orders',
    method: 'GET',
    params,
  })
}

// 商品详情
export function getCommodityDetail(id) {
  return request({
    url: `/v1/commodities/${id}`,
    method: 'GET',
    params: {},
  })
}

export function getCommodityImage(id) {
  return request({
    url: `/v1/image/${id}`,
    method: 'GET',
    params: {},
  })
}

// 获取审批信息
export function getApprovedInfo(id, taskType) {
  return request({
    url: `/v1/orders/${id}/comment?taskType=${taskType}`,
    method: 'GET',

  })
}


export function getUploadFileUrl(orderId) {
  return `${process.env.API_ROOT}/v1/orders/${orderId}/attachment`;
}

export function getUploadFilesUrl(orderId) {
  return `${process.env.API_ROOT}/v1/orders/${orderId}/attachments`;
}

export function getFiles(orderId, taskType, groupName) {
  return request({
    url: `/v1/orders/${orderId}/attachments`,
    method: 'GET',
    params: { group: encodeURI(groupName), taskType },

  })
}

// 贷后订单列表
export function getPostLoanOrders(params) {
  return request({
    url: '/v1/search/orders/postloan',
    method: 'GET',
    params,
  })
}

// 贷后订单列表
export function getClientOrders(params) {
  return request({
    url: '/v1/toc/search/orders/history',
    method: 'GET',
    params,
  })
}

// 获取贷款信息
export function getRepayment(orderId) {
  return request({
    url: `/v1/orders/${orderId}/post-loan/repayment`,
    method: 'get',
    params: {},
  });
}

// 提前还款试算
export function tryRepay(orderId, repayDate, principalAmount) {
  console.log(repayDate);
  let today = myFilter.parseTime(new Date());
  let isCurrentDayRepay = false;
  if (repayDate === today) {
    isCurrentDayRepay = true;
  }
  let expectedRepaymentDate = new Date(repayDate);
  return request({
    url: `/v1/orders/${orderId}/post-loan/repayment/trial`,
    method: 'POST',
    data: {
      mode: 'ADVANCE',
      expectedRepaymentDate: !isCurrentDayRepay ? expectedRepaymentDate : undefined,
      isCurrentDayRepay: !isCurrentDayRepay ? isCurrentDayRepay : undefined,
      principalAmount
    }
  })
}


// 获取还款银行和账户信息
export function getCollection(orderId) {

  return request({
    url: '/v1/post-loan/payment-account',
    method: 'get',
    params: {},
  });
}

// 逾期还款充值计算
export function overdueRepay(orderId) {

  return request({
    url: `/v1/orders/${orderId}/post-loan/repayment/trial`,
    method: 'POST',
    data: {
      mode: 'OVERDUE',
    }
  })
}

// 提前还款
export function repayInAdvance(orderId) {

  return request({
    url: `/v1/orders/${orderId}/post-loan/repayment`,
    method: 'POST',
    data: {
      mode: 'ADVANCE',
    }
  })
}

// 逾期还款
export function repayOverdue(orderId) {

  return request({
    url: `/v1/orders/${orderId}/post-loan/repayment/trial`,
    method: 'POST',
    data: {
      mode: 'OVERDUE'
    }
  })
}

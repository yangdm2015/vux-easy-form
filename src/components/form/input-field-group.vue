<template>
  <div>
    <group class="input-fields">
      <divider>{{group.chineseName}}</divider>
      <template v-for="item in fields">

        <x-input class="input-right-align"
                 :title="item.label"
                 v-if="item.type==='input'&&item.parentObject.length===1"
                 :key="item.propName"
                 :required="!item.noRequired"
                 v-model="group.currentObject[item.propName]"
                 v-should-show="{obj:group.currentObject,item:item,fields:fields}">
        </x-input>
        <x-input class="input-right-align"
                 :title="item.label"
                 v-else-if="item.type==='input'&&item.parentObject.length===2&&fieldsReady"
                 :key="item.propName"
                 :required="!item.noRequired"
                 v-model="group.currentObject[item.parentObject[1]][item.propName]"
                 v-should-show="{obj:group.currentObject,item:item,fields:fields}">
        </x-input>


        <popup-radio :title="item.label" placeholder="请选择"
                     v-else-if="item.type==='select'&&item.parentObject.length===1"
                     :key="item.propName"
                     :options="options[item.option]"
                     v-model="group.currentObject[item.propName]"
                     v-should-show="{obj:group.currentObject,item:item,fields:fields}">
        </popup-radio>


        <popup-radio :title="item.label" placeholder="请选择"
                     v-else-if="item.type==='select'&&item.parentObject.length===2&&fieldsReady"
                     :key="item.propName"
                     :options="options[item.option]"
                     v-model="group.currentObject[item.parentObject[1]][item.propName]"
                     v-should-show="{obj:group.currentObject,item:item,fields:fields}">
        </popup-radio>


        <cascade-select :title="item.label" placeholder="请选择"
                        v-else-if="item.type==='cascadeSelect'&&item.parentObject.length===1"
                        :key="item.propName"
                        :value="group.currentObject[item.propName]"
                        :propName="item.propName"
                        :optionsName="item.option"
                        :cascadeName="item.cascadeName"
                        :cascadeNumber="item.cascadeNumber"
                        @code-array-changed="getCodeArray"
                        v-should-show="{obj:group.currentObject,item:item,fields:fields}">
        </cascade-select>
        <cascade-select :title="item.label" placeholder="请选择"
                        v-else-if="item.type==='cascadeSelect'&&item.parentObject.length===2&&fieldsReady"
                        :key="item.propName"
                        :value="group.currentObject[item.parentObject[1]][item.propName]"
                        :propName="item.propName"
                        :optionsName="item.option"
                        :cascadeName="item.cascadeName"
                        :cascadeNumber="item.cascadeNumber"
                        @code-array-changed="getCodeArray"
                        v-should-show="{obj:group.currentObject,item:item,fields:fields}">
        </cascade-select>

        <calendar :title="item.label" placeholder="请选择"
                  v-else-if="item.type==='calendar'&&item.parentObject.length===1"
                  v-model="group.currentObject[item.propName]"
                  disable-future>
        </calendar>

        <calendar :title="item.label" placeholder="请选择"
                  v-else-if="item.type==='calendar'&&item.parentObject.length==2&&fieldsReady"
                  v-model="group.currentObject[item.parentObject[1]][item.propName]"
                  v-should-show="{obj:group.currentObject,item:item,fields:fields}"
                  disable-future>
        </calendar>
        <!--{{group.currentObject[item.propName]}}-->

      </template>

    </group>
    <!--<div @click="tt">test</div>-->
    <div class="btn_wrap">
      <x-button type="primary" @click.native="save">保存</x-button>
    </div>
  </div>
</template>
<script>
  import {
    XButton, XInput, Group, PopupRadio, Divider,
    PopupPicker, Picker, Calendar
  } from 'vux'
  import * as options from '../../static-data/options'
  //  import * as api from '@/api/order'
  let api = function () {}
  import { replaceEmptyfields } from '../../utils/common-tools'
  import {
    inputFieldGroupSetting as groups,
    getFieldsByParentObject as getFields,
    fieldNoValue, showFlex, getFieldValue
  } from '../../static-setting/input-field-setting'

  import cascadeSelect from './cascade-select.vue'
  import clone from '../../utils/clone'

  export default {
    name: '',
    data() {
      return {
        title: 'applicant',
        group: {},
        fields: [],
        autoFilledFields: [],
        options: clone(options),
        fieldsReady: false
      }
    },
    directives: {
      shouldShow: {
        bind: showFlex,
        update: showFlex
      }
    },
    created() {
      this.title = this.$route.query.objName
//      console.log('this.title = ', this.title)
      this.group = groups[this.title]
      this.group.api = api
      this.group.defaultObject = clone(options[this.title + 'Default'])
      this.orderId = this.$route.query.orderId
      this.fields = getFields(this.title)
//      console.log('fields = ', this.fields)
      console.log('taskId = ', this.$route.query.taskId)
      this.fields.filter(item => item.type === 'autoFill').forEach(item => {
        if (this.autoFilledFields[item.targetPropName]) {
          this.autoFilledFields = [...this.autoFilledFields, item.propName]
        } else {
          this.autoFilledFields[item.targetPropName] = [item.propName]
        }
      })
//      console.log('this.autoFilledFields = ',this.autoFilledFields)
      this.getObjectDetail()
    },
    props: ['objName'],

    methods: {
      tt() {
        console.log(this.group.currentObject)
      },
      getCodeArray(value) {
//        console.log('this.autoFilledFields = ', this.autoFilledFields)
//        console.log('this.autoFilledFields[value.propName] = ', this.autoFilledFields[value.propName])
        this.group.currentObject[value.propName] = value.codeArray
        if (this.autoFilledFields[value.propName] && this.autoFilledFields[value.propName].length > 0) {
          this.autoFilledFields[value.propName].forEach(item => {
            this.group.currentObject[item] = value.nameArray
            console.log(item, ' = ', value.nameArray)
          })
        }
      },
      save() {
        let rulePassed = true
        let emptyFields = []
        for (let i in this.fields) {
          let field = this.fields[i]
          if (!field.noRequired) { // 需要校验
//            console.log('需要校验！field.propName = field.propName')
            if (field.propName === 'industryCodes') {
              console.log('industryCodes = ', getFieldValue(field, this.group.currentObject))
            }
            if (fieldNoValue(field, this.group.currentObject)) {
              rulePassed = false;
              emptyFields.push(field.label)
              console.log('this.group.currentObject[' + field.propName + '] = ', this.group.currentObject[field.propName])
            }
          }
        }
        if (rulePassed) {
          console.log('this.group.currentObject = ', this.group.currentObject)
//          this.group.api[this.group.post](this.orderId, this.group.currentObject).then(rsp => {
//            let that = this
//            console.log('保存成功, rsp = ', rsp)
//            this.$vux.alert.show({
//              title: '保存成功！',
//              onHide() {
//                that.$router.push({name: '下户', query: {orderId: that.orderId, taskId: that.$route.query.taskId}})
//              }
//            })
//          })
        } else {
          this.$vux.alert.show({
            title: '请补全字段:' + emptyFields.join(',')
          })
        }
      },

      getObjectDetail() {
        console.log('开始获取申请人信息')
        if (this.orderId) {
          this.group.api[this.group.get](this.orderId).then(rsp => {
//            console.log('获取信息是：', rsp)
            console.log('得到的申请人信息是：', rsp.data.data)
            if (rsp) {
//              Object.keys(rsp).forEach(key => {
//                this.$set(this.group.currentObject, key, rsp[key])
//              })
              this.group.currentObject = replaceEmptyfields(this.group.defaultObject, rsp.data.data)
              this.fieldsReady = true
            } else {
              this.group.currentObject = this.group.defaultObject
              this.fieldsReady = true
            }
          })
        } else {
          this.group.currentObject = this.group.defaultObject
          this.fieldsReady = true
        }
      }
    },

    components: {
      Calendar,
      cascadeSelect,
      Picker,
      PopupPicker,
      Divider,
      Group,
      XInput,
      XButton,
      PopupRadio
    },
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../styles/mixin.scss";

  .input-fields {
    /deep/ .vux-tap-active {
      .weui-cell__ft {
        width: 60%;
        max-width: 260px;
        .vux-cell-value {
          display: inline-block;
          width: 100%;
          @include oneline-eclipse;
        }
      }
    }

  }
</style>

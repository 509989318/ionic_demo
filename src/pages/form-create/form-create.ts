import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the FormCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form-create',
  templateUrl: 'form-create.html',
})
export class FormCreatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.form_id = navParams.get('form_id'),
    this.form_name = navParams.get('form_name')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormCreatePage');
  }

  // 子フォームのJSON
  child_items = [{
    child_id: 0,
    child_forms: [{
      rank: 0,
      name: '日付',
      form_type: 'datetime'
    }, {
      rank: 1,
      name: '発見部署',
      form_type: 'select',
      options: [
        { key: 0, value: '製造部' },
        { key: 1, value: '管理部' }
      ],
      explanation: '発生した部署を選択してください'
    }, {
      rank: 2,
      name: '発生区分',
      form_type: 'select',
      options: [
        { key: 0, value: '内部' },
        { key: 1, value: '外部' }
      ]
    }, {
      rank: 3,
      name: '商品番号',
      form_type: 'text',
      placeholder: 'ここに商品番号を入力してください',
      explanation: '商品番号を入力する欄です'
    }]
  }, {
    child_id: 1,
    child_forms: [{
      rank: 0,
      name: '日付',
      form_type: 'datetime',
      explanation: '現在の日付を入力してください'
    }, {
      rank: 1,
      name: '連絡先',
      form_type: 'text'
    }, {
      rank: 2,
      name: '連絡内容',
      form_type: 'textarea',
      explanation: '内容を入力してください'
    }]
  }, {
    child_id: 2,
    child_forms: [{
      rank: 0,
      name: 'タイトル',
      form_type: 'select',
      options: [
        { key: 0, value: '未分類' },
        { key: 1, value: '時間外出勤' },
        { key: 2, value: '稟議書' },
        { key: 3, value: '有給休暇' }
      ]
    }, {
      rank: 1,
      name: '重要度',
      form_type: 'select',
      options: [
        { key: 0, value: '高い' },
        { key: 1, value: 'やや高い' },
        { key: 2, value: '普通' },
        { key: 3, value: 'やや低い' },
        { key: 4, value: '低い' }
      ]
    }]
  }]

}

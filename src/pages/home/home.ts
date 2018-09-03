import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormCreatePage } from '../form-create/form-create'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  // 親フォームのJSON
  items = [
    { key: 0, name: '不具合対応' },
    { key: 1, name: '緊急事故対応' },
    { key: 2, name: '勤怠管理' }
  ];

  itemSelected(item: String) {
    this.navCtrl.push(FormCreatePage, { form_id: item.key, form_name: item.name });
  }

}

import { Injectable } from '@angular/core';
import { BankTableData } from '../data/bank-table';

@Injectable()
export class BankTableService extends BankTableData {

  data = [{
    id: 1,
    firstName: 'Mark',
    lastName: 'On',
    username: '@mdo',
    email: 'mdo@gmail.com',
    age: '28',
  }, {
    id: 2,
    firstName: 'Jacob',
    lastName: 'Off',
    username: '@fat',
    email: 'fat@yandex.ru',
    age: '45',
  }, {
    id: 3,
    firstName: 'Larry',
    lastName: 'Off',
    username: '@twitter',
    email: 'twitter@outlook.com',
    age: '18',
  }, {
    id: 4,
    firstName: 'John',
    lastName: 'On',
    username: '@snow',
    email: 'snow@gmail.com',
    age: '20',
  }, {
    id: 5,
    firstName: 'Jack',
    lastName: 'On',
    username: '@jack',
    email: 'jack@yandex.ru',
    age: '30',
  }];

  getData() {
    return this.data;
  }
}

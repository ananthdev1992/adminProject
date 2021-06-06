import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { BankTableData } from '../../@core/data/bank-table';

@Component({
  selector: 'ngx-bankbranch-management',
  templateUrl: './bankbranch-management.component.html',
  styleUrls: ['./bankbranch-management.component.scss']
})
export class BankbranchManagementComponent implements OnInit {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      firstName: {
        title: 'Account Name',
        type: 'string',
      },
      age: {
        title: 'Account Number',
        type: 'number',
      },
      username: {
        title: 'Swift Code',
        type: 'string',
      },
      email: {
        title: 'IBAN Number',
        type: 'string',
      },
      lastName: {
        title: 'Status',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: BankTableData) {
    const data = this.service.getData();
    this.source.load(data);
   }

   onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  ngOnInit(): void {
  }
}

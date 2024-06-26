import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorrowComponent } from './components//borrow/borrow.component';
import { ReturnedComponent } from './components//returned/returned.component';
import { ReportsComponent } from './components/reports/reports.component';
import { UserComponent } from './components/user/user.component';
import { MainRoutingModule } from './main-routing.module';
import { UserModule } from './components/user/user.module';
import { ReturnedModule } from './components/returned/returned.module';
import { ReportsModule } from './components/reports/reports.module';
import { BorrowModule } from './components/borrow/borrow.module';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    BorrowComponent,
    ReturnedComponent,
    ReportsComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    UserModule,
    ReturnedModule,
    ReportsModule,
    BorrowModule,
    MatDialogModule
  ]
})
export class MainModule { }

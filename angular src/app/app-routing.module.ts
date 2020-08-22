import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionComponent } from './transaction/transaction.component';
import { DebitComponent } from './debit/debit.component';
import { CreditComponent } from './credit/credit.component';

const routes: Routes = [
  {path:'transaction', component:TransactionComponent},
  {path:'credit', component:CreditComponent},
  {path:'debit', component:DebitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

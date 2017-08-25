import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { HelloComponent } from './hello/hello.component';
import { SkillListComponent } from './skill-list/skill-list.component';
import { ReqestComponent } from './reqest/reqest.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SkillDetailComponent } from './skill-detail/skill-detail.component';

const appRoutes: Routes = [
  {path: 'landing', component: HelloComponent},
  {path: 'skillList', component: SkillListComponent},
  {path: 'searching', component: ReqestComponent},
  {path: 'skillDetail/:id', component: SkillDetailComponent},
  {path: '', redirectTo:'/landing', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

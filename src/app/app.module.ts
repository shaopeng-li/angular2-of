import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { InputFormComponent } from './input-form/input-form.component';
import { SkillComponent } from './skill/skill.component';
import { ReqestComponent } from './reqest/reqest.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HighlightDirectiveDirective } from './highLightDirective/highlight-directive.directive';
import { ShowHideDirectiveDirective } from './showHideDrective/show-hide-directive.directive';
import { FormatPipePipe } from './formatPipe/format-pipe.pipe';
import { SkillListComponent } from './skill-list/skill-list.component';
import { SkillList } from './share/skillList.service';

const appRoutes: Routes = [
  {path: 'landing', component: HelloComponent},
  {path: 'skillList', component: SkillListComponent},
  {path: 'searching', component: ReqestComponent},
  {path: '', redirectTo:'/landing', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    InputFormComponent,
    SkillComponent,
    ReqestComponent,
    PageNotFoundComponent,
    HighlightDirectiveDirective,
    ShowHideDirectiveDirective,
    FormatPipePipe,
    SkillListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [SkillList],
  bootstrap: [AppComponent]
})
export class AppModule { }

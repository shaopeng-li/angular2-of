import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { InputFormComponent } from './input-form/input-form.component';
import { SkillComponent } from './skill/skill.component';
import { ReqestComponent } from './reqest/reqest.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SkillListComponent } from './skill-list/skill-list.component';
import { HighlightDirectiveDirective } from './highLightDirective/highlight-directive.directive';
import { ShowHideDirectiveDirective } from './showHideDrective/show-hide-directive.directive';
import { FormatPipePipe } from './formatPipe/format-pipe.pipe';
import { SkillList } from './share/skillList.service';
import { SkillDetailComponent } from './skill-detail/skill-detail.component';



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
    SkillListComponent,
    SkillDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [SkillList],
  bootstrap: [AppComponent]
})
export class AppModule { }

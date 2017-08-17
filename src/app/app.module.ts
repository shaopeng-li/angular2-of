import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { InputFormComponent } from './input-form/input-form.component';
import { SkillComponent } from './skill/skill.component';
import { ReqestComponent } from './reqest/reqest.component';
import { HighlightDirectiveDirective } from './highLightDirective/highlight-directive.directive';
import { ShowHideDirectiveDirective } from './showHideDrective/show-hide-directive.directive';
import { FormatPipePipe } from './formatPipe/format-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    InputFormComponent,
    SkillComponent,
    ReqestComponent,
    HighlightDirectiveDirective,
    ShowHideDirectiveDirective,
    FormatPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

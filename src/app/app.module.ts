import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { InputFormComponent } from './input-form/input-form.component';
import { SkillComponent } from './skill/skill.component';
import { ReqestComponent } from './reqest/reqest.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    InputFormComponent,
    SkillComponent,
    ReqestComponent
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

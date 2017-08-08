import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { InputFormComponent } from './input-form/input-form.component';
import { SkillComponent } from './skill/skill.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    InputFormComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

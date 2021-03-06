import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { WorkflowStepComponent } from './components/workflow/workflow-step/workflow-step.component';
import { FormsModule } from '@angular/forms';
import { SearchInputComponent } from './components/search/search-input/search-input.component';
import { GeneralDataService } from './services/general-data.service';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    RecipeComponent,
    WorkflowStepComponent,
    SearchInputComponent
  ],
  entryComponents: [
    WorkflowStepComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    GeneralDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

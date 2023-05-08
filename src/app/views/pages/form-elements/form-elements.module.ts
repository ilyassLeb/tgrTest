import { CitoyenComponent } from './citoyen/citoyen.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { FeahterIconModule } from '../../../core/feather-icon/feather-icon.module';

// ngx-quill
import { QuillModule } from 'ngx-quill';

// angular-archwizard
import { ArchwizardModule } from 'angular-archwizard';
import { FormElementsComponent } from './form-elements.component';




// import { WizardService } from 'src/app/services/wizard.service';


const routes: Routes = [
  {
    path: '',
    component: FormElementsComponent,
    children: [
      {
        path: '',
        redirectTo: 'basic-elements',
        pathMatch: 'full'
      },



      {
        path: 'citoyen',
        component: CitoyenComponent
      }

    ]
  }
]

@NgModule({
  declarations: [FormElementsComponent, CitoyenComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    FeahterIconModule,
    QuillModule.forRoot(), // ngx-quill
    ArchwizardModule, // angular-archwizard
    HttpClientModule,

    // WizardService

  ],

})
export class FormElementsModule { }

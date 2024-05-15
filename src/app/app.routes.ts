import { RouterModule, Routes } from '@angular/router';
import { DescriptionComponent } from './description/description.component';
import { CoverPageComponent } from './cover-page/cover-page.component';
import { NgModule } from '@angular/core';
import { MethodsComponent } from './methods/methods.component';
import { ResultsComponent } from './results/results.component';
import { DocumentationComponent } from './documentation/documentation.component';

export const routes: Routes = [
    { path: "description", component: DescriptionComponent },
    {path: "cover", component: CoverPageComponent},
    {path: "methods", component: MethodsComponent},
    {path: "results", component: ResultsComponent},
    {path: "doc", component: DocumentationComponent},
    {path: "**", component: CoverPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }

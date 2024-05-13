import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionComponent } from './description/description.component';
import { CoverPageComponent } from './cover-page/cover-page.component';

const routes: Routes = [
  { path: "description", component: DescriptionComponent },
    {path: "cover", component: CoverPageComponent},
    {path: "**", component: CoverPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

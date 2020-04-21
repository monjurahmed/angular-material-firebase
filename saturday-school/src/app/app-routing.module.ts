import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TraineesComponent } from './trainees/trainees.component';
import { TraineeEntryComponent } from './trainees/trainee-entry/trainee-entry.component';
import { TraineeListComponent } from './trainees/trainee-list/trainee-list.component';


const routes: Routes = [
  { path: '', component: TraineesComponent},
  { path: 'entry', component: TraineeEntryComponent},
  { path: 'list', component: TraineeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

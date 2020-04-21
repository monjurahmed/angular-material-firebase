import { NgModule } from '@angular/core';
import {MatButtonModule, MatToolbarModule, MatMenuModule, MatInputModule,
  MatSnackBarModule, MatTableModule} from '@angular/material';

const MaterialComponents = [MatButtonModule, MatToolbarModule, MatMenuModule,
   MatInputModule, MatSnackBarModule, MatTableModule];

@NgModule({
  
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }

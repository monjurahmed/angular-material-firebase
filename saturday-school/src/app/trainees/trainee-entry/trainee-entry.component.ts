import { Component, OnInit } from '@angular/core';
import { TraineeService } from 'src/app/services/trainee.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-trainee-entry',
  templateUrl: './trainee-entry.component.html',
  styleUrls: ['./trainee-entry.component.css']
})
export class TraineeEntryComponent implements OnInit {

  constructor( private service: TraineeService, private notificationService: NotificationService) { }

  saveInfo(){
    if(this.service.form.valid){
      this.service.saveTraineeInfo(this.service.form.value);
      this.notificationService.successMessage('Data Successfully inserted');
      this.service.form.reset();
      this.service.initializedForm();
      
    }
  }

  ngOnInit() {
    this.service.getTraineeInfo();
  }

}

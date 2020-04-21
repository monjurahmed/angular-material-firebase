import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class TraineeService {

  traineeList: AngularFireList<any>;

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl('', Validators.required),
    mobileNo: new FormControl('', Validators.minLength(11)),
    email: new FormControl('', Validators.email),
    address: new FormControl('')
  })

  constructor(private firebase: AngularFireDatabase) { }

  getTraineeInfo(){
    this.traineeList = this.firebase.list('trainees')
    return this.traineeList.snapshotChanges();
  }

  initializedForm(){
    this.form.setValue({
      $key: null,
      name: '',
      mobile: '',
      email: '',
      address: ''
    })
  }

  saveTraineeInfo(traineeObj){
    this.traineeList.push({
      name: traineeObj.name,
      mobileNo: traineeObj.mobileNo,
      email: traineeObj.email,
      address: traineeObj.address
    })  
    
  }
}

import { Component, OnInit } from '@angular/core';
import {MatTableDataSource } from '@angular/material';
import {TraineeService} from '../../services/trainee.service'

@Component({
  selector: 'app-trainee-list',
  templateUrl: './trainee-list.component.html',
  styleUrls: ['./trainee-list.component.css']
})
export class TraineeListComponent implements OnInit {

  traineeList: MatTableDataSource<any>;

  displayedColumns:string[]= ['name','mobileNo', 'email', 'address'];

  constructor( private service: TraineeService) { }

  ngOnInit() {
    this.service.getTraineeInfo().subscribe( list => {
      let array = list.map( item =>{
        return{
          $key: item.key,
          ...item.payload.val()
        }
      })
      this.traineeList = new MatTableDataSource(array);
    })  
  }

}

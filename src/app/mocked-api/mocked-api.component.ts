import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApexAnnotations, ApexAxisChartSeries, ApexChart, ApexTitleSubtitle } from 'ng-apexcharts/public_api';
import { DataService } from '../data.service';
import { Example } from '../Example';

@Component({
  selector: 'app-mocked-api',
  templateUrl: './mocked-api.component.html',
  styleUrls: ['./mocked-api.component.css']
})
export class MockedApiComponent implements OnInit {

  example:Array<Example>=[];
  series!: ApexAxisChartSeries;
  chart!: ApexChart;
  title!:ApexTitleSubtitle;
  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    this.loadAllData();
  }
  // onsubmit():any{
  //   this.dataservice.getData().subscribe(example=>{
  //     this.example=example;
  //   // this.router.navigate(['/']);
  //   },
  //   e=>{
  //   });
  // }
  loadAllData():void{
    this.dataservice.getData().subscribe(result=>{this.example=result;})
    console.log(typeof(this.example[0].blogspotId))
    for (let i = 0; i < this.example.length; i++) {
      this.series=[{
        name:'x- axis',
        data:[this.example[i].count]
      }
    ,{
      name:'y-axis',
      data:[this.example[i].count]
    }];
    this.chart={
      type:'line'
    }
    }
  }
}

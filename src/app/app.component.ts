import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title:string = 'click-counter';
  public digits:string[] = [];
  private count:number = 0;


  constructor(){

  }

  ngOnInit(){
    this.updateDigits();
  }

  public updateDigits(){
    this.digits = this.count.toString().split('');
    console.log(this.digits)
  }


  public resetCount(){
    this.count = 0;
    this.updateDigits();
  }


  public increaseCount(){
    this.count++;
    this.updateDigits();
  }
}

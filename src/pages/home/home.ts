import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  teamA=0;
  teamB= 0;

  constructor(public navCtrl: NavController) {

    this.teamA=0;
    this.teamB=0;

  }

  onclickk(num:number){
    if(num==3){
      this.teamA +=3;
    }
    else if(num==2){
      this.teamA +=2;
    }
    else {
      this.teamA +=5;
    }




  }

  onclick(num:number){
    if(num==3){
      this.teamB +=3;
    }
    else if(num==2){
      this.teamB +=2;
    }
    else {
      this.teamB +=5;
    }




  }


click(){
  this.teamA =0;
  this.teamB =0;
}

}

import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'tab-bar', 
    templateUrl: './tab-bar.component.html', 

})
export class TabBarComponent implements OnInit {

   constructor(){}
   
    ngOnInit(): void {
        
    }
    handleSleepiness() {
        console.log(123);
    }

}
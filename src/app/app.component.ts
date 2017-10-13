import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Retro-Barcode';
  arr = this.changeColor();
  changeColor(): Array<string> {
	  let arr: Array<string> = ["Azure", "Blue", "Crimson", "DarkSalmon", "Gainsboro", "Ivory", "LightGray", "Magenta", "OliveDrab", "SeaShell", "Tomato", "Yellow"];
	  let newarr: Array<string> = [];
	  var rnd: number;
	  for (let i = 0; i < arr.length; i++) {
		  rnd = Math.floor(Math.random() * (arr.length + 1));
		  newarr.push(arr[rnd]);
	  };
	  return newarr;
  }
  ngOnInit() {
	  this.changeColor();
  }
}




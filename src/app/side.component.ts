import { Component } from '@angular/core';

@Component({
  selector: 'sidecomponent',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent {
  title = 'side app';
  sidemenus = ['Main','Photo','Contact us'];
  public closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("opennav").style.display = "block";
    document.body.style.backgroundColor = "white";
}
}


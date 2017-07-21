import { Component } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
@Component({
  selector: 'headercomponent',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'header app';
  headers = ['Main','Contact Us'];
  
  
public openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    
    document.getElementById("main").setAttribute("disabled","true");
    document.getElementById("opennav").style.display = "none";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

}



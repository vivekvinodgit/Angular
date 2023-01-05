
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public count =0
  public str = 'Odd'
  public is_hidden = true

  check() {
    this.is_hidden=false
    if(this.count%2==0)
      this.str = 'Even'
    else
      this.str = 'Odd'

  }

  clear(){
    this.is_hidden=true
  }


}

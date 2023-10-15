import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gridlist',
  templateUrl: './gridlist.page.html',
  styleUrls: ['./gridlist.page.scss'],
})
export class GridlistPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public toastButton = [
    {
      text: "Dismiss",
      role: "cancel",
      handler: () => {
        console.log("dismiss click");
      }
    }
  ]


}

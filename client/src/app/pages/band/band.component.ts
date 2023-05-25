import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.scss']
})
export class BandComponent {
  band = [1,0,1,0,1,0,10,10,10,0,10,10,0,1,0]

  constructor(private TitleService: Title){
    TitleService.setTitle("Лента");
  }

}

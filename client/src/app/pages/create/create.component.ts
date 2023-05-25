import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  constructor(private TitleService: Title){
    TitleService.setTitle("Новая запись");
  }
  fileName: string = '';

  onFileSelected(event: any){
    const file: File = event.target.files[0];
    if (file){
      this.fileName = file.name;
    }
  }
}

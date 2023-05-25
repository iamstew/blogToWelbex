import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  myEntries = [1,1,1,]

  constructor(private TitleService: Title){
    TitleService.setTitle("Профиль");
  }

  editEntry(text: HTMLElement, title: HTMLElement, entry: HTMLElement){
    text.contentEditable = title.contentEditable = 'true';
    entry.classList.add("editing");
  }

  deleteEntry(){

  }

  confirmEdit(text: HTMLElement, title: HTMLElement, entry: HTMLElement){
    this.editableTurnOff(text,title,entry)
  }

  cancelEdit(text: HTMLElement, title: HTMLElement, entry: HTMLElement){
    this.editableTurnOff(text,title,entry)
  }

  editableTurnOff(text: HTMLElement, title: HTMLElement, entry: HTMLElement){
    text.contentEditable = title.contentEditable = 'false';
    entry.classList.remove("editing");
  }
}

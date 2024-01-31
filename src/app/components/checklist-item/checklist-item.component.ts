import { CommonModule } from '@angular/common';
import { Component, SimpleChanges } from '@angular/core';
import { ChecklistStorageService } from '../../services/checklist-storage.service';
import { Observable } from 'rxjs';
import { ChecklistItem } from '../../models/checklist-item';

@Component({
  selector: 'app-checklist-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checklist-item.component.html',
  styleUrl: './checklist-item.component.css'
})
export class ChecklistItemComponent {

  checklist: Observable<Array<ChecklistItem>>;
  isChecked: boolean[] = []

  constructor( private cls:ChecklistStorageService){
    this.checklist = cls.checklist

    this.checklist.subscribe(checklist=>{
      this.isChecked = new Array(checklist.length).fill(checklist.map(item=>item.checkbox))
    })
  }

  removeItem(input:string) {
    this.cls.removeItem(input);
  }

  checkItem(isChecked:boolean, text:string){
    console.log(`box checked ${isChecked} for text ${text}`)
    this.cls.updateItem(text, !isChecked)
  }

}

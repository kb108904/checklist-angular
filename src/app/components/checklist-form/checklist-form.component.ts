import { Component } from '@angular/core';
import { ChecklistStorageService } from '../../services/checklist-storage.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checklist-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './checklist-form.component.html',
  styleUrl: './checklist-form.component.css'
})
export class ChecklistFormComponent {

  textInputValue: string = ''

  constructor(private cls:ChecklistStorageService){
  }

  addItem(){
    console.log(`adding item ${this.textInputValue}`)
    this.cls.saveItem(this.textInputValue)
  }

}

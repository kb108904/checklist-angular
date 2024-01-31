import { Component } from '@angular/core';
import { ChecklistFormComponent } from '../checklist-form/checklist-form.component';
import { ChecklistItemComponent } from '../checklist-item/checklist-item.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ChecklistFormComponent, ChecklistItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(){

  }

}

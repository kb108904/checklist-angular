import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ChecklistItem } from '../models/checklist-item';

@Injectable({
  providedIn: 'root'
})

export class ChecklistStorageService {

  readonly KEY:string = "checklistkey_123"

  private _checklist = new BehaviorSubject<Array<ChecklistItem>>(this.getChecklist())

  get checklist() {
    return this._checklist.asObservable();
  }

  constructor() { }

  saveItem(input: string, checked: boolean = false) {

    let storedChecklist = localStorage.getItem(this.KEY)

    if(!storedChecklist){
      let initArray:Array<ChecklistItem> = [{text:input, checkbox:checked}]
      localStorage.setItem(this.KEY, JSON.stringify(initArray))
      this._checklist.next(initArray)
    }else{
      let checklist:Array<ChecklistItem> = JSON.parse(storedChecklist) as Array<ChecklistItem>
      checklist.push({text:input, checkbox:checked})
      localStorage.setItem(this.KEY, JSON.stringify(checklist))
      this._checklist.next(checklist)
    }
  }

  updateItem(input: string, checked: boolean = false) {

    let storedChecklist = localStorage.getItem(this.KEY)
    let checklist:Array<ChecklistItem> = JSON.parse(storedChecklist!) as Array<ChecklistItem>
    let index = checklist.findIndex(item =>item.text == input)
    checklist[index] = {text:input, checkbox: checked}
    localStorage.setItem(this.KEY, JSON.stringify(checklist))
    this._checklist.next(checklist)
  }

  private getChecklist():Array<ChecklistItem> {
    let checklist:Array<ChecklistItem> = JSON.parse(localStorage.getItem(this.KEY) || '{}')
    return checklist;
  }

  removeItem(input: string):void {
    let storedChecklist = localStorage.getItem(this.KEY) || '{}'

    let checklist:Array<ChecklistItem> = JSON.parse(storedChecklist) as Array<ChecklistItem>
    let index = checklist.findIndex(item =>item.text == input)

    if(index>-1)checklist.splice(index,1)

    localStorage.setItem(this.KEY, JSON.stringify(checklist))

    console.log(`removing ${input} at index ${index}`)
    this._checklist.next(checklist)

  }

}

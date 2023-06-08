import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-breakfast-category',
  templateUrl: './add-breakfast-category.component.html',
  styleUrls: ['./add-breakfast-category.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class AddBreakfastCategoryComponent implements OnInit {
  public categoriesFormGroup: FormGroup = new FormGroup({
    categoryName: new FormControl('', [Validators.required]),
    categoryStatus: new FormControl('', [Validators.required]),
  });
  constructor() {}
  get categoryName() {
    return this.categoriesFormGroup.get('categoryName');
  }
  get categoryStatus() {
    return this.categoriesFormGroup.get('categoryStatus');
  }
  ngOnInit(): void {}
}

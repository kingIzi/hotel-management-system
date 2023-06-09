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
  selector: 'app-add-banquet-category',
  templateUrl: './add-banquet-category.component.html',
  styleUrls: ['./add-banquet-category.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class AddBanquetCategoryComponent implements OnInit {
  public categoriesFormGroup: FormGroup = new FormGroup({
    categoryName: new FormControl('', [Validators.required]),
    categoryStatus: new FormControl('', [Validators.required]),
  });
  constructor() {}
  ngOnInit(): void {}
  get categoryName() {
    return this.categoriesFormGroup.get('categoryName');
  }
  get categoryStatus() {
    return this.categoriesFormGroup.get('categoryStatus');
  }
}

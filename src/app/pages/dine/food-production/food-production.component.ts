import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoaderModalComponent } from 'src/app/components/dialogs/loader-modal/loader-modal.component';
import { RouterNavsComponent } from 'src/app/components/utilities/router-navs/router-navs.component';
import { Tab, Modal, Input, Dropdown, initTE } from 'tw-elements';

@Component({
  selector: 'app-food-production',
  templateUrl: './food-production.component.html',
  styleUrls: ['./food-production.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterNavsComponent,
    FormsModule,
    ReactiveFormsModule,
    LoaderModalComponent,
  ],
})
export class FoodProductionComponent implements OnInit, AfterViewInit {
  @ViewChild('tabsList') tabsList!: ElementRef;
  public availableLinks = [
    {
      name: 'Dinning',
      link: '/main/dine/explore',
    },
    {
      name: 'Food Production',
      link: '/main/dine/explore/production',
    },
  ];
  public categoriesHeaders = ['Category Name', 'Status'];
  public breakfastCategories = [
    {
      name: 'Cereal and Grains',
      status: 'ON',
      icon: 'assets/img/cereals.jpg',
    },
    {
      name: 'Eggs and Dairy',
      status: 'ON',
      icon: 'assets/img/eggs-diary.jpg',
    },
    {
      name: 'Fruits and Berries',
      status: 'ON',
      icon: 'assets/img/fruits-salad.jpg',
    },
    {
      status: 'ON',
      name: 'Breads and Spreads',
      icon: 'assets/img/breads-spreads.jpg',
    },
    {
      status: 'ON',
      name: 'Juices and Smoothies',
      icon: 'assets/img/juices.jpg',
    },
    {
      status: 'ON',
      name: 'Breakfast Meats',
      icon: 'assets/img/breakfast-meats.jpg',
    },
    {
      status: 'ON',
      name: 'Breakfast Sides',
      icon: 'assets/img/breakfast-sides.jpg',
    },
  ];
  public categoriesFormGroup: FormGroup = new FormGroup({
    categoryName: new FormControl('', [Validators.required]),
    categoryStatus: new FormControl('', [Validators.required]),
  });
  get categoryName() {
    return this.categoriesFormGroup.get('categoryName');
  }
  get categoryStatus() {
    return this.categoriesFormGroup.get('categoryStatus');
  }
  constructor() {}
  ngAfterViewInit(): void {}
  ngOnInit(): void {
    initTE({ Tab, Modal, Input });
  }
  public getCurrentMealBreakfastCategories() {
    if (this.tabsList) {
      let category = this.getCurrentMeal();
      if (category === 'Breakfast') {
        return this.breakfastCategories;
      } else return null;
    } else {
      return this.breakfastCategories;
    }
  }
  private getCurrentMeal() {
    const uList = this.tabsList.nativeElement as HTMLUListElement;
    let li = uList.querySelectorAll('li');
    for (let i = 0; i < li.length; i++) {
      let anchor = li[i].firstChild as HTMLAnchorElement;
      if (anchor.hasAttribute('data-te-nav-active')) return anchor.textContent;
    }
    return '';
  }
}

import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { LoaderModalComponent } from 'src/app/components/dialogs/loader-modal/loader-modal.component';
import { RouterNavsComponent } from 'src/app/components/utilities/router-navs/router-navs.component';
import { Select, Modal, Datepicker, Input, initTE } from 'tw-elements';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoaderModalComponent,
    RouterNavsComponent,
  ],
})
export class ReservationsComponent implements OnInit, AfterViewInit {
  @ViewChild('checkInDate') checkInDate!: ElementRef;
  @ViewChild('checkOutDate') checkOutDate!: ElementRef;
  public availableLinks = [
    {
      name: 'Frontal office',
      link: '/main/front/explore',
    },
    {
      name: 'Make Reservations',
      link: '/main/front/reservations',
    },
  ];
  public roomTypes = [
    //list of all room types
    'Deluxe',
    'Standard',
    'Studio',
    'Double',
  ];
  public phonePrefixes = ['255', '243'];
  public typeOfCards = ['Driving License', 'National ID Card'];
  public roomInformationModel: {
    roomType: string;
    roomNo: string;
    checkIn: string;
    checkOut: string;
  } = { roomType: '', roomNo: '', checkIn: '', checkOut: '' };
  public roomNos = ['A-56', 'G-89', 'B-44', 'O-69', 'B-77'];
  public reservationsFormGroup: FormGroup = new FormGroup({
    roomType: new FormControl('Select room type', [Validators.required]),
    roomNo: new FormControl('Select room number', [Validators.required]),
    checkIn: new FormControl('', [Validators.required]),
    checkOut: new FormControl('', [Validators.required]),
    profile: new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      contactNumber: new FormControl('', [this.contactNumberValidator()]),
      email: new FormControl('', [Validators.email]),
      cardType: new FormControl('Select National ID Card type', [
        Validators.required,
      ]),
      cardNumber: new FormControl('', [Validators.required]),
      residentialAddress: new FormControl('', [Validators.required]),
    }),
  });
  constructor() {}
  get roomType() {
    return this.reservationsFormGroup.get('roomType');
  }
  get roomNo() {
    return this.reservationsFormGroup.get('roomNo');
  }
  get checkIn() {
    return this.reservationsFormGroup.get('checkIn');
  }
  get checkOut() {
    return this.reservationsFormGroup.get('checkOut');
  }
  get firstName() {
    return this.reservationsFormGroup.get('profile')?.get('firstName');
  }
  get lastName() {
    return this.reservationsFormGroup.get('profile')?.get('lastName');
  }
  get contactNumber() {
    return this.reservationsFormGroup.get('profile')?.get('contactNumber');
  }
  get email() {
    return this.reservationsFormGroup.get('profile')?.get('email');
  }
  get cardType() {
    return this.reservationsFormGroup.get('profile')?.get('cardType');
  }
  get cardNumber() {
    return this.reservationsFormGroup.get('profile')?.get('cardNumber');
  }
  get residentialAddress() {
    return this.reservationsFormGroup.get('profile')?.get('residentialAddress');
  }
  public ngAfterViewInit(): void {
    this.checkInDateMinDate();
  }
  public ngOnInit(): void {
    initTE({ Select, Datepicker, Input, Modal });
  }
  public submitReservationForm() {
    console.log(this.reservationsFormGroup);
  }
  private checkInDateMinDate() {
    let today = new Date();
    let MAX_YEAR_IN_ADVANCE = 4;
    let checkInDate = this.checkInDate.nativeElement as HTMLInputElement;
    let checkOutDate = this.checkOutDate.nativeElement as HTMLInputElement;
    new Datepicker(checkInDate, {
      min: today,
      max: new Date(
        today.getFullYear() + MAX_YEAR_IN_ADVANCE,
        today.getMonth(),
        today.getDate()
      ),
    });
    new Datepicker(checkOutDate, {
      min: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
      max: new Date(
        today.getFullYear() + MAX_YEAR_IN_ADVANCE,
        today.getMonth(),
        today.getDate()
      ),
    });
  }
  private contactNumberValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value && control.value[0] !== '+'
        ? { contactNumber: { value: control.value } }
        : null;
    };
  }
}

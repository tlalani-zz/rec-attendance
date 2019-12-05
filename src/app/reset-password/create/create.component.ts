import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  AbstractControl,
  ValidationErrors
} from "@angular/forms";
import { Observable } from "rxjs";
@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"]
})
export class CreateComponent implements OnInit {
  public form: FormGroup;
  @Output() submit = new EventEmitter();
  @Input() email: Observable<any>;
  constructor(private builder: FormBuilder) {}

  ngOnInit() {
    this.form = this.builder.group(
      {
        email: [this.email, Validators.required],
        password: ["", Validators.required],
        passwordConfirm: ["", Validators.required],
        selectedCenter: ["", Validators.required],
        selectedClass: ["", Validators.required],
        selectedDay: ["", Validators.required],
        startTime: ["", Validators.required],
        endTime: ["", Validators.required]
      },
      { validator: this.checkPasswords }
    );
    this.form.get("email").disable();
    this.email.subscribe(email => {
      this.form.get("email").setValue(email);
    });
  }

  checkPasswords(group: FormGroup) {
    let pass = group.get("password").value;
    let confirmPass = group.get("passwordConfirm").value;
    return pass === confirmPass ? null : { notSame: true };
  }

  submitForm() {
    this.submit.emit(this.form.value);
  }
}
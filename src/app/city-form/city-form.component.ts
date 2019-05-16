import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-city-form",
  templateUrl: "./city-form.component.html",
  styleUrls: ["./city-form.component.css"]
})
export class CityFormComponent implements OnInit {
  cityForm = new FormGroup({
    cityName: new FormControl("")
  });

  @Output()
  newCity: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.cityForm.controls['cityName'].value);
    this.newCity.emit(this.cityForm.controls["cityName"].value);
    this.cityForm.controls["cityName"].setValue("");
  }
}

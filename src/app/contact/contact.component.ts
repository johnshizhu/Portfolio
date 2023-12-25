import { Component, VERSION } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  title = "Formspree.io Angular " + VERSION.major + " Example";
  secretKey: string = "mrgnzdnv";

  emailForm = this.fb.group({
    name: [""],
    email: [""],
    message: [""]
  });

  constructor(private fb: FormBuilder, private httpClient: HttpClient) {}

  //Send an email using formspree.io account
  sendEmail(name: String, email: String, message: String) {
    
    //Set the url with your secretKey from formspree.io
    let url = "https://formspree.io/f/" + this.secretKey;

    //Set Headers
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      })
    };

    let data = `name=${name}&email=${email}&message=${message}`;
    let errorMessage: string = "";

    this.httpClient.post<any>(url, data, httpOptions).subscribe({
        next: data => {
            console.log("email sent" + JSON.stringify(data));
        },
        error: error => {
            errorMessage = error.message;
            console.log('error!', errorMessage);
        }
    })
  }
}

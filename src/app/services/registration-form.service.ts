import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistrationFormService {
  private url = environment.formUrl;

  constructor(private http: HttpClient) {}

  postFormData(formData: any): Observable<any> {
    return this.http.post(this.url, formData);
  }
}

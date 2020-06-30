import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Cat} from './cat';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private http: HttpClient
  ){}
  cats: Cat[] = [];
  cat : Cat;
  test(){
    this.http.get('https://api.thecatapi.com/v1/images/search?breed_ids=beng')
    .subscribe(
      (data) => {
        this.cat.photoUrl = '';
        console.log(data[0].url);
        this.cat.photoUrl = data[0].url;
        this.cat.description = data[0].breeds[0].description;
        this.cat.weight = data[0].breeds[0].weight.imperial;
        this.cat.wikiUrl = data[0].breeds[0].wikipedia_url;
        this.cats.push({photoUrl : data[0].url, description: data[0].breeds[0].description,
           weight: data[0].breeds[0].weight.imperial, wikiUrl: data[0].breeds[0].wikipedia_url});
        console.log(this.cats[0]);
      })
};
}

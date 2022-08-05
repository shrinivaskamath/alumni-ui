import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    window.open(
      'https://drive.google.com/drive/folders/1aS6mD3LKHVTE5feB9jPLOy-47B5YPlEh',
      '_blank'
    );
  }
}

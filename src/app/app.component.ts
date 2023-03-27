import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'interceptor';
  constructor(private dataService: DataService) {
    this.dataService.fetchData().subscribe((response) => {
      console.log('Received data:', response);
    });
  }
}

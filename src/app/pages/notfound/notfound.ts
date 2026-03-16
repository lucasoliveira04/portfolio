import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-notfound',
  imports: [RouterModule],
  standalone: true,
  templateUrl: './notfound.html',
  styleUrls: ['./notfound.css', '../../../styles.css'],
})
export class Notfound {}

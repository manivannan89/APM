import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {
  @Input() rating: number;
  startWidth: number;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    this.startWidth = this.rating * 86 / 5;
  }

}

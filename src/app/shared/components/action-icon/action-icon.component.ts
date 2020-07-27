import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-action-icon',
  templateUrl: './action-icon.component.html',
  styleUrls: ['./action-icon.component.scss'],
})
export class ActionIconComponent implements OnInit {
  @Input() icon: string = '';

  constructor() {}

  ngOnInit(): void {}
}

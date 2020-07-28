import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-action-icon',
  templateUrl: './action-icon.component.html',
  styleUrls: ['./action-icon.component.scss'],
})
export class ActionIconComponent implements OnInit {
  @Input() icon: string = '';
  @Input() pathUrl: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick() {
    this.router.navigate([this.pathUrl]);
  }
}

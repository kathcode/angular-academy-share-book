import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ActionIconComponent } from './components/action-icon/action-icon.component';

@NgModule({
  declarations: [HeaderComponent, ActionIconComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, ActionIconComponent],
  providers: [],
})
export class SharedModule {}

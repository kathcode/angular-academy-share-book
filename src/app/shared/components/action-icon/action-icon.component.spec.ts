import { ActionIconComponent } from './action-icon.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Router } from '@angular/router';

let component: ActionIconComponent;
let fixture: ComponentFixture<ActionIconComponent>;

describe('Action icon tests', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionIconComponent],
      imports: [AppRoutingModule],
    });
    fixture = TestBed.createComponent(ActionIconComponent);
    component = fixture.componentInstance;
  });

  it('should change the path url when click the button', async () => {
    spyOn(component, 'onClick');
    component.pathUrl = '/';
    const btn = fixture.debugElement.nativeElement.querySelector('a');
    btn.click();

    fixture.whenStable().then(() => {
      expect(component.onClick).toHaveBeenCalled();
    });
  });
});

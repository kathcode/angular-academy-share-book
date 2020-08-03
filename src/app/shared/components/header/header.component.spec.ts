import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

let component: HeaderComponent;
let fixture: ComponentFixture<HeaderComponent>;
let title: HTMLElement;
let links: NodeList;

describe('Header component test', () => {
  // Instance the component
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [AppRoutingModule],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    title = fixture.nativeElement.querySelector('p');
    links = fixture.nativeElement.querySelectorAll('a');
  });

  it('should display the default header title', () => {
    fixture.detectChanges(); // Detect changes for the data binding
    expect(title.textContent).toContain(component.title);
  });

  it('should display the text header when it changes', () => {
    component.title = 'Share book';
    fixture.detectChanges();
    expect(title.textContent).toBe(component.title);
  });

  it('should have three <a> tags', () => {
    expect(links.length).toBe(3);
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarModule} from '@angular/material';
import { HeaderComponent } from './header.component';

import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
	  imports:[MatToolbarModule],
	  providers : []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('Mattoolbar getting loaded',()=>{
	let keep_text = fixture.debugElement.query(By.css('mat-toolbar'));
	expect(keep_text).toBeTruthy();
  })
  
  if('Keep to be displayed in toolbar',()=>{
	let keep_text = fixture.debugElement.query(By.css('mat-toolbar'));
	//expect(keep_text).toBeTruthy();
	expect(keep_text.nativeElement.textContent).toBe('Keep');
  })
  
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternopageComponent } from './externopage.component';

describe('ExternopageComponent', () => {
  let component: ExternopageComponent;
  let fixture: ComponentFixture<ExternopageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExternopageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

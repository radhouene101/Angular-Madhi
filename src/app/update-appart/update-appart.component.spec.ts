import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAppartComponent } from './update-appart.component';

describe('UpdateAppartComponent', () => {
  let component: UpdateAppartComponent;
  let fixture: ComponentFixture<UpdateAppartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAppartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAppartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

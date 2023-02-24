import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PprlDataViewComponent } from './pprl-data-view.component';

describe('PprlDataViewComponent', () => {
  let component: PprlDataViewComponent;
  let fixture: ComponentFixture<PprlDataViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PprlDataViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PprlDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

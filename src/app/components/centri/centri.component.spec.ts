import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentriComponent } from './centri.component';

describe('CentriComponent', () => {
  let component: CentriComponent;
  let fixture: ComponentFixture<CentriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CentriComponent]
    });
    fixture = TestBed.createComponent(CentriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

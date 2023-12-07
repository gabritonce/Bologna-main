import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentriGommeComponent } from './centri-gomme.component';

describe('CentriGommeComponent', () => {
  let component: CentriGommeComponent;
  let fixture: ComponentFixture<CentriGommeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CentriGommeComponent]
    });
    fixture = TestBed.createComponent(CentriGommeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

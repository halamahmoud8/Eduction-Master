import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EductionPagesComponent } from './eduction-pages.component';

describe('EductionPagesComponent', () => {
  let component: EductionPagesComponent;
  let fixture: ComponentFixture<EductionPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EductionPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EductionPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProfileComponent } from './section-profile.component';

describe('SectionProfileComponent', () => {
  let component: SectionProfileComponent;
  let fixture: ComponentFixture<SectionProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionProfileComponent]
    });
    fixture = TestBed.createComponent(SectionProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

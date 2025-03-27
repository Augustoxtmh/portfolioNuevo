import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionExperienceComponent } from './section-experience.component';

describe('SectionExperienceComponent', () => {
  let component: SectionExperienceComponent;
  let fixture: ComponentFixture<SectionExperienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionExperienceComponent]
    });
    fixture = TestBed.createComponent(SectionExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

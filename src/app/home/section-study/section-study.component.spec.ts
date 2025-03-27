import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionStudyComponent } from './section-study.component';

describe('SectionStudyComponent', () => {
  let component: SectionStudyComponent;
  let fixture: ComponentFixture<SectionStudyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionStudyComponent]
    });
    fixture = TestBed.createComponent(SectionStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

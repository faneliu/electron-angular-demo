import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestI18nCompComponent } from './test-i18n-comp.component';

describe('TestI18nCompComponent', () => {
  let component: TestI18nCompComponent;
  let fixture: ComponentFixture<TestI18nCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestI18nCompComponent]
    });
    fixture = TestBed.createComponent(TestI18nCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

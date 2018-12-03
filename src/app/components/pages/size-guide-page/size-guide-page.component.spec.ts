import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeGuidePageComponent } from './size-guide-page.component';

describe('SizeGuidePageComponent', () => {
  let component: SizeGuidePageComponent;
  let fixture: ComponentFixture<SizeGuidePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizeGuidePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeGuidePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

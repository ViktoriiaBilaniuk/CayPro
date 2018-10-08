import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDetailsProjectItemComponent } from './company-details-project-item.component';

describe('CompanyDetailsProjectItemComponent', () => {
  let component: CompanyDetailsProjectItemComponent;
  let fixture: ComponentFixture<CompanyDetailsProjectItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyDetailsProjectItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDetailsProjectItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

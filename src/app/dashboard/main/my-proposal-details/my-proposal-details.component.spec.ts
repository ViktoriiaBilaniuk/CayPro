import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProposalDetailsComponent } from './my-proposal-details.component';

describe('MyProposalDetailsComponent', () => {
  let component: MyProposalDetailsComponent;
  let fixture: ComponentFixture<MyProposalDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProposalDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProposalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

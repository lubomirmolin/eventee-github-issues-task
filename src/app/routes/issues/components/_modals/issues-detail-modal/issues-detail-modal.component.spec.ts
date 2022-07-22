import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesDetailModalComponent } from './issues-detail-modal.component';

describe('IssuesDetailModalComponent', () => {
  let component: IssuesDetailModalComponent;
  let fixture: ComponentFixture<IssuesDetailModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuesDetailModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

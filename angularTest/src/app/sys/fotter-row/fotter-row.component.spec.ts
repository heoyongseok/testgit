import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotterRowComponent } from './fotter-row.component';

describe('FotterRowComponent', () => {
  let component: FotterRowComponent;
  let fixture: ComponentFixture<FotterRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotterRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotterRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

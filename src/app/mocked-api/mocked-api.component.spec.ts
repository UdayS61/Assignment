import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockedApiComponent } from './mocked-api.component';

describe('MockedApiComponent', () => {
  let component: MockedApiComponent;
  let fixture: ComponentFixture<MockedApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MockedApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MockedApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

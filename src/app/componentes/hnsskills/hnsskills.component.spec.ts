import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HnsskillsComponent } from './hnsskills.component';

describe('HnsskillsComponent', () => {
  let component: HnsskillsComponent;
  let fixture: ComponentFixture<HnsskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HnsskillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HnsskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UksToodeComponent } from './uks-toode.component';

describe('UksToodeComponent', () => {
  let component: UksToodeComponent;
  let fixture: ComponentFixture<UksToodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UksToodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UksToodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

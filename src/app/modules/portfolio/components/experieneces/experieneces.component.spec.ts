import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienecesComponent } from './experieneces.component';

describe('ExperienecesComponent', () => {
  let component: ExperienecesComponent;
  let fixture: ComponentFixture<ExperienecesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienecesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

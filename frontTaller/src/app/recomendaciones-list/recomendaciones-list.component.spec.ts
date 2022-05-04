import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendacionesListComponent } from './recomendaciones-list.component';

describe('RecomendacionesListComponent', () => {
  let component: RecomendacionesListComponent;
  let fixture: ComponentFixture<RecomendacionesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecomendacionesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomendacionesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

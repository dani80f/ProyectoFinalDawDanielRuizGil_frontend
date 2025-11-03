import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigaSimulacion } from './liga-simulacion';

describe('LigaSimulacion', () => {
  let component: LigaSimulacion;
  let fixture: ComponentFixture<LigaSimulacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LigaSimulacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LigaSimulacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

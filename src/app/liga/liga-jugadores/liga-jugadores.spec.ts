import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigaJugadores } from './liga-jugadores';

describe('LigaJugadores', () => {
  let component: LigaJugadores;
  let fixture: ComponentFixture<LigaJugadores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LigaJugadores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LigaJugadores);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

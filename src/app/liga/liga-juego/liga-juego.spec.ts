import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigaJuego } from './liga-juego';

describe('LigaJuego', () => {
  let component: LigaJuego;
  let fixture: ComponentFixture<LigaJuego>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LigaJuego]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LigaJuego);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

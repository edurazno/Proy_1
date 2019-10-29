import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarVisitaPage } from './buscar-visita.page';

describe('BuscarVisitaPage', () => {
  let component: BuscarVisitaPage;
  let fixture: ComponentFixture<BuscarVisitaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarVisitaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarVisitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

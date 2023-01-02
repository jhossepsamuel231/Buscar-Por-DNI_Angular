import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarDniComponent } from './buscar-dni.component';

describe('BuscarDniComponent', () => {
  let component: BuscarDniComponent;
  let fixture: ComponentFixture<BuscarDniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarDniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarDniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

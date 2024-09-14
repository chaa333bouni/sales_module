import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeproductComponent } from './listeproduct.component';

describe('ListeproductComponent', () => {
  let component: ListeproductComponent;
  let fixture: ComponentFixture<ListeproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeproductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieesComponent } from './categoriees.component';

describe('CategorieesComponent', () => {
  let component: CategorieesComponent;
  let fixture: ComponentFixture<CategorieesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorieesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategorieesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

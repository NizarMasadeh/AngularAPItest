import { Component } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { map, Observable, retry } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-categoriees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categoriees.component.html',
  styleUrl: './categoriees.component.css'
})
export class CategorieesComponent {

  products$: Observable<any>;
  constructor(private productSrv: ProductService) {
    this.products$ = this.productSrv.getCategory().pipe(
      map((item: any) => {
        return item.data;
      })
    );
  }

  getAllCategory() {

  }
}

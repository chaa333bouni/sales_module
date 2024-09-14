import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private productData = new BehaviorSubject<any[]>([]);
  productData$ = this.productData.asObservable();

  getProductData() {
    return this.productData.getValue();
  }

  setProductData(data: any[]) {
    this.productData.next(data);
  }
}

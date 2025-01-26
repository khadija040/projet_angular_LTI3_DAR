import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-component',
  standalone: true,
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent {
cartItems: any[] = [];
  totalCost: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotalCost();
  }

  removeItem(productId: number) {
    this.cartService.removeFromCart(productId);
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotalCost();
  }

  calculateTotalCost() {
    this.totalCost = this.cartService.getTotalCost();
  }
}

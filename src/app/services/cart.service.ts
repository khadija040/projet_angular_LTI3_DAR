// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
// import { CartItem } from '../models/cart-item';

// @Injectable({
//   providedIn: 'root',
// })
// export class CartService {
//   private cartItems: CartItem[] = [];
//   private cartSubject = new BehaviorSubject<CartItem[]>(this.cartItems);

//   getCart() {
//     return this.cartSubject.asObservable();
//   }

//   addItem(item: CartItem) {
//     const existingItem = this.cartItems.find((cartItem) => cartItem.id === item.id);
//     if (existingItem) {
//       existingItem.quantity += item.quantity;
//     } else {
//       this.cartItems.push(item);
//     }
//     this.cartSubject.next(this.cartItems);
//   }

//   updateQuantity(itemId: string, quantity: number) {
//     const item = this.cartItems.find((cartItem) => cartItem.id === itemId);
//     if (item) {
//       item.quantity = quantity;
//       this.cartSubject.next(this.cartItems);
//     }
//   }

//   removeItem(itemId: string) {
//     this.cartItems = this.cartItems.filter((item) => item.id !== itemId);
//     this.cartSubject.next(this.cartItems);
//   }

//   getTotalCost() {
//     return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//   }
// }

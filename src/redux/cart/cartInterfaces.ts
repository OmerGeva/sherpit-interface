import { cartItemType, orderType } from "./cartTypes";

export interface ICartState {
    cartItems: Array<cartItemType>;
    cartInfo: orderType | null
  }

export interface ICartAction {
type: string;
payload: any;
}
  

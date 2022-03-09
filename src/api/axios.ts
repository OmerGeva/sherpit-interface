import axios from 'axios';
import { productType } from '../redux/cart/cartTypes';

const baseURL = 'http://localhost:3001'

export const authenticate = async (email:string, password: string) => {
    const apiUrl = baseURL.concat('/authenticate');

    const response = await axios.post(
        apiUrl,
          {
            email: email.toLowerCase(),
            password: password
          },
          {
            withCredentials: true
          }
        )

    return response;
}

export const getStores = async (token: string) => {
    const apiUrl = baseURL.concat('/stores');

    const response = await axios.get(apiUrl, { headers: { Authorization: `Bearer ${token}` }})

    return response;
}

export const addItemToCartDatabase = async (token: string, orderId: number, product: productType, toAdd: number) => {
    const apiUrl = baseURL.concat(`/orders/${orderId}`);
    const response = await axios.patch(
        apiUrl,
          {
              orderId: orderId,
              product: product,
              toAdd: toAdd
          },
          {
              headers: { Authorization: `Bearer ${token}` }
          })

    return response;
}

export const orderProduct = async (token: string, orderId: number, shipping: string) => {
    const apiUrl = baseURL.concat(`/orders/${orderId}/confirm`);

    const response = await axios.post(
        apiUrl,
          {
              orderId: orderId,
              shipping: shipping
          },
          {
              headers: { Authorization: `Bearer ${token}` }
          })

    return response;
}

export const getOrders = async (token: string) => {
    const apiUrl = baseURL.concat('/orders');

    const response = await axios.get(apiUrl, { headers: { Authorization: `Bearer ${token}` }})
    return response.data;
}

export const acceptOrder = async (token: string, orderId: number, accept: boolean) => {
    const apiUrl = baseURL.concat(`/orders/${orderId}/accept`);
    
    const response = await axios.patch(
        apiUrl,
          {
              accept: accept
          },
          {
              headers: { Authorization: `Bearer ${token}` }
          })

    return response;
}

export const addOrderReciept = async (token: string, orderId: number, confirmationNumber: string, deliveryDate: Date, receiptImage: string | ArrayBuffer | null) => {
    const apiUrl = baseURL.concat(`/orders/${orderId}/mark_as_ordered`);
    const response = await axios.patch(
        apiUrl,
          {
            confirmationNumber: confirmationNumber,
            deliveryDate: deliveryDate,
            receiptImage: receiptImage
          },
          {
              headers: { Authorization: `Bearer ${token}` }
          })

    return response;
}

export const markOrderAsSent = async (token: string, orderId: number, deliveryDate: Date, receiptImage: string | ArrayBuffer | null) => {
    const apiUrl = baseURL.concat(`/orders/${orderId}/mark_as_sent`);
    const response = await axios.patch(
        apiUrl,
          {
            deliveryDate: deliveryDate,
            receiptImage: receiptImage
          },
          {
              headers: { Authorization: `Bearer ${token}` }
          })

    return response;
}
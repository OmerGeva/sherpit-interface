import { userType } from "../user/useTypes"

export type cartItemType = {
    count: number
    product: productType,
    store: storeType
  }
  

export type productType = {
  created_at: string,
  description: string,
  id: number
  link: string,
  price: string,
  product_image: string,
  store_id: number
  title: string,
  updated_at: string
}

export type storeType = {
  brand_image: string,
  created_at: string,
  id: number,
  name: string,
  online: boolean,
  type_of_brand: string,
  updated_at: string,
  website: string | null
}

export type orderType = {
  id: number,
  order_total: string,
  pending?: boolean,
  ordered: boolean,
  complete: boolean,
  arriving_to_middleman: string,
  delivered_to_middleman: boolean,
  ordered_to_middleman: boolean,
  order_confirmation: string
  sent_to_customer: boolean
  arriving_to_customer: string
  sent_receipt_image: string,
  receipt_image: string,
  created_at: string,
  updated_at: string,
  middleman: middlemanType,
  order_products: [cartItemType],
}

export type middlemanType = {
  name: string,
  address: {
    street: string,
    city: string, 
    zip: string,
    state: string
  }
}

export type middlemanOrderType = {
  order: orderType,
  order_products: [cartItemType],
  sent_receipt_image: string,
  receipt_image: string
}
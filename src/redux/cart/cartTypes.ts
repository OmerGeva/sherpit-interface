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
  arriving_to_middleman: null,
  complete: boolean,
  created_at: string,
  customer_id: number,
  delivered_to_middleman: boolean,
  id: number,
  middleman_id: number | null,
  order_total: string,
  ordered: boolean,
  pending: boolean | null,
  ship_until: null,
  shipping_id: null,
  shippings_id: null,
  updated_at: string
}
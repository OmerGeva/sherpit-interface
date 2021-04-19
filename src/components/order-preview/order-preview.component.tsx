import React from 'react';
import { UseArrangeStoresForCart } from '../../effects/use-arrange-stores-for-cart';
import { selectedOrderType } from '../../pages/orders/orders.component';
import MiddlemanShowCard from '../middleman-show-card/middleman-show-card.component';
import { OrderPreviewContainer } from './order-preview.styles';

interface OrderPreviewProps {
    selectedOrder: selectedOrderType
}

const OrderPreview: React.FC <OrderPreviewProps> = ({selectedOrder}) => {
    return (
        <OrderPreviewContainer>
            <div className="order-info-title">
                <h2>Order #{selectedOrder.order.id}</h2>
                <span className={selectedOrder.order.pending ? "pending dot" : "dot confirmed"}></span>
                <p>{selectedOrder.order.pending ? 'Pending' : 'Confirmed'}</p>
            </div>
                {
                    Object.keys(UseArrangeStoresForCart(selectedOrder.order_products)).map((brand: any) =>
                    {
                        const items = UseArrangeStoresForCart(selectedOrder.order_products)[brand][1];
                        return(
                            <div className="order-item-show" key={items[0].store.brand_image}>
                                <div className="order-information">
                                    <img src={items[0].store.brand_image} alt={items[0].store.name}/>
                                    <h3>${selectedOrder.order.order_total}</h3>
                                </div>
                                {
                                    items.map((item:any) => 
                                        <div className="show-item-orders" key={item.product.title}>
                                            <img src={item.product.product_image} alt={item.product.title}/>
                                            <p>
                                                {item.product.title}
                                            </p>
                                            <p>
                                                <strong>
                                                    ${item.product.price} x {item.count}
                                                </strong>
                                            </p>
                                        </div>
                                        )
                                }
                            </div>
                            )
                    }
                    )
                }
                {
                    selectedOrder.middleman ?
                        <MiddlemanShowCard middleman={selectedOrder.middleman}/>
                    : 
                        ''
                }
        </OrderPreviewContainer>
    );
};

export default OrderPreview;
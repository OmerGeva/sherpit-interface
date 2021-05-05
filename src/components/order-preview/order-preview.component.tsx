import React, { useState, useEffect } from 'react';
import { OrderPreviewContainer } from './order-preview.styles';

// Components
import MiddlemanShowCard from '../middleman-show-card/middleman-show-card.component';
import CustomModal from '../custom-modal/custom-modal.component';

// Effects
import { UseArrangeStoresForCart } from '../../effects/use-arrange-stores-for-cart';

// Types
import { selectedOrderType } from '../../pages/orders/orders.component';

// External
import { VscPackage } from 'react-icons/vsc';
import { FaRegPaperPlane } from 'react-icons/fa';
import { BiReceipt } from 'react-icons/bi';
import { IconContext } from "react-icons";


interface OrderPreviewProps {
    selectedOrder: selectedOrderType,
    openBackdrop: React.Dispatch<React.SetStateAction<boolean>>
}


const OrderPreview: React.FC <OrderPreviewProps> = ({selectedOrder, openBackdrop}) => {
    const [doUserAction, setDoUserAction] = useState<boolean>(false);
    const [seeMiddlemanReceipt, setSeeMiddlemanReceipt] = useState<boolean>(false);

    useEffect(() => {

    }, [doUserAction])

    return (
        <OrderPreviewContainer>
            <div className="order-info-title">
                <h2>Order #{selectedOrder.order.id}</h2>
                <span className={selectedOrder.order.pending ? "pending dot" : "dot confirmed"}></span>
                <p>{selectedOrder.order.pending ? 'Pending' : 'Confirmed'}</p>
            </div>

            {
                 selectedOrder.middleman &&
                 <div className='order-actions'>
                    <div className="mark-as-ordered" onClick={() => {openBackdrop(true); setDoUserAction(true);}}>
                        <IconContext.Provider value={{ className: "package-icon" }}>
                            {
                                selectedOrder.receipt_image ?
                                    <BiReceipt />
                                :
                                    <VscPackage />
                            }
                        </IconContext.Provider>
                        <p>
                            {

                                selectedOrder.receipt_image ?
                                    'Order Receipt'
                                : 
                                    'Mark as ordered'
                            }
                        </p>
                    </div>
                    {
                        selectedOrder.sent_receipt_image &&
                        <div className="mark-as-ordered" onClick={() => {openBackdrop(true); setSeeMiddlemanReceipt(true);}}>
                        <IconContext.Provider value={{ className: "package-icon" }}>
                            <FaRegPaperPlane />
                        </IconContext.Provider>
                        <p>
                            Middleman Receipt
                        </p>
                    </div>
                    }
            </div>
            }
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
                    selectedOrder.middleman &&
                        <MiddlemanShowCard middleman={selectedOrder.middleman}/>
                }
               { 
                doUserAction &&
                <CustomModal setCloseModal={setDoUserAction} 
                            orderId={selectedOrder.order.id} 
                            typeOfModal={selectedOrder.receipt_image ? 'VIEW-IMAGE' : 'ORDER-ACTIONS'} 
                            orderConfirmationInfo={{orderId: selectedOrder.order.id, image: selectedOrder.receipt_image, confirmationNumber: selectedOrder.order.order_confirmation}} 
                            openBackdrop={openBackdrop} />
                }
                { 
                seeMiddlemanReceipt &&
                <CustomModal setCloseModal={setSeeMiddlemanReceipt} 
                            orderId={selectedOrder.order.id} 
                            typeOfModal={'VIEW-IMAGE'} 
                            orderConfirmationInfo={{orderId: selectedOrder.order.id, image: selectedOrder.sent_receipt_image, confirmationNumber: selectedOrder.order.order_confirmation}} 
                            openBackdrop={openBackdrop} />
                }

        </OrderPreviewContainer>
    );
};

export default OrderPreview;
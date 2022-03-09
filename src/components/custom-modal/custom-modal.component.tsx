import React, { useRef, useState } from 'react';
import { CustomModalContainer } from './custom-modal.styles';

// Effects
import { UseArrangeStoresForCart } from '../../effects/use-arrange-stores-for-cart';
import { useOnClickOutside } from '../../effects/use-on-click-outside';
import { months, ordinal } from "../../effects/date-utils";

// API
import { addOrderReciept, markOrderAsSent } from "../../api/axios";

// Types
import { middlemanOrderType, orderType } from '../../redux/cart/cartTypes';
import { userType } from '../../redux/user/useTypes';

// External
import DatePicker from 'react-date-picker';

import { useSelector, useDispatch } from "react-redux";
import { setNotfication } from '../../redux/user/user.actions';
// token: string, orderId: number, confirmationNumber: string, deliveryDate: Date, receiptImage: FileReader

interface CustomModalProps {
    typeOfModal: 'MIDDLEMAN-ORDER-INFO' | 'ORDER-ACTIONS' | 'VIEW-IMAGE' | 'MARK-AS-SENT',
    openBackdrop: React.Dispatch<React.SetStateAction<boolean>>,
    setCloseModal: React.Dispatch<React.SetStateAction<boolean>>,
    modalClosed?: boolean,
    selectedOrder?: orderType | null,
    orderId?: number,
    orderConfirmationInfo?: { orderId: number, image: string, confirmationNumber: string}
}

const CustomModal: React.FC <CustomModalProps> = ({typeOfModal, openBackdrop, setCloseModal, modalClosed, selectedOrder, orderId, orderConfirmationInfo}) => {
    const dispatch = useDispatch();
    const ref = useRef<HTMLDivElement>(null);
    const [picture, setPicture] = useState('');
    const [imgData, setImgData] = useState<string | ArrayBuffer | null>(null);
    const currentUser: userType = useSelector((state:any) => state.user.currentUser);
    
    const [orderConfirmationNumber, setOrderConfirmationNumber] = useState<string>('');
    const [orderDeliveryDate, setOrderDeliveryDate] = useState<any>(new Date);
    const handleMarkAsOrdered = async () => {            
        try{
            console.log(selectedOrder);
            
            const response = typeOfModal === 'MARK-AS-SENT' ? 
                                    await markOrderAsSent(currentUser.token, orderId!,orderDeliveryDate, imgData)
                                :
                                    await addOrderReciept(currentUser.token, orderId!, orderConfirmationNumber, orderDeliveryDate, imgData)
            
         await setCloseModal(!modalClosed);
         await openBackdrop(false);
        }catch(error){
          dispatch(
            setNotfication({message: 'BIG ISSUE!', type: 'info'})
            )
        }
    
      }

    const onChangePicture = (e: any) => {
        if (e.target.files[0]) {
          console.log("picture: ", e.target.files);
          setPicture(URL.createObjectURL(e.target.files[0]));
          console.log(picture);
          const reader = new FileReader();
          reader.addEventListener("load", () => {
            setImgData(reader.result);
          });
          reader.readAsDataURL(e.target.files[0]);
        }
      };

    useOnClickOutside(ref, () => {setCloseModal(false); openBackdrop(false)});

    return (
        <CustomModalContainer ref={ref} typeOfModal={typeOfModal}>
            {
                orderConfirmationInfo && orderConfirmationInfo.image ?
                <div className='order-receipt'>   
                     <h2>Order Receipt #{orderConfirmationInfo.orderId}</h2>
                     <p>Order confirmation number: <strong>{orderConfirmationInfo.confirmationNumber}</strong></p>
                    <img src={orderConfirmationInfo.image} alt='image' />
                </div>
                :
                typeOfModal === 'MIDDLEMAN-ORDER-INFO' ?
                    <div className='see-more-info' ref={ref} onClick={() => useOnClickOutside}>
                        <h2>Order Summary</h2>
                        {
                            selectedOrder &&
                            Object.keys(UseArrangeStoresForCart(selectedOrder.order_products)).map((brand: any) =>
                            {
                                const items = UseArrangeStoresForCart(selectedOrder.order_products)[brand][1];
                                const estimatedDate = new Date(selectedOrder.updated_at);
                                return(
                                    <div className="order-item-show" key={items[0].store.brand_image}>
                                        {
                                            selectedOrder.arriving_to_middleman ?
                                            <div>
                                                <h3>
                                                    Arrives - {`${months[new Date(selectedOrder.arriving_to_middleman!).getMonth()]} ${ordinal(new Date(selectedOrder.arriving_to_middleman!).getDate())}` }
                                                </h3>
                                                <h3>
                                                    Deliver By - {`${months[new Date(selectedOrder.arriving_to_middleman!).getMonth()]} ${ordinal(new Date(selectedOrder.arriving_to_middleman!).getDate()+2)}` }
                                                </h3>
                                            </div>
                                            :
                                            <h3>
                                                Estimated arrival - {`${months[estimatedDate.getMonth()]} ${ordinal(estimatedDate.getDate() + 4)}` }
                                            </h3>
                                        }
                                        <div className="order-information">
                                            <img src={items[0].store.brand_image} alt={items[0].store.name}/>
                                            <h3>${selectedOrder.order_total}</h3>
                                        </div>
                                        <div className="items">

                                            <p className='items-title'>Items: </p>
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
                                    </div>
                                    )
                            }
                            )
                        }
                    </div>
                :
                <div className='user-actions'>   
                     <h2>Mark as ordered</h2>
                    <div className="upload-box">
                        {
                            picture ? 
                                <img src={picture} alt=""/>
                            : 
                                <div>
                                    upload receipt here!
                                    <input className="file-upload-input" type='file' onChange={onChangePicture} accept="image/*" />
                                </div>
                        }
                    </div>
                    <div className="order-info">
                        { typeOfModal === 'ORDER-ACTIONS' &&
                            <div className="individual-input">
                                <p className="label-for-input">
                                    Confirmation Number
                                </p>
                                <input type="text" className='order-confirmation-input' value={orderConfirmationNumber} onChange={(event) => setOrderConfirmationNumber(event.target.value)}/>
                            </div>
                        }
                        <div className="individual-input">
                            <p className="label-for-input">
                                Delivery Date
                            </p>
                            <DatePicker
                                onChange={setOrderDeliveryDate}
                                value={orderDeliveryDate}
                                clearIcon={null}
                                />
                        </div>
                    </div>
                    <div className={`mark-as-ordered-button 
                    ${picture && orderConfirmationNumber || (picture && typeOfModal === 'MARK-AS-SENT') ? '' : 'disabled'}`} 
                    onClick={picture && orderConfirmationNumber  || (picture && typeOfModal === 'MARK-AS-SENT') ? handleMarkAsOrdered : () => {}}>
                        <p>
                            {typeOfModal === 'MARK-AS-SENT' ? 
                            'package sent'
                                : 
                            'mark as ordered'
                            }
                        </p>
                    </div>
                </div>
            }
        </CustomModalContainer>
    );
};

export default CustomModal;
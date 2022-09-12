import { Button, Card } from 'react-bootstrap';

import { formatCurrency } from '../../utils/FormatCurrency';
import { useShoppingCart } from '../../context/ShoppingCartContext'

type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
    const quantity: number = getItemQuantity(id);

    return (
        <Card className='h-100' style={{backgroundColor: '#DAD5D2'}}>
            <Card.Img 
                variant='top' 
                src={imgUrl} 
                height='250px' 
                style={{ objectFit: 'cover' }} 
            />
            <Card.Body className='d-flex flex-column'>
                <Card.Title className='d-flex justify-content-between align-items-baseline mb-5'>
                    <span className='fs-3'>{name}</span>
                    <span className='ms-2 text-muted'>{formatCurrency(price)}</span>
                </Card.Title>
                <div className='mt-auto'>
                    {
                        quantity === 0 && 
                        <Button className='w-100 bg-dark' onClick={() => increaseCartQuantity(id)}>
                            + Add To Cart
                        </Button> 
                    }
                    {
                        quantity !== 0 && 
                        <div className='d-flex align-items-center flex-column' style={{ gap: '.5rem' }}>
                            <div className='d-flex align-items-center justify-content-center' style={{ gap: '.5rem' }}>
                                <Button className='bg-dark' onClick={() => decreaseCartQuantity(id)}>-</Button>
                                <div>
                                    <span className='fs-3'> { quantity } </span>
                                    in cart
                                </div>
                                <Button className='bg-dark' onClick={() => increaseCartQuantity(id)}>+</Button>
                            </div>
                            <Button variant='danger' size='sm'  onClick={() => removeFromCart(id)}>
                                Remove
                            </Button>
                        </div>
                    }
                </div>
            </Card.Body>
        </Card>
    )
}

export default StoreItem;
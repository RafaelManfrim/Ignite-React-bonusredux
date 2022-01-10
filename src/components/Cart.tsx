import { useSelector } from "react-redux"
import { IState } from "../store"
import { ICartState } from "../store/modules/cart/types"

export const Cart = () => {
    const { items: cartItems } = useSelector<IState, ICartState>(state => state.cart)

    function format(number: number) {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: "BRL" }).format(number)
    }

    return (
        <table style={{ border: "1px solid red", marginTop: "16px" }}>
            <thead>
                <tr>
                    <th>Produto</th>
                    <th>Preço</th>
                    <th>Quantidade</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <tbody >
                {cartItems.map(item => (
                    <tr key={item.product.id}>
                        <td style={{ textAlign: 'center' }}>{item.product.title}</td>
                        <td style={{ textAlign: 'right' }}>{format(item.product.price)}</td>
                        <td style={{ textAlign: 'center' }}>{item.quantity}</td>
                        <td style={{ textAlign: 'right' }}>{format(item.product.price * item.quantity)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
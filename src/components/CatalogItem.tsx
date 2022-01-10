import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { IState } from "../store"
import { addProductToCartRequest } from "../store/modules/cart/actions"
import { IProduct } from "../store/modules/cart/types"

interface CatalogItemProps {
    product: IProduct
}

export function CatalogItem({ product }: CatalogItemProps) {
    const dispatch = useDispatch()

    const hasFailedStockCheck = useSelector<IState, boolean>(state => {
        return state.cart.failedStockCheck.includes(product.id)
    })

    const handleAddProductToCart = useCallback(() => {
        dispatch(addProductToCartRequest(product))
    }, [dispatch, product])

    return (
        <article key={product.id}>
            <strong>{product.title}</strong>
            <span> - </span>
            <span>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: "BRL" }).format(product.price)}</span>
            <button onClick={handleAddProductToCart} disabled={hasFailedStockCheck}>Comprar</button>

            {hasFailedStockCheck && <span style={{color: "red"}}>Falta de estoque</span>}
        </article>
    )
}
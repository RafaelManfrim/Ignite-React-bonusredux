import { useEffect, useState } from "react"
import { api } from "../services/api"
import { IProduct } from "../store/modules/cart/types"
import { CatalogItem } from "./CatalogItem"

export const Catalog: React.FC = () => {
    const [catalog, setCatalog] = useState<IProduct[]>([])

    useEffect(() => {
        api.get(`products`).then(resp => {
            setCatalog(resp.data)
        })
    }, [])

    return (
        <div>
            <h1>Catalog</h1>
            {catalog.map(prod => (
                <CatalogItem key={prod.id} product={prod} />
            ))}
        </div>
    )
}
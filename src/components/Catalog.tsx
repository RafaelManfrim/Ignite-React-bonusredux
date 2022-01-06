import { useSelector } from "react-redux"

export const Catalog: React.FC = () => {
    const catalog = useSelector(state => state)

    return (
        <div>
            <h1>Catalog</h1>
        </div>
    )
}
export default function Item({name, quantity, category}) {
    return(
        <li>
            <h2>{name}</h2>
            <p>Quantity: {quantity}</p>
            <p>Category: {category}</p>
        </li>
    );
}
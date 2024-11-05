export default function Item({name, quantity, category, onSelect}) {
    return(
        <div onClick={() => onSelect(name)}>
            <h2 className="font-bold text-2xl pb-4">{name}</h2>
            <p>Quantity: {quantity}</p>
            <p>Category: {category}</p>
        </div>

    );
}
export default function Item({name, quantity, category}) {
    return(
        <li class="bg-neutral-800 m-2 px-3 py-2 rounded max-w-md border-2 border-neutral-500">
            <h2 class="font-bold text-2xl pb-4">{name}</h2>
            <p>Quantity: {quantity}</p>
            <p>Category: {category}</p>
        </li>
    );
}
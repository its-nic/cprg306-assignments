import ItemList from "./item-list";

export default function Page() {
    return(
        <main class="bg-neutral-900 text-white">
            <h1 class="text-4xl font-bold py-4 px-2">Shopping List</h1>
            <ItemList />
        </main>
    );
}
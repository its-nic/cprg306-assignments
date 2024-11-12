"use client"

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function LoginPage() {

    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    async function handleSignIn(params) {
        try {
            await gitHubSignIn();
        }
        catch (error) {
            console.log(error);
        }
    }

    async function handleSignOut() {
        try {
            await firebaseSignOut();
        }
        catch (error) {
            console.log(error);
        }
    }

    let buttonStyle = "bg-blue-800 rounded py-1 m-3 hover:bg-blue-500 active:bg-blue-400 disabled:bg-neutral-600 w-32";

    return(
        <main className="bg-neutral-900 text-white h-screen">
            <header>
                <h1 className="text-4xl font-bold py-4 px-2">Shopping List</h1>
            </header>
            {user ? (
                <div>
                    <section className="flex px-4 py-3">
                        <img className="w-6 h-6" src={user.photoURL}/>
                        <p className="px-4">Welcome {user.displayName}</p>
                    </section>
                    <button className={buttonStyle}><Link href="/week-9/shopping-list/">Shopping List</Link></button>
                    <button className={buttonStyle} onClick={handleSignOut}>Sign Out</button>
                </div>
            ):(
                <div>
                    <p className="px-2 py-3">Sign in to view your shopping list</p>
                    <button className={buttonStyle} onClick={handleSignIn}>Sign In</button>
                </div>
            )}
        </main>
    );
}
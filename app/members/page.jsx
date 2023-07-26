import Link from "next/link"

export default function Members(){

    return(
        <>
        <ul className="flex flex-col gap-2">
            <li>
                <Link className="border-2 border-black rounded-md " 
                href="/member1">
                Member 1 || Logo
                </Link>
            </li>
            <li>
                <Link className="border-2 border-black rounded-md" 
                href="/member2">
                Member 2 || Logo
                </Link>
            </li>
            <li>
                <Link className="border-2 border-black rounded-md" 
                href="/member3">
                Member 3 || Logo
                </Link>
            </li>
        </ul>

        </>
    )
}
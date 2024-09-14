import Link from "next/link"
import { useRouter } from "next/router"

export default function Menu() {
    const router = useRouter()

    return (
        <>

            <ul className="sub-menu">
                <Link className={router.pathname == "/zigzagcarousel" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/zigzagcarousel" ? "active" : ""}>Home Interior</Link>
            </ul>
        </>
    )
}

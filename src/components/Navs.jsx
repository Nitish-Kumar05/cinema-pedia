import { Link } from "react-router-dom"

const LINKS = [
    {
        text: 'Home',
        to: '/',
    },
    {
        text: 'starred',
        to: '/starred',
    }
]

const Navs = () => {
    return (
        <>
            <ul>
                {LINKS.map((item) =>
                    <li key={item.to} >
                        <Link to={item.to} >
                            {item.text}
                        </Link>
                    </li>
                )}
            </ul>
        </>
    )
}

export default Navs
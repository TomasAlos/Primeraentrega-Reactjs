import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return (
        <nav> 
            <h3 class="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3"> Kwik-Electro-Mart </h3>
                <div> 
                    <button class="btn btn-primary"> Mousepads </button>
                    <button class="btn btn-primary"> Teclados </button>
                    <button class="btn btn-primary"> Microfonos </button>
                </div> 
            <CartWidget/>
        </nav>
    )
}
export default NavBar
import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return (
        <nav> 
            <h3 class="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3"> Sarmiento </h3>
                <div> 
                    <button class="btn btn-primary"> Auriculares </button>
                    <button class="btn btn-primary"> Parlantes </button>
                    <button class="btn btn-primary"> Cargadores </button>
                </div> 
            <CartWidget/>
        </nav>
    )
}
export default NavBar
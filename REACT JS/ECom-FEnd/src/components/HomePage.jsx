import {Link} from "react-router-dom";


const HomePage=() => {
return(
    <div className="min-h-screen bg-blue-100">
        <nav>
            <div>
                <img src="https://www.freeiconspng.com/thumbs/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"alt="logo"/>
                <h1>
                    Product management system
                </h1>

            </div>
            <div>
                <Link>
                <Link to="/signin">SignIn</Link>
                <Link to="/signup">SignUp</Link>
                <Link to="/about">About</Link>

                </Link>

            </div>
        </nav>
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit pariatur, commodi exercitationem, ratione quidem nesciunt illum necessitatibus aperiam similique vitae cum dolor. Ea dignissimos omnis culpa. Accusantium reprehenderit, nesciunt tempore molestias repellendus necessitatibus ab delectus eos fuga quibusdam fugiat similique maxime pariatur consequatur sint sapiente dolore optio ullam nobis. Error, dicta labore corrupti accusantium, alias nobis corporis ipsam voluptatem fuga, accusamus totam nihil nam quae. Nemo, doloribus maxime. Illum quia quisquam, adipisci repellat aperiam hic sit voluptates deserunt, cupiditate natus, quod ex pariatur ut error. Earum exercitationem quidem et aliquam molestiae inventore deleniti illum perferendis praesentium, minus unde iusto! Adipisci, eligendi enim quia quis perspiciatis aliquid possimus animi commodi dolore architecto repellendus nostrum, quod corporis modi consequuntur cumque ut. Magni labore nihil cumque possimus architecto. In itaque corporis reiciendis doloribus nulla maiores. Quidem sit aperiam aut minima commodi dolores quam repellat dolore sunt, asperiores corporis in sequi, voluptate earum nobis nemo ratione, exercitationem debitis voluptas? Nesciunt, vitae corporis odio saepe quas deserunt, iste alias nemo id reprehenderit soluta quam voluptatibus voluptatum, voluptatem placeat ducimus et sint minus excepturi aperiam temporibus sed dicta. Maxime esse praesentium labore nam aspernatur, officia explicabo architecto eum iste provident corporis, quasi distinctio recusandae!
            </div>

        </div>
)
}
export default HomePage;//arrow function format
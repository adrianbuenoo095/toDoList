export function Main(props) {
    return (
        <section>
            <img
                height={400}
                src="./img/pexels_mexican_food.jpeg"
                alt="A good plate of mexican food"
            />
            <ul>
                {props.dishes.map((dish) => (
                    <li key={dish.id}> {dish.title}</li>
                ))}
            </ul>
        </section>
    );
}
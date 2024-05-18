
export const PostobonList = ({ data }) => {

    const { name, image, price, description } = data;

    return(
        <>
            <div className="card">
                <div className="card-content">
                    <img src="img/product1.png" alt="Shoes" />
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <div className="price">${price}</div>
                    <div className="stars">
                        <span>★★★★☆</span>
                    </div>
                </div>
                <a href="#" className="btn">Buy Now</a>
            </div>
        </>
    );
}
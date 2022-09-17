import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Dummy_data = [
  {
    id: "p1",
    price: 60,
    title: "Grocery",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,",
  },{

    id: "p2",
    price: 90,
    title: "Electronics",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,",
  },
  {

    id: "p3",
    price: 50,
    title: "Mobile Phones",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,",
  }
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy_data.map(product=>  <ProductItem
          key= {product.id}
          id={ product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />)}
       
      </ul>
    </section>
  );
};

export default Products;

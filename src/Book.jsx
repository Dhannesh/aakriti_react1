// const Image = () => <h2>Image Placeholder</h2>;
// const Title = () => <h1>Let us C</h1>;
// const Author = () => <h3>kcuh v</h3>;
// const Price = () => <h4>Rs. free</h4>;

const Book = (props) => {
  //   console.log(props);
  const { title, author, price } = props;
  return (
    <article>
      <h1>{title}</h1>
      <h2>{author}</h2>
      <h3>Rs. {price}</h3>
    </article>
  );
};
export default Book;

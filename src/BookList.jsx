import Book from "./Book";

const BookList = () => {
  const book1 = {
    title: "Let Us C++",
    price: 433,
    author: "Yashwant Kanitkar",
  };
  const book2 = {
    title: "Let Us Java",
    price: 493,
    author: "Romesh Sharma",
  };

  return (
    <section>
      {/* <Book bookName={book1.title} writer={book1.author} price={book1.price} /> */}
      <Book {...book1} /> 
      <Book {...book2} />
      {/* <Book title={book1.title} author={book1.author} price={book1.price}/> */}
      {/* <Book bookName={title2} writer="Raghunandan" price="435" /> */}
      {/* <Book />
      <Book />
      <Book />
      <Book /> */}
    </section>
  );
};
export default BookList;

import Book from "./Book";
import { books } from "./data";

const BookList = () => {
  return (
    <section>
      {books.map((item) => (
        <Book {...item} />
      ))}
    </section>
  );
};
export default BookList;

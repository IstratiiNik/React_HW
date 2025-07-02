import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomQuote } from "../features/quote/quoteSlice";

// Quote component displays a random quote and allows fetching a new one
const Quote = () => {
  const dispatch = useDispatch();
  // Select quote state from Redux store
  const { quote, author, status, error } = useSelector((state) => state.quote);

  // Fetch a quote on component mount
  useEffect(() => {
    dispatch(fetchRandomQuote());
  }, [dispatch]);

  // Handler for fetching a new quote
  const takeNewQuote = () => {
    dispatch(fetchRandomQuote());
  };

  return (
    <div>
      {/* Show loading state */}
      {status === "loading" && <p>Loading...</p>}
      {/* Show quote and author when succeeded */}
      {status === "succeeded" && (
        <div>
          <p>"{quote}"</p>
          <p>- {author}</p>
        </div>
      )}
      {/* Show error message if failed */}
      {status === "failed" && <p>{error}</p>}
      {/* Button to fetch a new quote */}
      <button onClick={takeNewQuote}>Quote</button>
    </div>
  );
};

export default Quote;

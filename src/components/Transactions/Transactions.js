import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../../features/transactionSlice";
import Transaction from "./Transaction";

export default function Transactions() {
  const dispatch = useDispatch();
  const { transactions, isLoading, isError, error } = useSelector(
    (state) => state.transaction
  );

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  let content;
  if (isLoading) content = <p>Loading..</p>;
  if (!isLoading && isError)
    content = <p className="error">There was an error.</p>;
  if (!isLoading && !isError && transactions?.length > 0)
    content = transactions.map((t) => (
      <Transaction key={t.id} transaction={t} />
    ));
  if (!isLoading && !isError && transactions?.length === 0)
    content = <p>No Transactions found.</p>;
  return (
    <>
      <p className="second_heading">Your Transactions:</p>

      <div className="conatiner_of_list_of_transactions">
        <ul>{content}</ul>
      </div>
    </>
  );
}

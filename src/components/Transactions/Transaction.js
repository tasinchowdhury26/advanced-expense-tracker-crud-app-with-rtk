import { useDispatch } from "react-redux";
import deleteImage from "../../assets/images/delete.svg";
import editImage from "../../assets/images/edit.svg";
import { editActive, removeTransaction } from "../../features/transactionSlice";
import numberWithCommas from "../../utils/numberWithCommas";

export default function Transaction({ transaction }) {
  const dispatch = useDispatch();
  const { name, type, amount, id } = transaction || {};

  const handleEdit = () => {
    dispatch(editActive(transaction));
  };
  const handleDelete = () => {
    dispatch(removeTransaction(id));
  };

  return (
    <li className={`transaction ${type}`}>
      <p>{name}</p>
      <div className="right">
        <p>৳ {numberWithCommas(amount)}</p>
        <button className="link" onClick={handleEdit}>
          <img alt="Edit" className="icon" src={editImage} />
        </button>
        <button className="link" onClick={handleDelete}>
          <img alt="Delete" className="icon" src={deleteImage} />
        </button>
      </div>
    </li>
  );
}

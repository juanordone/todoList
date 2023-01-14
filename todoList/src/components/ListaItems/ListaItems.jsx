export default function ListItems({ item, setState, tachar, index }) {
  return (
    <>
      <li
        onClick={() => tachar(index)}
        className={`list-group-item d-flex justify-content-between ${
          item.completed && "list-group-item-dark text-decoration-line-through"
        } `}
      >
        {item.title}
        <button
          onClick={(e) => setState(e, item.id)}
          className="btn btn-danger"
        >
          {" "}
          X
        </button>
      </li>
    </>
  );
}

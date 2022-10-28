export const SelectedElement = ({ onClick, name, id }) => {
  return (
    <div className="selected">
      <p className="selected_name">{name}</p>{" "}
      <button
        className="selected_delete"
        type="button"
        onClick={() => onClick(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default SelectedElement;

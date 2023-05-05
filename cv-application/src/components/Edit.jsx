export const Edit = ({ title, edit, editSection }) => {
  return (
    <div className="btn-row">
      <h4 className="section--title">{title}</h4>
      {edit.isHovering && (
        <button className="edit--btn" onClick={editSection}>
          Edit
        </button>
      )}
    </div>
  );
};

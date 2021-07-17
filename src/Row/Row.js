import "./Row.css"
export const Row = ({ children }) => {
  return (
    <div className="row">
      <div className="innerRow">{children}</div>
    </div>
  );
};

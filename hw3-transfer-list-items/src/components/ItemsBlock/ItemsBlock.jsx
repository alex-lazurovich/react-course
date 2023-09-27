/* eslint-disable react/prop-types */
import "./ItemsBlock.styles.scss";

export default function ItemsBlock({ items, children }) {
  return (
    <div className="block--container">
      <ul>
        {items ? items.map(({ id, title }) => <li key={id}>{title}</li>) : null}
      </ul>
      {children}
    </div>
  );
}

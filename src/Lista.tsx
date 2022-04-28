type Props = {
  lista: Array<string>,
  deleteItem: Function,
};

// stateless component
export default function(props: Props) {
  const { lista, deleteItem } = props;

  return (
    <ul>
      {
        lista
          .map((item) => (
            <li key={item}>
              {item}
              <button
                onClick={() => deleteItem(item)}
              >
                delete
              </button>
            </li>
          ))
      }
    </ul>
  );
}
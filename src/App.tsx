import React, { useEffect, useState } from 'react';
import Lista from './Lista';
import './App.css';

// statefull component
function App() {
  const [listaDeItems, setListaDeItems] = useState<Array<string>>([]);
  const [item, setItem] = useState('');

  // const listComStringItem = listaDeItems.filter(i => i.includes('item'));

  useEffect(() => {
    console.log('Algum mudou');
  }, [listaDeItems]);

  const colocarNaListaDeItems = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const novaListaDeItems = [...listaDeItems, item];

    // setListaDeItems(novaListaDeItems);
    setListaDeItems((listaVelhaDeItems) => {
      const novaListaDeItems = [...listaVelhaDeItems, item];

      return novaListaDeItems;
    });
  }

  // const texto = <p>Você ainda não adicionou items</p>;
  // const lis = listaDeItems.map((item) => <li key={item}>{item}</li>);
  // const temPeloMenosUmItem = Boolean(listaDeItems.length);
  // const listaOuTexto = (temPeloMenosUmItem && lis) || texto;

  const deleteItem = (itm: string) => {
    setListaDeItems((listaVelhaDeItems) => {
      const novaListaDeItems = listaVelhaDeItems
        .filter(i => i !== itm);

      return novaListaDeItems;
    });
  }

  return (
    <div>
      <form onSubmit={colocarNaListaDeItems}>
        <label htmlFor="item">Digite um item</label>
        <input
          id="item"
          type="text"
          value={item}
          onChange={(event) => setItem(event.target.value)}
        />
        <button type="submit">
          Adicionar
        </button>
      </form>
      <Lista
        lista={listaDeItems}
        deleteItem={deleteItem}
      />
      {/* <h6>Lista com 'item'</h6>
      {
        listaDeItems
          .filter(i => i.includes('item'))
          .map((item) => <li key={item}>{item}</li>)
      } */}
      {/* <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Categoria</th>
          </tr>
        </thead>
        <tbody>
          {
            [
              { id: 123, nome: 'Feijão', categoria: 'comida' },
              { id: 345, nome: 'Arroz', categoria: 'comida' },
            ].map(produto => (
              <tr>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.categoria}</td>
              </tr>
            ))
          }
        </tbody>
      </table> */}
    </div>
  );
}

export default App;

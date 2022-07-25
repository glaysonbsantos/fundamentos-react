import React from "react";
import products from "../../data/products";
import "./ProductsTable.css";

export default (props) => {
  const productsList = products.map((product) => {
    return (
      <tr key={product.id}>
        <td>{product.id}</td>
        <td>{product.nome}</td>
        <td>{product.preco}</td>
      </tr>
    );
  });
  return (
    <div id="table">
      <thead>
        <tr>
          <th>Código</th>
          <th>Nome</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>{productsList}</tbody>
    </div>
  );
};

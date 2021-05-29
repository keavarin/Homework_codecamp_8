function ProductItem(props) {
  return (
    <div>
      <h4>Title: {props.title}</h4>
      <h4>Description: {props.description}</h4>
      <h4>Price: {props.price}</h4>
    </div>
  );
}

export default ProductItem;

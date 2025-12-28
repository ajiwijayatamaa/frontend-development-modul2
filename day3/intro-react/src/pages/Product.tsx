import Card from "../components/Card";

const Product = () => {
  const productList = [
    { name: "Baju", price: 100_000 },
    { name: "Celana", price: 150_000 },
    { name: "Kutang", price: 50_000 },
    { name: "CD", price: 500_000 },
  ];
  return (
    <div>
      <h1>Halaman Product</h1>
      {/* <Card name={productList[0].name} price={productList[0].price} />
      <Card name={productList[1].name} price={productList[1].price} />
      <Card name={productList[2].name} price={productList[2].price} />
      <Card name={productList[3].name} price={productList[3].price} /> */}
      {productList.map((product, index) => {
        return <Card key={index} name={product.name} price={product.price} />;
      })}
    </div>
  );
};

export default Product;

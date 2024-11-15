import ProductCard from "../productCard";

const FeaturedProduct = () => {
  return (
    <div className="lg:flex items-center justify-between gap-3">
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
    </div>
  );
};

export default FeaturedProduct;
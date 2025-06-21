import HeadSection from "./components/HeadSection/HeadSection";
import ProductHeader from "./components/ProductHeader/ProductHeader";
import ProductList from "./components/ProductList/ProductList";

export default function Home() {
  return (
    <>
      <HeadSection />
      <ProductHeader totalItems={34}/>
      <ProductList/>
    </>
  );
}

import HeadSection from "./components/HeadSection/HeadSection";
import ProductHeader from "./components/ProductHeader/ProductHeader";

export default function Home() {
  return (
    <>
      <HeadSection />
      <ProductHeader totalItems={34}/>
    </>
  );
}

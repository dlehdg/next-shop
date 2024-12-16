import Header from "@/layouts/header/Header";
import Image from "next/image";
import Link from "next/link";
import Slider from "./../../components/slider/Slider";
import Product from "@/components/product/Product";

export default function Home() {
  return (
    <>
      <Slider />
      <Product />
    </>
  );
}

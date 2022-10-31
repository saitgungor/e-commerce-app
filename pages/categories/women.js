import { Fragment } from 'react';
import BreadCrumb from '../../components/BreadCrumb';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import NotificationBar from '../../components/NotificationBar';
import ProductList from '../../components/products/ProductList';

export default function women() {
  const products = [
    {
      id: 1,
      name: 'Kadın Deneme Ürün',
      price: 50,
    },
    {
      id: 2,
      name: 'Kadın Deneme Ürün',
      price: 200,
    },
    {
      id: 3,
      name: 'Kadın Deneme Ürün',
      price: 150,
    },
    {
      id: 4,
      name: 'Kadın Deneme Ürün',
      price: 220,
    },
    {
      id: 5,
      name: 'Kadın Deneme Ürün',
      price: 180,
    },
    {
      id: 6,
      name: 'Kadın Deneme Ürün',
      price: 70,
    },
    {
      id: 7,
      name: 'Kadın Deneme Ürün',
      price: 175,
    },
    {
      id: 8,
      name: 'Kadın Deneme Ürün',
      price: 60,
    },
    {
      id: 1,
      name: 'Kadın Deneme Ürün',
      price: 450,
    },
    {
      id: 9,
      name: 'Kadın Deneme Ürün',
      price: 35,
    },
    {
      id: 10,
      name: 'Kadın Deneme Ürün',
      price: 45,
    },
    {
      id: 11,
      name: 'Kadın Deneme Ürün',
      price: 99,
    },
    {
      id: 12,
      name: 'Kadın Deneme Ürün',
      price: 215,
    },
  ];
  return (
    <Fragment>
      <NotificationBar />
      <Header isHomePage={false} />
      <BreadCrumb name="Kadın" />
      <ProductList products={products} />
      <Footer />
    </Fragment>
  );
}

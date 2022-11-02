import { Fragment } from 'react';
import BreadCrumb from '../../components/BreadCrumb';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import NotificationBar from '../../components/NotificationBar';
import ProductList from '../../components/products/ProductList';

export default function WomenPage() {
  const products = [
    {
      id: 1,
      name: 'Kadın Triko',
      colors: [
        {
          name: 'Kahve Rengi',
          hex: '#8f5732',
          imgURL: '/products/women/product-1/camel.jpg',
          altText: 'Kadın Yün Triko Kahve Rengi',
        },
        {
          name: 'Lacivert',
          hex: '#313445',
          imgURL: '/products/women/product-1/navy.jpg',
          altText: 'Kadın Yün Triko Lacivert',
        },
        {
          name: 'Gül Kurusu',
          hex: '#bc8c80',
          imgURL: '/products/women/product-1/dusty-rose.jpg',
          altText: 'Kadın Yün Triko Gül Kurusu',
        },
        {
          name: 'Zeytin Yağı',
          hex: '#605f28',
          imgURL: '/products/women/product-1/olive.jpg',
          altText: 'Kadın Yün Triko Zeytin Yağı',
        },
        {
          name: 'Kömür Grisi',
          hex: '#4b494d',
          imgURL: '/products/women/product-1/charcoal-melange.jpg',
          altText: 'Kadın Yün Triko Kömür Grisi',
        },
      ],
      price: 50,
    },
    {
      id: 2,
      name: 'Kadın Triko',
      colors: [
        {
          name: 'Lacivert',
          hex: '#313445',
          imgURL: '/products/women/product-1/navy.jpg',
          altText: 'Kadın Yün Triko Lacivert',
        },
        {
          name: 'Kahve Rengi',
          hex: '#8f5732',
          imgURL: '/products/women/product-1/camel.jpg',
          altText: 'Kadın Yün Triko Kahve Rengi',
        },
        {
          name: 'Gül Kurusu',
          hex: '#bc8c80',
          imgURL: '/products/women/product-1/dusty-rose.jpg',
          altText: 'Kadın Yün Triko Gül Kurusu',
        },
        {
          name: 'Zeytin Yağı',
          hex: '#605f28',
          imgURL: '/products/women/product-1/olive.jpg',
          altText: 'Kadın Yün Triko Zeytin Yağı',
        },
        {
          name: 'Kömür Grisi',
          hex: '#4b494d',
          imgURL: '/products/women/product-1/charcoal-melange.jpg',
          altText: 'Kadın Yün Triko Kömür Grisi',
        },
      ],
      price: 200,
    },
    {
      id: 3,
      name: 'Kadın Triko',
      colors: [
        {
          name: 'Gül Kurusu',
          hex: '#bc8c80',
          imgURL: '/products/women/product-1/dusty-rose.jpg',
          altText: 'Kadın Yün Triko Gül Kurusu',
        },
        {
          name: 'Kahve Rengi',
          hex: '#8f5732',
          imgURL: '/products/women/product-1/camel.jpg',
          altText: 'Kadın Yün Triko Kahve Rengi',
        },
        {
          name: 'Lacivert',
          hex: '#313445',
          imgURL: '/products/women/product-1/navy.jpg',
          altText: 'Kadın Yün Triko Lacivert',
        },
        {
          name: 'Zeytin Yağı',
          hex: '#605f28',
          imgURL: '/products/women/product-1/olive.jpg',
          altText: 'Kadın Yün Triko Zeytin Yağı',
        },
        {
          name: 'Kömür Grisi',
          hex: '#4b494d',
          imgURL: '/products/women/product-1/charcoal-melange.jpg',
          altText: 'Kadın Yün Triko Kömür Grisi',
        },
      ],
      price: 150,
    },
    {
      id: 4,
      name: 'Kadın Triko',
      colors: [
        {
          name: 'Zeytin Yağı',
          hex: '#605f28',
          imgURL: '/products/women/product-1/olive.jpg',
          altText: 'Kadın Yün Triko Zeytin Yağı',
        },
        {
          name: 'Kahve Rengi',
          hex: '#8f5732',
          imgURL: '/products/women/product-1/camel.jpg',
          altText: 'Kadın Yün Triko Kahve Rengi',
        },
        {
          name: 'Lacivert',
          hex: '#313445',
          imgURL: '/products/women/product-1/navy.jpg',
          altText: 'Kadın Yün Triko Lacivert',
        },
        {
          name: 'Gül Kurusu',
          hex: '#bc8c80',
          imgURL: '/products/women/product-1/dusty-rose.jpg',
          altText: 'Kadın Yün Triko Gül Kurusu',
        },
        {
          name: 'Kömür Grisi',
          hex: '#4b494d',
          imgURL: '/products/women/product-1/charcoal-melange.jpg',
          altText: 'Kadın Yün Triko Kömür Grisi',
        },
      ],
      price: 220,
    },
    {
      id: 5,
      name: 'Kadın Triko',
      colors: [
        {
          name: 'Kömür Grisi',
          hex: '#4b494d',
          imgURL: '/products/women/product-1/charcoal-melange.jpg',
          altText: 'Kadın Yün Triko Kömür Grisi',
        },
        {
          name: 'Kahve Rengi',
          hex: '#8f5732',
          imgURL: '/products/women/product-1/camel.jpg',
          altText: 'Kadın Yün Triko Kahve Rengi',
        },
        {
          name: 'Lacivert',
          hex: '#313445',
          imgURL: '/products/women/product-1/navy.jpg',
          altText: 'Kadın Yün Triko Lacivert',
        },
        {
          name: 'Gül Kurusu',
          hex: '#bc8c80',
          imgURL: '/products/women/product-1/dusty-rose.jpg',
          altText: 'Kadın Yün Triko Gül Kurusu',
        },
        {
          name: 'Zeytin Yağı',
          hex: '#605f28',
          imgURL: '/products/women/product-1/olive.jpg',
          altText: 'Kadın Yün Triko Zeytin Yağı',
        },
      ],
      price: 180,
    },
    {
      id: 6,
      name: 'Kadın Tişört',
      colors: [
        {
          name: 'Gül Kurusu',
          hex: '#bc8c80',
          imgURL: '/products/women/product-2/dusty-rose.jpg',
          altText: 'Kadın Tişört Gül Kurusu',
        },
        {
          name: 'Ahşap',
          hex: '#704d31',
          imgURL: '/products/women/product-2/wood.jpg',
          altText: 'Kadın Tişört Ahşap',
        },
        {
          name: 'Beyaz',
          hex: '#ffffff',
          imgURL: '/products/women/product-2/white.jpg',
          altText: 'Kadın Tişört Beyaz',
        },
        {
          name: 'Siyah',
          hex: '#000000',
          imgURL: '/products/women/product-2/black.jpg',
          altText: 'Kadın Tişört Siyah',
        },
        {
          name: 'Lacivert',
          hex: '#313445',
          imgURL: '/products/women/product-2/navy.jpg',
          altText: 'Kadın Tişört Lacivert',
        },
        {
          name: 'Tuğla',
          hex: '#a27468',
          imgURL: '/products/women/product-2/brick.jpg',
          altText: 'Kadın Tişört Tuğla',
        },
        {
          name: 'Koyu Sarı',
          hex: '#c47d2d',
          imgURL: '/products/women/product-2/ocher.jpg',
          altText: 'Kadın Tişört Koyu Sarı',
        },
        {
          name: 'Açık Pembe',
          hex: '#e6c9b7',
          imgURL: '/products/women/product-2/soft-pink.jpg',
          altText: 'Kadın Tişört Açık Pembe',
        },
        {
          name: 'Melanj Gri',
          hex: '#919298',
          imgURL: '/products/women/product-2/grey-melange.jpg',
          altText: 'Kadın Tişört Melanj Gri',
        },
      ],
      price: 70,
    },
    {
      id: 7,
      name: 'Kadın Tişört',
      colors: [
        {
          name: 'Ahşap',
          hex: '#704d31',
          imgURL: '/products/women/product-2/wood.jpg',
          altText: 'Kadın Tişört Ahşap',
        },
        {
          name: 'Gül Kurusu',
          hex: '#bc8c80',
          imgURL: '/products/women/product-2/dusty-rose.jpg',
          altText: 'Kadın Tişört Gül Kurusu',
        },
        {
          name: 'Beyaz',
          hex: '#ffffff',
          imgURL: '/products/women/product-2/white.jpg',
          altText: 'Kadın Tişört Beyaz',
        },
        {
          name: 'Siyah',
          hex: '#000000',
          imgURL: '/products/women/product-2/black.jpg',
          altText: 'Kadın Tişört Siyah',
        },
        {
          name: 'Lacivert',
          hex: '#313445',
          imgURL: '/products/women/product-2/navy.jpg',
          altText: 'Kadın Tişört Lacivert',
        },
        {
          name: 'Tuğla',
          hex: '#a27468',
          imgURL: '/products/women/product-2/brick.jpg',
          altText: 'Kadın Tişört Tuğla',
        },
        {
          name: 'Koyu Sarı',
          hex: '#c47d2d',
          imgURL: '/products/women/product-2/ocher.jpg',
          altText: 'Kadın Tişört Koyu Sarı',
        },
        {
          name: 'Açık Pembe',
          hex: '#e6c9b7',
          imgURL: '/products/women/product-2/soft-pink.jpg',
          altText: 'Kadın Tişört Açık Pembe',
        },
        {
          name: 'Melanj Gri',
          hex: '#919298',
          imgURL: '/products/women/product-2/grey-melange.jpg',
          altText: 'Kadın Tişört Melanj Gri',
        },
      ],
      price: 70,
    },
    {
      id: 8,
      name: 'Kadın Tişört',
      colors: [
        {
          name: 'Beyaz',
          hex: '#ffffff',
          imgURL: '/products/women/product-2/white.jpg',
          altText: 'Kadın Tişört Beyaz',
        },
        {
          name: 'Gül Kurusu',
          hex: '#bc8c80',
          imgURL: '/products/women/product-2/dusty-rose.jpg',
          altText: 'Kadın Tişört Gül Kurusu',
        },
        {
          name: 'Ahşap',
          hex: '#704d31',
          imgURL: '/products/women/product-2/wood.jpg',
          altText: 'Kadın Tişört Ahşap',
        },
        {
          name: 'Siyah',
          hex: '#000000',
          imgURL: '/products/women/product-2/black.jpg',
          altText: 'Kadın Tişört Siyah',
        },
        {
          name: 'Lacivert',
          hex: '#313445',
          imgURL: '/products/women/product-2/navy.jpg',
          altText: 'Kadın Tişört Lacivert',
        },
        {
          name: 'Tuğla',
          hex: '#a27468',
          imgURL: '/products/women/product-2/brick.jpg',
          altText: 'Kadın Tişört Tuğla',
        },
        {
          name: 'Koyu Sarı',
          hex: '#c47d2d',
          imgURL: '/products/women/product-2/ocher.jpg',
          altText: 'Kadın Tişört Koyu Sarı',
        },
        {
          name: 'Açık Pembe',
          hex: '#e6c9b7',
          imgURL: '/products/women/product-2/soft-pink.jpg',
          altText: 'Kadın Tişört Açık Pembe',
        },
        {
          name: 'Melanj Gri',
          hex: '#919298',
          imgURL: '/products/women/product-2/grey-melange.jpg',
          altText: 'Kadın Tişört Melanj Gri',
        },
      ],
      price: 70,
    },
    {
      id: 9,
      name: 'Kadın Tişört',
      colors: [
        {
          name: 'Siyah',
          hex: '#000000',
          imgURL: '/products/women/product-2/black.jpg',
          altText: 'Kadın Tişört Siyah',
        },
        {
          name: 'Gül Kurusu',
          hex: '#bc8c80',
          imgURL: '/products/women/product-2/dusty-rose.jpg',
          altText: 'Kadın Tişört Gül Kurusu',
        },
        {
          name: 'Ahşap',
          hex: '#704d31',
          imgURL: '/products/women/product-2/wood.jpg',
          altText: 'Kadın Tişört Ahşap',
        },
        {
          name: 'Beyaz',
          hex: '#ffffff',
          imgURL: '/products/women/product-2/white.jpg',
          altText: 'Kadın Tişört Beyaz',
        },
        {
          name: 'Lacivert',
          hex: '#313445',
          imgURL: '/products/women/product-2/navy.jpg',
          altText: 'Kadın Tişört Lacivert',
        },
        {
          name: 'Tuğla',
          hex: '#a27468',
          imgURL: '/products/women/product-2/brick.jpg',
          altText: 'Kadın Tişört Tuğla',
        },
        {
          name: 'Koyu Sarı',
          hex: '#c47d2d',
          imgURL: '/products/women/product-2/ocher.jpg',
          altText: 'Kadın Tişört Koyu Sarı',
        },
        {
          name: 'Açık Pembe',
          hex: '#e6c9b7',
          imgURL: '/products/women/product-2/soft-pink.jpg',
          altText: 'Kadın Tişört Açık Pembe',
        },
        {
          name: 'Melanj Gri',
          hex: '#919298',
          imgURL: '/products/women/product-2/grey-melange.jpg',
          altText: 'Kadın Tişört Melanj Gri',
        },
      ],
      price: 70,
    },
    {
      id: 10,
      name: 'Kadın Tişört',
      colors: [
        {
          name: 'Melanj Gri',
          hex: '#919298',
          imgURL: '/products/women/product-2/grey-melange.jpg',
          altText: 'Kadın Tişört Melanj Gri',
        },
        {
          name: 'Gül Kurusu',
          hex: '#bc8c80',
          imgURL: '/products/women/product-2/dusty-rose.jpg',
          altText: 'Kadın Tişört Gül Kurusu',
        },
        {
          name: 'Ahşap',
          hex: '#704d31',
          imgURL: '/products/women/product-2/wood.jpg',
          altText: 'Kadın Tişört Ahşap',
        },
        {
          name: 'Beyaz',
          hex: '#ffffff',
          imgURL: '/products/women/product-2/white.jpg',
          altText: 'Kadın Tişört Beyaz',
        },
        {
          name: 'Siyah',
          hex: '#000000',
          imgURL: '/products/women/product-2/black.jpg',
          altText: 'Kadın Tişört Siyah',
        },
        {
          name: 'Tuğla',
          hex: '#a27468',
          imgURL: '/products/women/product-2/brick.jpg',
          altText: 'Kadın Tişört Tuğla',
        },
        {
          name: 'Koyu Sarı',
          hex: '#c47d2d',
          imgURL: '/products/women/product-2/ocher.jpg',
          altText: 'Kadın Tişört Koyu Sarı',
        },
        {
          name: 'Açık Pembe',
          hex: '#e6c9b7',
          imgURL: '/products/women/product-2/soft-pink.jpg',
          altText: 'Kadın Tişört Açık Pembe',
        },
        {
          name: 'Lacivert',
          hex: '#313445',
          imgURL: '/products/women/product-2/navy.jpg',
          altText: 'Kadın Tişört Lacivert',
        },
      ],
      price: 70,
    },
    {
      id: 11,
      name: 'Kadın Tişört',
      colors: [
        {
          name: 'Tuğla',
          hex: '#a27468',
          imgURL: '/products/women/product-2/brick.jpg',
          altText: 'Kadın Tişört Tuğla',
        },
        {
          name: 'Gül Kurusu',
          hex: '#bc8c80',
          imgURL: '/products/women/product-2/dusty-rose.jpg',
          altText: 'Kadın Tişört Gül Kurusu',
        },
        {
          name: 'Ahşap',
          hex: '#704d31',
          imgURL: '/products/women/product-2/wood.jpg',
          altText: 'Kadın Tişört Ahşap',
        },
        {
          name: 'Beyaz',
          hex: '#ffffff',
          imgURL: '/products/women/product-2/white.jpg',
          altText: 'Kadın Tişört Beyaz',
        },
        {
          name: 'Siyah',
          hex: '#000000',
          imgURL: '/products/women/product-2/black.jpg',
          altText: 'Kadın Tişört Siyah',
        },
        {
          name: 'Lacivert',
          hex: '#313445',
          imgURL: '/products/women/product-2/navy.jpg',
          altText: 'Kadın Tişört Lacivert',
        },
        {
          name: 'Koyu Sarı',
          hex: '#c47d2d',
          imgURL: '/products/women/product-2/ocher.jpg',
          altText: 'Kadın Tişört Koyu Sarı',
        },
        {
          name: 'Açık Pembe',
          hex: '#e6c9b7',
          imgURL: '/products/women/product-2/soft-pink.jpg',
          altText: 'Kadın Tişört Açık Pembe',
        },
        {
          name: 'Melanj Gri',
          hex: '#919298',
          imgURL: '/products/women/product-2/grey-melange.jpg',
          altText: 'Kadın Tişört Melanj Gri',
        },
      ],
      price: 70,
    },
    {
      id: 12,
      name: 'Kadın Tişört',
      colors: [
        {
          name: 'Koyu Sarı',
          hex: '#c47d2d',
          imgURL: '/products/women/product-2/ocher.jpg',
          altText: 'Kadın Tişört Koyu Sarı',
        },
        {
          name: 'Gül Kurusu',
          hex: '#bc8c80',
          imgURL: '/products/women/product-2/dusty-rose.jpg',
          altText: 'Kadın Tişört Gül Kurusu',
        },
        {
          name: 'Ahşap',
          hex: '#704d31',
          imgURL: '/products/women/product-2/wood.jpg',
          altText: 'Kadın Tişört Ahşap',
        },
        {
          name: 'Beyaz',
          hex: '#ffffff',
          imgURL: '/products/women/product-2/white.jpg',
          altText: 'Kadın Tişört Beyaz',
        },
        {
          name: 'Siyah',
          hex: '#000000',
          imgURL: '/products/women/product-2/black.jpg',
          altText: 'Kadın Tişört Siyah',
        },
        {
          name: 'Lacivert',
          hex: '#313445',
          imgURL: '/products/women/product-2/navy.jpg',
          altText: 'Kadın Tişört Lacivert',
        },
        {
          name: 'Tuğla',
          hex: '#a27468',
          imgURL: '/products/women/product-2/brick.jpg',
          altText: 'Kadın Tişört Tuğla',
        },
        {
          name: 'Açık Pembe',
          hex: '#e6c9b7',
          imgURL: '/products/women/product-2/soft-pink.jpg',
          altText: 'Kadın Tişört Açık Pembe',
        },
        {
          name: 'Melanj Gri',
          hex: '#919298',
          imgURL: '/products/women/product-2/grey-melange.jpg',
          altText: 'Kadın Tişört Melanj Gri',
        },
      ],
      price: 70,
    },
    {
      id: 13,
      name: 'Kadın Tişört',
      colors: [
        {
          name: 'Açık Pembe',
          hex: '#e6c9b7',
          imgURL: '/products/women/product-2/soft-pink.jpg',
          altText: 'Kadın Tişört Açık Pembe',
        },
        {
          name: 'Koyu Sarı',
          hex: '#c47d2d',
          imgURL: '/products/women/product-2/ocher.jpg',
          altText: 'Kadın Tişört Koyu Sarı',
        },
        {
          name: 'Gül Kurusu',
          hex: '#bc8c80',
          imgURL: '/products/women/product-2/dusty-rose.jpg',
          altText: 'Kadın Tişört Gül Kurusu',
        },
        {
          name: 'Ahşap',
          hex: '#704d31',
          imgURL: '/products/women/product-2/wood.jpg',
          altText: 'Kadın Tişört Ahşap',
        },
        {
          name: 'Beyaz',
          hex: '#ffffff',
          imgURL: '/products/women/product-2/white.jpg',
          altText: 'Kadın Tişört Beyaz',
        },
        {
          name: 'Siyah',
          hex: '#000000',
          imgURL: '/products/women/product-2/black.jpg',
          altText: 'Kadın Tişört Siyah',
        },
        {
          name: 'Lacivert',
          hex: '#313445',
          imgURL: '/products/women/product-2/navy.jpg',
          altText: 'Kadın Tişört Lacivert',
        },
        {
          name: 'Tuğla',
          hex: '#a27468',
          imgURL: '/products/women/product-2/brick.jpg',
          altText: 'Kadın Tişört Tuğla',
        },
        {
          name: 'Melanj Gri',
          hex: '#919298',
          imgURL: '/products/women/product-2/grey-melange.jpg',
          altText: 'Kadın Tişört Melanj Gri',
        },
      ],
      price: 70,
    },
    {
      id: 14,
      name: 'Kadın Triko',
      colors: [
        {
          name: 'Kahve Rengi',
          hex: '#8f5732',
          imgURL: '/products/women/product-1/camel.jpg',
          altText: 'Kadın Yün Triko Kahve Rengi',
        },
        {
          name: 'Lacivert',
          hex: '#313445',
          imgURL: '/products/women/product-1/navy.jpg',
          altText: 'Kadın Yün Triko Lacivert',
        },
        {
          name: 'Gül Kurusu',
          hex: '#bc8c80',
          imgURL: '/products/women/product-1/dusty-rose.jpg',
          altText: 'Kadın Yün Triko Gül Kurusu',
        },
        {
          name: 'Zeytin Yağı',
          hex: '#605f28',
          imgURL: '/products/women/product-1/olive.jpg',
          altText: 'Kadın Yün Triko Zeytin Yağı',
        },
        {
          name: 'Kömür Grisi',
          hex: '#4b494d',
          imgURL: '/products/women/product-1/charcoal-melange.jpg',
          altText: 'Kadın Yün Triko Kömür Grisi',
        },
      ],
      price: 50,
    },
    {
      id: 15,
      name: 'Kadın Triko',
      colors: [
        {
          name: 'Lacivert',
          hex: '#313445',
          imgURL: '/products/women/product-1/navy.jpg',
          altText: 'Kadın Yün Triko Lacivert',
        },
        {
          name: 'Kahve Rengi',
          hex: '#8f5732',
          imgURL: '/products/women/product-1/camel.jpg',
          altText: 'Kadın Yün Triko Kahve Rengi',
        },
        {
          name: 'Gül Kurusu',
          hex: '#bc8c80',
          imgURL: '/products/women/product-1/dusty-rose.jpg',
          altText: 'Kadın Yün Triko Gül Kurusu',
        },
        {
          name: 'Zeytin Yağı',
          hex: '#605f28',
          imgURL: '/products/women/product-1/olive.jpg',
          altText: 'Kadın Yün Triko Zeytin Yağı',
        },
        {
          name: 'Kömür Grisi',
          hex: '#4b494d',
          imgURL: '/products/women/product-1/charcoal-melange.jpg',
          altText: 'Kadın Yün Triko Kömür Grisi',
        },
      ],
      price: 200,
    },
    {
      id: 16,
      name: 'Kadın Triko',
      colors: [
        {
          name: 'Gül Kurusu',
          hex: '#bc8c80',
          imgURL: '/products/women/product-1/dusty-rose.jpg',
          altText: 'Kadın Yün Triko Gül Kurusu',
        },
        {
          name: 'Kahve Rengi',
          hex: '#8f5732',
          imgURL: '/products/women/product-1/camel.jpg',
          altText: 'Kadın Yün Triko Kahve Rengi',
        },
        {
          name: 'Lacivert',
          hex: '#313445',
          imgURL: '/products/women/product-1/navy.jpg',
          altText: 'Kadın Yün Triko Lacivert',
        },
        {
          name: 'Zeytin Yağı',
          hex: '#605f28',
          imgURL: '/products/women/product-1/olive.jpg',
          altText: 'Kadın Yün Triko Zeytin Yağı',
        },
        {
          name: 'Kömür Grisi',
          hex: '#4b494d',
          imgURL: '/products/women/product-1/charcoal-melange.jpg',
          altText: 'Kadın Yün Triko Kömür Grisi',
        },
      ],
      price: 150,
    },
    {
      id: 17,
      name: 'Kadın Triko',
      colors: [
        {
          name: 'Zeytin Yağı',
          hex: '#605f28',
          imgURL: '/products/women/product-1/olive.jpg',
          altText: 'Kadın Yün Triko Zeytin Yağı',
        },
        {
          name: 'Kahve Rengi',
          hex: '#8f5732',
          imgURL: '/products/women/product-1/camel.jpg',
          altText: 'Kadın Yün Triko Kahve Rengi',
        },
        {
          name: 'Lacivert',
          hex: '#313445',
          imgURL: '/products/women/product-1/navy.jpg',
          altText: 'Kadın Yün Triko Lacivert',
        },
        {
          name: 'Gül Kurusu',
          hex: '#bc8c80',
          imgURL: '/products/women/product-1/dusty-rose.jpg',
          altText: 'Kadın Yün Triko Gül Kurusu',
        },
        {
          name: 'Kömür Grisi',
          hex: '#4b494d',
          imgURL: '/products/women/product-1/charcoal-melange.jpg',
          altText: 'Kadın Yün Triko Kömür Grisi',
        },
      ],
      price: 220,
    },
    {
      id: 18,
      name: 'Kadın Triko',
      colors: [
        {
          name: 'Kömür Grisi',
          hex: '#4b494d',
          imgURL: '/products/women/product-1/charcoal-melange.jpg',
          altText: 'Kadın Yün Triko Kömür Grisi',
        },
        {
          name: 'Kahve Rengi',
          hex: '#8f5732',
          imgURL: '/products/women/product-1/camel.jpg',
          altText: 'Kadın Yün Triko Kahve Rengi',
        },
        {
          name: 'Lacivert',
          hex: '#313445',
          imgURL: '/products/women/product-1/navy.jpg',
          altText: 'Kadın Yün Triko Lacivert',
        },
        {
          name: 'Gül Kurusu',
          hex: '#bc8c80',
          imgURL: '/products/women/product-1/dusty-rose.jpg',
          altText: 'Kadın Yün Triko Gül Kurusu',
        },
        {
          name: 'Zeytin Yağı',
          hex: '#605f28',
          imgURL: '/products/women/product-1/olive.jpg',
          altText: 'Kadın Yün Triko Zeytin Yağı',
        },
      ],
      price: 180,
    },
    {
      id: 19,
      name: 'Kadın Tişört',
      colors: [
        {
          name: 'Gül Kurusu',
          hex: '#bc8c80',
          imgURL: '/products/women/product-2/dusty-rose.jpg',
          altText: 'Kadın Tişört Gül Kurusu',
        },
        {
          name: 'Ahşap',
          hex: '#704d31',
          imgURL: '/products/women/product-2/wood.jpg',
          altText: 'Kadın Tişört Ahşap',
        },
        {
          name: 'Beyaz',
          hex: '#ffffff',
          imgURL: '/products/women/product-2/white.jpg',
          altText: 'Kadın Tişört Beyaz',
        },
        {
          name: 'Siyah',
          hex: '#000000',
          imgURL: '/products/women/product-2/black.jpg',
          altText: 'Kadın Tişört Siyah',
        },
        {
          name: 'Lacivert',
          hex: '#313445',
          imgURL: '/products/women/product-2/navy.jpg',
          altText: 'Kadın Tişört Lacivert',
        },
        {
          name: 'Tuğla',
          hex: '#a27468',
          imgURL: '/products/women/product-2/brick.jpg',
          altText: 'Kadın Tişört Tuğla',
        },
        {
          name: 'Koyu Sarı',
          hex: '#c47d2d',
          imgURL: '/products/women/product-2/ocher.jpg',
          altText: 'Kadın Tişört Koyu Sarı',
        },
        {
          name: 'Açık Pembe',
          hex: '#e6c9b7',
          imgURL: '/products/women/product-2/soft-pink.jpg',
          altText: 'Kadın Tişört Açık Pembe',
        },
        {
          name: 'Melanj Gri',
          hex: '#919298',
          imgURL: '/products/women/product-2/grey-melange.jpg',
          altText: 'Kadın Tişört Melanj Gri',
        },
      ],
      price: 70,
    },
    {
      id: 20,
      name: 'Kadın Tişört',
      colors: [
        {
          name: 'Ahşap',
          hex: '#704d31',
          imgURL: '/products/women/product-2/wood.jpg',
          altText: 'Kadın Tişört Ahşap',
        },
        {
          name: 'Gül Kurusu',
          hex: '#bc8c80',
          imgURL: '/products/women/product-2/dusty-rose.jpg',
          altText: 'Kadın Tişört Gül Kurusu',
        },
        {
          name: 'Beyaz',
          hex: '#ffffff',
          imgURL: '/products/women/product-2/white.jpg',
          altText: 'Kadın Tişört Beyaz',
        },
        {
          name: 'Siyah',
          hex: '#000000',
          imgURL: '/products/women/product-2/black.jpg',
          altText: 'Kadın Tişört Siyah',
        },
        {
          name: 'Lacivert',
          hex: '#313445',
          imgURL: '/products/women/product-2/navy.jpg',
          altText: 'Kadın Tişört Lacivert',
        },
        {
          name: 'Tuğla',
          hex: '#a27468',
          imgURL: '/products/women/product-2/brick.jpg',
          altText: 'Kadın Tişört Tuğla',
        },
        {
          name: 'Koyu Sarı',
          hex: '#c47d2d',
          imgURL: '/products/women/product-2/ocher.jpg',
          altText: 'Kadın Tişört Koyu Sarı',
        },
        {
          name: 'Açık Pembe',
          hex: '#e6c9b7',
          imgURL: '/products/women/product-2/soft-pink.jpg',
          altText: 'Kadın Tişört Açık Pembe',
        },
        {
          name: 'Melanj Gri',
          hex: '#919298',
          imgURL: '/products/women/product-2/grey-melange.jpg',
          altText: 'Kadın Tişört Melanj Gri',
        },
      ],
      price: 70,
    },
    {
      id: 21,
      name: 'Kadın Tişört',
      colors: [
        {
          name: 'Beyaz',
          hex: '#ffffff',
          imgURL: '/products/women/product-2/white.jpg',
          altText: 'Kadın Tişört Beyaz',
        },
        {
          name: 'Gül Kurusu',
          hex: '#bc8c80',
          imgURL: '/products/women/product-2/dusty-rose.jpg',
          altText: 'Kadın Tişört Gül Kurusu',
        },
        {
          name: 'Ahşap',
          hex: '#704d31',
          imgURL: '/products/women/product-2/wood.jpg',
          altText: 'Kadın Tişört Ahşap',
        },
        {
          name: 'Siyah',
          hex: '#000000',
          imgURL: '/products/women/product-2/black.jpg',
          altText: 'Kadın Tişört Siyah',
        },
        {
          name: 'Lacivert',
          hex: '#313445',
          imgURL: '/products/women/product-2/navy.jpg',
          altText: 'Kadın Tişört Lacivert',
        },
        {
          name: 'Tuğla',
          hex: '#a27468',
          imgURL: '/products/women/product-2/brick.jpg',
          altText: 'Kadın Tişört Tuğla',
        },
        {
          name: 'Koyu Sarı',
          hex: '#c47d2d',
          imgURL: '/products/women/product-2/ocher.jpg',
          altText: 'Kadın Tişört Koyu Sarı',
        },
        {
          name: 'Açık Pembe',
          hex: '#e6c9b7',
          imgURL: '/products/women/product-2/soft-pink.jpg',
          altText: 'Kadın Tişört Açık Pembe',
        },
        {
          name: 'Melanj Gri',
          hex: '#919298',
          imgURL: '/products/women/product-2/grey-melange.jpg',
          altText: 'Kadın Tişört Melanj Gri',
        },
      ],
      price: 70,
    },
    {
      id: 22,
      name: 'Kadın Tişört',
      colors: [
        {
          name: 'Siyah',
          hex: '#000000',
          imgURL: '/products/women/product-2/black.jpg',
          altText: 'Kadın Tişört Siyah',
        },
        {
          name: 'Gül Kurusu',
          hex: '#bc8c80',
          imgURL: '/products/women/product-2/dusty-rose.jpg',
          altText: 'Kadın Tişört Gül Kurusu',
        },
        {
          name: 'Ahşap',
          hex: '#704d31',
          imgURL: '/products/women/product-2/wood.jpg',
          altText: 'Kadın Tişört Ahşap',
        },
        {
          name: 'Beyaz',
          hex: '#ffffff',
          imgURL: '/products/women/product-2/white.jpg',
          altText: 'Kadın Tişört Beyaz',
        },
        {
          name: 'Lacivert',
          hex: '#313445',
          imgURL: '/products/women/product-2/navy.jpg',
          altText: 'Kadın Tişört Lacivert',
        },
        {
          name: 'Tuğla',
          hex: '#a27468',
          imgURL: '/products/women/product-2/brick.jpg',
          altText: 'Kadın Tişört Tuğla',
        },
        {
          name: 'Koyu Sarı',
          hex: '#c47d2d',
          imgURL: '/products/women/product-2/ocher.jpg',
          altText: 'Kadın Tişört Koyu Sarı',
        },
        {
          name: 'Açık Pembe',
          hex: '#e6c9b7',
          imgURL: '/products/women/product-2/soft-pink.jpg',
          altText: 'Kadın Tişört Açık Pembe',
        },
        {
          name: 'Melanj Gri',
          hex: '#919298',
          imgURL: '/products/women/product-2/grey-melange.jpg',
          altText: 'Kadın Tişört Melanj Gri',
        },
      ],
      price: 70,
    },
    {
      id: 23,
      name: 'Kadın Tişört',
      colors: [
        {
          name: 'Lacivert',
          hex: '#313445',
          imgURL: '/products/women/product-2/navy.jpg',
          altText: 'Kadın Tişört Lacivert',
        },
        {
          name: 'Gül Kurusu',
          hex: '#bc8c80',
          imgURL: '/products/women/product-2/dusty-rose.jpg',
          altText: 'Kadın Tişört Gül Kurusu',
        },
        {
          name: 'Ahşap',
          hex: '#704d31',
          imgURL: '/products/women/product-2/wood.jpg',
          altText: 'Kadın Tişört Ahşap',
        },
        {
          name: 'Beyaz',
          hex: '#ffffff',
          imgURL: '/products/women/product-2/white.jpg',
          altText: 'Kadın Tişört Beyaz',
        },
        {
          name: 'Siyah',
          hex: '#000000',
          imgURL: '/products/women/product-2/black.jpg',
          altText: 'Kadın Tişört Siyah',
        },
        {
          name: 'Tuğla',
          hex: '#a27468',
          imgURL: '/products/women/product-2/brick.jpg',
          altText: 'Kadın Tişört Tuğla',
        },
        {
          name: 'Koyu Sarı',
          hex: '#c47d2d',
          imgURL: '/products/women/product-2/ocher.jpg',
          altText: 'Kadın Tişört Koyu Sarı',
        },
        {
          name: 'Açık Pembe',
          hex: '#e6c9b7',
          imgURL: '/products/women/product-2/soft-pink.jpg',
          altText: 'Kadın Tişört Açık Pembe',
        },
        {
          name: 'Melanj Gri',
          hex: '#919298',
          imgURL: '/products/women/product-2/grey-melange.jpg',
          altText: 'Kadın Tişört Melanj Gri',
        },
      ],
      price: 70,
    },
    {
      id: 24,
      name: 'Kadın Tişört',
      colors: [
        {
          name: 'Tuğla',
          hex: '#a27468',
          imgURL: '/products/women/product-2/brick.jpg',
          altText: 'Kadın Tişört Tuğla',
        },
        {
          name: 'Gül Kurusu',
          hex: '#bc8c80',
          imgURL: '/products/women/product-2/dusty-rose.jpg',
          altText: 'Kadın Tişört Gül Kurusu',
        },
        {
          name: 'Ahşap',
          hex: '#704d31',
          imgURL: '/products/women/product-2/wood.jpg',
          altText: 'Kadın Tişört Ahşap',
        },
        {
          name: 'Beyaz',
          hex: '#ffffff',
          imgURL: '/products/women/product-2/white.jpg',
          altText: 'Kadın Tişört Beyaz',
        },
        {
          name: 'Siyah',
          hex: '#000000',
          imgURL: '/products/women/product-2/black.jpg',
          altText: 'Kadın Tişört Siyah',
        },
        {
          name: 'Lacivert',
          hex: '#313445',
          imgURL: '/products/women/product-2/navy.jpg',
          altText: 'Kadın Tişört Lacivert',
        },
        {
          name: 'Koyu Sarı',
          hex: '#c47d2d',
          imgURL: '/products/women/product-2/ocher.jpg',
          altText: 'Kadın Tişört Koyu Sarı',
        },
        {
          name: 'Açık Pembe',
          hex: '#e6c9b7',
          imgURL: '/products/women/product-2/soft-pink.jpg',
          altText: 'Kadın Tişört Açık Pembe',
        },
        {
          name: 'Melanj Gri',
          hex: '#919298',
          imgURL: '/products/women/product-2/grey-melange.jpg',
          altText: 'Kadın Tişört Melanj Gri',
        },
      ],
      price: 70,
    },
    {
      id: 25,
      name: 'Kadın Tişört',
      colors: [
        {
          name: 'Koyu Sarı',
          hex: '#c47d2d',
          imgURL: '/products/women/product-2/ocher.jpg',
          altText: 'Kadın Tişört Koyu Sarı',
        },
        {
          name: 'Gül Kurusu',
          hex: '#bc8c80',
          imgURL: '/products/women/product-2/dusty-rose.jpg',
          altText: 'Kadın Tişört Gül Kurusu',
        },
        {
          name: 'Ahşap',
          hex: '#704d31',
          imgURL: '/products/women/product-2/wood.jpg',
          altText: 'Kadın Tişört Ahşap',
        },
        {
          name: 'Beyaz',
          hex: '#ffffff',
          imgURL: '/products/women/product-2/white.jpg',
          altText: 'Kadın Tişört Beyaz',
        },
        {
          name: 'Siyah',
          hex: '#000000',
          imgURL: '/products/women/product-2/black.jpg',
          altText: 'Kadın Tişört Siyah',
        },
        {
          name: 'Lacivert',
          hex: '#313445',
          imgURL: '/products/women/product-2/navy.jpg',
          altText: 'Kadın Tişört Lacivert',
        },
        {
          name: 'Tuğla',
          hex: '#a27468',
          imgURL: '/products/women/product-2/brick.jpg',
          altText: 'Kadın Tişört Tuğla',
        },
        {
          name: 'Açık Pembe',
          hex: '#e6c9b7',
          imgURL: '/products/women/product-2/soft-pink.jpg',
          altText: 'Kadın Tişört Açık Pembe',
        },
        {
          name: 'Melanj Gri',
          hex: '#919298',
          imgURL: '/products/women/product-2/grey-melange.jpg',
          altText: 'Kadın Tişört Melanj Gri',
        },
      ],
      price: 70,
    },
    {
      id: 26,
      name: 'Kadın Tişört',
      colors: [
        {
          name: 'Açık Pembe',
          hex: '#e6c9b7',
          imgURL: '/products/women/product-2/soft-pink.jpg',
          altText: 'Kadın Tişört Açık Pembe',
        },
        {
          name: 'Koyu Sarı',
          hex: '#c47d2d',
          imgURL: '/products/women/product-2/ocher.jpg',
          altText: 'Kadın Tişört Koyu Sarı',
        },
        {
          name: 'Gül Kurusu',
          hex: '#bc8c80',
          imgURL: '/products/women/product-2/dusty-rose.jpg',
          altText: 'Kadın Tişört Gül Kurusu',
        },
        {
          name: 'Ahşap',
          hex: '#704d31',
          imgURL: '/products/women/product-2/wood.jpg',
          altText: 'Kadın Tişört Ahşap',
        },
        {
          name: 'Beyaz',
          hex: '#ffffff',
          imgURL: '/products/women/product-2/white.jpg',
          altText: 'Kadın Tişört Beyaz',
        },
        {
          name: 'Siyah',
          hex: '#000000',
          imgURL: '/products/women/product-2/black.jpg',
          altText: 'Kadın Tişört Siyah',
        },
        {
          name: 'Lacivert',
          hex: '#313445',
          imgURL: '/products/women/product-2/navy.jpg',
          altText: 'Kadın Tişört Lacivert',
        },
        {
          name: 'Tuğla',
          hex: '#a27468',
          imgURL: '/products/women/product-2/brick.jpg',
          altText: 'Kadın Tişört Tuğla',
        },
        {
          name: 'Melanj Gri',
          hex: '#919298',
          imgURL: '/products/women/product-2/grey-melange.jpg',
          altText: 'Kadın Tişört Melanj Gri',
        },
      ],
      price: 70,
    },
    {
      id: 27,
      name: 'Kadın Tişört',
      colors: [
        {
          name: 'Melanj Gri',
          hex: '#919298',
          imgURL: '/products/women/product-2/grey-melange.jpg',
          altText: 'Kadın Tişört Melanj Gri',
        },
        {
          name: 'Açık Pembe',
          hex: '#e6c9b7',
          imgURL: '/products/women/product-2/soft-pink.jpg',
          altText: 'Kadın Tişört Açık Pembe',
        },
        {
          name: 'Koyu Sarı',
          hex: '#c47d2d',
          imgURL: '/products/women/product-2/ocher.jpg',
          altText: 'Kadın Tişört Koyu Sarı',
        },
        {
          name: 'Gül Kurusu',
          hex: '#bc8c80',
          imgURL: '/products/women/product-2/dusty-rose.jpg',
          altText: 'Kadın Tişört Gül Kurusu',
        },
        {
          name: 'Ahşap',
          hex: '#704d31',
          imgURL: '/products/women/product-2/wood.jpg',
          altText: 'Kadın Tişört Ahşap',
        },
        {
          name: 'Beyaz',
          hex: '#ffffff',
          imgURL: '/products/women/product-2/white.jpg',
          altText: 'Kadın Tişört Beyaz',
        },
        {
          name: 'Siyah',
          hex: '#000000',
          imgURL: '/products/women/product-2/black.jpg',
          altText: 'Kadın Tişört Siyah',
        },
        {
          name: 'Lacivert',
          hex: '#313445',
          imgURL: '/products/women/product-2/navy.jpg',
          altText: 'Kadın Tişört Lacivert',
        },
        {
          name: 'Tuğla',
          hex: '#a27468',
          imgURL: '/products/women/product-2/brick.jpg',
          altText: 'Kadın Tişört Tuğla',
        },
      ],
      price: 70,
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

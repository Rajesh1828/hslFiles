import logo from './logo.png';
import hero_b1 from './hero_b1.jpg';
import hero_b2 from './hero_b2.jpg';
import hero_b3 from './hero_b3.jpg';
import hero_b4 from './hero_b4.jpg';
import s_1 from './s_1.jpg';
import s_2 from './s_2.jpg';
import s_3 from './s_3.jpg';
import F_1 from './F_1.jpg';
import F_2 from './F_2.jpg';
import F_3 from './F_3.jpg';
import ab_b from './ab_b.jpg';
import conatct from './conatct.jpg';

//categories

import c_1 from './bussiness_card_folder.webp';
import c_2 from './certificate_folder.webp';
import c_3 from './document_file_folder.webp';
import c_4 from './document_gag.webp';
import c_5 from './strip_file.webp';
import c_6 from './file_folder.webp';
import c_7 from './display_book_folder.webp';

//collection
import doc_1 from './doc_1.webp';
import doc_2 from './doc_2.webp';
import doc_3 from './doc_3.webp';
import doc_4 from './doc_4.webp';
import doc_5 from './doc_5.webp';
import doc_6 from './doc_6.webp';
import doc_7 from './doc_7.webp';
import doc_8 from './doc_8.webp';
import doc_9 from './doc_9.webp';
import doc_10 from './doc_10.webp';
import st_1 from './st_1.webp';
import st_2 from './st_2.webp';
import st_3 from './st_3.webp';
import st_4 from './st_4.webp';
import st_5 from './st_5.webp';
import ff_1 from './ff_1.webp';
import ff_2 from './ff_2.webp';
import ff_3 from './ff_3.webp';
import ff_4 from './ff_4.webp';
import ff_5 from './ff_5.webp';
import ff_6 from './ff_6.webp';
import ff_7 from './ff_7.webp';
import ff_8 from './ff_8.webp';
import dg_1 from './dg_1.webp';
import dg_2 from './dg_2.webp';
import dg_3 from './dg_3.webp';
import dg_4 from './dg_4.webp';
import ct_1 from './c_1.webp';
import ct_2 from './c_2.webp';
import ct_3 from './c_3.webp';
import db_1 from './db_1.webp';
import ot_1 from './ot_1.webp';
import ot_2 from './ot_2.webp';
import ot_3 from './ot_3.webp';
import ot_4 from './ot_4.webp';
import ot_5 from './ot_5.webp';
import g_1 from './g_1.jpg';
import g_2 from './g_2.jpg';
import g_3 from './g_3.jpg';
import g_4 from './g_4.jpg';
import g_5 from './g_5.jpg';
import g_6 from './g_6.jpg';









export const categories = [
  {
    _id: 1,
    name: "Bussiness Card",
    image: c_1

  },
  {
    _id: 2,
    name: "Certificate",
    image: c_2

  },
  {
    _id: 3,
    name: "Document File",
    image: c_3

  },
  {
    _id: 4,
    name: "Document Gag",
    image: c_4

  },
  {
    _id: 5,
    name: "Strip File",
    image: c_5

  },
  {
    _id: 6,
    name: "File_Folder",
    image: c_6

  },
  {
    _id: 7,
    name: "Display Book",
    image: c_7

  },
  {
    _id: 8,
    name: "Others",
    image: c_7

  }

]
export const sizes = [
  {
    _id: 1,
    name: "A/1"
  },
  {
    _id: 2,
    name: "A/2"
  },
  {
    _id: 3,
    name: "A/3"
  },
  {
    _id: 4,
    name: "A/4"
  },
  {
    _id: 5,
    name: "A/5"
  },
  {
    _id: 6,
    name: "A/6"
  },
  {
    _id: 7,
    name: "F/C"
  }

]


export const collection = [
  {
    _id: 1,
    name: "Button-file",
    image: doc_1,
    categories: "Document File",
    description: "Durable button file for storing important papers securely.",
    price: 25,
    size: ["A/1", "A/2", "A/3", "A/4", "A/5", "A/6"],
    sizes: "A/1",

    model: "Default",
    brand: "Hitech"
  },
  {
    _id: 2,
    name: "Button-file with pocket",
    image: doc_2,
    categories: "Document File",
    description: "Button file with internal pocket for organizing extra sheets.",
    price: 30,
    size: ["A/1", "A/2", "A/3", "A/4", "A/5", "A/6"],
    sizes: "A/2",

    model: "Default",
    brand: "Hitech"
  },
  {
    _id: 3,
    name: "Button-file-A/3",
    image: doc_3,
    categories: "Document File",
    description: "A3 size button file ideal for larger documents and charts.",
    price: 35,
    size: ["A/1", "A/2", "A/3", "A/4", "A/5", "A/6"],
    sizes: "A/3",

    model: "Default",
    brand: "Hitech"
  },
  {
    _id: 4,
    name: "Spring clip file",
    image: doc_4,
    categories: "Document File",
    description: "Spring clip file to hold papers without punching holes.",
    price: 28,
    size: ["A/1", "A/2", "A/3", "A/4", "A/5", "A/6"],
    sizes: "A/4",

    model: "Default",
    brand: "Hitech"
  },
  {
    _id: 5,
    name: "Button file with clip",
    image: doc_5,
    categories: "Document File",
    description: "Multi-functional file with both button and clip options.",
    price: 32,
    size: ["A/1", "A/2", "A/3", "A/4", "A/5", "A/6"],
    sizes: "A/5",

    model: "Default",
    brand: "Hitech"
  },
  {
    _id: 6,
    name: "Button file with clip",
    image: doc_6,
    categories: "Document File",
    description: "High-quality file with clip for better document security.",
    price: 32,
    size: ["A/1", "A/2", "A/3", "A/4", "A/5", "A/6"],
    sizes: "A/6",

    model: "Default",
    brand: "Hitech"
  },
  {
    _id: 7,
    name: "Button file with clip",
    image: doc_7,
    categories: "Document File",
    description: "Sleek design with sturdy clip and button enclosure.",
    price: 32,
    size: ["A/1", "A/2", "A/3", "A/4", "A/5", "A/6"],
    sizes: "A/7",

    model: "Default",
    brand: "Hitech"
  },
  {
    _id: 8,
    name: "Button file with clip",
    image: doc_8,
    categories: "Document File",
    description: "Ideal for office and academic document storage.",
    price: 32,
    size: ["A/1", "A/2", "A/3", "A/4", "A/5", "A/6"],
    sizes: "A/1",

    model: "Default",
    brand: "Hitech"
  },
  {
    _id: 9,
    name: "Button file with clip",
    image: doc_9,
    categories: "Document File",
    description: "Premium plastic build for daily usage.",
    price: 32,
    size: ["A/1", "A/2", "A/3", "A/4", "A/5", "A/6"],
    sizes: "A/2",

    model: "Default",
    brand: "Hitech"
  },
  {
    _id: 10,
    name: "Double pocket file",
    image: doc_10,
    categories: "Document File",
    description: "Two-pocket file to separate and organize documents easily.",
    price: 40,
    size: ["A/1", "A/2", "A/3", "A/4", "A/5", "A/6"],
    sizes: "A/3",

    model: "Default",
    brand: "Hitech"
  },
  {
    _id: 11,
    name: "Strip file",
    image: st_1,
    categories: "Strip File",
    description: "Simple and cost-effective file for quick document access.",
    price: 15,
    size: ["A/1", "A/2", "A/3", "A/4", "A/5", "A/6"],
    sizes: "A/4",
    model: "Default",
    brand: "Hitech"
  },
  {
    _id: 12,
    name: "Strip file",
    image: st_2,
    categories: "Strip File",
    description: "Lightweight file with flexible strip mechanism.",
    price: 15,
    size: ["A/1", "A/2", "A/3", "A/4", "A/5", "A/6"],
    sizes: "A/5",
    model: "Default",
    brand: "Hitech"
  },
  {
    _id: 13,
    name: "Strip file",
    image: st_3,
    categories: "Strip File",
    description: "Available in multiple colors, great for filing reports.",
    price: 15,
    size: ["A/1", "A/2", "A/3", "A/4", "A/5", "A/6"],
    sizes: "A/6",

    model: "Default",
    brand: "Hitech"
  },
  {
    _id: 14,
    name: "Strip file",
    image: st_4,
    categories: "Strip File",
    description: "Economical option for organizing bulk paperwork.",
    price: 15,
    size: ["A/1", "A/2", "A/3", "A/4", "A/5", "A/6"],
    sizes: "A/7",

    model: "Default",
    brand: "Hitech"
  },
  {
    _id: 15,
    name: "Strip file",
    image: st_5,
    categories: "Strip File",
    description: "Durable and practical strip file with smooth finish.",
    price: 15,
    size: ["A/1", "A/2", "A/3", "A/4", "A/5", "A/6"],
    sizes: "A/1",

    model: "Default",
    brand: "Hitech"
  },
  {
    _id: 16,
    name: "File folder",
    image: ff_1,
    categories: "File_Folder",
    description: "Standard file folder with sturdy spine and labels.",
    price: 20,
    size: ["A/1", "A/2", "A/3", "A/4", "A/5", "A/6"],
    sizes: "A/2",

    model: "Default",
    brand: "Hitech"
  },
  {
    _id: 17,
    name: "File folder",
    image: ff_2,
    categories: "File_Folder",
    description: "Perfect for legal documents and long reports.",
    price: 20,
    size: ["A/1", "A/2", "A/3", "A/4", "A/5", "A/6"],
    sizes: "A/3",

    model: "Default",
    brand: "Hitech"
  },
  {
    _id: 18,
    name: "File folder",
    image: ff_3,
    categories: "File_Folder",
    description: "Quality folder for day-to-day document handling.",
    price: 20,
    size: ["A/1", "A/2", "A/3", "A/4", "A/5", "A/6"],
    sizes: "A/4",

    model: "Default",
    brand: "Hitech"
  },
  {
    _id: 19,
    name: "File folder",
    image: ff_4,
    categories: "File_Folder",
    description: "Designed with ergonomic grip and smart labels.",
    price: 20,
    size: ["A/1", "A/2", "A/3", "A/4", "A/5", "A/6"],
    sizes: "A/5",

    model: "Default",
    brand: "Hitech"
  },
  {
    _id: 20,
    name: "File folder",
    image: ff_5,
    categories: "File_Folder",
    description: "Heavy-duty material for long-term usage.",
    price: 22,
    size: ["A/1", "A/2", "A/3", "A/4", "A/5", "A/6"],
    sizes: "A/6",

    model: "Default",
    brand: "Hitech"
  },
  {
    _id: 21,
    name: "File folder",
    image: ff_6,
    categories: "File_Folder",
    description: "Ideal for student projects and business files.",
    price: 22,
    size: ["A/1", "A/2", "A/3", "A/4", "A/5", "A/6"],
    sizes: "A/7",

    model: "Default",
    brand: "Hitech"
  },
  {
    _id: 22,
    name: "File folder",
    image: ff_7,
    categories: "File_Folder",
    description: "Modern design with ample capacity.",
    price: 22,
    size: ["A/1", "A/2", "A/3", "A/4", "A/5", "A/6"],
    sizes: "A/1",

    model: "Default",
    brand: "Hitech"
  },
  {
    _id: 23,
    name: "File folder",
    image: ff_8,
    categories: "File_Folder",
    description: "Folder with durable spine and easy-open clasp.",
    price: 22,
    size: ["A/1", "A/2", "A/3", "A/4", "A/5", "A/6"],
    sizes: "A/2",

    model: "Default",
    brand: "Hitech"
  },
  {
    _id: 24,
    name: "Document gag",
    image: dg_1,
    categories: "Document Gag",
    description: "Unique design for document bundling.",
    price: 18,
    size: ["A/1", "A/2", "A/3", "A/4", "A/5", "A/6"],
    sizes: "A/3",

    model: "Default",
    brand: "Hitech"
  },
  {
    _id: 25,
    name: "Document gag",
    image: dg_2,
    categories: "Document Gag",
    description: "Keeps documents tight and safe.",
    price: 18,
    size: ["A/1", "A/2", "A/3", "A/4", "A/5", "A/6"],
    sizes: "A/4",

    model: "Default",
    brand: "Hitech"

  },
  {
    _id: 26,
    name: "Document gag",
    image: dg_3,
    categories: "Document Gag",
    description: "Durable elastic for flexible document handling.",
    price: 18,
    size: ["A/1", "A/2", "A/3", "A/4", "A/5", "A/6"],
    sizes: "A/5",

    model: "Default",
    brand: "Hitech"
  },
  {
    _id: 27,
    name: "Document gag",
    image: dg_4,
    categories: "Document Gag",
    description: "Compact and easy to use for small stacks.",
    price: 18,
    size: ["A/1", "A/2", "A/3", "A/4", "A/5", "A/6"],
    sizes: "A/6",

    model: "Default",
    brand: "Hitech"
  },
  {
    _id: 28,
    name: "Certificate folder",
    image: ct_1,
    categories: "Certificate",
    description: "Elegant folder to protect and showcase certificates.",
    price: 50,
    size: ["A/1", "A/2", "A/3", "A/4", "A/5", "A/6"],
    sizes: "A/7",


    model: "Default",
    brand: "Hitech"
  },
  {
    _id: 29,
    name: "Certificate folder",
    image: ct_3,
    categories: "Certificate",
    description: "Premium finish certificate folder for formal use.",
    price: 55,
    size: ["A/1", "A/2", "A/3", "A/4", "A/5", "A/6"],
    sizes: "A/7",

    model: "Default",
    brand: "Hitech"
  },
  {
    _id: 30,
    name: "Certificate folder",
    image: ct_2,
    categories: "Certificate",
    description: "Hardbound cover for important awards and diplomas.",
    price: 55,
    size: ["A/1", "A/2", "A/3", "A/4", "A/5", "A/6"],
    sizes: "A/2",

    model: "Default",
    brand: "Hitech"
  },
  {
    _id: 31,
    name: "display book",
    image: db_1,
    categories: "Display Book",
    description: "Book-style file with transparent sleeves.",
    price: 60,
    size: ["A/1", "A/2", "A/3", "A/4", "A/5", "A/6"],
    sizes: "A/3",

    model: "Default",
    brand: "Hitech"
  },
  {
    _id: 32,
    name: "Others",
    image: ot_1,
    categories: "Others",
    description: "Miscellaneous stationery storage product.",
    price: 25,
    size: ["A/1", "A/2", "A/3", "A/4", "A/5", "A/6"],
    sizes: "A/4",

    model: "Default",
    brand: "Hitech"
  },
  {
    _id: 33,
    name: "Others",
    image: ot_2,
    categories: "Others",
    description: "Multi-use item for various filing needs.",
    price: 25,
    size: ["A/1", "A/2", "A/3", "A/4", "A/5", "A/6"],
    sizes: "A/5",

    model: "Default",
    brand: "Hitech"
  },
  {
    _id: 34,
    name: "Others",
    image: ot_3,
    categories: "Others",
    description: "Affordable option for general use.",
    price: 20,
    size: ["A/1", "A/2", "A/3", "A/4", "A/5", "A/6"],
    sizes: "A/6",

    model: "Default",
    brand: "Hitech"
  },
  {
    _id: 35,
    name: "Others",
    image: ot_4,
    categories: "Others",
    description: "Simple and reusable storage solution.",
    price: 20,
    size: ['A/7', 'A/6', 'A/5', 'A/4', 'A/3', 'F/C'],
    sizes: "A/7",
    model: "Default",
    brand: "Hitech"
  },
  {
    _id: 36,
    name: "Others",
    image: ot_5,
    categories: "Others",
    description: "Useful item for students and professionals alike.",
    price: 22,
    size: ['A/7', 'A/6', 'A/5', 'A/4', 'A/3', 'F/C'],

    sizes: "F/C",
    model: "Default",
    brand: "Hitech"
  }
];



//document file folders,stripFiles,fileFolders, DocumentTags,CheckBook


export const assets = {
  logo,
  hero_b1,
  hero_b2,
  hero_b3,
  hero_b4,
  s_1,
  s_2,
  s_3,
  F_1,
  F_2,
  F_3,
  ab_b,
  conatct,
  g_1,
  g_2,
  g_3,
  g_4,
  g_5,
  g_6,
  
}
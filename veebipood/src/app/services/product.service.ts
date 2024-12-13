import { Injectable } from '@angular/core';
import { Toode } from '../models/Toode';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  tooted: Toode[] = [
    {nimi: 'Nobe', hind: 25000, aktiivne: true, pilt: "https://www.linearity.io/blog/content/images/size/w1280/format/avif/2023/06/how-to-create-a-car-NewBlogCover.png"},
    {nimi: 'BMW', hind: 34000, aktiivne: true, pilt: "https://www.linearity.io/blog/content/images/size/w1280/format/avif/2023/06/how-to-create-a-car-NewBlogCover.png"},
    {nimi: 'Tesla', hind: 70000, aktiivne: false, pilt: "https://www.linearity.io/blog/content/images/size/w1280/format/avif/2023/06/how-to-create-a-car-NewBlogCover.png"},
    {nimi: 'Volvo', hind: 29000, aktiivne: true, pilt: "https://www.linearity.io/blog/content/images/size/w1280/format/avif/2023/06/how-to-create-a-car-NewBlogCover.png"},
    {nimi: 'Saab', hind: 38000, aktiivne: true, pilt: "https://www.linearity.io/blog/content/images/size/w1280/format/avif/2023/06/how-to-create-a-car-NewBlogCover.png"},
    {nimi: 'Bently', hind: 44000, aktiivne: true, pilt: "https://www.linearity.io/blog/content/images/size/w1280/format/avif/2023/06/how-to-create-a-car-NewBlogCover.png"},
    {nimi: 'Nissan', hind: 67000, aktiivne: false, pilt: "https://www.linearity.io/blog/content/images/size/w1280/format/avif/2023/06/how-to-create-a-car-NewBlogCover.png"},
    {nimi: 'Toyota', hind: 21000, aktiivne: true, pilt: "https://www.linearity.io/blog/content/images/size/w1280/format/avif/2023/06/how-to-create-a-car-NewBlogCover.png"},
  ];

  // Nimi:, Tel, aadress
  // Model teha
  // Kus neid valja kuvan ---> Aadresii tahemarkide kokkuarvutus
  esindused = [
    {nimi: 'Kristiine', telefon: 98130100, aadress: 'Endla 45, 10615 Tallinn', xCoord: 59.4274 , yCoord: 24.7230},
    {nimi: 'Ülemiste', telefon: 98130100, aadress: 'Suur-Sõjamäe tn 4, 11415 Tallinn', xCoord: 59.4220 , yCoord: 24.7939, href: "https://www.google.com/maps/place/%C3%9Clemiste+Centre/@59.4219417,24.7889961,17z/data=!3m1!4b1!4m6!3m5!1s0x4692eb54f4edfe43:0x206e6dcbdf41435e!8m2!3d59.4219391!4d24.793867!16s%2Fm%2F0hrdb05?entry=ttu&g_ep=EgoyMDI0MTIxMC4wIKXMDSoASAFQAw%3D%3D"},
    {nimi: 'Rocca al mare', telefon:98130100, aadress: ' Paldiski mnt 102, 13522 Tallinn', xCoord: 1, yCoord: 1},
    {nimi: 'Vesse', telefon: 98130100, aadress: 'Vesse 14607-1', xCoord: 1, yCoord: 1},
    {nimi: 'Järveotsa', telefon: 98130100, aadress: 'Järveotsa tee 35b, Tallinn', xCoord: 1, yCoord: 1},
    {nimi: 'Mustamäe', telefon: 98130100, aadress: ' A. H. Tammsaare tee 104a, 12918 Tallinn', xCoord: 1, yCoord: 1},
    {nimi: 'Viru keskus', telefon: 98130100, aadress: ' Viru väljak 4-6, 10111 Tallinn', xCoord: 1, yCoord: 1},
    {nimi: 'Solaris', telefon: 98130100, aadress: 'Estonia pst 9, 11314 Tallinn', xCoord: 1, yCoord: 1},
  ];

  // Tootajad: nimi, ametikoht, tel
  // Model teha
  // Kus neid valja kuvan ---> Aadresii tahemarkide kokkuarvutus
  tootajad = [
    {nimi: 'Susanna G.', telefon: 98130100, ametikoht: 'Solaris'},
    {nimi: 'Timmu', telefon: 98130100, ametikoht: 'Rocca al mare'},
    {nimi: 'Onu Aadu', telefon: 98130100, ametikoht: 'Vesse'},
    {nimi: 'Joosep F.', telefon: 98130100, ametikoht: 'Järveotsa'},
    {nimi: 'Daniel', telefon: 98130100, ametikoht: 'Mustamäe'},
    {nimi: 'Peeter O. S. Tavamaa', telefon: 98130100, ametikoht: 'Kristiine'},
    {nimi: 'Tanel P. A.', telefon: 98130100, ametikoht: 'Ülemiste'},
    {nimi: 'Renet O.', telefon: 98130100, ametikoht: 'Viru keskus'},
  ];

  constructor() {}
}

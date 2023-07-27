import { Component } from '@angular/core';
import { Item } from './models/item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Newbie';

  listItem: Item[] = [
    {
      name: 'Spider-Man Into The Spider-Verse Miles Action Figure SV-Action Box 24h Delivery',
      price: 856904,
      inStock: 10,
      description: 'Hàng nước ngoài, tính thêm phí giao hàng',
      imgURL: 'https://i.ebayimg.com/images/g/XikAAOSwv5Nkbx2b/s-l1200.webp',
    },
    {
      name: 'Oshi no Ko - Hoshino Ai - KDcolle - 1/7 (Kadokawa) Figure',
      price: 4900000,
      inStock: 20,
      description: 'Scale 1/7, Approximately 215mm in height.',
      imgURL:
        'https://product.hstatic.net/200000462939/product/10001_35bb2e843d92405e8303e8291747bcce_master.jpg',
    },
    {
      name: 'Mô Hình DragonBall Songoku',
      price: 739000,
      inStock: 15,
      description:
        'Hàng loại 1 - Mô Hình DragonBall Songoku vô cực 3 đầu thay thế cao 52cm nặng 4kg - Figure DragonBall - Có Hộp carton',
      imgURL:
        'https://bizweb.dktcdn.net/100/418/981/products/z4035734204274-12f428ac0e3e309cf429f00d467a5adb.jpg?v=1673586590863',
    },
    {
      name: 'Mô hình Yuzuriha',
      price: 5500000,
      inStock: 50,
      description: '[ Đặt Trước ] Mô hình Yuzuriha 1/7 Figure - Jigoku Raku',
      imgURL:
        'https://product.hstatic.net/200000041202/product/3569743_332b68150f6f460c95f1d4ea666c8aea.jpeg',
    },
    {
      name: 'METROID DREAD E.M.M.I.',
      price: 4300000,
      inStock: 5,
      description: 'Sản phẩm chính hãng từ Nhật Bản.',
      imgURL:
        'https://product.hstatic.net/1000160337/product/figma_metroid_dread_e.m.m.i__1__dc208707f4b942ce8ee1f3762cd6bd4b_master.jpg',
    },
    {
      name: 'Super Action Statue JoJos Bizarre Adventure Part.1 Dio Brando',
      price: 2850000,
      inStock: 30,
      description:
        'Nhân vật: Dio Brando Series: JoJos Bizarre Adventure Part.1 Hãng sản xuất: Medicos Entertainment Kích thước: 17cm Phát hành: 4/2024',
      imgURL:
        'https://product.hstatic.net/1000160337/product/super_action_statue_jojo_s_bizarre_adventure_part.1_dio_brando__5__1ea524b1c9994699895e57beb681824d_master.jpg',
    },
    {
      name: 'Onmyoji Shiranui Li Huo Jin Wu Ver. 1/5',
      price: 21000000,
      inStock: 5,
      description:
        'Onmyoji Shiranui Li Huo Jin Wu Ver. 1/5 Nhân vật: Shiranui Series: Onmyoji Tỷ lệ: 1/5 Hãng sản xuất: Animester Kích thước: 28cm Phát hành: 6/2024',
      imgURL:
        'https://product.hstatic.net/1000160337/product/onmyoji_shiranui_li_huo_jin_wu_ver._1__4__b05472fbfacf4917a866079d00d0a6a2_master.jpg',
    },
    {
      name: 'GUILTY GEAR -STRIVE- "Bridget" 1/7',
      price: 7600000,
      inStock: 5,
      description:
        'GUILTY GEAR -STRIVE- "Bridget" 1/7 Nhân vật: Bridget Series: GUILTY GEAR Tỷ lệ: 1/7 Hãng sản xuất: Broccoli Kích thước: 25cm Phát hành: 1/2024',
      imgURL:
        'https://product.hstatic.net/1000160337/product/guilty_gear_-strive-_bridget_1__10__c3df433a6f5847a683c10fba5ce7b3f0_master.jpg',
    },
  ];
}

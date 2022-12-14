// module.exports = {
//     title: 'Rustni birga o\'rganamiz',
//     description: 'Rust Dasturlash Tili',
//     themeConfig: {
//         nav: [
//           { text: 'Asosiy', link: '/' },
//           { text: 'Rust', link: '/guide/' },
//           { text: 'Sponsorlik', link: 'https://payme.uz/@ismoilovdev' },
//           { text: 'Dasturchi', link: 'https://github.com/ismoilovdevml' },
//           { text: 'Github', link: 'https://github.com/ismoilovdevml/learn-rust-lang' },
//         ],
//         sidebar: {
//           '/guide/':[
//             '',
//             'muqaddima',
//             'kirish',
//             'rust_1.0',
//             'rust_1.1',
//             'rust_1.2',
//             'rust_1.3',
//             'rust_2',
//           ]
//         }
//       }
//   }

import { defineUserConfig } from "vuepress";
import theme from "./configs/theme";
import plugins from "./configs/plugins";
import head from "./configs/head";

export default defineUserConfig({
  head,
  theme,
  plugins,
  base: "/",
  lang: "uz",
  title: "Rust Wiki",
  description: "Rust Dasturlash tiliga qaratilgan qo'llanma",
});

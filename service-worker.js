if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let b={};const f=e=>a(e,r),o={module:{uri:r},exports:b,require:f};i[r]=Promise.all(s.map((e=>o[e]||f(e)))).then((e=>(d(...e),b)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2013/07/01/ke-she-qing-qing/index.html",revision:"8ef26e13ec57e2266294d4e88cd9b852"},{url:"2022/10/22/stay-away-from-big-trucks/index.html",revision:"214e933f9e93db1069b6d0f23afab826"},{url:"2022/10/24/fangqiang-story/index.html",revision:"719c3ac52be528a357f8360f51df88c7"},{url:"2022/10/24/one-night-in-120/index.html",revision:"588232518a54a1eb9503198414fcf349"},{url:"2022/11/03/2022-11-3-jekyll-stg/index.html",revision:"cedeb7fcddf929237cac69aa007af867"},{url:"2022/11/11/hexo-stg/index.html",revision:"30d5ce87e4ddf8c438fdd8a2fc83b5bd"},{url:"2022/11/12/good-guys/index.html",revision:"36f70bcd331a5883623d6c66c391dccf"},{url:"2022/11/12/secondary-hospitals-stg/index.html",revision:"93725369e8894d858a926cd6a0642219"},{url:"2022/11/15/fangqiang-story/index.html",revision:"aaf89c1b2502538f97103d7538a58ef5"},{url:"2022/11/19/express-delivery-boy/index.html",revision:"ba8eb2c5eb7775d488384229ac003d0a"},{url:"2022/11/19/four-minutes/index.html",revision:"886c97aae5334b167d1aa297e82519ce"},{url:"2022/11/30/experiences-of-journalism/index.html",revision:"5c0c6bd3388fbcfd3460c580dcda19f6"},{url:"2022/11/30/shen-du-ding-zhi-hexo-bo-ke/index.html",revision:"4ed5021f1e1964a55b6131f163a54a3d"},{url:"2022/12/05/synchronize-updates-to-other-repositories/index.html",revision:"39bd420bc0e9c6b5c7fa602ab3968e04"},{url:"404/index.html",revision:"06f3b4c5581de8410843916caa88902e"},{url:"about/index.html",revision:"8b14abb20cd0999e5aebada0f38511e8"},{url:"archives/2013/07/index.html",revision:"36165c5cd2672ccc0e730bea1c9a2578"},{url:"archives/2013/index.html",revision:"6bccc696dfa1ef8ba423b7687167f9fe"},{url:"archives/2022/10/index.html",revision:"bfc95349aed42039bcd08246b77dcb85"},{url:"archives/2022/11/index.html",revision:"4ed6974cdb5d4471d7a8dd9e02fc0af0"},{url:"archives/2022/12/index.html",revision:"4cf8dc86c631b6fbda3a7c66f5d9df4e"},{url:"archives/2022/index.html",revision:"0ac06a4eb02c4a750d2fd26667c0a107"},{url:"archives/2022/page/2/index.html",revision:"9142a64bb84d817e810264c4c95f475f"},{url:"archives/index.html",revision:"be1afb243d6f4a44648ba09d057931db"},{url:"archives/page/2/index.html",revision:"a482dec5133b7b9b54f1e6e9a8900107"},{url:"bookmark/index.html",revision:"3128b25ab366ab1da09b2defb970f6e2"},{url:"books/index.html",revision:"5502d36513590c99660e9b6525df1a6d"},{url:"categories/index.html",revision:"5552047315061c7f26e76c185787492d"},{url:"contact/index.html",revision:"123d645ec167856ea27d82fa5645b53b"},{url:"css/bb.css",revision:"a13497fcf67377687248cad43633417c"},{url:"css/gitment.css",revision:"dcd15488193705c273213e72e5ebb7ce"},{url:"css/matery.css",revision:"bbe60dc8de3c9266993187ea3594c3be"},{url:"css/my-gitalk.css",revision:"3de42b649a2216cc9bbee350cde6a7e0"},{url:"css/my.css",revision:"8a46c5fb5bd87b9fdd647f8ae76e9dcc"},{url:"favicon.png",revision:"c6a9bea671cd87828e2bb5e785d2f07d"},{url:"friends/index.html",revision:"6c80ac57a25589bd677470aefd1b6fd9"},{url:"galleries/index.html",revision:"ec9263aadf0b3b09760dccef818f327d"},{url:"games/index.html",revision:"edcf650d1876f720ced948d77b428d8b"},{url:"image/favicon-192.png",revision:"aa3c03395a28f53ad6228353391f902f"},{url:"image/favicon-32.png",revision:"3127736bbff4999faee352617a8724f1"},{url:"image/favicon-512.png",revision:"23a5b0a204b7d490ab795c594043849e"},{url:"image/favicon.png",revision:"c6a9bea671cd87828e2bb5e785d2f07d"},{url:"img/404-bg.jpg",revision:"5be8fb9d9ba411f16f537df30e7fdff9"},{url:"img/about/bookmastbg.jpg",revision:"cc5ab82ca046c18761e8a1c872f2cfd4"},{url:"img/bg-little-universe.jpg",revision:"12ddb45072a7eac5c82688848d798ca7"},{url:"img/bg-material.jpg",revision:"785d4959e79a71b1ee6e16cf4860b486"},{url:"img/bg-walle.jpg",revision:"7cb6b55faedc609db81e4064c51a5cc4"},{url:"img/contact-bg.jpg",revision:"ba2c158502206077c2867d876c18c086"},{url:"img/home-bg.jpg",revision:"299a7e3d4b8f3916afb7083d20da7145"},{url:"img/icon_wechat.png",revision:"25c95b3b7508f2f0755b5a2f052a355c"},{url:"img/in-post/custom-hexo-blog/cdn-1.jpg",revision:"b0669cbb9dea2cc088bee943fd77997c"},{url:"img/in-post/custom-hexo-blog/cdn-2.jpg",revision:"152bff869affb92d8888787d39322ac4"},{url:"img/in-post/custom-hexo-blog/cdn-3.jpg",revision:"374be1b35a1e9618e8a233e73149035e"},{url:"img/in-post/custom-hexo-blog/domain-1.jpg",revision:"c47ec64ec651cc8c557efdcbefaa240e"},{url:"img/in-post/custom-hexo-blog/domain-2.jpg",revision:"abc951b6abc3823e0a1a641902877104"},{url:"img/in-post/custom-hexo-blog/domain-3.jpg",revision:"91515c4e2e417a42e1f343c329dd09fe"},{url:"img/in-post/custom-hexo-blog/domain-4.jpg",revision:"b7cf2ff36905e4ecef0062424cbdef48"},{url:"img/in-post/custom-hexo-blog/domain-5.jpg",revision:"0a45d1a37fc5eb8233e534ab26a525f4"},{url:"img/in-post/hexo-stg/blinkfox-1.jpg",revision:"4f55538e5c8a86e1e8309e02979a92a9"},{url:"img/in-post/hexo-stg/blinkfox-2.jpg",revision:"6c932136d5bd007e219a2ceadaf89d49"},{url:"img/in-post/hexo-stg/blinkfox-3.jpg",revision:"334ae531561266ad19713f9b389878fb"},{url:"img/in-post/hexo-stg/blinkfox-4.jpg",revision:"8197cc32707afde632c647e907046dce"},{url:"img/in-post/hexo-stg/blinkfox-5.jpg",revision:"74d8542b7b9f36aae15adc35dc728e0d"},{url:"img/in-post/hexo-stg/blinkfox-6.jpg",revision:"dea8b75b67f57e680ad0247e7b985819"},{url:"img/in-post/hexo-stg/blinkfox-7.jpg",revision:"22547840e1a937ce4b8a5fb2a6eea2db"},{url:"img/in-post/hexo-stg/blog-1.jpg",revision:"e06bdccfe3670bc029c72f4b5a925645"},{url:"img/in-post/hexo-stg/blog-2.jpg",revision:"0711554c4a73eee51bbb2b93e672edc3"},{url:"img/in-post/hexo-stg/blog-3.jpg",revision:"a3b0d868449d5e506d8959ad2d169509"},{url:"img/in-post/hexo-stg/blog-4.jpg",revision:"88b3f329557e35ea9f0526f21f9839d1"},{url:"img/in-post/hexo-stg/blog-5.jpg",revision:"5f0cbc5d4cda29b54bf17d3ef054223c"},{url:"img/in-post/hexo-stg/env-1.jpg",revision:"92e780e08395dccbcbe03c984fd7296a"},{url:"img/in-post/hexo-stg/env-2.jpg",revision:"8e72e6c599d049e98e85bada84f45e23"},{url:"img/in-post/hexo-stg/env-3.jpg",revision:"0b5cc3372d35e3347c19ef82ba6f5ff5"},{url:"img/in-post/hexo-stg/env-4.jpg",revision:"7d1d3940bf6d4734873716fce1c61b18"},{url:"img/in-post/hexo-stg/example-1.jpg",revision:"052aa7f10fd1a70b507ee2a8a422f8d3"},{url:"img/in-post/hexo-stg/example-2.jpg",revision:"3f968dfb0d7f842e2e493f031b146947"},{url:"img/in-post/hexo-stg/example-3.jpg",revision:"a335ebdaa552397e53bd50d2b7ce7b53"},{url:"img/in-post/hexo-stg/example-4.jpg",revision:"4d54eaba74e6eb654e986052ff31cc30"},{url:"img/in-post/hexo-stg/example-5.jpg",revision:"350ab4b435254fa95d6675d28d8e8cde"},{url:"img/in-post/hexo-stg/example-6.jpg",revision:"3b37a078ba89ea0e80095151d5a9e16c"},{url:"img/in-post/hexo-stg/example-7.jpg",revision:"e65b148768ec4b6c7aff842faada862a"},{url:"img/in-post/hexo-stg/example-8.jpg",revision:"93200c592eb726094028501b2691b924"},{url:"img/in-post/hexo-stg/git-1.jpg",revision:"0b3f81776a6a55fe62bf7d281af163b8"},{url:"img/in-post/hexo-stg/git-10.jpg",revision:"0ef11ee2f6fdeb1c2f3e439618c980d3"},{url:"img/in-post/hexo-stg/git-11.jpg",revision:"87979c599f66f5f2c47d248a31b55d58"},{url:"img/in-post/hexo-stg/git-12.jpg",revision:"dbc13bbcfe4093917df03274cb6d9bff"},{url:"img/in-post/hexo-stg/git-13.jpg",revision:"97ea2969c720714c8063645e64968f37"},{url:"img/in-post/hexo-stg/git-14.jpg",revision:"1468f5e19222ade57e492f789f1b03ea"},{url:"img/in-post/hexo-stg/git-15.jpg",revision:"aead067bef0a54557922f7f3a6798c8b"},{url:"img/in-post/hexo-stg/git-16.jpg",revision:"727512c4f2ae2a4ab5217f443b1dc793"},{url:"img/in-post/hexo-stg/git-2.jpg",revision:"0820edddda8f55a44607f38bd66fc6ea"},{url:"img/in-post/hexo-stg/git-3.jpg",revision:"357c1c53abeae3133ff30ed774862734"},{url:"img/in-post/hexo-stg/git-4.jpg",revision:"8650fd0e0489392b39c6797af24ae479"},{url:"img/in-post/hexo-stg/git-5.jpg",revision:"53d1c80b05e81f75bfa0a4fe13a6e19e"},{url:"img/in-post/hexo-stg/git-6.jpg",revision:"c62898e56c60a3641918e526428ba19c"},{url:"img/in-post/hexo-stg/git-7.jpg",revision:"ec2578157d5a0890446f1e1c8a7318b4"},{url:"img/in-post/hexo-stg/git-8.jpg",revision:"00c2ca0c6de295c179e5f3d7f12c51bc"},{url:"img/in-post/hexo-stg/git-9.jpg",revision:"81c9f58a47f4075be643ac0362f82ce1"},{url:"img/in-post/hexo-stg/myblog-1.jpg",revision:"2d99e80eade9704295f2bdf3e923cf7f"},{url:"img/in-post/hexo-stg/myblog-10.jpg",revision:"24d3d02317eb2cbc07b6d16b316198c5"},{url:"img/in-post/hexo-stg/myblog-11.jpg",revision:"a249caef8d68924fc59b74f7bd9894fb"},{url:"img/in-post/hexo-stg/myblog-12.jpg",revision:"8e74956dbeae001e1df827f779f03018"},{url:"img/in-post/hexo-stg/myblog-13.jpg",revision:"77c3a76db1e88be45a01fcdc47fc5339"},{url:"img/in-post/hexo-stg/myblog-14.jpg",revision:"be6b7486390936b5d0dc165d4a3ee73a"},{url:"img/in-post/hexo-stg/myblog-15.jpg",revision:"7be076256afa52488e5ee65f2d686ab4"},{url:"img/in-post/hexo-stg/myblog-16.jpg",revision:"a3fc8e977d63b247ab16b6efb8c0da4c"},{url:"img/in-post/hexo-stg/myblog-17.jpg",revision:"bcae6ccb384f67b35362bb0941cbc667"},{url:"img/in-post/hexo-stg/myblog-18.jpg",revision:"f4b4eb540c50905d2afc93889c4b0c86"},{url:"img/in-post/hexo-stg/myblog-19.jpg",revision:"4cafc6fbcaef163ad1fc57133c818ec3"},{url:"img/in-post/hexo-stg/myblog-2.jpg",revision:"9d921c1fb748ecf259225f93df981d8c"},{url:"img/in-post/hexo-stg/myblog-20.jpg",revision:"cc09d61fb9c78769d85a70c6e8649d4e"},{url:"img/in-post/hexo-stg/myblog-21.jpg",revision:"34f2d025176d30680331c08bbd5a2ae6"},{url:"img/in-post/hexo-stg/myblog-22.jpg",revision:"0259da9d5c644fecc176bd874ac297af"},{url:"img/in-post/hexo-stg/myblog-23.jpg",revision:"fbb89c73c95a89fc89cf449a73dac1ca"},{url:"img/in-post/hexo-stg/myblog-24.jpg",revision:"79ae37746f58767fa8a567488b370c3e"},{url:"img/in-post/hexo-stg/myblog-25.jpg",revision:"ea6bbbc7c702fd3f66f84a6ec1b47aad"},{url:"img/in-post/hexo-stg/myblog-26.jpg",revision:"2c8cd9f2b84e921a0c04aa61df518aa6"},{url:"img/in-post/hexo-stg/myblog-27.jpg",revision:"40588100dded08dd83bc1a47450ee05c"},{url:"img/in-post/hexo-stg/myblog-28.jpg",revision:"c0f7f75ea195526d5a7be0a762a982aa"},{url:"img/in-post/hexo-stg/myblog-29.jpg",revision:"5fb78eaf39ff7f2a219665c9134367df"},{url:"img/in-post/hexo-stg/myblog-3.jpg",revision:"9b23a91ce43f6d321b0bdb491d45d62d"},{url:"img/in-post/hexo-stg/myblog-30.jpg",revision:"90bf1930510e8021eef1f6ced8f2e60c"},{url:"img/in-post/hexo-stg/myblog-31.jpg",revision:"7ed5b5e68f100da576a9fb66a76861d6"},{url:"img/in-post/hexo-stg/myblog-32.jpg",revision:"ce2cda2049d5a68b754ee5cdd5a3475b"},{url:"img/in-post/hexo-stg/myblog-33.jpg",revision:"e22d51a63deb21607585001531f80261"},{url:"img/in-post/hexo-stg/myblog-34.jpg",revision:"e954f8761daa69a7b012dcc8290f7196"},{url:"img/in-post/hexo-stg/myblog-35.jpg",revision:"96bd8490afac111af4a6fd3ada41143d"},{url:"img/in-post/hexo-stg/myblog-36.jpg",revision:"8cf3f8a60a3a2861d853ce2ba2d756b7"},{url:"img/in-post/hexo-stg/myblog-37.jpg",revision:"b9c46bff21dfc4df1227e9fab4ec006d"},{url:"img/in-post/hexo-stg/myblog-4.jpg",revision:"84a00b60d546bfae1a76bccb3511e420"},{url:"img/in-post/hexo-stg/myblog-5.jpg",revision:"0ec2c87323aebe6362ecf16fadd0060d"},{url:"img/in-post/hexo-stg/myblog-6.jpg",revision:"b1229a864abae289c3d08a39a279dbac"},{url:"img/in-post/hexo-stg/myblog-7.jpg",revision:"a67d3b63cb93a53a985584964d34e89c"},{url:"img/in-post/hexo-stg/myblog-8.jpg",revision:"caf57a98183cff385894d136689c2545"},{url:"img/in-post/hexo-stg/myblog-9.jpg",revision:"774ba0a250fafcaaa427b19f49d24d66"},{url:"img/in-post/hexo-stg/Node.js-1.jpg",revision:"d034d2f4c95cf2074182da52f159301f"},{url:"img/in-post/hexo-stg/Node.js-10.jpg",revision:"618ffd028dd4520cabf5c7ae58400d30"},{url:"img/in-post/hexo-stg/Node.js-2.jpg",revision:"c163321c7fea9f11b956e741bf137d0a"},{url:"img/in-post/hexo-stg/Node.js-3.jpg",revision:"9104a0b6523d4003f5d64832cdde337b"},{url:"img/in-post/hexo-stg/Node.js-4.jpg",revision:"39d4f76f28dd8fa5a60f0384dd815a91"},{url:"img/in-post/hexo-stg/Node.js-5.jpg",revision:"52f958686b504fba5733fab31c2cbda3"},{url:"img/in-post/hexo-stg/Node.js-6.jpg",revision:"8c1dcb05352290a7918dd307cd4f7e76"},{url:"img/in-post/hexo-stg/Node.js-7.jpg",revision:"0eedad423551cd301ab2c69644a0b001"},{url:"img/in-post/hexo-stg/Node.js-8.jpg",revision:"a9e165b76682526a21cd7bde083d39df"},{url:"img/in-post/hexo-stg/Node.js-9.jpg",revision:"6f9a89e693bcfb7572a508e51e3e84eb"},{url:"img/in-post/hexo-stg/nodejsgif-1.gif",revision:"4280a4f90083108e60e166e2a4ac8ab3"},{url:"img/in-post/hexo-stg/problems-1.jpg",revision:"aa740a9bac90d83cda52bb3c8b80cc5d"},{url:"img/in-post/hexo-stg/problems-2.jpg",revision:"1b42682f94c3db83f151084fdd50daa6"},{url:"img/in-post/hexo-stg/problems-3.jpg",revision:"d3046d997c0de2e1f5520a37eef0fe9e"},{url:"img/in-post/jekyll-stg/example-1.jpg",revision:"101df00a6e0a0f7487790fb23d4cdacd"},{url:"img/in-post/jekyll-stg/example-2.jpg",revision:"d410e374defc65405bbbfc9faa4ce6e6"},{url:"img/in-post/jekyll-stg/example-3.jpg",revision:"72adaee4957dff677c2bc87e776a68ca"},{url:"img/in-post/jekyll-stg/example-4.jpg",revision:"8043f6442fe4f661290b4f64f3819b0a"},{url:"img/in-post/jekyll-stg/example-5.jpg",revision:"40c863bc91a0fbf8944ce4fe57169189"},{url:"img/in-post/jekyll-stg/github-1.jpg",revision:"7d9e564e792a15d080c5bd63b9383753"},{url:"img/in-post/jekyll-stg/github-10.jpg",revision:"b32316d8bdd53a3932213d3c7dfce77d"},{url:"img/in-post/jekyll-stg/github-11.jpg",revision:"cf1b8c6e3da92b65943c7eb00d50e33c"},{url:"img/in-post/jekyll-stg/github-12.jpg",revision:"57a47a20aac9c06a81fb018f3ffd00df"},{url:"img/in-post/jekyll-stg/github-13.jpg",revision:"081d16032779782a1039ca67eaea065f"},{url:"img/in-post/jekyll-stg/github-14.jpg",revision:"9b0fea070e3dfbbd359e4e17be58e0f8"},{url:"img/in-post/jekyll-stg/github-2.jpg",revision:"957734ed851630366232a61ceef11ac8"},{url:"img/in-post/jekyll-stg/github-3.jpg",revision:"9fed8ac3542fc6e53240a2cd239b11c9"},{url:"img/in-post/jekyll-stg/github-4.jpg",revision:"e56c2bd6e3a5bae256752da90c5fa349"},{url:"img/in-post/jekyll-stg/github-5.jpg",revision:"161789b700e49b692a4c28cd22f4a8f9"},{url:"img/in-post/jekyll-stg/github-6.jpg",revision:"f01a423c3819b34d7da4953c0854e769"},{url:"img/in-post/jekyll-stg/github-7.jpg",revision:"1b0d840d1080a83415aff39e43a6b1ec"},{url:"img/in-post/jekyll-stg/github-8.jpg",revision:"459a867792ef7c242a1f5fa09a16c539"},{url:"img/in-post/jekyll-stg/github-9.jpg",revision:"ecb7746aa5d1eec884a90b2ef9f5c7b3"},{url:"img/in-post/jekyll-stg/hux-1.jpg",revision:"ee17c53b7325a52a87404d8066657f57"},{url:"img/in-post/jekyll-stg/hux-10.jpg",revision:"32587ab4793115354b822a5e37be7dda"},{url:"img/in-post/jekyll-stg/hux-11.jpg",revision:"6484cee7770072b97785811ae01bfc06"},{url:"img/in-post/jekyll-stg/hux-12.jpg",revision:"32eff08cdb6248a2eb353919f243616a"},{url:"img/in-post/jekyll-stg/hux-2.jpg",revision:"4019addea8fc8f1334727070ba638f71"},{url:"img/in-post/jekyll-stg/hux-3.jpg",revision:"60a40eceb0659a89706dc7631c1de4f8"},{url:"img/in-post/jekyll-stg/hux-4.jpg",revision:"8cc8053e3cdf09eb1806e25159aa748c"},{url:"img/in-post/jekyll-stg/hux-5.jpg",revision:"4457925ba3fb54f4256e7af673cecd0a"},{url:"img/in-post/jekyll-stg/hux-6.jpg",revision:"c51a056d75a6b5193499bbc982db1dbe"},{url:"img/in-post/jekyll-stg/hux-7.jpg",revision:"93a7258a24df4dab7c6f61f1f6f1316d"},{url:"img/in-post/jekyll-stg/hux-8.jpg",revision:"75e6175462c30a1c0c7667ed96783256"},{url:"img/in-post/jekyll-stg/hux-9.jpg",revision:"37dd9f544e3141ee781e37d7ab76e8f5"},{url:"img/in-post/jekyll-stg/install-1.jpg",revision:"22413b7f2c4cd038164585f8b91b0994"},{url:"img/in-post/jekyll-stg/install-10.jpg",revision:"ef205f04db23e282ca7154cf9d6b2194"},{url:"img/in-post/jekyll-stg/install-11.jpg",revision:"50ecbbcc78e74b3efefdfc7eb515c39f"},{url:"img/in-post/jekyll-stg/install-2.jpg",revision:"54a8ea920681c14d2d7d167415ef1577"},{url:"img/in-post/jekyll-stg/install-3.jpg",revision:"454af2b956d4d4bed30886de230af7ad"},{url:"img/in-post/jekyll-stg/install-4.jpg",revision:"1e27d16b67b964c264ae91b30559146f"},{url:"img/in-post/jekyll-stg/install-5.jpg",revision:"86c5e3a750e7c48a5ff9bfc354f37d95"},{url:"img/in-post/jekyll-stg/install-6.jpg",revision:"c62d298f681bd181c77a932751104db5"},{url:"img/in-post/jekyll-stg/install-7.jpg",revision:"b224ea3290098580010f0537f15a019e"},{url:"img/in-post/jekyll-stg/install-8.jpg",revision:"3d82bb7626d71f2b0a1f4418fcf6d3b5"},{url:"img/in-post/jekyll-stg/install-9.jpg",revision:"1407defa456988d95c2cef2413968809"},{url:"img/in-post/jekyll-stg/jekyll-1.jpg",revision:"5580499a461327716ee477ccfa9c65a6"},{url:"img/in-post/jekyll-stg/jekyll-2.jpg",revision:"42593d3d9dd57072912173c9a2ab4ee4"},{url:"img/in-post/jekyll-stg/jekyll-3.jpg",revision:"216e82d72f7e8b125d92a1ddeac2d151"},{url:"img/in-post/jekyll-stg/jekyll-4.jpg",revision:"9d9d4337c2aac352c8fdeeda79807f1d"},{url:"img/in-post/jekyll-stg/jekyll-5.jpg",revision:"ab0650d52599ba7636b2dc4424b140db"},{url:"index.html",revision:"7c6321cfdc2013ab0eb93c593004bf2b"},{url:"js/matery.js",revision:"c2d4306a24948ffd6f7f853449c2e44b"},{url:"libs/animate/animate.min.css",revision:"178b651958ceff556cbc5f355e08bbf1"},{url:"libs/aos/aos.css",revision:"04140612fb8b418cda27dee6ecf61042"},{url:"libs/aos/aos.js",revision:"9cc58a148779953a5ebe9360d6cf978c"},{url:"libs/aplayer/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"libs/aplayer/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"libs/awesome/css/all.css",revision:"0e6a8d020eceb660ebe98adad8639825"},{url:"libs/awesome/webfonts/fa-brands-400.eot",revision:"451b51d8700fb035bcaaa9e8710b384a"},{url:"libs/awesome/webfonts/fa-brands-400.svg",revision:"8528edfd60e8bc4274c0eadf6b121a3c"},{url:"libs/awesome/webfonts/fa-brands-400.ttf",revision:"189c0326f75931886d5b60cde8b5628f"},{url:"libs/awesome/webfonts/fa-brands-400.woff",revision:"85b063debeb5d5f079776ac1a9c924cb"},{url:"libs/awesome/webfonts/fa-brands-400.woff2",revision:"0425d661f34ffa46604c9dfa344c03bb"},{url:"libs/awesome/webfonts/fa-regular-400.eot",revision:"b6579220162705be426ad4db0dc43f6b"},{url:"libs/awesome/webfonts/fa-regular-400.svg",revision:"ec9318dc8ba3ec3cbb379f2d40f300cb"},{url:"libs/awesome/webfonts/fa-regular-400.ttf",revision:"9230982faf6ed4d1dab07babfb813777"},{url:"libs/awesome/webfonts/fa-regular-400.woff",revision:"14f22fbed8146dbf3b497bb32d8491b0"},{url:"libs/awesome/webfonts/fa-regular-400.woff2",revision:"772a0f14c850c8b0dfe283a95857583e"},{url:"libs/awesome/webfonts/fa-solid-900.eot",revision:"1898ebd2e3162e7ca8627073d865b893"},{url:"libs/awesome/webfonts/fa-solid-900.svg",revision:"f331e75b803f42d96aaba8540f29d3b3"},{url:"libs/awesome/webfonts/fa-solid-900.ttf",revision:"b1161bce5381a5fa7aacc073e1a01dd3"},{url:"libs/awesome/webfonts/fa-solid-900.woff",revision:"db525089f5101b59a66184d109e6f917"},{url:"libs/awesome/webfonts/fa-solid-900.woff2",revision:"4cc04a31c42f2f9d951547bbce75960b"},{url:"libs/background/canvas-nest.js",revision:"a62fd97db8d4bce3a5e30406831e398d"},{url:"libs/background/ribbon-dynamic.js",revision:"eb6e9d5f62d717fa62445227883dc7b7"},{url:"libs/background/ribbon-refresh.min.js",revision:"6692e63df52b5230e673fc0a3aea5534"},{url:"libs/background/ribbon.min.js",revision:"52d83827dd2784a3d41b65694a6534e5"},{url:"libs/codeBlock/codeBlockFuction.js",revision:"1f379c32001349805cb987371cfccd1a"},{url:"libs/codeBlock/codeCopy.js",revision:"efa20c294ac279ca9c5a55e4299b80be"},{url:"libs/codeBlock/codeLang.js",revision:"dc4533be151964237f2a0006db27e5fa"},{url:"libs/codeBlock/codeShrink.js",revision:"ae277c5d8f8336fce64f89203b926d19"},{url:"libs/cryptojs/crypto-js.min.js",revision:"a39fc84fa7659e1d898bbcddf20aa989"},{url:"libs/dplayer/DPlayer.min.css",revision:"31ac9b1a5a7f018dcc9a0e0f66261c08"},{url:"libs/dplayer/DPlayer.min.js",revision:"4097986cff510567068128f4b18004a6"},{url:"libs/echarts/echarts.min.js",revision:"b4af19a834bf7cd6435dd8e1ad24cc90"},{url:"libs/gitalk/gitalk.css",revision:"e4369194a22c7aaf65af93b2a04edb94"},{url:"libs/gitalk/gitalk.min.js",revision:"7526181d13660d1e4a2bbb3795d73120"},{url:"libs/gitment/gitment-default.css",revision:"46f304e637384c546f25b5ad90f0fe5a"},{url:"libs/gitment/gitment.js",revision:"2d64177544df22f08ccc1c86fc181e0e"},{url:"libs/instantpage/instantpage.js",revision:"47fcedd7bba8eb1ad3b035c8727f06b5"},{url:"libs/jqcloud/jqcloud-1.0.4.min.js",revision:"b5b4d1002ff256e9bed2b339f572dedc"},{url:"libs/jqcloud/jqcloud.css",revision:"978ed746c5673321fba8401ed6a536ac"},{url:"libs/jquery/jquery.min.js",revision:"f832e36068ab203a3f89b1795480d0d7"},{url:"libs/lightGallery/css/lightgallery.min.css",revision:"a94c4de3d8028fc56b148e8f66524e59"},{url:"libs/lightGallery/fonts/lg.eot",revision:"ecff11700aad0000cf3503f537d1df17"},{url:"libs/lightGallery/fonts/lg.svg",revision:"ae76f83708ae62e5a96d38e808392505"},{url:"libs/lightGallery/fonts/lg.ttf",revision:"4fe6f9caff8b287170d51d3d71d5e5c6"},{url:"libs/lightGallery/fonts/lg.woff",revision:"5fd4c338c1a1b1eeeb2c7b0a0967773d"},{url:"libs/lightGallery/img/loading.gif",revision:"bbdac9cda255c54bfd809110aff87898"},{url:"libs/lightGallery/img/video-play.png",revision:"d672259b56b5dd1abdff3a98d87864e8"},{url:"libs/lightGallery/img/vimeo-play.png",revision:"a951123e4f7cb5d037a6a872f001a8af"},{url:"libs/lightGallery/img/youtube-play.png",revision:"6267452d4f9c32c7550cec6587f985d3"},{url:"libs/lightGallery/js/lightgallery-all.min.js",revision:"d7491b79ebda3ba2356e81aac93e62ea"},{url:"libs/masonry/masonry.pkgd.min.js",revision:"d5761132889fee4a606e54d26675d2ea"},{url:"libs/materialize/materialize.min.css",revision:"3a5681d6939e48ba5038fbf8f9f244a2"},{url:"libs/materialize/materialize.min.js",revision:"87d84bf8b4cc051c16092d27b1a7d9b3"},{url:"libs/minivaline/MiniValine.js",revision:"e5daebb3b28977819ad51a62d38a52b9"},{url:"libs/others/busuanzi.pure.mini.js",revision:"4c9a89414b97bb2053ccc7cb83c83b6e"},{url:"libs/others/clicklove.js",revision:"6a3861c11c04010dd4de27c162cb8a83"},{url:"libs/prism/prism.css",revision:"9de440b6e18b43a39139958655391e18"},{url:"libs/scrollprogress/scrollProgress.min.js",revision:"63212ebfb10736224d44bcda8a155278"},{url:"libs/share/css/share.min.css",revision:"a5d28161d70468ec2378da676284a34f"},{url:"libs/share/fonts/iconfont.eot",revision:"e83ffaa95463f987abe5db5bbbe303cc"},{url:"libs/share/fonts/iconfont.svg",revision:"6b3cbfae255ab1f2c1e8e8bfc80754d4"},{url:"libs/share/fonts/iconfont.ttf",revision:"9ac2cc5ae8616eb50c033525dc14a5eb"},{url:"libs/share/fonts/iconfont.woff",revision:"bf0fc2ec6e2a614635e0ab6e81d059ef"},{url:"libs/share/js/jquery.share.min.js",revision:"044c903516dd20036471d65d5269821c"},{url:"libs/share/js/social-share.min.js",revision:"7d8197222dcdbe0e7e645a605bf76851"},{url:"libs/tocbot/tocbot.css",revision:"a260895566c6a9f968a9101d5510f7d6"},{url:"libs/tocbot/tocbot.min.js",revision:"6046c9a66555218b41b6219737579a89"},{url:"libs/valine/av-min.js",revision:"df7538b359e7a7e904c430e8385b44da"},{url:"libs/valine/Valine.min.js",revision:"3c37a47598a8970c84db5591f01c483d"},{url:"medias/avatar-1.jpg",revision:"415de4d5d462d6bd318c09824113e54e"},{url:"medias/avatar-2.png",revision:"24a2381c6f0909a9535340ef0a9c8afa"},{url:"medias/avatar.png",revision:"76f7880ea6767c0d7e61a405ccee49b1"},{url:"medias/banner/0.jpg",revision:"68e0824b8a6f0e2872cd618daa995a4f"},{url:"medias/banner/1.jpg",revision:"e6cea449760df8213e3607d95c22dece"},{url:"medias/banner/10.jpg",revision:"c05f7b0eb22ba3bd449ad4a16bbc579c"},{url:"medias/banner/11.jpg",revision:"a6bec7b902188b2b949c4b63d4cf1e68"},{url:"medias/banner/12.jpg",revision:"a662ce81ae87979683b963ddc05dd83c"},{url:"medias/banner/13.jpg",revision:"a269fbc64466b90603c5482e30cc25ff"},{url:"medias/banner/14.jpg",revision:"e9915b1357843d3809b168852e862f75"},{url:"medias/banner/15.jpg",revision:"0c0c2ce318ba46b4f6fa345f8aa4a7ed"},{url:"medias/banner/16.jpg",revision:"f3f63c6e256f50c7f658b5156b7c9bac"},{url:"medias/banner/2.jpg",revision:"1aeac609e453aff1204e3aaec223dbe6"},{url:"medias/banner/3.jpg",revision:"4a66b18d245eda599e125b2aaa8d29b4"},{url:"medias/banner/4.jpg",revision:"04d4535952cf16d6ba9737a0f904c86a"},{url:"medias/banner/5.jpg",revision:"3f946574a1f6732ef412a90537a6bbe6"},{url:"medias/banner/6.jpg",revision:"c7c34bf24a5b578f9bbdc22a2db358f3"},{url:"medias/banner/7.jpg",revision:"439c338a8661638f2d1f4f5de5797581"},{url:"medias/banner/8.jpg",revision:"f440faee973ff7d68a1c1245378a2a22"},{url:"medias/banner/9.jpg",revision:"7e01a4de3969b77732f28475f6287c1c"},{url:"medias/comment_bg.png",revision:"04208f25e34b8f29f072efbb2e212c86"},{url:"medias/contact.png",revision:"05f80f75317895d4d6a5c0b39c18236e"},{url:"medias/cover-1.jpg",revision:"1253d8cf7abf8e92af47bda2bf61bd84"},{url:"medias/cover.jpg",revision:"a269fbc64466b90603c5482e30cc25ff"},{url:"medias/featureimages/0.jpg",revision:"473be3c86b9211b77ed365204bd7f87f"},{url:"medias/featureimages/1.jpg",revision:"4ebe489865fcff86e5fb661412c19423"},{url:"medias/featureimages/10.jpg",revision:"fa52298fce0c094c98e8c43846ca63ac"},{url:"medias/featureimages/11.jpg",revision:"dd5bf1e03d899140d1b5822d9473ed75"},{url:"medias/featureimages/12.jpg",revision:"9d0631f4abe453ddae1f22f97f272dc4"},{url:"medias/featureimages/13.jpg",revision:"f85c3673d0b939af34963d85bba80bdd"},{url:"medias/featureimages/14.jpg",revision:"e09ecc91da27a15e914b3bd0f8ac0cdc"},{url:"medias/featureimages/15.jpg",revision:"5332d28a20fa95401007cec27deb46bd"},{url:"medias/featureimages/16.jpg",revision:"f661db95d59ddaff7551e446fafd1e13"},{url:"medias/featureimages/17.jpg",revision:"3ff343510601f66bbe267194f4c9d63a"},{url:"medias/featureimages/18.jpg",revision:"1bc9051a5213af56182d4ea74a4759b1"},{url:"medias/featureimages/19.jpg",revision:"43dc9c88176ec69fd97d5da6032d2e16"},{url:"medias/featureimages/2.jpg",revision:"5dc5014f7171b7fa6d42761328b03ea3"},{url:"medias/featureimages/20.jpg",revision:"28b9bcf311fe219c7f539f399ae9baa8"},{url:"medias/featureimages/21.jpg",revision:"280f19955af42e06d0fd67b02abe0b87"},{url:"medias/featureimages/22.jpg",revision:"49daec6162278852256aea46e431c64a"},{url:"medias/featureimages/23.jpg",revision:"5a7ee0a21ee34c4905590eaf4d7f7a49"},{url:"medias/featureimages/24.jpg",revision:"9d3fc1310b7a6b837c061523afa2a731"},{url:"medias/featureimages/25.jpg",revision:"17ecfafbf5e95b4419523d39ca88da69"},{url:"medias/featureimages/26.jpg",revision:"8d0d4a8856f45358bd0c6f9fc7506bcb"},{url:"medias/featureimages/27.jpg",revision:"ba16e2419b8861e9f5da803f6f30ad3c"},{url:"medias/featureimages/28.jpg",revision:"07c339624bd60bc3d021263361a28672"},{url:"medias/featureimages/29.jpg",revision:"bdfa3e2cecc1045c0badbe9762138175"},{url:"medias/featureimages/3.jpg",revision:"b2eacb5b0f10ba763e3cf4da321ecf65"},{url:"medias/featureimages/30.jpg",revision:"171809a1f8ba142da284e3e0b29d3a19"},{url:"medias/featureimages/31.jpg",revision:"4dd9f72628de66048d2b1afd96d22b0c"},{url:"medias/featureimages/32.jpg",revision:"38aaff1bb20e7d6a4b455c907f7a4892"},{url:"medias/featureimages/33.jpg",revision:"7c393fd921782845c64753daf032bf36"},{url:"medias/featureimages/34.jpg",revision:"052f98b2b881e96564c69137bcb274fd"},{url:"medias/featureimages/35.jpg",revision:"ac9b9ce1533e5016f30f03bc78ae1289"},{url:"medias/featureimages/36.jpg",revision:"98b7e4334d31cca43e1cb6dd56102809"},{url:"medias/featureimages/37.jpg",revision:"7f1d8990ca849ffc98fff0af849ca3d4"},{url:"medias/featureimages/38.jpg",revision:"ef57411fe2e2fd4c9e9a167fecd63619"},{url:"medias/featureimages/39.jpg",revision:"c11a9d22993c420850d6eab37c56f71f"},{url:"medias/featureimages/4.jpg",revision:"caa6eb230ae80472b5226a26cb047826"},{url:"medias/featureimages/40.jpg",revision:"bd847c13b15a03bf8dc72295a18e27fd"},{url:"medias/featureimages/41.jpg",revision:"79f913c01a83305f5e329b651eb2244f"},{url:"medias/featureimages/42.jpg",revision:"30121b71be39baa0bf9466e316724da9"},{url:"medias/featureimages/43.jpg",revision:"30121b71be39baa0bf9466e316724da9"},{url:"medias/featureimages/44.jpg",revision:"8fcd1429435e1137456dda6664b36601"},{url:"medias/featureimages/45.jpg",revision:"511bc8ac67c2e71d08c805e91d9f8d5b"},{url:"medias/featureimages/46.jpg",revision:"fe87d82e6ed7888cd197ae152a9edbff"},{url:"medias/featureimages/47.jpg",revision:"6e9962cac6cdef2f5da05d8d555a7cb7"},{url:"medias/featureimages/48.jpg",revision:"fbb443c2536df825773b39934ded2067"},{url:"medias/featureimages/49.jpg",revision:"d40525985eca33f83889a1b7189b6308"},{url:"medias/featureimages/5.jpg",revision:"fba50753f5f3b6bd434affd80efb8564"},{url:"medias/featureimages/50.jpg",revision:"fb3911df04eecdb2cee0a65b978763e3"},{url:"medias/featureimages/51.jpg",revision:"80310fc548db8908064bc6885cc4556f"},{url:"medias/featureimages/52.jpg",revision:"94568290e90c1c4ffa18a6ea0238db03"},{url:"medias/featureimages/53.jpg",revision:"703813d2435591fe37dfedaf3912e4d5"},{url:"medias/featureimages/54.jpg",revision:"c11235b344f8198dd8278b910141d435"},{url:"medias/featureimages/55.jpg",revision:"73d7663c6ae2d52c8b3c1d90ae6a8e29"},{url:"medias/featureimages/56.jpg",revision:"657750fae4aa0fbede985ada34b32bc6"},{url:"medias/featureimages/57.jpg",revision:"96a492d8354da420c056ad78d1462389"},{url:"medias/featureimages/58.jpg",revision:"9fe30ce282b1fadd80138cacb862c750"},{url:"medias/featureimages/59.jpg",revision:"c56d6b33ed598de33cd9f1308609400b"},{url:"medias/featureimages/6.jpg",revision:"3a1bac354c02e1c63f835737da741c6f"},{url:"medias/featureimages/60.jpg",revision:"cf76d376d7368e5f2f0b913cbba4dfae"},{url:"medias/featureimages/61.jpg",revision:"1ade5f23e7b27c9e1fed25ab5e074304"},{url:"medias/featureimages/62.jpg",revision:"5034563344ea2ac8d0d7276747940ae3"},{url:"medias/featureimages/63.jpg",revision:"c3c9595b873dd424f7316ceef3841b7f"},{url:"medias/featureimages/64.jpg",revision:"3a5363af4c8cf1f29b9ae1e820481ff9"},{url:"medias/featureimages/65.jpg",revision:"23181e3e9761fd1f9641ad37eeea3e5c"},{url:"medias/featureimages/7.jpg",revision:"6f96c9e09b5ecde8384d6768499cd9ad"},{url:"medias/featureimages/8.jpg",revision:"bd049fd85c431dfabc9eb11a7385fd68"},{url:"medias/featureimages/9.jpg",revision:"9fc29888c74085f676c728a972aeb47c"},{url:"medias/icp.png",revision:"60aa047315ba11596d9f954900c86fdb"},{url:"medias/logo.png",revision:"15eee466c1068b3b510a0cae0c1dba5a"},{url:"medias/reward/alipay.gif",revision:"b00a1ca61f2044ea6f939be2c9fa30d4"},{url:"medias/reward/wechat.gif",revision:"589cf8a30b1e3e9c78f474adfe98abc9"},{url:"medias/videos/demo-pic.png",revision:"07ca3e9d18c048d8665de45f9e84688c"},{url:"Medical-News/index.html",revision:"6b4ed6409c44832432cded855f8593cb"},{url:"movies/index.html",revision:"1f81bf958368c4ee30ed0e03136cf3a2"},{url:"music/index.html",revision:"c10096ded262b695c7c414bcd384d630"},{url:"page/2/index.html",revision:"65416402a2d1c49be21a2df7f7427807"},{url:"policy/index.html",revision:"84234b9cff027d98c0aafa40ad011ad7"},{url:"relax/index.html",revision:"5f2514374f8b72bbdc6301ee4df4ed5b"},{url:"tags/index.html",revision:"dc375164ae27250cf84156cc88562e37"},{url:"tags/从入门到放弃/index.html",revision:"93dd3303c3d6e8081c6a16217cb9623f"},{url:"tags/吃瓜日常/index.html",revision:"6cab24f539755947399cd23303858014"},{url:"tags/摘录/index.html",revision:"99adf3769c453bbe24fe28f0ba621e54"},{url:"tags/科普/index.html",revision:"2788f8e8b2372d99cc52d35ff3ea0087"},{url:"tags/美丽心情/index.html",revision:"9dae11ba209d73c2ec702f00d1e1f711"},{url:"tags/计算机/index.html",revision:"43290c7e29061d26a0f3a665e3094740"},{url:"websitebuilding/index.html",revision:"fc1f4974f8cae08604421f9b5b4960b1"}],{})}));
//# sourceMappingURL=service-worker.js.map

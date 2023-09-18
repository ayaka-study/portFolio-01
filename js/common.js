/*--------------------------------- */
//ハンバーガーメニュー　表示・非表示
/*--------------------------------- */
const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');

ham.addEventListener('click', function () {
  ham.classList.toggle('active');
  nav.classList.toggle('active');
});


/*--------------------------------- */
//スクロールしたらハンバーガーメニュー表示
/*--------------------------------- */
window.addEventListener("scroll", function () {
  const scrollY = window.scrollY || window.scrollY;

  if (scrollY >= 520) {
    const menu = document.getElementById("js-header");
    if (menu) {
      menu.style.opacity = "1";
    }
  } else {
    const menu = document.getElementById("js-header");
    if (menu) {
      menu.style.opacity = "0";
    }
  }
});

/*--------------------------------- */
//スクロールしたらメインビジュアル拡大
/*--------------------------------- */

const images = document.querySelectorAll('#js-main img');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const middleImage = images[Math.floor(images.length / 2)];

  if (window.innerWidth > 600) {
    images.forEach((image, index) => {
      const imageHeight = image.clientHeight;
      const imageOffsetTop = image.getBoundingClientRect().top;
      if (index === Math.floor(images.length / 2)) {
        const scale = 1 + (scrollY / 500);
        middleImage.style.transform = `scale(${scale})`;
        middleImage.style.transformOrigin = 'center center';
        middleImage.style.overflow = 'hidden';
        middleImage.style.display = 'block';
      } else {
        const distanceFromCenter = Math.abs(index - Math.floor(images.length / 2));
        const opacity = 3 - distanceFromCenter * 0.1 - (scrollY / 600);
        image.style.opacity = opacity < 0 ? 0 : opacity;
      }
    });
  } else {
    // images.forEach(image => {
    //   image.style.display = 'block';
    //   image.style.transform = 'scale(1)';
    //   image.style.opacity = 1;
    // });
  }
});

// window.addEventListener('scroll', () => {
//   // スクロール位置を取得
//   let scroll = window.scrollY || window.pageYOffset;
//   let middleImage = document.querySelector('#js-main img');
//   let windowWidth = window.innerWidth;
//   let middleImageWidth = 100; // 中央の画像の初期幅（%）

//   // PC表示の場合（画面幅が900pxより大きい場合）
//   if (windowWidth > 900) {
//     // 中央の画像の拡大率を設定（適切な値に調整）
//     let scalePercentage = 100 + scroll / 10; // 適切な値に調整
//     middleImage.style.transform = `scale(${scalePercentage / 100})`;

//     // 両端の画像を非表示にする
//     let allImages = document.querySelectorAll('#js-main img');
//     allImages.forEach(image => {
//       if (image !== middleImage) {
//         //image.style.display = 'none';

//       }
//     });
//   } else {
//     // スマホ表示の場合（画面幅が900px以下の場合）
//     // すべての画像を表示
//     let allImages = document.querySelectorAll('#js-main img');
//     allImages.forEach(image => {
//       image.style.display = 'block';
//       image.style.transform = 'scale(1)'; // 拡大率をリセット
//     });
//   }
// });








/*--------------------------------- */
//フェードイン
/*--------------------------------- */
document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll('.js-fadein');

  function handleScroll() {
    elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top >= 0 && rect.bottom <= windowHeight) {
        element.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', handleScroll);

  handleScroll();
});

/*--------------------------------- */
//アクセス背景画像
/*--------------------------------- */
class ParallaxEffectBackground {
  constructor() {
    this.devided = 5;
    this.target = '.js-access';
    this.setBackgroundPosition();
  }

  getScrollTop() {
    return Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop,
      window.scrollY
    );
  }

  setBackgroundPosition() {
    document.addEventListener('scroll', e => {
      const scrollTop = this.getScrollTop();
      const position = scrollTop / this.devided;
      if (position) {
        document.querySelectorAll(this.target).forEach(element => {
          element.style.backgroundPosition = 'center top -' + position + 'px';
        });
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', event => {
  new ParallaxEffectBackground();
});








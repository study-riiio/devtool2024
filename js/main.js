//選択したタブを表示

const showTab = (selector) => {
  console.log(selector);

  /* 1. タブの選択状態のリセット */
  //すべての.tabs-menu > liからactiveクラスを削除
  $('.tabs-menu > li').removeClass('active');

  //すべての.tabs-content > sectionを非表示
  $('.tabs-content > section').hide();

  /* 2. 選択されたタブの表示 */
  //a要素のhref属性がselectorと一致するものの親要素にだけactiveクラスを付ける
  $(`.tabs-menu a[href="${selector}"]`)
    .parent()
    .addClass('active');

  //.tabs-content > sectionのうち、selectorに該当するものだけを表示する
  $(selector).show();
};

//タブがクリックされたらコンテンツを表示
$('.tabs-menu a').on('click', (e) => {
  // hrefへのページ遷移を止める
  e.preventDefault();

  // hrefの値を受け取った後、showTab()関数に渡す。e.targetはクリックされたタブ（.tabs-menu a）を表す
  const selector = $(e.target).attr('href');
  showTab(selector);
});

// 初期状態として1番目のタブを表示
showTab('#tabs-1');
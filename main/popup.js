$(function () {
  /*자세히보기버튼(.more a)를 클릭하니까, 팝업(.popup)이 나타나고(fadeIn되고),
  x버튼(.close)을 클릭하니까, 팝업(.popup)이 사라진다(fadeOut).
  */
  $(".more a").click(function () {
    $(".popup").fadeIn();
  });//more a를 클릭했을 때
  $(".close").click(function () {
    $(".popup").fadeOut();
  });//close를 클릭했을 때
});//기본구조 끝
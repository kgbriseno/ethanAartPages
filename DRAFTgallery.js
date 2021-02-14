(function() {
  $(document).on("click", ".click-to-expand", function() {
    var imageSrc = $(this).parents(".grid-item").find("img").attr("src");
    $(".js-modal-image").attr("src", imageSrc);
  });
})();
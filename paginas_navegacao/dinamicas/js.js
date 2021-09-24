$(document).on("click", ".filtros a", function () {
    var filters = $(this).attr("data-filter");
    var grid = $("#todos").isotope({ filter: filters });
    var iso = grid.data("isotope");
    var filterCount = $("#contagem");
  
    filterCount.text(iso.filteredItems.length);
  
    $(".filtros a").removeClass("active");
    $(this).addClass("active");
  });
import "./style.scss"

$(() => {
  const modal = $(".modal");

  /* If class target elem. === modal, close popup */
  $(modal).on("click", (e) => {
    if (e.target.className === "modal") {
      $(modal).fadeOut("slow", "swing");
    }
  });

  /* Working with data-atributes */
  const modalHide = $("[data-modal]");

  $(modalHide).on("click", function (e) {
    e.preventDefault();
    let hide = $(this).data("modal");

    if (hide == "open") {
      $(modal).fadeIn("slow", "swing");
    }

    if (hide === "close" || hide === "cancel") {
      $(modal).fadeOut("slow", "swing");
    }

    if (hide === "uninstall") {
      $(modal).fadeOut("slow", "swing");
      setTimeout(() => {
        alert("DONE");
      }, 600);
    }
  });
});
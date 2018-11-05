// When the user scrolls down 20px from the top of the document, show the button
// get from w3 school
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scroll-to-top").style.display = "block";
    } else {
        document.getElementById("scroll-to-top").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// markdown to html ajax
function markdownToHtml(){
  let targetURL = 'https://api.github.com/markdown';
  let markdown = $('#content_md').val();
  let data = {
    "text": markdown,
    "mode": "gfm",
  };
  $.ajax({url: targetURL,
          method: 'POST',
          contentType: 'application/json',
          dataType: 'html',
          data:JSON.stringify(data),
  }).done(function(data){
    $('#content_html').val(data);
    $('#html-box').html(data);
  })
}

$(document).ready(() => {
  $('#preview-btn').click(markdownToHtml);
});




Handlebars.registerHelper('number-format',(number)=>{
  return number.toLocaleString();

});


$(document).ready(function(){
    $("form").submit(function(e){


      let postsTemplateString = document.getElementById('results-template').innerHTML;
      let renderPosts = Handlebars.compile(postsTemplateString);

      var text = $('input[name="searchValue"]').val();
      console.log(text);
      event.preventDefault();

        $('#results').html(`<div class ="loader" ></div>`);
          event.preventDefault();

        var url ="https://www.reddit.com/r/" + text + ".json";
        let promise = $.ajax({
          type:'GET',
          url: url
        });


      promise.then((posts)=>{
        console.log(posts);
        console.log(renderPosts);
        console.log(posts.data.children);

        let renderedPosts = renderPosts({
          posts : posts.data.children
        });
        console.log(renderedPosts);
        $('#results').html(renderedPosts);
        },() =>{

        $('#results').html(`<a>Oops! Something went wrong!</a>`);

    });
    });
});

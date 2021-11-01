$( document ).ready(function(){
    let searchBtn = $("button");
    let resultMessage = $("#results")
    

    searchBtn.click(function() {
        let searchVal = $("#search").val().trim();
        $.get(`http://localhost/info2180-lab4/superheroes.php?q=${searchVal}`, function(result){
            resultMessage.html(result);
         })

    });
});
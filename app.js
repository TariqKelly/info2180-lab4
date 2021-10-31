$( document ).ready(function(){
    let searchBtn = $("button");
    

    searchBtn.click(function() {
        $.get(`http://localhost/info2180-lab4/superheroes.php`, function(result){
            alert(result);
        })
    });
});
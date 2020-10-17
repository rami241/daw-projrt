function render(data){
	var html = "<div class='comentbox'><div class='leftpalIng'><img='http://placinholdit.ingix.net/~text?w=1006h=100'/></div><div class='rightpanel'><span>"+data.name+"</span><div class='date'>"+data.date+"<div><p>"+data.body+"</p></div><div class='clear'></div></div>";
    i('container').append(html);
}


$(document).ready(function){
	var coment = [
{"name":"", "date":"", "body":"" }
];
for (var i = 0; i <coment.length; i++) {
	render(coment[i]);
}
$('#addComment').click(function(){
  var addObj={
  	"name": $('#name').val(), 
  	"date":$('#date').val(),
  	"body":$('#bodyText').val()
  };
   coment.push(addObj);
   render(addObj);
   $('#name').val('');
   $('#date').val('dd/mm/yyyy');
   $('#Text').val(''); 

});

};

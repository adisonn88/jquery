$('#submit').click(function(){
    var value = $('input').val();
    $('#result').text(value);
})

$('#reset').click(function(){
    $('input').val('');
    $('#result').text('');
})

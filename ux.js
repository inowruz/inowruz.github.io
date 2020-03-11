let s1 = $('.slide1'),
    s2 = $('.slide2'),
    s3 = $('.slide3');
function active_slide() {
    if (s1.css('display') !== 'none') {
        return s1
    } else if (s2.css('display') !== 'none'){
        return s2
    } else if (s3.css('display') !== 'none'){
        return s3
    }
}
console.log('1')
$('#i1').click(function (){
    let ac = active_slide();
    if (s1 !== ac && $(this).css('background-color') !== 'white'){
        ac.toggleClass('hide');
        s1.toggleClass('hide');
        $(this).toggleClass('active');
        if (ac === s2){
            $('#i2').toggleClass('active');
        } else{
            $('#i3').toggleClass('active');
        }
    }
});
$('#i2').click(function (){
    let ac = active_slide();
    if (s2 !== ac && $(this).css('background-color') !== 'white'){
        ac.toggleClass('hide');
        s2.toggleClass('hide');
        $(this).toggleClass('active');
        if (ac === s1){
            $('#i1').toggleClass('active');
        } else{
            $('#i3').toggleClass('active');
        }
    }
});
$('#i3').click(function (){
    let ac = active_slide();
    if (s3 !== ac && $(this).css('background-color') !== 'white'){
        ac.toggleClass('hide');
        s3.toggleClass('hide');
        $(this).toggleClass('active');
        if (ac === s1){
            $('#i1').toggleClass('active');
        } else{
            $('#i2').toggleClass('active');
        }
    }
})
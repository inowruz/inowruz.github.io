let nowruz = new Date('2020-03-20 07:19:37').getTime();
const rings = ['day', 'hour', 'minute', 'second'];
function year_percentage() {
    let now = new Date(),
        start = moment().locale('fa').format('DDD');
    return (parseInt(start) / 365) * 100
}
function set_rings() {
    let ring = $('circle'),
        radius = ring.attr('r'),
        circumference = radius * 2 * Math.PI;
    ring.css({
        'stroke-dashoffset': `${circumference} ${circumference}`,
        'stroke-dasharray': '0'
    })
}
function update_ring(_class, percent) {
    let ring = $('.'+_class),
        radius = ring.attr('r'),
        circumference = radius * 2 * Math.PI;
    ring.css({
        'stroke-dashoffset': Math.abs(circumference - (100 - percent) / 100 * circumference),
        'stroke-dasharray': `${circumference} ${circumference}`
    })
}
set_rings();
const cd = setInterval(function () {
    let now = new Date().getTime(),
        distance = nowruz - now,
        days = Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds = Math.floor(((distance % (1000 * 60)) / 1000));
    $('#days').text(days);
    $('#hours').text(('0' + hours).slice(-2));
    $('#minutes').text(('0' + minutes).slice(-2));
    $('#seconds').text(('0' + seconds).slice(-2));
    update_ring('days', year_percentage());
    update_ring('hours', Math.abs((24 - hours)/24 * 100));
    update_ring('minutes', Math.abs((60 - minutes)/60 * 100));
    update_ring('seconds', Math.abs((60 - seconds)/60 * 100));
    if (distance < 0){
        clearInterval(cd)
    }
}, 1000);

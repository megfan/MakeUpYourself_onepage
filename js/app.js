
let hideMenu = $('.aboutMenu');
$('.about').on('mouseenter', function () {
    hideMenu.slideToggle('fast');
});

$('.about').on('mouseout', function () {
    hideMenu.slideToggle('fast');
})


//-----------slider-----------

const blackChair = $('.chair_img_one');
const redChair = $('.chair_img_two');

const btnPrev = $('.arrow_left');
const btnNext = $('.arrow_right');

console.log(blackChair, redChair, btnNext, btnPrev);

btnPrev.on('click', function () {
    blackChair.toggle();
    redChair.toggle();
});

btnNext.on('click', function () {
    blackChair.toggle();
    redChair.toggle();
});


//---------appplication--------

$('.list_arrow').on('click', function () {
    // $('.list_panel').toggle();
    $(this).next().toggle();
});

let sum = 0;
let chairType = 0;
let chairColor = 0;
let chairTexture = 0;
let transport = 0;


$('.chairType li').on('click', function () {
    $('h4.title').first().text($(this).text());
    $(this).parent().parent().find('.list_label').text($(this).text());

    if($(this).text() === "Clair") {
        chairType = 200;
    }else if($(this).text() === "Margarita") {
        chairType = 250;
    }else if($(this).text() === "Selena") {
        chairType = 300;
    }
    sum = chairType + chairColor + chairTexture;

    $(".panel_right h4").text(chairType);
    $('.sum strong').text(sum);
    $('.list_panel').hide();

});

$('.chairColor li').on('click', function () {
    $('.panel_left .color').text($(this).text());
    $(this).parent().parent().find('.list_label').text($(this).text());

    if($(this).text() === "Czerwony") {
        chairColor = 30;
    }else if($(this).text() === "Czarny") {
        chairColor = 25;
    }else if($(this).text() === "Pomarańczowy") {
        chairColor = 35;
    }
    sum = chairType + chairColor + chairTexture;

    $(".panel_right .color").text(chairColor);
    $('.sum strong').text(sum);
    $('.list_panel').hide();

});

$('.chairTexture li').on('click', function () {
    $('.panel_left .pattern').text($(this).text());
    $(this).parent().parent().find('.list_label').text($(this).text());

    if($(this).text() === "Skóra") {
        chairTexture = 330;
    }else if($(this).text() === "Tkanina") {
        chairTexture = 125;
    }
    sum = chairType + chairColor + chairTexture;

    $(".panel_right .pattern").text(chairTexture);
    $('.sum strong').text(sum);
    $('.list_panel').hide();

});

$('div .check-box').on('click', function () {
    // if($('.checkbox label::after') === true){
    //     console.log('checkde');

        transport = 200;
        $('.sum strong').text(sum);
        $(".panel_right .transport").text(transport);
        $(".panel_left .transport").text('Transport');

        sum = chairType + chairColor + chairTexture + transport;
    // }else{
    //     transport = 0;
    // }

});
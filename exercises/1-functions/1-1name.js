"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawName();

function drawName(){

    // letter M
    context.strokestyle = "red"
    context.lineWidth = 5;
    context.beginPath ();
    context.moveTo (200,500);
    context.lineTo (200,250);
    context.lineTo (300,350);
    context.lineTo (380,250);
    context.lineTo (380, 500);
    context.stroke ();

    // letter O in een vorm van een vierkant
    context.beginPath ()
    context.strokeStyle = "green"
    context.lineWidth = 5;
    context.moveTo(400,280);
    context.rect (400,280,200,200);
    context.stroke ();

    context.beginPath ()
    context.strokeStyle = "blue"
    context.lineWidth = 5;
    context.moveTo (625, 250);
    context.lineTo (625, 500);
    context.moveTo (625, 375);
    context.lineTo (675, 375);
    context.moveTo (675,250);
    context.lineTo (675,500);
    context.stroke ();

    context.beginPath ()
    context.strokeStyle = "purple"
    context.lineWidth = 5;
    context.moveTo (725, 250);
    context.lineTo (690, 500);
    context.moveTo (725, 250);
    context.lineTo (750, 500);
    context.moveTo (700, 400);
    context.lineTo (740, 400);
    context.stroke ();

}

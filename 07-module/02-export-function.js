#!/usr/bin/node

function circle(radius){
  function area(){
    return Math.PI*radius*radius;
  }

  function circumference(){
    return 2 * Math.PI*radius;
  }
  //function diameter(){
  //return 2 *radius;
  //}
  return {
    area:area,
    circumference:circumference,
    //diameter:diameter
  };
}
console.dir(module);
module.exports = circle;

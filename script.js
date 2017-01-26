/* jshint asi:true, esversion:6 */
//ACOMODAR LAS FUNCIONES PORQUE SE REPITEN LAS OPERACIONES DEBIDO A LA FORMA EN LA QUE ESTA ACOMODADO EL EVAL
var num1 = 0, num2 = 0, res = 0, op
function suma(n1,n2) {
  return n1 + n2;
}
function resta(n1,n2) {
  return n1 - n2
}
function multi(n1,n2) {
  return n1 * n2
}
function div(n1,n2) {
  return n1 / n2
}

  $('.clear').click(function () {
    $('.display').empty()
    num1 = 0
    num2 = 0
    res = 0
    op = ''
  })

  function calculator() {
    $('.numero').click(function () {
      var num = $(this).text();
      $('.display').append(num)
    })
    $('.suma').click(function () {
        num1 = $('.display').text()
        $('.display').empty()
        op = 'suma'
    })
    $('.resta').click(function () {
        num1 = $('.display').text()
        $('.display').empty()
        op = 'resta'
    })
    $('.multi').click(function () {
        num1 = $('.display').text()
        $('.display').empty()
        op = 'multi'
    })
    $('.division').click(function () {
        num1 = $('.display').text()
        $('.display').empty()
  
    })
    $('.eval').click(function () {
      if (op == 'suma') {
        num2 = $('.display').text()

        res = suma(parseFloat(num1,10),parseFloat(num2,10))
        $('.display').empty()
        $('.display').append(res)
      } else if (op == 'resta' ) {
        num2 = $('.display').text()
        res = resta(parseFloat(num1,10),parseFloat(num2,10))
        $('.display').empty()
        $('.display').append(res)
      } else if (op == 'multi' ) {
        num2 = $('.display').text()
        res = multi(parseFloat(num1,10),parseFloat(num2,10))
        $('.display').empty()
        $('.display').append(res)
      } else {
        num2 = $('.display').text()
        res = div(parseFloat(num1,10),parseFloat(num2,10))
        $('.display').empty()
        $('.display').append(res)
      }
    })
  }

$(document).ready(function () {
  calculator()
})

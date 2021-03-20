
// function reply_click(id){
//   if (id.classList.contains('num')){
//     var num1 = id;
//     alert('number '+num1);
//   }
//   else if(id.classList.contains('opr')){
//     var opr1 = id;
//       alert('operator '+opr1);
//   }
// }

var displayarr = [];

const btn = document.querySelectorAll('.btn');

var num1;
var num2;

btn.forEach(function(button){
    button.addEventListener('click', function(e){
      if (button.classList.contains('num')){
        if(num1 !== null){
           num2 = button.id;
            alert('number2 '+num2);
        }
           num1 = button.id;
          alert('number1 '+num1);
          //displayarr.push(num1);
      }
      else if (button.classList.contains('opr')){
          var opr1 = button.id;
          //alert('number '+opr1);
          //displayarr.push(opr1);
      }
      else if(button.classList.contains('equal')){
        function operation(){
          if(opr == '+'){
          var equal = num1 + num2;
        }
        alert(equal);
        return equal;
        }
      }
    });
});

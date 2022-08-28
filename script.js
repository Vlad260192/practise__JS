// $(document).ready(function(){
//     $(function() {    
//         $('#filter1').change(function() { 
//             $("#table td.col1:contains('" + $(this).val() + "')").parent().show();
//             $("#table td.col1:not(:contains('" + $(this).val() + "'))").parent().hide();
//         });
        
//     });
// });

$(document).ready(function(){
    var regex = /Hot/;
$('#table1').find('tbody').find('[id^=artist]').each(function() {
    if (!regex.test(this.innerHTML)) {
        this.parentNode.style.backgroundColor = '#ff0000';
    }
});
});


// $(document).on('input', '.filter-table', function () {
//     var tableName = $(this).attr('data-table-id');
//     var searchKey1 = $("[data-column-id='1']").val().toLowerCase();
//     var searchKey2 = $("[data-column-id='2']").val().toLowerCase();
   
   
//    $("#" + tableName + " tbody tr").filter(function () {
//     var columnSearch1 = !searchKey1 || 
//     $(this).children().eq(0).text().toLowerCase().indexOf(searchKey1) > -1;
   
//     var columnSearch2 = !searchKey2 ||  
//     $(this).children().eq(1).text().toLowerCase().indexOf(searchKey2) > -1;
   
//     $(this).toggle(columnSearch1 && columnSearch2);
//     });
   
// });




// function calSum(numOne, numTwo) {
    
//     let question = confirm('Hello I can help you to count');

//     if (question) {
//         numOne = +prompt('Enter first number', '');
//         numTwo = +prompt('Enter second number', '');

//         let numSum = numOne * numTwo;

//         alert(`Your number is ${numSum}`);
//     }else{
//         alert('You can do it on your own');
//     }
    
// console.log(numOne);

// }

// calSum();

// function showMessage(text, name) {
//     console.log(`${text}, ${name}`);
// }

// setTimeout(showMessage, 3000, 'Hello', 'Vlad');

// function showNumber(num) {
//     console.log(num);
//     let timeID = setTimeout(showNumber, 1000, ++num);

//     if (num === 5) {
//         clearTimeout(timeID);
//     }
// }

// setTimeout(showNumber, 1000, 1);

// function createMessage(name, age, gender) {
//     return `${name}, ${age}, ${gender}!`;
// }

// function showMessage(message) {
//     console.log(message);
// }

// function initMessage(name, age, gender) {
//     showMessage(createMessage(name, age, gender));
// }

// initMessage('Jane', '25', 'female');




// let showMessage = function() {
//     console.log('Message');
// }

// showMessage();
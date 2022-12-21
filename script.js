
// let user = {
//    fName: 'John',
//    lName: 'Travolta',
//    age: '45',
//    "true detective": true,
// };

// user.fName = 'Alan';
// user.lName = 'Po';

// for (let key in user) {
//    alert( user[key] );
// }

// function makeUser (name, age) {
//    return {
//       name,
//       age
//    }
// }

// let codes = {
//    "+49": "North America",
//    "+44": "South America",
//    "+11": "Europe",
//    "+1": "Ukraine",
// }

// for (let code in codes) {
//    alert( +code );
// }

// let person = {
//    fName: 'John',
//    lName: 'Travolta',
//    age: '45',
//    "true detective": true,
// };

// let clone = {};

// for (let key in person) {
//    clone[key] = person[key];
// }

// alert( clone.fName );

// let testUser = {name: 'John'};

// let permision1 = {canView: true};
// let permision2 = {canEdit: false};

// Object.assign(testUser, permision1, permision2);

// Object.assign( testUser, {age: 30});

// for (let key in testUser) {
//    console.log( testUser[key] );
// }

// for (let key in clone) {
//    console.log( clone[key] );
// }

// let man = {
//    name: 'Mike',
//    age: 31,
//    info: {
//       height: 185,
//       weight: 85
//    },
// }

// alert( man.info.height );

// let unknownPerson = {
//    sayHi: function() {
//       alert('hello world');
//    }
// };


// function User(name) {   
//    this.name = name;
//    this.isAdmin = false;
// }

// let guest1 = new User('Jack');
// let guest2 = new User('Blondy'); 

// let user = {};

// alert( user.address ? user.address.street ? user.address.street.name : null : null );

// alert( user.address && user.address.street && user.address.street.name );

// alert( user?.address?.street );

// let html = document.querySelector('.elem')?.innerHTML;


// let id = Symbol('id');

// let id1 = Symbol('id');

// alert( id.toString() );

// let obj1 = {
//    name: 'Gregory',
//    surname: 'Rasputin',
//    age: 45,
// };

// let obj2 = {
//    name: 'Gregory',
//    surname: 'Oxford',
//    age: 25,
// };

// let sum = obj1 + obj2;

// alert( sum );

//========================================================================================================================================================


// const elemOne = document.querySelectorAll('.lesson__list');
// console.log(elemOne);

// const elemTwo = document.querySelectorAll('li');
// console.log(elemTwo);

// const elemThree = document.querySelectorAll('li.lesson__item-list');
// console.log(elemThree);

// const elemFour = document.querySelectorAll('.lesson__list>li');
// console.log(elemFour);

// const elemFive = document.querySelectorAll('.lesson__list, .lesson__text');
// console.log(elemFive);

// const elemSix = document.querySelectorAll('.lesson .lesson__text');
// console.log(elemSix);

// const elemSeven = document.querySelectorAll('#listItem');
// console.log(elemSeven);

// const elemEight = document.querySelectorAll('[data-item]');
// console.log(elemEight);

// const elemNine = document.querySelectorAll('[data-item="85"]');
// console.log(elemNine);

// const elems = document.querySelectorAll('li');

// for (const item of elems) {
//     console.log(item);
// }

// const subList = document.querySelectorAll('.lesson__sub-list');
// const subItems = subList[0].querySelectorAll('li');
// console.log(subItems);

// const elem = document.getElementById('listItem');
// console.log(elem);

// const elemTag = document.getElementsByTagName('li');
// console.log(elemTag);


// const elemClass = document.getElementsByClassName('lesson__item-list');
// console.log(elemClass);

// const elemName = document.getElementsByName('list');
// console.log(elemName);

// const element = document.querySelector('.lesson__item-sub-list');
// const closElement = element.closest('.lesson__list');
// console.log(closElement);

// const elems = document.querySelectorAll('.lesson__item-list');

// for (let elem of elems) {
//     if (elem.matches('[class$="lesson__item-list_red"]')) {
//         console.log('Red');
//     } else if (elem.matches('[class$="lesson__item-list_blue"]')) {
//         console.log('Blue');
//     }
// }

// const textElement = document.querySelector('.lesson__text');

// const textElementContent = textElement.outerHTML;

// textElement.outerHTML = 'Hello stupid mad world!';

// console.log(textElementContent);

// textElement.innerHTML = 
// `<p>${textElementContent}</p> <p>Hello stupid mad world!</p>`;

// const textElement = document.querySelector('.lesson__text');

// const newElement = document.createElement('div');

// newElement.innerHTML = 'Hello stupid <span>mad world</span>!';

// textElement.before(newElement);

// textElement.after(newElement);

// textElement.prepend(newElement);

// textElement.append(newElement);

// const textElement = document.querySelector('.lesson__text');
// textElement.insertAdjacentHTML(
//     'afterend',
//     `<p>Hello stupid mad world</span>!</p>`
// );

// const textElement = document.querySelector('.lesson__text');

// const cloneTextElement = textElement.cloneNode(true);

// const lessonBlock = document.querySelector('.lesson');
// lessonBlock.append(cloneTextElement);

// const textElement = document.querySelector('.lesson__text');
// textElement.remove();

// const element = document.querySelector('.lesson__item-list_red');

// element.classList.add('active');

// const elementClassNames = element.className;

// element.className = 'red';

// console.log(elementClassNames);

const button = document.querySelector('.button');

button.addEventListener('click', function(){
    const elem = document.querySelector('.lesson');
    if (elem) {
        elem.classList.toggle('active');
    }
});

// const elem = document.querySelector('.lesson__item-list_red');

// elem.classList.add('active');

// for (let className of elem.classList) {
//     console.log(className);
// }



//========================================================================================================================================================


// const bodyElement = document.body;

// const firstChildNode = bodyElement.firstChild;
// const lastChildNode = bodyElement.lastChild;

// // console.log(firstChildNode);
// // console.log(lastChildNode);

// const previousSiblingNode = bodyElement.previousSibling;
// const nextSiblingNode = bodyElement.nextSibling;
// const parentNode = bodyElement.parentNode;

// console.log(previousSiblingNode);
// console.log(nextSiblingNode);
// console.log(parentNode);

// const itemElement = document.querySelectorAll('.header__item');

// console.log(itemElement);


// const bodyChildren = bodyElement.children;

// console.log(bodyChildren);

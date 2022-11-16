
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

let obj1 = {
   name: 'Gregory',
   surname: 'Rasputin',
   age: 45,
};

let obj2 = {
   name: 'Gregory',
   surname: 'Oxford',
   age: 25,
};

let sum = obj1 + obj2;

alert( sum );
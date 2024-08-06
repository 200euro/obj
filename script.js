// let person = {
//    name: 'Akmal',
//    surname: 'Kadirov',
//    age: 16
// }


// person.age = 99
// person.address = 'Tashkent'

// person['age'] = 52
// person['name'] = 'Bexruz'
// person['surname'] = 'Kukuruz'


// let car1 = {
//    brand:'BMW',
//    model:'M5 cs',
//    horsePower: 150,
//    engine: 'v12',
//    driver: 'Tamaev',
//    start: function() {
// console.log('машина M5 cs заводится');

//    }
// }



// car2.color = 'Black',
// car.horsePower = 1200,
// delete car.model

// // car.start()
// // console.log(car);



// let car2= {
//    brand:'BMW',
//    model:'M5 cs',
//    horsePower: 150,
//    start: function() {
// console.log('машина M5 cs заводится');

//    }
// }


// let car  = {...car2}



// let company = {
// name: 'GitHub',
// owner: {
//    name: 'Chris',
//    surname: 'Wansi',
//    networth: '2.2billion$',
//    address {
//       city: 'Chikago' ,
//       street: 'amir temur 7'
//    }
// }
// }

// company.owner.name = 'Akmal'
// company.owner.surname = 'Kadirov'


let book = {
   title: 'война и мир',
   author: 'Лев Толстой',
   year: 1867
}


let book2 = {...book}

book2.title = 'война и мир 2'
book2.year = 2024


// console.log(book2);



function print(obj) {
   for(let key in obj) {
      console.log(`${key} : ${obj[key]}`);
      
   }
}

// print(book)
// console.log('--------------');
// print(book2)







// console.log(company)





let school = {
   name: 'president school',
   director: 'Davlat Polatov',
   teachers: {
math: 'davlat Polatov',
geography: 'Marina Ivanovna',
history: 'Asad'
   },
   students: {
      1: 'Vadim Vadimovich',
      2: 'Laylo Asadovna',
      3: 'Abdukaibr Pirojkov'
   },

   hasEatery: false,
   hasToilet: true,
   rooms: 163
}

console.log(school);

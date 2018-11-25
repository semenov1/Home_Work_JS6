//Реализовать функцию-конструктор для создания объекта "пользователь".
//
//Технические требования:
//
//Написать функцию createNewUser(), которая будет создавать и возвращать объект "пользователь".
//При вызове функция должна спросить у вызывающего имя и фамилию.
//Используя данные, введенные пользователем, создать объект со свойствами firstName и lastName.
//Добавить в объект метод getLogin(), который будет возвращать первую букву имени пользователя, соединенную с фамилией пользователя, все в нижнем регистре.



function createNewUser (name, lastname){
  this.firstName = name;
	this.lastName = lastname; 
	this.getLogin = function (){
		return (this.firstName[0]+this.lastName).toLowerCase();
	}; 
    
};
let nazar = new createNewUser("Nazar","Petrenko"); 
console.log(nazar);
console.log(nazar.getLogin());
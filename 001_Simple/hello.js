function User(name){
    this.name = name;
    this.sayHello = () => {
        console.log('Hello',this.name);
    };
//Проба
}
var John = new User('John');
John.sayHello(); 
//асоциативные массивы, анонимная функция, window
/*var user1 ={
    age: 18
};
var user2 ={
    age: 22
}
function g(){
    alert("Привет, мне" + this.age)
}*/
/*
var users = [
    {
        id:1,
        hello:hello,
        age :20
    },
    {
        id:2,
        hello:hello2,
        age:14
    }
];
for(var users of users){
    user.hello()
}
function HELLO(){
    console.lot("hello im" + this.age);
}
function getUserById(id){
    return users.find(
        function (user)
    {
        return user.id === id
    }
};

*/
/*
var user = {
    firstname: "Головач",
    lastname: "Лена"
}

Object.defineProperty(user, "fullname", {
    get: function() {
        return this.firstname + ' ' + this.lastname;
    }
});

alert(user.fullname);
*/
/*
(function(){
var user ={};
    user.birthday = new Date('01.01.1982');
    console.log(user.birthday);
    console.log(user.age)//36let
}
    Object.defineProperty(user, new Date(),{
        get:function() {
            return  - ''
        }
    };
*/
/*
function getAge(d1, d2){
    d2 = d2 || new Date();
    var diff = d2.getTime() - d1.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
}
alert( getAge(new Date(1978, 10, 3)) );
*/

/*
(function(){
    //'use strict';
    function User(name){
        var birthdate;
        this.name = name;
        //this.age = age;
        this.dataCreated = new Date();

        Object.defineProperty(this, 'birthdate', {
            set: function(value){
                birthdate = new Date(value);
            },
            get: function(){
                return birthdate;
            }
        })

        // return{
        //     name: name,
        //     age:age,
        //     dateCreated: new Date()
        // }


    }
    var user1 = new User('Vasya');
    user1.birthdate = '1.1.1982';
    //var user2 = new User('Golova');

    console.log(typeof user1.birthdate.getTime());
    //console.log(user2);
})();*/
var i=0;
var users = [1000];
class User{
    constructor(name,age,email){
        this.name = name;
        this.age = age;
        this.email = email;
        this.coins = 0;
        this.course = [];
        this.role = '';
        users[i++] = this;
    }
    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
    static display(k){
        console.log(users[k]);
    }
}
class Moderator extends User{
    constructor(name,age,email,role){
        super(name,age,email);
        this.role = 'Moderator';
    }
    addcoins(user){
        user.coins++;
        console.log(`Moderator ${this.name} added coin to ${user.name}. The user now has ${user.coins} coin(s) in account`);
    }
    deletecoins(user){
        user.coins--;
        console.log(`Moderator ${this.name} deleted coin to ${user.name}. The user now has ${user.coins} coin(s) in account`);
    }
    deleteUser(user){
        users = users.filter(u=>{return u.email!=user.email;});
    }
}
class Admin extends Moderator{
    constructor(name,age,email,role){
        super(name,age,email);
        this.role='Admin';
    }
    addcourse(user,course){
        user.course.push(course);
        console.log(`Admin ${this.name} added ${course} to ${user.name}`);
    }
    deletecourse(user){
        var del = user.course.shift();
        console.log(`Admin ${this.name} deleted ${del} to ${user.name}`);
    }
}
var user1=new User('Saurabh, 27,saurabh@gmail.com');
var user2=new User('Sameer, 28,sameer@gmail.com');
var user3=new User('Sainath, 29,sainath@gmail.com');
var mod1=new Moderator('Riya, 24, riya@gmail.com');
var mod2=new Moderator('Priya, 25, priya@gmail.com');
var admin1=new Admin('Siya, 26, siya@gmail.com');
var admin2=new Admin('Jiya, 28, jiya@gmail.com');
console.log(users);
user1.login().logout();
user2.login().logout();
user3.login().logout();
console.log('users:');
for(var j=0;j<users.length;j++){
    console.log(User.display(j));
}
mod1.addcoins(user1);
mod1.addcoins(user2);
mod1.addcoins(user3);
mod2.deletecoins(user3);
mod2.deleteUser(user2);
admin1.addcourse(user1,'Javascript');
admin2.addcourse(user1,'Python');
admin2.addcourse(user1,'AI');
console.log("After all actions<br>:");
console.log("users:");
for(var j=0;j<users.length;j++){
    console.log(User.display(j));
}
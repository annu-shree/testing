function isUserLoggedIn() {
  function getData() {
    return localStorage.getItem("userData");
  }
  if ("userData") {
    console.log("Sign In Already, Please Log Out First");
  }
  return false;
}

function setData(user) {
  return localStorage.setItem("userData", JSON.stringify(user));
}

function logOutdata() {
    return localStorage.removeItem("userData");
}

let userDB = {
  data: [],
  add: function (value) {
    this.data.push(value);
  },
  // usedatabase is an object id in functions are there parameters//
  updateData: function (updatedValue) {
    this.data = this.data.map((usr) => {
      if (usr.id === updatedValue.id) {
        usr = updatedValue;
      }
      return usr;
    });
    console.log(this.data);
  },
  deleteByID: function (id) {
    this.data = this.data.filter((usr) => usr.id !== id);
    console.log(this.data?.length);
  },
  log() {
    console.log(this.data.map((item) => item.name));
  },
  findByEmail: function (email) {
    let usr = this.data.find(function (usr) {
      return usr.email === email;
    });

    return usr;
  },
};

class User {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  login() {
    let userDetail = {
      name: this.name,
      id: this.id,
      email: this.email
    }
    setData(userDetail);
    console.log("you are logged In as" + this.name);
  }

  logout() {
     logOutdata();
    window.Location.reload();
  }

  update() {
    userDB.updateData(this.id);
  }
 
  deleteUser() {
    userDB.deleteByID(this.id);
  }

  checkPassword(password) {
    if (this.password !== password) {
      throw Error("Password doesn't matched");
    }
    else {
      return true
    }
  }
} 

let user1 = new User(1, "anushree", "anu@gmail.com", "anu2244");
let user2 = new User(2, "gunjan", "gunjan@gmail.com", "gunjan8844");
let user3 = new User(3, "sambhu", "sambhu@gmail.com", "sambhu3344");
let user4 = new User(4, "lado", "lado@gmail.com", "lado4444");

userDB.add(user1);
userDB.add(user2);
userDB.add(user3);
userDB.add(user4);
  
export default userDB;

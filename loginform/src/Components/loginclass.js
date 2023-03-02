let userDB = {
  data: [],
  Add: function (value) {
    this.data.push(value);
  },
  UPDATE: function (updatedvalue) {
    this.data = this.data.map((usr) => {
      if (usr.id === updatedvalue.id) {
        usr = updatedvalue;
      }
      return usr;
    });
    console.log(this.data);
  },
  DELETE: function (id) {
    this.data = this.data.filter((usr) => {
      return usr.id !== id;
    });
    console.log(this.data.length);
  },
  FIND: function (id, email) {
    let usr = this.data.find((usr) => {
      return usr.id === id && usr.email === email;
    });
    return usr;
  },
};

 let setData = (user) => {
    localStorage.setItem("userData",JSON.stringify(user))
}
let GetData = () => {
     localStorage.getItem("userData");
 }
let Logout = () => {
    localStorage.removeItem("userData");
}

class User {
    constructor(id,name,email,password) {
         this.id = id;
         this.name = name;
         this.email = email;
         this.password = password;
    }


    Login() {
        let userDetail = {
            id: this.id,
            name: this.name,
            email:this.email
        }
        
        setData(userDetail)
        console.log(" you arae logged in as" + this.name)
        }

    Logout() {
        Logout()
        window.location.reload()
   }
    
    Delete() {
        userDB.DELETE(this.id)

    }
  
    update() {
       userDB.UPDATE(this.id)
    }
    
    checkpassword(password) {
        if (this.password !== password) {
            throw Error("wrong password")
        } else {
            return true;
        }
    }   
}
   
let user1 = new User(1, "anushree", "anu@gmail.com", "anu2244");
let user2 = new User(2, "gunjan", "gunjan@gmail.com", "gunjan8844");
let user3 = new User(3, "sambhu", "sambhu@gmail.com", "sambhu3344");
let user4 = new User(4, "lado", "lado@gmail.com", "lado4444");

userDB.Add(user1);
userDB.Add(user2);
userDB.Add(user3);
userDB.Add(user4);

console.log(userDB)
export default userDB;  
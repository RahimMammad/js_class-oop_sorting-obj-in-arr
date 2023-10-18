class Data {
    constructor(...data) {
        this.data = data
    }

    Search() {
        for (let i = 1; i <= this.data; i++) {
            let bolunen = this.data % i === 0
            
            if(bolunen) {
                console.log(i);
            }
        }
    }
}

const myData = new Data(50)
myData.Search()

class Admin {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    Check() {
        let emailValue = window.prompt("Enter an email: ")
        let passwordValue = window.prompt("Enter a password: ")
        if(emailValue !== "" && emailValue !== "") {
            if(emailValue === this.email && passwordValue === this.password) {
                console.log(emailValue, passwordValue);
            } else {
                console.log(false);
            }
        }
    }
}

const myAdmin = new Admin("fhydscd@gmail.com", "123")

myAdmin.Check()

class Human {
    constructor(name, age, weight) {
        this.name = name
        this.age = age
        this.weight = weight
    }
}

class Doctor extends Human {
    constructor(name, age, weight) {
        super(name, age, weight)
    }
}

const myDoctor = new Doctor("Rahim", 19, 73)
console.log(myDoctor);


const arr = [
    {
    "id": 5,
    "supplierId": 2,
    "categoryId": 2,
    "quantityPerUnit": "36 boxes",
    "unitPrice": 21.35,
    "unitsInStock": 0,
    "unitsOnOrder": 0,
    "reorderLevel": 0,
    "discontinued": true,
    "name": "Chef Anton's Gumbo Mix",
    "description": "E#"
    },
    {
    "id": 6,
    "supplierId": 3,
    "categoryId": 2,
    "quantityPerUnit": "12 - 8 oz jars",
    "unitPrice": 25,
    "unitsInStock": 120,
    "unitsOnOrder": 0,
    "reorderLevel": 25,
    "discontinued": false,
    "name": "Grandma's Boysenberry Spread",
    "description": "D"
    },
    {
    "id": 7,
    "supplierId": 3,
    "categoryId": 7,
    "quantityPerUnit": "12 - 1 lb pkgs.",
    "unitPrice": 30,
    "unitsInStock": 15,
    "unitsOnOrder": 0,
    "reorderLevel": 10,
    "discontinued": false,
    "name": "Uncle Bob's Organic Dried Pears",
    "description": "C"
    },
    {
    "id": 8,
    "supplierId": 3,
    "categoryId": 2,
    "quantityPerUnit": "12 - 12 oz jars",
    "unitPrice": 40,
    "unitsInStock": 6,
    "unitsOnOrder": 0,
    "reorderLevel": 0,
    "discontinued": false,
    "name": "Northwoods Cranberry Sauce",
    "description": "A"
    },
    {
    "id": 9,
    "supplierId": 4,
    "categoryId": 6,
    "quantityPerUnit": "18 - 500 g pkgs.",
    "unitPrice": 97,
    "unitsInStock": 29,
    "unitsOnOrder": 0,
    "reorderLevel": 0,
    "discontinued": true,
    "name": "Mishi Kobe Niku",
    "description": "B"
    }
]


arr.sort((a, b) => a.id - b.id)

arr.sort((a, b) => a.description.toLowerCase() < b.description.toLowerCase() ? -1 : 
    a.description.toLowerCase() > b.description.toLowerCase() ? 1 : 0)

arr.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 
    a.name.toLowerCase() > b.name.toLowerCase() ? 1 : 0)

let keyword = "Sa"
const filteredArray = arr.filter(item => item.name.toLowerCase().includes(keyword.toLowerCase()));
console.log(filteredArray);

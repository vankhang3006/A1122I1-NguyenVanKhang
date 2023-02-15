class Person {
    constructor(name, birthday, address) {
        this.name = name;
        this.birthday = birthday;
        this.address = address;
    }
    setName(name){
        this.name = name
    }
    setBirthday(birthday){
        this.birthday = birthday
    }
    setAddress(address){
        this.address = address
    }
    getName() {
        return this.name;
    }

    getBirthday() {
        return this.birthday;
    }

    getAddress() {
        return this.address;
    }

    toString() {
        return `Name:${this.name}, Birthday:${this.birthday}, Address:${this.address}`
    }
}

let p1 = new Person("Thomas", "20/1/2000", "New York");
let p2 = new Person("David", "4/4/2000", "Da Nang");
let p3 = new Person("Alatin", "20/1/2000", "Bangladesh");
let personList = [p1, p2, p3];

function addPerson() {
    let name = document.getElementById("name").value;
    let birthday = document.getElementById("birthday").value;
    let address = document.getElementById("address").value;
    let person = new Person(name, birthday, address);
    personList.push(person);
    showPerson();
}

        function showPerson() {
            let table = `<table border="1">
               <tr>
                 <th>Name</th>
                 <th>Birthday</th>
                 <th>Address</th>
                 <th>Edit</th>
                 <th>Delete</th>
               </tr>`;
            for (let i = 0; i < personList.length; i++) {
                table += `<tr>
                <td>${personList[i].getName()}</td>
                <td>${personList[i].getBirthday()}</td>
                <td>${personList[i].getAddress()}</td>
                <td><button id="edit" onclick="editPerson(${i})">Edit</button></td>
                <td><button id="delete" onclick="deletePerson(${i})">Delete</button></td>
              </tr>`;
            }
            table += `</table>`;
            document.getElementById("result").innerHTML = table;
        }

    function editPerson(index) {
        let person = personList[index];
        let name = prompt("Enter new name", person.getName());
        let birthday = prompt("Enter new birthday", person.getBirthday());
        let address = prompt("Enter new address", person.getAddress());
        person.name = name;
        person.birthday = birthday;
        person.address = address;
        showPerson();
    }

    function deletePerson(index) {
        personList.splice(index, 1);
        showPerson();
    }
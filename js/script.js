function Student(firstName, lastName, birthDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = new Date(birthDate);
    this.grades = new Array();
    this.attendance = new Array(25).fill(null);
}

Student.prototype.getAge = function () {
    const today = new Date();
    let age = today.getFullYear() - this.birthDate.getFullYear();
    const monthDiff = today.getMonth() - this.birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < this.birthDate.getDate())) {
        age--;
    }

    return age;
}

Student.prototype.getAvgGrade = function () {
    const avgGrade = this.grades.reduce((gradeSum, currValue) => gradeSum + (currValue || 0), 0) / this.grades.length;
    return avgGrade;
}

Student.prototype.getAvgAttendance = function () {
    const avgAttendance = this.attendance.reduce((attSum, currValue) => attSum + (currValue), 0) / this.attendance.length;
    return avgAttendance;
}

Student.prototype.addGrade = function (grade) {
    if (Number.isInteger(grade)) {
        this.grades.push(grade);
    }
    else console.error('Не ціле число.');
}

Student.prototype.absent = function () {
    for (let i = 0; i < this.attendance.length; i++) {
        if (this.attendance[i] === null) {
            this.attendance[i] = false;
            break;
        }
    }

}

Student.prototype.present = function () {
    for (let i = 0; i < this.attendance.length; i++) {
        if (this.attendance[i] === null) {
            this.attendance[i] = true;
            break;
        }
    }
}

Student.prototype.summary = function () {
    let avgGrade = this.getAvgGrade();
    let avgAttendance = this.getAvgAttendance();
    let msg = "";
    if (avgGrade > 90 && avgAttendance > 0.9) {
        msg = "Молодець!"
    }
    else if ((avgGrade <= 90 && avgAttendance > 0.9) || (avgGrade > 90 && avgAttendance <= 0.9)) {
        msg = "Добре, але можна краще"
    }
    else {
        msg = "Редиска!"
    };

    return msg;
}

let student1 = new Student("Andrey", "Ilchenko", "1995-08-30");

console.log(student1.getAge());

student1.absent();
student1.absent();
student1.absent();
student1.present();
student1.present();
student1.absent();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();

student1.addGrade(88);
student1.addGrade(100);
student1.addGrade(92);
student1.addGrade(99);
student1.addGrade(75);

console.log(student1.getAvgGrade());
console.log(student1.getAvgAttendance());
console.log(student1.summary());

console.log(student1);

let student2 = new Student("Andrey1", "Ilchenko1", "1995-08-30");

console.log(student2.getAge());

student2.absent();
student2.absent();
student2.absent();
student2.present();
student2.present();
student2.absent();
student2.present();
student2.present();
student2.absent();
student2.present();
student2.present();
student2.present();

student2.addGrade(66);
student2.addGrade(74);
student2.addGrade(92);
student2.addGrade(80);
student2.addGrade(82);

console.log(student2.getAvgGrade());
console.log(student2.getAvgAttendance());
console.log(student2.summary());

console.log(student2);
// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [{ sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
    { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}],
    enrollStudent: function (add) {
        let sec = this.sections.findIndex(function (elem) { return elem.sectionNum == parseInt(add)});
        if (sec != -1) {
            this.sections[sec].enrolled += 1;
            renderSections(this.sections);
        }
    },
    dropStudent: function (drop) {
        const conv = parseInt(drop);
        let sec = this.sections.findIndex(function (elem) { return elem.sectionNum === conv});
        if (sec != -1) {
            this.sections[sec].enrolled -= 1;
            renderSections(this.sections);
        }
    },
}

function setName (aCourse) {
    const coursName = document.querySelector('#courseName');
    const coursCode = document.querySelector('#courseCode');
    coursName.innerHTML = aCourse.name;
    coursCode.innerHTML = aCourse.code;
}

function renderSections (aCourse) {
    let table = aCourse.map((course) => 
        `<td>${course.sectionNum}</td>
        <td>${course.roomNum}</td>
        <td>${course.enrolled}</td>
        <td>${course.days}</td>
        <td>${course.instructor}</td></tr>`
    );
    document.querySelector('#sections').innerHTML = table.join();
}



document.querySelector('#enrollStudent').addEventListener('click', function () {
    let sel = document.querySelector('#sectionNumber').value;
    aCourse.enrollStudent(sel);
});
document.querySelector('#dropStudent').addEventListener('click', function () {
    let rem = document.querySelector('#sectionNumber').value;
    aCourse.dropStudent(rem);
});
setName(aCourse);
renderSections(aCourse.sections);


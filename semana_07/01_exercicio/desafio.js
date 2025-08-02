// 1
const personLegalAge = (person) => {
    const legalAge = person.age >= 18 ? true : false;
    return { ...person, isAdult: legalAge };
}

// 2
const multipleArrays = (...arrays) => {
    let elements = [];
    for (let array of arrays) {
         elements.push(...array);
    }
    return elements;
};

console.log(personLegalAge({ name: "Carl", age: 15 }));
console.log(multipleArrays([1,2], [3,4], [5,6]));
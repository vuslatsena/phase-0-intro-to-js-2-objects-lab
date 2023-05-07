// Write your solution in this file!

const employee = {
  name: "Vuslat",
  streetAdress: "Serbia"
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
  return { ...obj, [key]: value };
}

updateEmployeeWithKeyAndValue(employee, "Sena", "Sarajevo");

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;

}

function deleteFromEmployeeByKey(object, key) {
  let newObj = { ...object }
  delete newObj[key]
  return newObj;
}

deleteFromEmployeeByKey(employee, streetAddress);

function destructivelyDeleteFromEmployeeByKey(object, key) {
  delete object[key];
  return object;
}

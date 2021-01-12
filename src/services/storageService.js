export function SaveValue(name, values) {
  localStorage.setItem(name, values);
}

export function GetValue(name) {
  return JSON.parse(localStorage.getItem(name));
}

// export function GetValues() {
//   let items = [];
//   for (var key in localStorage) {
//     if (key.indexOf("StorageName") === 0) {
//       const item = JSON.parse(localStorage[key]);
//       const arr = { key: key, ...item };
//       items.push(JSON.stringify(arr));
//     }
//   }

//   return items;
// }

export function DeleteValue(key) {
  localStorage.removeItem(key);
}

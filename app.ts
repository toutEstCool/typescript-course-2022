/*{ Union Type }*/
function logId(id: string | number | boolean) {
  /*{ Сужение типов}*/
  if (typeof id === 'string') {
    console.log(id.toLocaleUpperCase());
  } else if (typeof id === 'number') {
    console.log(id.valueOf());
  } else {
    console.log(id);
  }
}

function logError(err: string | string[]) {
  if (Array.isArray(err)) {
    console.log(err);
  } else {
    console.log(err);
  }
}

function logObject(obj: { a: number } | { b: number }) {
  if ('a' in obj) {
    console.log(obj.a);

  }
}

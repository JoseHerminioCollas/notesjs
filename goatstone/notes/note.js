const x = (str) => {
  let strR = 'ab c'
  let i = 0
  while(str[i] === 'a'){
    i += 1
  }
  return strR
}

console.log(
  x('ab cd ef')
);


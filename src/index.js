module.exports = function reverse (n) {
    let module = Math.abs(n).toString().split("");
    
    if (module[module.length - 1] == 0) {
        module.pop();
    }
  let rev = module.reverse();
  return rev.join("")
}

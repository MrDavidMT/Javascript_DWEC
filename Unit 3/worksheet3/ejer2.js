/**
 *  Over an array with names, find all entries whose firstname starts with 'J',
 *  create projection combined of only the initials of the name and then sort alphabetically
 */
var nombres=["Jads","Jfjb","Jadsh","Jad","Jnsnl","weih","df","sdfsf"];
console.log(nombres.filter((n)=>{return n.toLowerCase().charAt(0)=="j"}).sort());

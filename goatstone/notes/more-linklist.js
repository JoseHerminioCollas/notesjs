// make a linked list the length of n
// sort the linked list //
function LL(link, data) {
    this.l = link;
    this.d = data;
}
const getRand = max => Math.floor(Math.random() * max);
const createLL = (llLength) => {
    const maxN = 20;
    const r = new LL(null, getRand(2000));
    let c = r;
    let i = 0;
    while (i < llLength) {
        c.l = new LL(null, i + getRand(maxN));
        c = c.l;
        i += 1;
    }
    return r;
};
const orderLL = (ll) => {
    console.log(displayLL(ll))
    let c = ll;
    let t = c;
    while(c){
	console.log(displayLL(c))
	console.log('ttt', displayLL(t));
	t = c;	
// c.l.l.l = null;
        c = c.l && c.l.l;
	//c.l = t;	
    }    
    console.log('a', displayLL(ll));
    console.log('b', displayLL(t));
    return ll;
};
// check for duplicates //
const displayLL = (rootNode) => {
    let c = rootNode;
    const display = [];
    while (c) {
        display.push(c.d);
        c = c.l;
    }
    return display.join(' : ');
};

const ll = createLL(4);
const oLL = orderLL(ll);
const x = () => displayLL(oLL);
module.exports = [() => x(), ''];
// selection insertion ttt
// buble linked list
// fib radix //
// linked lists string problems

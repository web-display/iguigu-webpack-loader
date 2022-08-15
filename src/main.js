import count from "./js/count";
import './css/index.css'
function test() { localStorage.setItem('x', 1) }
test()
count(1, 2, 3)
console.log('webpack is ok');

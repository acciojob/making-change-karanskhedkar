const makeChange = (c) => {
  // your name here
	const change={
		q:0,d:0,n:0,p:0
	}
	const q=25;
	const d=10;
	const n=5;
	const p=1;
	let money=c;
		if(money>=q){
			change.q=Math.floor(money/q);
			money=money%q;
		}
		if(money>=d){
			change.d=Math.floor(money/d);
			money=money%d;
		}
		if(money>=n){
			change.n=Math.floor(money/n);
			money=money%n;
		}
		if(money>=p){
			change.p=Math.floor(money/p);
			money=money%p;
		}
	return change;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));





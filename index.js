class SortedList {
  constructor() {
	this.items = [];
	this.length = this.items.length;
  }

  add(item) {
	this.items.push(item);
	this.items.sort((a,b)=>a-b);
	this.length = this.items.length;
  }

  get(pos) {
	if(pos<this.length){
		return this.items[pos];
	}else{
 		throw new Error("OutOfBounds");
	}
	
  }

  max() {
	if(this.items.length>0){
		return Math.max(...this.items);
	}else{
		throw new Error('EmptySortedList');
	}
  }

  min() {
	if(this.items.length>0){
		return Math.min(...this.items);
	}else{
		throw new Error('EmptySortedList');
	}
  }

  sum() {
	let count = 0;
	for(let i = 0;i<this.length;i++){
		count += this.items[i];
	}
	return count;
  }

  avg() {
	if(this.length===0){
		throw new Error('EmptySortedList');
	}else{
		return this.sum()/this.length;
	}
  }
}

module.exports = SortedList;

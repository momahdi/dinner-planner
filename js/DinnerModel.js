class DinnerModel{
 constructor(){
     this.numberOfGuests=2;
     this.subscribers=[];
     
 }
 addObserver(callback){
     console.log(callback)
     this.subscribers= this.subscribers.concat(callback);
 }
 notifyObservers(){
    this.subscribers.forEach((callback)=>{
        try {callback();} catch(err){
            console.log("Error ", err, callback);}
        }
    );}
setNumberOfGuests(num){
    if(num <= 0)
    throw "Number of dinner guests cannot be zero or negative"
    this.numberOfGuests=num;
    this.notifyObservers()
}
getNumberOfGuests(){
    return this.numberOfGuests;
}











}
function countMoments(bulbs){ //using 2 sets for flipped and on
    let moments =0;
    let moment =0;
    let on = new Set();
    on.add(0); //power source
    let flipped = new Set();
    for(let i = 0; i < bulbs.length; i++){
        let current = bulbs[i];
        flipped.add(current);
        if(on.has(current-1)) {
            // console.log("Adding "+ current);
            moment =1;
            on.add(current);
            for(let a =current;a<bulbs.length;a++){
                if(flipped.has(a+1)){
                    // console.log("Adding "+ (a+1));
                    on.add(a+1)
                }
                else break;
            }
        }
        //console.log(current + " " + [...on]+ "  Flipped: "+ [...flipped]);
        moments+=moment;
        moment = 0;
    }
    return moments;
}

function countMoments2(bulbs){ //no sets, just using array of objects
    let bulbStatus = new Array(bulbs.length+1);
    let moments =0;
    let moment =0;
    let initialStatus = {
        flipped : false,
        on: false
    }
    bulbStatus.fill(initialStatus);
    bulbStatus[0] = {
        flipped : true,
        on: true
    }
    for( let i=0; i<bulbs.length; i++ ){
        let current = bulbs[i];
        let flipped = true;
        let on = false;
        if(bulbStatus[current-1].on ===true){
            on = true;
            moment = 1;
            //bulbStatus[curruentBulb]= {flipped, on}
            for(let a = current;a<bulbs.length;a++){
                if(bulbStatus[a+1].flipped === true){
                    bulbStatus[a+1].on = true;
                }
                else break;
            }
            moments +=moment;
            moment = 0;
        }
        bulbStatus[current]={flipped,on}
    }
    return moments;
}

const test1 = [2,1,3,5,4];
const test2 = [2,3,4,1,5];
const test3 = [2,3,4,5,1];
const test4 = [1,2,3,4,5];
console.log(countMoments(test1));
console.log(countMoments(test2));
console.log(countMoments(test3));
console.log(countMoments(test4));


console.log(countMoments2(test1));
console.log(countMoments2(test2));
console.log(countMoments2(test3));
console.log(countMoments2(test4));
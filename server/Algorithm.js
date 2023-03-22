function calculate(EachSpendingsTotal, share){
    let totalSpendings=0
    for(const m in EachSpendingsTotal){
        totalSpendings=totalSpendings+ EachSpendingsTotal[m].money
    }
    // console.log(totalSpendings)

    MoneyToBeSpent=[]

    for( const i in EachSpendingsTotal){
        let x=(share[i].percent/100)*totalSpendings
        MoneyToBeSpent.push({user: EachSpendingsTotal[i].user, money: x})
    }
    // console.log(MoneyToBeSpent)

    money=RelativeSpendings(EachSpendingsTotal, MoneyToBeSpent)
    return money
}

function RelativeSpendings(EachSpendingsTotal, MoneyToBeSpent){
    MoneyAtTheEnd=[]
    for (const j in EachSpendingsTotal){
        const x=MoneyToBeSpent[j].money - EachSpendingsTotal[j].money
        MoneyAtTheEnd.push({user: EachSpendingsTotal[j].user, money: x})
    }
    return MoneyAtTheEnd
}


function getMin(arr){
//     let objMin = arr.reduce((min, curren) => min.money < curren.money ? min : curren);
//     var index= arr.indexOf(o)
   min=Infinity
   var key
    arr.forEach(function (v, k) { 
        if (min > +v.money) { 
        min = +v.money; 
        key = k; 
        }
    });
    return key

}
function getMax(arr){
    max=-Infinity
    var key
    arr.forEach(function (v, k) { 
        if (max < +v.money) { 
        max = +v.money; 
        key = k; 
        }
    });
    return key
}



function whoOwesWho(Money){
    mxCredit = getMax(Money)
    mxDebit = getMin(Money)
    // console.log(mxCredit)
    // console.log(mxDebit)

    // console.log(Money[mxCredit])
  
    if (Money[mxCredit].money===0 && Money[mxDebit].money===0){
       return 0 }
    min = Math.min(-Money[mxDebit].money, Money[mxCredit].money)
    Money[mxCredit].money-=min
    Money[mxDebit].money +=min
    console.log("Person " , Money[mxDebit].user , " pays " , min, " to " , "Person " , Money[mxCredit].user) 
    whoOwesWho(Money)

}

let EachSpendingsTotal= [
    {
        user: 'a',
        money: 5000
    },
    {
        user:'b',
        money: 8000
    },
    {
        user:'c',
        money: 9000
    },
    {
        user:'d',
        money: 4000
    },
    {
        user:'e',
        money: 8000
    }
    
]

share=[
    {
        user: 'a',
        percent: 20
    },
    {
        user:'b',
        percent: 20
    },
    {
        user:'c',
        percent: 20
    },
    {
        user:'d',
        percent: 20
    },
    {
        user:'e',
        percent: 20
    }

]

const x= calculate(EachSpendingsTotal, share)
console.log(x)
// console.log(getMin(x))

whoOwesWho(x)
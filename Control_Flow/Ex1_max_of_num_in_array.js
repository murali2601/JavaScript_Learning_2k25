const arr = [2,5,2,5,2,7,3];

function max_num(array)
{
    let max = array[0];
    for(let num of array)
    {
        if(num > max)
            max = num;
    }
    return max;
}

console.log(max_num(arr))
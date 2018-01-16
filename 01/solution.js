function threeProperties(arr) {

let final = {
    highest: arr[0],
    lowest: arr[0],
    total: 0
}
arr.forEach(function(element) {
    if (element > final.highest) {
        final.highest = element;
    }
    if (element < final.lowest) {
        final.lowest = element;
    }
    final.total += element;
});

return final;

}


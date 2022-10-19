const reachDestination = (distance, speed) => {
    let var1 = distance / speed * 10;
    let var2 = Math.ceil(var1/5)*5;
    let time = var2 / 10;
    return ("I should be there in " + time + " hours");
};

module.exports = reachDestination;

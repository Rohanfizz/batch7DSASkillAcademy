function stairPaths(stair, n) {
    if (stair > n)
        return 0; //you are standing on a stair which is after the target stair,hence there are zero number of ways by which you can reach the nth stair
    if (stair == n)
        return 1; //you are standing on the nth stair, hence you found 1 way to reach the nth stair
    //if i take a jump of 1
    var one = stairPaths(stair + 1, n);
    //if i take a jump of 2
    var two = stairPaths(stair + 2, n);
    //if i take a jump of 3
    var three = stairPaths(stair + 3, n);
    return one + two + three;
}
console.log(stairPaths(0, 4));

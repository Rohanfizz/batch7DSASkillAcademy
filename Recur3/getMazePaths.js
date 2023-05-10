function mazePaths(n, m, i, j, path) {
    if (i > n || j > m)
        return;
    if (i == n && j == m) {
        console.log(path);
        return;
    }
    //if i go horizontally
    mazePaths(n, m, i, j + 1, path + "h");
    //if i go vertically
    mazePaths(n, m, i + 1, j, path + "v");
}
mazePaths(3, 3, 1, 1, "");

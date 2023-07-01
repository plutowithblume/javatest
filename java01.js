function remove(x) {
    let arr = []
    arr = x.split("");
    ex_out = arr[arr.length - 1];

    if (ex_out === "!") {
        arr.pop();
        console.log(arr)
    } else {
        return console.log(arr);
    }
}

remove("Hi")
remove("hi!!")
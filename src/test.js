function test() {
    let objt1 = {
        x: 43,
        y: "Hello World",
        w: function () {
            return this.x;
        }
    }
    let {x, y, w} = objt1;
    console.log(y); // 43
    console.log(x); // 43
    return objt1.w();
}

let testing = test()
console.log(testing); //43
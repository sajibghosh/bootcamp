var obj = {
    a: 10,
    b: 20,

    fun: function () {
        console.log(this.a)

        var my = function () {

            console.log(this.b)
        }.bind(this)

        my()
    }
}

obj.fun()
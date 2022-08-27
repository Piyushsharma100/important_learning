

Class chaining{
    Method1(){
    console.log(method1)
    return this
    }

    Method2(){
    console.log(method2)
    return this
    }

}

 Const chaining_obj = new chaining()
 chaining_obj
 .mathod1()
 .method2()

// //output
// method1
// method2

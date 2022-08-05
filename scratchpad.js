const myObject = {
    firstName: "Dave",
    lastName: "Fancher"
};

void Object.defineProperty(
    myObject,
    "age",
    {
        enumerable: true,
        value: 42
    });

void Object.defineProperty(
    myObject,
    "middleName",
    {
        enumerable: false,
        value: "William"
    });

Object.getOwnPropertyNames(myObject); //?
Object.keys(myObject); //?

/*
<pre>
    <code class="javascript" data-trim data-noescape data-line-numbers>

    </code>
</pre>
*/
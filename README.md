
# Writing functions...

## Start with the description

"Write a function that multiplies two numbers and returns the result"

```
function multiplyNumbers() {}
```

## Always return a value

```
function multiplyNumbers() {
    let result = 0; // a sane default

    return result;
}
```


## Ask yourself:

- how many arguments should I expect?

```
function multiplyNumbers(num1, num2) {
    let result = 0; // a sane default

    return result;
}
```


- what do I do to the arguments to produce the return value?

```
function multiplyNumbers(num1, num2) {
    let result = 0; // a sane default
    
    result = num1 * num2;

    return result;
}
```

```
function multiplyNumbers(num1, num2) {
    return num1 * num2;
}
```


## Test the function

Manually call the function and pass it some arguments.


```
multiplyNumbers(55, 15);
// 825
```

## Test the function again

Manually call the function and pass it some different arguments.

```
multiplyNumbers(60, 15);
// 900
```


## Test the function again, again

Manually call the function and pass it some different arguments, again.

```
multiplyNumbers(61, -15);
// -915
multiplyNumbers(100000, 0);
// 0
```

# Activity #1a

"Total expenses"

```
const expenses = [
    1234.56,
    89.42,
    9797.10,
    88.88,
    3.14
];
```
Write a function
that produces the sum
total of the expenses.






# Activity #1b

"Total expenses over $20"


# Activity #1c

"Number of expenses over $20"

# Activity #2

"Snake people"

# Activity #3

"Expletive remover"
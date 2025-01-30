> [!NOTE]  
> Era is still very very early in development, this documentation may be missing information, especially within data types.

# Era
A new interpreted programming language!

## Introduction
Era is a statically-typed, object-oriented programming language designed to be a powerful and flexible scripting solution for projects, games, and modding. Era aims to provide a more feature-rich alternative to Lua while maintaining a balance between ease of use, performance, and a small footprint. The language is intended to be easy to learn, while providing the power and tools to create complex applications.

## Inspiration
Era draws inspiration from a variety of languages, including:

*   **Lua:** For its simplicity, embeddability, and scripting focus.
*   **TypeScript and JavaScript:** For their dynamic typing, object-oriented patterns, and modern syntax.
*   **GDScript:** For its focus on game development and its event-driven model.
*   **Java and C#:** For their strong object-oriented features and some syntax ideas.

## Goals
The primary goals of Era are:

*   **Enhanced Scripting Power:** To provide a more feature-rich alternative to Lua for embedding in projects.
*   **Balance of Flexibility and Performance:** To offer a dynamic environment that doesn't sacrifice performance.
*   **Small Footprint:** To maintain a small size for ease of distribution and embedding.
*   **Future Compiled Version:** To eventually provide a compiled version of Era for improved performance in demanding scenarios.
*   **Ease of Use:** Designed to be easy to learn and easy to use, while still providing the power and features needed for complex applications.
*   **Modern Language Design:** Embracing modern language paradigms, such as first-class functions, events, and asynchronous operations.

# Implementation
Era's current implementation is a basic interpreter being written in Rust. Future plans include a compiler for increased performance and additional language features. The choice of Rust was to provide a performant base for Era. The implementation will emphasize safety and good performance practices.

# Core Language Features

## Data Types:

### int
The integer type, representing whole numbers, both positive and negative. Supports basic arithmetic operations and comparisons.

> [!NOTE]  
> Missing information.

### big_int
The theoretically infinitely large integer type, representing whole numbers as large as your computer can handle, positive and negative. Supports basic arithmetic operations and comparisons. A `big_int` can be created by putting an `n` at the end of an integer literal, using `new big_int()`, or by casting an integer.

> [!NOTE]  
> Missing information.

### float
The floating-point type, used for representing numbers with fractional parts. Supports arithmetic operations, rounding, and comparisons.

> [!NOTE]  
> Missing information.

### double
The double-precision floating-point type, similar to `float`, but with more precision and a larger range of values. Despite this, float is usually more prefered.

> [!NOTE]  
> Missing information.

### bool
The binary true or false data type, create using one of those two keywords.

> [!NOTE]  
> Missing information.

### string
The immutable string of characters. Represents text and can be defined in various ways.
Triple quotes for multiline, `f` for format, and `r` for raw.

> [!NOTE]  
> Missing information.

#### Creation
- **Single Quotes**: Represents a regular string.
  - Example: `"Hello"`
- **Triple Quotes**: Represents a multiline string.
  - Example: `"""Hello, World!"""`  
- **Raw Strings**: Raw strings preserve special characters and escape sequences.
  - Example: `r"/path/to/file"`

- **Formatted Strings**: `f"some text ${variable}"` allows embedding expressions within strings.
  - Example: `f"Hello, ${name}!"`

#### functions
- `.reverse()` - Returns a new reversed string.
  - Example: `("Hello").reverse() // Output: "olleH"`
  
- `.to_upper()` - Converts all characters in the string to uppercase.
  - Example: `("hello").to_upper() // Output: "HELLO"`

- `.to_lower()` - Converts all characters in the string to lowercase.
  - Example: `("HELLO").to_lower() // Output: "hello"`

- `.length()` - Returns the length of the string.
  - Example: `("Hello").length() // Output: 5`

- `.trim()` - Removes any leading or trailing whitespace.
  - Example: `"  hello  ".trim() // Output: "hello"`

- `.split(separator: string) -> array<string>` - Splits the string into an array based on the given separator.
  - Example: `"a,b,c".split(",") // Output: ["a", "b", "c"]`

- `.starts_with(substring): string` - Checks if the string starts with the specified substring.
  - Example: `("hello").starts_with("he") // Output: true`

- `.ends_with(substring: string)` - Checks if the string ends with the specified substring.
  - Example: `("hello").ends_with("lo") // Output: true`

- `.contains(substring: string)` - Checks if the string contains the specified substring.
  - Example: `("hello").contains("ell") // Output: true`

- `.index_of(substring: string)` - Returns the index of the first occurrence of the substring.
  - Example: `("hello").index_of("e") // Output: 1`

- `.replace(old: string, new: string)` - Replaces all occurrences of the old substring with the new one.
  - Example: `("hello world").replace("world", "Era") // Output: "hello Era"`

#### static functions
- `.reverse(string: string)` - Returns a new reversed string.
  - Example: `string.reverse("Hello") // Output: "olleH"`
  
- `.to_upper(string: string)` - Converts all characters in the string to uppercase.
  - Example: `string.to_upper("hello") // Output: "HELLO"`

- `.to_lower(string: string)` - Converts all characters in the string to lowercase.
  - Example: `string.to_lower("HELLO") // Output: "hello"`

- `.length(string: string)` - Returns the length of the string.
  - Example: `string.length("Hello") // Output: 5`

- `.split(string: string, separator: string)` - Splits the string into an array based on the given separator.
  - Example: `string.split("a,b,c", ",") // Output: ["a", "b", "c"]`

- `.contains(string: string, substring: string)` - Checks if the string contains the specified substring.
  - Example: `string.contains("hello", "ell") // Output: true`

#### operators
- `+ string` - Returns a new concatenated string.
  - Example: `"Hello " + "World" // Output: "Hello World"`

- `* int` - Returns a new string repeated that many times.
  - Example: `"W" * 5 // Output: "WWWWW"`

- `== string` - Compares two strings for equality, ignoring reference differences and capitalization.
  - Example: `"hello" == "hello" // Output: true`

- `=== string` - Compares two strings for equality, ignores reference differences, but considers capitalization.
  - Example: `"Hello" === "hello" // Output: false`

- `!= string` - Checks if two strings are not equal, ignoring reference differences and capitalization.
  - Example: `"hello" != "world" // Output: true`

- `!== string` - Checks if two strings are not equal, ignoring reference differences, but considering capitalization.
  - Example: `"Hello" != "hello" // Output: true`

- `> string`, `< string`, `>= string`, `<= string` - Compare strings lexicographically.
  - Example: `"apple" < "banana" // Output: true`

- `?= string` - Compares reference equality (checks if both strings are the same object).
  - Example: `"hello" ?= "hello" // Output: false`

- `!?= string` - Compares reference equality (checks if both strings are not the same object).
  - Example: `"hello" !?= "hello" // Output: true`

### array
An ordered collection of elements, which can be of any type. Arrays are resizable and allow indexing, iteration, and manipulation of their elements.

> [!NOTE]  
> Missing information.

#### static functions
- `.range(from: int, to: int)` returns an array containing `from` to `to` inclusive.

### dictionary
An unordered collection of key-value pairs, where each key is unique. Allows fast lookups, additions, and removals of elements based on their keys.

> [!NOTE]  
> Missing information.

### function
Represents a function, which can be defined and invoked within the program. Functions can have parameters, return values, and can be assigned to variables.

> [!NOTE]  
> Missing information.

### class

> [!NOTE]  
> Missing information.

### event
Represents an event, which can be triggered or emitted to notify subscribers. Events are commonly used for handling changes in state or responding to user actions.

> [!NOTE]  
> Missing information.

### enum

> [!NOTE]  
> Missing information.

### type
Represents a type, typically used for type checking or introspection. Allows determining the type of a value or variable at runtime. This type exists as the basic built in types are not classes but the "type" type can be both a built in type or a class.

> [!NOTE]  
> Missing information.

### error
Represents an error, typically thrown when an operation cannot complete as expected. Can contain an error message or additional details to describe the issue.
Errors will typically contain a basic error description, an error code, a stack trace, and other useful information about the error.

> [!NOTE]  
> Missing information.

## properties

## enums

## functions

### null
Represents a null or absent value. Used to indicate that a variable or object has no valid data or reference.

> [!NOTE]  
> Missing information.

### nullable
Represents a type that can either have a value of a specific type or be `null`. A nullable type can hold any valid value or `null` to indicate the absence of data.

> [!NOTE]  
> Missing information.

### immutable
Represents a type that cannot be changed after creation. Immutable types ensure that the value remains constant throughout the program. When used with an array or dictionary, this also ensures the contents of the array or dictionary cannot be modified.

> [!NOTE]  
> Missing information.

### future

> [!NOTE]  
> Missing information.

### void
Represents the absence of a value or return type. Used in functions to indicate that no value is returned, typically for procedures or operations that don’t need to provide a result.

> [!NOTE]  
> Missing information.

## Annotations:
All annotations in Era have paramaters to avoid creating glorified keywords. Annotations only modify, and thus do not return anything.
### @operator(symbols: string...)
- Context: Class Functions
- Description:
  Allows overloading of standard operators (such as +, -, *, etc.) or custom operators in the context of the class. This annotation defines how an instance of the class should behave when used with the specified operator.
  Operators can only be overloaded within the scope of a class and must be defined as instance methods.
  This annotation supports infinite string arguments, seperating each argument of the function with the "symbol". This means your annotation should always have one less argument than the amount of function arguments.
- Paramaters:
  Strings representing the operator to be overloaded (eg., "+", "-", "*");
- Usage:
  To use `@operator`, declare it above a class function. The function must take one or more arguments (depending on the operator) and return the result of the operation.
- Custom Operators:
  Defining custom operators is also supported. To decale one, simply provide a string represntation of it in the annotation. Custom operators must comform to Era's operator naming conventions.
### @deprecated(reason: string)
- Context: Functions, Classes, Variables, Events, etc.
- Description:
  Marks the function, class, or variable as deprecated. Indicates that certain code is outdated and should not be used in new implementations. 

## Casting
- You can cast in era with the `as` operator. `(0.5 as int) // Decimal places are stripped off, this equals 0`

## Comments
- Comments in Era use the `// ...` syntax for single-line and `/* ... */` for multiline. 

## Variables and Constants

- `let`: Used to declare variables.
  - Example: `let counter: int = 0`;
- `const`: Used to declare constants.
  - Example: `const pi: float = 3.14159`;

## Operators

Era supports a range of operators:

*   **Arithmetic:** `+`, `-`, `*`, `/`, `**` (power), `%` (modulus), `//` (quotient).
*   **Assignment:** `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `//=`.
*   **Bitwise:** `<<` (left shift), `>>` (right shift), `^` (XOR), `~` (NOT), `&` (AND), `|` (OR).
*   **Boolean:** `||` (OR), `&&` (AND), `<`, `>`, `<=`, `>=`, `!=`, `!`, `==`, `===`, `!==`, `is`, `is not`.
    *   Alternative boolean operators: `or`, `and`, `not`
*   **Identity:** `is` ,`is not` (check if references are the same.)
*  **Reference Equality:** `?=` (checks if two references are the same)
*   **Membership:** `in`, `not in`.
*   **Unary:** `+`, `-` for positive and negative.
*   **Increment/Decrement:** `++`, `--`
*   **Type:** `typeof`

## Control Flow

Era offers standard control flow structures:

*   **`if`, `elseif`, `else`:** Conditional execution.

    ```era
    if (condition) {
        // code to execute if condition is true
    } elseif (other_condition) {
         // code to execute if other condition is true
    } else {
        // code to execute if all conditions are false
    }
    ```
*   **`for` loop:** Iteration over a range or collection.

    ```era
    for (let index: int in array.range(0, 10)) {
        // code to execute for each index
    }
    ```
*   **`while` loop:** Repeated execution while a condition is true.

    ```era
    while (condition) {
        // code to execute while condition is true
    }
    ```
*    **`switch` statement:** Select one of many code blocks to execute.

    ```era
    switch (my_variable) {
        case value1:
            // code to execute if my_variable == value1
        break;
        case value2:
            // code to execute if my_variable == value2
        break;
        default:
            // code to execute if none are correct.
    }
    ```
*   **Ternary Operator:**  A shorthand for `if`/`else`.
    * Example: `let result: string = condition ? "true_value" : "false_value";`

## Functions

*   **`func` keyword:** Used to define functions.
*   **Explicit Return Type:** Functions have a declared return type using `->`.
*   **First Class Functions:** Functions are objects, and can be assigned to variables.
*   **Lambda-like Syntax:** Functions can have a lambda-like syntax `func(a: int) -> int { return a * 5; }`
*   **Overloading:** Functions can be overloaded with different types, and will error if used with the wrong parameters or return type.
    ```era
    func my_function(a:int) -> void {
        // ...
    }
    func my_function(a:string) -> int {
        // ...
    }
    ```
*   **Infinite Arguments:** Functions can support syntax for infinite arguments, within the function it is converted to an array of that type.
    *   Example: `func(inf_string: string...) -> string { return inf_string.length() > 0 ? inf_string[0] : "" }`
*   **Binding:** Functions can also be called with `.call()`, and arguments can be bound before calling with `.bind(type, value)`. `.bind()` returns a reference to the function for self-chaining and `.call()` returns the result of the function. `.call()` is special in that it's return type is dependant on the one of the target function.
    *   Example: `my_function.bind(int, 10)();`

## Classes and Objects

*   **`class` keyword:** Used to define classes.
*   **`constructor`:**  The constructor of a class. This internally is a function that returns a customized instance of the class, thus does not need the `func` or `->` syntax. It is called by the `new` keyword.
*   **`self`:**  Refers to the current instance of the class.
*   **Methods:** Functions defined inside classes are methods.
*   **`static` Methods:**  Methods associated with the class, not with an instance.
*   **Inheritance:** Classes can inherit from other classes using the `extends` keyword.
     *  Example: `class MyClass extends OtherClass { /* ... */}`
*   **Operator Overloading:** Can overload operators via `@operator("<operator>")`, and the function should return the expected type that `<operator>` is meant to use.
     *  Example: `@operator("+") func plus(b: MyClass) -> MyClass { /* ... */}`
*  **Classes are objects:** Classes themselves can be assigned to variables, similar to functions.

## Events

*   **`event` keyword:** Used to define custom events. Events can have types specified in the declaration `event on_click(x: int, y: int);`.
*   **Emit:** Events are emitted similar to calling a method.
    *   Example: `on_click(1,2)`
*   **Subscribe/Connect:** Functions can subscribe/connect to events using `.subscribe` and `.connect`.
    *   Example: `my_function.subscribe(my_object.on_click);`
    *   Example: `my_object.on_click.connect(my_function);`
*   **Unsubscribe/Unconnect:** Functions can break subscriptions to events using `.unsubscribe` and `.unconnect`.
    *   Example: `my_function.unsubscribe(my_object.on_click);`
    *   Example: `my_object.on_click.unconnect(my_function);`
*  **Events are objects:** Events themselves can be assigned to variables, similar to functions.
*  **Bound arguments:** Events can be emitted with bound arguments with `.bind()`. Much like functions, `.bind()` returns a reference to the event for self-chaining but `.emit()` returns void.
    *   Example: `my_object.on_click.bind(int, 10).bind(int, 20).emit();`

## Enums

*   **`enum` keyword:** Used to define enumerations, which consist of a list of named values that represent constants.
*   **Named values:** Each named value is associated with an integer, and when the integer is not specified, the integer will autoincrement from the last value.
    * Example: `enum directions { up = 0, down, left = 2, right };`
*   **Values of any type:** A named value in an enum does not have to be an integer, but can be any data type.

## Modules

*   **`import` keyword:** Used to import modules.
    *   Example: `import math from "!math";`
    *   Example: `import * as utils from "my_utils";`
*   **`export` keyword:** Used to export data to create modules.
    *   Example: `export my_function, my_const, my_enum`
    *   Example: `export {my_function, my_const, my_enum}`
*   **Namespaces:** Modules provide namespaces for organization.
*   **Path Resolution:** Paths in modules are automatically realtive to the file, you can use `".."`to go back one. Some modules like `"math"` are built in and do not have a specific path. Built in modules are acessed from `"!"`.

## Error Handling

*   **`try` and `catch`:** Used to handle exceptions.
*  **`throw`:** Used to throw an error, which can be an error object or an existing error.
*   **`error` Type:** A special type to handle errors.
*   **Custom Errors:**  Users can create custom errors by extending from the error class, or the try catch block will catch errors of `type` error.
*   **Error Properties:** Errors have a property `to_string()` and a `stack_trace` that contains debugging information.

## Async Operations

*   **`async` keyword:** Used to define async functions.
*   **`await` keyword:** Used in async functions to wait for a event to emit, can also be used with async functions to wait for a `future<T>` to provide a value.
    *   Example: `await square.size_changed;`
*  **`yield` keyword:** Used in async functions to yield until a condition is true or not nil.
    * Example: `yield true;`
*   **`future<T>`:** Async functions return a future, which then provides a value.

## Garbage Collection

Era uses a Hybrid Generational Garbage Collector with Incremental Mark and Sweep for Cycle Detection.

*   **Generational GC:** Focuses on collecting short-lived objects.
*   **Incremental Mark and Sweep:**  Handles circular references and avoids full pauses.
*    **Reference Counting:** Memory is managed automatically using reference counting.
*   **Manual GC Trigger:** A way to manually trigger garbage collection if needed.
*    **`delete` keyword:** Allows for manual deallocation of variables and values. This method should be used cautiously as references to deleted variables will error.

## Naming Conventions
Everything in Era is `snake_case`. Functions, variable names, and classes, including the built-in ones, follow this convention.

## Required semicolons.
Era requires semicolons much like Java.

## Built-in Modules
Era provides several built-in modules, these are opt-in so that developers imbedding Era into projects made remove these as needed.
### math

> [!NOTE]  
> Missing information.

### time

> [!NOTE]  
> Missing information.

### output

> [!NOTE]  
> Missing information.

### input

> [!NOTE]  
> Missing information.

### random

> [!NOTE]  
> Missing information.

# Future Directions

This is a general idea on some features to come in the future.

*   **Compiler:** Plan on a compiled alternative for faster execution.
*   **More Modules:** Expand the standard library with additional modules.
*   **Language Improvements:** There are likely many more language improvements and features to be made.

# Example Programs:
## Everything
This "program" attempts to show off everything in Era.
```era
import math from "!math";
import time from "!time";
import output from "!output";
import random from "!random";
import my_external_int, my_external_class from "external_files";
import * as utils from "my_utils";

let number: int = 1;
const const_number: int = 1;

let my_array: array<int> = [1,2,3,4]; // Arrays are resizable!
my_array[0]; // Era arrays start at 0!
let my_dictionary: dictionary<string,int> = {
    "bob" = 1,
    "john" = 2
};

output.print(math.cos(time.get_computer_time_milliseconds()));

my_array.push(7);
array.push(my_array, 10);
my_dictionary["sunny"] = 18;

func my_function(argument_one: number) -> void {
    number += argument_one;
}

class square {
    let size: float;
    event size_changed(old_size: float, new_size: float);
    func double_size() -> void {
        size_changed(size, size*2); // size_changed is an event, not a function. The syntax for emitting events is the same however.
        size *= 2;
    }
    @operator("+") // Overloads a + b, this annotation also allows custom operators. This is only acceptable from within classes.
    func plus(b: square) -> square { 
        return new square(size + b.size);
    }
    func get_size() -> float {
        return size;
    }
    func to_string() -> string { // used internally by the output.print() too.
        return "square: " + size.to_string();
    }
    static func do_something() -> void {

    }
    constructor(size: float) {
        self.size = size;
    }
}

let my_square: square = new square(3);

func print_debug() {
    output.print("Size changed!");
}

print_debug.subscribe(my_square.size_changed);
// my_square.size_changed.connect(print_debug); also works!

let functions_are_objects_too: function = func() -> void { output.print("hello!"); };
let classes_are_objects_too: class = class { constructor() {} };
let events_are_objects_too: event = my_square.size_changed;

// Functions can also be called with .call(); and bind arguments before calling with .bind(type, value);
// Events can also be emitted with .emit(); and binded in the same way.

output.print("string " + "concatenation");

let immutable_strings: string = "my favorite string";
let new_string: string = immutable_strings + " has made a new string!";

const list: immutable<array<int>> = [1, 2, 3];
const nested_list: array<immutable<array<int>>> = [[1, 2, 3].to_immutable(), [1, 8, 7].to_immutable()];

func function_in_function(the_function: function<[int], int>, argument_one: int) -> int { // this just to show off binding and calling. You would just call this func normally.
    return (the_function.bind(int, argument_one))(); 
}

function_in_function(func(a: int) -> int { return a * 5 }, 2)  // returns 10

(func() {
    let scope: string = "My scope!"
})()

(typeof 6); // int
(typeof "hello"); // string
(typeof int); // type
(typeof square); // class
(typeof null); // null

class rectangle extends square {
    let width: float
    constructor(size: float, width: float) {
        self.width = width;
        super(size);
    }
}

enum square_properties {
    none = 0,
    pushable = 2,
    squishable = 4,
    consumable = 8
}

func nullable_func() -> nullable<int> {
    return random.random_bool() ? null : random.random_int_range(0,100); // Ternary!
}

("Hello" === "hello"); // false
("Hello" == "hello"); // true
("hello" ?= "hello"); // false, ?= checks specifically for reference equality.

if (nullable_func() is null) {
    output.print("We gotta null!")
}

([]); // truthy
({}); // truthy
(""); // truthy
(0); // falsy
(1); // truthy
(null); // falsy

for (let index: int in array.range(0, 100)) {
    output.print(index);
}

while (false) {
    // wont run
}

let my_type: type = string
// this also works!
//let my_type: typeof string = string 

switch (my_type) {
    case string:
        output.print("String Found!");
        break;
    case int:
        output.print("Ew! An int!");
        break;
    default:
        output.print("I dunno, " + my_type.to_string());
}

if (true) {
    // ...
} elseif (true) {
    // ...
} else {
    // ...
}

// Era supports standard operators, + - / *, Era uses ** for power as Era also supports various bitwise operations, <<, >>, ^, ~, &, |
// Era also has boolean operators, such as ||, &&, <, > <= >=, !=, !, ==, ===, !==
// Era even supports "or", "and", and "not".
// Era also has % modulus, // and quotient.
// Era supports the assignment operator versions of these too, =, +=, -=. *=, %=.
// Era supports Unary positive, Unary negative too, +x, -x.
// Era supports identity operators, is, is not.
// Era supports membership operators, in, not in.
// Era supports ++, and --
// Era also of course has the reference operators, ?= and !?=

// Era fully supports function overloading and overriding. Overloading performs type-checking and bad overloading will give errors.

/*
Multiline Comments!
*/

let my_multiline_string: string = """
Multiline

String!\n\n\t
""";
let my_raw_string: string = r"/t/h/i/s /s/t/r/i/n/g /i/s/r/a/w";
let my_format_string: string f"${my_raw_string} is a cool string";

let useless: int = 47;
useless++;
useless++;
delete useless;

let hex: int = 0x100;

import risky_operation from "risky_api";

let simple_cast: float = number as float; 

let squares = [x * x for let x: int in array.range(0, 10)];
let names_to_lengths = {name = name.length() for let name: string in ["bob", "john"]};

try {
    let result = risky_operation();
} catch (caught_error: error) {
    output.print_error("Error occurred: " + caught_error.to_string());
}

// alternatively:

try {
    let result = risky_operation();
} catch (caught_error: error) {
    throw error;
}

throw new error("bad code");

async func asyncables() {
    await square.size_changed; // Await will wait until an event is emitted.
    yield true; // yield will simply wait until a value is true.
    await time.timer(new time.seconds(10));
}

func infinite_arguments(my_strings: string..., afterwards: int) { // Infinite arguments can have after them so long as the types do not match.
  for (let argument: string in my_strings) {
    output.print(argument);
  }
  output.print(afterwards);
}

export my_raw_string, my_format_string;
```
## Hello World
A very basic hello world program in Era
```era
output.print("Hello, World!");
```
## FizzBuzz
The classic programming exercise now in Era!
```era
for (let i: int in array.range(1, 100)) {
    if (i % 3 == 0 && i % 5 == 0) {
        output.print("FizzBuzz");
    } elseif (i % 3 == 0) {
        output.print("Fizz");
    } elseif (i % 5 == 0) {
        output.print("Buzz");
    } else {
        output.print(i);
    }
}
```
## Prime Number Checker
Is this number a prime number? Let's find out using Era!
```era
func is_prime(n: int) -> bool {
    if (n <= 1) {
        return false;
    }
    for (let i: int in array.range(2, (n**0.5) as int)) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

output.print(is_prime(11));  // Output: true
```


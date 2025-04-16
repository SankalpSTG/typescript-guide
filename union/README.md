# Unions in Typescript

Unions are basically combining multiple types into one. Whether you do
```typescript
let x: int | string
```
or you do 
```typescript
let x: "a" | "b"
```

Notice the pipe operator in the declaration. It is OR operation that tells that the variable will either hold value of type "a" or type "b".

Unions can be more complex. For e.g. in the ```./index.ts``` file you can notice we have created a union of two types of configuration options.

This is useful specially when you expect two types of values but only one will be provided in one case.

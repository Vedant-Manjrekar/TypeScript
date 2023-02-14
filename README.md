# TypeScript

1. ### Dynamic vs Static Typing

In dynamically typed languages, the types are associated with run-time values and not named explicitly in your code
In statically typed languages, you explicitly assign types to variables, function parameters, return values, etc

Static Examples: Java, C, C++, Rust, Go
Dynamic Examples: JavaScript, Python, Ruby, PHP

2. ### PRO'S AND CON'S

## | PROS | CONS |

More Robust | More Code To Write |
Easily Spot Bugs | More To Learn |
Predictability | Required Compilation |
Readability | Not True Static Typing |
Popular | |

3. ### Compiling TypeScript

   - TypeScript uses .ts and .tsx extensions
   - TSC (TypeScript Compiler) is used to compile .ts files down to JS
   - Can watch files and report errors at compile time
   - Many tools include TS compilation by default
   - Most IDEs have great support for TS
   - The tsconfig.json file is used to configure how TypeScript works

4. ### Creating a config file

   1. `tsc --init`
   1. In tsconfig.json `"target": "ES6"` to change version of JS.
   1. `"rootDir"` is where ts files will reside
   1. `"outDir"` is where js files will reside

5. ### Basic types

   1. `number`
   1. `string`
   1. `boolean`
   1. `any` -> dynamic type
   1. `array` -> `<type>[]`
      - Example: `let ids: number[] = [1, 2, 3, 4, 5]`
      - `any` as a type for a array is valid, it will support dynamic type.
      - `tuple` is when we want specific types elements to go in a specific order in an array.
      - Example: `let person: [number, string, boolean] = [1, 'Brad', false ]`
   1. `union '|'` -> to define more than 1 type to a variable.
   1. [`enum`](https://www.typescriptlang.org/docs/handbook/enums.html)

      - Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.

      - just access any member as a property off of the enum itself, and declare types using the name of the enum

   1. `Objects`
      - Objects are like normal objects but we can define types for their properties.
      - `type` or `interface` can also be used to define types for the properties.
   1. `Type Assertion`
      - over-riding type of an entity while inheriting it.
      - way #1: `<type>element`
      - way #2: `element as type`

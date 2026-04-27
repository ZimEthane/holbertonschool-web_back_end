# ES6 Classes

## Description

This project explores Object-Oriented Programming in JavaScript using ES6 class syntax. It covers class definition, getters/setters, static methods, inheritance, abstract classes, metaprogramming with Symbols, and hoisting behavior.

## Learning Objectives

By the end of this project, you should be able to explain:

- How to define a Class in ES6
- How to add methods to a class
- Why and how to add a static method to a class
- How to extend a class from another (inheritance)
- Metaprogramming and Symbols

## Requirements

- Node.js `20.x.x`
- npm `9.x.x`
- All files use the `.js` extension
- Code tested with **Jest** and verified with **ESLint** (Airbnb style)

## Setup

```bash
# Install Node.js 20.x.x
curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y

# Install project dependencies
npm install
```

## Run Tests

```bash
# Run tests only
npm run test

# Run lint + tests
npm run full-test
```

## Tasks

### 0. `0-classroom.js` — ClassRoom
A simple class that accepts `maxStudentsSize` and stores it in `_maxStudentsSize`.

### 1. `1-make_classrooms.js` — initializeRooms
A function that returns an array of 3 `ClassRoom` instances with sizes `19`, `20`, and `34`.

### 2. `2-hbtn_course.js` — HolbertonCourse
A class with `name` (String), `length` (Number), and `students` (array of Strings). Includes type validation in the constructor and getters/setters for each attribute.

### 3. `3-currency.js` — Currency
A class with `code` and `name` attributes, getters/setters, and a `displayFullCurrency()` method returning `name (code)`.

### 4. `4-pricing.js` — Pricing
A class with `amount` and `currency` (Currency) attributes. Includes a `displayFullPrice()` instance method and a `convertPrice(amount, conversionRate)` static method.

### 5. `5-building.js` — Building (Abstract Class)
A class that acts as an abstract base. Any subclass **must** implement `evacuationWarningMessage()`, or an error is thrown on instantiation.

### 6. `6-sky_high.js` — SkyHighBuilding
Extends `Building` with a `floors` attribute. Overrides `evacuationWarningMessage()` to return `Evacuate slowly the N floors`.

### 7. `7-airport.js` — Airport
A class with `name` and `code`. Uses `Symbol.toStringTag` so that the default string description returns the airport code (e.g. `[object SFO]`).

### 8. `8-hbtn_class.js` — HolbertonClass
A class with `size` and `location`. Uses `Symbol.toPrimitive` so that:
- Casting to `Number` returns `size`
- Casting to `String` returns `location`

### 9. `9-hoisting.js` — Hoisting Fix
Fixes a broken file by reordering class declarations before their usage, fixing constructor parameter names, and correcting `self` → `this` references.

### 10. `10-car.js` — Car with cloneCar
A class with `brand`, `motor`, and `color`. Implements a `cloneCar()` method using a `Symbol`-keyed internal method so that subclasses return the correct instance type when cloned.

## Author

Holberton School — Web Back End

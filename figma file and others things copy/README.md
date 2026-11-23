
## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

My Answer to Q1 Below Here :- 
1. By "getElementById" i can get a element which a unique id. To use this every element should have unique element. It returns only a single element
2. By "getElementsByClassName" i can get those element which have the same class name. It returns a HTML collection.
3. By "querySelector" i can get the first matching CSS selector. It return a single element. 
4. By "querySelectorAll" i can get all matching CSS selector. It return a node list.

### 2. How do you create and insert a new element into the DOM?

My Answer to Q2 Below Here :- 
1. At first i have to create a element. I can do this with "document.createElement()".
2. Then i need to insert the element in the html. I can do this with "appendChild()". It will insert this element on a parent element. There is some other methon append(), prepend(), these also similar but prepend append the element on the starting/beginnig of the parent element.

### 3. What is Event Bubbling? And how does it work?
My Answer to Q3 Below Here :- 
Event Bubbling is a method in JS DOM where an event start from the target element(ex : a click on a element) and propagetes upward through parent elements. Then immediate parent untill it reaches the root of the documnet. Basically child -> parent -> parent ... -> root. It is the foundation of "Event Delegation"


### 4. What is Event Delegation in JavaScript? Why is it useful?

My Answer to Q4 Below Here :- 
"Event Delegation" is a technique where i add a single event listener on a parent element so i dont need to add seperate event lisenters for each child. It works using Event Bubbling machanism where events propagates upward to parent element.

It is useful because it reduces the event listener number, improves the performance, handles the dynamically created elements, makes code cleaner and easier to maintain. 


### 5. What is the difference between preventDefault() and stopPropagation() methods?

My Answer to Q5 Below Here :- 
"preventDefault()" prevents the browser's default behavior for an event.

"stopPropagation()" stops an event from progatting to parent elements during event bubbling
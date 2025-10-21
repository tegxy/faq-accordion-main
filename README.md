# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.
![Design preview for the FAQ accordion coding challenge](./design/desktop-preview.jpg)

## The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

#### What I learnt

What I learned during the course of this project can be into two parts.

# 1 New css properties

- you can use css without adding media query and it would still be responsive
  example:
  <style>
    ...
    width: min(56rem, 50%);
    ...
  </style>
  this css line makes it possible for the width to adapt without adding media query.
- Understanding "min and max" inputs
- Also there's this very useful css property that makes it easy to select a particular div amongst many similar divs.
  example:
  <style>
    ...
    section:last-of-type {
    border-bottom: none;
  }
    ...
  </style>
  as seen it selects just the last section div easily without writing numerous different classes
  for just one div.
- Making site compatile to other device resolutions

## 2 JavaScript

this is my first JS project and it was challenging but i understood functions more

- how to select multiple classes using querySelectorAll
- how to use .forEach() function to loop
- understanding DOM manipulation using .forEach()
example:
<script>
  ...
icons.forEach((otherIcon) => {
  let otherDiv = otherIcon.closest("section");
  let otherText = otherDiv.querySelector(".text");

      or 

  let otherDiv = otherIcon.parentElement;
  let otherText = otherDiv.querySelector(".text");

  //depending on the html structure.
}
....
</script>

- I also got introduced to some other useful JS functions like:
  .show(), .remove(), .includes(), .closest(),.

##### Useful resources

- Free code camp - https://www.freecodecamp.org/learn/
- Udemy - https://www.udemy.com/course-dashboard-redirect/?course_id=764164 -

###### Author

- Website - Tega Lucky-Fiakpa (https://heisenberg-accordion.netlify.app/)
- Frontend Mentor - @tegxy(https://www.frontendmentor.io/profile/tegxy)
- Twitter - @tegxy(https://www.twitter.com/tegxy)

###### Acknowledgments

- KFC
- Victor Adeyemo

// import a CSS module
import classes from './main.scss';

console.log('classes', classes);

export const template = `
<div>
  <h1 class="${classes.heading}">Hello From Parcel</h1>
  <p class="${classes.text}">Some body text</p>
</div>
`;

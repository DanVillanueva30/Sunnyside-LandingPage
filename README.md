# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). 

## Table of contents

  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)



### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL:(https://sunny-sidechallenge.netlify.app/)

## My process

  First I studied each design in detail to be able to organize the html code and be able to use the BEM methodology correctly. Once I finished the first step I began to write my solution to the challenge. I broke the job down into small steps to complete it as quickly and efficiently as possible. Once the design for mobile and desktop was finished, I wrote the javascript code for the mobile menu.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

- I learned how to change the color of an image with css
- How to use absolute and relative positions for navigation layout
- How to create a triangle with css and how borders work.

To see how you can add code snippets, see below:

```html
<nav class="navegacion">
  <a href="#" class="navegacion__link ">About</a>
  <a href="#" class="navegacion__link ">Services</a>
  <a href="#" class="navegacion__link ">Projects</a>
  <a href="#" class="navegacion__link navegacion__link--contacto">Contact</a>
</nav>

how to change the color of an image with css:
<div class="footer__iconos">
  <div class="iconos">
    <img class="icono" src="images/icon-facebook.svg" alt="icono Facebook">
  </div>
  <div class="iconos">
    <img class="icono" src="images/icon-instagram.svg" alt="icono Instagram">
  </div>
  <div class="iconos">
    <img class="icono" src="images/icon-twitter.svg" alt="icono Twitter">
  </div>
  <div class="iconos">
    <img class="icono" src="images/icon-pinterest.svg" alt="icono Pinterest">
  </div>
</div><!--Footer Iconos-->
```

```css
.navegacion {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--blanco);
    margin-top: 5rem;
    padding: 2rem 0;
    position: relative;

}
.navegacion::before {
    content: '';
    width: 0;
    height: 0;
    background-color: var(--blanco);
    top: -3rem;
    right: 0;
    display: block;
    position: absolute;
    border-top: 1.5rem solid #3ebfff;
    border-left: 1.5rem solid #3ebfff;
    border-right: 1.5rem solid var(--blanco);
    border-bottom: 1.5rem solid var(--blanco);
}

how to change the color of an ``image`` with css:
.footer__iconos {
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 3rem;
    cursor: pointer;
}

.icono:hover {
    filter: hue-rotate(60deg) brightness(500%);   
}
```

### Continued development

I will continue practicing the use of BEM, creating geometric figures, how absolute and relative position works. And how not to lose image quality for very large devices.


### Useful resources

- [Create geometric figures with html and css](https://cybmeta.com/formas-basicas-con-css-triangulos-circulos-trapecios-rectangulos-cuadrados) - I'd recommend it to anyone still learning this concept.
- [Change the color of an image with css](https://es.stackoverflow.com/questions/87567/cambiar-color-de-una-imagen-con-css) - This is an amazing article which helped me to understand how it works HSL(hue, saturation, lightness) and the diferences with RGB. I'd recommend it to anyone still learning this concept.


## Author

- Frontend Mentor - [@DanVillanueva30](https://www.frontendmentor.io/profile/DanVillanueva30)


// const template = Handlebars.compile("Handlebars <b>{{doesWhat}}</b>");
import makeTemplateDishes from "../templates/dishes-list.hbs"
import {products} from "./dishes.js"

const layout = makeTemplateDishes({products});
console.log(layout)

const bodyEl = document.querySelector("body");
bodyEl.innerHTML = layout;
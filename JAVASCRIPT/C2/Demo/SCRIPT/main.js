import {save, getData} from "../libs/storage.js";
import { getElements } from "../libs/element.js";

save("user", "hello world");

console.log(getData("user"));

console.log(getElements('li'));
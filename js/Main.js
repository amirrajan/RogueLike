import {
    getNextAndPrevChar,
    confirmSelectedChar,
    createCharacter,
} from "./UI/CharacterSelect.js";

import { changeState } from "./States/StateHandler.js";

let currentState = "character-select";

getNextAndPrevChar();

console.log(confirmSelectedChar(createCharacter));

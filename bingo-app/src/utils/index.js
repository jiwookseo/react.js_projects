import { range, shuffle } from 'underscore'

export default function getRandomNumber() {
    return shuffle(range(1,26));
}
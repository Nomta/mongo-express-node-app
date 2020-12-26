/** @jsx jsx */
import '@/sass/main.scss';
import './index.scss';

const codes = ['f', '8', '0'];
const hexs = [];

codes.forEach((r) =>
    codes.forEach((g) => codes.forEach((b) => hexs.push(`${r}${g}${b}`)))
);

const List = (
    <ul class="hex-list">
        {hexs.map((hex) => (
            <li style={'background-color: #' + hex} title={hex}></li>
        ))}
    </ul>
);

document.getElementById('root').appendChild(List);

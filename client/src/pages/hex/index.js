/** @jsx jsx */

import { colors } from '@/colors/colors';
import edelweiss from '@/colors/edelweiss';
import '@/sass/main.scss';
import './index.scss';

const List = (props) => (
    <ul class="hex-list">
        {props.codes.map((code) => (
            <li style={'background-color: #' + code} title={code}></li>
        ))}
    </ul>
);

// const codes = ['f', '8', '0'];
// const rgbs = [];

// codes.forEach((r) =>
//     codes.forEach((g) => codes.forEach((b) => rgbs.push(`${r}${g}${b}`)))
// );

// const ColorList = (<div class="container">
//     {Object.values(colors).map(value => <List codes={value}/>)}
// </div>);

const Edelweiss = (
    <div class="container">
        <List codes={colors.meadow} />
        <List codes={colors.asphalt} />
        <List codes={colors.skyblue} />
        <List codes={edelweiss.colors} />
    </div>
);

// document.getElementById('root').appendChild(<List codes={rgbs}/>);
// document.getElementById('root').appendChild(ColorList);
document.getElementById('root').appendChild(Edelweiss);

import ReactDOM from 'react-dom';
import { colors } from '@/colors/colors';
import edelweiss from '@/colors/edelweiss';
import '@/sass/main.scss';
import './index.scss';

const List = (props) => {
    return (
        <ul className="hex-list">
            {props.codes.map((code) => (
                <li key={code} style={{ backgroundColor: `#${code}` }} title={code}></li>
            ))}
        </ul>
    );
};

const Edelweiss = () => {
    return (
        <div>
            <List codes={colors.meadow} />
            <List codes={colors.asphalt} />
            <List codes={colors.skyblue} />
            <List codes={edelweiss.colors} />
        </div>
    );
};

ReactDOM.render(<Edelweiss />, document.getElementById('root'));

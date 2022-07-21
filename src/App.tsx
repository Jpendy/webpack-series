import './styles.css';
import myImage from './assets/view.jpg';
import reactIconSvg from './assets/react-icon.svg';
import Counter from './components/counter/Counter';

const App = () => {

    return (
        <>
            <h1>Hello Webpack series - {process.env.NODE_ENV} - {process.env.NAME}</h1>
            <img src={myImage} alt='view' height='200' width='300' />
            <img src={reactIconSvg} alt='view' width='300' />
            <Counter />
        </>
    );
};

export default App;
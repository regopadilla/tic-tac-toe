import './Square.css';

function Square({ click, value }) {

    return (
        <div onClick={() => click()} className="square" >
            <p style={{ fontSize: 70, color: value === 'X' ? 'green' : value === 'O' ? 'blue' : 'black' }} >
                {value}
            </p>
        </div>
    );
}

export default Square;
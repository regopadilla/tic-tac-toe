import React from 'react'
import Square from '../components/Square'

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentClick: 0,
            boardValue: [
                ['-', '-', '-'],
                ['-', '-', '-'],
                ['-', '-', '-']
            ],
            haveWinner: false,
            winner: 'none',
            isDraw: false
        };
    }
    clickSquare = (locationX, locationY) => {
        const { boardValue, currentClick, haveWinner } = this.state
        let boardCopy = boardValue
        if (boardValue[locationX][locationY] === '-' && haveWinner === false) {
            if (currentClick % 2 === 0) {
                boardCopy[locationX][locationY] = 'X'
                this.setState({ currentClick: currentClick + 1, boardValue: boardCopy })
                this.checkWinCondition('X')
            } else {
                boardCopy[locationX][locationY] = 'O'
                this.setState({ currentClick: currentClick + 1, boardValue: boardCopy })
                this.checkWinCondition('O')
            }
            console.log(locationX, locationY)
        }

    }

    renderSquare = (x, y) => {
        return (
            <Square key={x + y} click={() => this.clickSquare(x, y)} value={this.state.boardValue[x][y]} />
        )
    }

    checkWinCondition = (type) => {
        const { boardValue, haveWinner } = this.state;
        let boardValueCopy = boardValue

        if (boardValue[0][0] === type && boardValue[0][1] === type && boardValue[0][2] === type) {
            this.setState({ haveWinner: true, winner: type })
        } else if (boardValue[1][0] === type && boardValue[1][1] === type && boardValue[1][2] === type) {
            this.setState({ haveWinner: true, winner: type })
        } else if (boardValue[2][0] === type && boardValue[2][1] === type && boardValue[2][2] === type) {
            this.setState({ haveWinner: true, winner: type })
        } else if (boardValue[0][0] === type && boardValue[1][0] === type && boardValue[2][0] === type) {
            this.setState({ haveWinner: true, winner: type })
        } else if (boardValue[0][1] === type && boardValue[1][1] === type && boardValue[2][1] === type) {
            this.setState({ haveWinner: true, winner: type })
        } else if (boardValue[0][2] === type && boardValue[1][2] === type && boardValue[2][2] === type) {
            this.setState({ haveWinner: true, winner: type })
        } else if (boardValue[0][0] === type && boardValue[1][1] === type && boardValue[2][2] === type) {
            this.setState({ haveWinner: true, winner: type })
        } else if (boardValue[2][0] === type && boardValue[1][1] === type && boardValue[0][2] === type) {
            this.setState({ haveWinner: true, winner: type })
        } else if (!haveWinner && !boardValueCopy.flat().includes('-')) {
            this.setState({ isDraw: true })
        }
    }
    reset = () => {
        this.setState({
            currentClick: 0,
            boardValue: [
                ['-', '-', '-'],
                ['-', '-', '-'],
                ['-', '-', '-']
            ],
            haveWinner: false,
            winner: 'none',
            isDraw: false
        })
    }

    render() {
        const { haveWinner, winner, isDraw } = this.state

        return (
            <div>
                {haveWinner && <label style={{ color: winner === 'X' ? 'green' : 'blue', fontSize: 50 }}>WINNER: {winner}</label>}
                {isDraw && <label style={{ color: 'red', fontSize: 50 }}>The game is DRAW!</label>}
                <div style={{ display: 'flex', paddingBottom: 15, alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ backgroundColor: 'white', width: 400, height: 400, display: 'flex', flexDirection: 'column' }}>
                        {[0, 1, 2].map((x) => {
                            return (
                                <div key={x} style={{ width: '100%', height: '33.3%', display: 'flex', flexDirection: 'row' }}>
                                    {[0, 1, 2].map((y) => this.renderSquare(x, y))}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <button onClick={() => this.reset()} >Reset</button>
            </div>

        )
    }
}

export default Board
function Square({ click, value }) {

    return (
        <div onClick={() => click()} style={{ border: '1px solid', borderColor: 'black', width: '100%', height: '100%', display: "flex",justifyContent:'center',alignItems:'center' }}>
            <p style={{fontSize:70,color:value==='X'?'green':value==='O'?'blue':'black'}}>{value}</p>
        </div>

    );
}

export default Square;
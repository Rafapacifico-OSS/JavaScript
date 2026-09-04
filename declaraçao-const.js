function exemploVar() {
function exemploConst() {
    const x = 10;
    console.log(x) 
    //isso causara um erro porque x foi declarado como const
    // x = 20; // isso causara um erro porque x foi declarado como const
    if (true) {
        const x = 30
        console.log(y) // 30
    }
    // console.log(y); // isso causara um erro por que o Y nao existe fora do bloco
}
exemploVar();
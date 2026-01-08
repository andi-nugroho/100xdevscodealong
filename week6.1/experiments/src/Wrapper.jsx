+function App(){
    return(
        // pasing a component as a props
    <div>
    {/* <CardWrapper innerComponenet={<TextComponent/>}/>
    <CardWrapper innerComponenet={<TextComponent2/>}/> */}
    {/* better way to use card wrapper is to use it in expanded form and write the 
    components as a children that can be accesed in this card wrapper component as childern */}
    <CardWrapper>
        {/* HI there! */}
        <TextComponent/>
        <TextComponent2/>
    </CardWrapper>
    </div>
    )
}
function CardWrapper({children}){
    return(
        <div style={{border:"2px solid black"}}>
            {children}
        </div>
    )
}
function TextComponent(){
    return(
        <div>
            Hi There!
        </div>
    )
}
function TextComponent2(){
    return(
        <div>
            HI there 2!!
        </div>
    )
}
export default App;
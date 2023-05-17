import { styled } from "..";

export const Container = styled('div',{
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-start',
    justifyContent:'center',
    minHeight: '100vh',
    position:'relative',

   '> img':{
        margin:'0 auto'
    }
})

export const Header = styled('header', {
    padding: '2rem 0',
    width: '100%',
    maxWidth:1100,
    margin: '0 auto',
    display:"flex",
    alignItems:'center',
    justifyContent:'space-between',

    div:{
        backgroundColor:'$gray800',
        width:50,
        height:50,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
        position:'relative',
        cursor:'pointer',

        '&::after':{
            content:`attr(data-count)`,
           position:'absolute',
           right:'-15px',
           top:'-10px',
           backgroundColor:'$green300',
           borderRadius:'50%',
           padding: '5px 10px',
        }
    }
})
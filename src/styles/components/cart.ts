import { styled } from "..";


export const CartContainer = styled('div',{

backgroundColor: '$gray800',
position: 'absolute',
zIndex:'100',
right: '0',
height:'100vh',
width: '500px',
display:'flex',

gap:'1rem',
alignItems: 'center',
flexDirection:'column',
justifyContent: 'center',

svg:{
color:'$gray300',
position:'absolute',
top:'3rem',
right:'3rem',
cursor:'pointer'
},


section:{
height: '70%',
width: '80%',
margin: ' 0 auto',
overflow:'hidden',

div:{
    display:'flex',
    flexDirection:'column',
    gap:'2rem'
},
h1:{
    color:'$white',
    marginBottom: '1rem',
    fontSize:'$2xl'
}

},

'> div':{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    gap:'1.5rem',
    width:'100%',
   div:{
    width:'90%',
    display:'flex',
    flexDirection:'column',
    gap:'1rem',
    span:{
        display:'flex',
        justifyContent:'space-between',
        width:'100%',
        color:'$gray300',
        
    },
    'span:nth-child(2)':{
        fontSize:'$md',
        color:'$gray400',
        strong:{
            fontSize:'$lg', 
        }
    }
   },
    button:{
        padding:'1rem 3rem',
        borderRadius:8,
        backgroundColor:'$green300',
        fontSize:'$lg',
        color:'$white',
    border: 'none',
    cursor:'pointer',
    width:'90%',
    fontWeight:'bold',
    '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed',
      },
  
      '&:not(:disabled):hover': {
        backgroundColor: '$green300',
      }
    }
}

})

export const CardContainer = styled('article',{
width: '95%',
display:'flex',
gap:'1rem',

})

export const ImageContainer = styled('div',{
maxWidth: 145,
height: 140,
borderRadius: 8,
background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

    img: {
        objectFit: 'cover',
      }

})

export const CardDetailsContainer = styled('div',{
display:'flex',
flexDirection:'column',
alignItems:'start',
justifyContent:'center',
gap:'1rem',


strong:{
    fontSize:'$lg',
    color: '$gray300'
},

span: {
    fontSize:'$md',
    fontWeight:'bold',
    color: '$white'
}

,

button:{
    color: '$green300',
    backgroundColor: 'transparent',
    border: 'none',
    cursor:'pointer',
    fontSize:'$md',
    fontWeight:'bold'
}
})
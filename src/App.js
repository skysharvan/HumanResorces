
import './App.css';
import Box from '@mui/material/Box';
import { Autocomplete, Button, styled, TextField, Typography } from '@mui/material';

const Box1 = styled(Box)({
 width:'100%',
 height:'2023px',
 display:'flex',
 justifyContent:'center',
 backgroundColor:'#F4F5F7',
})
const Box2 = styled(Box)({
  width:'75%',
  height:'1000px',
})

const top100Films = [
  {label:'FrontEnd developer'},
  {label:'Backend developer'},
  
]

function App() {
  return (
    <>
     <Box1>
        <Box2>
          <Box sx={{height:'109px',background:'#FFFFFF',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <h3 style={{color:'#27AFFC'}}>Help</h3>
          </Box>
          <Box sx={{height:'109px',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Typography sx={{fontSize:'22px',fontWeight:'600'}}>Raise Support</Typography>
          </Box>


          <Box sx={{height:'1660px',background:'#FFFFFF',width:'100%'}}>
            <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%'}}>
                <Box sx={{width:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                  <h3>Name</h3>
                  <TextField sx={{width:'80%'}} id="outlined-basic" label="name" variant="outlined" />
                </Box>
                <Box sx={{width:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                  <h3>Target Field</h3>
                  <TextField sx={{width:'80%'}} id="outlined-basic" label="website link" variant="outlined" />
                </Box>
            </Box>
            
            <h3 style={{margin:'0px 70px',padding:' 10px 20px'}}>Job Title</h3>
            <Box sx={{width:'100%',display:'flex',justifyContent:'center'}}>
                <TextField sx={{width:'90%'}} id="outlined-basic" label="job title" variant="outlined" />
            </Box>

            <Box sx={{display:'flex',width:'100%'}}>
                <Box sx={{display:'flex',flexDirection:'column',width:'100%'}}>
                  <h3 style={{margin:'0px 70px',padding:' 10px 20px'}}>Job Category</h3>
                  <Box sx={{width:'100%',display:'flex',justifyContent:'center',}}>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    sx={{ width: 600 }}
                    renderInput={(params) => <TextField {...params} label="Technology" />}
                  />
                  </Box>
                </Box>
                <Box sx={{display:'flex',flexDirection:'column',width:'100%'}}>
                  <h3 style={{margin:'0px 70px',padding:' 10px 20px'}}>Job Type</h3>
                  <Box sx={{width:'100%',display:'flex',justifyContent:'center'}}>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    sx={{ width: 600 }}
                    renderInput={(params) => <TextField {...params} label="Full Time" />}
                  />
                  </Box>
                </Box>
                
            </Box>


            <Box sx={{display:'flex',width:'100%'}}>
                <Box sx={{display:'flex',flexDirection:'column',width:'100%'}}>
                  <h3 style={{margin:'0px 70px',padding:' 10px 20px'}}>Job Location</h3>
                  <Box sx={{width:'100%',display:'flex',justifyContent:'center',}}>
                    <TextField sx={{width:'80%'}} id="outlined-basic" label="Location" variant="outlined" />
                  </Box>
                </Box>
                <Box sx={{display:'flex',flexDirection:'column',width:'100%'}}>
                  <h3 style={{margin:'0px 70px',padding:' 10px 20px'}}>Salary Range</h3>
                  <Box sx={{width:'100%',display:'flex',justifyContent:'center'}}>
                    <TextField sx={{width:'80%'}} id="outlined-basic" label="Salary Range" variant="outlined" />
                  </Box>
                </Box>
                
            </Box>


            <Box sx={{display:'flex',width:'100%'}}>
                <Box sx={{display:'flex',flexDirection:'column',width:'100%'}}>
                  <h3 style={{margin:'0px 70px',padding:' 10px 20px'}}>Experience</h3>
                  <Box sx={{width:'100%',display:'flex',justifyContent:'center',}}>
                    <TextField sx={{width:'80%'}} id="outlined-basic" label="Experience" variant="outlined" />
                  </Box>
                </Box>
                <Box sx={{display:'flex',flexDirection:'column',width:'100%'}}>
                  <h3 style={{margin:'0px 70px',padding:' 10px 20px'}}>Qualification</h3>
                  <Box sx={{width:'100%',display:'flex',justifyContent:'center'}}>
                    <TextField sx={{width:'80%'}} id="outlined-basic" label="Qualification" variant="outlined" />
                  </Box>
                </Box> 
            </Box>

           <Box sx={{display:'flex',justifyContent:'center',margin:'140px 0px'}}>
            <Button sx={{background:'#1B7EF2',color:'#fff',padding:'15px 40px',fontWeight:'700'}}>Submit</Button>
           </Box>

          </Box>
        </Box2>
     </Box1>
    </>
  );
}

export default App;

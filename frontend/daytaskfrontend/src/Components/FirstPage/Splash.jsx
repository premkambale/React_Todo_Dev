import image from 'C:/Users/palla/OneDrive/Desktop/project/React/React_Todo_Dev/frontend/daytaskfrontend/src/images/img1.png';
import Logo from 'C:/Users/palla/OneDrive/Desktop/project/React/React_Todo_Dev/frontend/daytaskfrontend/src/images/logo.png';
import './index.css'
function Splash(){

 return <>
      <div>
      <img src={Logo} alt="my logo" className='logo'/>
        <img src={image} alt="my view-img" className='img'/>
        <h1 className='text'>Manage  your Task with <span style={{color:'#FED36A'}}>DayTask</span></h1>
        <button type="button" className='button'>Lets Start </button>
      </div>
 </>  
}

export default Splash;

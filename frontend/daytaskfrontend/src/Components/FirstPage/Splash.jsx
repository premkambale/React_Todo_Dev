import image from 'C:/Users/palla/OneDrive/Desktop/project/React/React_Todo_Dev/frontend/daytaskfrontend/src/images/img1.png';
import Logo from 'C:/Users/palla/OneDrive/Desktop/project/React/React_Todo_Dev/frontend/daytaskfrontend/src/images/logo.png';
import styless from 'C:/Users/palla/OneDrive/Desktop/project/React/React_Todo_Dev/frontend/daytaskfrontend/src/Components/index.css';

function Splash(){

const styles ={
position: 'absolute',
width: '376px',
height: '67px',
left: '26px',
top: '809px',
};

 return <>
      <div>
      <img src={Logo} alt="my logo" style={styless.logo} />
        <img src={image} alt="my view-img" style={styless.img} />
        <h1 className={styless.text}>Manage your Task with DayTask</h1>

        <button type="button" style={styles}>Lets Start </button>
      </div>
 </>  
}

export default Splash;

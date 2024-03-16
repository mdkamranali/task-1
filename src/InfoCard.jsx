import React,{useState} from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
import SchoolIcon from '@mui/icons-material/School';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import LocalShippingSharpIcon from '@mui/icons-material/LocalShippingSharp';

const Card = ({ title, icon, value, description, color, bgColor }) => {
  const cardStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    boxShadow:'0 0 30px #0129701a',
    borderRadius: '3px',
    margin: '10px',
    width: '37%',
    // textAlign: 'center',
    position: 'relative',
    height:'127px'
  };

  const iconStyle1 = {
    backgroundColor:bgColor,
    color:'rgb(46, 202, 106)',
    fontSize: '36px',
    // marginBottom: '10px',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    lineHeight: '60px',
    display: 'inline-block',
    border: `0px solid ${color}`,
    position:'relative',
    top:'-1px',
    left:'2px',
    color:color,
    display:'flex',
    justifyContent:'center'
  };

  const dotsStyle = {
    position: 'relative',
    top: '-10px',
    left:'419px',
    color: '#aab7cf',
    fontSize:'35px',
    ':hover':{
      color:'blue',
    }
   };

  const titlestyle ={
    position:'relative',
    right:'-1px',
    bottom:'117px',
    color:'#012970',
    fontFamily:'Work Sans,sans-serif',
    fontSize:'18px',
    fontWeight:'500',

  }
  const descriptionstyle ={
    position:'relative',
    top:'-82px',
    left:'86px',
    color:'#6c757d',
    fontSize:'.875em',

  }

  const valuestyle ={
     fontSize:'44px',
     color:'black',
     position:'relative',
     top:'-169px',
     right:'-80px',
     color:'#012970',
     fontSize:'28px',
     fontWeight:'700'
  }
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  // const beast ={
  //       ':hover': {
  //     color:'blue',
  //   }
  // }
  return (
    <div style={cardStyle}>
      {/* <div style={dotsStyle} onClick={handleDotsClick}>     
        ...
      </div> */}
      {/* <MoreHorizIcon style={dotsStyle} onClick/> */}
      <Button style={dotsStyle} onClick={handleClick}>
        <MoreHorizIcon />
      </Button>
      <Popover
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
      <div style={iconStyle1}>
        <div>{icon}</div>
      </div>
      <h3 style={titlestyle}>{title}</h3>
      <p style={descriptionstyle}>{description}</p>
      <p style={valuestyle}>{value}</p>
    </div>
  );
};

const CardContainer = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', justifyContent:'space-around',flexWrap: 'wrap' }}>
      <Card
        title="Tenants"
        icon={<Inventory2Icon />}
        value="1200"
        description="Tenants"
        color="rgb(65, 84, 241)"
        bgColor="rgb(246, 246, 254)"
      />
      <Card
        title="School"
        icon={<DepartureBoardIcon />}
        value="1200"
        description="School"
        color="rgb(46, 202, 106)"
        bgColor="rgb(224, 248, 233)"
      />
      <Card
        title="Grades"
        icon={<SchoolIcon/>}
        value="12"
        description="Grades"
        color='rgb(255, 119, 29)'
        bgColor="rgb(255, 236, 223)"
      />
      <Card
        title="Products"
        icon={<ViewInArIcon/>}
        value="20"
        description="Products"
        color='rgb(255, 119, 29)'
        bgColor="rgb(255, 236, 223)"
      />
      <Card
        title="Exams"
        icon={<MenuBookRoundedIcon />}
        value="1200"
        description="Exams"
        color='rgb(65, 84, 241)'
        bgColor="rgb(246, 246, 254)"
      />
      <Card
        title="Programs"
        icon={<LocalShippingSharpIcon />}
        value="6"
        description="Programs"
        color='rgb(46, 202, 106)'
        bgColor="rgb(224, 248, 233)"
      />
    </div>
  );
};

export default CardContainer;

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

function Navbar(props) {

  return (
    <>
    <div className="flex justify-between gap-4 sticky top-0 backdrop-filter backdrop-blur-lg bg-opacity-30 p-4 border-b border-gray-200">
      <div><a href='/'>Home</a> </div>
      <div><a href='/'> Services</a></div>
      <div><a href='/'> Contact </a></div>
      <div className='relative'>
        <Badge
          badgeContent={props.cart}
          color="error" 
          sx={{
            '.MuiBadge-dot': { 
              borderRadius: '50%', 
              width: '12px', 
              height: '12px' 
            },
            '.MuiBadge-badge': { 
              color: 'white', 
              borderRadius: '50%', 
              width: '20px', 
              height: '20px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            },
            position: 'relative'
          }}
        >
          <ShoppingCartIcon
          onClick = {props.handleClick}
          className='cursor-pointer' />         
        </Badge>

        </div>
    </div>

  </>
  );
}

export default Navbar;

import React from 'react'
import './Navbar.css'
import Search from '@mui/icons-material/Search';
import Badge from '@mui/material-next/Badge';

import { ShoppingCart } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
function Navbar() {
  return (
    <div className='container'>
        <div className='navItems'>
     <div className='left'>
        <div className='language'>EN</div>
        <div className='search'><input className='input'></input>
        <Search style={{color:'gray',fontSize:'16px'}}></Search>
        </div>
     </div>
     <div className='center'>OCART</div>
     <div className='right'>
        <div className='menuItem'>
        <h4 className='menuItem'>login</h4>
        <h4 className='menuItem'>signin</h4>
        <Badge badgeContent={4} color="primary">
  <ShoppingCart  color="action" />
</Badge>
     </div>
     </div>
     </div>
    </div>
  )
}

export default Navbar

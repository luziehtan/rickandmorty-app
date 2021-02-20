import React from 'react'
import Button from '../Button/Button'
import './Navigation.css'

export default function Navigation({onNavigate, activeButton}) {

    return( 
      <nav className="Navigation">
        <Button 
          className={activeButton === 'Characters' ? 'Button active' : 'Button'} 
          onClick={() => onNavigate('Characters')}
          title='Characters' />
        <Button 
          className={activeButton === 'Locations' ? 'Button active' : 'Button'} 
          onClick={() => onNavigate('Locations')} 
          title='Locations' />
      </nav>
    )
  }
import React, { Fragment, useState } from 'react'

import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'

import DisplayCard from '../cards/DisplayCard'

const useStyles = makeStyles({
  label: {
    textDecoration: 'none'
  }
})

const Instrument = ({year, brand, type, price}) => {
    const getDescription = () => {
        return `${year} ${brand} ${type}`
    }
  return (
    <DisplayCard>
      
      <Fragment>
        <ListItem>
          <ListItemText primary={getDescription()} secondary={`$ ${price}`}/>
          
        </ListItem>
      </Fragment>
       
    </DisplayCard>
  )
}

export default Instrument

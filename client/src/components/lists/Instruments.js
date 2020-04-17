import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_INSTRUMENTS } from '../../queries/index'
import Container from '@material-ui/core/Container'
import List from '@material-ui/core/List'

import Instrument from '../listItems/Instrument'

const Instruments = () => {
  const { loading, error, data } = useQuery(GET_INSTRUMENTS)
  if (loading) return 'Loading...'
  if (error) return `Errror! ${error.message}`
  var i = 0;
  //console.log(data.instruments)
  return (
    <ul>
      {data.instruments.map(({ id, year, brand, type, price}) => (
        <Container>
          <List>
            <Instrument 
                year={year}
                brand={brand}
                type={type}
                price={price}
                />
          </List>
        </Container>
      ))}
    </ul>
  )
}

export default Instruments

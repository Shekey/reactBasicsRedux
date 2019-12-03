import React from 'react'
import { buyIceCream, addIceCream } from '../redux';
import { connect } from 'react-redux';

function  iceCreamContainer(props) {
  return (
    <div>
        <h2>Number of iceCreams - {props.numOfIceCreams}</h2>
        <button onClick={props.buyIceCream}>Buy iceCream</button>
        <button onClick={props.addIceCream}>Add iceCream</button>
    </div>
  )
}

const mapStateToProps = state => {
  return  {
    numOfIceCreams: state.iceCream.numOfIceCreams
  }
}

const mapDispatchToProps = dispatch => {
  return  {
    buyIceCream: () => dispatch(buyIceCream()),
    addIceCream: () => dispatch(addIceCream())
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(iceCreamContainer);

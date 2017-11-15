import React, { Component } from 'react'
import Player from '../player/player'
import PromptRented from './board_center_prompts/prompt_rented'
import PromptPurchase from './board_center_prompts/prompt_purchase'
import PromptStartTurn from './board_center_prompts/prompt_start_turn'
import BoardCenterTileDetails from './board_center_tile_details'

export default class BoardCenter extends Component {
  render() {
    const centerStyle = {
      width: '738px',
      height: '738px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }
    const { property, showRentedPrompt, showPurchasePrompt, purchase, startTurn, nextTurn, player, propertyName} = this.props
    const promptStartTurnProps = {startTurn: () => startTurn()}
    const promptPurchaseProps = {
      purchase: () => purchase(),
      nextTurn: () => nextTurn()
    }
    const promptRentedProps = {nextTurn: () => nextTurn()}
    const playerProps = {...player, propertyName}
    const boardCenterTileDetailsProps = {property}
    console.log(this.props.property);
    return (
      <div style={centerStyle}>
        <Player {...playerProps}/>
        {showRentedPrompt || showPurchasePrompt ? null : <PromptStartTurn {...promptStartTurnProps}/>}
        {showRentedPrompt ? <PromptRented {...promptRentedProps}/> : null}
        {showPurchasePrompt ? <PromptPurchase {...promptPurchaseProps}/> : null}
        <BoardCenterTileDetails {...boardCenterTileDetailsProps}/>
      </div>
    )
  }
}

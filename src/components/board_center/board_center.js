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
    const { property, showRentedPrompt, showPurchasePrompt, purchase, startTurn,
      nextTurn, player, propertyName, ownerName} = this.props
    const promptStartTurnProps = {startTurn: () => startTurn()}
    const enoughMoney = player.cash >= property.price
    const promptPurchaseProps = {
      purchase: () => purchase(),
      nextTurn: () => nextTurn(),
      player, enoughMoney
    }
    const promptRentedProps = {nextTurn: () => nextTurn()}
    const promptChanceProps = {chance: this.props.chance}
    const playerProps = {...player, propertyName}
    const boardCenterTileDetailsProps = {property, ownerName}
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

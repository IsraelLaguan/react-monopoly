import React, { Component } from 'react'
import Player from '../player/player'
import PromptRented from './board_center_prompts/prompt_rented'
import PromptPurchase from './board_center_prompts/prompt_purchase'
import PromptStartTurn from './board_center_prompts/prompt_start_turn'
import BoardCenterTileDetails from './board_center_tile_details'
import PromptChance from './board_center_prompts/prompt_chance'
import Chance from './board_center_prompts/chance'

const centerStyle = {
  width: '738px',
  height: '738px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
}

export default class BoardCenter extends Component {
  render() {
    const { property, showRentedPrompt, showPurchasePrompt,
      toggleChanceCard, purchase, startTurn, nextTurn, player,
      propertyName, ownerName, turn, showChancePrompt, giveMoneyTo } = this.props

    const promptStartTurnProps = {
      startTurn: () => startTurn()
    }
    const promptPurchaseProps = {
      purchase: () => purchase(),
      nextTurn: () => nextTurn(),
      enoughMoney: player.cash >= property.price,
      player
    }
    const promptRentedProps = {
      nextTurn: () => nextTurn()
    }
    const promptChanceProps = {
      showPurchasePrompt, turn, giveMoneyTo,
      nextTurn: () => nextTurn()
    }
    console.log(showChancePrompt);
    const playerProps = {
      ...player, propertyName
    }
    const boardCenterTileDetailsProps = {
      property, ownerName
    }

    // const rentedRender = <span>
    //   <PromptRented {...promptRentedProps}/>
    //   <BoardCenterTileDetails {...boardCenterTileDetailsProps}/>
    // </span>
    //
    // const purchaseRender = <span>
    //   <PromptPurchase {...promptPurchaseProps}/>
    //   <BoardCenterTileDetails {...boardCenterTileDetailsProps}/>
    // </span>
    //
    // const chanceRender = <span>
    //   <PromptChance {...promptChanceProps}/>
    // </span>
    //
    // const turnStartRender = <span>
    //   <PromptStartTurn {...promptStartTurnProps}/>
    // </span>

    return (
      <div style={centerStyle}>
        <Player {...playerProps}/>
        {showRentedPrompt || showPurchasePrompt || showChancePrompt ? null : <PromptStartTurn {...promptStartTurnProps}/>}
        {showRentedPrompt ? <PromptRented {...promptRentedProps}/> : null}
        {showPurchasePrompt ? <PromptPurchase {...promptPurchaseProps}/> : null}
        {showChancePrompt ? <Chance {...promptChanceProps}/> : null}
        {showRentedPrompt || showPurchasePrompt ? <BoardCenterTileDetails {...boardCenterTileDetailsProps}/> : null}
      </div>
    )
  }
}

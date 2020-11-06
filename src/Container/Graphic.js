import React, {Component} from 'react';
import GraphicComponent from "../Component/GraphicComponent";
import { connect } from "react-redux";
import { fetchCost } from "../Store/Actions/Graphic/action";
import {Row} from "antd";
import ChangeCost from "../Component/ChangeCost";

class Graphic extends Component {
  state = {
    symbol: 'USD',
    base: 'RUB',
    data: [],
    days: []
  }
  componentDidMount() {
    this.props.fetchCost(this.state.base, this.state.symbol);
  }

  changeSymbol = (coin) => {
    this.setState({...this.state, symbol: coin}, () => this.props.fetchCost(this.state.base, this.state.symbol));
  }

  changeBase = (coin) => {
    this.setState({...this.state, base: coin}, () => this.props.fetchCost(this.state.base, this.state.symbol));
  }

  render() {
    return (
      <>
        <Row>
          <ChangeCost
            symbol={this.state.base}
            chengeHandler={this.changeBase}
          />
          <ChangeCost
            symbol={this.state.symbol}
            chengeHandler={this.changeSymbol}
          />
        </Row>

        <GraphicComponent
          {...this.props}
          symbol={this.state.symbol}
          optionsMixedChart={this.props.dataCoin.optionsMixedChart}
          seriesMixedChart={this.props.dataCoin.seriesMixedChart}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  dataCoin: state.graphic
})

const mapDispatchToProps = (dispatch) => ({
  fetchCost: (base, symbol) => dispatch(fetchCost(base, symbol))
})

export default connect(mapStateToProps, mapDispatchToProps)(Graphic);

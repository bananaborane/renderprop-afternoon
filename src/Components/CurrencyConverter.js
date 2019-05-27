import React, { Component } from 'react'

class Currency extends Component {
	state = {
		currencyChosen: false,
		selectedCurrency: 'Select Currency',
		amount: 0
	}

	handleAmountIncrease = () => {
		this.setState((prevState) => {
			return {
				amount: prevState.amount + 1
			}
		})
	}

	handleAmountDecrease = () => {
		return (
            this.state.amount > 0 &&
            // setState will only work if this.state.amount is greater than 0
			this.setState((prevState) => {
				return {
					amount: prevState.amount - 1
				}
			})
		)
	}

	handleOptionSelect = (e) => {
		const userValue = e.target.value
		this.setState(() => {
			return {
				selectedCurrency: userValue,
				currencyChosen: userValue === 'Select Currency' ? false : true
			}
		})
	}

	render() {
		const currencyData = [
			{ name: 'Japanese Yen', symbol: '¥', rate: 113.6 },
			{ name: 'British Pound', symbol: '£', rate: 0.77 },
			{ name: 'Canadian Dollar', symbol: 'CAD', rate: 1.32 },
			{ name: 'Mexican Peso', symbol: 'Mex$', rate: 20.41 },
			{ name: 'Swiss Franc', symbol: 'Fr.', rate: 1.01 }
		]
		const currencyOptions = currencyData.map((currency, index) => (
			<option key={index} value={index}>
				{currency.name}
			</option>
		))
		return (
			<div>
				<select
					value={this.state.selectedCurrency}
					onChange={this.handleOptionSelect}>
					<option value='Select Currency'>Select Currency</option>
					{currencyOptions}
				</select>
				{ this.state.currencyChosen ? (<div>
					<button className='add' style={{ cursor: 'pointer' }} onClick={this.handleAmountIncrease}>
						+
					</button>
					<button className='minus' style={{ cursor: 'pointer' }} onClick={this.handleAmountDecrease}>
						-
					</button>
				</div>) : (<div>
					<button className='add' disabled style={style.button}>
						+
					</button>
					<button className='minus' disabled style={style.button}>
						-
					</button>
				</div>)}



                { this.state.currencyChosen && <div> from new conditional rendering pattern </div> }
                {/* CODE ABOVE RENDERS IF THIS.STATE.CURRENCYCHOSEN IS TRUTHY
                    ANOTHER PATTERN OF CONDITIONAL RENDERING */}



				{this.state.currencyChosen ? this.props.render(
					currencyData[this.state.selectedCurrency],
					this.state.amount
                ) : <p>Please Select a Currency</p>}
                

                    {/* Render props is a pattern where 'render' is a function that takes in params (usually state) */}
                
			</div>
		)
	}
}

export default Currency

const style = {
    button: {
        backgroundColor: 'gray',
        color: 'lightgray',
        cursor: 'pointer'
    }
}
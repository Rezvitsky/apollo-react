import React, { Component } from 'react'
import { gql, useQuery } from '@apollo/client'

class CardItem extends Component {
    render() {
        const { rates } = this.props

        return (
            <div className="bg-purple-600 pt-1 px-2 bg-gradient-to-b from-purple-400 to-purple-500 rounded-xl shadow-lg w-52">
                <div className="flex justify-center">
                    <ul>
                        { rates.map((rate) => <li>Rate: {rate.currency}</li>) }
                    </ul>
                </div>
            </div>
        )
    }
}

export default CardItem

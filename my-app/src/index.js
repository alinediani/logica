import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import Card from './components/layout/Card'

import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
import Aleatorio from './components/basics/Aleatorio'
const el = document.getElementById('root')
ReactDOM.render(<div><Primeiro></Primeiro>
<Card titulo="card"></Card>
<Aleatorio></Aleatorio>
<ComParametro></ComParametro></div>,el)

import React from 'react'
import ReactDOM from 'react-dom'

import Family from './family'
import Member from './member'

ReactDOM.render(
  <Family lastName="Goulart">
    <Member name="Thiago" />
    <Member name="Maria" />
    <Member name="Antônio" />
    <Member name="Juliana" />
  </Family>
, document.getElementById('app'))
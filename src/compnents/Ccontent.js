import React, { useContext } from 'react'
import data from './assets/data'
import { Langc } from '../mycontexts/Langcontext'

export default function Ccontent() {
    const {lang}=useContext(Langc)
  return (
    <div>
      <h4>{data[lang].title}</h4>
    </div>
  )
}

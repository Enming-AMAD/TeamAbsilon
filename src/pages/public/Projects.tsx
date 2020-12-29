import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom';

const names = [
    <Link to="/project/that_we_made" className="tab">만든게</Link>,
    <Link to="/project/there_is_nothing" className="tab">없어요 😥</Link>,
]
const tabs = names.map((name) =>
    <li>{name}</li>
)

export default tabs
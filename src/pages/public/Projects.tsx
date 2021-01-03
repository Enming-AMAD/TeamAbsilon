import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom';

const names = [
    <Link to="/project/playgamebot" className="projectName tab">PlayGameBot</Link>,
    <hr className="hr"></hr>,
    <Link to="/project/there_is_nothing" className="projectName tab">더 없어요 😥</Link>,
]
const tabs = names.map((name) =>
    <li>{name}</li>
)

export default tabs;
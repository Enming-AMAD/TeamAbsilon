import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom';

const names = [
    <Link to="/" className="tab">메인</Link>,
    <Link to="/project" className="tab">프로젝트</Link>,
    <Link to="/tos" className="tab">이용약관</Link>,
    <Link to="/privacy" className="tab">개인정보 처리방침</Link>,
]
const tabs = names.map((name) =>
    <li>{name}</li>
)

export default tabs;
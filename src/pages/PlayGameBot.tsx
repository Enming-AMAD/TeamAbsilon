import React from "react";

import "./stylesheet/Project.css";
import logo from "../images/playgamebot/icon.png";

const Page = () => {
    return (
        <ul className="pg_box">
            <li>
                <img src={logo} className="pg_logo"></img>
            </li>
            <li>
                <ul className="pg_info">
                    <li className="pg_title">PlayGameBot</li>
                    <li className="pg_desc">다기능 도박, 게임 봇입니다.</li>
                    <li className="pg_invite"><a href="http://gg.gg/nplk5" target="blank" className="pg_invbutton button_atype">초대하기</a></li>
                </ul>
            </li>
        </ul>
    );
};

export default Page;
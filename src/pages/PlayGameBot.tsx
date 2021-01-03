import React from "react";

import "./stylesheet/Project.css";
import logo from "../images/playgamebot/icon.png";
import roulette from "../images/playgamebot/roulette.png";
import achievement from "../images/playgamebot/achievement.png";

const Page = () => {
    return (
        <>
            <div className="pg_pg1">
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
            </div>
            <div className="pg_pg2">
                <span className="pg_title">PlayGameBot의 특징</span>
                <hr className="pg_bar"></hr>

                <div className="pg_elements">
                    <div className="pg_element">
                        <img src={roulette}></img>
                    </div>
                    <div className="pg_element">
                        <h1>여러 종류의 게임</h1>
                        <h2>
                           여러 종류의 게임으로 선택하는 즐거움을 누리세요.<br></br>
                           일반도박과, 가위바위보 등 여러 종류의 게임이 있습니다.
                        </h2>
                    </div>
                    <div className="pg_element">
                        <h1>도전과제</h1>
                        <h2>
                        어려운 도전과제를 통해<br></br>
                        게임을 질리지 않고 즐기세요.
                        </h2>
                    </div>
                    <div className="pg_element">
                        <img src={achievement}></img>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
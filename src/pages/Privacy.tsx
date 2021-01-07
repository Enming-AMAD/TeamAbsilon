import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

const source = `
## 1. 개인정보 처리의 목적  
① 팀 앱사일론은 다음의 목적을 위하여 개인정보를 수집하고 있으며, 다음의 목적 이외의 용도로는 이용하지 않습니다.  
- 유저 가입 의사 확인, 서비스 제공에 따른 본인 식별·인증 등  

## 2. 개인정보 처리 및 보유 기간
① 팀 앱사일론은 정보 주체로부터 개인정보를 수집할 때 동의받은 개인정보 보유·이용기간 또는 법령에 따른 개인정보
보유·이용 기간 내에서 개인정보를 처리·보유합니다.  

② 구체적인 개인정보 처리 및 보유 기간은 다음과 같습니다.  
- 서비스 종료 시까지  
- 이용자의 파기 요청 시까지  
`;

class Page extends Component {
  render() {
    return (
      <>
        <ReactMarkdown source={source}></ReactMarkdown>
      </>
    );
  }
};

export default Page;
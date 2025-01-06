/**
 * API 작업후 삭제예정
 */

export const mock_text = `브랜드 아이덴티티는 이들 요소들을 통해 핵심 아이덴티티와 확장 아이덴티티로 구체화한다. 핵심 아이덴티티는 브랜드의 중심이 되고 환경의 변화에도 변함없이 굳건하다. 확장 아이덴티티는 핵심 아이덴티티를 보다 완벽하게 만드는 것으로 환경에 유연하게 대응할 수 있는 요소들을 포함한다. 구체화된 브랜드 아이덴티티는 소비자에게 브랜드 가치를 제안한다.브랜드 아이덴티티는 이들 요소들을 통해 핵심 아이덴티티와 확장 아이덴티티로 구체화한다. 핵심 아이덴티티는 브랜드의 중심이 되고 환경의 변화에도 변함없이 굳건하다. 확장 아이덴티티는 핵심 아이덴티티를 보다 완벽하게 만드는 것으로 환경에 유연하게 대응할 수 있는 요소들을 포함한다.구체화된 브랜드 아이덴티티는 소비자에게 브랜드 가치를 제안한다. 브랜드 가치는 소비자에게 기능적, 정서적, 자아 표현적 혜택을 제공한다. 기능적 혜택이 제품의 특징에서 얻을 수 있는 혜택이라면, 정서적 혜택은 소비자가 구매 과정이나 사용 경험에서 특별한 느낌을 갖도록 만드는 능력과 관련된 것이다. 자아 표현적 혜택은 소비 포함한다. 구체화된 브랜드 아이덴티티는 소비자에게 브랜드 가치를 제안한다. 브랜드 가치는 소비자에게 기능적, 정서적, 자아 표현적 혜택을 제공한다. 기능적 혜택이 제품의 특징에서 얻을 수 있는 혜택이라면, 정서적 혜택은 소비자가 구매 과정이나 사용 경험에서 특별한 느낌을 갖도록 만드는 능력과 관련된 것이다. 자아 표현적 혜택은 소비`

export const errInfo = [
  {
    errorIdx: 0,
    correctMethod: 4,
    start: 11,
    end: 18,
    orgStr: '이들 요소들을',
    candWord: '이들 요소를',
    help: '최근 우리말에 접미사 &apos;들&apos;을 원칙이 없이 사용하는 예가 매우 흔합니다. 이는 영어의 영향이 크므로 가려서 쓰는 것이 바람직합니다. 특히, 우리말에는 &apos;들&apos;이 붙으면 복수의 의미보다는 빈정거림의 뜻으로 쓰이는 예가 많습니다. 따라서 &apos;들&apos;의 사용을 자제하심이 바람직합니다. [문화일보, 1996년 2월 28일,7면, &apos;국어 교육 바로 세우기&apos;]<br/><br/>(예) 처리들을 (X) -&gt; 처리를<br/>생각들을 (X) -&gt; 생각을<br/>역사들 (X) -&gt; 역사<br/><br/>그리고 &apos;여러&apos;,&apos;양국&apos;,&apos;각&apos;은 자체가 복수이므로 접미사 &apos;-들&apos;을 쓸 이유가 없습니다.<br/><br/>(예) 여러 학생들이 -&gt; 여러 학생이<br/><br/>그러나 예외의 상황이 있으니 의도하신 바를 제대로 나타내지 못한 예에는 이 도움말은 참고만 하십시오.',
  },
  {
    errorIdx: 1,
    correctMethod: 4,
    start: 104,
    end: 118,
    orgStr: '아이덴티티를 보다 완벽하게',
    candWord: '아이덴티티를 더욱 완벽하게|아이덴티티를 더 완벽하게',
    help: '우리나라의 많은 사전에서 &apos;보다&apos;가 부사로 쓰일 수 있다고 설명하고 있습니다. 우리말큰사전 (한글학회) 에는 조사로만 쓸 수 있다고 되어 있습니다. &apos;보다&apos;를 부사로 쓰는 예는 영어 &apos;more&apos;와 일본어의 &apos;より&apos;의 번역 과정에서 생긴 영향으로 보입니다. 일본어에서도 &apos;より&apos;는 원래 조사로만 쓰였으나, 영어 번역 과정에서 부사로 쓰이기 시작했습니다. &apos;より&apos;가 부사로 쓰임을 일반화했지만 일본의 사전은 일부를 제외하면 &apos;より&apos;를 조사로만 규정하고 있다고 합니다. &apos;보다&apos; 대신에 &apos;더&apos;, &apos;더욱&apos;과 같은 우리말을 쓰는 게 어떨까요?',
  },
  {
    errorIdx: 2,
    correctMethod: 2,
    start: 156,
    end: 160,
    orgStr: '구체화된',
    candWord: '구체화한',
    help: '되도록 한자 접미사 &apos;-화&apos;를 쓰지 않되, 쓸 수밖에 없으면 &apos;-하다.&apos;를 씁니다.',
  },
  {
    errorIdx: 3,
    correctMethod: 3,
    start: 178,
    end: 185,
    orgStr: '브랜드 가치를',
    candWord: '상표 가치를',
    help: '외래어보다는 순수 우리말이나 한자어로 된, 우리가 자주 쓰는 말을 사용합시다.',
  },
  {
    errorIdx: 4,
    correctMethod: 5,
    start: 186,
    end: 194,
    orgStr: '제안한다.브랜드',
    candWord: '제안한다. 브랜드',
    help: '우리말에서 온점(.)은 앞에 오는 말에는 붙여 쓰지만, 뒤에 오는 말과는 띄어 써야 바릅니다.<br/><br/>(예) 주제 정하기.다음에는 개요 짜기. (X)<br/>주제 정하기 .다음에는 개요 짜기 . (X)<br/>-&gt; 주제 정하기. 다음에는 개요 짜기. (O)<br/><br/>친구를 만났다.마침 점심 때라서 (X)<br/>친구를 만났다 .마침 점심 때라서 (X)<br/>-&gt; 친구를 만났다. 마침 점심 때라서 (O)',
  },
  {
    errorIdx: 5,
    correctMethod: 4,
    start: 202,
    end: 209,
    orgStr: '이들 요소들을',
    candWord: '이들 요소를',
    help: '최근 우리말에 접미사 &apos;들&apos;을 원칙이 없이 사용하는 예가 매우 흔합니다. 이는 영어의 영향이 크므로 가려서 쓰는 것이 바람직합니다. 특히, 우리말에는 &apos;들&apos;이 붙으면 복수의 의미보다는 빈정거림의 뜻으로 쓰이는 예가 많습니다. 따라서 &apos;들&apos;의 사용을 자제하심이 바람직합니다. [문화일보, 1996년 2월 28일,7면, &apos;국어 교육 바로 세우기&apos;]<br/><br/>(예) 처리들을 (X) -&gt; 처리를<br/>생각들을 (X) -&gt; 생각을<br/>역사들 (X) -&gt; 역사<br/><br/>그리고 &apos;여러&apos;,&apos;양국&apos;,&apos;각&apos;은 자체가 복수이므로 접미사 &apos;-들&apos;을 쓸 이유가 없습니다.<br/><br/>(예) 여러 학생들이 -&gt; 여러 학생이<br/><br/>그러나 예외의 상황이 있으니 의도하신 바를 제대로 나타내지 못한 예에는 이 도움말은 참고만 하십시오.',
  },
  {
    errorIdx: 6,
    correctMethod: 4,
    start: 295,
    end: 309,
    orgStr: '아이덴티티를 보다 완벽하게',
    candWord: '아이덴티티를 더욱 완벽하게|아이덴티티를 더 완벽하게',
    help: '우리나라의 많은 사전에서 &apos;보다&apos;가 부사로 쓰일 수 있다고 설명하고 있습니다. 우리말큰사전 (한글학회) 에는 조사로만 쓸 수 있다고 되어 있습니다. &apos;보다&apos;를 부사로 쓰는 예는 영어 &apos;more&apos;와 일본어의 &apos;より&apos;의 번역 과정에서 생긴 영향으로 보입니다. 일본어에서도 &apos;より&apos;는 원래 조사로만 쓰였으나, 영어 번역 과정에서 부사로 쓰이기 시작했습니다. &apos;より&apos;가 부사로 쓰임을 일반화했지만 일본의 사전은 일부를 제외하면 &apos;より&apos;를 조사로만 규정하고 있다고 합니다. &apos;보다&apos; 대신에 &apos;더&apos;, &apos;더욱&apos;과 같은 우리말을 쓰는 게 어떨까요?',
  },
  {
    errorIdx: 7,
    correctMethod: 5,
    start: 341,
    end: 350,
    orgStr: '포함한다.구체화된',
    candWord: '포함한다. 구체화한',
    help: '우리말에서 온점(.)은 앞에 오는 말에는 붙여 쓰지만, 뒤에 오는 말과는 띄어 써야 바릅니다.<br/><br/>(예) 주제 정하기.다음에는 개요 짜기. (X)<br/>주제 정하기 .다음에는 개요 짜기 . (X)<br/>-&gt; 주제 정하기. 다음에는 개요 짜기. (O)<br/><br/>친구를 만났다.마침 점심 때라서 (X)<br/>친구를 만났다 .마침 점심 때라서 (X)<br/>-&gt; 친구를 만났다. 마침 점심 때라서 (O)',
  },
  {
    errorIdx: 8,
    correctMethod: 3,
    start: 368,
    end: 375,
    orgStr: '브랜드 가치를',
    candWord: '상표 가치를',
    help: '외래어보다는 순수 우리말이나 한자어로 된, 우리가 자주 쓰는 말을 사용합시다.',
  },
  {
    errorIdx: 9,
    correctMethod: 3,
    start: 382,
    end: 389,
    orgStr: '브랜드 가치는',
    candWord: '상표 가치는',
    help: '외래어보다는 순수 우리말이나 한자어로 된, 우리가 자주 쓰는 말을 사용합시다.',
  },
  {
    errorIdx: 10,
    correctMethod: 5,
    start: 401,
    end: 408,
    orgStr: '정서적, 자아',
    candWord: '정서적 자아',
    help: '입력 오류입니다.',
  },
  {
    errorIdx: 11,
    correctMethod: 4,
    start: 488,
    end: 495,
    orgStr: '느낌을 갖도록',
    candWord: '느낌이 들도록',
    help: '&apos;느낌을 가지다.&apos;와 &apos;느낌을 주다.&apos;와 같은 표현은 영어투 표현입니다.',
  },
  {
    errorIdx: 12,
    correctMethod: 2,
    start: 533,
    end: 537,
    orgStr: '구체화된',
    candWord: '구체화한',
    help: '되도록 한자 접미사 &apos;-화&apos;를 쓰지 않되, 쓸 수밖에 없으면 &apos;-하다.&apos;를 씁니다.',
  },
  {
    errorIdx: 13,
    correctMethod: 3,
    start: 555,
    end: 562,
    orgStr: '브랜드 가치를',
    candWord: '상표 가치를',
    help: '외래어보다는 순수 우리말이나 한자어로 된, 우리가 자주 쓰는 말을 사용합시다.',
  },
  {
    errorIdx: 14,
    correctMethod: 3,
    start: 569,
    end: 576,
    orgStr: '브랜드 가치는',
    candWord: '상표 가치는',
    help: '외래어보다는 순수 우리말이나 한자어로 된, 우리가 자주 쓰는 말을 사용합시다.',
  },
  {
    errorIdx: 15,
    correctMethod: 5,
    start: 588,
    end: 595,
    orgStr: '정서적, 자아',
    candWord: '정서적 자아',
    help: '입력 오류입니다.',
  },
  {
    errorIdx: 16,
    correctMethod: 4,
    start: 675,
    end: 682,
    orgStr: '느낌을 갖도록',
    candWord: '느낌이 들도록',
    help: '&apos;느낌을 가지다.&apos;와 &apos;느낌을 주다.&apos;와 같은 표현은 영어투 표현입니다.',
  },
]

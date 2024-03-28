/* ?animal */
Template.add('animal', () =>
	{T.trResult = either(
		"꿀벌",
		"코끼리",
		"토끼",
		"문어",
		"침팬지",
		"오징어",
		"연체동물",
		"원숭이",
		"말벌",
		"개코원숭이",
		"늑대",
		"곰",
		"엘크",
		"물개",
		"돌고래",
		"고래",
		"해파리",
		"고양이",
		"사자",
		"호랑이",
		"치타",
		"들개",
		"흑표범",
		"두더지",
		"오소리",
		"라텔",
		"오리",
		"거위",
		"참새",
		"울새",
		"농어",
		"강꼬치고기",
		"연어",
		"철갑상어",
		"개구리",
		"도룡뇽들의",
		"악어",
		"두꺼비",
		"매",
		"독수리",
		"갑오징어",
		"비단뱀",
		"아나콘다",
		"살무사",
		"코브라",
		"철갑상어",
		"송어",
		"연어",
		"참치",
		"사슴",
		"oyster"
	); getPostNum(T.trResult); return T.trResult;}
);

/* ?animals */
Template.add("animals", () =>
	{T.trResult = either(
		"꿀벌들",
		"코끼리들",
		"토끼들",
		"문어들",
		"침팬지들",
		"오징어들",
		"연체동물들",
		"원숭이들",
		"말벌들",
		"개코원숭이들",
		"늑대들",
		"곰들",
		"엘크들",
		"물개들",
		"돌고래들",
		"고래들",
		"해파리들",
		"고양이들",
		"사자들",
		"호랑이들",
		"치타들",
		"들개들",
		"흑표범들",
		"두더지들",
		"오소리들",
		"라텔들",
		"오리들",
		"거위들",
		"참새들",
		"울새들",
		"농어들",
		"강꼬치고기들",
		"연어들",
		"철갑상어들",
		"개구리들",
		"도룡뇽들의들",
		"악어들",
		"두꺼비들",
		"매들",
		"독수리들",
		"갑오징어들",
		"비단뱀들",
		"아나콘다들",
		"살무사들",
		"코브라들",
		"철갑상어들",
		"송어들",
		"연어들",
		"참치들",
		"사슴들",
		"oysters"
	); getPostNum(T.trResult); return T.trResult;}
);

/* ?garden */
Template.add("garden", () => either("꽃들을 잘라낸다", "나무들을 잘라낸다", "덤불들을 잘라낸다", "꽃들에게 물을 준다", "잡초들을 제거한다"));

/* ?admires */
Template.add("admires", () => either("음흉하게 쳐다본다", "감상한다", "훑어본다", "유심히 쳐다본다"));

/* ?gwylanItem */
Template.add("gwylanItem", () =>
	{T.trResult = either(
		"트로피",
		"야구공",
		"야구 방망이",
		"스노우 글로브",
		"마법의 8번 당구공",
		"탁구채",
		"체스 세트",
		"돼지저금통",
		"머그컵",
		"쿠키 상자",
		"프라이팬",
		"효자손",
		"연필통",
		"도시락 상자",
		"용암 램프",
		"손전등",
		"뻐꾸기 시계",
		"루빅스 큐브",
		"지구본",
		"물총",
		"사전",
		"손거울",
		"싸구려 카메라",
		"조개껍데기가 꽉찬 집락 비닐백",
		"작은 발판사다리",
		"어디 쓰이는지 모를 골동품"
	); getPostNum(T.trResult); return T.trResult;}
);

/* ?sin */
Template.add("sin", () => {T.trResult = either("오만", "분노", "질투", "음욕", "탐욕", "인색", "나태"); getPostNum(T.trResult); return T.trResult;});

/* ?chatter1 */
Template.add("chatter1",() => 
	{T.trResult = either(
		"If you think about it, neither of us are really here.",

		"Hey, listen. You hear that? It's nothing.",

		"Don't knock it 'till you try it. Jazz metal just works.",

		"Winter's actually kinda hot, in a fossil kinda way.",

		"I'd let a wolf knot me, to be honest.",

		"If quizzes are quizzical, then what are tests?",

		"You. Me. That bookshelf. Library dodgeball. You in?",

		"I haven't seen a single recycling bin in this school. Unbelievable.",

		"The canteen food is actually pretty good. It's a guilty pleasure of mine.",

		"Oh, to be a caterpillar, unaware of the woes of the world.", 

		"Someone said they saw a whale that had, like, tentacles, like a squid. Think squids and whales finally put their differences aside and got busy?"
	); getPostNum(T.trResult); return T.trResult;}
);

/* ?chatter2 */
Template.add("chatter2",() => 
	{T.trResult = either(
		"Why am I friends with you?",

		"I told you to stop hanging out with me.",

		"What the fuck?",

		"I'm out of here.",

		"Can we please have a normal conversation for once?",

		"...What?",

		"Pretty sure you're not supposed to come to school drunk.",

		"I'm calling the police.",

		"I gotta get that restraining order. For real, this time.",

		"Can I peg you?",
		
		"Can you make like a tree and die for the winter?"
	); getPostNum(T.trResult); return T.trResult;}
);

import type { Article } from '@/types/article';
import type { LanguageCode } from '@/types/language';

type ArticleDictionary = Record<LanguageCode, Article[]>;

export const articlesByLanguage: ArticleDictionary = {
  hi: [
    {
      id: '1',
      slug: 'delhi-air-quality-continues-to-dip',
      title: 'दिल्ली की हवा खतरनाक स्तर पर, आपात कदमों की तैयारी; ग्रैप-4 लागू करने पर विचार',
      summary:
        'राजधानी में वायु गुणवत्ता सूचकांक लगातार तीसरे दिन 450 के पार पहुंच गया है। सुप्रीम कोर्ट ने भी केंद्र और राज्य सरकार को फटकार लगाई है।',
      content: [
        'दिल्ली-एनसीआर में प्रदूषण का स्तर कम होने का नाम नहीं ले रहा है। केंद्रीय प्रदूषण नियंत्रण बोर्ड (CPCB) के ताजा आंकड़ों के मुताबिक, आनंद विहार, बवाना और मुंडका जैसे इलाकों में AQI 480 तक दर्ज किया गया है, जो "गंभीर प्लस" श्रेणी में आता है।',
        'दिल्ली सरकार ने पर्यावरण विशेषज्ञों और केंद्र के साथ एक आपात बैठक बुलाई है। सूत्रों के मुताबिक, स्कूलों को अगले आदेश तक ऑनलाइन मोड पर शिफ्ट करने, निजी दफ्तरों में 50% वर्क फ्रॉम होम लागू करने और सभी प्रकार की निर्माण गतिविधियों पर पूर्ण प्रतिबंध लगाने जैसे कड़े फैसलों पर मुहर लग सकती है।',
        'एम्स के निदेशक ने चेतावनी दी है कि यह जहरीली हवा न केवल बुजुर्गों और बच्चों के लिए, बल्कि स्वस्थ वयस्कों के लिए भी जानलेवा साबित हो सकती है। अस्पतालों में सांस की तकलीफ वाले मरीजों की संख्या में 30% की बढ़ोतरी देखी गई है।',
        'उधर, पंजाब और हरियाणा में पराली जलाने की घटनाओं पर सुप्रीम कोर्ट ने सख्त रुख अपनाया है। कोर्ट ने मुख्य सचिवों को तलब करते हुए पूछा है कि अब तक प्रभावी कदम क्यों नहीं उठाए गए।',
      ],
      category: 'Top Stories',
      author: 'टीम लाइव समाचार',
      publishedAt: '2025-11-27T06:30:00.000Z',
      imageUrl:
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
      tags: ['Environment', 'Delhi', 'AQI', 'Health'],
      featured: true,
      breaking: true,
    },
    {
      id: '2',
      slug: 'uttar-pradesh-investor-summit-update',
      title: 'यूपी ग्लोबल इन्वेस्टर समिट: पहले ही दिन 50 हजार करोड़ के एमओयू साइन',
      summary:
        'लखनऊ में आयोजित समिट में देश-विदेश के दिग्गज उद्योगपतियों ने हिस्सा लिया। सीएम योगी ने कहा- यूपी अब देश का ग्रोथ इंजन है।',
      content: [
        'उत्तर प्रदेश सरकार के फ्लैगशिप इवेंट "ग्लोबल इन्वेस्टर समिट" का आगाज आज लखनऊ में हुआ। पहले ही दिन रिलायंस, टाटा और अडानी समूह समेत 40 से ज्यादा बड़ी कंपनियों ने राज्य सरकार के साथ एमओयू पर हस्ताक्षर किए।',
        'समिट को संबोधित करते हुए मुख्यमंत्री योगी आदित्यनाथ ने कहा कि बेहतर कानून व्यवस्था और नई औद्योगिक नीति के चलते यूपी निवेशकों की पहली पसंद बन गया है। उन्होंने दावा किया कि इन समझौतों से प्रदेश में 2 लाख से अधिक प्रत्यक्ष रोजगार के अवसर पैदा होंगे।',
        'उद्योगपति गौतम अडानी ने घोषणा की कि उनका समूह अगले 5 वर्षों में राज्य में डिफेंस कॉरिडोर और लॉजिस्टिक्स पार्क में 10 हजार करोड़ का अतिरिक्त निवेश करेगा। वहीं, आनंद महिंद्रा ने वाराणसी में एक नया ईवी मैन्युफैक्चरिंग प्लांट लगाने की बात कही।',
      ],
      category: 'Business',
      author: 'संपादकीय डेस्क',
      publishedAt: '2025-11-26T12:00:00.000Z',
      imageUrl:
        'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
      tags: ['UP', 'Economy', 'Jobs', 'Investment'],
      featured: true,
    },
    {
      id: '3',
      slug: 'team-india-ready-for-australia-series',
      title: 'बॉर्डर-गावस्कर ट्रॉफी: पर्थ टेस्ट से पहले टीम इंडिया की प्लेइंग-11 पर सस्पेंस',
      summary:
        'कोच गंभीर ने कहा- हम आक्रामक क्रिकेट खेलेंगे। बुमराह संभालेंगे कमान, रोहित की गैरमौजूदगी में कौन करेगा ओपनिंग?',
      content: [
        'भारत और ऑस्ट्रेलिया के बीच बहुप्रतीक्षित बॉर्डर-गावस्कर ट्रॉफी का पहला टेस्ट कल से पर्थ के ऑप्टस स्टेडियम में शुरू होगा। नियमित कप्तान रोहित शर्मा की अनुपस्थिति में जसप्रीत बुमराह टीम की कमान संभालेंगे।',
        'पर्थ की तेज और उछाल भरी पिच को देखते हुए टीम इंडिया 4 तेज गेंदबाजों के साथ उतर सकती है। यशस्वी जायसवाल के साथ ओपनिंग कौन करेगा, इस पर अभी भी सस्पेंस बरकरार है। केएल राहुल और अभिमन्यु ईश्वरन के बीच कड़ी टक्कर मानी जा रही है।',
        'विराट कोहली का फॉर्म भी चर्चा का विषय बना हुआ है। ऑस्ट्रेलियाई मीडिया ने कोहली को "किंग" बताते हुए कहा है कि अगर भारत को सीरीज जीतनी है, तो कोहली का बल्ला चलना जरूरी है।',
      ],
      category: 'Sports',
      author: 'स्पोर्ट्स डेस्क',
      publishedAt: '2025-11-27T15:45:00.000Z',
      imageUrl:
        'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80',
      tags: ['Cricket', 'Australia Tour', 'BGT'],
      featured: false,
    },
    {
      id: '4',
      slug: 'ayodhya-ram-temple-progress',
      title: 'अयोध्या: राम मंदिर के शिखर का काम अंतिम चरण में, प्राण प्रतिष्ठा की वर्षगांठ पर विशेष तैयारी',
      summary:
        'ट्रस्ट ने जारी की मंदिर निर्माण की नई तस्वीरें। 22 जनवरी को दीपोत्सव जैसा नजारा होगा, 5 लाख दीये जलाने का लक्ष्य।',
      content: [
        'श्री राम जन्मभूमि तीर्थ क्षेत्र ट्रस्ट ने मंदिर निर्माण की ताजा तस्वीरें साझा की हैं, जिसमें शिखर का काम लगभग पूरा होता दिख रहा है। ट्रस्ट के महासचिव चंपत राय ने बताया कि गर्भगृह की सजावट और लाइटिंग का काम विदेशी विशेषज्ञों की देखरेख में किया जा रहा है।',
        'प्राण प्रतिष्ठा की पहली वर्षगांठ के लिए अयोध्या में भव्य तैयारियां चल रही हैं। प्रशासन ने 22 जनवरी को पूरी अयोध्या नगरी को 5 लाख दीयों से रोशन करने का लक्ष्य रखा है।',
        'श्रद्धालुओं की भारी भीड़ को देखते हुए रेलवे ने 10 विशेष आस्था ट्रेनें चलाने का फैसला किया है। साथ ही, मंदिर परिसर में कतार प्रबंधन के लिए एआई-आधारित कैमरों का इस्तेमाल किया जाएगा।',
      ],
      category: 'Faith',
      author: 'धर्म डेस्क',
      publishedAt: '2025-11-25T10:30:00.000Z',
      imageUrl:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
      tags: ['Ayodhya', 'Ram Mandir', 'Culture'],
      featured: false,
    },
    {
      id: '5',
      slug: 'spacex-starship-launch-success',
      title: 'स्पेसएक्स स्टारशिप की ऐतिहासिक उड़ान, मंगल मिशन की ओर बड़ा कदम',
      summary:
        'एलन मस्क की कंपनी ने दुनिया का सबसे शक्तिशाली रॉकेट सफलतापूर्वक लॉन्च किया। बूस्टर की सॉफ्ट लैंडिंग ने रचा इतिहास।',
      content: [
        'स्पेसएक्स ने अपने स्टारशिप रॉकेट की पांचवीं टेस्ट फ्लाइट में बड़ी कामयाबी हासिल की है। टेक्सास के स्टारबेस से लॉन्च हुए इस विशालकाय रॉकेट ने न केवल अंतरिक्ष की कक्षा को छुआ, बल्कि इसके सुपर हैवी बूस्टर ने लॉन्च पैड पर वापस आकर सुरक्षित लैंडिंग (Mechazilla catch) भी की।',
        'नासा ने इस सफलता पर बधाई देते हुए इसे आर्टेमिस मिशन के लिए महत्वपूर्ण बताया है। एलन मस्क ने ट्वीट किया, "मानवता के बहु-ग्रहीय होने की दिशा में आज एक बड़ा दिन है।"',
        'स्टारशिप अब तक का सबसे शक्तिशाली रॉकेट है, जिसे भविष्य में इंसानों को मंगल ग्रह तक ले जाने के लिए डिजाइन किया गया है।',
      ],
      category: 'Technology',
      author: 'टेक डेस्क',
      publishedAt: '2025-11-26T09:00:00.000Z',
      imageUrl:
        'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=1200&q=80',
      tags: ['SpaceX', 'Science', 'Mars'],
      featured: false,
    },
    {
      id: '6',
      slug: 'startups-eye-tier-2-india',
      title: 'बेंगलुरु-गुरुग्राम नहीं, अब इंदौर और जयपुर बन रहे स्टार्टअप्स के नए ठिकाने',
      summary:
        'सस्ती लागत और बेहतर इंफ्रास्ट्रक्चर के चलते टियर-2 शहरों का रुख कर रही हैं कंपनियां। फंडिंग में 18% की बढ़ोतरी।',
      content: [
        'भारत के स्टार्टअप इकोसिस्टम में एक बड़ा बदलाव देखने को मिल रहा है। नैसकॉम की ताजा रिपोर्ट के मुताबिक, पिछले एक साल में टियर-2 शहरों में रजिस्टर्ड होने वाले स्टार्टअप्स की संख्या में 25% का इजाफा हुआ है।',
        'इंदौर, जयपुर, लखनऊ और भुवनेश्वर जैसे शहर अब नए स्टार्टअप हब के रूप में उभर रहे हैं। कम रेंटल, सस्ता मैनपावर और सरकार की पीएलआई (PLI) स्कीम्स इसके मुख्य कारण हैं।',
        'एडटेक और हेल्थटेक सेक्टर की कई बड़ी कंपनियों ने इन शहरों में अपने डेवलपमेंट सेंटर खोले हैं, जिससे स्थानीय युवाओं को रोजगार के बेहतरीन मौके मिल रहे हैं।',
      ],
      category: 'Business',
      author: 'बिजनेस रिपोर्टर',
      publishedAt: '2025-11-24T09:15:00.000Z',
      imageUrl: null,
      tags: ['Startups', 'Tier-2', 'Economy'],
      featured: false,
    },
    {
      id: '7',
      slug: 'varanasi-ganga-ghat-makeover',
      title: 'काशी के घाटों पर अब क्रूज का मजा, पर्यटन को लगेंगे पंख',
      summary:
        'वाराणसी में अलकनंदा क्रूज की सफलता के बाद दो और नए क्रूज शुरू। पर्यटकों को मिलेगा बनारसी खानपान और संगीत का अनुभव।',
      content: [
        'देव दीपावली से पहले वाराणसी आने वाले पर्यटकों के लिए अच्छी खबर है। पर्यटन विभाग ने गंगा नदी में दो नए अत्याधुनिक डबल-डेकर क्रूज का संचालन शुरू किया है।',
        'इन क्रूज पर पर्यटकों को सुबह-ए-बनारस और गंगा आरती का अद्भुत नजारा देखने को मिलेगा। साथ ही, लाइव क्लासिकल म्यूजिक और बनारसी व्यंजनों का लुत्फ भी उठाया जा सकेगा।',
        'स्थानीय नाविकों ने शुरुआत में इसका विरोध किया था, लेकिन प्रशासन ने उन्हें भी इस योजना में शामिल करने का भरोसा दिया है। उम्मीद है कि इससे स्थानीय अर्थव्यवस्था में 25% तक की वृद्धि होगी।',
      ],
      category: 'Travel',
      author: 'पर्यटन टीम',
      publishedAt: '2025-11-23T08:00:00.000Z',
      imageUrl:
        'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80',
      tags: ['Varanasi', 'Tourism', 'Ganga'],
      featured: false,
    },
    {
      id: '8',
      slug: 'tech-policy-data-protection',
      title: 'डेटा प्रोटेक्शन बिल: निजता का अधिकार या सरकारी नियंत्रण? बहस तेज',
      summary:
        'संसद में पेश होने वाले नए बिल पर विपक्ष और टेक कंपनियों ने उठाए सवाल। सरकार ने कहा- नागरिकों की सुरक्षा सर्वोपरि।',
      content: [
        'डिजिटल पर्सनल डेटा प्रोटेक्शन बिल, 2025 को लेकर संसद के शीतकालीन सत्र में हंगामे के आसार हैं। बिल में डेटा लोकलाइजेशन और यूजर कंसेंट को लेकर कड़े प्रावधान किए गए हैं, जिनका टेक कंपनियां विरोध कर रही हैं।',
        'आईटी उद्योग संगठन नैसकॉम ने सरकार से स्टार्टअप्स के लिए नियमों में ढील देने की मांग की है। उनका कहना है कि अनुपालन लागत बढ़ने से इनोवेशन पर असर पड़ेगा।',
        'दूसरी ओर, सरकार का तर्क है कि यह बिल वैश्विक मानकों (GDPR) के अनुरूप है और इससे भारतीय नागरिकों के डेटा की गोपनीयता सुनिश्चित होगी।',
      ],
      category: 'Technology',
      author: 'टेक डेस्क',
      publishedAt: '2025-11-22T19:45:00.000Z',
      imageUrl:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80',
      tags: ['Policy', 'Privacy', 'Tech'],
      featured: false,
    },
    {
      id: '9',
      slug: 'healthcare-initiative-rural-india',
      title: 'गांव-गांव पहुंचेगी स्वास्थ्य सुविधा, 500 मोबाइल क्लिनिक रवाना',
      summary:
        'स्वास्थ्य मंत्रालय की नई पहल। बिहार, झारखंड और एमपी के दूरदराज इलाकों में मिलेगी मुफ्त जांच और दवा।',
      content: [
        'ग्रामीण भारत में स्वास्थ्य सेवाओं की पहुंच बढ़ाने के लिए केंद्र सरकार ने एक महत्वाकांक्षी योजना शुरू की है। इसके तहत देश के 10 पिछड़े राज्यों में 500 हाई-टेक मोबाइल क्लिनिक वैन तैनात की जाएंगी।',
        'ये वैन टेली-मेडिसिन सुविधाओं से लैस होंगी, जिससे गांव के मरीज सीधे एम्स और जिला अस्पतालों के विशेषज्ञ डॉक्टरों से परामर्श ले सकेंगे।',
        'पहले चरण में बिहार, झारखंड और मध्य प्रदेश के आदिवासी बहुल जिलों को प्राथमिकता दी गई है। योजना की निगरानी के लिए एक रियल-टाइम ट्रैकिंग ऐप भी लॉन्च किया गया है।',
      ],
      category: 'Health',
      author: 'हेल्थ रिपोर्टर',
      publishedAt: '2025-11-21T07:10:00.000Z',
      imageUrl:
        'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80',
      tags: ['Healthcare', 'Rural', 'Govt Scheme'],
      featured: false,
    },
    {
      id: '10',
      slug: 'cinema-festival-awards',
      title: 'कान्स के बाद अब सिंगापुर में बजा भारतीय सिनेमा का डंका',
      summary:
        'दो इंडिपेंडेंट फिल्मों ने जीते सर्वश्रेष्ठ पटकथा और संगीत के अवॉर्ड। अनुराग कश्यप ने कहा- यह भारतीय कहानियों का दौर है।',
      content: [
        'सिंगापुर इंटरनेशनल फिल्म फेस्टिवल में भारतीय फिल्मों ने एक बार फिर अपनी छाप छोड़ी है। मराठी फिल्म "स्थल" को बेस्ट स्क्रीनप्ले और मलयालम फिल्म "आट्टम" को जूरी प्राइज से नवाजा गया है।',
        'समारोह में मौजूद निर्देशक अनुराग कश्यप ने कहा कि ओटीटी प्लेटफॉर्म्स ने क्षेत्रीय सिनेमा को वैश्विक मंच दिया है। अब दुनिया भारत की असली कहानियों को देख और सराह रही है।',
        'फेस्टिवल में 30 देशों की 100 से ज्यादा फिल्में दिखाई गईं, जिनमें 8 भारतीय फिल्में शामिल थीं।',
      ],
      category: 'Entertainment',
      author: 'मनोरंजन डेस्क',
      publishedAt: '2025-11-20T18:20:00.000Z',
      imageUrl:
        'https://images.unsplash.com/photo-1485841890310-6a055c88698a?auto=format&fit=crop&w=1200&q=80',
      tags: ['Cinema', 'Awards', 'Bollywood'],
      featured: false,
    },
  ],
  en: [
    {
      id: '1',
      slug: 'delhi-air-quality-continues-to-dip',
      title: 'Delhi Chokes: AQI Breaches 450 Mark, GRAP-4 Restrictions Likely',
      summary:
        'Toxic smog engulfs the capital for the third consecutive day. Schools may go online as authorities scramble for solutions.',
      content: [
        'The air quality crisis in Delhi-NCR has deepened, with the Air Quality Index (AQI) soaring past 450 into the "Severe Plus" category. Areas like Anand Vihar and Mundka are reporting hazardous levels, making breathing difficult for residents.',
        'The Commission for Air Quality Management (CAQM) has convened an emergency meeting. Sources suggest that GRAP-4 measures, including a ban on diesel trucks, suspension of construction activities, and a shift to online classes for schools, could be announced by this evening.',
        'Health experts warn of a surge in respiratory ailments. "It is not just about asthma patients anymore; even healthy individuals are reporting breathlessness and burning eyes," said Dr. Guleria from AIIMS.',
        'Meanwhile, the Supreme Court has pulled up the Punjab and Haryana governments for failing to curb farm fires, calling it a "complete failure of state machinery."',
      ],
      category: 'Top Stories',
      author: 'Live News Team',
      publishedAt: '2025-11-27T06:30:00.000Z',
      imageUrl:
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
      tags: ['Environment', 'Delhi', 'AQI', 'Health'],
      featured: true,
      breaking: true,
    },
    {
      id: '2',
      slug: 'uttar-pradesh-investor-summit-update',
      title: 'UP Global Investor Summit: ₹50k Crore MoUs Signed on Day 1',
      summary:
        'Top industry leaders pledge massive investments. CM Yogi Adityanath pitches UP as the "Growth Engine of New India".',
      content: [
        'The Uttar Pradesh Global Investor Summit kicked off in Lucknow today with a bang. The state government signed Memorandums of Understanding (MoUs) worth ₹50,000 crore on the very first day, with commitments from conglomerates like Reliance, Tata, and Adani.',
        'Addressing the gathering, Chief Minister Yogi Adityanath highlighted the improved law and order situation and the new industrial policy as key drivers for investment. He projected that these projects would generate over 200,000 direct jobs.',
        'Gautam Adani announced a ₹10,000 crore investment in the state\'s defense corridor and logistics sector over the next five years, while Anand Mahindra expressed interest in setting up an EV manufacturing unit in Varanasi.',
      ],
      category: 'Business',
      author: 'Editorial Desk',
      publishedAt: '2025-11-26T12:00:00.000Z',
      imageUrl:
        'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
      tags: ['UP', 'Economy', 'Jobs', 'Investment'],
      featured: true,
    },
    {
      id: '3',
      slug: 'team-india-ready-for-australia-series',
      title: 'Border-Gavaskar Trophy: Bumrah to Lead in Perth, Opening Conundrum Persists',
      summary:
        'Coach Gambhir promises "aggressive cricket" despite Rohit\'s absence. All eyes on Kohli as India looks to defend the title.',
      content: [
        'The stage is set for the high-octane Border-Gavaskar Trophy opener at the Optus Stadium in Perth. With regular skipper Rohit Sharma on paternity leave, pace spearhead Jasप्रीत Bumrah will captain the side.',
        'Given the spicy nature of the Perth pitch, India is likely to field four seamers. However, the batting order remains a puzzle. The team management is yet to decide between KL Rahul and Abhimanyu Easwaran to partner Yashasvi Jaiswal at the top.',
        'Virat Kohli\'s form is under the scanner, but the Australian media has been wary of the "King". "He loves a fight, and there is no bigger stage than a Test series in Australia," wrote former captain Ricky Ponting.',
      ],
      category: 'Sports',
      author: 'Sports Desk',
      publishedAt: '2025-11-27T15:45:00.000Z',
      imageUrl:
        'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80',
      tags: ['Cricket', 'Australia Tour', 'BGT'],
      featured: false,
    },
    {
      id: '4',
      slug: 'ayodhya-ram-temple-progress',
      title: 'Ayodhya Ram Temple: Spire Work Nears Completion, Grand Plans for Anniversary',
      summary:
        'Trust releases new photos of the sanctum sanctorum. City gears up to light 500,000 lamps on January 22.',
      content: [
        'The Shri Ram Janmabhoomi Teerth Kshetra Trust has shared the latest progress report of the temple construction. The main spire (shikhar) is in its final stages, with intricate carving work being carried out by artisans from Rajasthan.',
        'Preparations are in full swing for the first anniversary of the consecration ceremony. The administration plans to recreate the magic of Deepotsav by lighting 500,000 earthen lamps across the city on January 22.',
        'To manage the expected rush of devotees, Indian Railways has announced 10 special "Aastha" trains. The temple complex is also being equipped with AI-powered surveillance cameras for crowd management.',
      ],
      category: 'Faith',
      author: 'Religion Desk',
      publishedAt: '2025-11-25T10:30:00.000Z',
      imageUrl:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
      tags: ['Ayodhya', 'Ram Mandir', 'Culture'],
      featured: false,
    },
    {
      id: '5',
      slug: 'spacex-starship-launch-success',
      title: 'SpaceX Starship: Historic Flight Moves Humanity Closer to Mars',
      summary:
        'Elon Musk\'s giant rocket achieves orbit and executes a perfect booster catch. NASA hails it as a milestone for Artemis.',
      content: [
        'SpaceX has achieved a monumental feat in spaceflight history with the successful fifth test flight of its Starship rocket. Launching from Starbase, Texas, the colossal vehicle not only reached space but also demonstrated a revolutionary recovery technique.',
        'In a scene straight out of science fiction, the Super Heavy booster returned to the launch pad and was caught mid-air by the "Mechazilla" launch tower arms. Elon Musk tweeted, "A big day for making humanity multi-planetary."',
        'Starship is the most powerful rocket ever built, designed to carry crew and cargo to the Moon, Mars, and beyond. This success paves the way for NASA\'s Artemis III mission, which aims to land astronauts on the Moon.',
      ],
      category: 'Technology',
      author: 'Tech Desk',
      publishedAt: '2025-11-26T09:00:00.000Z',
      imageUrl:
        'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=1200&q=80',
      tags: ['SpaceX', 'Science', 'Mars'],
      featured: false,
    },
    {
      id: '6',
      slug: 'startups-eye-tier-2-india',
      title: 'Beyond Bengaluru: Startups Flock to Indore, Jaipur, and Lucknow',
      summary:
        'Lower operational costs and better infrastructure drive the shift. Tier-2 cities see 25% jump in new registrations.',
      content: [
        'India\'s startup landscape is undergoing a significant demographic shift. According to a NASSCOM report, there has been a 25% year-on-year increase in startups registering in Tier-2 cities.',
        'Cities like Indore, Jaipur, and Bhubaneswar are emerging as the new innovation hubs. The primary drivers are 30-40% lower rental costs, availability of skilled talent, and supportive government policies like PLI schemes.',
        'Several edtech and healthtech unicorns have already set up large development centers in these cities, reversing the brain drain trend and creating high-value local employment.',
      ],
      category: 'Business',
      author: 'Business Reporter',
      publishedAt: '2025-11-24T09:15:00.000Z',
      imageUrl: null,
      tags: ['Startups', 'Tier-2', 'Economy'],
      featured: false,
    },
    {
      id: '7',
      slug: 'varanasi-ganga-ghat-makeover',
      title: 'Varanasi Ghats Get a Modern Touch with New Luxury Cruises',
      summary:
        'Two new double-decker cruises launched ahead of Dev Deepawali. Tourists to enjoy local cuisine and live music on the Ganges.',
      content: [
        'Just in time for the Dev Deepawali festival, the tourism department has flagged off two new luxury double-decker cruises on the Ganges in Varanasi. This move aims to boost high-end tourism in the spiritual capital.',
        'The cruises offer a curated experience, including "Subah-e-Banaras" yoga sessions, live classical music performances, and authentic Banarasi cuisine. Tourists can now witness the famous Ganga Aarti from the comfort of the deck.',
        'While local boatmen initially protested, authorities have assured them of integration into the broader tourism ecosystem. The initiative is expected to boost the local economy by 25%.',
      ],
      category: 'Travel',
      author: 'Travel Team',
      publishedAt: '2025-11-23T08:00:00.000Z',
      imageUrl:
        'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80',
      tags: ['Varanasi', 'Tourism', 'Ganga'],
      featured: false,
    },
    {
      id: '8',
      slug: 'tech-policy-data-protection',
      title: 'Data Protection Bill: Privacy Shield or State Control?',
      summary:
        'Heated debate expected in Parliament. Tech giants worry about compliance costs; government cites national security.',
      content: [
        'The Digital Personal Data Protection Bill, 2025, is set to be the flashpoint of the upcoming winter session of Parliament. The bill introduces stringent data localization norms and penalties for breaches, which has the tech industry worried.',
        'Industry body NASSCOM has urged the government to provide a longer transition period for startups, arguing that high compliance costs could stifle innovation. "We need a balanced approach," said the NASSCOM president.',
        'The government, however, maintains that the bill is aligned with global best practices like GDPR and is essential to protect the digital rights of Indian citizens in an increasingly connected world.',
      ],
      category: 'Technology',
      author: 'Tech Desk',
      publishedAt: '2025-11-22T19:45:00.000Z',
      imageUrl:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80',
      tags: ['Policy', 'Privacy', 'Tech'],
      featured: false,
    },
    {
      id: '9',
      slug: 'healthcare-initiative-rural-india',
      title: 'Healthcare on Wheels: 500 Mobile Clinics Rolled Out',
      summary:
        'Health Ministry launches massive rural outreach. Free diagnostics and medicines for remote villages in 10 states.',
      content: [
        'In a bid to bridge the urban-rural healthcare divide, the Union Health Ministry has launched a fleet of 500 high-tech mobile clinic vans. These units will serve remote villages in 10 states with poor health infrastructure.',
        'Equipped with telemedicine facilities, the vans will allow patients in villages to consult with specialists from AIIMS and district hospitals. They also carry essential medicines and diagnostic kits.',
        'Phase one of the rollout targets tribal districts in Bihar, Jharkhand, and Madhya Pradesh. A real-time tracking app has also been launched to monitor the movement and performance of these mobile clinics.',
      ],
      category: 'Health',
      author: 'Health Reporter',
      publishedAt: '2025-11-21T07:10:00.000Z',
      imageUrl:
        'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80',
      tags: ['Healthcare', 'Rural', 'Govt Scheme'],
      featured: false,
    },
    {
      id: '10',
      slug: 'cinema-festival-awards',
      title: 'Indian Cinema Shines at Singapore Film Festival',
      summary:
        'Two indie films bag top honors. Anurag Kashyap says the world is finally watching authentic Indian stories.',
      content: [
        'Indian independent cinema continues its global winning streak. At the Singapore International Film Festival, the Marathi film "Sthal" won Best Screenplay, while the Malayalam drama "Aattam" took home the Jury Prize.',
        'Filmmaker Anurag Kashyap, present at the event, remarked, "The rise of OTT platforms has democratized storytelling. The world is looking beyond Bollywood and appreciating the diverse, authentic narratives coming from regional India."',
        'The festival showcased over 100 films from 30 countries, including a strong contingent of 8 films from India, highlighting the country\'s growing soft power.',
      ],
      category: 'Entertainment',
      author: 'Entertainment Desk',
      publishedAt: '2025-11-20T18:20:00.000Z',
      imageUrl:
        'https://images.unsplash.com/photo-1485841890310-6a055c88698a?auto=format&fit=crop&w=1200&q=80',
      tags: ['Cinema', 'Awards', 'Bollywood'],
      featured: false,
    },
  ],
};

const DEFAULT_LANGUAGE: LanguageCode = 'hi';

export const getArticlesForLanguage = (language: LanguageCode | undefined): Article[] => {
  if (!language) {
    return articlesByLanguage[DEFAULT_LANGUAGE];
  }
  return articlesByLanguage[language] ?? articlesByLanguage[DEFAULT_LANGUAGE];
};

export const groupArticles = (language: LanguageCode | undefined): {
  hero: Article | null;
  spotlight: Article[];
  categories: Record<string, Article[]>;
  trending: Article[];
} => {
  const localizedArticles = getArticlesForLanguage(language);
  const hero = localizedArticles.find((article) => article.featured) ?? null;
  const spotlight = localizedArticles
    .filter((article) => article.id !== hero?.id)
    .slice(0, 4);

  const categories = localizedArticles.reduce<Record<string, Article[]>>((acc, article) => {
    if (!acc[article.category]) {
      acc[article.category] = [];
    }
    acc[article.category].push(article);
    return acc;
  }, {});

  const trending = [...localizedArticles]
    .sort((a, b) => {
      if (a.breaking && !b.breaking) return -1;
      if (!a.breaking && b.breaking) return 1;
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    })
    .slice(0, 5);

  return { hero: hero ?? spotlight[0] ?? null, spotlight, categories, trending };
};

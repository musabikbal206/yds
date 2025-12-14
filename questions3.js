const questions = [
    // --- VOCABULARY (1-6) ---
    {
        id: 1,
        type: 'A',
        instruction: "1-6. sorularda, cümlede boş bırakılan yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        text: "Although the government implemented strict regulations to control pollution, the factory's emissions continued to ---- the local air quality standards, causing outrage among the residents.",
        options: { A: "violate", B: "enhance", C: "sustain", D: "approve", E: "inspect" },
        correct: "A",
        dict: { "regulations": "düzenlemeler", "emissions": "emisyon/yayılım", "outrage": "büyük öfke", "violate": "ihlal etmek" },
        explanation: `<b>✅ Doğru Cevap: A) violate</b><br><b>📌 Sebep:</b> Hükümetin sıkı düzenlemeler getirmesine rağmen fabrikanın emisyonlarının standartları <i>ihlal etmeye</i> devam etmesi halkın öfkesine yol açar. "Violate standards" (standartları ihlal etmek) kalıbı uygundur.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B) enhance:</b> Geliştirmek/artırmak - kirlilik standartlarını geliştirmek öfke yaratmaz.<br><b>C) sustain:</b> Sürdürmek - anlamca uymaz.<br><b>D) approve:</b> Onaylamak - fabrika standartları onaylamaz.<br><b>E) inspect:</b> Denetlemek - fabrikanın işi değildir.`
    },
    {
        id: 2,
        type: 'A',
        instruction: "1-6. sorularda, cümlede boş bırakılan yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        text: "The scientist’s theory was initially met with skepticism, but subsequent experiments provided ---- evidence that silenced his critics and revolutionized the field of physics.",
        options: { A: "ambiguous", B: "circumstantial", C: "conclusive", D: "debatable", E: "imaginary" },
        correct: "C",
        dict: { "skepticism": "şüphecilik", "subsequent": "sonraki", "conclusive": "kesin/inandırıcı", "revolutionized": "devrim yarattı" },
        explanation: `<b>✅ Doğru Cevap: C) conclusive</b><br><b>📌 Sebep:</b> Eleştirmenleri susturan ve devrim yaratan bir kanıtın <i>kesin</i> ve inandırıcı olması gerekir. "Conclusive evidence" (kesin kanıt) sık kullanılan bir eşdizimdir.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A) ambiguous:</b> Belirsiz - eleştirmenleri susturmaz.<br><b>B) circumstantial:</b> Dolaylı - bilimsel devrim için zayıf kalır.<br><b>D) debatable:</b> Tartışmaya açık - eleştirileri bitirmez.<br><b>E) imaginary:</b> Hayali - bilimsel kanıt olamaz.`
    },
    {
        id: 3,
        type: 'A',
        instruction: "1-6. sorularda, cümlede boş bırakılan yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        text: "Due to the ---- nature of the peace negotiations, the diplomats were instructed to speak very carefully and avoid any statements that could offend the opposing party.",
        options: { A: "durable", B: "delicate", C: "abundant", D: "obsolete", E: "reckless" },
        correct: "B",
        dict: { "negotiations": "görüşmeler/müzakereler", "instructed": "talimat verilmiş", "offend": "gücendirmek", "delicate": "hassas" },
        explanation: `<b>✅ Doğru Cevap: B) delicate</b><br><b>📌 Sebep:</b> Diplomatların çok dikkatli konuşması gerekiyorsa, görüşmelerin doğası <i>hassas</i>tır. "Delicate nature" (hassas doğa) uygun ifadedir.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A) durable:</b> Dayanıklı - görüşme doğası için kullanılmaz.<br><b>C) abundant:</b> Bol/bereketli - anlamca uymaz.<br><b>D) obsolete:</b> Modası geçmiş/eskimiş.<br><b>E) reckless:</b> Dikkatsiz/pervasız.`
    },
    {
        id: 4,
        type: 'A',
        instruction: "1-6. sorularda, cümlede boş bırakılan yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        text: "To ensure the project is completed on time, the manager decided to ---- tasks among the team members according to their individual areas of expertise.",
        options: { A: "allocate", B: "withdraw", C: "confess", D: "deny", E: "remain" },
        correct: "A",
        dict: { "ensure": "sağlamak/garantiye almak", "expertise": "uzmanlık", "allocate": "tahsis etmek/paylaştırmak", "withdraw": "geri çekmek" },
        explanation: `<b>✅ Doğru Cevap: A) allocate</b><br><b>📌 Sebep:</b> Projenin zamanında bitmesi için görevler uzmanlık alanlarına göre <i>paylaştırılır/dağıtılır</i>.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B) withdraw:</b> Geri çekmek.<br><b>C) confess:</b> İtiraf etmek.<br><b>D) deny:</b> İnkar etmek.<br><b>E) remain:</b> Kalmak.`
    },
    {
        id: 5,
        type: 'A',
        instruction: "1-6. sorularda, cümlede boş bırakılan yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        text: "The company had to ---- the launch of their new smartphone model because of a sudden shortage of microchips in the global market.",
        options: { A: "take after", B: "put off", C: "bring about", D: "look down on", E: "run out of" },
        correct: "B",
        dict: { "launch": "piyasaya sürme/lansman", "shortage": "kıtlık/eksiklik", "put off": "ertelemek", "sudden": "ani" },
        explanation: `<b>✅ Doğru Cevap: B) put off</b><br><b>📌 Sebep:</b> Çip kıtlığı varsa, şirket lansmanı <i>ertelemek</i> zorunda kalır. "Put off" = Postpone.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A) take after:</b> (Birine) çekmek/benzemk.<br><b>C) bring about:</b> Sebep olmak/yol açmak.<br><b>D) look down on:</b> Küçümsemek/hor görmek.<br><b>E) run out of:</b> Tüketmek/bitirmek.`
    },
    {
        id: 6,
        type: 'A',
        instruction: "1-6. sorularda, cümlede boş bırakılan yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        text: "Many psychologists believe that personality is shaped not only by genetics but also by the environment in which a child is ----.",
        options: { A: "broken into", B: "called for", C: "brought up", D: "given up", E: "turned down" },
        correct: "C",
        dict: { "personality": "kişilik", "shaped": "şekillenmiş", "brought up": "yetiştirilmiş", "genetics": "genetik" },
        explanation: `<b>✅ Doğru Cevap: C) brought up</b><br><b>📌 Sebep:</b> Kişilik, çocuğun <i>yetiştirildiği</i> çevre tarafından şekillenir. "Bring up" (çocuk yetiştirmek) fiilinin pasif hali uygundur.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A) broken into:</b> Zorla girmek (hırsızlık vb.).<br><b>B) called for:</b> Gerektirmek/talep etmek.<br><b>D) given up:</b> Vazgeçmek/bırakmak.<br><b>E) turned down:</b> Reddetmek.`
    },

    // --- GRAMMAR (7-16) ---
    {
        id: 7,
        type: 'A',
        instruction: "7-16. sorularda, cümlede boş bırakılan yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        text: "If the archaeologists ---- the ancient tablet a decade earlier, they ---- the mystery of the lost civilization before the site was destroyed by the dam construction.",
        options: { A: "discovered / would solve", B: "had discovered / could have solved", C: "have discovered / might solve", D: "discover / will have solved", E: "were discovering / had solved" },
        correct: "B",
        dict: { "ancient": "antik", "decade": "on yıl", "destroyed": "yok edilmiş", "dam": "baraj" },
        explanation: `<b>✅ Doğru Cevap: B) had discovered / could have solved</b><br><b>📌 Sebep:</b> Geçmişte gerçekleşmemiş bir durumu anlatan (Type 3) If Clause yapısı gereklidir. "A decade earlier" (geçmiş) ve "before it was destroyed" (geçmiş) ifadeleri Type 3 (Past Perfect / Modal Perfect) işaretidir.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Type 2 yapısıdır, geçmişteki gerçek dışı durumlar için Type 3 gerekir.<br><b>C)</b> Present Perfect, geçmiş zaman zarfıyla (a decade earlier) kullanılmaz.<br><b>D)</b> Type 1 yapısıdır, gelecek/genel zaman anlatır.`
    },
    {
        id: 8,
        type: 'A',
        instruction: "7-16. sorularda, cümlede boş bırakılan yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        text: "The new software is designed ---- users ---- potential security threats before they can cause any damage to the system.",
        options: { A: "to warn / of", B: "warning / at", C: "having warned / for", D: "to have warned / with", E: "warned / about" },
        correct: "A",
        dict: { "threats": "tehditler", "damage": "hasar", "warn": "uyarmak", "security": "güvenlik" },
        explanation: `<b>✅ Doğru Cevap: A) to warn / of</b><br><b>📌 Sebep:</b> "Designed" fiilinden sonra amaç bildirmek için "to infinitive" gelir (designed to warn). "Warn" fiili bir tehlikeye karşı uyarmak anlamında genellikle "of" veya "about" edatı alır.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B)</b> "Warning" gerund yapısı "designed" sonrası tercih edilmez.<br><b>D)</b> Perfect infinitive (to have warned) geçmişe atıf yapar, burada genel amaç var.`
    },
    {
        id: 9,
        type: 'A',
        instruction: "7-16. sorularda, cümlede boş bırakılan yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        text: "---- the vast amount of evidence presented against him, the defendant continued to claim his innocence throughout the trial.",
        options: { A: "In terms of", B: "Owing to", C: "In spite of", D: "As a result of", E: "Similar to" },
        correct: "C",
        dict: { "evidence": "kanıt", "defendant": "sanık/davalı", "innocence": "masumiyet", "trial": "duruşma" },
        explanation: `<b>✅ Doğru Cevap: C) In spite of</b><br><b>📌 Sebep:</b> Zıtlık ilişkisi var. Çok miktarda kanıta <i>rağmen</i> masumiyetini iddia etti. "In spite of" + noun phrase yapısı uygundur.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A) In terms of:</b> Bakımından/açısından.<br><b>B) Owing to:</b> Nedeniyle (Sebep-sonuç ilişkisi kurar, burada zıtlık var).<br><b>D) As a result of:</b> Sonucunda.<br><b>E) Similar to:</b> Benzer olarak.`
    },
    {
        id: 10,
        type: 'A',
        instruction: "7-16. sorularda, cümlede boş bırakılan yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        text: "The World Health Organization has warned that ---- we take immediate action to reduce carbon emissions, we will face irreversible climate consequences ---- the next few years.",
        options: { A: "unless / within", B: "if / about", C: "since / for", D: "whether / at", E: "as long as / on" },
        correct: "A",
        dict: { "immediate": "acil", "emissions": "salınımlar", "irreversible": "geri döndürülemez", "consequences": "sonuçlar" },
        explanation: `<b>✅ Doğru Cevap: A) unless / within</b><br><b>📌 Sebep:</b> İlk boşlukta "Harekete geçmezsek... yüzleşeceğiz" anlamı için "If not" yani "Unless" gerekir. İkinci boşlukta zaman aralığı (önümüzdeki birkaç yıl <i>içinde</i>) için "within" uygundur.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B) if:</b> "Harekete geçersek... yüzleşeceğiz" anlamı çıkar, mantıksız olur.<br><b>C) since:</b> -den beri veya çünkü anlamındadır, uymaz.<br><b>E) as long as:</b> -dığı sürece, anlamı bozar.`
    },
    {
        id: 11,
        type: 'A',
        instruction: "7-16. sorularda, cümlede boş bırakılan yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        text: "Digital currencies have become ---- popular in recent years ---- many central banks are now considering issuing their own versions.",
        options: { A: "more / than", B: "so / that", C: "neither / nor", D: "as / as", E: "such / that" },
        correct: "B",
        dict: { "currencies": "para birimleri", "issuing": "çıkarmak/ihraç etmek", "considering": "düşünmek", "recent": "son" },
        explanation: `<b>✅ Doğru Cevap: B) so / that</b><br><b>📌 Sebep:</b> Sebep-sonuç ilişkisi kuran "so + sıfat + that" yapısı. O kadar popüler oldular ki (so popular... that), bankalar kendi versiyonlarını düşünüyor.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A) more / than:</b> Karşılaştırma yapar, ama ikinci kısım tam cümle olduğu için "that" yapısı gerekir.<br><b>E) such / that:</b> "Such" isim tamlamalarıyla kullanılır (such popular currencies that...), burada sadece sıfat var.`
    },
    {
        id: 12,
        type: 'A',
        instruction: "7-16. sorularda, cümlede boş bırakılan yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        text: "The ancient manuscript, ---- date of origin is still debated by historians, contains references to astronomical events that occurred thousands of years ago.",
        options: { A: "which", B: "where", C: "whose", D: "that", E: "whom" },
        correct: "C",
        dict: { "manuscript": "el yazması", "origin": "köken", "debated": "tartışılan", "occurred": "meydana gelmiş" },
        explanation: `<b>✅ Doğru Cevap: C) whose</b><br><b>📌 Sebep:</b> Sahiplik/aidiyet bildiren Relative Clause. "El yazması, <i>ki onun</i> köken tarihi tartışılıyor..." anlamı için "whose" kullanılır.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A) which:</b> Sahiplik bildirmez, "date" kelimesi ile bağlanamaz.<br><b>B) where:</b> Yer bildirir.<br><b>D) that:</b> Virgüllü (non-defining) relative clause'larda kullanılmaz.`
    },
    {
        id: 13,
        type: 'A',
        instruction: "7-16. sorularda, cümlede boş bırakılan yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        text: "In many cultures, silence is viewed ---- a sign of respect, whereas in others it may be interpreted ---- a lack of interest.",
        options: { A: "as / as", B: "with / for", C: "by / in", D: "for / to", E: "of / by" },
        correct: "A",
        dict: { "viewed": "görülmek", "interpreted": "yorumlanmak", "respect": "saygı", "lack": "eksiklik" },
        explanation: `<b>✅ Doğru Cevap: A) as / as</b><br><b>📌 Sebep:</b> "Viewed as" (... olarak görülmek) ve "interpreted as" (... olarak yorumlanmak) kalıpları kullanılır.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B)</b> Viewed with (ile görülmek) anlamı karşılamaz.<br><b>D)</b> Interpreted to genellikle fiil ile devam ederse kullanılır, burada isim var.`
    },
    {
        id: 14,
        type: 'A',
        instruction: "7-16. sorularda, cümlede boş bırakılan yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        text: "---- advances in medical technology have increased life expectancy, they have also raised ethical questions regarding end-of-life care.",
        options: { A: "Since", B: "While", C: "In case", D: "Once", E: "As if" },
        correct: "B",
        dict: { "advances": "gelişmeler", "expectancy": "beklenti/ömür", "ethical": "etik", "regarding": "ile ilgili" },
        explanation: `<b>✅ Doğru Cevap: B) While</b><br><b>📌 Sebep:</b> Zıtlık bildiren yan cümle. Gelişmeler ömrü uzatsa <i>da/iken</i> (olumlu), etik sorunlar çıkardı (olumsuz). "While" veya "Although" uygundur.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A) Since:</b> -den beri / çünkü. Zıtlık kurmaz.<br><b>C) In case:</b> Durumunda/ihtimaline karşı.<br><b>D) Once:</b> -ince/unca, olur olmaz.<br><b>E) As if:</b> -mış gibi.`
    },
    {
        id: 15,
        type: 'A',
        instruction: "7-16. sorularda, cümlede boş bırakılan yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        text: "No sooner ---- the professor entered the lecture hall ---- the students stopped talking and took their seats.",
        options: { A: "did / then", B: "has / when", C: "had / than", D: "was / that", E: "is / as" },
        correct: "C",
        dict: { "lecture hall": "konferans salonu/amfi", "seats": "koltuklar/yerler", "stopped": "durdu", "entered": "girdi" },
        explanation: `<b>✅ Doğru Cevap: C) had / than</b><br><b>📌 Sebep:</b> "No sooner... than..." (yapar yapmaz, olur olmaz) kalıbı. Genellikle Past Perfect ile kullanılır ve devrik yapı (inversion) gerektirir: "No sooner had + özne + V3 ... than ...".<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> "No sooner" ile "than" kullanılır, "then" değil.<br><b>B)</b> "Hardly/Scarcely... when" kalıbıdır, "No sooner" ile kullanılmaz.`
    },
    {
        id: 16,
        type: 'A',
        instruction: "7-16. sorularda, cümlede boş bırakılan yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        text: "The committee suggested that the proposal ---- immediately, strictly ---- the current budget constraints.",
        options: { A: "be evaluated / considering", B: "evaluates / considered", C: "evaluated / to consider", D: "is evaluating / having considered", E: "was evaluated / to be considered" },
        correct: "A",
        dict: { "proposal": "teklif/öneri", "constraints": "kısıtlamalar", "strictly": "katı bir şekilde", "evaluated": "değerlendirilmiş" },
        explanation: `<b>✅ Doğru Cevap: A) be evaluated / considering</b><br><b>📌 Sebep:</b> 1. Kısım: Subjunctive yapısı. "Suggest that" yapısından sonra fiil yalın halde (be evaluated) veya "should be evaluated" şeklinde gelir. 2. Kısım: Aktif kısaltma (Active Participle). Bütçe kısıtlamalarını <i>dikkate alarak</i> (considering).<br><br><b>❌ Diğer Seçenekler:</b><br><b>B)</b> "Evaluates" geniş zaman, subjunctive değil.<br><b>C)</b> "Evaluated" geçmiş zaman, subjunctive değil.<br><b>E)</b> "Was evaluated" geçmiş zaman, subjunctive değil.`
    },

    // --- CLOZE TEST 1 (17-21) ---
    {
        id: 17,
        type: 'B',
        instruction: "17-21. sorularda, aşağıdaki parçada numaralanmış yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        paragraph: "The concept of 'Soft Power' was first coined by Joseph Nye in the late 1980s. It refers to the ability of a country to persuade others to do what it wants without (17)---- force or coercion. Instead of using military might or economic sanctions, soft power relies (18)---- attraction. A country's culture, political values, and foreign policies are the three primary resources (19)---- soft power. For example, American movies, music, and technology have helped shape global perceptions of the United States (20)---- decades. However, maintaining soft power is difficult because it takes a long time to build and can be easily lost if a country acts in a way that is seen as hypocritical or (21)----.",
        text: "",
        options: { A: "resorting to", B: "looking into", C: "making up", D: "setting off", E: "breaking down" },
        correct: "A",
        dict: { "coercion": "zorlama/baskı", "persuade": "ikna etmek", "concept": "kavram" },
        explanation: `<b>✅ Doğru Cevap: A) resorting to</b><br><b>📌 Sebep:</b> Güç veya baskıya <i>başvurmadan</i> anlamı için "resort to" phrasal verb'ü kullanılır.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B) looking into:</b> İncelemek/araştırmak.<br><b>C) making up:</b> Uydurmak/oluşturmak.<br><b>D) setting off:</b> Yola çıkmak/tetiklemek.<br><b>E) breaking down:</b> Bozulmak/parçalamak.`
    },
    {
        id: 18,
        type: 'B',
        instruction: "17-21. sorularda, aşağıdaki parçada numaralanmış yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        paragraph: "The concept of 'Soft Power' was first coined by Joseph Nye in the late 1980s. It refers to the ability of a country to persuade others to do what it wants without (17)---- force or coercion. Instead of using military might or economic sanctions, soft power relies (18)---- attraction. A country's culture, political values, and foreign policies are the three primary resources (19)---- soft power. For example, American movies, music, and technology have helped shape global perceptions of the United States (20)---- decades. However, maintaining soft power is difficult because it takes a long time to build and can be easily lost if a country acts in a way that is seen as hypocritical or (21)----.",
        text: "",
        options: { A: "at", B: "on", C: "with", D: "for", E: "from" },
        correct: "B",
        dict: { "relies": "dayanır/güvenir", "attraction": "cazibe/çekicilik", "sanctions": "yaptırımlar" },
        explanation: `<b>✅ Doğru Cevap: B) on</b><br><b>📌 Sebep:</b> "Rely on" (bir şeye dayanmak/güvenmek) kalıplaşmış bir fiil-edat ikilisidir.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A, C, D, E:</b> "Rely" fiili ile kullanılmazlar.`
    },
    {
        id: 19,
        type: 'B',
        instruction: "17-21. sorularda, aşağıdaki parçada numaralanmış yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        paragraph: "The concept of 'Soft Power' was first coined by Joseph Nye in the late 1980s. It refers to the ability of a country to persuade others to do what it wants without (17)---- force or coercion. Instead of using military might or economic sanctions, soft power relies (18)---- attraction. A country's culture, political values, and foreign policies are the three primary resources (19)---- soft power. For example, American movies, music, and technology have helped shape global perceptions of the United States (20)---- decades. However, maintaining soft power is difficult because it takes a long time to build and can be easily lost if a country acts in a way that is seen as hypocritical or (21)----.",
        text: "",
        options: { A: "that generate", B: "generated", C: "to have generated", D: "being generated", E: "generating" },
        correct: "E",
        dict: { "primary": "birincil/temel", "resources": "kaynaklar", "policies": "politikalar" },
        explanation: `<b>✅ Doğru Cevap: E) generating</b><br><b>📌 Sebep:</b> "The three primary resources (that are) generating soft power" (yumuşak güç <i>üreten</i> kaynaklar). Aktif kısaltma (Active Participle) gereklidir. "That generate" (A şıkkı) de doğru olurdu ama relative clause bağlacı verilmemiş, bu yüzden kısaltma (-ing) kullanılır.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A) that generate:</b> Gramer olarak doğru olabilir ama genelde boşluk doldurmada kısaltma veya tam cümle yapısı seçenekleri ayrılır. Burada şıklarda doğrudan fiil kullanımı yok, kısaltma aranıyor.<br><b>B) generated:</b> Üretilen (pasif) - kaynaklar gücü üretir, üretilmez.<br><b>C) to have generated:</b> Geçmiş vurgusu yok.`
    },
    {
        id: 20,
        type: 'B',
        instruction: "17-21. sorularda, aşağıdaki parçada numaralanmış yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        paragraph: "The concept of 'Soft Power' was first coined by Joseph Nye in the late 1980s. It refers to the ability of a country to persuade others to do what it wants without (17)---- force or coercion. Instead of using military might or economic sanctions, soft power relies (18)---- attraction. A country's culture, political values, and foreign policies are the three primary resources (19)---- soft power. For example, American movies, music, and technology have helped shape global perceptions of the United States (20)---- decades. However, maintaining soft power is difficult because it takes a long time to build and can be easily lost if a country acts in a way that is seen as hypocritical or (21)----.",
        text: "",
        options: { A: "in", B: "since", C: "for", D: "at", E: "by" },
        correct: "C",
        dict: { "perceptions": "algılar", "shape": "şekillendirmek", "decades": "onyıllar" },
        explanation: `<b>✅ Doğru Cevap: C) for</b><br><b>📌 Sebep:</b> "Onyıllardır" anlamı katmak için, bir süreç bildiren "for" edatı kullanılır (for decades).<br><br><b>❌ Diğer Seçenekler:</b><br><b>B) since:</b> -den beri. "Since decades" denmez, "Since 1980" gibi nokta zaman gerekir.`
    },
    {
        id: 21,
        type: 'B',
        instruction: "17-21. sorularda, aşağıdaki parçada numaralanmış yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        paragraph: "The concept of 'Soft Power' was first coined by Joseph Nye in the late 1980s. It refers to the ability of a country to persuade others to do what it wants without (17)---- force or coercion. Instead of using military might or economic sanctions, soft power relies (18)---- attraction. A country's culture, political values, and foreign policies are the three primary resources (19)---- soft power. For example, American movies, music, and technology have helped shape global perceptions of the United States (20)---- decades. However, maintaining soft power is difficult because it takes a long time to build and can be easily lost if a country acts in a way that is seen as hypocritical or (21)----.",
        text: "",
        options: { A: "unjust", B: "accurate", C: "beneficial", D: "transparent", E: "consistent" },
        correct: "A",
        dict: { "hypocritical": "ikiyüzlü", "maintain": "sürdürmek", "unjust": "adil olmayan" },
        explanation: `<b>✅ Doğru Cevap: A) unjust</b><br><b>📌 Sebep:</b> Cümlede olumsuz bir anlam bütünlüğü var. "Hypocritical" (ikiyüzlü) veya <i>adil olmayan</i> (unjust) davranılırsa güç kaybedilir. "Or" bağlacı benzer (negatif) bir sıfat gerektirir.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B, C, D, E:</b> (Accurate, beneficial, transparent, consistent) Hepsi olumlu sıfatlardır, anlamı bozar.`
    },

    // --- CLOZE TEST 2 (22-26) ---
    {
        id: 22,
        type: 'B',
        instruction: "22-26. sorularda, aşağıdaki parçada numaralanmış yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        paragraph: "Epigenetics is the study of changes in organisms caused by modification of gene expression rather than alteration of the genetic code itself. (22)---- traditional genetics, which focuses on the DNA sequence, epigenetics looks at the chemical markers that tell genes whether to switch on or off. Recent studies have shown that environmental factors such as diet, stress, and pollution can (23)---- these markers. Remarkably, some of these epigenetic changes can be passed down to future generations. This means that the lifestyle choices we make today could potentially affect the health of our grandchildren, (24)---- we never meet them. Scientists are currently working to understand how we might use this knowledge to treat diseases (25)---- cancer and Alzheimer's. (26)----, ethical considerations regarding genetic manipulation remain a topic of heated debate.",
        text: "",
        options: { A: "Due to", B: "In terms of", C: "Unlike", D: "Thanks to", E: "Instead" },
        correct: "C",
        dict: { "modification": "değişiklik", "expression": "ifade/dışavurum", "sequence": "dizilim" },
        explanation: `<b>✅ Doğru Cevap: C) Unlike</b><br><b>📌 Sebep:</b> Geleneksel genetiğin <i>aksine</i> (Unlike), epigenetik kimyasal işaretlere bakar. Bir karşılaştırma ve zıtlık var.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A) Due to:</b> Nedeniyle.<br><b>D) Thanks to:</b> Sayesinde.<br><b>E) Instead:</b> Yerine (Genellikle "Instead of" olarak kullanılır).`
    },
    {
        id: 23,
        type: 'B',
        instruction: "22-26. sorularda, aşağıdaki parçada numaralanmış yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        paragraph: "Epigenetics is the study of changes in organisms caused by modification of gene expression rather than alteration of the genetic code itself. (22)---- traditional genetics, which focuses on the DNA sequence, epigenetics looks at the chemical markers that tell genes whether to switch on or off. Recent studies have shown that environmental factors such as diet, stress, and pollution can (23)---- these markers. Remarkably, some of these epigenetic changes can be passed down to future generations. This means that the lifestyle choices we make today could potentially affect the health of our grandchildren, (24)---- we never meet them. Scientists are currently working to understand how we might use this knowledge to treat diseases (25)---- cancer and Alzheimer's. (26)----, ethical considerations regarding genetic manipulation remain a topic of heated debate.",
        text: "",
        options: { A: "influence", B: "ignore", C: "preserve", D: "imitate", E: "despise" },
        correct: "A",
        dict: { "factors": "faktörler", "pollution": "kirlilik", "influence": "etkilemek" },
        explanation: `<b>✅ Doğru Cevap: A) influence</b><br><b>📌 Sebep:</b> Çevresel faktörler bu işaretleri <i>etkileyebilir</i>. "Influence" veya "affect" uygundur.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B) ignore:</b> Göz ardı etmek.<br><b>C) preserve:</b> Korumak.<br><b>D) imitate:</b> Taklit etmek.<br><b>E) despise:</b> Hor görmek/küçümsemek.`
    },
    {
        id: 24,
        type: 'B',
        instruction: "22-26. sorularda, aşağıdaki parçada numaralanmış yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        paragraph: "Epigenetics is the study of changes in organisms caused by modification of gene expression rather than alteration of the genetic code itself. (22)---- traditional genetics, which focuses on the DNA sequence, epigenetics looks at the chemical markers that tell genes whether to switch on or off. Recent studies have shown that environmental factors such as diet, stress, and pollution can (23)---- these markers. Remarkably, some of these epigenetic changes can be passed down to future generations. This means that the lifestyle choices we make today could potentially affect the health of our grandchildren, (24)---- we never meet them. Scientists are currently working to understand how we might use this knowledge to treat diseases (25)---- cancer and Alzheimer's. (26)----, ethical considerations regarding genetic manipulation remain a topic of heated debate.",
        text: "",
        options: { A: "even if", B: "because", C: "so that", D: "provided that", E: "in case" },
        correct: "A",
        dict: { "potentially": "potansiyel olarak", "grandchildren": "torunlar", "lifestyle": "yaşam tarzı" },
        explanation: `<b>✅ Doğru Cevap: A) even if</b><br><b>📌 Sebep:</b> Torunlarımızı hiç görmesek <i>bile</i> (even if) onları etkileyebiliriz.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B) because:</b> Çünkü.<br><b>C) so that:</b> Olsun diye (amaç).<br><b>D) provided that:</b> Şartıyla.<br><b>E) in case:</b> Durumunda/ihtimaline karşı.`
    },
    {
        id: 25,
        type: 'B',
        instruction: "22-26. sorularda, aşağıdaki parçada numaralanmış yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        paragraph: "Epigenetics is the study of changes in organisms caused by modification of gene expression rather than alteration of the genetic code itself. (22)---- traditional genetics, which focuses on the DNA sequence, epigenetics looks at the chemical markers that tell genes whether to switch on or off. Recent studies have shown that environmental factors such as diet, stress, and pollution can (23)---- these markers. Remarkably, some of these epigenetic changes can be passed down to future generations. This means that the lifestyle choices we make today could potentially affect the health of our grandchildren, (24)---- we never meet them. Scientists are currently working to understand how we might use this knowledge to treat diseases (25)---- cancer and Alzheimer's. (26)----, ethical considerations regarding genetic manipulation remain a topic of heated debate.",
        text: "",
        options: { A: "such as", B: "in addition to", C: "contrary to", D: "apart from", E: "as well as" },
        correct: "A",
        dict: { "diseases": "hastalıklar", "treat": "tedavi etmek", "knowledge": "bilgi" },
        explanation: `<b>✅ Doğru Cevap: A) such as</b><br><b>📌 Sebep:</b> Kanser ve Alzheimer gibi hastalıklar. Örnekleme yapmak için "such as" kullanılır.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B, D, E:</b> (In addition to, apart from, as well as) Ekleme yapar ama örnekleme için "such as" veya "like" en doğal olanıdır.`
    },
    {
        id: 26,
        type: 'B',
        instruction: "22-26. sorularda, aşağıdaki parçada numaralanmış yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        paragraph: "Epigenetics is the study of changes in organisms caused by modification of gene expression rather than alteration of the genetic code itself. (22)---- traditional genetics, which focuses on the DNA sequence, epigenetics looks at the chemical markers that tell genes whether to switch on or off. Recent studies have shown that environmental factors such as diet, stress, and pollution can (23)---- these markers. Remarkably, some of these epigenetic changes can be passed down to future generations. This means that the lifestyle choices we make today could potentially affect the health of our grandchildren, (24)---- we never meet them. Scientists are currently working to understand how we might use this knowledge to treat diseases (25)---- cancer and Alzheimer's. (26)----, ethical considerations regarding genetic manipulation remain a topic of heated debate.",
        text: "",
        options: { A: "Therefore", B: "Moreover", C: "However", D: "Otherwise", E: "Thus" },
        correct: "C",
        dict: { "considerations": "düşünceler/mülahazalar", "debate": "tartışma", "manipulation": "manipülasyon" },
        explanation: `<b>✅ Doğru Cevap: C) However</b><br><b>📌 Sebep:</b> Bilimsel ilerlemelerden bahsedildikten sonra etik sorunlara geçiliyor. Bu bir zıtlık veya kısıtlama durumudur. <i>Bununla birlikte/Ancak</i> (However) uygundur.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A, B, E:</b> (Therefore, Moreover, Thus) Paralel veya sonuç bildiren bağlaçlardır.`
    },

    // --- SENTENCE COMPLETION (27-36) ---
    {
        id: 27,
        type: 'A',
        instruction: "27-36. sorularda, verilen cümleyi uygun şekilde tamamlayan ifadeyi bulunuz.",
        text: "Although the pharmaceutical company invested billions in the research and development of the new vaccine, ----.",
        options: { A: "the clinical trials showed a success rate of over 95 percent", B: "it failed to gain approval from the regulatory authorities due to safety concerns", C: "shareholders were extremely pleased with the quarterly financial reports", D: "they are planning to expand their operations into South American markets", E: "doctors have already started prescribing it to patients with severe symptoms" },
        correct: "B",
        dict: { "invested": "yatırım yaptı", "approval": "onay", "regulatory": "düzenleyici", "concerns": "endişeler" },
        explanation: `<b>✅ Doğru Cevap: B) it failed to gain approval from the regulatory authorities due to safety concerns</b><br><b>📌 Sebep:</b> "Although" (rağmen) ile başlayan cümle zıtlık gerektirir. Milyarlarca yatırım yapılmasına rağmen <i>başarısız oldu/onay alamadı</i> (failed to gain approval).<br><br><b>❌ Diğer Seçenekler:</b><br><b>A, C, D, E:</b> Hepsi olumlu veya nötr sonuçlardır, zıtlık oluşturmazlar.`
    },
    {
        id: 28,
        type: 'A',
        instruction: "27-36. sorularda, verilen cümleyi uygun şekilde tamamlayan ifadeyi bulunuz.",
        text: "----, psychologists suggest that we should focus on building resilience rather than trying to eliminate stress completely.",
        options: { A: "Since it is impossible to avoid all stressful situations in modern life", B: "Even if some people are naturally more anxious than others", C: "Unless the patient shows signs of severe depression", D: "Because relaxation techniques are not always effective for everyone", E: "While medication can be a quick fix for mental health issues" },
        correct: "A",
        dict: { "resilience": "direnç/dayanıklılık", "eliminate": "yok etmek", "avoid": "kaçınmak", "stressful": "stresli" },
        explanation: `<b>✅ Doğru Cevap: A) Since it is impossible to avoid all stressful situations in modern life</b><br><b>📌 Sebep:</b> Sebep-sonuç ilişkisi. Modern hayatta stresi tamamen yok etmek imkansız olduğu <i>için</i> (Since...), direncimizi artırmaya odaklanmalıyız.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B, E:</b> Zıtlık bildirir, anlam bütünlüğü sağlamaz.<br><b>C:</b> Koşul bildirir, tavsiyenin genel doğasına uymaz.`
    },
    {
        id: 29,
        type: 'A',
        instruction: "27-36. sorularda, verilen cümleyi uygun şekilde tamamlayan ifadeyi bulunuz.",
        text: "The more reliance we place on artificial intelligence to make critical decisions, ----.",
        options: { A: "the easier it becomes to program computers for simple tasks", B: "we should be careful about the ethical implications of automation", C: "the greater the risk that we will lose our own cognitive and analytical skills", D: "it has become a controversial topic in the field of computer science", E: "so that future generations can benefit from advanced technology" },
        correct: "C",
        dict: { "reliance": "güven/bağımlılık", "artificial intelligence": "yapay zeka", "cognitive": "bilişsel", "analytical": "analitik" },
        explanation: `<b>✅ Doğru Cevap: C) the greater the risk that we will lose our own cognitive and analytical skills</b><br><b>📌 Sebep:</b> "The more ..., the more ..." (Ne kadar ekmek, o kadar köfte) kalıbı. AI'ya ne kadar çok güvenirsek, becerilerimizi kaybetme riskimiz o kadar <i>artar</i> (the greater the risk...).<br><br><b>❌ Diğer Seçenekler:</b><br><b>A, B, D, E:</b> "The more..." yapısını gramer veya anlam olarak tamamlamazlar.`
    },
    {
        id: 30,
        type: 'A',
        instruction: "27-36. sorularda, verilen cümleyi uygun şekilde tamamlayan ifadeyi bulunuz.",
        text: "Not until the main engine completely failed mid-flight ----.",
        options: { A: "the pilot realized the severity of the mechanical problem", B: "did the passengers panic and start looking for life vests", C: "the crew had already contacted the control tower for assistance", D: "was the emergency landing procedure successfully initiated", E: "that the airline company decided to ground the entire fleet" },
        correct: "B",
        dict: { "mid-flight": "uçuşun ortasında", "panic": "paniklemek", "vests": "yelekler", "failed": "bozuldu/durdu" },
        explanation: `<b>✅ Doğru Cevap: B) did the passengers panic and start looking for life vests</b><br><b>📌 Sebep:</b> "Not until..." cümle başında kullanıldığında ana cümle devrik (inverted) olur (did the passengers panic). Anlam: Motor durana kadar yolcular panik yapmadı (Motor durunca panik yaptılar).<br><br><b>❌ Diğer Seçenekler:</b><br><b>A, C, E:</b> Devrik yapı yok.<br><b>D:</b> Gramer olarak devrik (was the...) ancak anlamca "motor durana kadar acil iniş prosedürü başlatılmadı" mantıklı olsa da B şıkkı (panik) "Not until" kalıbının dramatik etkisine daha uygundur. Ancak genellikle YDS sorularında bu yapı eylemin başlangıcını vurgular.`
    },
    {
        id: 31,
        type: 'A',
        instruction: "27-36. sorularda, verilen cümleyi uygun şekilde tamamlayan ifadeyi bulunuz.",
        text: "---- in order to prevent the spread of the infectious disease to neighboring regions.",
        options: { A: "The government has declared a state of emergency in the capital", B: "Doctors were working around the clock to find a cure", C: "Strict travel restrictions and quarantine measures were implemented", D: "The virus is known to be transmitted through airborne particles", E: "Vaccination rates in the country have dropped significantly" },
        correct: "C",
        dict: { "spread": "yayılım", "infectious": "bulaşıcı", "restrictions": "kısıtlamalar", "measures": "önlemler" },
        explanation: `<b>✅ Doğru Cevap: C) Strict travel restrictions and quarantine measures were implemented</b><br><b>📌 Sebep:</b> Hastalığın yayılmasını önlemek <i>amacıyla</i> (in order to...), seyahat kısıtlamaları ve karantina önlemleri uygulandı. Amaç-araç ilişkisi tamdır.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A, B:</b> Mantıklı olabilir ama hastalığın <i>yayılmasını</i> doğrudan önleyen en etkili yöntem seyahat kısıtlamalarıdır (C şıkkı).<br><b>D, E:</b> Bilgi veriyor, önlem değil.`
    },
    {
        id: 32,
        type: 'A',
        instruction: "27-36. sorularda, verilen cümleyi uygun şekilde tamamlayan ifadeyi bulunuz.",
        text: "As long as the global demand for fossil fuels continues to rise, ----.",
        options: { A: "renewable energy sources like wind and solar will become cheaper", B: "it will be virtually impossible to meet the targets set by the Paris Agreement", C: "electric cars are gaining popularity among environmentally conscious consumers", D: "the ozone layer has shown signs of recovery in recent years", E: "governments are subsidizing green energy projects heavily" },
        correct: "B",
        dict: { "demand": "talep", "fossil fuels": "fosil yakıtlar", "targets": "hedefler", "virtually": "neredeyse/hemen hemen" },
        explanation: `<b>✅ Doğru Cevap: B) it will be virtually impossible to meet the targets set by the Paris Agreement</b><br><b>📌 Sebep:</b> Fosil yakıt talebi arttığı <i>sürece</i> (As long as), iklim hedeflerini (Paris Anlaşması) tutturmak imkansız olacaktır. Olumsuz koşul-sonuç ilişkisi.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A, C, D, E:</b> Fosil yakıt talebinin artmasıyla çelişen veya doğrudan ilgisiz olumlu gelişmelerdir.`
    },
    {
        id: 33,
        type: 'A',
        instruction: "27-36. sorularda, verilen cümleyi uygun şekilde tamamlayan ifadeyi bulunuz.",
        text: "Even though he had all the necessary qualifications for the job, ----.",
        options: { A: "he was hired immediately after the first interview", B: "his experience in the field was quite impressive", C: "he was not selected because he lacked good communication skills", D: "the salary package offered was much higher than he expected", E: "he had graduated from one of the top universities in the country" },
        correct: "C",
        dict: { "qualifications": "nitelikler", "selected": "seçilmiş", "lacked": "yoksun olmak", "communication": "iletişim" },
        explanation: `<b>✅ Doğru Cevap: C) he was not selected because he lacked good communication skills</b><br><b>📌 Sebep:</b> Zıtlık. Nitelikleri olmasına <i>rağmen</i> (Even though), seçilmedi. Sebep olarak başka bir eksiklik (iletişim becerisi) sunuluyor.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A, B, D, E:</b> Hepsi olumlu durumlardır, "Even though" ile başlayan zıtlık cümlesini tamamlamazlar.`
    },
    {
        id: 34,
        type: 'A',
        instruction: "27-36. sorularda, verilen cümleyi uygun şekilde tamamlayan ifadeyi bulunuz.",
        text: "----, which is why it is often referred to as the 'Red Planet'.",
        options: { A: "Mars has a very thin atmosphere composed mostly of carbon dioxide", B: "Jupiter is the largest planet in our solar system", C: "The surface of Mars is covered with iron oxide dust", D: "Astronomers have been studying the planet for centuries", E: "Water may have once flowed on the surface of Mars" },
        correct: "C",
        dict: { "referred to": "adlandırılmak/anılmak", "dust": "toz", "surface": "yüzey", "composed": "oluşmuş" },
        explanation: `<b>✅ Doğru Cevap: C) The surface of Mars is covered with iron oxide dust</b><br><b>📌 Sebep:</b> Neden "Kızıl Gezegen" dendiğini açıklayan cümle gelmelidir. Demir oksit (pas) kırmızıdır, bu yüzden Mars yüzeyi kırmızı görünür.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Atmosferin ince olması renkle ilgili değil.<br><b>B)</b> Jüpiter konu dışı.<br><b>E)</b> Su akması renkle ilgili değil.`
    },
    {
        id: 35,
        type: 'A',
        instruction: "27-36. sorularda, verilen cümleyi uygun şekilde tamamlayan ifadeyi bulunuz.",
        text: "While some experts argue that globalization leads to economic growth, ----.",
        options: { A: "it also promotes cultural exchange between different nations", B: "international trade barriers have been reduced significantly", C: "others contend that it widens the gap between the rich and the poor", D: "developing countries are the ones who benefit the most from it", E: "multinational corporations are expanding their reach globally" },
        correct: "C",
        dict: { "globalization": "küreselleşme", "growth": "büyüme", "contend": "ileri sürmek/iddia etmek", "gap": "uçurum/fark" },
        explanation: `<b>✅ Doğru Cevap: C) others contend that it widens the gap between the rich and the poor</b><br><b>📌 Sebep:</b> "While some experts..." (Bazı uzmanlar ... derken) kalıbı, karşıt görüş bildiren "others..." (diğerleri...) ile tamamlanır.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A, B, D, E:</b> Küreselleşmenin olumlu veya nötr yanlarıdır, "While" ile kurulan zıtlık yapısına uymaz.`
    },
    {
        id: 36,
        type: 'A',
        instruction: "27-36. sorularda, verilen cümleyi uygun şekilde tamamlayan ifadeyi bulunuz.",
        text: "It is essential that the new educational curriculum ----.",
        options: { A: "is focusing on memorization rather than critical thinking", B: "be designed to foster creativity and problem-solving skills", C: "has been prepared by a committee of retired teachers", D: "was implemented without consulting the parents", E: "will rely heavily on traditional teaching methods" },
        correct: "B",
        dict: { "curriculum": "müfredat", "foster": "teşvik etmek/geliştirmek", "essential": "gerekli/elzem" },
        explanation: `<b>✅ Doğru Cevap: B) be designed to foster creativity and problem-solving skills</b><br><b>📌 Sebep:</b> "It is essential that..." yapısı Subjunctive gerektirir (fiil yalın halde: be). Anlamca da müfredatın yaratıcılığı teşvik etmesi olumlu ve beklenen bir durumdur.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A, C, D, E:</b> Subjunctive yapısına uymazlar (is, has been, was, will). Ayrıca A ve E şıkları modern eğitim anlayışına zıttır.`
    },

    // --- TRANSLATION (37-40) ---
    {
        id: 37,
        type: 'A',
        instruction: "37-42. sorularda, verilen İngilizce cümleye anlamca en yakın Türkçe cümleyi, Türkçe cümleye anlamca en yakın İngilizce cümleyi bulunuz.",
        text: "The report published by the United Nations highlights that water scarcity will affect nearly half of the world's population by 2030 if current consumption patterns do not change.",
        options: { A: "Birleşmiş Milletler tarafından yayımlanan rapor, mevcut tüketim alışkanlıkları değişmezse 2030 yılına kadar dünya nüfusunun neredeyse yarısının su kıtlığından etkileneceğini vurguluyor.", B: "Eğer su tüketim alışkanlıkları değişmezse, Birleşmiş Milletler raporuna göre 2030 yılında dünya nüfusunun yarısı su kıtlığı çekecektir.", C: "Birleşmiş Milletlerin yayımladığı raporda belirtildiği üzere, su kıtlığı 2030 yılına kadar dünya nüfusunun yarısını etkileyecek gibi görünüyor.", D: "Mevcut tüketim modelleri değişmediği takdirde, 2030'da dünya nüfusunun yarısının su kıtlığı yaşayacağı Birleşmiş Milletler raporunda öne sürülmüştür.", E: "2030 yılına kadar dünya nüfusunun yarısını etkilemesi beklenen su kıtlığı, Birleşmiş Milletler raporunda mevcut tüketim alışkanlıklarına bağlanmıştır." },
        correct: "A",
        dict: { "scarcity": "kıtlık", "consumption": "tüketim", "patterns": "kalıplar/alışkanlıklar", "highlights": "vurgulamak" },
        explanation: `<b>✅ Doğru Cevap: A)</b><br><b>📌 Sebep:</b> Özne: "The report published by the United Nations" (BM tarafından yayımlanan rapor). Yüklem: "highlights" (vurguluyor). Nesne cümleciği: "that water scarcity will affect..." (...su kıtlığından etkileneceğini). Tüm öğeler A şıkkında eksiksiz ve doğru sırayla verilmiştir.`
    },
    {
        id: 38,
        type: 'A',
        instruction: "37-42. sorularda, verilen İngilizce cümleye anlamca en yakın Türkçe cümleyi, Türkçe cümleye anlamca en yakın İngilizce cümleyi bulunuz.",
        text: "Despite being one of the most brilliant painters of his time, Vincent van Gogh sold only one painting during his lifetime and lived in poverty.",
        options: { A: "Vincent van Gogh, yaşadığı dönemde sadece bir resim satabilmiş olsa da zamanının en parlak ressamlarından biri olarak kabul edilmiştir.", B: "Zamanının en parlak ressamlarından biri olmasına rağmen, Vincent van Gogh yaşamı boyunca sadece bir tablo sattı ve yoksulluk içinde yaşadı.", C: "Yoksulluk içinde yaşayan Vincent van Gogh, zamanının en iyi ressamlarından biriydi ancak hayatı boyunca yalnızca bir tablo satabildi.", D: "Vincent van Gogh hayatı boyunca sadece bir tablo sattığı için yoksulluk içinde yaşadı, oysa o zamanının en parlak ressamıydı.", E: "Yaşamı boyunca yoksulluk çeken Vincent van Gogh, tek bir tablo satmasına rağmen döneminin en parlak ressamlarından biriydi." },
        correct: "B",
        dict: { "brilliant": "parlak/zeki", "poverty": "yoksulluk", "lifetime": "yaşam boyu", "despite": "rağmen" },
        explanation: `<b>✅ Doğru Cevap: B)</b><br><b>📌 Sebep:</b> "Despite being..." (Olmasına rağmen) girişi B şıkkındaki "...olmasına rağmen" ile tam örtüşür. Ana cümle: "sold only one painting... and lived in poverty" (sadece bir tablo sattı ve yoksulluk içinde yaşadı).`
    },
    {
        id: 39,
        type: 'A',
        instruction: "37-42. sorularda, verilen İngilizce cümleye anlamca en yakın Türkçe cümleyi, Türkçe cümleye anlamca en yakın İngilizce cümleyi bulunuz.",
        text: "Scientists differ in their opinions as to whether artificial intelligence will eventually surpass human intelligence or simply serve as a tool to augment it.",
        options: { A: "Bilim insanları, yapay zekanın sonunda insan zekasını mı geçeceği yoksa sadece onu artıracak bir araç mı olacağı konusunda fikir ayrılığı yaşamaktadır.", B: "Yapay zekanın insan zekasını geçip geçmeyeceği konusu bilim insanları arasında tartışmalı bir mesele olmaya devam etmektedir.", C: "Bazı bilim insanları yapay zekanın insan zekasını geçeceğini düşünürken, diğerleri onun sadece bir araç olarak kalacağına inanmaktadır.", D: "Bilim insanlarının çoğu, yapay zekanın insan zekasını destekleyen bir araç olmaktan çıkıp onu geçeceği görüşündedir.", E: "Yapay zeka insan zekasını geçecek mi yoksa ona yardımcı mı olacak sorusu, bilim insanlarını ikiye bölmüş durumdadır." },
        correct: "A",
        dict: { "surpass": "geçmek/üstün gelmek", "augment": "artırmak/desteklemek", "differ": "ayrılmak/farklılaşmak", "eventually": "sonunda" },
        explanation: `<b>✅ Doğru Cevap: A)</b><br><b>📌 Sebep:</b> "Differ in their opinions" (fikir ayrılığı yaşamakta), "as to whether..." (...konusunda). "Surpass" (geçmek) ve "augment" (artırmak/desteklemek) fiilleri doğru çevrilmiş.`
    },
    {
        id: 40,
        type: 'A',
        instruction: "37-42. sorularda, verilen İngilizce cümleye anlamca en yakın Türkçe cümleyi, Türkçe cümleye anlamca en yakın İngilizce cümleyi bulunuz.",
        text: "Modern tıp, hastalıkları tedavi etme konusunda inanılmaz bir ilerleme kaydetmiş olsa da, önleyici sağlık hizmetleri hala yeterince önemsenmemektedir.",
        options: { A: "Although modern medicine has made incredible progress in treating diseases, preventive health services are still not given enough importance.", B: "Modern medicine has progressed incredibly in treating diseases, but preventive health services are still neglected.", C: "Even if modern medicine makes great progress in curing diseases, preventive health care is not considered important enough.", D: "Despite the fact that modern medicine is very successful in treating diseases, preventive health services remain unimportant.", E: "While modern medicine has made significant strides in treating diseases, it fails to give enough importance to preventive health services." },
        correct: "A",
        dict: { "progress": "ilerleme", "preventive": "önleyici", "importance": "önem", "treating": "tedavi etme" },
        explanation: `<b>✅ Doğru Cevap: A)</b><br><b>📌 Sebep:</b> Türkçe cümle "...olsa da" (Although) ile zıtlık kuruyor. "İnanılmaz bir ilerleme kaydetmiş" (made incredible progress), "hala yeterince önemsenmemektedir" (still not given enough importance). A şıkkı bu yapıyı tam karşılar.`
    },
    {
        id: 41,
        type: 'A',
        instruction: "37-42. sorularda, verilen Türkçe cümleye anlamca en yakın İngilizce cümleyi bulunuz.",
        text: "Gelişmekte olan ülkelerdeki hızlı sanayileşme süreci, ekonomik kalkınma için gerekli görülse de, uygun çevre politikalarıyla desteklenmediği takdirde doğal kaynakların tükenmesine ve geri dönülemez çevre kirliliğine yol açabilir.",
        options: {
            A: "Although the rapid industrialization process in developing countries is deemed necessary for economic development, it can lead to the depletion of natural resources and irreversible environmental pollution if not supported by appropriate environmental policies.",
            B: "Since rapid industrialization is essential for the economic growth of developing nations, it inevitably causes the exhaustion of natural resources and severe pollution unless strict environmental policies are implemented immediately.",
            C: "Developing countries need rapid industrialization for economic development; however, without proper environmental policies, this process will result in the depletion of natural resources and cause permanent environmental damage.",
            D: "While economic development in developing countries depends on rapid industrialization, the lack of appropriate environmental policies usually leads to the consumption of natural resources and irreversible pollution.",
            E: "The depletion of natural resources and irreversible environmental pollution are the likely results of rapid industrialization in developing countries, even though it is seen as necessary for economic development, if not backed by proper policies."
        },
        correct: "A",
        dict: { "deemed": "kabul edilen/görülen", "depletion": "tükenme", "irreversible": "geri dönülemez", "supported by": "ile desteklenen" },
        explanation: `<b>✅ Doğru Cevap: A)</b><br><b>📌 Sebep:</b> Türkçe cümledeki "...gerekli görülse de" yapısı, İngilizcede "Although ... is deemed necessary" ile tam karşılık bulur. "Uygun çevre politikalarıyla desteklenmediği takdirde" şartı, "if not supported by appropriate environmental policies" ifadesiyle birebir örtüşür. "Yol açabilir" (can lead to) olasılığı da doğru aktarılmıştır.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B)</b> "Since" (çünkü/-den beri) bağlacı kullanılmış, oysa orijinal cümlede zıtlık (görülse de) vardır. Ayrıca "inevitably" (kaçınılmaz olarak) orijinalde yoktur.<br><b>C)</b> Cümle ikiye bölünmüş ve "; however" ile bağlanmıştır, orijinaldeki yan cümle yapısını (olsa da/takdirde) tam yansıtmaz.<br><b>D)</b> "Depends on" (bağlıdır) ifadesi orijinalde yoktur. "Usually leads to" (genellikle yol açar) ifadesi "yol açabilir" (can lead to) ihtimalinden farklıdır.<br><b>E)</b> Cümle yapısı tersten kurulmuş (kirlilik sonuçtur...), orijinaldeki akış (sanayileşme... yol açabilir) bozulmuştur.`
    },
    {
        id: 42,
        type: 'A',
        instruction: "37-42. sorularda, verilen Türkçe cümleye anlamca en yakın İngilizce cümleyi bulunuz.",
        text: "Pek çok bilim insanı, iklim değişikliğinin etkilerini azaltmak için sadece fosil yakıt tüketimini azaltmanın yeterli olmayacağını, aynı zamanda atmosferdeki karbondioksiti temizleyecek yeni teknolojilere de yatırım yapılması gerektiğini savunmaktadır.",
        options: {
            A: "Scientists argue that reducing fossil fuel consumption is important for mitigating climate change, but they also emphasize the need to invest in new technologies to clean carbon dioxide from the atmosphere.",
            B: "It is argued by many scientists that in order to mitigate the effects of climate change, merely reducing fossil fuel consumption will not be sufficient, and that investments must also be made in new technologies to remove carbon dioxide from the atmosphere.",
            C: "Many scientists claim that we should not only reduce fossil fuel consumption to stop climate change but also invest heavily in new technologies capable of removing carbon dioxide from the atmosphere.",
            D: "According to many scientists, reducing fossil fuel consumption alone is not enough to mitigate climate change effects, so we must invest in technologies that clean carbon dioxide from the air.",
            E: "Many scientists argue that to mitigate the effects of climate change, reducing fossil fuel consumption alone will not be sufficient, but that investment should also be made in new technologies to clean carbon dioxide from the atmosphere."
        },
        correct: "E",
        dict: { "mitigate": "azaltmak/hafifletmek", "sufficient": "yeterli", "investment": "yatırım", "argue": "savunmak/iddia etmek" },
        explanation: `<b>✅ Doğru Cevap: E)</b><br><b>📌 Sebep:</b> "Pek çok bilim insanı... savunmaktadır" (Many scientists argue that...) girişi doğrudur. "Sadece... yeterli olmayacağını" (reducing... alone will not be sufficient) ve "aynı zamanda... gerektiğini" (but that investment should also be made...) yapıları, orijinal cümledeki bağlaç dengesini (sadece... değil, aynı zamanda...) ve anlamı tam olarak karşılar.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> "Important" (önemli) kelimesi orijinalde "yeterli olmayacağı" şeklindedir.<br><b>B)</b> Pasif giriş (It is argued by...) orijinaldeki aktif özne (Pek çok bilim insanı) vurgusunu biraz zayıflatır, ancak yapı olarak yakındır; fakat E şıkkı "savunmaktadır" (argue that... X won't be sufficient... but that Y should be made) yapısını daha akıcı bağlar.<br><b>C)</b> "Claim" (iddia etmek) ve "stop" (durdurmak) kelimeleri kullanılmış; orijinalde "savunmak" ve "etkilerini azaltmak" (mitigate effects) vardır.<br><b>D)</b> "So we must invest" (bu yüzden yatırım yapmalıyız) sonucu bağlar, oysa orijinalde bu bir gereklilik olarak savunulan görüşün parçasıdır.`
    },

    // --- READING PASSAGE 1 (43-46) ---
    {
        id: 43,
        type: 'B',
        instruction: "43-46. soruları aşağıdaki parçaya göre cevaplayınız.",
        paragraph: "The Renaissance, a fervent period of European cultural, artistic, political, and economic 'rebirth' following the Middle Ages, is generally described as taking place from the 14th century to the 17th century. The Renaissance promoted the rediscovery of classical philosophy, literature, and art. Some of the greatest thinkers, authors, statesmen, scientists, and artists in human history thrived during this era, while global exploration opened up new lands and cultures to European commerce. The Renaissance is credited with bridging the gap between the Middle Ages and modern-day civilization. While the exact origins of the Renaissance are debated, most historians agree that it started in Florence, Italy. Its spread to the rest of Europe was facilitated by the invention of the printing press, which allowed for the rapid dissemination of new ideas. However, this period was not just about art and culture; it was also a time of significant scientific revolution. Figures like Galileo and Copernicus challenged long-held views about the universe, shifting the focus from a geocentric to a heliocentric model, which fundamentally altered humanity's understanding of its place in the cosmos.",
        text: "It is clearly stated in the passage that the Renaissance ----.",
        options: {
            A: "was a period that strictly focused on artistic and cultural developments, ignoring scientific progress entirely",
            B: "served as a transitional period connecting the medieval era to the modern world through various advancements",
            C: "started simultaneously in all European countries during the 14th century thanks to the printing press",
            D: "was primarily a religious movement that sought to reinforce the traditional views of the church",
            E: "rejected all classical philosophy and literature in favor of completely new and modern ideas"
        },
        correct: "B",
        dict: { "bridging": "köprü kurma", "transitional": "geçiş", "medieval": "orta çağ", "advancements": "ilerlemeler" },
        explanation: `<b>✅ Doğru Cevap: B) served as a transitional period connecting the medieval era to the modern world through various advancements</b><br><b>📌 Sebep:</b> Parçada "The Renaissance is credited with bridging the gap between the Middle Ages and modern-day civilization" (Rönesans, Orta Çağ ile modern medeniyet arasındaki boşluğu kapatmasıyla bilinir) denilmektedir. Bu da onun bir geçiş dönemi (transitional period) olduğunu doğrular.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Parça, bu dönemin sadece sanatla ilgili olmadığını, bilimsel devrim de içerdiğini ("not just about art... also... scientific revolution") belirtir.<br><b>C)</b> Floransa'da başladığı ve sonra yayıldığı belirtilmiştir, her yerde aynı anda başlamamıştır.<br><b>D)</b> Dini güçlendirmekten ziyade, evren hakkındaki geleneksel görüşlere meydan okuduğu (challenged long-held views) belirtilmiştir.<br><b>E)</b> Klasik felsefeyi reddetmemiş, aksine "rediscovery" (yeniden keşif) teşvik edilmiştir.`
    },
    {
        id: 44,
        type: 'B',
        instruction: "43-46. soruları aşağıdaki parçaya göre cevaplayınız.",
        paragraph: "The Renaissance, a fervent period of European cultural, artistic, political, and economic 'rebirth' following the Middle Ages, is generally described as taking place from the 14th century to the 17th century. The Renaissance promoted the rediscovery of classical philosophy, literature, and art. Some of the greatest thinkers, authors, statesmen, scientists, and artists in human history thrived during this era, while global exploration opened up new lands and cultures to European commerce. The Renaissance is credited with bridging the gap between the Middle Ages and modern-day civilization. While the exact origins of the Renaissance are debated, most historians agree that it started in Florence, Italy. Its spread to the rest of Europe was facilitated by the invention of the printing press, which allowed for the rapid dissemination of new ideas. However, this period was not just about art and culture; it was also a time of significant scientific revolution. Figures like Galileo and Copernicus challenged long-held views about the universe, shifting the focus from a geocentric to a heliocentric model, which fundamentally altered humanity's understanding of its place in the cosmos.",
        text: "According to the passage, the invention of the printing press ----.",
        options: {
            A: "was the sole reason why the Renaissance began in Florence rather than other cities",
            B: "prevented the spread of classical philosophy by promoting only modern scientific ideas",
            C: "played a crucial role in distributing new Renaissance ideas quickly across Europe",
            D: "was opposed by scientists like Galileo and Copernicus because it spread misinformation",
            E: "delayed the progress of the Renaissance by making books too expensive for the public"
        },
        correct: "C",
        dict: { "facilitated": "kolaylaştırdı", "dissemination": "yayılma/dağıtım", "crucial": "hayati", "distributing": "dağıtma" },
        explanation: `<b>✅ Doğru Cevap: C) played a crucial role in distributing new Renaissance ideas quickly across Europe</b><br><b>📌 Sebep:</b> Parçada "Its spread to the rest of Europe was facilitated by the invention of the printing press, which allowed for the rapid dissemination of new ideas" (Avrupa'ya yayılması, yeni fikirlerin hızlı dağılımına izin veren matbaanın icadıyla kolaylaştı) ifadesi yer almaktadır.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Matbaa yayılmayı kolaylaştırdı, başlama sebebi olarak Floransa gösterilmedi.<br><b>B)</b> Klasik felsefeyi engellediğine dair bir bilgi yok.<br><b>D)</b> Bilim insanlarının karşı çıktığına dair bir bilgi yok.<br><b>E)</b> Geciktirdiği (delayed) değil, kolaylaştırdığı (facilitated) belirtilmiştir.`
    },
    {
        id: 45,
        type: 'B',
        instruction: "43-46. soruları aşağıdaki parçaya göre cevaplayınız.",
        paragraph: "The Renaissance, a fervent period of European cultural, artistic, political, and economic 'rebirth' following the Middle Ages, is generally described as taking place from the 14th century to the 17th century. The Renaissance promoted the rediscovery of classical philosophy, literature, and art. Some of the greatest thinkers, authors, statesmen, scientists, and artists in human history thrived during this era, while global exploration opened up new lands and cultures to European commerce. The Renaissance is credited with bridging the gap between the Middle Ages and modern-day civilization. While the exact origins of the Renaissance are debated, most historians agree that it started in Florence, Italy. Its spread to the rest of Europe was facilitated by the invention of the printing press, which allowed for the rapid dissemination of new ideas. However, this period was not just about art and culture; it was also a time of significant scientific revolution. Figures like Galileo and Copernicus challenged long-held views about the universe, shifting the focus from a geocentric to a heliocentric model, which fundamentally altered humanity's understanding of its place in the cosmos.",
        text: "One can infer from the passage that before the scientific revolution of the Renaissance, ----.",
        options: {
            A: "people generally believed that the sun revolved around the earth",
            B: "the heliocentric model was already widely accepted by the public",
            C: "there was no interest in understanding the cosmos or the universe",
            D: "scientists had already proven that the earth was the center of the universe",
            E: "global exploration had already mapped out the entire world accurately"
        },
        correct: "A",
        dict: { "geocentric": "yer merkezli", "heliocentric": "güneş merkezli", "revolved": "dönmek", "long-held": "uzun süredir inanılan" },
        explanation: `<b>✅ Doğru Cevap: A) people generally believed that the sun revolved around the earth</b><br><b>📌 Sebep:</b> Parçada, odak noktasının yer merkezli (geocentric - dünya merkezli) modelden güneş merkezli (heliocentric) modele kaydığı belirtiliyor. Demek ki daha önce insanlar dünyanın merkezde olduğuna (Güneş'in Dünya etrafında döndüğüne) inanıyordu. A şıkkı bu "geocentric" görüşü tanımlar.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B)</b> Heliocentric model Rönesans ile geldi, önce kabul görmemişti.<br><b>C)</b> İlgi olmadığı söylenemez, sadece görüş yanlıştı.<br><b>D)</b> Bilim insanları bunu "kanıtlamış" (proven) değildi, sadece "uzun süredir inanılan" (long-held views) görüş buydu.<br><b>E)</b> Küresel keşiflerin Rönesans ile yeni topraklar açtığı söyleniyor, daha önce tamamlanmış değildi.`
    },
    {
        id: 46,
        type: 'B',
        instruction: "43-46. soruları aşağıdaki parçaya göre cevaplayınız.",
        paragraph: "The Renaissance, a fervent period of European cultural, artistic, political, and economic 'rebirth' following the Middle Ages, is generally described as taking place from the 14th century to the 17th century. The Renaissance promoted the rediscovery of classical philosophy, literature, and art. Some of the greatest thinkers, authors, statesmen, scientists, and artists in human history thrived during this era, while global exploration opened up new lands and cultures to European commerce. The Renaissance is credited with bridging the gap between the Middle Ages and modern-day civilization. While the exact origins of the Renaissance are debated, most historians agree that it started in Florence, Italy. Its spread to the rest of Europe was facilitated by the invention of the printing press, which allowed for the rapid dissemination of new ideas. However, this period was not just about art and culture; it was also a time of significant scientific revolution. Figures like Galileo and Copernicus challenged long-held views about the universe, shifting the focus from a geocentric to a heliocentric model, which fundamentally altered humanity's understanding of its place in the cosmos.",
        text: "The main purpose of the passage is to ----.",
        options: {
            A: "criticize the Middle Ages for being a period of darkness and lack of innovation",
            B: "detail the biographies of famous scientists like Galileo and Copernicus",
            C: "argue that the printing press was the most important invention in history",
            D: "explain why Florence was the only city suitable for the Renaissance",
            E: "provide a general overview of the Renaissance, including its origins, spread, and key developments"
        },
        correct: "E",
        dict: { "overview": "genel bakış", "origins": "kökenler", "spread": "yayılım", "developments": "gelişmeler" },
        explanation: `<b>✅ Doğru Cevap: E) provide a general overview of the Renaissance, including its origins, spread, and key developments</b><br><b>📌 Sebep:</b> Parça Rönesans'ın tanımını, kökenini (Floransa), yayılmasını (matbaa), ve temel gelişmelerini (sanat, bilim, keşif) kapsayan genel bir özet sunmaktadır.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Orta Çağ'ı eleştirmek ana amaç değil, sadece bir geçişten bahsediliyor.<br><b>B)</b> Biyografi detayı verilmiyor, sadece isimler anılıyor.<br><b>C)</b> Matbaanın önemi belirtiliyor ama ana amaç bu değil.<br><b>D)</b> Floransa'da başladığı söyleniyor ama "neden sadece orası" olduğu tartışılmıyor.`
    },

    // --- READING PASSAGE 2 (47-50) ---
    {
        id: 47,
        type: 'B',
        instruction: "47-50. soruları aşağıdaki parçaya göre cevaplayınız.",
        paragraph: "Microplastics are tiny plastic particles, less than five millimeters in diameter, that result from the breakdown of larger plastic debris or are commercially manufactured for use in personal care products. These ubiquitous pollutants have infiltrated every corner of the globe, from the deepest ocean trenches to the highest mountain peaks. The pervasive nature of microplastics poses a significant threat to marine life; organisms ranging from plankton to whales ingest these particles, mistaking them for food. This ingestion can lead to physical blockages, malnutrition, and the accumulation of toxic chemicals in animal tissues, which then biomagnify up the food chain, eventually reaching humans. Recent studies have detected microplastics in human blood, lungs, and even placentas, raising alarming questions about their potential impact on human health. While the long-term effects are still being studied, early research suggests potential links to cellular damage and inflammation. Addressing this crisis requires a multifaceted approach, including reducing plastic production, improving waste management systems, and developing biodegradable alternatives.",
        text: "According to the passage, microplastics ----.",
        options: {
            A: "originate both from the disintegration of larger plastic waste and from direct industrial manufacturing",
            B: "have so far only been detected in marine environments and have not reached land",
            C: "are generally larger than five millimeters, making them easy to spot",
            D: "provide a safe and nutritious food source for many marine organisms",
            E: "have been definitively proven to be harmless to the human body"
        },
        correct: "A",
        dict: { "disintegration": "parçalanma", "manufacturing": "üretim", "debris": "atık" },
        explanation: `<b>✅ Doğru Cevap: A) originate both from the disintegration of larger plastic waste and from direct industrial manufacturing</b><br><b>📌 Sebep:</b> Parçada mikroplastiklerin kaynağı iki şekilde açıklanmıştır: "result from the breakdown of larger plastic debris" (büyük atıkların parçalanması) veya "are commercially manufactured" (ticari olarak üretilenler). A şıkkı bu iki kaynağı da doğru özetler.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B)</b> Sadece denizde değil, dağ zirvelerinde de var.<br><b>C)</b> 5 mm'den küçüktürler.<br><b>D)</b> Zararlıdır, besleyici değildir.<br><b>E)</b> Zararsız olduğu kanıtlanmamış, aksine hücresel hasarla ilişkilendirilmiştir.`
    },
    {
        id: 48,
        type: 'B',
        instruction: "47-50. soruları aşağıdaki parçaya göre cevaplayınız.",
        paragraph: "Microplastics are tiny plastic particles, less than five millimeters in diameter, that result from the breakdown of larger plastic debris or are commercially manufactured for use in personal care products. These ubiquitous pollutants have infiltrated every corner of the globe, from the deepest ocean trenches to the highest mountain peaks. The pervasive nature of microplastics poses a significant threat to marine life; organisms ranging from plankton to whales ingest these particles, mistaking them for food. This ingestion can lead to physical blockages, malnutrition, and the accumulation of toxic chemicals in animal tissues, which then biomagnify up the food chain, eventually reaching humans. Recent studies have detected microplastics in human blood, lungs, and even placentas, raising alarming questions about their potential impact on human health. While the long-term effects are still being studied, early research suggests potential links to cellular damage and inflammation. Addressing this crisis requires a multifaceted approach, including reducing plastic production, improving waste management systems, and developing biodegradable alternatives.",
        text: "It is stated in the passage that when marine animals ingest microplastics, ----.",
        options: {
            A: "they digest them easily and convert them into energy for growth",
            B: "it can cause physical obstructions and lead to a buildup of toxins in their bodies",
            C: "the plastic particles immediately dissolve and disappear without a trace",
            D: "they usually excrete them without any negative consequences to their health",
            E: "it helps them by cleaning their digestive tracts of other harmful parasites"
        },
        correct: "B",
        dict: { "ingest": "yutmak", "obstructions": "tıkanıklıklar", "buildup": "birikim", "toxins": "toksinler" },
        explanation: `<b>✅ Doğru Cevap: B) it can cause physical obstructions and lead to a buildup of toxins in their bodies</b><br><b>📌 Sebep:</b> Parçada "lead to physical blockages, malnutrition, and the accumulation of toxic chemicals" (fiziksel tıkanmalara, yetersiz beslenmeye ve toksik kimyasalların birikmesine yol açar) denilmektedir. B şıkkı bu etkileri doğru yansıtır.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Kolayca sindirip enerjiye çeviremezler.<br><b>C)</b> Çözülüp yok olmazlar.<br><b>D)</b> Olumsuz sonuç olmadan atamazlar, dokularda birikir.<br><b>E)</b> Parazit temizlediğine dair bilgi yok.`
    },
    {
        id: 49,
        type: 'B',
        instruction: "47-50. soruları aşağıdaki parçaya göre cevaplayınız.",
        paragraph: "Microplastics are tiny plastic particles, less than five millimeters in diameter, that result from the breakdown of larger plastic debris or are commercially manufactured for use in personal care products. These ubiquitous pollutants have infiltrated every corner of the globe, from the deepest ocean trenches to the highest mountain peaks. The pervasive nature of microplastics poses a significant threat to marine life; organisms ranging from plankton to whales ingest these particles, mistaking them for food. This ingestion can lead to physical blockages, malnutrition, and the accumulation of toxic chemicals in animal tissues, which then biomagnify up the food chain, eventually reaching humans. Recent studies have detected microplastics in human blood, lungs, and even placentas, raising alarming questions about their potential impact on human health. While the long-term effects are still being studied, early research suggests potential links to cellular damage and inflammation. Addressing this crisis requires a multifaceted approach, including reducing plastic production, improving waste management systems, and developing biodegradable alternatives.",
        text: "The author implies that the presence of microplastics in human bodies ----.",
        options: {
            A: "is a minor issue that will likely resolve itself over time naturally",
            B: "is strictly limited to people who live near coastal areas or oceans",
            C: "is a concerning development that warrants further investigation into health risks",
            D: "has been conclusively proven to be the primary cause of all modern diseases",
            E: "is beneficial because it helps build immunity against artificial materials"
        },
        correct: "C",
        dict: { "concerning": "endişe verici", "warrants": "gerektirir", "investigation": "araştırma", "imply": "ima etmek" },
        explanation: `<b>✅ Doğru Cevap: C) is a concerning development that warrants further investigation into health risks</b><br><b>📌 Sebep:</b> Parçada "raising alarming questions about their potential impact" (potansiyel etkileri hakkında alarm verici sorular uyandıran) ve "long-term effects are still being studied" (uzun vadeli etkiler hala çalışılıyor) ifadeleri, durumun endişe verici olduğunu ve daha fazla araştırmaya ihtiyaç duyulduğunu (warrants further investigation) ima eder.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Küçük bir sorun değildir.<br><b>B)</b> Sadece kıyı bölgelerinde yaşayanlarla sınırlı değildir (gıda zinciriyle herkese ulaşır).<br><b>D)</b> Tüm hastalıkların ana nedeni olduğu kanıtlanmamıştır.<br><b>E)</b> Faydalı olduğuna dair bir ima yoktur.`
    },
    {
        id: 50,
        type: 'B',
        instruction: "47-50. soruları aşağıdaki parçaya göre cevaplayınız.",
        paragraph: "Microplastics are tiny plastic particles, less than five millimeters in diameter, that result from the breakdown of larger plastic debris or are commercially manufactured for use in personal care products. These ubiquitous pollutants have infiltrated every corner of the globe, from the deepest ocean trenches to the highest mountain peaks. The pervasive nature of microplastics poses a significant threat to marine life; organisms ranging from plankton to whales ingest these particles, mistaking them for food. This ingestion can lead to physical blockages, malnutrition, and the accumulation of toxic chemicals in animal tissues, which then biomagnify up the food chain, eventually reaching humans. Recent studies have detected microplastics in human blood, lungs, and even placentas, raising alarming questions about their potential impact on human health. While the long-term effects are still being studied, early research suggests potential links to cellular damage and inflammation. Addressing this crisis requires a multifaceted approach, including reducing plastic production, improving waste management systems, and developing biodegradable alternatives.",
        text: "Which of the following is NOT mentioned in the passage as a potential solution to the microplastic problem?",
        options: {
            A: "Decreasing the overall production of plastic materials",
            B: "Enhancing systems used for managing waste",
            C: "Creating alternatives to plastic that can biodegrade",
            D: "Filtering all the water in the oceans using giant nets",
            E: "Adopting a multifaceted approach to handle the crisis"
        },
        correct: "D",
        dict: { "multifaceted": "çok yönlü", "biodegradable": "biyobozunur", "filtering": "filtrelemek", "nets": "ağlar" },
        explanation: `<b>✅ Doğru Cevap: D) Filtering all the water in the oceans using giant nets</b><br><b>📌 Sebep:</b> Parçanın son cümlesinde çözümler sıralanmıştır: "reducing plastic production" (A şıkkı), "improving waste management systems" (B şıkkı), "developing biodegradable alternatives" (C şıkkı) ve "multifaceted approach" (E şıkkı). Ancak okyanusları dev ağlarla filtrelemekten bahsedilmemiştir.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A, B, C, E:</b> Hepsi metinde geçen çözüm önerileridir.`
    },

    // --- READING PASSAGE 3 (51-54) ---
    {
        id: 51,
        type: 'B',
        instruction: "51-54. soruları aşağıdaki parçaya göre cevaplayınız.",
        paragraph: "The advent of the internet has fundamentally transformed the way modern society functions, impacting everything from communication and education to commerce and entertainment. While this digital revolution has democratized access to information, allowing people in remote areas to learn and connect, it has also introduced a host of complex challenges. One of the most pressing issues is the digital divide—the gap between those who have access to modern information and communication technology and those who do not. This disparity can exacerbate existing social and economic inequalities, as those without access are left behind in an increasingly digital world. Furthermore, the internet has given rise to concerns about privacy and data security. With vast amounts of personal information being shared online, individuals are vulnerable to cybercrimes such as identity theft and financial fraud. Social media, while a powerful tool for connection, has also been linked to mental health issues like anxiety and depression, particularly among teenagers. Despite these drawbacks, the internet remains an indispensable tool, and the focus must be on mitigating its negative effects while maximizing its benefits.",
        text: "According to the passage, the digital divide is a significant problem because ----.",
        options: {
            A: "it prevents people from enjoying entertainment online",
            B: "it causes internet speeds to slow down in urban areas",
            C: "it forces everyone to buy expensive computers they don't need",
            D: "it allows governments to spy on their citizens more easily",
            E: "it widens the gap between different social and economic groups"
        },
        correct: "E",
        dict: { "divide": "bölünme/uçurum", "disparity": "eşitsizlik", "exacerbate": "kötüleştirmek", "inequalities": "eşitsizlikler" },
        explanation: `<b>✅ Doğru Cevap: E) it widens the gap between different social and economic groups</b><br><b>📌 Sebep:</b> Parçada "This disparity can exacerbate existing social and economic inequalities" (Bu eşitsizlik, mevcut sosyal ve ekonomik eşitsizlikleri kötüleştirebilir) denilmektedir. Bu da boşluğun (gap) açılması anlamına gelir.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A, B, C, D:</b> Dijital uçurumun (digital divide) tanımı veya doğrudan sonucu olarak metinde geçmezler.`
    },
    {
        id: 52,
        type: 'B',
        instruction: "51-54. soruları aşağıdaki parçaya göre cevaplayınız.",
        paragraph: "The advent of the internet has fundamentally transformed the way modern society functions, impacting everything from communication and education to commerce and entertainment. While this digital revolution has democratized access to information, allowing people in remote areas to learn and connect, it has also introduced a host of complex challenges. One of the most pressing issues is the digital divide—the gap between those who have access to modern information and communication technology and those who do not. This disparity can exacerbate existing social and economic inequalities, as those without access are left behind in an increasingly digital world. Furthermore, the internet has given rise to concerns about privacy and data security. With vast amounts of personal information being shared online, individuals are vulnerable to cybercrimes such as identity theft and financial fraud. Social media, while a powerful tool for connection, has also been linked to mental health issues like anxiety and depression, particularly among teenagers. Despite these drawbacks, the internet remains an indispensable tool, and the focus must be on mitigating its negative effects while maximizing its benefits.",
        text: "The passage states that one of the positive impacts of the internet is that ----.",
        options: {
            A: "it has made information accessible to people even in distant locations",
            B: "it has completely eliminated the need for traditional education",
            C: "it has ensured that everyone keeps their personal data private",
            D: "it has reduced the crime rates in major cities significantly",
            E: "it has solved all mental health problems among teenagers"
        },
        correct: "A",
        dict: { "democratized": "demokratikleştirdi", "remote": "uzak", "accessible": "erişilebilir" },
        explanation: `<b>✅ Doğru Cevap: A) it has made information accessible to people even in distant locations</b><br><b>📌 Sebep:</b> Parçada "allowing people in remote areas to learn and connect" (uzak bölgelerdeki insanların öğrenmesine ve bağlanmasına olanak tanıdığı) belirtilmiştir.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B)</b> Geleneksel eğitimi yok ettiği söylenmiyor.<br><b>C)</b> Gizliliği sağladığı değil, tehdit ettiği söyleniyor.<br><b>D)</b> Suç oranlarını düşürdüğü söylenmiyor.<br><b>E)</b> Akıl sağlığı sorunlarını çözdüğü değil, bunlarla ilişkilendirildiği söyleniyor.`
    },
    {
        id: 53,
        type: 'B',
        instruction: "51-54. soruları aşağıdaki parçaya göre cevaplayınız.",
        paragraph: "The advent of the internet has fundamentally transformed the way modern society functions, impacting everything from communication and education to commerce and entertainment. While this digital revolution has democratized access to information, allowing people in remote areas to learn and connect, it has also introduced a host of complex challenges. One of the most pressing issues is the digital divide—the gap between those who have access to modern information and communication technology and those who do not. This disparity can exacerbate existing social and economic inequalities, as those without access are left behind in an increasingly digital world. Furthermore, the internet has given rise to concerns about privacy and data security. With vast amounts of personal information being shared online, individuals are vulnerable to cybercrimes such as identity theft and financial fraud. Social media, while a powerful tool for connection, has also been linked to mental health issues like anxiety and depression, particularly among teenagers. Despite these drawbacks, the internet remains an indispensable tool, and the focus must be on mitigating its negative effects while maximizing its benefits.",
        text: "It can be inferred from the passage that social media ----.",
        options: {
            A: "is the only cause of depression in modern society",
            B: "has a double-edged nature, offering both connectivity and risks",
            C: "is strictly prohibited for teenagers due to health risks",
            D: "improves privacy by allowing anonymous sharing",
            E: "is the main solution to the digital divide problem"
        },
        correct: "B",
        dict: { "double-edged": "iki ucu keskin (hem iyi hem kötü)", "connectivity": "bağlantı", "risks": "riskler" },
        explanation: `<b>✅ Doğru Cevap: B) has a double-edged nature, offering both connectivity and risks</b><br><b>📌 Sebep:</b> Metinde sosyal medya için "while a powerful tool for connection" (bağlantı için güçlü bir araç olsa da) ve "linked to mental health issues" (akıl sağlığı sorunlarıyla ilişkilendirilmiştir) denilerek hem iyi hem kötü yönü (double-edged) vurgulanmıştır.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Tek sebep olduğu söylenmiyor.<br><b>C)</b> Yasaklandığı söylenmiyor.<br><b>D)</b> Gizliliği geliştirdiği söylenmiyor.<br><b>E)</b> Dijital uçurumun çözümü olduğu söylenmiyor.`
    },
    {
        id: 54,
        type: 'B',
        instruction: "51-54. soruları aşağıdaki parçaya göre cevaplayınız.",
        paragraph: "The advent of the internet has fundamentally transformed the way modern society functions, impacting everything from communication and education to commerce and entertainment. While this digital revolution has democratized access to information, allowing people in remote areas to learn and connect, it has also introduced a host of complex challenges. One of the most pressing issues is the digital divide—the gap between those who have access to modern information and communication technology and those who do not. This disparity can exacerbate existing social and economic inequalities, as those without access are left behind in an increasingly digital world. Furthermore, the internet has given rise to concerns about privacy and data security. With vast amounts of personal information being shared online, individuals are vulnerable to cybercrimes such as identity theft and financial fraud. Social media, while a powerful tool for connection, has also been linked to mental health issues like anxiety and depression, particularly among teenagers. Despite these drawbacks, the internet remains an indispensable tool, and the focus must be on mitigating its negative effects while maximizing its benefits.",
        text: "The author concludes that regarding the internet, we should ----.",
        options: {
            A: "ban its use in schools to protect children",
            B: "stop sharing any personal information online",
            C: "try to reduce its harms while utilizing its advantages",
            D: "accept that privacy is no longer possible in the modern world",
            E: "focus solely on the economic benefits it provides"
        },
        correct: "C",
        dict: { "mitigating": "hafifletmek", "maximizing": "maksimize etmek", "drawbacks": "sakıncalar" },
        explanation: `<b>✅ Doğru Cevap: C) try to reduce its harms while utilizing its advantages</b><br><b>📌 Sebep:</b> Son cümle "focus must be on mitigating its negative effects while maximizing its benefits" (olumsuz etkilerini azaltırken faydalarını maksimize etmeye odaklanılmalı) diyerek C şıkkını doğrular.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Yasaklama önerisi yok.<br><b>B)</b> Bilgi paylaşımını tamamen durdurma önerisi yok.<br><b>D)</b> Gizliliğin imkansızlığını kabullenme önerisi yok.<br><b>E)</b> Sadece ekonomik faydalara odaklanma önerisi yok.`
    },

    // --- READING PASSAGE 4 (55-58) ---
    {
        id: 55,
        type: 'B',
        instruction: "55-58. soruları aşağıdaki parçaya göre cevaplayınız.",
        paragraph: "Placebo effect is a fascinating psychological phenomenon where a patient experiences a perceived improvement in their condition after being given a sham treatment, such as a sugar pill, that has no therapeutic value. This effect underscores the powerful connection between the mind and the body. When patients believe they are receiving medication, their brains can trigger the release of endorphins and other chemicals that act as natural painkillers, effectively reducing symptoms. However, the placebo effect is not merely 'all in the head'; it can produce measurable physiological changes, such as altered heart rate or blood pressure. Conversely, there is also the 'nocebo effect', where a patient's negative expectations lead to a worsening of symptoms or the appearance of side effects, even when the treatment is inert. While placebos are widely used in clinical trials to test the efficacy of new drugs, their use in clinical practice is controversial due to ethical concerns about deception. Nevertheless, understanding how the placebo effect works can help doctors harness the power of the patient's mind to improve treatment outcomes.",
        text: "The passage defines the placebo effect as ----.",
        options: {
            A: "a dangerous medical condition caused by taking too many sugar pills",
            B: "a method used by doctors to trick patients into paying more for treatment",
            C: "a chemical reaction between sugar and the body's immune system",
            D: "a perceived improvement in a patient's condition resulting from a sham treatment",
            E: "the negative side effects experienced after taking a new medication"
        },
        correct: "D",
        dict: { "perceived": "algılanan", "improvement": "iyileşme", "sham": "sahte/taklit", "therapeutic": "tedavi edici" },
        explanation: `<b>✅ Doğru Cevap: D) a perceived improvement in a patient's condition resulting from a sham treatment</b><br><b>📌 Sebep:</b> İlk cümlede tanım yapılmıştır: "experiences a perceived improvement... after being given a sham treatment".<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Tehlikeli bir durum değildir.<br><b>B)</b> Para tuzağı değildir.<br><b>C)</b> Kimyasal reaksiyon değildir.<br><b>E)</b> Bu nocebo etkisine veya gerçek yan etkiye benzer, placebo iyileşme ile ilgilidir.`
    },
    {
        id: 56,
        type: 'B',
        instruction: "55-58. soruları aşağıdaki parçaya göre cevaplayınız.",
        paragraph: "Placebo effect is a fascinating psychological phenomenon where a patient experiences a perceived improvement in their condition after being given a sham treatment, such as a sugar pill, that has no therapeutic value. This effect underscores the powerful connection between the mind and the body. When patients believe they are receiving medication, their brains can trigger the release of endorphins and other chemicals that act as natural painkillers, effectively reducing symptoms. However, the placebo effect is not merely 'all in the head'; it can produce measurable physiological changes, such as altered heart rate or blood pressure. Conversely, there is also the 'nocebo effect', where a patient's negative expectations lead to a worsening of symptoms or the appearance of side effects, even when the treatment is inert. While placebos are widely used in clinical trials to test the efficacy of new drugs, their use in clinical practice is controversial due to ethical concerns about deception. Nevertheless, understanding how the placebo effect works can help doctors harness the power of the patient's mind to improve treatment outcomes.",
        text: "According to the passage, the 'nocebo effect' occurs when ----.",
        options: {
            A: "a patient physically rejects the medicine due to an allergy",
            B: "the body produces too many endorphins causing pain",
            C: "doctors fail to explain the side effects of a drug properly",
            D: "a patient gets better despite having negative expectations",
            E: "negative expectations cause a patient's condition to deteriorate"
        },
        correct: "E",
        dict: { "deteriorate": "kötüleşmek", "worsening": "kötüleşme", "expectations": "beklentiler", "inert": "etkisiz" },
        explanation: `<b>✅ Doğru Cevap: E) negative expectations cause a patient's condition to deteriorate</b><br><b>📌 Sebep:</b> Metinde "patient's negative expectations lead to a worsening of symptoms" (hastanın olumsuz beklentileri semptomların kötüleşmesine yol açar) denilmektedir. Deteriorate = Worsen.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Alerji değildir.<br><b>B)</b> Endorfin fazlalığı değildir.<br><b>C)</b> Doktor hatası değildir.<br><b>D)</b> İyileşme (getting better) placebo'dur, nocebo kötüleşmedir.`
    },
    {
        id: 57,
        type: 'B',
        instruction: "55-58. soruları aşağıdaki parçaya göre cevaplayınız.",
        paragraph: "Placebo effect is a fascinating psychological phenomenon where a patient experiences a perceived improvement in their condition after being given a sham treatment, such as a sugar pill, that has no therapeutic value. This effect underscores the powerful connection between the mind and the body. When patients believe they are receiving medication, their brains can trigger the release of endorphins and other chemicals that act as natural painkillers, effectively reducing symptoms. However, the placebo effect is not merely 'all in the head'; it can produce measurable physiological changes, such as altered heart rate or blood pressure. Conversely, there is also the 'nocebo effect', where a patient's negative expectations lead to a worsening of symptoms or the appearance of side effects, even when the treatment is inert. While placebos are widely used in clinical trials to test the efficacy of new drugs, their use in clinical practice is controversial due to ethical concerns about deception. Nevertheless, understanding how the placebo effect works can help doctors harness the power of the patient's mind to improve treatment outcomes.",
        text: "It is stated in the passage that the use of placebos in actual clinical practice is debated because ----.",
        options: {
            A: "it involves deceiving the patient, which raises ethical issues",
            B: "they are too expensive for most patients to afford",
            C: "they have absolutely no effect on the human body",
            D: "doctors prefer to use natural remedies instead of pills",
            E: "they cause permanent damage to the brain's chemical balance"
        },
        correct: "A",
        dict: { "controversial": "tartışmalı", "deception": "aldatma/kandırma", "ethical": "etik", "concerns": "endişeler" },
        explanation: `<b>✅ Doğru Cevap: A) it involves deceiving the patient, which raises ethical issues</b><br><b>📌 Sebep:</b> Metinde "controversial due to ethical concerns about deception" (aldatma konusundaki etik endişeler nedeniyle tartışmalı) ifadesi geçmektedir.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B)</b> Pahalı oldukları söylenmiyor (genelde şeker hapıdır, ucuzdur).<br><b>C)</b> Etkisi olduğu (fizyolojik değişimler) söyleniyor.<br><b>D)</b> Doktor tercihleri bu sebeple değil.<br><b>E)</b> Kalıcı hasar verdiğine dair bilgi yok.`
    },
    {
        id: 58,
        type: 'B',
        instruction: "55-58. soruları aşağıdaki parçaya göre cevaplayınız.",
        paragraph: "Placebo effect is a fascinating psychological phenomenon where a patient experiences a perceived improvement in their condition after being given a sham treatment, such as a sugar pill, that has no therapeutic value. This effect underscores the powerful connection between the mind and the body. When patients believe they are receiving medication, their brains can trigger the release of endorphins and other chemicals that act as natural painkillers, effectively reducing symptoms. However, the placebo effect is not merely 'all in the head'; it can produce measurable physiological changes, such as altered heart rate or blood pressure. Conversely, there is also the 'nocebo effect', where a patient's negative expectations lead to a worsening of symptoms or the appearance of side effects, even when the treatment is inert. While placebos are widely used in clinical trials to test the efficacy of new drugs, their use in clinical practice is controversial due to ethical concerns about deception. Nevertheless, understanding how the placebo effect works can help doctors harness the power of the patient's mind to improve treatment outcomes.",
        text: "One surprising fact mentioned about the placebo effect is that it ----.",
        options: {
            A: "only works on patients who have mental illnesses",
            B: "can result in measurable physical changes in the body",
            C: "is stronger than any real medication available today",
            D: "works best when the patient knows the pill is fake",
            E: "has been banned in all clinical trials worldwide"
        },
        correct: "B",
        dict: { "measurable": "ölçülebilir", "physiological": "fizyolojik", "altered": "değişmiş", "heart rate": "kalp atış hızı" },
        explanation: `<b>✅ Doğru Cevap: B) can result in measurable physical changes in the body</b><br><b>📌 Sebep:</b> Metinde "produce measurable physiological changes, such as altered heart rate or blood pressure" (kalp atışı veya tansiyon değişimi gibi ölçülebilir fizyolojik değişiklikler üretebilir) denilmektedir.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Sadece akıl hastalarında çalıştığı söylenmiyor.<br><b>C)</b> Gerçek ilaçtan güçlü olduğu söylenmiyor.<br><b>D)</b> Sahte olduğunu bilince çalıştığı söylenmiyor (genelde bilmeyince çalışır).<br><b>E)</b> Yasaklandığı söylenmiyor, klinik deneylerde yaygın kullanıldığı belirtiliyor.`
    },

    // --- READING PASSAGE 5 (59-62) ---
    {
        id: 59,
        type: 'B',
        instruction: "59-62. soruları aşağıdaki parçaya göre cevaplayınız.",
        paragraph: "Impressionism, a radical art movement that began in the late 19th century in France, marked a significant departure from the rigid traditions of the Académie des Beaux-Arts. Impressionist painters, such as Claude Monet, Pierre-Auguste Renoir, and Camille Pissarro, rejected the emphasis on detailed realism and historical subjects. Instead, they sought to capture the fleeting sensory effect of a scene—the 'impression' objects made on the eye in a fleeting instant. To achieve this, they moved out of the studio to paint 'en plein air' (outdoors), allowing them to observe and depict the changing qualities of light and weather directly. They used short, broken brushstrokes of pure, unmixed color that simulated actual reflected light, rather than blending colors smoothly as was customary. Initially, the movement faced harsh criticism; critics mocked their unfinished-looking works and the name 'Impressionism' itself was originally coined as a satirical insult. However, the movement eventually gained acceptance and profoundly influenced the course of modern art, paving the way for Post-Impressionism, Cubism, and beyond.",
        text: "According to the passage, the Impressionist painters distinguished themselves from traditional artists by ----.",
        options: {
            A: "focusing exclusively on historical and mythological subjects",
            B: "blending colors smoothly to create a realistic finish",
            C: "painting outdoors to capture the changing light and atmosphere",
            D: "working strictly within the studios of the Académie des Beaux-Arts",
            E: "using only black and white to emphasize form over color"
        },
        correct: "C",
        dict: { "en plein air": "açık havada", "depict": "tasvir etmek", "light": "ışık", "outdoors": "dışarıda" },
        explanation: `<b>✅ Doğru Cevap: C) painting outdoors to capture the changing light and atmosphere</b><br><b>📌 Sebep:</b> Metinde "moved out of the studio to paint 'en plein air' (outdoors), allowing them to observe and depict the changing qualities of light" (ışığın değişen niteliklerini gözlemlemek için dışarıda boyadılar) denilmektedir.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Tarihsel konuları reddettiler (rejected).<br><b>B)</b> Renkleri yumuşakça karıştırmayı (blending smoothly) reddettiler.<br><b>D)</b> Stüdyodan çıktılar (moved out).<br><b>E)</b> Saf, karıştırılmamış renkler kullandılar, siyah-beyaz değil.`
    },
    {
        id: 60,
        type: 'B',
        instruction: "59-62. soruları aşağıdaki parçaya göre cevaplayınız.",
        paragraph: "Impressionism, a radical art movement that began in the late 19th century in France, marked a significant departure from the rigid traditions of the Académie des Beaux-Arts. Impressionist painters, such as Claude Monet, Pierre-Auguste Renoir, and Camille Pissarro, rejected the emphasis on detailed realism and historical subjects. Instead, they sought to capture the fleeting sensory effect of a scene—the 'impression' objects made on the eye in a fleeting instant. To achieve this, they moved out of the studio to paint 'en plein air' (outdoors), allowing them to observe and depict the changing qualities of light and weather directly. They used short, broken brushstrokes of pure, unmixed color that simulated actual reflected light, rather than blending colors smoothly as was customary. Initially, the movement faced harsh criticism; critics mocked their unfinished-looking works and the name 'Impressionism' itself was originally coined as a satirical insult. However, the movement eventually gained acceptance and profoundly influenced the course of modern art, paving the way for Post-Impressionism, Cubism, and beyond.",
        text: "The passage indicates that the term 'Impressionism' was ----.",
        options: {
            A: "chosen by the artists themselves to describe their precision",
            B: "derived from a famous painting by Pierre-Auguste Renoir",
            C: "accepted immediately by the public as a prestigious title",
            D: "first used by critics as a way to mock the artists' style",
            E: "a reference to the impressive nature of their historical subjects"
        },
        correct: "D",
        dict: { "coined": "uydurulmuş/türetilmiş", "satirical": "alaycı", "insult": "hakaret", "mock": "alay etmek" },
        explanation: `<b>✅ Doğru Cevap: D) first used by critics as a way to mock the artists' style</b><br><b>📌 Sebep:</b> Metinde "the name 'Impressionism' itself was originally coined as a satirical insult" (başlangıçta alaycı bir hakaret olarak türetildi) denilmektedir.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Sanatçılar seçmedi, eleştirmenler hakaret olarak taktı.<br><b>B)</b> Monet'nin tablosundan (Impression, Sunrise) gelir ama metinde Renoir denmemiş.<br><b>C)</b> Hemen kabul edilmedi, sert eleştiri aldı.<br><b>E)</b> Tarihsel konulardan kaçındılar.`
    },
    {
        id: 61,
        type: 'B',
        instruction: "59-62. soruları aşağıdaki parçaya göre cevaplayınız.",
        paragraph: "Impressionism, a radical art movement that began in the late 19th century in France, marked a significant departure from the rigid traditions of the Académie des Beaux-Arts. Impressionist painters, such as Claude Monet, Pierre-Auguste Renoir, and Camille Pissarro, rejected the emphasis on detailed realism and historical subjects. Instead, they sought to capture the fleeting sensory effect of a scene—the 'impression' objects made on the eye in a fleeting instant. To achieve this, they moved out of the studio to paint 'en plein air' (outdoors), allowing them to observe and depict the changing qualities of light and weather directly. They used short, broken brushstrokes of pure, unmixed color that simulated actual reflected light, rather than blending colors smoothly as was customary. Initially, the movement faced harsh criticism; critics mocked their unfinished-looking works and the name 'Impressionism' itself was originally coined as a satirical insult. However, the movement eventually gained acceptance and profoundly influenced the course of modern art, paving the way for Post-Impressionism, Cubism, and beyond.",
        text: "It can be understood from the passage that Impressionist works ----.",
        options: {
            A: "were characterized by long, smooth brushstrokes and dark colors",
            B: "aimed to create a photographic and permanent record of reality",
            C: "were highly valued by the Académie des Beaux-Arts from the start",
            D: "focused on religious themes to please the church authorities",
            E: "appeared unfinished to observers due to their brushwork technique"
        },
        correct: "E",
        dict: { "unfinished-looking": "bitmemiş görünümlü", "mocked": "alay etti", "brushstrokes": "fırça darbeleri" },
        explanation: `<b>✅ Doğru Cevap: E) appeared unfinished to observers due to their brushwork technique</b><br><b>📌 Sebep:</b> Metinde "critics mocked their unfinished-looking works" (eleştirmenler bitmemiş görünümlü eserleriyle alay etti) ifadesi yer alır. Bu görüntü "short, broken brushstrokes" (kısa, kesik fırça darbeleri) tekniğinden kaynaklanır.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Kısa ve kesik darbeler (short, broken), uzun ve pürüzsüz (long, smooth) değil.<br><b>B)</b> Anlık etkiyi (fleeting sensory effect) yakalamak istediler, kalıcı detaylı gerçekliği değil.<br><b>C)</b> Akademi geleneklerinden koptular ve eleştirildiler.<br><b>D)</b> Dini değil, manzarayı ve ışığı konu aldılar.`
    },
    {
        id: 62,
        type: 'B',
        instruction: "59-62. soruları aşağıdaki parçaya göre cevaplayınız.",
        paragraph: "Impressionism, a radical art movement that began in the late 19th century in France, marked a significant departure from the rigid traditions of the Académie des Beaux-Arts. Impressionist painters, such as Claude Monet, Pierre-Auguste Renoir, and Camille Pissarro, rejected the emphasis on detailed realism and historical subjects. Instead, they sought to capture the fleeting sensory effect of a scene—the 'impression' objects made on the eye in a fleeting instant. To achieve this, they moved out of the studio to paint 'en plein air' (outdoors), allowing them to observe and depict the changing qualities of light and weather directly. They used short, broken brushstrokes of pure, unmixed color that simulated actual reflected light, rather than blending colors smoothly as was customary. Initially, the movement faced harsh criticism; critics mocked their unfinished-looking works and the name 'Impressionism' itself was originally coined as a satirical insult. However, the movement eventually gained acceptance and profoundly influenced the course of modern art, paving the way for Post-Impressionism, Cubism, and beyond.",
        text: "The main outcome of the Impressionist movement mentioned in the text is that it ----.",
        options: {
            A: "laid the groundwork for future modern art movements like Cubism",
            B: "caused the permanent closure of the Académie des Beaux-Arts",
            C: "forced all artists to paint outdoors regardless of the weather",
            D: "proved that critics are always right about art valuation",
            E: "resulted in a return to traditional historical painting styles"
        },
        correct: "A",
        dict: { "paving the way": "yolunu açmak/zemin hazırlamak", "groundwork": "temel/zemin", "influenced": "etkiledi" },
        explanation: `<b>✅ Doğru Cevap: A) laid the groundwork for future modern art movements like Cubism</b><br><b>📌 Sebep:</b> Son cümlede "paving the way for Post-Impressionism, Cubism, and beyond" (Post-Empresyonizm, Kübizm ve ötesinin yolunu açarak) denilmektedir.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B)</b> Akademinin kapandığı söylenmiyor.<br><b>C)</b> Tüm sanatçıları zorlamadı.<br><b>D)</b> Eleştirmenlerin yanıldığını kanıtladı (sonunda kabul gördü).<br><b>E)</b> Geleneksele dönüş değil, modern sanata gidiş.`
    },

    // --- DIALOGUE COMPLETION (63-67) ---
    {
        id: 63,
        type: 'A',
        instruction: "63-67. sorularda, karşılıklı konuşmanın boş bırakılan kısmını tamamlayabilecek ifadeyi bulunuz.",
        text: "Journalist: Many experts claim that electric vehicles are the future of transportation. Do you agree?\nAutomotive Engineer: While they are certainly a major part of the solution, they aren't a magic bullet. We still have significant hurdles to overcome.\nJournalist: ----\nAutomotive Engineer: Well, the charging infrastructure is still underdeveloped in many rural areas, and the battery production process itself has a considerable environmental footprint.",
        options: {
            A: "How much does an average electric vehicle cost compared to a gasoline one?",
            B: "Could you elaborate on what kind of obstacles you are referring to?",
            C: "Do you think hydrogen fuel cells might be a better alternative?",
            D: "Are electric cars faster than traditional internal combustion engine cars?",
            E: "Why do you think the government is subsidizing these vehicles so heavily?"
        },
        correct: "B",
        dict: { "hurdles": "engeller", "elaborate": "detaylandırmak", "obstacles": "engeller", "infrastructure": "altyapı" },
        explanation: `<b>✅ Doğru Cevap: B) Could you elaborate on what kind of obstacles you are referring to?</b><br><b>📌 Sebep:</b> Mühendis "önemli engellerimiz var" (significant hurdles) diyor. Gazeteci bu engelleri soruyor, Mühendis de "şarj altyapısı ve batarya üretimi" diye açıklıyor.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Maliyet sorulmuyor, engeller açıklanıyor.<br><b>C)</b> Alternatif sorulmuyor, mevcut sorunlar açıklanıyor.<br><b>D)</b> Hız karşılaştırması yapılmıyor.<br><b>E)</b> Hükümet desteği sorulmuyor.`
    },
    {
        id: 64,
        type: 'A',
        instruction: "63-67. sorularda, karşılıklı konuşmanın boş bırakılan kısmını tamamlayabilecek ifadeyi bulunuz.",
        text: "Student: I'm really struggling with the concept of quantum entanglement. It just seems to violate common sense.\nProfessor: You're not alone. Even Einstein famously called it 'spooky action at a distance'. It implies that two particles can affect each other instantaneously, no matter how far apart they are.\nStudent: ----\nProfessor: Exactly. It challenges our traditional understanding of space and time, suggesting they might not be as fundamental as we think.",
        options: {
            A: "So, Einstein was actually wrong about the speed of light?",
            B: "Does this mean we can use it for faster-than-light travel?",
            C: "That sounds like information is teleporting without traversing the space between.",
            D: "I think I should switch my major to biology instead.",
            E: "How can we observe these particles without a microscope?"
        },
        correct: "C",
        dict: { "entanglement": "dolanıklık", "instantaneously": "anında", "traversing": "katetmek/geçmek", "teleporting": "ışınlanma" },
        explanation: `<b>✅ Doğru Cevap: C) That sounds like information is teleporting without traversing the space between.</b><br><b>📌 Sebep:</b> Profesör "ne kadar uzak olursa olsun anında etkiler" diyor. Öğrenci C şıkkında bunu "bilginin aradaki uzayı geçmeden ışınlanması gibi" diye yorumluyor. Profesör de "Kesinlikle, bu uzay ve zaman anlayışımıza meydan okuyor" diyerek onaylıyor.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Einstein'ın yanılması konusu ana odak değil.<br><b>B)</b> Seyahat (travel) değil, parçacık etkileşimi konuşuluyor.<br><b>D)</b> Konudan kaçış cümlesi.<br><b>E)</b> Gözlem metodu sorusu, Profesörün "uzay ve zaman" cevabına uymaz.`
    },
    {
        id: 65,
        type: 'A',
        instruction: "63-67. sorularda, karşılıklı konuşmanın boş bırakılan kısmını tamamlayabilecek ifadeyi bulunuz.",
        text: "Patient: I've been taking the antibiotics for three days now, and I feel much better. Is it okay if I stop taking them?\nDoctor: Absolutely not. You must complete the full course as prescribed.\nPatient: ----\nDoctor: If you stop early, some bacteria might survive and become resistant to the drug, making it much harder to treat if the infection returns.",
        options: {
            A: "Can I save the rest for the next time I get sick?",
            B: "Are there any side effects I should be worried about?",
            C: "How long does it usually take for the infection to clear up?",
            D: "But why is it necessary if my symptoms have already disappeared?",
            E: "Will you prescribe me a different medication next time?"
        },
        correct: "D",
        dict: { "prescribed": "reçete edilen", "resistant": "dirençli", "survive": "hayatta kalmak", "symptoms": "semptomlar" },
        explanation: `<b>✅ Doğru Cevap: D) But why is it necessary if my symptoms have already disappeared?</b><br><b>📌 Sebep:</b> Hasta "neden devam etmeliyim?" diye sormalı ki doktor "bırakırsan bakteriler direnç kazanır" diye açıklasın. D şıkkı bu "neden gerekli?" sorusunu soruyor.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Saklama sorusu, doktorun cevabıyla (direnç kazanma riski) tam örtüşmez.<br><b>B)</b> Yan etki sorulmuyor.<br><b>C)</b> Süre sorulmuyor, gereklilik sorgulanıyor.<br><b>E)</b> Gelecek ilaç sorulmuyor.`
    },
    {
        id: 66,
        type: 'A',
        instruction: "63-67. sorularda, karşılıklı konuşmanın boş bırakılan kısmını tamamlayabilecek ifadeyi bulunuz.",
        text: "Manager: The quarterly sales figures are down by 15%. We need a strategy to turn this around immediately.\nMarketing Lead: I believe we should focus on digital channels. Our online engagement has been low lately.\nManager: ----\nMarketing Lead: We could launch a targeted social media campaign and collaborate with influencers to reach a younger demographic.",
        options: {
            A: "I don't think social media is relevant for our product.",
            B: "Why do you think the sales dropped so drastically?",
            C: "Who is responsible for the decline in online engagement?",
            D: "That sounds expensive; do we have the budget for it?",
            E: "What specific actions do you propose we take in that area?"
        },
        correct: "E",
        dict: { "engagement": "etkileşim", "collaborate": "işbirliği yapmak", "demographic": "demografik kitle", "propose": "önermek" },
        explanation: `<b>✅ Doğru Cevap: E) What specific actions do you propose we take in that area?</b><br><b>📌 Sebep:</b> Pazarlama lideri bir öneri sunuyor (dijital kanallar). Yönetici detay sormalı ki (E şıkkı), lider spesifik aksiyonları (sosyal medya kampanyası, influencerlar) anlatsın.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Fikri reddediyor, oysa lider açıklamaya devam ediyor.<br><b>B)</b> Neden düştüğünü sormuyor, ne yapılacağını konuşuyorlar.<br><b>C)</b> Sorumluyu sormuyor, çözüm önerisi geliyor.<br><b>D)</b> Bütçe sorusu, cevapta bütçe değil eylem planı var.`
    },
    {
        id: 67,
        type: 'A',
        instruction: "63-67. sorularda, karşılıklı konuşmanın boş bırakılan kısmını tamamlayabilecek ifadeyi bulunuz.",
        text: "Alice: I'm planning to visit Italy this summer, but I can't decide between Rome and Florence.\nBob: It depends on what you're looking for. Rome is grand and historic with ancient ruins everywhere.\nAlice: ----\nBob: In that case, Florence is definitely the better choice. It's the birthplace of the Renaissance and is packed with art galleries and museums.",
        options: {
            A: "I'm more interested in art history and classical paintings than ancient ruins.",
            B: "I want to go somewhere with great beaches and sunny weather.",
            C: "I prefer a modern city with a vibrant nightlife and shopping malls.",
            D: "Actually, I might just go to Paris instead since I speak French.",
            E: "My main goal is to try as many different types of pasta as possible."
        },
        correct: "A",
        dict: { "ruins": "harabeler", "birthplace": "doğum yeri", "packed with": "ile dolu", "art history": "sanat tarihi" },
        explanation: `<b>✅ Doğru Cevap: A) I'm more interested in art history and classical paintings than ancient ruins.</b><br><b>📌 Sebep:</b> Bob, Alice'in tercihi üzerine Florence'ı öneriyor ve gerekçe olarak "Rönesans'ın doğum yeri, sanat galerileriyle dolu" diyor. Demek ki Alice sanatla ilgilendiğini söylemiş (A şıkkı).<br><br><b>❌ Diğer Seçenekler:</b><br><b>B)</b> Plaj isteğine Florence (iç kesim) önerilmez.<br><b>C)</b> Modern şehir isteğine tarihi Florence önerilmez.<br><b>D)</b> Paris diyene Florence önerilmez.<br><b>E)</b> Makarna her iki şehirde de var, Florence'ın sanat vurgusuyla örtüşmez.`
    },

    // --- RESTATEMENT (68-71) ---
    {
        id: 68,
        type: 'A',
        instruction: "68-71. sorularda, verilen cümleye anlamca en yakın cümleyi bulunuz.",
        text: "Unless the government implements stricter regulations on industrial waste disposal immediately, the river's ecosystem will be damaged beyond repair within a few years.",
        options: {
            A: "The river's ecosystem has already been severely damaged because the government failed to implement strict waste disposal regulations in time.",
            B: "If the government acts now to regulate industrial waste, the river's ecosystem might still be saved from permanent destruction in the coming years.",
            C: "The government must put simpler regulations in place for waste disposal; otherwise, the river will suffer temporary damage soon.",
            D: "Within a few years, the river is expected to recover naturally, provided that the government stops interfering with industrial waste disposal.",
            E: "Strict regulations on industrial waste were implemented by the government, but the river's ecosystem was unfortunately damaged beyond repair."
        },
        correct: "B",
        dict: { "beyond repair": "tamir edilemez/kalıcı", "implements": "uygulamak", "disposal": "bertaraf etme", "permanent": "kalıcı" },
        explanation: `<b>✅ Doğru Cevap: B) If the government acts now to regulate industrial waste, the river's ecosystem might still be saved from permanent destruction in the coming years.</b><br><b>📌 Sebep:</b> Orijinal cümle: "Unless... immediately... damaged beyond repair" (Hemen yapmazsa... tamir edilemez hasar görecek). Bunun tersi (Paraphrase): "Yaparsa... kalıcı yıkımdan kurtarılabilir" (If... acts now... saved from permanent destruction).<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Hasar zaten oldu diyor (has already been), orijinal ise gelecek zaman (will be).<br><b>C)</b> "Simpler regulations" (daha basit) diyor, orijinal "stricter" (daha sıkı) istiyor.<br><b>D)</b> Devlet karışmazsa düzelir diyor, tam tersi.<br><b>E)</b> Uygulandı ama hasar gördü diyor, geçmiş zaman.`
    },
    {
        id: 69,
        type: 'A',
        instruction: "68-71. sorularda, verilen cümleye anlamca en yakın cümleyi bulunuz.",
        text: "No other civilization in history has influenced the development of law and governance in the Western world as profoundly as the Romans did.",
        options: {
            A: "The Romans were the only civilization in history to have any significant impact on Western law and governance.",
            B: "Western law and governance were influenced by many civilizations, but the impact of the Romans was greater than that of any other.",
            C: "The development of law in the Western world was completely ignored by all civilizations except for the Romans.",
            D: "While the Romans had some influence on Western governance, other civilizations played a much more profound role.",
            E: "The Roman civilization was influenced by Western law and governance more than it influenced them."
        },
        correct: "B",
        dict: { "profoundly": "derinden", "influenced": "etkiledi", "governance": "yönetim", "greater": "daha büyük" },
        explanation: `<b>✅ Doğru Cevap: B) Western law and governance were influenced by many civilizations, but the impact of the Romans was greater than that of any other.</b><br><b>📌 Sebep:</b> Orijinal: "No other... as profoundly as" (Hiçbiri... kadar derinden değil). Bu, Romans'ın etkisinin en büyük olduğu anlamına gelir (Comparative/Superlative dönüşümü).<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> "Only civilization" (tek medeniyet) diyor, orijinal sadece "en çok etkileyen" diyor.<br><b>C)</b> "Completely ignored" (tamamen görmezden gelindi) yanlış.<br><b>D)</b> Diğerleri daha çok etkiledi diyor, tam tersi.<br><b>E)</b> Roma etkilendi diyor, oysa Roma etkiledi.`
    },
    {
        id: 70,
        type: 'A',
        instruction: "68-71. sorularda, verilen cümleye anlamca en yakın cümleyi bulunuz.",
        text: "Much as I would like to join you for the dinner party tonight, I have to finish this urgent report before the deadline tomorrow morning.",
        options: {
            A: "I really want to come to the dinner party tonight, but I am obliged to complete this report by tomorrow morning.",
            B: "I will join you for dinner tonight because I have already finished the urgent report due tomorrow.",
            C: "Even though I finished the report early, I don't think I will be able to attend the dinner party tonight.",
            D: "I prefer working on my report to coming to the dinner party, so I will stay home tonight.",
            E: "I have to finish a report tomorrow morning, so I might be a little late for the dinner party tonight."
        },
        correct: "A",
        dict: { "much as": "ne kadar ... istesem de", "obliged": "mecbur", "deadline": "son teslim tarihi", "urgent": "acil" },
        explanation: `<b>✅ Doğru Cevap: A) I really want to come to the dinner party tonight, but I am obliged to complete this report by tomorrow morning.</b><br><b>📌 Sebep:</b> "Much as I would like to" (Ne kadar istesem de) = "I really want to... but". "Have to finish" = "Obliged to complete".<br><br><b>❌ Diğer Seçenekler:</b><br><b>B)</b> Raporu bitirdim diyor, oysa bitirmesi lazım.<br><b>C)</b> Bitirdim ama gelmeyeceğim diyor, mantık hatası.<br><b>D)</b> Çalışmayı tercih ederim diyor (tercih değil zorunluluk var).<br><b>E)</b> Geç kalabilirim diyor, oysa hiç gelemeyecek.`
    },
    {
        id: 71,
        type: 'A',
        instruction: "68-71. sorularda, verilen cümleye anlamca en yakın cümleyi bulunuz.",
        text: "The sheer complexity of the human brain makes it difficult for neuroscientists to fully comprehend how consciousness arises from biological processes.",
        options: {
            A: "Neuroscientists have fully understood how consciousness works because the human brain is not as complex as previously thought.",
            B: "It is easy for scientists to explain the biological origin of consciousness thanks to the simple structure of the brain.",
            C: "Because the human brain is so incredibly complex, neuroscientists struggle to completely understand the biological origins of consciousness.",
            D: "The complexity of the brain prevents neuroscientists from conducting any research on consciousness and biological processes.",
            E: "Consciousness is a biological process that has nothing to do with the complexity of the human brain according to neuroscientists."
        },
        correct: "C",
        dict: { "sheer": "sırf/katıksız", "complexity": "karmaşıklık", "comprehend": "kavramak", "arises": "ortaya çıkar" },
        explanation: `<b>✅ Doğru Cevap: C) Because the human brain is so incredibly complex, neuroscientists struggle to completely understand the biological origins of consciousness.</b><br><b>📌 Sebep:</b> "Sheer complexity makes it difficult" (Sırf karmaşıklığı zorlaştırıyor) = "Because... complex, ... struggle to understand". "Fully comprehend" = "Completely understand".<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Tamamen anladılar diyor, yanlış.<br><b>B)</b> Kolaydır diyor, yanlış.<br><b>D)</b> Araştırma yapmayı engelliyor diyor, sadece anlamayı zorlaştırıyor.<br><b>E)</b> Alakası yok diyor, yanlış.`
    },

    // --- PARAGRAPH COMPLETION (72-75) ---
    {
        id: 72,
        type: 'A',
        instruction: "72-75. sorularda, boş bırakılan yere, parçada anlam bütünlüğünü sağlamak için getirilebilecek cümleyi bulunuz.",
        text: "Cybersecurity has become a top priority for corporations and governments alike. Hackers are constantly developing new methods to breach firewalls and steal sensitive data. ----. Therefore, organizations must invest heavily in not only advanced software but also in training their employees to recognize potential threats such as phishing emails. Without this human element of defense, even the most expensive technical barriers can be easily bypassed.",
        options: {
            A: "Consequently, traditional security measures are often becoming obsolete faster than they can be updated",
            B: "Most hackers are actually teenagers looking for attention rather than financial gain",
            C: "Governments have decided to stop using the internet for classified communications",
            D: "The price of antivirus software has dropped significantly in the last few years",
            E: "Employees are usually the strongest link in any organization's security chain"
        },
        correct: "A",
        dict: { "obsolete": "eskimiş/modası geçmiş", "breach": "ihlal etmek/delmek", "phishing": "oltalama", "measures": "önlemler" },
        explanation: `<b>✅ Doğru Cevap: A) Consequently, traditional security measures are often becoming obsolete faster than they can be updated</b><br><b>📌 Sebep:</b> Boşluktan önce hackerların sürekli yeni yöntemler geliştirdiği söyleniyor. Boşluktan sonra ise "Bu nedenle... yatırım yapılmalı" deniyor. A şıkkı, hackerların hızı yüzünden eski yöntemlerin "obsolete" (eskimiş) kaldığını söyleyerek bu iki cümleyi mantıklı bağlar.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B)</b> Hackerların kimliği konuyu dağıtır.<br><b>C)</b> Hükümetlerin interneti bırakması mantıksız ve bağlam dışı.<br><b>D)</b> Yazılım fiyatı konu değil.<br><b>E)</b> "Strongest link" (en güçlü halka) diyor, oysa sonraki cümle insan unsurunu eğitmezsek risk olduğunu söylüyor (zayıf halka iması).`
    },
    {
        id: 73,
        type: 'A',
        instruction: "72-75. sorularda, boş bırakılan yere, parçada anlam bütünlüğünü sağlamak için getirilebilecek cümleyi bulunuz.",
        text: "The Silk Road was not just a trade route for silk and spices; it was a superhighway for the exchange of ideas, technologies, and cultures. ----. For example, paper-making technology traveled from China to the Islamic world and later to Europe, revolutionizing the spread of knowledge. Similarly, Buddhism spread from India to Central Asia and China along these same paths.",
        options: {
            A: "Merchants were only interested in making a profit and cared little for culture",
            B: "It facilitated the transmission of innovations and religious beliefs across continents",
            C: "The road was often dangerous due to bandits and harsh weather conditions",
            D: "Silk was the most expensive commodity traded along the route during that time",
            E: "Europeans were unaware of the existence of China until the 19th century"
        },
        correct: "B",
        dict: { "transmission": "iletim/aktarım", "innovations": "yenilikler", "beliefs": "inançlar", "superhighway": "otoban/ana yol" },
        explanation: `<b>✅ Doğru Cevap: B) It facilitated the transmission of innovations and religious beliefs across continents</b><br><b>📌 Sebep:</b> Boşluktan sonra "For example" denilerek kağıt yapımı (inovasyon) ve Budizm (din) örnekleri veriliyor. B şıkkı bu örnekleri kapsayan genel yargıyı (inovasyon ve inançların iletimi) sunar.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Tüccarların ilgisizliği örneklerle çelişir.<br><b>C)</b> Tehlikeler konuyu değiştirir (fikir alışverişinden güvenliğe).<br><b>D)</b> İpek fiyatı, fikir alışverişi bağlamına uymaz.<br><b>E)</b> Tarihsel olarak yanlış ve bağlam dışı.`
    },
    {
        id: 74,
        type: 'A',
        instruction: "72-75. sorularda, boş bırakılan yere, parçada anlam bütünlüğünü sağlamak için getirilebilecek cümleyi bulunuz.",
        text: "Sleep is strictly regulated by the body's internal clock, or circadian rhythm, which dictates when we feel tired and when we are alert. ----. Disruptions to this rhythm, such as those caused by jet lag or shift work, can lead to significant health problems, including insomnia, fatigue, and even metabolic disorders. Therefore, maintaining a consistent sleep schedule is crucial for overall well-being.",
        options: {
            A: "Many people drink coffee to stay awake during the day despite being tired",
            B: "Dreams mostly occur during the REM stage of the sleep cycle",
            C: "This biological clock is influenced by environmental cues like sunlight and temperature",
            D: "Sleeping pills are often prescribed to treat chronic sleep disorders",
            E: "Teenagers generally need more sleep than adults due to their growth"
        },
        correct: "C",
        dict: { "circadian": "sirkadiyen", "cues": "ipuçları", "disruptions": "bozulmalar/aksamalar", "regulated": "düzenlenmiş" },
        explanation: `<b>✅ Doğru Cevap: C) This biological clock is influenced by environmental cues like sunlight and temperature</b><br><b>📌 Sebep:</b> Önceki cümle "internal clock" (iç saat) tanımını yapıyor. C şıkkı "This biological clock" (Bu biyolojik saat) diyerek referans veriyor ve nasıl çalıştığını (güneş ışığı vb.) açıklıyor. Sonraki cümle ise bu ritmin bozulmasından bahsediyor.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Kahve içmek konu dışı.<br><b>B)</b> Rüya evresi konu dışı.<br><b>D)</b> Uyku hapları tedavi yöntemidir, mekanizma açıklaması değil.<br><b>E)</b> Yaş grupları karşılaştırması konu dışı.`
    },
    {
        id: 75,
        type: 'A',
        instruction: "72-75. sorularda, boş bırakılan yere, parçada anlam bütünlüğünü sağlamak için getirilebilecek cümleyi bulunuz.",
        text: "Urbanization has brought many benefits, such as better access to healthcare, education, and job opportunities. However, it has also created significant challenges for city planners and residents. ----. Traffic congestion, air pollution, and the lack of affordable housing are just a few of the pressing issues that modern cities face. Sustainable urban planning is therefore essential to ensure that cities remain livable for future generations.",
        options: {
            A: "Rural areas are becoming depopulated as people move to cities",
            B: "Technology has made it easier to work from home without commuting",
            C: "Most people prefer living in the countryside due to the fresh air",
            D: "The rapid influx of people often outpaces the development of infrastructure",
            E: "Cities are cultural hubs where people from diverse backgrounds meet"
        },
        correct: "D",
        dict: { "influx": "akın/giriş", "outpaces": "geride bırakmak/hızını geçmek", "infrastructure": "altyapı", "congestion": "sıkışıklık" },
        explanation: `<b>✅ Doğru Cevap: D) The rapid influx of people often outpaces the development of infrastructure</b><br><b>📌 Sebep:</b> Boşluktan önce zorluklardan (challenges) bahsediliyor. Boşluktan sonra ise trafik, kirlilik ve konut sorunu sıralanıyor. D şıkkı, bu sorunların temel nedenini (nüfus akışının altyapıdan hızlı olması) açıklayarak köprü kurar.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Kırsal nüfus azalması şehrin içiyle ilgili değil.<br><b>B)</b> Evden çalışma trafik sorununu çözer, burada sorunun kaynağı aranıyor.<br><b>C)</b> İnsanların tercihi metinle çelişiyor (şehirleşme artıyor).<br><b>E)</b> Kültürel çeşitlilik olumlu bir yan, burada olumsuzluklar (challenges) anlatılıyor.`
    },

    // --- IRRELEVANT SENTENCE (76-80) ---
    {
        id: 76,
        type: 'A',
        instruction: "76-80. sorularda, cümleler sırasıyla okunduğunda parçanın anlam bütünlüğünü bozan cümleyi bulunuz.",
        text: "(I) The polar bear is the largest land carnivore on Earth, perfectly adapted to survive in the harsh Arctic environment. (II) Its thick layer of blubber and water-repellent fur keep it warm even in freezing temperatures. (III) Penguins also live in extremely cold climates but are found exclusively in the Southern Hemisphere. (IV) Furthermore, its large paws act like snowshoes, distributing its weight to prevent it from sinking into the snow. (V) These physical adaptations make the polar bear an efficient hunter of seals on the sea ice.",
        options: { A: "I", B: "II", C: "III", D: "IV", E: "V" },
        correct: "C",
        dict: { "carnivore": "etçil", "blubber": "yağ tabakası", "repellent": "itici/geçirmeyen", "exclusively": "yalnızca" },
        explanation: `<b>✅ Doğru Cevap: C) (III)</b><br><b>📌 Sebep:</b> Parça Kutup Ayısı (Polar Bear) ve onun adaptasyonları hakkındadır. III. cümle ise Penguenler hakkındadır ve konu bütünlüğünü bozar.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A, B, D, E:</b> Hepsi kutup ayısının özelliklerini (kürk, pençe, yağ) anlatır.`
    },
    {
        id: 77,
        type: 'A',
        instruction: "76-80. sorularda, cümleler sırasıyla okunduğunda parçanın anlam bütünlüğünü bozan cümleyi bulunuz.",
        text: "(I) Coffee is one of the most widely consumed beverages in the world, prized for its stimulating effect. (II) The coffee plant is cultivated in over 70 countries, primarily in the equatorial regions of the Americas, Southeast Asia, India, and Africa. (III) Tea leaves contain different antioxidants than coffee beans, which some studies suggest might be healthier. (IV) Once the berries of the coffee plant are ripe, they are picked, processed, and dried to produce the beans we are familiar with. (V) These beans are then roasted to varying degrees to achieve different flavor profiles desired by consumers.",
        options: { A: "III", B: "I", C: "II", D: "IV", E: "V" },
        correct: "A",
        dict: { "cultivated": "yetiştirilen", "equatorial": "ekvatoryal", "berries": "meyveler", "roasted": "kavrulmuş" },
        explanation: `<b>✅ Doğru Cevap: A) (III)</b><br><b>📌 Sebep:</b> Parça kahvenin üretimi, yetiştirilmesi ve işlenmesi sürecini anlatmaktadır. III. cümle çay ile karşılaştırma yaparak konuyu dağıtır.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B, C, D, E:</b> Hepsi kahve bitkisi, meyvesi ve çekirdeği ile ilgilidir.`
    },
    {
        id: 78,
        type: 'A',
        instruction: "76-80. sorularda, cümleler sırasıyla okunduğunda parçanın anlam bütünlüğünü bozan cümleyi bulunuz.",
        text: "(I) The Great Wall of China is a series of fortifications that were built across the historical northern borders of ancient Chinese states. (II) It was originally conceived by Emperor Qin Shi Huang in the third century B.C. to prevent incursions from barbarian nomads. (III) Many tourists visit China every year to experience its rich culinary traditions and vibrant festivals. (IV) Over the centuries, subsequent dynasties maintained and extended the wall, adding watchtowers and troop barracks. (V) Today, it is recognized as one of the most impressive architectural feats in history and a UNESCO World Heritage site.",
        options: { A: "I", B: "III", C: "II", D: "IV", E: "V" },
        correct: "B",
        dict: { "fortifications": "tahkimatlar", "incursions": "akınlar/saldırılar", "nomads": "göçebeler", "culinary": "mutfakla ilgili" },
        explanation: `<b>✅ Doğru Cevap: B) (III)</b><br><b>📌 Sebep:</b> Parça Çin Seddi'nin (Great Wall) tarihi, yapım amacı ve mimarisi hakkındadır. III. cümle genel turist aktiviteleri (yemek, festival) hakkındadır ve Çin Seddi odağından sapar.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A, C, D, E:</b> Hepsi Çin Seddi'nin inşası ve özellikleriyle ilgilidir.`
    },
    {
        id: 79,
        type: 'A',
        instruction: "76-80. sorularda, cümleler sırasıyla okunduğunda parçanın anlam bütünlüğünü bozan cümleyi bulunuz.",
        text: "(I) Renewable energy sources are becoming increasingly important as the world strives to reduce carbon emissions. (II) Solar and wind power are currently the most rapidly growing sectors within the green energy industry. (III) Fossil fuels, such as coal and oil, take millions of years to form and are finite resources. (IV) Governments are offering various incentives to encourage homeowners to install solar panels on their roofs. (V) Advances in battery technology are also helping to store this renewable energy for use when the sun isn't shining or the wind isn't blowing.",
        options: { A: "I", B: "II", C: "III", D: "IV", E: "V" },
        correct: "C",
        dict: { "strives": "çabalamak", "finite": "sınırlı", "incentives": "teşvikler", "install": "kurmak" },
        explanation: `<b>✅ Doğru Cevap: C) (III)</b><br><b>📌 Sebep:</b> Parça yenilenebilir enerji (güneş, rüzgar) ve bunun gelişimi/teşviki hakkındadır. III. cümle fosil yakıtların tanımını yaparak konunun (yenilenebilir enerji) dışına çıkar.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A, B, D, E:</b> Hepsi yenilenebilir enerjiye odaklanır.`
    },
    {
        id: 80,
        type: 'A',
        instruction: "76-80. sorularda, cümleler sırasıyla okunduğunda parçanın anlam bütünlüğünü bozan cümleyi bulunuz.",
        text: "(I) Marie Curie was a pioneering physicist and chemist who conducted groundbreaking research on radioactivity. (II) She was the first woman to win a Nobel Prize and remains the only person to win Nobel Prizes in two different scientific fields. (III) Radioactivity can be dangerous if not handled with proper safety equipment and protocols. (IV) Her efforts led to the discovery of two new elements, polonium and radium, which expanded our understanding of atomic physics. (V) Despite facing discrimination as a woman in science, her legacy continues to inspire generations of scientists today.",
        options: { A: "I", B: "II", C: "V", D: "III", E: "IV" },
        correct: "D",
        dict: { "pioneering": "öncü", "conducted": "yürüttü", "discrimination": "ayrımcılık", "legacy": "miras" },
        explanation: `<b>✅ Doğru Cevap: D) (III)</b><br><b>📌 Sebep:</b> Parça Marie Curie'nin hayatı, başarıları ve mirası hakkındadır (biyografik). III. cümle ise radyoaktivitenin genel güvenliği hakkında teknik bir bilgidir, Marie Curie ile doğrudan ilgili değildir.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A, B, C, E:</b> Hepsi Marie Curie'yi anlatır.`
    }
];
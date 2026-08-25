const questions = [
    {
        id: 1,
        type: 'A',
        instruction: "1-6 sorularda, cümlede boş bırakılan yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        text: "The human immune system relies on the intricate ---- of specialized white blood cells, such as T-lymphocytes and macrophages, which coordinate rapid physiological responses to neutralize potentially lethal pathogens before systemic damage occurs.",
        options: { A: "mitigation", B: "interplay", C: "premonition", D: "divergence", E: "recurrence" },
        correct: "B",
        dict: { "intricate": "karmaşık/girift", "interplay": "etkileşim", "coordinate": "koordine etmek/düzenlemek", "neutralize": "etkisiz hale getirmek", "pathogen": "hastalık yapıcı mikrop" },
        explanation: `<b>✅ Doğru Cevap: B) interplay</b><br><b>📌 Sebep:</b> Cümlede bağışıklık sisteminin patojenleri etkisiz hale getirebilmesi için özelleşmiş beyaz kan hücrelerinin koordineli çalışması ve aralarındaki <i>karmaşık etkileşim</i> (intricate interplay) vurgulanmaktadır.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A) mitigation:</b> Azaltma/hafifletme - hücrelerin birbirleriyle kurduğu dinamik ilişkiyi karşılamaz.<br><b>C) premonition:</b> Önsezi - bilimsel/biyolojik bağlamla uyumsuzdur.<br><b>D) divergence:</b> Sapma/ayrılma - organize ve koordineli tepki yapısına terstir.<br><b>E) recurrence:</b> Nüksetme/tekrarlama - hücreler arası işleyişi ifade etmez.`
    },
    {
        id: 2,
        type: 'A',
        instruction: "1-6 sorularda, cümlede boş bırakılan yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        text: "Although Samuel Morse's early prototype of the electric telegraph was relatively ---- compared to later commercial designs, its ability to transmit electrical impulses almost instantaneously transformed long-distance communication across continents.",
        options: { A: "rudimentary", B: "detrimental", C: "infallible", D: "superfluous", E: "arbitrary" },
        correct: "A",
        dict: { "prototype": "ilk örnek/prototip", "rudimentary": "ilkel/gelişmemiş", "impulse": "sinyal/itki", "instantaneously": "anlık olarak", "transform": "dönüştürmek" },
        explanation: `<b>✅ Doğru Cevap: A) rudimentary</b><br><b>📌 Sebep:</b> Cümle başındaki "Although" (her ne kadar ... olsa da) zıtlık bağlacı, cihazın sonraki modellere kıyasla <i>ilkel / temel düzeyde</i> (rudimentary) olmasına rağmen kıtalararası iletişimi kökten değiştirdiğini vurgular.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B) detrimental:</b> Zararlı - bağlamla örtüşmez.<br><b>C) infallible:</b> Hatasız/kusursuz - erken dönem prototipin eksikliğini değil mükemmelliğini ifade eder.<br><b>D) superfluous:</b> Gereksiz/fuzuli - icadın değerini yanlış niteler.<br><b>E) arbitrary:</b> Rastgele/keyfi - teknik bir cihaz tasarımı için uygun değildir.`
    },
    {
        id: 3,
        type: 'A',
        instruction: "1-6 sorularda, cümlede boş bırakılan yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        text: "Throughout the 17th century, European scholars and theologians produced a prolific stream of devotional literature designed primarily to ---- complex moral doctrines and reinforce spiritual discipline among the literate public.",
        options: { A: "jeopardise", B: "relinquish", C: "disseminate", D: "undermine", E: "fabricate" },
        correct: "C",
        dict: { "theologian": "ilahiyatçı", "prolific": "üretken/çok eser veren", "devotional": "dini/ibadete dair", "disseminate": "yaymak/dağıtmak", "doctrine": "öğreti/ilke" },
        explanation: `<b>✅ Doğru Cevap: C) disseminate</b><br><b>📌 Sebep:</b> Din adamları ve yazarların bu eserleri üretme amacı ahlaki öğretileri halk arasında <i>yaymak / duyurmak</i> (disseminate) ve manevi disiplini pekiştirmektir ("reinforce spiritual discipline" paralelliği).<br><br><b>❌ Diğer Seçenekler:</b><br><b>A) jeopardise:</b> Tehlikeye atmak - amaca zıttır.<br><b>B) relinquish:</b> Feragat etmek/vazgeçmek - bağlama uymaz.<br><b>D) undermine:</b> Baltalamak/zayıflatmak - olumsuz anlam taşır.<br><b>E) fabricate:</b> Uydurmak/sahtesini yapmak - akademik bağlama uymaz.`
    },
    {
        id: 4,
        type: 'A',
        instruction: "1-6 sorularda, cümlede boş bırakılan yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        text: "With the deployment of state-of-the-art space probes and orbital observatories, planetary scientists have ---- expanded their understanding of the solar system, unveiling unexpected geologic activity on distant icy moons.",
        options: { A: "substantially", B: "tediously", C: "ambiguously", D: "questionably", E: "adversely" },
        correct: "A",
        dict: { "deployment": "konuşlandırma/kullanıma alma", "state-of-the-art": "son teknoloji", "substantially": "büyük ölçüde/önemli derecede", "unveil": "açığa çıkarmak/göstermek" },
        explanation: `<b>✅ Doğru Cevap: A) substantially</b><br><b>📌 Sebep:</b> Son teknoloji uzay sondaları sayesinde bilim insanlarının güneş sistemi hakkındaki bilgilerini <i>büyük ölçüde / önemli derecede</i> (substantially) genişlettiği ifade edilmektedir.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B) tediously:</b> Bıktırıcı şekilde - bilimsel ilerlemeyi olumsuz niteler.<br><b>C) ambiguously:</b> Belirsizce/muğlak şekilde - yeni keşiflerin netliğiyle uyuşmaz.<br><b>D) questionably:</b> Şüpheli bir biçimde - olumlu ilerleme bağlamına uymaz.<br><b>E) adversely:</b> Olumsuz yönde - gelişmeyi ters yönde açıklar.`
    },
    {
        id: 5,
        type: 'A',
        instruction: "1-6 sorularda, cümlede boş bırakılan yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        text: "Meteorologists mapping seasonal fluctuations in equatorial climates often find it difficult to ---- the exact mechanisms that drive sudden tropical storms, as dynamic atmospheric shifts interact in unpredictable patterns.",
        options: { A: "make up for", B: "call off", C: "pin down", D: "stem from", E: "bring down" },
        correct: "C",
        dict: { "fluctuation": "dalgalanma", "equatorial": "ekvatoral", "pin down": "tam olarak belirlemek/tespit etmek", "unpredictable": "öngörülemeyen" },
        explanation: `<b>✅ Doğru Cevap: C) pin down</b><br><b>📌 Sebep:</b> Ekvatoral iklimdeki öngörülemez dinamikler nedeniyle meteorologların ani tropikal fırtınalara yol açan mekanizmaları <i>tam olarak tespit etmekte / netleştirmekte</i> (pin down) zorlandıkları ifade edilmektedir.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A) make up for:</b> Telafi etmek - bağlam mekanizma tespiti üzerinedir.<br><b>B) call off:</b> İptal etmek - bilimsel araştırma sürecine uymaz.<br><b>D) stem from:</b> -den kaynaklanmak - nesne alışı ve anlam açısından cümle yapısına oturmaz.<br><b>E) bring down:</b> İndirmek/devirmek - bilimsel olguyu açıklamaz.`
    },
    {
        id: 7,
        type: 'A',
        instruction: "7-16 sorularda, cümlede boş bırakılan yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        text: "Recent clinical trials indicate that specialized action video games ---- spatial cognitive skills far more effectively than traditional methods, which suggests that immersive simulation ---- as a standard training tool in aviation.",
        options: {
            A: "must have enhanced / would adopt",
            B: "can enhance / could be adopted",
            C: "had enhanced / might adopt",
            D: "would enhance / has to adopt",
            E: "should enhance / had been adopted"
        },
        correct: "B",
        dict: { "clinical trials": "klinik deneyler", "spatial": "uzamsal/mekânsal", "immersive": "sürükleyici/kapsayıcı", "aviation": "havacılık", "adopt": "benimsemek/kabul etmek" },
        explanation: `<b>✅ Doğru Cevap: B) can enhance / could be adopted</b><br><b>📌 Sebep:</b> Genel-geçer bilimsel bir gerçeği ve yeteneği ifade etmek için ilk boşlukta "can enhance", devamında pasif bir öneri/olasılık belirtmek için "could be adopted" (benimsenebilir) modalları bağlama tam oturmaktadır.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A) must have enhanced / would adopt:</b> İlk taraf geçmişe dönük çıkarım içerir; ikinci taraf etkendir (pasif olmalıdır).<br><b>C) had enhanced / might adopt:</b> Zaman uyumu bozuktur ve ikinci taraf etkendir.<br><b>D) would enhance / has to adopt:</b> İkinci taraftaki özne ("immersive simulation") eylemi yapan değil uygulanan konumdadır (passive gereklidir).<br><b>E) should enhance / had been adopted:</b> İkinci taraf Past Perfect olup ana cümlenin zaman yapısıyla uyuşmaz.`
    },
    {
        id: 8,
        type: 'A',
        instruction: "7-16 sorularda, cümlede boş bırakılan yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        text: "In order to gain deeper insights ---- the mechanisms of neural processing, cognitive neuroscientists routinely expose subjects ---- geometrically ambiguous visual illusions.",
        options: {
            A: "into / to",
            B: "for / at",
            C: "about / with",
            D: "on / through",
            E: "towards / in"
        },
        correct: "A",
        dict: { "insights": "içgörü/anlayış", "neural": "sinirsel", "expose": "maruz bırakmak", "ambiguous": "belirsiz/muğlak", "illusion": "yanılsama/illüzyon" },
        explanation: `<b>✅ Doğru Cevap: A) into / to</b><br><b>📌 Sebep:</b> "Insight" ismi yaygın olarak "into" edatıyla (insight into sth - bir şeyi derinlemesine anlama), "expose" fiili ise "to" edatıyla (expose someone to sth - birini bir şeye maruz bırakmak) birlikte kullanılır.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B) for / at:</b> "Expose at" hatalı bir kullanımdır.<br><b>C) about / with:</b> "Expose with" yapısı kalıplaşmış nesne alımına uymaz.<br><b>D) on / through:</b> İkinci boşluktaki maruz kalma anlamını vermez.<br><b>E) towards / in:</b> Edat tamlamaları bağlama uygun değildir.`
    },
    {
        id: 9,
        type: 'A',
        instruction: "7-16 sorularda, cümlede boş bırakılan yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        text: "Health literacy is fundamentally defined as the degree ---- which individuals possess the cognitive capacity to obtain, process, and act ---- basic medical information.",
        options: {
            A: "at / about",
            B: "to / upon",
            C: "with / over",
            D: "for / into",
            E: "in / against"
        },
        correct: "B",
        dict: { "health literacy": "sağlık okuryazarlığı", "degree": "derece/düzey", "possess": "sahip olmak", "capacity": "kapasite", "act upon": "gereğince hareket etmek/uygulamak" },
        explanation: `<b>✅ Doğru Cevap: B) to / upon</b><br><b>📌 Sebep:</b> "The degree to which" (bir şeyin gerçekleştiği derece/düzey) kalıplaşmış bir yapıdır. İkinci boşlukta ise "act upon/on information" (bilgiye dayanarak harekete geçmek/uygulamak) edatlı fiili doğru kullanımı tamamlar.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A) at / about:</b> "Degree" ile "at" relative yapıda bu işlevi görmez.<br><b>C) with / over:</b> Anlam bütünlüğünü bozmaktadır.<br><b>D) for / into:</b> "The degree for which" gramer olarak yanlıştır.<br><b>E) in / against:</b> Bilgiye karşı değil, bilgiye göre hareket etme anlamı vardır.`
    },
    {
        id: 10,
        type: 'A',
        instruction: "7-16 sorularda, cümlede boş bırakılan yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        text: "During the late 19th century, European imperial powers partitioned the African continent ---- several distinct spheres of influence, often drawing borders with total disregard ---- indigenous ethnic territories.",
        options: {
            A: "between / in",
            B: "from / about",
            C: "into / for",
            D: "along / over",
            E: "through / with"
        },
        correct: "C",
        dict: { "partition": "bölmek/paylaştırmak", "imperial": "emperyal/imparatorlukla ilgili", "sphere of influence": "etki alanı", "disregard": "hiçe sayma/aldırmama", "indigenous": "yerli" },
        explanation: `<b>✅ Doğru Cevap: C) into / for</b><br><b>📌 Sebep:</b> Bir bütünü parçalara ayırmak/bölmek anlamında "partition into" kullanılır. "Disregard" ismi ise kendisinden sonra "for" edatını alır (disregard for sth - bir şeyi hiçe sayma/umursamama).<br><br><b>❌ Diğer Seçenekler:</b><br><b>A) between / in:</b> Birden fazla sınır ve parça için "between" uygun değildir.<br><b>B) from / about:</b> "Partition from" bölerek parçalara ayırma bağlamını karşılamaz.<br><b>D) along / over:</b> Bölünme sonucunu belirten "into" yerini tutmaz.<br><b>E) through / with:</b> Kalıp yapılarla örtüşmez.`
    },
    {
        id: 11,
        type: 'A',
        instruction: "7-16 sorularda, cümlede boş bırakılan yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        text: "When Dan Shechtman first discovered quasicrystals in 1982, the scientific community found the results ---- controversial ---- his initial research papers were outright rejected by leading physics journals.",
        options: {
            A: "so / that",
            B: "neither / nor",
            C: "as / as",
            D: "either / or",
            E: "not only / but also"
        },
        correct: "A",
        dict: { "quasicrystal": "yarı kristal", "controversial": "tartışmalı", "outright": "tamamen/doğrudan", "reject": "reddetmek", "leading": "önde gelen" },
        explanation: `<b>✅ Doğru Cevap: A) so / that</b><br><b>📌 Sebep:</b> Cümlede bir sıfat ("controversial") ve ardından gelen tam bir sonuç cümlesi yer almaktadır. "Öyle tartışmalı bulundu ki makaleleri reddedildi" anlamını veren "so + sıfat + that" yapısı doğrudur.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B) neither / nor:</b> İki ayrı ögeyi olumsuzlamaz, bir sonuç bildirir.<br><b>C) as / as:</b> Eşitlik karşılaştırması kurulmamaktadır.<br><b>D) either / or:</b> Seçenek sunan bir yapı yoktur.<br><b>E) not only / but also:</b> İkinci boşluktan sonra tam bir sonuç cümlesi geldiği için paralel bağlaç yapısına uymaz.`
    },
    {
        id: 12,
        type: 'A',
        instruction: "7-16 sorularda, cümlede boş bırakılan yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        text: "---- Edwin Hubble observed that distant galaxies are continually moving away from our own, cosmologists concluded that the entire universe must have expanded outward from an extremely hot, dense point in the distant past.",
        options: {
            A: "Even though",
            B: "Since",
            C: "Unless",
            D: "Although",
            E: "While"
        },
        correct: "B",
        dict: { "distant": "uzak", "galaxy": "galaksi/gökada", "conclude": "sonucuna varmak", "expand": "genişlemek", "dense": "yoğun" },
        explanation: `<b>✅ Doğru Cevap: B) Since</b><br><b>📌 Sebep:</b> Cümlede sebep-sonuç ilişkisi (cause-effect) bulunmaktadır. Hubble'ın uzak galaksilerin uzaklaştığını gözlemlemesi bir neden, evrenin genişlediği sonucuna varılması ise sonuçtur. "Since / Because / As" anlamı sağlar.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A) Even though:</b> Zıtlık bildirir, mantıksal nedenselliğe uymaz.<br><b>C) Unless:</b> -medikçe/-madıkça şartı taşır, olguyu açıklamaz.<br><b>D) Although:</b> Zıtlık bağlacıdır.<br><b>E) While:</b> Zaman veya zıtlık bildirir, doğrudan sebep ilişkisini vermez.`
    },
    {
        id: 13,
        type: 'A',
        instruction: "7-16 sorularda, cümlede boş bırakılan yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        text: "Extrinsic rewards such as high grades may boost short-term academic performance; ----, they often undermine students' intrinsic motivation to pursue learning for its own sake.",
        options: {
            A: "furthermore",
            B: "however",
            C: "therefore",
            D: "similarly",
            E: "in other words"
        },
        correct: "B",
        dict: { "extrinsic": "dışsal", "reward": "ödül", "boost": "artırmak/yükseltmek", "undermine": "baltalamak/zayıflatmak", "intrinsic": "içsel" },
        explanation: `<b>✅ Doğru Cevap: B) however</b><br><b>📌 Sebep:</b> İki bağımsız cümle arasında zıtlık ilişkisi vardır. İlk cümlede dışsal ödüllerin kısa vadeli başarıyı artırması (olumlu), noktalı virgülden sonra ise içsel motivasyonu baltalaması (olumsuz) karşılaştırılmıştır. Bu geçişi "however / nevertheless" sağlar.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A) furthermore:</b> Ek bilgi verir, zıtlığı bağlamaz.<br><b>C) therefore:</b> Sebep-sonuç bağlar.<br><b>D) similarly:</b> Benzerlik bildirir.<br><b>E) in other words:</b> Açıklama/başka bir deyişle anlamı katar.`
    },
    {
        id: 14,
        type: 'A',
        instruction: "7-16 sorularda, cümlede boş bırakılan yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        text: "---- ancient Greek natural philosophers formulated groundbreaking theoretical concepts about the cosmos, their overall scientific methodology was severely limited by a general reluctance to conduct systematic physical experiments.",
        options: {
            A: "Although",
            B: "Because",
            C: "Given that",
            D: "Just as",
            E: "As long as"
        },
        correct: "A",
        dict: { "philosopher": "filozof", "groundbreaking": "çığır açan", "methodology": "metodoloji/yöntembilim", "reluctance": "isteksizlik/gönülsüzlük", "systematic": "sistemli" },
        explanation: `<b>✅ Doğru Cevap: A) Although</b><br><b>📌 Sebep:</b> Cümlede zıtlık (concession) söz konusudur. Yunan filozoflarının evren hakkında çığır açan teoriler üretmesi (olumlu) ile deney yapmaktan kaçındıkları için yöntemlerinin sınırlı kalması (olumsuz) "Although / Even though / While" ile bağlanır.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B) Because:</b> Sebep bağlacıdır, olumlu-olumsuz zıtlığını açıklamaz.<br><b>C) Given that:</b> -dığı düşünülürse/nedeniyle anlamındadır.<br><b>D) Just as:</b> Tıpkı ... gibi anlamında benzerlik bildirir.<br><b>E) As long as:</b> Şart bağlacıdır (-dığı sürece).`
    },
    {
        id: 15,
        type: 'A',
        instruction: "7-16 sorularda, cümlede boş bırakılan yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        text: "During the 1522 Siege of Rhodes, Suleiman the Magnificent deployed advanced artillery and extensive subterranean mining techniques ---- the formidable medieval fortifications of the Knights Hospitaller could be breached.",
        options: {
            A: "so that",
            B: "even if",
            C: "in case",
            D: "as though",
            E: "unless"
        },
        correct: "A",
        dict: { "siege": "kuşatma", "artillery": "topçu birliği/top", "subterranean": "yeraltı", "fortification": "tahkimat/kale duvarları", "breach": "gedik açmak/yarmak" },
        explanation: `<b>✅ Doğru Cevap: A) so that</b><br><b>📌 Sebep:</b> Cümlede bir eylemin yapılma amacı (purpose) belirtilmektedir. Kanuni Sultan Süleyman'ın gelişmiş topçu ve lağım tekniklerini kullanmasının amacı Şövalyelerin kale duvarlarında gedik açabilmektir ("so that + could").<br><br><b>❌ Diğer Seçenekler:</b><br><b>B) even if:</b> -se bile anlamında zıtlık katar.<br><b>C) in case:</b> -olur diye / ihtimaline karşı önlem bildirir.<br><b>D) as though:</b> -mış gibi anlamı verir.<br><b>E) unless:</b> -medikçe koşulunu belirtir.`
    },
    {
        id: 16,
        type: 'A',
        instruction: "7-16 sorularda, cümlede boş bırakılan yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        text: "Asian American households consistently prioritize substantial financial investment in supplementary education and foster high cultural expectations for academic rigor; ----, their children display remarkably high rates of university enrollment and professional attainment.",
        options: {
            A: "on the contrary",
            B: "nevertheless",
            C: "consequently",
            D: "instead",
            E: "otherwise"
        },
        correct: "C",
        dict: { "prioritize": "öncelik vermek", "supplementary": "ek/takviye edici", "rigor": "titizlik/disiplin", "enrollment": "kayıt/katılım", "attainment": "başarı/kazanım" },
        explanation: `<b>✅ Doğru Cevap: C) consequently</b><br><b>📌 Sebep:</b> Cümlede bir eylemin mantıksal sonucu (conclusive / result) anlatılmaktadır. Ailelerin ek eğitime yatırım yapması ve akademik disipline önem vermesi bir sebep, çocuklarının yüksek üniversiteye yerleşme oranı yakalaması ise bunun doğal sonucudur ("consequently / therefore / as a result").<br><br><b>❌ Diğer Seçenekler:</b><br><b>A) on the contrary:</b> Aksine/bilakis zıtlığı belirtir.<br><b>B) nevertheless:</b> Yine de/buna rağmen anlamında zıtlık bağlar.<br><b>D) instead:</b> Bunun yerine anlamındadır.<br><b>E) otherwise:</b> Aksi takdirde koşul-sonuç ilişkisini verir.`
    },
    {
        id: 17,
        type: 'B',
        instruction: "17-21 sorularda, aşağıdaki parçada numaralanmış yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        paragraph: "Caffeine is widely consumed across the globe primarily (17)---- its well-known stimulant properties on the central nervous system. Upon entering the bloodstream, it readily crosses the blood-brain barrier and binds to adenosine receptors, temporarily blocking the neuromodulator that induces drowsiness. This biochemical mechanism triggers an increase in alertness and enhances overall cognitive (18)---- during complex tasks. (19)----, excessive or ill-timed intake can disrupt circadian rhythms and impair deep restorative sleep. Scientific studies indicate that individuals who consume high doses late in the evening (20)---- from chronic sleep fragmentation and increased daytime fatigue over time. To avoid these adverse physiological outcomes, health experts advise individuals to (21)---- their daily intake and abstain from caffeinated beverages in the hours leading up to bedtime.",
        text: "",
        options: { A: "contrary to", B: "due to", C: "regardless of", D: "in place of", E: "by means of" },
        correct: "B",
        dict: { "stimulant": "uyarıcı", "central nervous system": "merkezi sinir sistemi", "drowsiness": "uyku hali/uyuşukluk", "cognitive": "bilişsel" },
        explanation: `<b>✅ Doğru Cevap: B) due to</b><br><b>📌 Sebep:</b> Cümlede kafeinin dünya çapında yaygın tüketilme nedeni anlatılmaktadır. "Merkezi sinir sistemi üzerindeki uyarıcı özellikleri <i>sayesinde / nedeniyle</i>" anlamını en iyi <b>due to / owing to / because of</b> edat grubu sağlar.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A) contrary to:</b> Aksine - zıtlık bildirir.<br><b>C) regardless of:</b> -e bakılmaksızın - sebep-sonuç ilişkisini bozar.<br><b>D) in place of:</b> -in yerine - anlama uymaz.<br><b>E) by means of:</b> Aracılığıyla/yoluyla - isim öbeğiyle doğrudan neden bildirmek için "due to" kadar uygun değildir.`
    },
    {
        id: 18,
        type: 'B',
        instruction: "17-21 sorularda, aşağıdaki parçada numaralanmış yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        paragraph: "Caffeine is widely consumed across the globe primarily (17)---- its well-known stimulant properties on the central nervous system. Upon entering the bloodstream, it readily crosses the blood-brain barrier and binds to adenosine receptors, temporarily blocking the neuromodulator that induces drowsiness. This biochemical mechanism triggers an increase in alertness and enhances overall cognitive (18)---- during complex tasks. (19)----, excessive or ill-timed intake can disrupt circadian rhythms and impair deep restorative sleep. Scientific studies indicate that individuals who consume high doses late in the evening (20)---- from chronic sleep fragmentation and increased daytime fatigue over time. To avoid these adverse physiological outcomes, health experts advise individuals to (21)---- their daily intake and abstain from caffeinated beverages in the hours leading up to bedtime.",
        text: "",
        options: { A: "deterioration", B: "performance", C: "reluctance", D: "precaution", E: "deficiency" },
        correct: "B",
        dict: { "alertness": "uyanıklık/tetikte olma", "enhance": "artırmak/geliştirmek", "complex": "karmaşık", "performance": "performans/başarım" },
        explanation: `<b>✅ Doğru Cevap: B) performance</b><br><b>📌 Sebep:</b> "Enhances overall cognitive ----" tamlamasında, uyanıklık artışına paralel olarak <i>bilişsel performansın</i> (cognitive performance) artırıldığı ifade edilmektedir.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A) deterioration:</b> Kötüleşme/bozulma - "enhances" fiili ile anlamsal olarak çelişir.<br><b>C) reluctance:</b> İsteksizlik - bağlama uymaz.<br><b>D) precaution:</b> Önlem - bilişsel bir beceriyi ifade etmez.<br><b>E) deficiency:</b> Eksiklik/yetersizlik - olumlu etkiyi nitelemez.`
    },
    {
        id: 19,
        type: 'B',
        instruction: "17-21 sorularda, aşağıdaki parçada numaralanmış yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        paragraph: "Caffeine is widely consumed across the globe primarily (17)---- its well-known stimulant properties on the central nervous system. Upon entering the bloodstream, it readily crosses the blood-brain barrier and binds to adenosine receptors, temporarily blocking the neuromodulator that induces drowsiness. This biochemical mechanism triggers an increase in alertness and enhances overall cognitive (18)---- during complex tasks. (19)----, excessive or ill-timed intake can disrupt circadian rhythms and impair deep restorative sleep. Scientific studies indicate that individuals who consume high doses late in the evening (20)---- from chronic sleep fragmentation and increased daytime fatigue over time. To avoid these adverse physiological outcomes, health experts advise individuals to (21)---- their daily intake and abstain from caffeinated beverages in the hours leading up to bedtime.",
        text: "",
        options: { A: "Therefore", B: "However", C: "Furthermore", D: "Similarly", E: "That is" },
        correct: "B",
        dict: { "excessive": "aşırı", "disrupt": "bozmak/aksatmak", "circadian rhythm": "biyolojik ritim/24 saatlik döngü", "impair": "zarar vermek/zayıflatmak" },
        explanation: `<b>✅ Doğru Cevap: B) However</b><br><b>📌 Sebep:</b> Önceki cümlede kafeinin odaklanma ve performansı artırması (olumlu) anlatılırken, bu cümlede aşırı kullanımın uykuyu ve biyolojik ritmi bozması (olumsuz) ele alınmıştır. İki bağımsız fikir arasındaki zıtlığı <b>However</b> sağlar.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A) Therefore:</b> Bu nedenle - sebep-sonuç bağlar.<br><b>C) Furthermore:</b> Dahası/ayrıca - aynı yönde ek bilgi verir.<br><b>D) Similarly:</b> Benzer şekilde - benzerlik kurar.<br><b>E) That is:</b> Yani/başka bir deyişle - açıklama yapar.`
    },
    {
        id: 20,
        type: 'B',
        instruction: "17-21 sorularda, aşağıdaki parçada numaralanmış yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        paragraph: "Caffeine is widely consumed across the globe primarily (17)---- its well-known stimulant properties on the central nervous system. Upon entering the bloodstream, it readily crosses the blood-brain barrier and binds to adenosine receptors, temporarily blocking the neuromodulator that induces drowsiness. This biochemical mechanism triggers an increase in alertness and enhances overall cognitive (18)---- during complex tasks. (19)----, excessive or ill-timed intake can disrupt circadian rhythms and impair deep restorative sleep. Scientific studies indicate that individuals who consume high doses late in the evening (20)---- from chronic sleep fragmentation and increased daytime fatigue over time. To avoid these adverse physiological outcomes, health experts advise individuals to (21)---- their daily intake and abstain from caffeinated beverages in the hours leading up to bedtime.",
        text: "",
        options: { A: "are suffering", B: "suffer", C: "had suffered", D: "will have suffered", E: "were suffering" },
        correct: "B",
        dict: { "fragmentation": "bölünme/parçalanma", "fatigue": "yorgunluk/bitkinlik", "suffer from": "-den muzdarip olmak", "over time": "zamanla" },
        explanation: `<b>✅ Doğru Cevap: B) suffer</b><br><b>📌 Sebep:</b> "Scientific studies indicate that..." ile başlayan ifadede genel bilimsel bir gerçek ve nedensellik kuralı aktarıldığı için Simple Present Tense (<b>suffer</b>) kullanımı esastır.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A) are suffering:</b> Şimdiki zaman - genel bilimsel olguyu ifade etmekte tercih edilmez.<br><b>C) had suffered:</b> Past Perfect - geçmişte tamamlanmış eylemler için kullanılır.<br><b>D) will have suffered:</b> Future Perfect - gelecekte belirli bir andan önce tamamlanacak durumlar içindir.<br><b>E) were suffering:</b> Past Continuous - geçmiş süreç anlatımına aittir.`
    },
    {
        id: 21,
        type: 'B',
        instruction: "17-21 sorularda, aşağıdaki parçada numaralanmış yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        paragraph: "Caffeine is widely consumed across the globe primarily (17)---- its well-known stimulant properties on the central nervous system. Upon entering the bloodstream, it readily crosses the blood-brain barrier and binds to adenosine receptors, temporarily blocking the neuromodulator that induces drowsiness. This biochemical mechanism triggers an increase in alertness and enhances overall cognitive (18)---- during complex tasks. (19)----, excessive or ill-timed intake can disrupt circadian rhythms and impair deep restorative sleep. Scientific studies indicate that individuals who consume high doses late in the evening (20)---- from chronic sleep fragmentation and increased daytime fatigue over time. To avoid these adverse physiological outcomes, health experts advise individuals to (21)---- their daily intake and abstain from caffeinated beverages in the hours leading up to bedtime.",
        text: "",
        options: { A: "cut down on", B: "make up for", C: "look forward to", D: "run out of", E: "bring about" },
        correct: "A",
        dict: { "adverse": "olumsuz/zararlı", "abstain from": "-den kaçınmak/uzak durmak", "cut down on": "azaltmak/kısmak", "intake": "alım/tüketim" },
        explanation: `<b>✅ Doğru Cevap: A) cut down on</b><br><b>📌 Sebep:</b> Paragraftaki "abstain from caffeinated beverages" (kafeinli içeceklerden uzak durmak) ifadesiyle paralel olarak, sağlık uzmanlarının günlük kafein alımını <i>azaltmalarını / kısmalarını</i> (cut down on) önerdiği belirtilmektedir.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B) make up for:</b> Telafi etmek - bağlama uymaz.<br><b>C) look forward to:</b> Dört gözle beklemek - anlamsızdır.<br><b>D) run out of:</b> Tüketmek/bitmek - tavsiye edilen eylem değildir.<br><b>E) bring about:</b> Sebep olmak/yol açmak - nesneyle tamlama oluşturmaz.`
    },
    {
        id: 22,
        type: 'B',
        instruction: "22-26 sorularda, aşağıdaki parçada numaralanmış yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        paragraph: "Cognitive development in early childhood is deeply reliant (22)---- environmental stimuli and structured social interactions that shape neural architecture. During the formative pre-school years, children continuously assimilate sensory experiences to construct coherent mental models of the world around them. Engaging in cooperative play and language-rich activities significantly enhances their capacity for abstract (23)---- and problem-solving. (24)----, severe environmental deprivation or chronic neglect during these critical neurodevelopmental windows can impair synaptic pruning and delay executive functioning. Developmental psychologists emphasize that unless enriched learning environments (25)---- in early childhood education centres, socio-emotional disparities will widen. Caregivers and educators are thus strongly encouraged to (26)---- stimulating educational strategies that nurture inquisitive minds and foster lifelong cognitive resilience.",
        text: "",
        options: { A: "with", B: "upon", C: "about", D: "towards", E: "into" },
        correct: "B",
        dict: { "reliant": "bağımlı/dayalı", "stimuli": "uyaranlar", "formative": "biçimlendirici/gelişimsel", "assimilate": "özümsemek" },
        explanation: `<b>✅ Doğru Cevap: B) upon</b><br><b>📌 Sebep:</b> "Reliant" sıfatı nesnesiyle birlikte "reliant on / upon" (bir şeye dayalı/bağımlı olma) kalıbı şeklinde kullanılır.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A) with:</b> Bağlama uymaz.<br><b>C) about:</b> "Reliant" ile kullanılmaz.<br><b>D) towards:</b> Yönelme anlamı verir, kalıpla uyuşmaz.<br><b>E) into:</b> Hatalı edat kullanımıdır.`
    },
    {
        id: 23,
        type: 'B',
        instruction: "22-26 sorularda, aşağıdaki parçada numaralanmış yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        paragraph: "Cognitive development in early childhood is deeply reliant (22)---- environmental stimuli and structured social interactions that shape neural architecture. During the formative pre-school years, children continuously assimilate sensory experiences to construct coherent mental models of the world around them. Engaging in cooperative play and language-rich activities significantly enhances their capacity for abstract (23)---- and problem-solving. (24)----, severe environmental deprivation or chronic neglect during these critical neurodevelopmental windows can impair synaptic pruning and delay executive functioning. Developmental psychologists emphasize that unless enriched learning environments (25)---- in early childhood education centres, socio-emotional disparities will widen. Caregivers and educators are thus strongly encouraged to (26)---- stimulating educational strategies that nurture inquisitive minds and foster lifelong cognitive resilience.",
        text: "",
        options: { A: "reasoning", B: "suppression", C: "deterioration", D: "reluctance", E: "precaution" },
        correct: "A",
        dict: { "abstract": "soyut", "reasoning": "akıl yürütme/muhakeme", "problem-solving": "problem çözme", "deprivation": "yoksunluk" },
        explanation: `<b>✅ Doğru Cevap: A) reasoning</b><br><b>📌 Sebep:</b> Cümlede "abstract ---- and problem-solving" tamlamasında bilişsel bir beceri ifade edilmektedir. "Abstract reasoning" (soyut akıl yürütme/muhakeme) akademik bağlamı tam olarak karşılar.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B) suppression:</b> Baskılama - olumsuz anlam içerir.<br><b>C) deterioration:</b> Kötüleşme/bozulma - "enhances" fiiliyle çelişir.<br><b>D) reluctance:</b> İsteksizlik - bağlama uymaz.<br><b>E) precaution:</b> Önlem - bilişsel beceriyi nitelemez.`
    },
    {
        id: 24,
        type: 'B',
        instruction: "22-26 sorularda, aşağıdaki parçada numaralanmış yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        paragraph: "Cognitive development in early childhood is deeply reliant (22)---- environmental stimuli and structured social interactions that shape neural architecture. During the formative pre-school years, children continuously assimilate sensory experiences to construct coherent mental models of the world around them. Engaging in cooperative play and language-rich activities significantly enhances their capacity for abstract (23)---- and problem-solving. (24)----, severe environmental deprivation or chronic neglect during these critical neurodevelopmental windows can impair synaptic pruning and delay executive functioning. Developmental psychologists emphasize that unless enriched learning environments (25)---- in early childhood education centres, socio-emotional disparities will widen. Caregivers and educators are thus strongly encouraged to (26)---- stimulating educational strategies that nurture inquisitive minds and foster lifelong cognitive resilience.",
        text: "",
        options: { A: "Furthermore", B: "However", C: "Therefore", D: "Consequently", E: "Similarly" },
        correct: "B",
        dict: { "synaptic pruning": "sinaptik budanma", "executive functioning": "yürütücü işlevler", "impair": "bozmak/zarar vermek" },
        explanation: `<b>✅ Doğru Cevap: B) However</b><br><b>📌 Sebep:</b> Önceki cümlede zengin çevrenin ve oyunların bilişsel gelişimi artırması (olumlu), bu cümlede ise çevresel yoksunluğun ve ihmalin beyin gelişimini bozması (olumsuz) anlatıldığı için iki bağımsız cümle arasındaki zıtlığı <b>However</b> sağlar.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A) Furthermore:</b> Ek bilgi verir, zıtlığı bağlamaz.<br><b>C) Therefore:</b> Sebep-sonuç bağlar.<br><b>D) Consequently:</b> Sonuç bildirir.<br><b>E) Similarly:</b> Benzerlik kurar.`
    },
    {
        id: 25,
        type: 'B',
        instruction: "22-26 sorularda, aşağıdaki parçada numaralanmış yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        paragraph: "Cognitive development in early childhood is deeply reliant (22)---- environmental stimuli and structured social interactions that shape neural architecture. During the formative pre-school years, children continuously assimilate sensory experiences to construct coherent mental models of the world around them. Engaging in cooperative play and language-rich activities significantly enhances their capacity for abstract (23)---- and problem-solving. (24)----, severe environmental deprivation or chronic neglect during these critical neurodevelopmental windows can impair synaptic pruning and delay executive functioning. Developmental psychologists emphasize that unless enriched learning environments (25)---- in early childhood education centres, socio-emotional disparities will widen. Caregivers and educators are thus strongly encouraged to (26)---- stimulating educational strategies that nurture inquisitive minds and foster lifelong cognitive resilience.",
        text: "",
        options: { A: "had been provided", B: "are provided", C: "were providing", D: "have provided", E: "will be provided" },
        correct: "B",
        dict: { "enriched": "zenginleştirilmiş", "disparities": "eşitsizlikler/farklılıklar", "widen": "genişlemek/artmak" },
        explanation: `<b>✅ Doğru Cevap: B) are provided</b><br><b>📌 Sebep:</b> "Unless" koşul yan cümlesinde ("unless ... will widen" Type 1 yapısı) Present Tense kullanılmalıdır. Cümlenin öznesi olan öğrenme ortamları eylemi uygulayan değil uygulanan konumunda olduğu için Simple Present Passive (<b>are provided</b>) doğru yapıdır.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A) had been provided:</b> Past Perfect - zaman uyumunu bozar.<br><b>C) were providing:</b> Etken ve geçmiş zamandır.<br><b>D) have provided:</b> Etken yapıdır (nesnesi yoktur).<br><b>E) will be provided:</b> Koşul (unless/if) bağlaçlı yan cümlelerde doğrudan "will" kullanılmaz.`
    },
    {
        id: 26,
        type: 'B',
        instruction: "22-26 sorularda, aşağıdaki parçada numaralanmış yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        paragraph: "Cognitive development in early childhood is deeply reliant (22)---- environmental stimuli and structured social interactions that shape neural architecture. During the formative pre-school years, children continuously assimilate sensory experiences to construct coherent mental models of the world around them. Engaging in cooperative play and language-rich activities significantly enhances their capacity for abstract (23)---- and problem-solving. (24)----, severe environmental deprivation or chronic neglect during these critical neurodevelopmental windows can impair synaptic pruning and delay executive functioning. Developmental psychologists emphasize that unless enriched learning environments (25)---- in early childhood education centres, socio-emotional disparities will widen. Caregivers and educators are thus strongly encouraged to (26)---- stimulating educational strategies that nurture inquisitive minds and foster lifelong cognitive resilience.",
        text: "",
        options: { A: "draw on", B: "call off", C: "run out of", D: "turn down", E: "break into" },
        correct: "A",
        dict: { "nurture": "beslemek/geliştirmek", "inquisitive": "meraklı/araştırmacı", "resilience": "dayanıklılık/esneklik", "draw on": "yararlanmak/kullanmak" },
        explanation: `<b>✅ Doğru Cevap: A) draw on</b><br><b>📌 Sebep:</b> Cümlede eğitimcilerin çocukların bilişsel dayanıklılığını artırmak için uyarıcı eğitim stratejilerinden <i>faydalanmaları / bunları kullanmaları</i> (draw on educational strategies) tavsiye edilmektedir.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B) call off:</b> İptal etmek - bağlama terstir.<br><b>C) run out of:</b> Tükenmek/bitmek - tavsiye edilen eylemle uyuşmaz.<br><b>D) turn down:</b> Reddetmek/geri çevirmek - olumsuzdur.<br><b>E) break into:</b> Zorla girmek/aniden başlamak - uygun değildir.`
    },
    {
        id: 27,
        type: "A",
        instruction: "27-36 sorularda, verilen cümleyi uygun şekilde tamamlayan ifadeyi bulunuz.",                
        text: "Although ten of the previously surveyed thirty collaborations have done away with the annual payments appropriated by the Legislature, ----.",
        options: { A: "all corporations have taken their own responsibility for organizing staff's payments", B: "the government will probably form another working body dealing with foreign trade", C: "such old fashioned methods are welcomed by larger companies", D: "the others are still doubtful about what sort of action they must take", E: "they will eventually realize the positive aspect of having a good communication with the government" },
        correct: "D",
        dict: { "appropriated": "tahsis edilmiş", "collaborations": "işbirlikleri", "surveyed": "incelenmiş", "Legislature": "yasama organı" },
        explanation: `<b>✅ Doğru Cevap: D) the others are still doubtful about what sort of action they must take</b><br><b>📌 Sebep:</b> Zıtlık bağlacı (Although). 10 tanesi ödemeyi kaldırdı, <i>diğerleri</i> (the others) hala şüpheli.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A) all corporations...</b> - Tüm şirketlerden bahsediyor, sadece 10'u değil.<br><b>B) the government...</b> - Hükümet konusuyla ilgili değil.<br><b>C) such old fashioned methods...</b> - Eski yöntemlerden bahsetmiyor.<br><b>E) they will eventually...</b> - 'They' 10 işbirliğini kasteder, 'the others' değil.`
    },
    {
        id: 28,
        type: "A",
        instruction: "27-36 sorularda, verilen cümleyi uygun şekilde tamamlayan ifadeyi bulunuz.",                
        text: "---- that have recently fostered the fires all over the world.",
        options: { A: "Because the fires give dreadful damage not only to the neighborhood people live in and their properties but also their psychology", B: "Today most of the farmers who have large numbers of animals would rather settle in an area rich in fresh water rather than a place appropriate for only grazing", C: "Meteorologists blame a mammoth high-pressure system, centered over woody areas and bringing temperatures as high as 112 °F, for the weather conditions", D: "Being aware of the emergency of finding a way for these animals to survive, he often came together with activists", E: "People often need to check weather forecasts to prepare for the day or even such organizations as a vacation and wedding ceremony" },
        correct: "C",
        dict: { "fostered": "körüklemiş", "mammoth": "devasa", "woody": "ağaçlık", "forecasts": "tahminler" },
        explanation: `<b>✅ Doğru Cevap: C) Meteorologists blame a mammoth high-pressure system...</b><br><b>📌 Sebep:</b> Relative clause 'that have recently fostered...' cümlesindeki 'weather conditions'ı veya 'system'i niteler.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A) Because the fires...</b> - Cümle 'that' ile başlamalı, relative clause yapısı yok.<br><b>B) Today most of the farmers...</b> - Yangınlarla ilgisi yok.<br><b>D) Being aware of...</b> - Hayvanlardan bahsediyor, yangınlardan değil.<br><b>E) People often need...</b> - Hava tahminleri genel konu.`
    },
    {
        id: 29,
        type: "A",
        instruction: "27-36 sorularda, verilen cümleyi uygun şekilde tamamlayan ifadeyi bulunuz.",                
        text: "---- but we never choose the life she gives us.",
        options: { "A": "Mother nature has already provided us with a life span longer than that of almost any other animal", "B": "We can in fact tolerate the tyranny of aging and death", "C": "Biotechnological and computational means definitely expand their perceptual range", "D": "Through genetic alterations and synthetic organs, they may determine how long they will live", "E": "In the gorgeous shadow of mother nature, we may always find it easy to live our lives" },
        correct: "E",
        dict: { "life span": "yaşam süresi", "provided": "sağlamış", "choose": "seçmek", "gorgeous": "muhteşem", "shadow": "gölge" },
        explanation: "<b> ✅  Doğru Cevap: E) In the gorgeous shadow of mother nature, we may always find it easy to live our lives</b><br><b> 📌  Sebep:</b> Cümledeki 'but' (fakat) bağlacı güçlü bir zıtlık oluşturur. İlk kısımda 'hayatımızı yaşamayı her zaman kolay bulabiliriz' (pozitif/kolaylık) denirken, ikinci kısımda 'fakat onun (mother nature) bize verdiği hayatı asla seçemeyiz' (kontrolsüzlük/kader) denilerek anlam bütünlüğü sağlanır. Ayrıca 'she' zamiri 'mother nature'a gönderme yapar.<br><br><b> ❌  Diğer Seçenekler:</b><br><b>A)</b> 'Provided us with a life span' ifadesi gramer olarak uysa da, 'ömür uzunluğu' ile 'hayatı seçememek' arasındaki zıtlık, E şıkkındaki 'yaşamanın kolaylığı' ile 'seçim yapamama' arasındaki zıtlık kadar bağlamsal değildir."
    },
    {
        id: 30,
        type: "A",
        instruction: "27-36 sorularda, verilen cümleyi uygun şekilde tamamlayan ifadeyi bulunuz.",                
        text: "---- any multi-cellular animal, from a blue whale to a human being, poses a special difficulty for the theory of evolution.",
        options: { "A": "Since many prominent scientists work on multi-cellular organisms", "B": "Although the latest information on living creatures delivered by some researchers has drawn attention from academicians", "C": "Even if they never make a comment as to the scientific evidence in relation to human anatomy", "D": "As a distinguished team of evolutionary biologists at a well-known university have recently stated", "E": "While Darwin's Theory of Evolution holds the notion that all life is related and has descended from a common ancestor" },
        correct: "D",
        dict: { "ancestor": "ata", "multi-cellular": "çok hücreli", "poses": "sunar/teşkil eder", "distinguished": "seçkin", "stated": "belirtti" },
        explanation: "<b> ✅  Doğru Cevap: D) As a distinguished team of evolutionary biologists at a well-known university have recently stated</b><br><b> 📌  Sebep:</b> 'As ... stated' ( ...'nın belirttiği gibi) kalıbı, ana cümledeki yargıyı (çok hücreli canlıların evrim teorisi için zorluk teşkil etmesi) bir kaynağa dayandırır. Cümle akışı: 'Bir ekibin belirttiği gibi, herhangi bir çok hücreli hayvan... zorluk teşkil eder.' şeklindedir.<br><br><b> ❌  Diğer Seçenekler:</b><br><b>E)</b> 'While' (iken/rağmen) yapısı kullanılsa da, cümlenin devamında Darwin'in teorisiyle doğrudan çelişen bir durumdan ziyade, bu teorinin karşılaştığı spesifik bir zorluktan bahsedildiği için, bu durumun bir alıntı/referans (D şıkkı) olarak verilmesi akademik dile daha uygundur."
    },
    {
        id: 31,
        type: "A",
        instruction: "27-36 sorularda, verilen cümleyi uygun şekilde tamamlayan ifadeyi bulunuz.",                
        text: "----, Fish and Wildlife Service will have responsibilities under the Endangered Species Act to protect this species from extinction.",
        options: { A: "If the polar bear is declared endangered", B: "When the profit of oil and gas trade rises to a great extent", C: "Provided that authorities are aware of this species' being too large in number", D: "Since it is possible to see polar bears in any zoo around the world", E: "Because such animals have been hunted excessively for their meat and fur in many parts of the planet" },
        correct: "A",
        dict: { "endangered": "tehlike altında", "extinction": "yok olma", "responsibilities": "sorumluluklar", "species": "tür" },
        explanation: `<b>✅ Doğru Cevap: A) If the polar bear is declared endangered</b><br><b>📌 Sebep:</b> Eğer kutup ayısı tehlikede ilan edilirse, kurumun sorumluluğu doğacak.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B) When the profit...</b> - Kar/ticaret konusu değil.<br><b>C) Provided that authorities...</b> - Sayılarının fazla olması koruma için neden değil.<br><b>D) Since it is possible...</b> - Hayvanat bahçeleri koruma sebebi değil.<br><b>E) Because such animals...</b> - Avlanma geçmişi verilmiş ama 'declared endangered' şartı yok.`
    },
    {
        id: 32,
        type: "A",
        instruction: "27-36 sorularda, verilen cümleyi uygun şekilde tamamlayan ifadeyi bulunuz.",                
        text: "Direct Cash is described as straight cash with no restrictions ----.",
        options: { A: "so that it unavoidably causes greater budget constraints", B: "as to how it can be spent by the individual recipient", C: "if the recipients are in urgent need of cash money", D: "however the recipients can spend the cash subsidy on any goods they like", E: "though this type of credit would be much better to apply for" },
        correct: "B",
        dict: { "restrictions": "kısıtlamalar", "recipient": "alıcı", "subsidy": "sübvansiyon", "described": "tanımlanmış" },
        explanation: `<b>✅ Doğru Cevap: B) as to how it can be spent by the individual recipient</b><br><b>📌 Sebep:</b> 'Restrictions as to...' (...ile ilgili kısıtlamalar) kalıbı. Paranın nasıl harcanacağına dair kısıtlama yok.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A) so that it...</b> - Sonuç belirtiyor, kısıtlama açıklaması değil.<br><b>C) if the recipients...</b> - Koşul belirtiyor.<br><b>D) however the recipients...</b> - Zıtlık belirtiyor.<br><b>E) though this type...</b> - Zıtlık belirtiyor.`
    },
    {
        id: 33,
        type: "A",
        instruction: "27-36 sorularda, verilen cümleyi uygun şekilde tamamlayan ifadeyi bulunuz.",                
        text: "Before the vote for 'New 7 Wonders of the World' ended on Friday, ----.",
        options: { A: "organizers said more than 90 million votes had been cast for 21 sites", B: "the act of voting for a political party was voluntary in some countries", C: "the leader of the conservative party got the highest numbers of votes", D: "immediate results were announced on the same day by all national channels", E: "undoubtedly the former president was a gifted person in all affairs" },
        correct: "A",
        dict: { "cast": "oy kullanmak", "organizers": "organizatörler", "sites": "yerler", "ended": "sona erdi" },
        explanation: `<b>✅ Doğru Cevap: A) organizers said more than 90 million votes had been cast for 21 sites</b><br><b>📌 Sebep:</b> Zaman uyumu. Oylama bitmeden <i>önce</i>, organizatörler açıklama yaptı.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B) the act of voting...</b> - Siyasi parti oyu konusu değil.<br><b>C) the leader of the conservative party...</b> - Siyasi lider konusu değil.<br><b>D) immediate results were announced...</b> - Hemen sonuç açıklanmadığı için uygun değil.<br><b>E) undoubtedly the former president...</b> - Eski başkan konusu değil.`
    },
    {
        id: 34,
        type: "A",
        instruction: "27-36 sorularda, verilen cümleyi uygun şekilde tamamlayan ifadeyi bulunuz.",                
        text: "Although forests are already viewed as water suppliers, ----.",
        options: { A: "much remains to be learned and applied in order to maximize them", B: "forested catchments supply a high proportion of the water for domestic, agricultural, industrial and ecological needs in both upstream and downstream areas", C: "the relationship between forests and water is a critical issue that must be accorded high priority", D: "forest is the best land cover for maximizing water yield, regulating seasonal flows and ensuring high water quality", E: "forest hydrology research conducted during the 1980s and 1990s suggests a similar picture" },
        correct: "A",
        dict: { "maximize": "maksimize etmek", "viewed": "görülmek", "suppliers": "tedarikçiler", "forests": "ormanlar" },
        explanation: `<b>✅ Doğru Cevap: A) much remains to be learned and applied in order to maximize them</b><br><b>📌 Sebep:</b> Zıtlık. Öyle görülmesine <i>rağmen</i>, hala öğrenilecek çok şey var.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B) forested catchments...</b> - Zıtlık değil, olumlu devam.<br><b>C) the relationship between...</b> - Kritik konu olduğunu söylüyor ama zıtlık yok.<br><b>D) forest is the best...</b> - En iyi olduğunu söylüyor, zıtlık yok.<br><b>E) forest hydrology research...</b> - Araştırma sonuçları, zıtlık yok.`
    },
    {
        id: 35,
        type: "A",
        instruction: "27-36 sorularda, verilen cümleyi uygun şekilde tamamlayan ifadeyi bulunuz.",                
        text: "Having such sophisticated hardware as helicopters and flame-fighting airplanes, and equipped with tools that range from axes to bulldozers, ----.",
        options: { A: "generally forest fires give massive damage not only to nature or assets but also human lives", B: "what makes it much easier for firemen to get control over a large area burning", C: "this technological device is of great importance in extinguishing large fires", D: "today's fire fighters are able to create fireguards as wide as 100 feet to isolate the flames", E: "school course books contain invaluable information for teaching young learners how to fight a fire" },
        correct: "D",
        dict: { "sophisticated": "gelişmiş", "equipped": "donatılmış", "fireguards": "yangın bariyerleri", "isolate": "ayırmak" },
        explanation: `<b>✅ Doğru Cevap: D) today's fire fighters are able to create fireguards as wide as 100 feet to isolate the flames</b><br><b>📌 Sebep:</b> Özne uyumu. Helikoptere ve araçlara 'sahip olan' (Having...) kimdir? İtfaiyeciler.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A) generally forest...</b> - Orman yangınları özne olamaz.<br><b>B) what makes it...</b> - 'What' ile başlayan cümle özne olamaz.<br><b>C) this technological device...</b> - Cihaz özne olabilir ama 'equipped with tools' insanlarla ilgili.<br><b>E) school course books...</b> - Ders kitapları özne olamaz.`
    },
    {
        id: 36,
        type: "A",
        instruction: "27-36 sorularda, verilen cümleyi uygun şekilde tamamlayan ifadeyi bulunuz.",                
        text: "----, its sea ice melts, leaving the animals to drown as they are forced to swim long distances between the ice, or simply starve to death.",
        options: { A: "Because the polar regions finally face the possibility of losing their all frozen icebergs", B: "As temperatures in the Arctic invariably get warmer day by day", C: "Since winter temperatures at the North Pole can range from about -43°C to -26°C", D: "Some parts of world are inevitably subjected to abnormally warm temperatures", E: "Even though recent dramatic changes in global warming negatively affect the life across the Arctic" },
        correct: "B",
        dict: { "melts": "erir", "drown": "boğulmak", "starve": "açlıktan ölmek", "forced": "zorlanmak" },
        explanation: `<b>✅ Doğru Cevap: B) As temperatures in the Arctic invariably get warmer day by day</b><br><b>📌 Sebep:</b> Sebep-sonuç. Sıcaklıklar arttıkça (As...), buzlar erir.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A) Because the polar regions...</b> - Bölgelerin olasılıkla yüzleşmesi doğrudan sebep değil.<br><b>C) Since winter temperatures...</b> - Kış sıcaklık aralığı, erime için sebep değil.<br><b>D) Some parts of world...</b> - Dünyanın bazı bölgeleri genel, Arktik özel değil.<br><b>E) Even though recent dramatic changes...</b> - Zıtlık belirtir, sebep değil.`
    },
    {
        id: 37,
        type: "A",
        instruction: "37-42 sorularda, verilen İngilizce cümleye anlamca en yakın Türkçe cümleyi, Türkçe cümleye anlamca en yakın İngilizce cümleyi bulunuz.",                
        text: "To battle the spreading catastrophe, 15,924 men and women, the largest group of fire fighters ever assembled in the nation's history, have come together from points as far away as Alaska and Massachusetts.",
        options: { A: "Yayılan felaketle mücadele eden ve ülke tarihinde bugüne kadar en büyük itfaiyeci grubu olan 15,924 erkek ve kadın, Alaska ve Massachusetts kadar uzak yoldan geldiler.", B: "Ülke tarihindeki en büyük itfaiyeci grubu, 15,924 erkek ve kadın oluşturuldu ve yayılmakta olan felaketle mücadele için, Alaska ve Massachusetts gibi uzak yerlerden geldiler.", C: "15,924 erkek ve kadın, Massachusetts ve Alaska'da, ülkede şimdiye kadar toplanmış en büyük itfaiyeci grubunu oluşturup, uzak noktalara doğru hareket ettiler.", D: "Yayılan felaketle mücadele etmek için, ülke tarihinde bugüne kadar toplanmış en büyük itfaiyeci grubu, 15,924 erkek ve kadın, Alaska ve Massachusetts kadar uzak yerlerden bir araya geldiler.", E: "Yayılan felaketle mücadele için, ülke tarihinde bugüne kadar toplanmış en büyük itfaiyeci grubunu oluşturan yaklaşık 15,924 erkek ve kadın Alaska ve Massachusetts gibi uzak yerlerden geldiler." },
        correct: "D",
        dict: { "catastrophe": "felaket", "assembled": "toplanmış", "battle": "mücadele etmek", "spreading": "yayılan" },
        explanation: `<b>✅ Doğru Cevap: D) Yayılan felaketle mücadele etmek için, ülke tarihinde bugüne kadar toplanmış en büyük itfaiyeci grubu, 15,924 erkek ve kadın, Alaska ve Massachusetts kadar uzak yerlerden bir araya geldiler.</b><br><b>📌 Sebep:</b> 'To battle' (mücadele etmek için) ve 'have come together' (bir araya geldiler) yüklemi tam karşılık buluyor.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> 'Mücadele eden' yanlış çeviri, asıl anlam 'mücadele etmek için'.<br><b>B)</b> 'Oluşturuldu' yanlış, 'assembled' (toplanmış) pasif değil.<br><b>C)</b> 'Massachusetts ve Alaska'da' yanlış, 'from points as far away as' (Alaska ve Massachusetts kadar uzak yerlerden).<br><b>E)</b> 'Yaklaşık' kelimesi orijinal metinde yok.`
    },
    {
        id: 38,
        type: "A",
        instruction: "37-42 sorularda, verilen İngilizce cümleye anlamca en yakın Türkçe cümleyi, Türkçe cümleye anlamca en yakın İngilizce cümleyi bulunuz.",                
        text: "Today most of the people who are over 20 can easily remember those outlandish and futile things this channel used to put on air in the evenings in the past.",
        options: { A: "Bugün yirmi yaşın üstündeki çoğu insan geçmişte akşamları yayınlanan bu tuhaf ve işe yaramaz şeyleri kolaylıkla hatırlayabilir.", B: "Bugün yirmi yaşın üstündeki çoğu insan bu kanalın geçmişte akşamları yayınladığı bu tuhaf ve işe yaramaz şeyleri kolaylıkla hatırlayabilir.", C: "Bugün yirmi yaşındaki çoğu insan bu kanalın eskiden akşamları yayınladığı bu tuhaf ve işe yaramaz şeyleri kolayca hatırlayabilir.", D: "Bugün yirmi yaşın üstündeki insanların tümü bu kanalın geçmişte akşamları yayınladığı bu tuhaf ve işe yaramaz şeyleri kolaylıkla hatırlayabilir.", E: "Bugün yirmi yaşın üstündeki insanları bu kanalın geçmişte akşamları yayınladığı bu tuhaf ve işe yaramaz şeyleri kolaylıkla tanıyabilir." },
        correct: "B",
        dict: { "outlandish": "tuhaf", "futile": "işe yaramaz", "channel": "kanal", "remember": "hatırlamak" },
        explanation: `<b>✅ Doğru Cevap: B) Bugün yirmi yaşın üstündeki çoğu insan bu kanalın geçmişte akşamları yayınladığı bu tuhaf ve işe yaramaz şeyleri kolaylıkla hatırlayabilir.</b><br><b>📌 Sebep:</b> Özne: 'Most of the people who are over 20' (20 yaş üstü çoğu insan). Yüklem: 'can remember' (hatırlayabilir). 'This channel used to put on air' (bu kanalın yayınladığı) doğru çevrilmiş.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> 'Geçmişte akşamları yayınlanan' pasif yapı, orijinal aktif.<br><b>C)</b> 'Yirmi yaşındaki' yanlış, 'over 20' (20 yaş üstü).<br><b>D)</b> 'İnsanların tümü' yanlış, 'most' (çoğu).<br><b>E)</b> 'Tanıyabilir' yanlış, 'remember' (hatırlamak).`
    },
    {
        id: 39,
        type: "A",
        instruction: "37-42 sorularda, verilen İngilizce cümleye anlamca en yakın Türkçe cümleyi, Türkçe cümleye anlamca en yakın İngilizce cümleyi bulunuz.",                
        text: "Most people want to get married and have children not only because they like children but because they also want to leave a trace after them in order to become somehow 'immortal'.",
        options: { A: "Çoğu insan, sadece çocukları sevdiğinden dolayı değil bir şekilde 'ölümsüz' olmak için geride bir iz bırakmak istediğinden dolayı da evlenip çocuk sahibi olmak ister.", B: "Çoğu insan, çocukları sevdiği için veya bir şekilde 'ölümsüz' olmak için evlenip çocuk sahibi olmayı arzu eder.", C: "Birçok kişi çocuk sahibi olmak için evlenmek ister ancak çoğunlukla geride bir iz bırakarak bir şekilde 'ölümsüz' olmaya çalışır.", D: "İnsanların çoğu, çocukları sevdiği için değil bir şekilde 'ölümsüz' olmak ve geride bir iz bırakmak istediği için evlenip çocuk sahibi olmak ister.", E: "İnsanlar, sadece çocukları sevdikleri için değil bir şekilde 'ölümsüz' olmak amacıyla geride bir iz bırakmak istediği için de evlenip çocuk sahibi olur." },
        correct: "A",
        dict: { "immortal": "ölümsüz", "trace": "iz", "married": "evli", "children": "çocuklar" },
        explanation: `<b>✅ Doğru Cevap: A) Çoğu insan, sadece çocukları sevdiğinden dolayı değil bir şekilde 'ölümsüz' olmak için geride bir iz bırakmak istediğinden dolayı da evlenip çocuk sahibi olmak ister.</b><br><b>📌 Sebep:</b> 'Not only because... but because also' (sadece ... değil ... dolayı da) kalıbını en iyi çeviren şık.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B)</b> 'Veya' yanlış, 'not only...but' (sadece değil, aynı zamanda).<br><b>C)</b> 'Ancak çoğunlukla' yanlış, sebep ilişkisi kopmuş.<br><b>D)</b> 'Çocukları sevdiği için değil' yanlış, aslında iki sebep var.<br><b>E)</b> 'İnsanlar' genel, 'most people' (çoğu insan) değil.`
    },
    {
        id: 40,
        type: "A",
        instruction: "37-42 sorularda, verilen İngilizce cümleye anlamca en yakın Türkçe cümleyi, Türkçe cümleye anlamca en yakın İngilizce cümleyi bulunuz.",                
        text: "Eski Roma'da, şarap herkes tarafından tüm yemeklerde ve özel günlerde tüketilen başlıca içecek olarak düşünülürdü ve oldukça ucuzdu.",
        options: { A: "In ancient Rome, wine was a cheap drink, consumed at all meals and occasions by everybody and was sold everywhere.", B: "In ancient Rome, wine was thought to be a major drink to be consumed at all special meals and occasions and was quite inexpensive.", C: "Roman people considered wine to be a main drink, consumed at all dinners and occasions since it was so cheap.", D: "Cheap wine, being consumed at all meals and occasions was a special drink for all ancient Romans.", E: "In ancient Rome, wine was considered a staple drink, consumed at all meals and occasions by everybody and it was fairly cheap." },
        correct: "E",
        dict: { "staple": "temel", "consumed": "tüketilen", "fairly": "oldukça", "ancient": "eski" },
        explanation: `<b>✅ Doğru Cevap: E) In ancient Rome, wine was considered a staple drink, consumed at all meals and occasions by everybody and it was fairly cheap.</b><br><b>📌 Sebep:</b> 'Considered a staple drink' (başlıca içecek olarak düşünülürdü) ve 'was fairly cheap' (oldukça ucuzdu). 'By everybody' (herkes tarafından) doğru çevrilmiş.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> 'Was sold everywhere' (her yerde satılırdı) orijinalde yok.<br><b>B)</b> 'Special meals' (özel yemekler) yanlış, 'all meals' (tüm yemekler).<br><b>C)</b> 'Since it was so cheap' (çok ucuz olduğu için) sebep belirtiyor, orijinalde yok.<br><b>D)</b> 'Cheap wine' (ucuz şarap) vurgusu yanlış, 'wine was cheap' (şarap ucuzdu).`
    },
    {
        id: 41,
        type: "A",
        instruction: "37-42 sorularda, verilen İngilizce cümleye anlamca en yakın Türkçe cümleyi, Türkçe cümleye anlamca en yakın İngilizce cümleyi bulunuz.",                
        text: "Hibrid bir otomobil klasik bir otomobilden daha az petrol tüketmesine rağmen, yine de bataryasının çevreye verdiği zararla ilgili önemli bir sorun var.",
        options: { A: "A hybrid car consumes less petroleum than a conventional car, but there are important issues concerning the environmental damage of its battery.", B: "Even if a conventional car always consumes more petroleum than a hybrid car, there are a lot of worries regarding its being harmful to the environment.", C: "Though a hybrid car consumes less petroleum than a conventional car, there is still an important issue regarding the environmental damage of its battery.", D: "As hybrid cars consume less petroleum than non-hybrid ones and also make less noise, there will be no objections to their frequent use.", E: "Everybody may think hybrid cars to be much better than fossil fuel generated cars, yet there is still an important issue regarding their damage of their batteries." },
        correct: "C",
        dict: { "conventional": "geleneksel", "petroleum": "petrol", "battery": "batarya", "environmental": "çevresel" },
        explanation: `<b>✅ Doğru Cevap: C) Though a hybrid car consumes less petroleum than a conventional car, there is still an important issue regarding the environmental damage of its battery.</b><br><b>📌 Sebep:</b> '...mesine rağmen' (Though) ve 'önemli bir sorun var' (there is still an important issue). 'Regarding the environmental damage of its battery' (bataryasının çevreye verdiği zararla ilgili) doğru çevrilmiş.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> 'But there are important issues' (ama önemli sorunlar var) çoğul, tekil olmalı.<br><b>B)</b> 'Its being harmful' (onun zararlı olması) belirsiz, batarya spesifik değil.<br><b>D)</b> 'There will be no objections' (itiraz olmayacak) yanlış, sorun olduğu söyleniyor.<br><b>E)</b> 'Everybody may think' (herkes düşünebilir) genelleme, orijinalde yok.`
    },
    {
        id: 42,
        type: "A",
        instruction: "37-42 sorularda, verilen İngilizce cümleye anlamca en yakın Türkçe cümleyi, Türkçe cümleye anlamca en yakın İngilizce cümleyi bulunuz.",                
        text: "Nihayetinde günlük hayatın neredeyse her yönünü bir şekilde etkileyen Sanayi Devrimi insanlık tarihinde temel bir dönüm noktası oldu.",
        options: { A: "The Industrial Revolution, which eventually influenced almost every aspect of daily life somehow, turned out to be a major turning point in human history.", B: "The Industrial Revolution eventually influenced almost every aspect of daily life somehow, and was a major turning point in history.", C: "The major turning point in human history was impacted every aspect of daily life somehow, undoubtedly the Industrial Revolution, which ultimately affected almost every aspect of life in some way.", D: "The Industrial Revolution was a turning point in human history, and it definitely had impact on every aspect of daily life.", E: "The Industrial Revolution that influenced almost every aspect of daily life was seen as a major turning point in human history." },
        correct: "A",
        dict: { "turning point": "dönüm noktası", "influenced": "etkiledi", "aspect": "yön", "eventually": "nihayetinde" },
        explanation: `<b>✅ Doğru Cevap: A) The Industrial Revolution, which eventually influenced almost every aspect of daily life somehow, turned out to be a major turning point in human history.</b><br><b>📌 Sebep:</b> Özne 'Sanayi Devrimi' ve relative clause 'which...'. Yüklem 'turned out to be' (oldu). 'Eventually' (nihayetinde) ve 'somehow' (bir şekilde) doğru yerleştirilmiş.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B)</b> İki cümle 'and' ile bağlanmış, relative clause yapısı yok.<br><b>C)</b> Cümle yapısı karmaşık ve anlam kaymış.<br><b>D)</b> 'Definitely had impact' (kesinlikle etkisi oldu) vurgusu farklı.<br><b>E)</b> 'Was seen as' (olarak görüldü) pasif, orijinal aktif 'oldı'.`
    },
    {
        id: 43,
        type: "B",
        instruction: "43-46 soruları aşağıdaki parçaya göre cevaplayınız.",                
        paragraph: "University of Cambridge is an English autonomous institution of higher learning at Cambridge, England, on the River Cam 80 km north of London. The start of the university is generally taken as 1209, when scholars from Oxford migrated to Cambridge to escape Oxford's riots of 'town and gown' (town's people versus scholars). To avert possible troubles, the authorities in Cambridge allowed only scholars under the supervision of a master to remain in the town and the university grew out of the association of these scholars. It is, after the University of Oxford, the second-oldest university in the English-speaking world, and the seventh-oldest globally. In addition to cultural and practical associations as a historic part of British society, the two ancient universities have many common features and thereby are often jointly referred to as Oxbridge. On the other hand, they have a long history of rivalry with each other. Cambridge regularly contends with Oxford for first place in UK league tables. In the most recently published ranking of UK universities, published by The Guardian newspaper, Cambridge was ranked first.",
        text: "It can be inferred from the passage that Oxford University ----.",
        options: { "A": "was the only educational institution where riots of 'town and gown' took place", "B": "is the second-oldest university in Europe and the seventh-oldest in the world", "C": "was the home to riots between the residents of the town and the scholars", "D": "isn't essentially akin to the University of Cambridge and follows a better curriculum", "E": "has the longest history among the universities in both the United Kingdom and the English-speaking world" },
        correct: "E",
        dict: { "riots": "isyanlar", "scholars": "akademisyenler", "longest": "en uzun", "inferred": "çıkarım yapılmak" },
        explanation: "<b> ✅  Doğru Cevap: E) has the longest history among the universities in both the United Kingdom and the English-speaking world</b><br><b> 📌  Sebep:</b> Parçada Cambridge Üniversitesi için 'Oxford Üniversitesi'nden sonra İngilizce konuşulan dünyadaki en eski ikinci üniversitedir' (after the University of Oxford, the second-oldest) ifadesi geçmektedir. Eğer Cambridge, Oxford'dan sonra ikinciyse, bu durum Oxford'un birinci (en eski/en uzun tarihe sahip) olduğu anlamına gelir.<br><br><b> ❌  Diğer Seçenekler:</b><br><b>C)</b> Oxford'da isyanlar olduğu doğru bir bilgi olsa da, E seçeneğindeki kıyaslama ve çıkarım (inference) parça geneline dayalı daha güçlü ve kapsayıcı bir yargıdır."
    },
    {
        id: 44,
        type: "B",
        instruction: "43-46 soruları aşağıdaki parçaya göre cevaplayınız.",                
        paragraph: "University of Cambridge is an English autonomous institution of higher learning at Cambridge, England, on the River Cam 80 km north of London. The start of the university is generally taken as 1209, when scholars from Oxford migrated to Cambridge to escape Oxford's riots of 'town and gown' (town's people versus scholars). To avert possible troubles, the authorities in Cambridge allowed only scholars under the supervision of a master to remain in the town and the university grew out of the association of these scholars. It is, after the University of Oxford, the second-oldest university in the English-speaking world, and the seventh-oldest globally. In addition to cultural and practical associations as a historic part of British society, the two ancient universities have many common features and thereby are often jointly referred to as Oxbridge. On the other hand, they have a long history of rivalry with each other. Cambridge regularly contends with Oxford for first place in UK league tables. In the most recently published ranking of UK universities, published by The Guardian newspaper, Cambridge was ranked first.",
        text: "The main reason why these two ancient universities are often referred to as Oxbridge is that ----.",
        options: { A: "there are cultural links between them and they exhibit a number of similar characteristics", B: "the aims of those who founded them were quite similar to each other", C: "British society takes them as the base of its cultural and practical life", D: "it was the scholars from Oxford who founded the University of Cambridge", E: "they have a long history of contention with each other" },
        correct: "A",
        dict: { "exhibit": "sergilemek", "characteristics": "özellikler", "jointly": "birlikte", "associations": "bağlantılar" },
        explanation: `<b>✅ Doğru Cevap: A) there are cultural links between them and they exhibit a number of similar characteristics</b><br><b>📌 Sebep:</b> Ortak özellikler (common features / similar characteristics) ve kültürel bağlar (cultural associations).<br><br><b>❌ Diğer Seçenekler:</b><br><b>B)</b> Kurucuların amaçlarından bahsedilmiyor.<br><b>C)</b> 'Base of its cultural and practical life' (kültürel ve pratik yaşamın temeli) abartılı.<br><b>D)</b> Oxford'dan gelen akademisyenler Cambridge'i kurdu ama bu Oxbridge teriminin tek sebebi değil.<br><b>E)</b> Rekabet (contention) bir sebep değil.`
    },
    {
        id: 45,
        type: "B",
        instruction: "43-46 soruları aşağıdaki parçaya göre cevaplayınız.",                
        paragraph: "University of Cambridge is an English autonomous institution of higher learning at Cambridge, England, on the River Cam 80 km north of London. The start of the university is generally taken as 1209, when scholars from Oxford migrated to Cambridge to escape Oxford's riots of 'town and gown' (town's people versus scholars). To avert possible troubles, the authorities in Cambridge allowed only scholars under the supervision of a master to remain in the town and the university grew out of the association of these scholars. It is, after the University of Oxford, the second-oldest university in the English-speaking world, and the seventh-oldest globally. In addition to cultural and practical associations as a historic part of British society, the two ancient universities have many common features and thereby are often jointly referred to as Oxbridge. On the other hand, they have a long history of rivalry with each other. Cambridge regularly contends with Oxford for first place in UK league tables. In the most recently published ranking of UK universities, published by The Guardian newspaper, Cambridge was ranked first.",
        text: "According to the passage, scholars from Oxford ----.",
        options: { A: "shared many common characteristics with their counterparts in Cambridge", B: "left their town with the aim of keeping themselves away from the upheaval there", C: "moved to Cambridge to take part in rebellions spreading from Oxford", D: "took on the supervision of masters in the town", E: "made up the skeleton of the new university in Cambridge but they were still not mentioned in its history" },
        correct: "B",
        dict: { "upheaval": "kargaşa", "migrated": "göç etti", "escape": "kaçmak", "riots": "isyanlar" },
        explanation: `<b>✅ Doğru Cevap: B) left their town with the aim of keeping themselves away from the upheaval there</b><br><b>📌 Sebep:</b> İsyanlardan (riots/upheaval) uzak durmak için şehri terk ettiler.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Ortak özelliklerden bahsedilmiyor.<br><b>C)</b> İsyana katılmak için değil, kaçmak için gittiler.<br><b>D)</b> Üstatların denetimini üstlenmediler, denetim altında kaldılar.<br><b>E)</b> 'Not mentioned in its history' (tarihinde bahsedilmedi) yanlış, bahsediliyor.`
    },
    {
        id: 46,
        type: "B",
        instruction: "43-46 soruları aşağıdaki parçaya göre cevaplayınız.",                
        paragraph: "University of Cambridge is an English autonomous institution of higher learning at Cambridge, England, on the River Cam 80 km north of London. The start of the university is generally taken as 1209, when scholars from Oxford migrated to Cambridge to escape Oxford's riots of 'town and gown' (town's people versus scholars). To avert possible troubles, the authorities in Cambridge allowed only scholars under the supervision of a master to remain in the town and the university grew out of the association of these scholars. It is, after the University of Oxford, the second-oldest university in the English-speaking world, and the seventh-oldest globally. In addition to cultural and practical associations as a historic part of British society, the two ancient universities have many common features and thereby are often jointly referred to as Oxbridge. On the other hand, they have a long history of rivalry with each other. Cambridge regularly contends with Oxford for first place in UK league tables. In the most recently published ranking of UK universities, published by The Guardian newspaper, Cambridge was ranked first.",
        text: "As it is clearly stated in the passage, University of Cambridge ----.",
        options: { A: "serves as the second biggest higher level education organization all over the world", B: "is an English-medium university but because it is international anybody from any country can take education there", C: "has a great history dating back to the foundation of its life-long rival, Oxford University", D: "is a self-governing body and offers higher education", E: "is located in a strategically important region but vulnerable to any outside effect, like riots in the neighbor towns" },
        correct: "D",
        dict: { "self-governing": "özerk", "higher education": "yüksek öğrenim", "located": "konumlanmış", "rival": "rakip" },
        explanation: `<b>✅ Doğru Cevap: D) is a self-governing body and offers higher education</b><br><b>📌 Sebep:</b> Parçada 'English autonomous institution of higher learning' (özerk yüksek öğrenim kurumu) geçiyor.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> 'Second biggest' (ikinci en büyük) denmiyor.<br><b>B)</b> 'International' ve 'anybody from any country' denmiyor.<br><b>C)</b> 'Dating back to the foundation of Oxford' (Oxford'un kuruluşuna dayanan) yanlış, 1209'da kurulmuş.<br><b>E)</b> 'Strategically important region' (stratejik önemli bölge) ve 'vulnerable' (savunmasız) denmiyor.`
    },
    {
        id: 47,
        type: "B",
        instruction: "47-50 soruları aşağıdaki parçaya göre cevaplayınız.",                
        paragraph: "Whole grain bread is strongly recommended as part of a healthy diet, but children and pre-teens don't always eat them. Researchers from the department of food science and nutrition conducted a study to monitor how much bread students threw away, and whether that amount increased as the percentage of whole-grain flour in the bread and rolls was gradually increased. The study included meals fed to kindergartners through sixth-graders at elementary schools over the course of a school year. Red and white whole-grain flour was added incrementally to products, but students showed no strong preference for either type of flour. Students didn't throw away more bread products until the percentage of whole-grain flour in the bread and rolls reached about 70 percent. The research is important because it shows that a gradual approach to improving children's overall diets can sometimes be successful and beneficial both for parents and school food-service workers, said Len Marquart, one of the study's authors and an associate professor.",
        text: "According to the passage, despite the strong recommendation of whole grain bread for a healthy diet, ----.",
        options: { A: "all parents, aware of the benefits of a healthy diet for their kids, must include such bread into their diet", B: "no matter what type of bread they were given, school children always threw away bread", C: "it seems that children and pre-teens do not care much about such an advice and as a result they prefer not to consume it as part of their diet", D: "few researchers have been able to manage to make students consume whole-grain bread as a major part of their diet", E: "students did not eat more bread products till the percentage of whole-grain flour in the bread got to seventy percent" },
        correct: "C",
        dict: { "recommended": "önerilen", "pre-teens": "ergenlik öncesi", "diet": "diyet", "consumed": "tüketmek" },
        explanation: `<b>✅ Doğru Cevap: C) it seems that children and pre-teens do not care much about such an advice and as a result they prefer not to consume it as part of their diet</b><br><b>📌 Sebep:</b> Çocuklar bu tavsiyeyi pek umursamıyor ve yemiyorlar. Parçanın ilk cümlesi bunu söylüyor.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> 'All parents must include' (tüm ebeveynler eklemeli) zorunluluk belirtiyor, parçada yok.<br><b>B)</b> 'Always threw away bread' (her zaman ekmek attı) yanlış, %70'e kadar atmadılar.<br><b>D)</b> 'Few researchers' (birkaç araştırmacı) başarısızlıktan bahsetmiyor.<br><b>E)</b> 'Did not eat more' (daha fazla yemedi) yanlış, 'did not throw away more' (daha fazla atmadı).`
    },
    {
        id: 48,
        type: "B",
        instruction: "47-50 soruları aşağıdaki parçaya göre cevaplayınız.",                
        paragraph: "Whole grain bread is strongly recommended as part of a healthy diet, but children and pre-teens don't always eat them. Researchers from the department of food science and nutrition conducted a study to monitor how much bread students threw away, and whether that amount increased as the percentage of whole-grain flour in the bread and rolls was gradually increased. The study included meals fed to kindergartners through sixth-graders at elementary schools over the course of a school year. Red and white whole-grain flour was added incrementally to products, but students showed no strong preference for either type of flour. Students didn't throw away more bread products until the percentage of whole-grain flour in the bread and rolls reached about 70 percent. The research is important because it shows that a gradual approach to improving children's overall diets can sometimes be successful and beneficial both for parents and school food-service workers, said Len Marquart, one of the study's authors and an associate professor.",
        text: "One of the main aims of the study was to determine ----.",
        options: { A: "which grade, from kindergarteners to sixth-graders, was the best for school kids to be nourished with whole grain bread", B: "whether elementary schools were appropriate for carrying such crucial studies on young learners' diet habits", C: "the most appropriate age at which whole grain bread should be included in children and pre-teens' daily meals", D: "how often parents and school food-service workers should include red and white whole-grain flour into their bread to improve their overall diets", E: "how the gradual increase in the amount of whole-grain flour in the bread and rolls affected students' attitudes towards the bread" },
        correct: "E",
        dict: { "gradual": "kademeli", "attitudes": "tutumlar", "determine": "belirlemek", "increase": "artış" },
        explanation: `<b>✅ Doğru Cevap: E) how the gradual increase in the amount of whole-grain flour in the bread and rolls affected students' attitudes towards the bread</b><br><b>📌 Sebep:</b> Un oranı kademeli artınca öğrencilerin tutumunun (atılan ekmek miktarının) değişip değişmediğini görmek.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Hangi sınıfın en iyi olduğu araştırılmamış.<br><b>B)</b> Okulların uygunluğu test edilmemiş.<br><b>C)</b> En uygun yaş araştırılmamış.<br><b>D)</b> Ne sıklıkla eklenmesi gerektiği araştırılmamış.`
    },
    {
        id: 49,
        type: "B",
        instruction: "47-50 soruları aşağıdaki parçaya göre cevaplayınız.",                
        paragraph: "Whole grain bread is strongly recommended as part of a healthy diet, but children and pre-teens don't always eat them. Researchers from the department of food science and nutrition conducted a study to monitor how much bread students threw away, and whether that amount increased as the percentage of whole-grain flour in the bread and rolls was gradually increased. The study included meals fed to kindergartners through sixth-graders at elementary schools over the course of a school year. Red and white whole-grain flour was added incrementally to products, but students showed no strong preference for either type of flour. Students didn't throw away more bread products until the percentage of whole-grain flour in the bread and rolls reached about 70 percent. The research is important because it shows that a gradual approach to improving children's overall diets can sometimes be successful and beneficial both for parents and school food-service workers, said Len Marquart, one of the study's authors and an associate professor.",
        text: "According to Len Marquart, ----.",
        options: { A: "children's overall diets constantly need to be improved through meals full of bread made from red and white whole-grain flour", B: "it was right to conduct study with kindergartners through sixth-graders of two elementary schools during a whole year of education", C: "school food-service staff and parents alike may at times benefit from a progressive approach for making children's diets better", D: "the study was conducted by experienced and qualified researchers from the department of food science and nutrition", E: "not only parents but also school cooks should be included in the research for improving children's overall diets" },
        correct: "C",
        dict: { "progressive": "ilerici", "beneficial": "faydalı", "approach": "yaklaşım", "improving": "iyileştirmek" },
        explanation: `<b>✅ Doğru Cevap: C) school food-service staff and parents alike may at times benefit from a progressive approach for making children's diets better</b><br><b>📌 Sebep:</b> Kademeli yaklaşımın (progressive approach) ebeveyn ve personel için faydalı (benefit) olabileceği.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> 'Constantly need to be improved' (sürekli iyileştirilmeli) ve 'meals full of bread' (ekmek dolu yemekler) abartı.<br><b>B)</b> 'It was right' (doğruydu) yargısı verilmemiş.<br><b>D)</b> Araştırmacıların niteliklerinden bahsedilmemiş.<br><b>E)</b> Okul aşçılarının araştırmaya dahil edilmesinden bahsedilmemiş.`
    },
    {
        id: 50,
        type: "B",
        instruction: "47-50 soruları aşağıdaki parçaya göre cevaplayınız.",                
        paragraph: "Whole grain bread is strongly recommended as part of a healthy diet, but children and pre-teens don't always eat them. Researchers from the department of food science and nutrition conducted a study to monitor how much bread students threw away, and whether that amount increased as the percentage of whole-grain flour in the bread and rolls was gradually increased. The study included meals fed to kindergartners through sixth-graders at elementary schools over the course of a school year. Red and white whole-grain flour was added incrementally to products, but students showed no strong preference for either type of flour. Students didn't throw away more bread products until the percentage of whole-grain flour in the bread and rolls reached about 70 percent. The research is important because it shows that a gradual approach to improving children's overall diets can sometimes be successful and beneficial both for parents and school food-service workers, said Len Marquart, one of the study's authors and an associate professor.",
        text: "The result of the study stated in the passage shows that ----.",
        options: { A: "an addition of red and white whole-grain flour to products, as long as kept below 70 percent, doesn't result in more bread thrown away by students", B: "quite a long period of research is required for a functional outcome to come to an ultimate decision on the reason why teenagers throw less or more bread products", C: "parents rather than school food-service workers are successful in improving children's diets through whole-grain bread", D: "elementary school children are not good subjects for such studies in terms of getting reliable results", E: "parents should always keep in touch with the school food-service staff to decide whether red or white whole-grain flour must be included in children's diets" },
        correct: "A",
        dict: { "thrown away": "atılmış", "addition": "ekleme", "result": "sonuç", "products": "ürünler" },
        explanation: `<b>✅ Doğru Cevap: A) an addition of red and white whole-grain flour to products, as long as kept below 70 percent, doesn't result in more bread thrown away by students</b><br><b>📌 Sebep:</b> %70'in altında kaldığı sürece daha fazla ekmek atılmadığı sonucu çıkıyor.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B)</b> Uzun süreli araştırma gerektiği söylenmiyor.<br><b>C)</b> Ebeveynlerin daha başarılı olduğu söylenmiyor.<br><b>D)</b> İlkokul çocuklarının uygun olmadığı söylenmiyor.<br><b>E)</b> Ebeveynlerin personelle iletişim kurması gerektiği söylenmiyor.`
    },
    {
        id: 51,
        type: "B",
        instruction: "51-54 soruları aşağıdaki parçaya göre cevaplayınız.",                
        paragraph: "Sunbathing is a popular leisure activity in which a person sits or lies in direct sunshine. Many people with pale or brownish skin sunbathe to darken their skin color (get a sun tan) as this is considered in some cultures to be good-looking, associated with outdoor activities, vacations and health. Some people prefer naked sunbathing so that an 'all-over' or 'even' tan can be obtained, sometimes as part of a specific lifestyle. For people suffering from some diseases like psoriasis, sunbathing may be an effective and possibly cheaper way of healing the symptoms. People often sunbathe in comfortable places where there is plenty of sunlight. Some common places for sunbathing include beaches, open air swimming pools, parks, gardens, and sidewalk cafés. Sunbathers typically wear limited amounts of clothing or some simply go nude. For some, an alternative to sunbathing is the use of a sun bed that generates ultraviolet light and can be used indoors regardless of outdoor weather conditions and amount of sunlight. However, the tan gradually disappears with time, when one is no longer exposed to these sources.",
        text: "According to the passage, ----.",
        options: { A: "a lot of people with a pale or brownish skin sunbathe only in direct sun light to darken their skin color", B: "it is considered better for those who don't have a pale or brownish skin to sit inside instead of in direct sunshine", C: "the best place for people to sunbathe and darken their skin colour is a beach rich in long days of sun lights", D: "sunbathing might be an inexpensive but successful way to cure some disorders", E: "people who want to get beauty through sunbathing always get dressed in a limited quantity or simply go nude during the day" },
        correct: "D",
        dict: { "inexpensive": "ucuz", "disorders": "bozukluklar", "psoriasis": "sedef hastalığı", "symptoms": "belirtiler" },
        explanation: `<b>✅ Doğru Cevap: D) sunbathing might be an inexpensive but successful way to cure some disorders</b><br><b>📌 Sebep:</b> Psoriasis için 'cheaper way of healing' (daha ucuz iyileştirme yolu) = inexpensive cure.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> 'Only in direct sun light' (sadece doğrudan güneş ışığında) yanlış, sun bed alternatifi var.<br><b>b) it is considered better...</b> - Açık tenliler için daha iyi olduğu söylenmiyor.<br><b>C) the best place...</b> - En iyi yer belirtilmemiş.<br><b>E) always get dressed...</b> - 'Always' (her zaman) kesinlik ifadesi yanlış.`
    },
    {
        id: 52,
        type: "B",
        instruction: "51-54 soruları aşağıdaki parçaya göre cevaplayınız.",                
        paragraph: "Sunbathing is a popular leisure activity in which a person sits or lies in direct sunshine. Many people with pale or brownish skin sunbathe to darken their skin color (get a sun tan) as this is considered in some cultures to be good-looking, associated with outdoor activities, vacations and health. Some people prefer naked sunbathing so that an 'all-over' or 'even' tan can be obtained, sometimes as part of a specific lifestyle. For people suffering from some diseases like psoriasis, sunbathing may be an effective and possibly cheaper way of healing the symptoms. People often sunbathe in comfortable places where there is plenty of sunlight. Some common places for sunbathing include beaches, open air swimming pools, parks, gardens, and sidewalk cafés. Sunbathers typically wear limited amounts of clothing or some simply go nude. For some, an alternative to sunbathing is the use of a sun bed that generates ultraviolet light and can be used indoors regardless of outdoor weather conditions and amount of sunlight. However, the tan gradually disappears with time, when one is no longer exposed to these sources.",
        text: "As stated in the passage, a good few people sunbathe to darken their skin color, ----.",
        options: { A: "since it is a good and also cheap way for someone to be beautiful and thus draw others' attention", B: "though they have other better free-time activities to do on a sunny day", C: "but most women feel more beautiful when they have a tanned skin through direct sun light", D: "as in some countries people with sun tan are considered to be far more healthier than others", E: "because it is sometimes thought to make people look beautiful" },
        correct: "E",
        dict: { "good-looking": "güzel", "tanned": "bronzlaşmış", "cultures": "kültürler", "considered": "düşünülmek" },
        explanation: `<b>✅ Doğru Cevap: E) because it is sometimes thought to make people look beautiful</b><br><b>📌 Sebep:</b> Güzel görünmek (look beautiful) için bronzlaşırlar.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> 'Cheap way' (ucuz yol) ve 'draw others' attention' (dikkat çekmek) ekstra.<br><b>B)</b> 'Better free-time activities' (daha iyi boş zaman aktiviteleri) bahsedilmiyor.<br><b>C)</b> 'Most women' (çoğu kadın) cinsiyet ayrımı yapılmamış.<br><b>D)</b> 'Far more healthier' (çok daha sağlıklı) abartı, 'associated with health' (sağlıkla ilişkilendirilir) deniyor.`
    },
    {
        id: 53,
        type: "B",
        instruction: "51-54 soruları aşağıdaki parçaya göre cevaplayınız.",                
        paragraph: "Sunbathing is a popular leisure activity in which a person sits or lies in direct sunshine. Many people with pale or brownish skin sunbathe to darken their skin color (get a sun tan) as this is considered in some cultures to be good-looking, associated with outdoor activities, vacations and health. Some people prefer naked sunbathing so that an 'all-over' or 'even' tan can be obtained, sometimes as part of a specific lifestyle. For people suffering from some diseases like psoriasis, sunbathing may be an effective and possibly cheaper way of healing the symptoms. People often sunbathe in comfortable places where there is plenty of sunlight. Some common places for sunbathing include beaches, open air swimming pools, parks, gardens, and sidewalk cafés. Sunbathers typically wear limited amounts of clothing or some simply go nude. For some, an alternative to sunbathing is the use of a sun bed that generates ultraviolet light and can be used indoors regardless of outdoor weather conditions and amount of sunlight. However, the tan gradually disappears with time, when one is no longer exposed to these sources.",
        text: "As it is clear in the passage, the advantage of sun bed is that ----.",
        options: { A: "those who want to get a great sun tan but don't like to be outdoor can get one for free", B: "you can get a sun tan through it whenever you want no matter how the weather is outside", C: "it is quite affordable for those who cannot meet the expense of a holiday by the sea but want to sunbathe and have a tanned skin", D: "direct sun lights are not always healthy and carry the possibility of causing such health problems as skin cancer", E: "it provides the users with the opportunity of getting a sun tan which does not easily fade away while the time passes" },
        correct: "B",
        dict: { "regardless": "bakılmaksızın", "advantage": "avantaj", "whenever": "ne zaman istersen", "affordable": "karşılanabilir" },
        explanation: `<b>✅ Doğru Cevap: B) you can get a sun tan through it whenever you want no matter how the weather is outside</b><br><b>📌 Sebep:</b> Hava durumuna bakılmaksızın (no matter how the weather is) kullanılabilmesi.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> 'For free' (ücretsiz) denmiyor.<br><b>C)</b> 'Quite affordable' (oldukça karşılanabilir) denmiyor, sadece 'cheaper' denebilir.<br><b>D)</b> Güneş ışığının sağlıksız olması avantaj değil.<br><b>E)</b> 'Does not easily fade away' (kolayca solmaz) yanlış, bronzluk zamanla kaybolur.`
    },
    {
        id: 54,
        type: "B",
        instruction: "51-54 soruları aşağıdaki parçaya göre cevaplayınız.",                
        paragraph: "Sunbathing is a popular leisure activity in which a person sits or lies in direct sunshine. Many people with pale or brownish skin sunbathe to darken their skin color (get a sun tan) as this is considered in some cultures to be good-looking, associated with outdoor activities, vacations and health. Some people prefer naked sunbathing so that an 'all-over' or 'even' tan can be obtained, sometimes as part of a specific lifestyle. For people suffering from some diseases like psoriasis, sunbathing may be an effective and possibly cheaper way of healing the symptoms. People often sunbathe in comfortable places where there is plenty of sunlight. Some common places for sunbathing include beaches, open air swimming pools, parks, gardens, and sidewalk cafés. Sunbathers typically wear limited amounts of clothing or some simply go nude. For some, an alternative to sunbathing is the use of a sun bed that generates ultraviolet light and can be used indoors regardless of outdoor weather conditions and amount of sunlight. However, the tan gradually disappears with time, when one is no longer exposed to these sources.",
        text: "It is emphasized in the passage that the tan step by step vanishes ----.",
        options: { A: "since sunbathers lie or sit under direct sun lights nude or don't wear enough amount of clothing", B: "when the sun bed as an alternative way of sunbathing is used outdoor with sun light", C: "as people prefer naked sunbathing as part of a lifestyle for an 'all-over' or 'even' tan", D: "right after people get over their health problems and find other leisure activities", E: "as a consequence of lack of resources essential for getting a proper sun tan" },
        correct: "E",
        dict: { "vanishes": "yok olur", "exposed": "maruz kalmak", "resources": "kaynaklar", "gradually": "yavaş yavaş" },
        explanation: `<b>✅ Doğru Cevap: E) as a consequence of lack of resources essential for getting a proper sun tan</b><br><b>📌 Sebep:</b> Kaynaklara maruz kalınmadığında (lack of resources/sources) yok olur.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Çıplaklık veya kıyafet miktarı ile ilgisi yok.<br><b>B)</b> Sun bed'in dışarıda kullanılması değil.<br><b>C)</b> Çıplak güneşlenme tercihi ile ilgisi yok.<br><b>D)</b> Sağlık problemleri atlatıldıktan sonra değil.`
    },
    {
        id: 55,
        type: "B",
        instruction: "55-58 soruları aşağıdaki parçaya göre cevaplayınız.",                
        paragraph: "Socialized medical systems are primarily designed to eliminate the insurance industry while providing health care for all. According to many recent studies, socialized systems outperform free-market profit-driven systems in terms of availability, quality and cost of health care. For example, a report from the Johns Hopkins University - Bloomberg School of Public Health stated that the United Kingdom's socialized medical system outperforms the U.S. free-market system in patient-reported perceptions. In other words, the people with direct experiences report greater satisfaction with their health services under a socialized system than they do in a free-market system. These results must be considered along with the fact that the U.S. per capita health care expenditures ($4,887) are nearly triple those in the United Kingdom ($1,992). In the year 2000 the United States spent 44 percent more on health care than Switzerland, the nation with the next highest per capita health care costs. Nevertheless, Americans had fewer physician visits, and hospital stays were shorter compared with those in most other industrialized nations. The study suggests that the difference in spending is caused mostly by higher prices for health care goods and services in the United States.",
        text: "One understands from the passage that the main purpose of socialized medical systems is to ----.",
        options: { A: "make some profit from the insurance policies by which one's life or property is guaranteed against any damage or loss", B: "indiscriminately help insurance companies cope with the expensive burden of providing health care for all", C: "do away with the insurance industry and make it possible for everyone to get health care", D: "make clear the differences between private insurance companies and state-owned medical systems", E: "prove that insurance policies are all profit-driven" },
        correct: "C",
        dict: { "do away with": "kaldırmak", "insurance": "sigorta", "provide": "sağlamak", "eliminate": "ortadan kaldırmak" },
        explanation: `<b>✅ Doğru Cevap: C) do away with the insurance industry and make it possible for everyone to get health care</b><br><b>📌 Sebep:</b> Sigorta endüstrisini kaldırmak (eliminate/do away with) ve herkese sağlık sağlamak.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Kar elde etmek değil, aksine sigortayı kaldırmak.<br><b>B)</b> Sigorta şirketlerine yardım etmek değil, ortadan kaldırmak.<br><b>D)</b> Farkları açıklamak değil, sosyalize sistemi tanıtmak.<br><b>E)</b> Sigorta politikalarının kar odaklı olduğunu kanıtlamak değil.`
    },
    {
        id: 56,
        type: "B",
        instruction: "55-58 soruları aşağıdaki parçaya göre cevaplayınız.",                
        paragraph: "Socialized medical systems are primarily designed to eliminate the insurance industry while providing health care for all. According to many recent studies, socialized systems outperform free-market profit-driven systems in terms of availability, quality and cost of health care. For example, a report from the Johns Hopkins University - Bloomberg School of Public Health stated that the United Kingdom's socialized medical system outperforms the U.S. free-market system in patient-reported perceptions. In other words, the people with direct experiences report greater satisfaction with their health services under a socialized system than they do in a free-market system. These results must be considered along with the fact that the U.S. per capita health care expenditures ($4,887) are nearly triple those in the United Kingdom ($1,992). In the year 2000 the United States spent 44 percent more on health care than Switzerland, the nation with the next highest per capita health care costs. Nevertheless, Americans had fewer physician visits, and hospital stays were shorter compared with those in most other industrialized nations. The study suggests that the difference in spending is caused mostly by higher prices for health care goods and services in the United States.",
        text: "According to the report from the Johns Hopkins University, ----.",
        options: { A: "people in the UK are content with what they receive from a socialized health system", B: "those who are pleased with socialized health systems are mostly living in the United Kingdom", C: "in the U.S., per capita health care costs are between $4,887 and $1,992", D: "socialized medical systems are aimed to provide health care for everybody", E: "the U.S. health system, compared to the United Kingdom's, turns out to do much better" },
        correct: "A",
        dict: { "content": "memnun", "perceptions": "algılar", "outperforms": "daha iyi performans gösterir", "satisfaction": "memnuniyet" },
        explanation: `<b>✅ Doğru Cevap: A) people in the UK are content with what they receive from a socialized health system</b><br><b>📌 Sebep:</b> UK halkı sistemden daha memnun (outperforms in perceptions/satisfaction).<br><br><b>❌ Diğer Seçenekler:</b><br><b>B)</b> 'Mostly living in the United Kingdom' (çoğunlukla UK'de yaşayan) genelleme yanlış.<br><b>C)</b> ABD'de $4,887, UK'de $1,992, arasında değil.<br><b>D)</b> Sosyalize sistemlerin amacı doğru ama bu raporun sonucu değil.<br><b>E)</b> ABD sistemi daha iyi değil, daha kötü.`
    },
    {
        id: 57,
        type: "B",
        instruction: "55-58 soruları aşağıdaki parçaya göre cevaplayınız.",                
        paragraph: "Socialized medical systems are primarily designed to eliminate the insurance industry while providing health care for all. According to many recent studies, socialized systems outperform free-market profit-driven systems in terms of availability, quality and cost of health care. For example, a report from the Johns Hopkins University - Bloomberg School of Public Health stated that the United Kingdom's socialized medical system outperforms the U.S. free-market system in patient-reported perceptions. In other words, the people with direct experiences report greater satisfaction with their health services under a socialized system than they do in a free-market system. These results must be considered along with the fact that the U.S. per capita health care expenditures ($4,887) are nearly triple those in the United Kingdom ($1,992). In the year 2000 the United States spent 44 percent more on health care than Switzerland, the nation with the next highest per capita health care costs. Nevertheless, Americans had fewer physician visits, and hospital stays were shorter compared with those in most other industrialized nations. The study suggests that the difference in spending is caused mostly by higher prices for health care goods and services in the United States.",
        text: "As stated in the text, although America's per capita health care expenditures were much more than other developed countries', ----.",
        options: { "A": "better health care standards can be achieved through larger budgets", "B": "Switzerland had higher per capita health costs", "C": "it doesn't necessarily mean that America offers better health service than the UK", "D": "doctors are few in numbers and hence people stay at hospitals for lengthened periods", "E": "it had fewer physicians to be visited at hospitals that provides shorter stays" },
        correct: "C",
        dict: { "expenditures": "harcamalar", "necessarily": "muhakkak/ille de", "offers": "sunar", "outperforms": "daha iyi performans gösterir" },
        explanation: "<b> ✅  Doğru Cevap: C) it doesn't necessarily mean that America offers better health service than the UK</b><br><b> 📌  Sebep:</b> Soru kökü 'Amerika'nın harcamaları çok daha fazla olmasına rağmen...' (although) şeklinde başlıyor. Parçada, ABD'nin daha fazla harcama yapmasına karşın, İngiltere'deki sistemin hasta memnuniyeti açısından ABD'den daha iyi performans gösterdiği belirtiliyor. Bu zıtlık, C şıkkındaki 'daha fazla para harcanması, ABD'nin İngiltere'den daha iyi hizmet sunduğu anlamına gelmez' yargısını doğrular.<br><br><b> ❌  Diğer Seçenekler:</b><br><b>E)</b> Parçada 'Americans had fewer physician visits' (daha az doktor ziyareti) ifadesi geçse de, C şıkkı 'although' (rağmen) bağlacının gerektirdiği 'harcama vs. kalite' zıtlığını ana fikir olarak daha iyi tamamlar."
    },
    {
        id: 58,
        type: "B",
        instruction: "55-58 soruları aşağıdaki parçaya göre cevaplayınız.",                
        paragraph: "Socialized medical systems are primarily designed to eliminate the insurance industry while providing health care for all. According to many recent studies, socialized systems outperform free-market profit-driven systems in terms of availability, quality and cost of health care. For example, a report from the Johns Hopkins University - Bloomberg School of Public Health stated that the United Kingdom's socialized medical system outperforms the U.S. free-market system in patient-reported perceptions. In other words, the people with direct experiences report greater satisfaction with their health services under a socialized system than they do in a free-market system. These results must be considered along with the fact that the U.S. per capita health care expenditures ($4,887) are nearly triple those in the United Kingdom ($1,992). In the year 2000 the United States spent 44 percent more on health care than Switzerland, the nation with the next highest per capita health care costs. Nevertheless, Americans had fewer physician visits, and hospital stays were shorter compared with those in most other industrialized nations. The study suggests that the difference in spending is caused mostly by higher prices for health care goods and services in the United States.",
        text: "We understand from the passage that ----.",
        options: { A: "to be effective and satisfactory, a medical system doesn't have to be costly", B: "the more you pay for a health care service the better results you get", C: "people residing in the United Kingdom are healthier and happier than Americans", D: "Americans' health insurance policies are more expensive but better", E: "socialized medical systems aren't so effective as free-market profit-driven ones" },
        correct: "A",
        dict: { "costly": "pahalı", "effective": "etkili", "satisfactory": "tatmin edici", "outperform": "daha iyi performans göstermek" },
        explanation: `<b>✅ Doğru Cevap: A) to be effective and satisfactory, a medical system doesn't have to be costly</b><br><b>📌 Sebep:</b> Pahalı sistem (ABD) daha kötü sonuç veriyor, demek ki iyi olmak için pahalı olmak şart değil.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B)</b> Daha fazla ödeme daha iyi sonuç anlamına gelmiyor, aksine.<br><b>C)</b> UK sakinlerinin daha sağlıklı ve mutlu olduğu söylenmiyor, sadece sağlık sisteminden memnunlar.<br><b>D)</b> ABD sigorta politikalarının daha iyi olduğu söylenmiyor.<br><b>E)</b> Sosyalize sistemler daha etkili.`
    },
    {
        id: 59,
        type: "B",
        instruction: "59-62 soruları aşağıdaki parçaya göre cevaplayınız.",                
        paragraph: "The Young Ottomans were a secret organization of Ottoman nationalist intellectuals formed in 1865, influenced by such Western thinkers as Montesquieu and Rousseau and necessarily the French Revolution. A forerunner of other Turkish nationalist groups, the Young Ottomans favored converting the Turkish-dominated multinational Ottoman Empire into a more purely Turkish state and called for the creation of a constitutional government. By 1867 the Young Ottomans had expanded from the original 6 members to 245, including the noted poets Namık Kemal and Ziya Paşa. They were further supported financially and materially by the Egyptian prince Mustafa Fazıl and had attracted the attention of the Ottoman princes Murad and Abdülhamid.",
        text: "We understand from the passage that French Revolution ----.",
        options: { A: "had in fact almost nothing to do with such an organization developed within Ottoman Empire", B: "undoubtedly brought equality, citizenship and inalienable rights all over the world", C: "played an important role in the creation of the Young Ottomans", D: "was primarily performed by Western thinkers living within Ottoman Empire", E: "was a period of radical, social and political upheavals in France" },
        correct: "C",
        dict: { "creation": "yaratılış", "influenced": "etkilenmiş", "thinkers": "düşünürler", "organization": "örgüt" },
        explanation: `<b>✅ Doğru Cevap: C) played an important role in the creation of the Young Ottomans</b><br><b>📌 Sebep:</b> Genç Osmanlılar, Fransız Devrimi'nden etkilenmiştir (influenced by).<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Hiçbir ilgisi yok deniyor, yanlış.<br><b>B)</b> Dünyanın her yerine eşitlik getirdiği söylenmiyor.<br><b>D)</b> Osmanlı'da yaşayan Batılı düşünürler tarafından gerçekleştirildiği söylenmiyor.<br><b>E)</b> Fransız Devrimi'nin tanımı doğru ama parçadaki bilgi değil.`
    },
    {
        id: 60,
        type: "B",
        instruction: "59-62 soruları aşağıdaki parçaya göre cevaplayınız.",                
        paragraph: "The Young Ottomans were a secret organization of Ottoman nationalist intellectuals formed in 1865, influenced by such Western thinkers as Montesquieu and Rousseau and necessarily the French Revolution. A forerunner of other Turkish nationalist groups, the Young Ottomans favored converting the Turkish-dominated multinational Ottoman Empire into a more purely Turkish state and called for the creation of a constitutional government. By 1867 the Young Ottomans had expanded from the original 6 members to 245, including the noted poets Namık Kemal and Ziya Paşa. They were further supported financially and materially by the Egyptian prince Mustafa Fazıl and had attracted the attention of the Ottoman princes Murad and Abdülhamid.",
        text: "As it is clearly stated in the passage, only two years after the Young Ottomans were formed, ----.",
        options: { A: "the Turkish-dominated multinational Ottoman Empire was successfully converted into a pure Turkish state", B: "the Young Ottomans constituted 245 other Turkish nationalist organizations", C: "two Ottoman princes, Murad and Abdülhamid, started to provide money they need to make their dreams come true", D: "the number of the Young Ottomans increased more than forty times", E: "Western thinkers like Montesquieu and Rousseau reluctantly took part in their activities" },
        correct: "D",
        dict: { "expanded": "genişledi", "original": "orijinal", "members": "üyeler", "formed": "kuruldu" },
        explanation: `<b>✅ Doğru Cevap: D) the number of the Young Ottomans increased more than forty times</b><br><b>📌 Sebep:</b> 6'dan 245'e çıkması, 40 kattan fazla (6x40=240) artış demektir.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> İmparatorluk dönüştürülmedi, sadece fikir olarak desteklendi.<br><b>B)</b> 245 diğer örgüt değil, üye sayısı.<br><b>C)</b> Osmanlı prensleri para sağlamadı, Mısır prensi sağladı.<br><b>E)</b> Batılı düşünürler etkiledi ama katılmadı.`
    },
    {
        id: 61,
        type: "B",
        instruction: "59-62 soruları aşağıdaki parçaya göre cevaplayınız.",                
        paragraph: "The Young Ottomans were a secret organization of Ottoman nationalist intellectuals formed in 1865, influenced by such Western thinkers as Montesquieu and Rousseau and necessarily the French Revolution. A forerunner of other Turkish nationalist groups, the Young Ottomans favored converting the Turkish-dominated multinational Ottoman Empire into a more purely Turkish state and called for the creation of a constitutional government. By 1867 the Young Ottomans had expanded from the original 6 members to 245, including the noted poets Namık Kemal and Ziya Paşa. They were further supported financially and materially by the Egyptian prince Mustafa Fazıl and had attracted the attention of the Ottoman princes Murad and Abdülhamid.",
        text: "According to the passage, the Young Ottomans ----.",
        options: { A: "were young Ottoman nationalist intellectuals who had contributed to French Revolution", B: "were a confidential union created by Ottoman nationalist scholars under the influence of the Western intellectuals and the French Revolution", C: "were a secret organization formed in 1865 by Ottoman intellectuals together with western thinkers like Montesquieu and Rousseau", D: "were young Ottoman nationalist scholars who actually formed the group in 1867", E: "were a powerful and legal organization of Ottoman nationalist intellectuals subsidized by Ottoman Empire" },
        correct: "B",
        dict: { "confidential": "gizli", "scholars": "alimler", "influence": "etki", "subsidized": "sübvanse edilmiş" },
        explanation: `<b>✅ Doğru Cevap: B) were a confidential union created by Ottoman nationalist scholars under the influence of the Western intellectuals and the French Revolution</b><br><b>📌 Sebep:</b> Gizli birlik (secret organization/confidential union) ve Batı etkisi vurgulanıyor.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Fransız Devrimi'ne katkıda bulundular denmiyor.<br><b>C)</b> Batılı düşünürlerle birlikte kurulmadı, onlardan etkilendi.<br><b>D)</b> 1867'de değil, 1865'te kuruldu.<br><b>E)</b> Güçlü ve yasal örgüt değil, gizli örgüt. Osmanlı tarafından sübvanse edilmedi.`
    },
    {
        id: 62,
        type: "B",
        instruction: "59-62 soruları aşağıdaki parçaya göre cevaplayınız.",                
        paragraph: "The Young Ottomans were a secret organization of Ottoman nationalist intellectuals formed in 1865, influenced by such Western thinkers as Montesquieu and Rousseau and necessarily the French Revolution. A forerunner of other Turkish nationalist groups, the Young Ottomans favored converting the Turkish-dominated multinational Ottoman Empire into a more purely Turkish state and called for the creation of a constitutional government. By 1867 the Young Ottomans had expanded from the original 6 members to 245, including the noted poets Namık Kemal and Ziya Paşa. They were further supported financially and materially by the Egyptian prince Mustafa Fazıl and had attracted the attention of the Ottoman princes Murad and Abdülhamid.",
        text: "It can be inferred from the passage that ----.",
        options: { A: "Namık Kemal and Ziya Paşa, two well-known poets, were the founders of the Young Ottomans", B: "the Young Ottomans courageously voiced their desire to takeover Turkish-dominated multinational Ottoman Empire and maintain it safely", C: "the Young Ottomans were the group of intellectuals, which was the successor of other Turkish nationalist associations", D: "the Young Ottomans initially got financial and material support from Namık Kemal and Ziya Paşa as well as the Egyptian prince Mustafa Fazıl", E: "within their first years, the Young Ottomans were provided with subsidy by a non-Ottoman ruler" },
        correct: "E",
        dict: { "subsidy": "destek", "ruler": "yönetici", "financially": "finansal olarak", "materially": "maddi olarak" },
        explanation: `<b>✅ Doğru Cevap: E) within their first years, the Young Ottomans were provided with subsidy by a non-Ottoman ruler</b><br><b>📌 Sebep:</b> Mısır Prensi Mustafa Fazıl (teknik olarak Osmanlı valisi olsa da özerk ve dış güç gibi hareket eden) tarafından desteklenmiştir.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Kurucuları olduğu söylenmiyor, sadece üyeler.<br><b>B)</b> Devralmak ve güvenle sürdürmek değil, anayasal hükümet istiyorlar.<br><b>C)</b> Halefi değil, öncüsü (forerunner).<br><b>D)</b> Namık Kemal ve Ziya Paşa'dan maddi destek alındığı söylenmiyor.`
    },
    {
        id: 63,
        type: "A",
        instruction: "63-67 sorularda, karşılıklı konuşmanın boş bırakılan kısmını tamamlayabilecek ifadeyi bulunuz.",                
        text: "Jessie: These days, everybody says the climate is gradually changing.\nLaura: What do you think makes those people say such things?\nJessie: ----\nLaura: You're completely right and got a point, because my father also repeats the same saying about this season all the time.",
        options: { A: "Actually they are not aware of what they are talking about.", B: "My grandparents in an accustomed manner complained about climate change whenever family members gathered.", C: "Well, I think the primary cause is that it doesn't snow in winter as much as in the past.", D: "I really wonder whether other experienced people share the same thought or not.", E: "Why do you ask me such rubbish things? You know the reason quite well, don't you?" },
        correct: "C",
        dict: { "gradually": "yavaşça", "climate": "iklim", "season": "mevsim", "primary": "birincil" },
        explanation: `<b>✅ Doğru Cevap: C) Well, I think the primary cause is that it doesn't snow in winter as much as in the past.</b><br><b>📌 Sebep:</b> Laura'nın 'haklısın, babam da bu mevsim için aynısını söyler' demesi için Jessie'nin somut bir mevsimsel gözlem (kar yağmıyor) yapması gerekir.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> İnsanların farkında olmadığını söylemek, Laura'nın yorumuyla uyumsuz.<br><b>B)</b> Büyükanne/büyükbabanın şikayetleri genel, mevsimsel örnek değil.<br><b>D)</b> Başka deneyimli insanları merak etmek, Laura'nın babası örneğiyle tam uyumlu değil.<br><b>E)</b> Kaba bir cevap, diyaloğa uygun değil.`
    },
    {
        id: 64,
        type: "A",
        instruction: "63-67 sorularda, karşılıklı konuşmanın boş bırakılan kısmını tamamlayabilecek ifadeyi bulunuz.",                
        text: "Jackson: How do you find living in a big metropolitan city like İstanbul?\nHelen: Well, to be honest, there are lots of things making it much better than living in the country!\nJackson: Can you give me any examples?\nHelen: ----",
        options: { A: "Sure! People living in the countryside are usually more open and friendly than those in the city.", B: "Certainly! For one thing, you can go to a concert, or see a new movie at the cinema. So you never get bored.", C: "Of course! Many people may think the opposite, but I always find big cities like İstanbul very horrific and too expensive to live.", D: "No, I haven't had enough time to think about some alternatives to overcome the problems of big cities.", E: "And how about your personal point of view regarding living in the big city or the country?" },
        correct: "B",
        dict: { "metropolitan": "metropol", "countryside": "kırsal", "bored": "sıkılmak", "examples": "örnekler" },
        explanation: `<b>✅ Doğru Cevap: B) Certainly! For one thing, you can go to a concert, or see a new movie at the cinema. So you never get bored.</b><br><b>📌 Sebep:</b> Şehrin avantajlarına örnek istendiği için 'Konser, sinema' örneği uygundur.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Kırsal kesim insanlarının daha açık olması şehri övmez.<br><b>C)</b> Şehri kötülüyor, oysa Helen şehri daha iyi bulduğunu söyledi.<br><b>D)</b> Soruya cevap vermiyor, örnek vermiyor.<br><b>E)</b> Soruyu karşı tarafa yönlendiriyor, örnek vermiyor.`
    },
    {
        id: 65,
        type: "A",
        instruction: "63-67 sorularda, karşılıklı konuşmanın boş bırakılan kısmını tamamlayabilecek ifadeyi bulunuz.",                
        text: "Kevin: Have you ever made a comparison between today's life and the life in the old days?\nGeorge: Of course, yes. Today's life is certainly much more expensive than that of past.\nKevin: ----\nGeorge: In terms of developments in medical applications and opportunity to see a doctor, yes; but as for polluted air, environment and water, unfortunately no.",
        options: { A: "But today's conditions are, nevertheless, rather harder than those in the past.", B: "As well as this, modern people are also spending a lot of money buying unnecessary things.", C: "Could you please support your point of view with some strong examples?", D: "True. But today it is much healthier than it was in the past, isn't it?", E: "As a result, more people feel nostalgic about their happy old days." },
        correct: "D",
        dict: { "comparison": "karşılaştırma", "polluted": "kirli", "developments": "gelişmeler", "applications": "uygulamalar" },
        explanation: `<b>✅ Doğru Cevap: D) True. But today it is much healthier than it was in the past, isn't it?</b><br><b>📌 Sebep:</b> George'un cevabı ('tıbbi olarak evet, hava kirliliği olarak hayır') Kevin'in 'daha sağlıklı değil mi?' sorusuna verilmiş bir yanıttır.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> George sağlık konusuna değil, pahalılığa değindi.<br><b>B)</b> Gereksiz şeylere para harcama konusu değil.<br><b>C)</b> George zaten örnek verecek, tekrar istemeye gerek yok.<br><b>E)</b> Nostalji konusu gündeme gelmedi.`
    },
    {
        id: 66,
        type: "A",
        instruction: "63-67 sorularda, karşılıklı konuşmanın boş bırakılan kısmını tamamlayabilecek ifadeyi bulunuz.",                
        text: "Jessica: ----\nAdam: Well, I am not certain, but I think not more than a couple.\nJessica: And does he have any furniture in his office? I mean other than the chair at his desk.\nAdam: Oh yes, he's got a sofa and two comfortable armchairs.",
        options: { A: "Every office worker needs a comfortable couch in the office to take a rest. Don't you agree with me?", B: "We are looking for a rental apartment that we will use as an office. How much do you pay for the rent of yours?", C: "I'll need a wooden desk and some medium cabinets to use in my office. How many cabinets does your director have in his office?", D: "What sort of furniture does your father generally prefers for his company?", E: "You've worked with one of the most popular architects in the country. How does he manage to get so much appeal?" },
        correct: "C",
        dict: { "cabinets": "dolaplar", "furniture": "mobilya", "director": "müdür", "office": "ofis" },
        explanation: `<b>✅ Doğru Cevap: C) I'll need a wooden desk and some medium cabinets to use in my office. How many cabinets does your director have in his office?</b><br><b>📌 Sebep:</b> Adam sayı veriyor ('bir iki taneden fazla değil'). Jessica 'Ofisinde kaç dolap var?' diye sormuş olmalı.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Rahat kanepe ihtiyacından bahsediyor, dolap sorusuyla ilgisi yok.<br><b>B)</b> Kiralık daireden bahsediyor, ofis mobilyası değil.<br><b>D)</b> Babasının şirketi için mobilya tercihi, ofis mobilyası değil.<br><b>E)</b> Mimardan bahsediyor, ofis mobilyası değil.`
    },
    {
        id: 67,
        type: "A",
        instruction: "63-67 sorularda, karşılıklı konuşmanın boş bırakılan kısmını tamamlayabilecek ifadeyi bulunuz.",                
        text: "Smith: I have just learnt from this report that triglycerides are becoming increasingly important in heart health matters.\nBale: Yes, triglyceride testing is now recommended as part of a complete cholesterol profile.\nSmith: ----\nBale: Quite simple. Doctors evaluate high cholesterol treatments in respect to a patient's triglyceride levels.",
        options: { A: "To tell the truth, I don't know what kind of a use it has.", B: "If high triglycerides are really a serious health concern, then we are wise to be concerned if ours are high.", C: "Isn't your doctor the one to isolate the particular cause or causes of your elevated triglyceride levels?", D: "Why a diet high in fat is a bad idea? Just because triglycerides are fats?", E: "Could you please tell me some of the things that influence triglyceride levels?" },
        correct: "A",
        dict: { "recommended": "önerilen", "triglycerides": "trigliseritler", "cholesterol": "kolesterol", "evaluate": "değerlendirmek" },
        explanation: `<b>✅ Doğru Cevap: A) To tell the truth, I don't know what kind of a use it has.</b><br><b>📌 Sebep:</b> Smith 'Ne işe yaradığını bilmiyorum' diyor, Bale de 'Çok basit' diyerek açıklıyor.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B)</b> Ciddi bir sağlık sorunu olup olmadığı konusu değil, kullanım amacı.<br><b>C)</b> Doktorun nedenleri izole etmesi değil, tedaviyi değerlendirmesi.<br><b>D)</b> Yağlı diyet konusu değil.<br><b>E)</b> Trigliserit seviyelerini etkileyen şeyler değil, kullanım amacı.`
    },
    {
        id: 68,
        type: "A",
        instruction: "68-71 sorularda, verilen cümleye anlamca en yakın cümleyi bulunuz.",                
        text: "Thanks to its friendly people, beautiful scenery, and great food, most tourists regard Australia as a good place for a vacation.",
        options: { A: "Its sincere people, great cuisine and outstanding view makes the difficult task of planning a vacation to Australia an easy decision for tourists.", B: "A great many tourists see Australia as a nice place for a holiday since they can eat marvelous things, enjoy breathtaking landscape, and are welcomed by people there.", C: "For many tourists, Australia is both a continent and a good place to search for pleasant people, nice panorama and tasty food during a vacation.", D: "Unlike many other places, Australia is a good holiday place that provides its tourists with beautiful scenery and perfect eats, along with warm people.", E: "Most tourists prefer Australia as a favorable place for a long vacation because of its hearty people, lovely panorama and perfect food." },
        correct: "B",
        dict: { "regard": "görmek", "scenery": "manzara", "vacation": "tatil", "friendly": "dostane" },
        explanation: `<b>✅ Doğru Cevap: B) A great many tourists see Australia as a nice place for a holiday since they can eat marvelous things, enjoy breathtaking landscape, and are welcomed by people there.</b><br><b>📌 Sebep:</b> Eşleşmeler: Friendly people = welcomed by people, Scenery = landscape, Food = marvelous things. 'Most tourists' = 'A great many tourists'.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> 'Makes the difficult task... an easy decision' (zor görevi kolay karar haline getirir) ekstra yorum.<br><b>C)</b> 'Both a continent and a good place' (hem kıta hem iyi yer) gereksiz ekleme.<br><b>D)</b> 'Unlike many other places' (diğer birçok yerin aksine) karşılaştırma yok orijinalde.<br><b>E)</b> 'Long vacation' (uzun tatil) orijinalde yok.`
    },
    {
        id: 69,
        type: "A",
        instruction: "68-71 sorularda, verilen cümleye anlamca en yakın cümleyi bulunuz.",                
        text: "The West usually goes through a fire season in the last weeks of summer, but violent blazes sometimes start this earlier.",
        options: { A: "The fire season of the West always makes itself appear in the last weeks of summer, yet forceful flames are likely to start it earlier.", B: "The last weeks of summer are the fire season for the West, but merciless flames often make this come into being earlier.", C: "The West rarely experiences this fire season before the last weeks of summer, yet from time to time strong winds and blazes start this earlier.", D: "Although the last weeks of summer generally constitute a fire season for the West, violent flames make this happen earlier at times.", E: "The West always suffers from fires in the first weeks of summer, but awful blazes sometimes start this earlier than usual." },
        correct: "D",
        dict: { "constitute": "oluşturmak", "violent": "şiddetli", "blazes": "alevler", "usually": "genellikle" },
        explanation: `<b>✅ Doğru Cevap: D) Although the last weeks of summer generally constitute a fire season for the West, violent flames make this happen earlier at times.</b><br><b>📌 Sebep:</b> Eşleşmeler: Usually = Generally, Sometimes = At times. 'Goes through a fire season' = 'constitute a fire season'.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> 'Always makes itself appear' (kendini her zaman gösterir) kesinlik ifadesi.<br><b>B)</b> 'Merciless flames' (acımasız alevler) duygusal ifade.<br><b>C)</b> 'Rarely experiences' (nadiren yaşar) yanlış, 'usually' (genellikle).<br><b>E)</b> 'First weeks of summer' (yazın ilk haftaları) yanlış, 'last weeks' (son haftalar).`
    },
    {
        id: 70,
        type: "A",
        instruction: "68-71 sorularda, verilen cümleye anlamca en yakın cümleyi bulunuz.",                
        text: "A newly manufactured car in India has some joints connected with super strong glue rather than welds.",
        options: { A: "A lately produced car in India uses extraordinary strong glue instead of welds as a new way of connecting most parts.", B: "The final production of automotive industry in India has several parts which are interconnected through super strong welds in place of glue.", C: "Some joints of a recently produced car in India are connected through not welds but extra powerful glue.", D: "Nearly all the joints of a newly manufactured car in India are connected with a kind of powerful glue, but welds could also have been used.", E: "A novel car made in India has a few joints brought together by using both super strong glue and welds." },
        correct: "C",
        dict: { "glue": "yapıştırıcı", "welds": "kaynaklar", "joints": "ek yerleri", "manufactured": "üretilmiş" },
        explanation: `<b>✅ Doğru Cevap: C) Some joints of a recently produced car in India are connected through not welds but extra powerful glue.</b><br><b>📌 Sebep:</b> Eşleşmeler: Glue rather than welds = Not welds but glue. 'Newly manufactured' = 'recently produced'.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> 'Most parts' (çoğu parça) yanlış, 'some joints' (bazı ek yerleri).<br><b>B)</b> Welds yerine glue değil, tam tersi söylenmiş.<br><b>D)</b> 'Nearly all the joints' (neredeyse tüm ek yerleri) yanlış, 'some joints' (bazı ek yerleri).<br><b>E)</b> 'Both... and' (hem... hem) yanlış, 'rather than' (yerine).`
    },
    {
        id: 71,
        type: "A",
        instruction: "68-71 sorularda, verilen cümleye anlamca en yakın cümleyi bulunuz.",                
        text: "The head scarf ban in Turkey is one of the most crucial issues that has been under discussion for ages.",
        options: { A: "In Turkey, the head scarf ban is a rather important issue that has been discussed from the middle ages onwards.", B: "Ban of the head scarf is the most crucial issue in Turkey, and it has long been discussed deservedly in the country.", C: "A ban on the head scarf may possibly draw a great deal of attention in Turkey for a long time.", D: "The most significant issues being discussed for long in Turkey include the ban on head scarf.", E: "The head scarf ban means a lot to people with a head scarf who are not allowed to enter public places in Turkey." },
        correct: "D",
        dict: { "crucial": "hayati", "ban": "yasak", "discussion": "tartışma", "ages": "uzun süre" },
        explanation: `<b>✅ Doğru Cevap: D) The most significant issues being discussed for long in Turkey include the ban on head scarf.</b><br><b>📌 Sebep:</b> Eşleşmeler: One of the most crucial = Include, For ages = For long.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> 'From the middle ages onwards' (Orta Çağ'dan beri) yanlış, 'for ages' (uzun süredir).<br><b>B)</b> 'The most crucial issue' (en hayati mesele) yanlış, 'one of the most crucial' (en hayati meselelerden biri).<br><b>C)</b> 'May possibly draw attention' (dikkat çekebilir) olasılık belirtiyor, kesinlik yok.<br><b>E)</b> 'People with a head scarf who are not allowed to enter public places' (kamusal alanlara giremeyen başörtülü insanlar) spesifik detay.`
    },
    {
        id: 72,
        type: "A",
        instruction: "72-75 sorularda, boş bırakılan yere, parçada anlam bütünlüğünü sağlamak için getirilebilecek cümleyi bulunuz.",                
        text: "Alfred Bernhard Nobel was the fourth son of Immanuel and Caroline Nobel. The couple had eight children. ---- The others died of diseases while they were little. Alfred was also prone to an illness as a child, which left serious negative effects on him, but he was able to overcome it and thus live through adulthood.",
        options: { A: "In the will he drafted in 1895, Nobel instructed that most of his fortune be set aside as a fund for the awarding of five annual prizes.", B: "Among them, however, only Alfred and his three brothers managed to reach adulthood.", C: "He is a Swedish chemist, engineer, and industrialist who invented dynamite and some other more powerful explosives.", D: "Thanks to Alfred Bernhard Nobel, the Nobel Prizes are widely regarded as the most prestigious awards given for intellectual achievement in the world.", E: "When Alfred was 18, he decided to go to the United States where he studied chemistry for four years." },
        correct: "B",
        dict: { "prone": "yatkın", "adulthood": "yetişkinlik", "diseases": "hastalıklar", "overcome": "üstesinden gelmek" },
        explanation: `<b>✅ Doğru Cevap: B) Among them, however, only Alfred and his three brothers managed to reach adulthood.</b><br><b>📌 Sebep:</b> Boşluktan sonra 'Diğerleri öldü' deniyor. Demek ki boşlukta yaşayanlardan (Alfred ve 3 kardeşi) bahsetmeli.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Vasiyet konusu, çocuklukla ilgili değil.<br><b>C)</b> Meslekleri ve icatları, çocuklukla ilgili değil.<br><b>D)</b> Nobel Ödülleri, konuyla ilgili değil.<br><b>E)</b> ABD'ye gitmesi, çocukluktan sonraki dönem.`
    },
    {
        id: 73,
        type: "A",
        instruction: "72-75 sorularda, boş bırakılan yere, parçada anlam bütünlüğünü sağlamak için getirilebilecek cümleyi bulunuz.",                
        text: "---- It was proclaimed in 1582 by Pope Gregory XIII as a reform of the Julian Calendar. By the Julian calculation, the solar year comprised 365 1/4 days. A slight inaccuracy in the measurement, the solar year comprising more precisely 365 days, 5 hours, 48 minutes, 45.25 seconds, caused the calendar dates of the seasons to regress almost one day per century.",
        options: { A: "The fundamental unit of solar time is the day that is a reckoning of the passage of time based on the Sun's position in the sky.", B: "A calendar is a system of organizing days for purposes like social, religious, commercial, or administrative.", C: "Nearly all calendar systems group consecutive days into 'weeks', 'months' and 'years'.", D: "Gregorian calendar, also called New Style Calendar, is the solar dating system which is now in general use.", E: "A complete calendar provides an absolute way of naming each successive day, while incomplete calendars do not." },
        correct: "D",
        dict: { "proclaimed": "ilan edildi", "reform": "reform", "inaccuracy": "yanlışlık", "comprising": "içermek" },
        explanation: `<b>✅ Doğru Cevap: D) Gregorian calendar, also called New Style Calendar, is the solar dating system which is now in general use.</b><br><b>📌 Sebep:</b> 'It' zamiri Gregoryen takvimine referans veriyor.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Güneş zamanı birimi, takvimle ilgili değil.<br><b>B)</b> Takvimin genel tanımı, spesifik değil.<br><b>C)</b> Takvim sistemlerinin gruplandırması, Gregoryen takvimine özel değil.<br><b>E)</b> Tam ve eksik takvimler, konuyla ilgili değil.`
    },
    {
        id: 74,
        type: "A",
        instruction: "72-75 sorularda, boş bırakılan yere, parçada anlam bütünlüğünü sağlamak için getirilebilecek cümleyi bulunuz.",                
        text: "Long an object of veneration and conflict, the holy city of Jerusalem, the ancient city of the Middle East, has been governed, both as a provincial town and a national capital, by an extended series of dynasties and states. ---- This struggle often erupted in violence. The United Nations (UN) attempted to declare the city a corpus separatum (separate entity) with the aim of averting further conflict but the first Arab-Israeli war, in 1948, left Jerusalem divided into Israeli (west Jerusalem) and Jordanian (east Jerusalem) sectors.",
        options: { A: "In the early 20th century the city, along with all of historic Palestine, became the focus of the competing national aspirations of Zionists and Palestinian Arabs.", B: "Jerusalem is the capital city of Israel, though internationally it is not recognized as such.", C: "During its long history, Jerusalem has been destroyed twice, encompassed 23 times, attacked 52 times, and captured and recaptured 44 times.", D: "Today Costa Rica and El Salvador are the only two countries, which have embassies in this ancient city.", E: "After the war, Israel abolished all the discriminatory laws officially declared by Jordan and adopted its own tough standard for safeguarding access to religious shrines." },
        correct: "A",
        dict: { "struggle": "mücadele", "veneration": "hürmet", "conflict": "çatışma", "dynasties": "hanedanlar" },
        explanation: `<b>✅ Doğru Cevap: A) In the early 20th century the city, along with all of historic Palestine, became the focus of the competing national aspirations of Zionists and Palestinian Arabs.</b><br><b>📌 Sebep:</b> Boşluktan sonra 'This struggle' (bu mücadele) deniyor. A şıkkındaki 'competing national aspirations' (çatışan ulusal emeller) bu mücadeleyi tanımlar.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B)</b> İsrail'in başkenti konusu, mücadeleyle doğrudan ilgili değil.<br><b>C)</b> Tarihsel istatistikler, mücadele tanımı değil.<br><b>D)</b> Büyükelçilikler konusu, mücadeleyle ilgili değil.<br><b>E)</b> Savaş sonrası durum, mücadele tanımı değil.`
    },
    {
        id: 75,
        type: "A",
        instruction: "72-75 sorularda, boş bırakılan yere, parçada anlam bütünlüğünü sağlamak için getirilebilecek cümleyi bulunuz.",                
        text: "The English term Christmas is of fairly recent origin. ---- Moreover, there are suitably other corresponding terms in many other languages like Navidad in Spanish, Natale in Italian, Noël in French. All these terms probably stand for the same thing, nativity.",
        options: { A: "In this unspiritual Christmas celebration, a mythical figure named Santa Claus plays the fundamental role and expected to give people gifts.", B: "'Nativity', meaning 'birth', is from Latin nātīvitās, and it was first represented in the 4th century.", C: "Thus, this term has several closely related and often interchangeable figures, known as Santa Claus, Father Christmas, Saint Nicholas and Kris Kringle.", D: "Since the early 20th century, Christmas has also been a secular family holiday, observed by Christians and non-Christians alike.", E: "The earlier term equated with the Christmas festival is Yule, possibly derived from the Germanic jōl or the Anglo-Saxon geōl." },
        correct: "E",
        dict: { "origin": "köken", "corresponding": "karşılık gelen", "nativity": "doğum", "derived": "türemiş" },
        explanation: `<b>✅ Doğru Cevap: E) The earlier term equated with the Christmas festival is Yule, possibly derived from the Germanic jōl or the Anglo-Saxon geōl.</b><br><b>📌 Sebep:</b> Köken (origin) anlatılıyor. 'Daha önceki terim Yule idi' diyerek tarihçeye devam ediyor.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Noel kutlamaları, terimin kökeni değil.<br><b>B)</b> 'Nativity' kelimesinin açıklaması, İngilizce terim 'Christmas' değil.<br><b>C)</b> Noel figürleri, terimin kökeni değil.<br><b>D)</b> Noel'in seküler bir tatil olması, terimin kökeni değil.`
    },
    {
        id: 76,
        type: "A",
        instruction: "76-80 sorularda, cümleler sırasıyla okunduğunda parçanın anlam bütünlüğünü bozan cümleyi bulunuz.",                
        text: "(I) Newton left a mass of manuscripts on the subjects of alchemy and chemistry, then closely related topics. (II) He, for example, worked out the fundamentals of calculus, though this work went unpublished for more than 30 years. (III) Most of these were extracts from books, bibliographies, dictionaries, and so on, but a few are original. (IV) He began intensive experimentation in 1669, continuing till he left Cambridge, seeking to unravel the meaning that he hoped was hidden in alchemical obscurity and mysticism. (V) Most importantly in the 'Queries' appended to 'Opticks' and in the essay 'On the Nature of Acids' (1710), Newton published an incomplete theory of chemical force, concealing his exploration of the alchemists, which became known a century after his death.",
        options: { A: "I", B: "II", C: "III", D: "IV", E: "V" },
        correct: "B",
        dict: { "manuscripts": "el yazmaları", "alchemy": "simya", "calculus": "kalkülüs", "experimentation": "deney" },
        explanation: `<b>✅ Doğru Cevap: B) (II)</b><br><b>📌 Sebep:</b> Parça Newton'un simya/kimya çalışmaları hakkındadır. II. cümle matematik (calculus) hakkındadır, akışı bozar.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A) (I)</b> Simya ve kimya konusunu tanıtıyor, uyumlu.<br><b>C) (III)</b> El yazmalarının içeriğini açıklıyor, uyumlu.<br><b>D) (IV)</b> Deneysel çalışmalarını anlatıyor, uyumlu.<br><b>E) (V)</b> Kimyasal kuvvet teorisini anlatıyor, uyumlu.`
    },
    {
        id: 77,
        type: "A",
        instruction: "76-80 sorularda, cümleler sırasıyla okunduğunda parçanın anlam bütünlüğünü bozan cümleyi bulunuz.",                
        text: "(I) Albert Einstein was a great physicist who received honorary doctorate degrees in science, medicine and philosophy from many European and American universities. (II) During the 1920s, he gave lectures on these subjects in Europe, America and even the Far East. (III) He continued to work on the probabilistic interpretation of quantum theory, and he persevered with this work in America. (IV) Thus, he was awarded Fellowships or Memberships of all the leading scientific academies throughout these regions. (V) He also gained numerous awards in recognition of his work, including the Copley Medal of the Royal Society of London in 1925, and the Franklin Medal of the Franklin Institute in 1935.",
        options: { A: "I", B: "II", C: "III", D: "IV", E: "V" },
        correct: "C",
        dict: { "honorary": "fahri", "probabilistic": "olasılıksal", "quantum": "kuantum", "academies": "akademiler" },
        explanation: `<b>✅ Doğru Cevap: C) (III)</b><br><b>📌 Sebep:</b> Parça Einstein'ın aldığı ödül ve unvanlarla ilgilidir. III. cümle spesifik bilimsel çalışmasından bahsederek konuyu dağıtır.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A) (I)</b> Fahri doktoraları tanıtıyor, uyumlu.<br><b>B) (II)</b> Konferansları anlatıyor, uyumlu.<br><b>D) (IV)</b> Akademi üyeliklerinden bahsediyor, uyumlu.<br><b>E) (V)</b> Ödüllerden bahsediyor, uyumlu.`
    },
    {
        id: 78,
        type: "A",
        instruction: "76-80 sorularda, cümleler sırasıyla okunduğunda parçanın anlam bütünlüğünü bozan cümleyi bulunuz.",                
        text: "(I) It is important to protect against the sun's UVA and UVB rays year round. (II) Sun exposure in childhood can dramatically increase a person's chance of getting skin cancer. (III) One blistering sunburn in childhood can as much as double the risk of melanoma, the most deadly type of skin cancer, later in life. (IV) Childhood is also the part of life which holds the greatest sun exposure for most people. (V) Most parents protect their children from the sun during the summer, or on a trip to the beach, but for children especially, every day is an opportunity to experience the damaging rays of the sun.",
        options: { A: "I", B: "II", C: "III", D: "IV", E: "V" },
        correct: "A",
        dict: { "exposure": "maruz kalma", "blistering": "kabarcıklı", "melanoma": "melanom", "damaging": "zarar veren" },
        explanation: `<b>✅ Doğru Cevap: A) (I)</b><br><b>📌 Sebep:</b> Parça çocuklukta güneşten korunmayı anlatır. I. cümle genel (yıl boyu) korumadan bahseder, çocuk öznesi yoktur.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B) (II)</b> Çocuklukta güneşe maruz kalmayı anlatıyor, uyumlu.<br><b>C) (III)</b> Çocuklukta güneş yanığının riskini anlatıyor, uyumlu.<br><b>D) (IV)</b> Çocukluğun en fazla güneşe maruz kalınan dönem olduğunu söylüyor, uyumlu.<br><b>E) (V)</b> Ebeveynlerin koruması ve her gün risk olduğunu anlatıyor, uyumlu.`
    },
    {
        id: 79,
        type: "A",
        instruction: "76-80 sorularda, cümleler sırasıyla okunduğunda parçanın anlam bütünlüğünü bozan cümleyi bulunuz.",                
        text: "(I) St. Pierre Church is located on the west side of Asi River and by the west foot of Hac Mountain. (II) The area where the church was constructed is the antique city of Antiokheia. (III) As the Antiokheia got bigger between II. and IV. Centuries, the church turned to be in the middle of the city, near the Agora. (IV) This means the building was important in the social life of people in that era. (V) Oral tradition, historical events and development process of the city suggest that Antiokheia region where St. Pierre Church was constructed was one of the oldest Anatolian and Near Eastern settlements.",
        options: { A: "I", B: "II", C: "III", D: "IV", E: "V" },
        correct: "E",
        dict: { "constructed": "inşa edilmiş", "antique": "antik", "settlements": "yerleşimler", "oral": "sözlü" },
        explanation: `<b>✅ Doğru Cevap: E) (V)</b><br><b>📌 Sebep:</b> Parça St. Pierre kilisesinin konumu ve tarihi hakkındadır. V. cümle genel Antiokheia bölgesinin tarihinden bahseder, kilise odağını kaybeder.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A) (I)</b> Kilisenin konumunu anlatıyor, uyumlu.<br><b>B) (II)</b> Kilisenin bulunduğu alanı tanıtıyor, uyumlu.<br><b>C) (III)</b> Kilisenin şehir içindeki konum değişikliğini anlatıyor, uyumlu.<br><b>D) (IV)</b> Kilisenin sosyal hayattaki önemini açıklıyor, uyumlu.`
    },
    {
        id: 80,
        type: "A",
        instruction: "76-80 sorularda, cümleler sırasıyla okunduğunda parçanın anlam bütünlüğünü bozan cümleyi bulunuz.",                
        text: "(I) As of the 2011 census, 7,096 people resided in the town of Asbestos. (II) Asbestos mining began more than 4,000 years ago, but did not start large-scale until the end of the 19th century. (III) The town covers an area of 29.67 square kilometers. (IV) It is situated in the centre of a square formed by the cities of Drummondville, Sherbrooke and Victoriaville, and the Nicolet River to the north. (V) It is the site of the Jeffrey mine, which was, until recently, the world's largest asbestos mine.",
        options: { A: "I", B: "II", C: "III", D: "IV", E: "V" },
        correct: "B",
        dict: { "census": "nüfus sayımı", "asbestos": "asbest", "mining": "madencilik", "square": "kare" },
        explanation: `<b>✅ Doğru Cevap: B) (II)</b><br><b>📌 Sebep:</b> Parça Asbestos kasabası (nüfus, alan, konum) hakkındadır. II. cümle Asbest madenciliğinin tarihidir, kasaba ile doğrudan ilgili değildir.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A) (I)</b> Kasabanın nüfusunu veriyor, uyumlu.<br><b>C) (III)</b> Kasabanın alanını veriyor, uyumlu.<br><b>D) (IV)</b> Kasabanın konumunu anlatıyor, uyumlu.<br><b>E) (V)</b> Kasabadaki madeni anlatıyor, uyumlu.`
    }
];

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
        id: 6,
        type: 'A',
        instruction: "7-16 sorularda, cümlede boş bırakılan yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        text: "Ever since Campylobacter bacteria ---- as a primary cause of acute bacterial gastroenteritis in the late 1970s, strict hygiene protocols ---- in poultry processing plants across the globe.",
        options: {
            A: "identified / had been implemented",
            B: "were identified / have been implemented",
            C: "had been identified / were implementing",
            D: "are identified / are implemented",
            E: "have been identified / would be implemented"
        },
        correct: "B",
        dict: { "acute": "akut/şiddetli", "gastroenteritis": "mide-bağırsak iltihabı", "hygiene protocols": "hijyen kuralları/protokolleri", "poultry": "kümes hayvanları", "implement": "uygulamak/yürürlüğe koymak" },
        explanation: `<b>✅ Doğru Cevap: B) were identified / have been implemented</b><br><b>📌 Sebep:</b> "Ever since" kuralı gereği, geçmişte belirli bir tarihe ("in the late 1970s") işaret eden yan cümlede Simple Past Passive ("were identified"), ana cümlede ise günümüze kadar devam eden süreci belirten Present Perfect Passive ("have been implemented") kullanılmalıdır.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A) identified / had been implemented:</b> İlk taraf etken (active) kullanılmış ve zaman uyumu hatalıdır.<br><b>C) had been identified / were implementing:</b> İkinci kısım etken ve zaman ilişkisi yanlıştır.<br><b>D) are identified / are implemented:</b> "In the late 1970s" geçmiş zaman ifadesiyle Present Tense uyuşmaz.<br><b>E) have been identified / would be implemented:</b> "Since" yapısında geçmiş zaman noktası için Present Perfect kullanılmaz.`
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
        type: 'A',
        instruction: "27-36 sorularda, verilen cümleyi uygun şekilde tamamlayan ifadeyi bulunuz.",
        text: "Because the absorption of excess carbon dioxide by seawater significantly decreases oceanic pH levels, ----.",
        options: {
            A: "marine organisms with calcium carbonate shells struggle to build and maintain their protective structures",
            B: "commercial fisheries have expanded their deep-sea harvesting operations across the globe",
            C: "terrestrial ecosystems are largely insulated from atmospheric temperature shifts",
            D: "phytoplankton populations increase the overall alkalinity of coastal surface waters",
            E: "oceanographers have dismissed anthropogenic emissions as an ecological threat"
        },
        correct: "A",
        dict: { "absorption": "emilim/soğurma", "calcium carbonate": "kalsiyum karbonat", "protective": "koruyucu", "alkalinity": "alkalilik/baziklik" },
        explanation: `<b>✅ Doğru Cevap: A</b><br><b>📌 Sebep:</b> "Because" ile kurulan sebep-sonuç ilişkisinde, okyanus suyunun aşırı karbondioksit emmesi ve pH seviyesinin düşmesi (okyanus asitlenmesi), kabuklu deniz canlılarının kalsiyum karbonat kabuklarını oluşturmasını ve korumasını zorlaştırır.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B)</b> Balıkçılığın genişlemesi bir sonuç değildir.<br><b>C)</b> Karasal ekosistemlerle doğrudan neden-sonuç bağı kurulmaz.<br><b>D)</b> Asitlenme alkaliliği artırmaz, düşürür.<br><b>E)</b> Tehdidin göz ardı edilmesi mantıksal olarak çelişir.`
    },
    {
        id: 28,
        type: 'A',
        instruction: "27-36 sorularda, verilen cümleyi uygun şekilde tamamlayan ifadeyi bulunuz.",
        text: "Although fossil discoveries indicate that ancient penguins were massive creatures that stood over six feet tall, ----.",
        options: {
            A: "modern species evolved significantly smaller body sizes to thrive in sub-zero polar environments",
            B: "their fossilised feathers were identical in colour to those of contemporary seabirds",
            C: "they were completely unable to swim or hunt in the open prehistoric oceans",
            D: "palaeontologists have deduced that early avian species never interacted with marine life",
            E: "most flightless birds continue to maintain their immense prehistoric body proportions"
        },
        correct: "A",
        dict: { "massive": "devasa/büyük", "contemporary": "günümüzdeki/çağdaş", "thrive": "gelişmek/başarıyla yaşamak", "proportions": "boyutlar/oranlar" },
        explanation: `<b>✅ Doğru Cevap: A</b><br><b>📌 Sebep:</b> "Although" zıtlık bağlacı, fosil kayıtlarındaki antik penguenlerin devasa boyutlarda (1.8 metreden uzun) olması ile modern penguen türlerinin çok daha küçük boyutlara evrilmesi arasındaki boyutsal zıtlığı bağlar.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B)</b> Tüy rengi boyutsal zıtlığı tamamlamaz.<br><b>C)</b> Yüzemediklerine dair mantıksal bir çıkarım zıtlığı karşılamaz.<br><b>D)</b> Kuşların denizle etkileşime girmediği iddiası bağlama terstir.<br><b>E)</b> Zıtlık kurulmamıştır.`
    },
    {
        id: 29,
        type: 'A',
        instruction: "27-36 sorularda, verilen cümleyi uygun şekilde tamamlayan ifadeyi bulunuz.",
        text: "While dramatic advancements in sanitation and public healthcare have doubled human life expectancy over the past century, ----.",
        options: {
            A: "infant mortality rates have surged substantially in developed nations",
            B: "age-related chronic ailments and neurodegenerative disorders have become far more prevalent",
            C: "infectious diseases remain the leading cause of death across all modern societies",
            D: "demographers anticipate a sudden decline in global healthcare expenditures",
            E: "average lifespans continue to drop sharply despite modern medical interventions"
        },
        correct: "B",
        dict: { "sanitation": "hıfzıssıhha/sağlık koruma", "life expectancy": "yaşam beklentisi", "prevalent": "yaygın", "ailment": "hastalık/rahatsızlık" },
        explanation: `<b>✅ Doğru Cevap: B</b><br><b>📌 Sebep:</b> "While" zıtlık bağlacı, sağlık ve hijyen sayesinde insan ömrünün iki katına çıkması (olumlu) ile ömrün uzaması sonucu yaşa bağlı kronik ve nörodejeneratif hastalıkların yaygınlaşması (olumsuz/zorluk) arasındaki tezatlığı tamamlar.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Bebek ölüm oranları gelişmiş ülkelerde fırlamamıştır.<br><b>C)</b> Bulaşıcı hastalıklar modern dünyadaki tek baskın faktör değildir.<br><b>D)</b> Harcamaların düşmesi mantıksızdır.<br><b>E)</b> Yaşam süresinin düştüğünü söylemek ana cümledeki artışla çelişir.`
    },
    {
        id: 30,
        type: 'A',
        instruction: "27-36 sorularda, verilen cümleyi uygun şekilde tamamlayan ifadeyi bulunuz.",
        text: "----; however, failure to implement robust cybersecurity protocols leaves corporate data vulnerable to breaches.",
        options: {
            A: "Integrating modern information technology streamlines internal communication and operational efficiency",
            B: "Traditional paper-based record systems are far less susceptible to digital tampering",
            C: "Most multinational corporations have completely eliminated their reliance on cloud infrastructure",
            D: "Hardware maintenance costs have plummeted due to open-source software applications",
            E: "Employees generally resist automated workflow platforms because of technical complexity"
        },
        correct: "A",
        dict: { "streamline": "kolaylaştırmak/verimli kılmak", "susceptible": "duyarlı/savunmasız", "vulnerable": "kırılgan/korumasız", "tampering": "tahrifat/kurcalama" },
        explanation: `<b>✅ Doğru Cevap: A</b><br><b>📌 Sebep:</b> Noktalı virgül ve "however" geçişi, bilgi teknolojilerini entegre etmenin operasyonel verimliliği ve iletişimi artırması (olumlu) ile siber güvenlik açığı riskini beraberinde getirmesi (olumsuz) arasındaki zıtlığı bağlar.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B)</b> Kağıt tabanlı sistemlerin güvenliği 'however' ile beklenen teknolojik avantajı vermez.<br><b>C)</b> Şirketler buluttan vazgeçmemiştir.<br><b>D)</b> Donanım maliyetleri veri güvenliği tezatlığını kurmaz.<br><b>E)</b> Çalışan direnci ana konuya uymamaktadır.`
    },
    {
        id: 31,
        type: 'A',
        instruction: "27-36 sorularda, verilen cümleyi uygun şekilde tamamlayan ifadeyi bulunuz.",
        text: "Machine learning algorithms can extract invaluable patterns from massive datasets ----.",
        options: {
            A: "so that software engineers no longer need to verify algorithmic accuracy",
            B: "as long as the underlying training data is free from inherent bias and noise",
            C: "unless statistical modeling eliminates the necessity for computational power",
            D: "because neural networks produce completely random outputs without guidance",
            E: "although data storage technology has reached its definitive physical limit"
        },
        correct: "B",
        dict: { "extract": "çıkarmak/elde etmek", "invaluable": "paha biçilmez", "inherent bias": "doğal/yapısal önyargı", "computational": "hesaplamalı" },
        explanation: `<b>✅ Doğru Cevap: B</b><br><b>📌 Sebep:</b> "As long as" (koşuluyla) bağlacı, makine öğrenimi algoritmalarının büyük verilerden değerli sonuçlar çıkarabilmesinin temel şartını (eğitim verisinin tarafsız ve gürültüsüz olması) mantıksal olarak açıklar.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Mühendislerin doğrulamayı bırakması mantıksızdır.<br><b>C)</b> Hesaplama gücü ihtiyacı ortadan kalkmaz.<br><b>D)</b> Rastgele çıktı ürettikleri gerekçesi çelişir.<br><b>E)</b> Depolama sınırı doğrudan koşulu nitelemez.`
    },
    {
        id: 32,
        type: 'A',
        instruction: "27-36 sorularda, verilen cümleyi uygun şekilde tamamlayan ifadeyi bulunuz.",
        text: "Whereas authoritative parenting fosters emotional independence by combining high warmth with reasonable boundaries, ----.",
        options: {
            A: "permissive parenting often leaves children lacking self-regulation due to an absence of structure",
            B: "psychologists consistently advocate for stricter disciplinary measures in early childhood",
            C: "children raised in democratic households struggle to achieve social competence in school",
            D: "authoritarian parents allow their offspring complete freedom in academic decision-making",
            E: "such balanced developmental approaches inevitably lead to severe behavioural difficulties"
        },
        correct: "A",
        dict: { "authoritative": "demokratik/yetkin", "permissive": "müsamahakâr/izin verici", "foster": "geliştirmek/teşvik etmek", "self-regulation": "öz düzenleme" },
        explanation: `<b>✅ Doğru Cevap: A</b><br><b>📌 Sebep:</b> "Whereas" (oysa/-e karşılık) bağlacı, hem sıcaklık hem sınır içeren yetkin/demokratik ebeveynlik tarzının bağımsızlık kazandırması ile sınır koymayan müsamahakâr tarzın öz düzenleme eksikliğine yol açması arasındaki ebeveynlik karşılaştırmasını sağlar.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B)</b> Genel uzman görüşü zıtlık kıyaslaması oluşturmaz.<br><b>C)</b> Demokratik yetiştirilen çocukların başarısız olması çelişir.<br><b>D)</b> Otoriter ebeveynler tam serbestlik tanımaz.<br><b>E)</b> Dengeli yaklaşımın davranış bozukluğuna yol açması mantığa aykırıdır.`
    },
    {
        id: 33,
        type: 'A',
        instruction: "27-36 sorularda, verilen cümleyi uygun şekilde tamamlayan ifadeyi bulunuz.",
        text: "Epidemiological research has found no conclusive evidence linking mobile phone radiofrequency fields to cancer; ----.",
        options: {
            A: "therefore, governments have banned wireless communications across metropolitan areas",
            B: "instead, electromagnetic radiation from cellular devices alters DNA structures directly",
            C: "nevertheless, public health agencies recommend ongoing monitoring as mobile technology evolves",
            D: "in fact, ionizing radiation emitted by handsets is proven to induce brain tumours",
            E: "for instance, early analog transmitters operated at entirely harmless power thresholds"
        },
        correct: "C",
        dict: { "epidemiological": "epidemiyolojik/salgın bilimiyle ilgili", "conclusive": "kesin/ikna edici", "radiofrequency": "radyofrekans", "monitoring": "izleme/takip" },
        explanation: `<b>✅ Doğru Cevap: C</b><br><b>📌 Sebep:</b> İlk cümlede telefon frekanslarının kansere yol açtığına dair kesin kanıt bulunmadığı (güven verici) söylenmiş, noktalı virgülden sonra "nevertheless" (yine de) ile sağlık kuruluşlarının teknolojinin gelişimini izlemeye devam etmesi gerektiği (temkinli yaklaşım) vurgulanmıştır.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Yasaklama mantıksal bir sonuç değildir.<br><b>B)</b> "Instead" geçişi kanıt yokluğu ile çelişir.<br><b>D)</b> Telefonlar iyonlaştırıcı radyasyon yaymaz ve tümör oluşturduğu kanıtlanmamıştır.<br><b>E)</b> Örnekleme mantığı zıtlığı bağlamaz.`
    },
    {
        id: 34,
        type: 'A',
        instruction: "27-36 sorularda, verilen cümleyi uygun şekilde tamamlayan ifadeyi bulunuz.",
        text: "Since periodic river floods deposited fertile silt and provided predictable water supplies for agriculture, ----.",
        options: {
            A: "nomadic hunter-gatherer bands abandoned trade routes across the fertile plains",
            B: "ancient civilizations first arose and flourished along the banks of major river valleys",
            C: "early agrarian societies were perpetually vulnerable to catastrophic seasonal famines",
            D: "irrigation engineering proved completely unnecessary for early urban settlements",
            E: "continental empires deliberately built their capital cities far away from waterways"
        },
        correct: "B",
        dict: { "periodic": "periyodik/dönemsel", "silt": "alüvyon/balçık", "flourish": "gelişmek/serpilmek", "agrarian": "tarımsal" },
        explanation: `<b>✅ Doğru Cevap: B</b><br><b>📌 Sebep:</b> "Since" (çünkü / -den dolayı) sebep bağlacı, nehir taşkınlarının verimli alüvyonlar bırakarak tarımı ve su teminini desteklemesi nedenini, ilk büyük medeniyetlerin nehir vadilerinde doğup gelişmesi (Mezopotamya, Nil vb.) sonucu ile bağlar.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Göçebelerin ticaret yollarını terk etmesi alakasızdır.<br><b>C)</b> Sürekli kıtlık çekmeleri değil zenginleşmeleri beklenir.<br><b>D)</b> Sulama sistemlerinin gereksizleşmesi tarihi olgulara aykırıdır.<br><b>E)</b> Başkentlerin sudan uzağa kurulması çelişir.`
    },
    {
        id: 35,
        type: 'A',
        instruction: "27-36 sorularda, verilen cümleyi uygun şekilde tamamlayan ifadeyi bulunuz.",
        text: "Although household dust is commonly assumed to consist almost entirely of shed human skin cells, ----.",
        options: {
            A: "chemical analyses reveal that it comprises a diverse mix of outdoor soil, textile fibres, and pollutants",
            B: "microscopic mites feed exclusively on organic minerals blown in from rural atmospheres",
            C: "dermatologists confirm that peeling epidermal tissues account for nearly all indoor debris",
            D: "regular vacuuming completely eliminates all inorganic matter from interior residential areas",
            E: "it contains virtually no synthetic compounds or microplastic fragments from consumer goods"
        },
        correct: "A",
        dict: { "household dust": "ev tozu", "shed": "dökmek/dökülen", "debris": "kalıntı/döküntü", "epidermal": "deriyle ilgili" },
        explanation: `<b>✅ Doğru Cevap: A</b><br><b>📌 Sebep:</b> "Although" zıtlık bağlacı, ev tozunun neredeyse tamamen insan ölü derisinden oluştuğu yönündeki yaygın varsayım ile kimyasal analizlerin tozun aslında dış ortam toprağı, lifler ve kirleticilerden oluşan karmaşık bir yapı olduğunu göstermesi arasındaki tezatı belirtir.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B)</b> Akarların neyle beslendiği toz bileşimi tezatını tamamlamaz.<br><b>C)</b> Deri olduğunu onaylaması "although" zıtlığını yok eder.<br><b>D)</b> Süpürme işlemi toz bileşimi gerçeğini açıklamaz.<br><b>E)</b> Sentetik madde içermediği iddiası yanlıştır.`
    },
    {
        id: 36,
        type: 'A',
        instruction: "27-36 sorularda, verilen cümleyi uygun şekilde tamamlayan ifadeyi bulunuz.",
        text: "Because language is not merely a tool for communication but a primary vessel of cultural memory, ----.",
        options: {
            A: "linguistic globalisation has permanently eliminated regional dialectal variations",
            B: "the loss of an indigenous language represents the erosion of an entire community's unique identity",
            C: "multilingual individuals inevitably discard their heritage in favor of dominant lingua francas",
            D: "grammatical rules develop independently of the socio-historical experiences of their speakers",
            E: "preserving ancient texts requires minimal understanding of traditional folklore and customs"
        },
        correct: "B",
        dict: { "vessel": "araç/taşıyıcı", "indigenous": "yerli", "erosion": "aşınma/yok olma", "lingua franca": "ortak dil" },
        explanation: `<b>✅ Doğru Cevap: B</b><br><b>📌 Sebep:</b> "Because" sebep-sonuç bağlacı, dilin yalnızca bir iletişim aracı değil aynı zamanda kültürel hafızanın taşıyıcısı olması sebebiyle, yerli bir dilin yok olmasının o topluluğun kimliğinin de aşınması/silinmesi anlamına geleceğini mantıksal olarak açıklar.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Küresel dilin lehçeleri tamamen yok ettiği kesin yargısı doğrudan sonuç değildir.<br><b>C)</b> Çok dillilerin köklerini terk ettiği iddiası olumsuz ve tutarsızdır.<br><b>D)</b> Dilbilgisi kurallarının bağımsız gelişmesi nedenselliğe uymaz.<br><b>E)</b> Metinleri korumak için kültürü anlamanın gerekmediği iddiası çelişir.`
    },
    {
        id: 37,
        type: 'C',
        instruction: "37-42 sorularda, verilen İngilizce cümleye anlamca en yakın Türkçe cümleyi bulunuz.",
        text: "Although smart cities are designed to optimize urban resource management through advanced interconnected sensors, concerns regarding personal data privacy are frequently raised by cybersecurity experts who analyze vulnerabilities within municipal digital networks.",
        options: {
            A: "Akıllı şehirler gelişmiş birbirine bağlı sensörler aracılığıyla kentsel kaynak yönetimini optimize etmek için tasarlanmış olsalar da belediyelerin dijital ağlarındaki güvenlik açıklarını analiz eden siber güvenlik uzmanları tarafından kişisel veri gizliliğine ilişkin endişeler sıklıkla dile getirilmektedir.",
            B: "Gelişmiş birbirine bağlı sensörler yoluyla kentsel kaynak yönetimini optimize etmeyi hedefleyen akıllı şehirlerde, belediyelerin dijital ağlarındaki açıkları inceleyen siber güvenlik uzmanlarının kişisel veri gizliliği hakkındaki endişeleri giderek artmaktadır.",
            C: "Akıllı şehirlerin birbirine bağlı sensörlerle kentsel kaynakları daha verimli yönetmek amacıyla tasarlanmasına rağmen, siber güvenlik uzmanları belediyelerin dijital ağlarındaki zafiyetleri analiz ederek kişisel veri gizliliğine dair endişelerini paylaşmışlardır.",
            D: "Belediyelerin dijital ağlarındaki açıkları inceleyen siber güvenlik uzmanları kişisel veri gizliliğine dair endişelerini sıklıkla dile getirmektedir çünkü akıllı şehirler kentsel kaynak yönetimini optimize eden gelişmiş sensörlerle donatılmıştır.",
            E: "Kişisel veri gizliliğine ilişkin endişeler siber güvenlik uzmanları tarafından sıklıkla dile getirilse de akıllı şehirler, belediyelerin dijital ağlarındaki açıkları kapatmak ve kentsel kaynak yönetimini optimize etmek amacıyla tasarlanmaktadır."
        },
        correct: "A",
        dict: {
            "optimize": "en uygun hale getirmek/optimize etmek",
            "interconnected": "birbirine bağlı",
            "vulnerabilities": "güvenlik açıkları/zafiyetler",
            "municipal": "belediyeye ait/kentsel"
        },
        explanation: `<b>✅ Doğru Cevap: A</b><br><b>📌 Sebep:</b> İngilizce cümledeki 'Although...' (zıtlık yan cümleciği), 'are designed' (geniş zaman edilgen çatı) ve ana cümledeki '...are frequently raised by cybersecurity experts who...' (özne ve sıfat cümleciği dizilimi) A seçeneğinde eksiksiz ve tam karşılık bulmuştur.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B)</b> '...endişeleri giderek artmaktadır' ifadesi orijinal cümlenin edilgen yapısını ('are frequently raised') ve zamanını karşılamaz.<br><b>C)</b> '...paylaşmışlardır' (Past Tense kayması) ve sıfat tamlaması hatalıdır.<br><b>D)</b> 'Because' (çünkü) sebep-sonuç ilişkisi kurulmuş, 'Although' zıtlık anlamı bozulmuştur.<br><b>E)</b> Ana cümle ile yan cümlenin vurgusu ve zıtlık konumu yer değiştirmiştir.`
    },
    {
        id: 38,
        type: 'C',
        instruction: "37-42 sorularda, verilen İngilizce cümleye anlamca en yakın Türkçe cümleyi bulunuz.",
        text: "While cognitive psychologists assert that intentional cheerfulness can effectively alleviate acute depressive symptoms, it is acknowledged by clinical practitioners that forced optimism may inadvertently exacerbate underlying emotional distress.",
        options: {
            A: "Bilişsel psikologlar kasıtlı neşenin akut depresif belirtileri etkili bir şekilde hafifletebileceğini öne sürerken, klinik pratisyenler tarafından zoraki iyimserliğin altta yatan duygusal sıkıntıyı istemeden şiddetlendirebileceği kabul edilmektedir.",
            B: "Klinik pratisyenler zoraki iyimserliğin duygusal sıkıntıyı artırabileceğini kabul etse de bilişsel psikologlara göre kasıtlı neşeli olmak akut depresif belirtileri hafifletmede oldukça etkilidir.",
            C: "Bilişsel psikologlar tarafından kasıtlı neşenin akut depresyonu tamamen ortadan kaldırabileceği iddia edilmektedir; ancak klinik uzmanlar zoraki iyimserliğin derin duygusal problemleri tetikleyebileceğini vurgulamaktadır.",
            D: "Kasıtlı neşenin akut depresif belirtileri etkili bir biçimde hafifletebileceği bilişsel psikologlarca öne sürülmüştür fakat zoraki iyimserliğin altta yatan duygusal gerginliği artırabileceği klinik uzmanlarca kabul görmüştür.",
            E: "Bilişsel psikologların kasıtlı neşe sayesinde akut depresif belirtilerin hafifleyeceğini savunmasına rağmen, klinik uygulayıcılar zoraki iyimserliğin duygusal sıkıntıları istemeden artırdığını fark etmişlerdir."
        },
        correct: "A",
        dict: {
            "intentional": "kasıtlı/bilinçli",
            "alleviate": "hafifletmek/azaltmak",
            "inadvertently": "istemeden/farkında olmadan",
            "exacerbate": "şiddetlendirmek/kötüleştirmek"
        },
        explanation: `<b>✅ Doğru Cevap: A</b><br><b>📌 Sebep:</b> 'While cognitive psychologists assert...' (Bilişsel psikologlar ... öne sürerken) yan cümleciği ile 'it is acknowledged by clinical practitioners that...' (...klinik pratisyenler tarafından kabul edilmektedir) ana cümlesinin edilgen yapısı ve 'may inadvertently exacerbate' (istemeden şiddetlendirebilir) modal yapısı birebir A şıkkında verilmiştir.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B)</b> Ana cümle ile yan cümle zıtlık yerleri değiştirilmiş, edilgen çatı bozulmuştur.<br><b>C)</b> 'tamamen ortadan kaldırabileceği' (anlam fazlalığı) ve eksik zarf çevirisi mevcuttur.<br><b>D)</b> 'öne sürülmüştür / kabul görmüştür' (Present yerine Past Tense kullanımı).<br><b>E)</b> 'fark etmişlerdir' yüklem uyuşmazlığı ve modal kaybı içermektedir.`
    },
    {
        id: 39,
        type: 'C',
        instruction: "37-42 sorularda, verilen İngilizce cümleye anlamca en yakın Türkçe cümleyi bulunuz.",
        text: "Because deceptive communication is strictly condemned in formal institutional settings, prosocial lies that are told to preserve interpersonal harmony are generally tolerated in daily social interactions.",
        options: {
            A: "Yanıltıcı iletişim resmi kurumsal ortamlarda kesinlikle kınandığı için, kişilerarası uyumu korumak amacıyla söylenen olumlu sosyal yalanlar günlük sosyal etkileşimlerde genellikle hoş görülmektedir.",
            B: "Resmi kurumsal ortamlarda aldatıcı iletişimin kesin bir şekilde yasaklanması sebebiyle, insanlar arası uyumu devam ettirmek için başvurulan beyaz yalanlar gündelik yaşamda çoğunlukla kabul görmektedir.",
            C: "Kişilerarası uyumu korumak için söylenen olumlu sosyal yalanlar günlük ilişkilerde hoş görülse de resmi kurumlardaki yanıltıcı iletişim biçimleri toplum tarafından kesinlikle kınanmaktadır.",
            D: "Yanıltıcı iletişimin resmi kurumsal ortamlarda hoş karşılanmaması, kişisel ilişkileri korumak adına söylenen sosyal yalanların günlük iletişimde tamamen tolere edilmesine yol açmıştır.",
            E: "Günlük sosyal etkileşimlerde kişilerarası uyumu sağlamak için söylenen prososyal yalanlar hoş görülür çünkü resmi kurumsal ortamlarda aldatıcı her türlü iletişim sert biçimde kınanır."
        },
        correct: "A",
        dict: {
            "strictly condemned": "kesinlikle/sertçe kınanan",
            "prosocial lies": "olumlu sosyal/toplum yanlısı yalanlar",
            "interpersonal harmony": "kişilerarası uyum",
            "tolerated": "hoş görülen/tolere edilen"
        },
        explanation: `<b>✅ Doğru Cevap: A</b><br><b>📌 Sebep:</b> 'Because deceptive communication is strictly condemned...' (Yanıltıcı iletişim resmi kurumsal ortamlarda kesinlikle kınandığı için) sebep zarf cümleciği, relative clause içeren özne öbeği ('prosocial lies that are told...') ve 'are generally tolerated' geniş zaman edilgen yapısı eksiksiz olarak A seçeneğinde aktarılmıştır.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B)</b> '...kesin bir şekilde yasaklanması' ('is strictly condemned' kınanmak fiilidir, yasaklanmak değil).<br><b>C)</b> 'Because' sebep bağı yerine '...hoş görülse de' zıtlık yapısı kurulmuştur.<br><b>D)</b> '...yol açmıştır' (Present Perfect etken sonuç yüklemi yapılmıştır, asıl metin 'are generally tolerated'dir).<br><b>E)</b> Cümle dizilimi ve neden-sonuç odak sırası tersine çevrilmiştir.`
    },
    {
        id: 40,
        type: 'D',
        instruction: "37-42 sorularda, verilen Türkçe cümleye anlamca en yakın İngilizce cümleyi bulunuz.",
        text: "Tarih boyunca toplumları derinden sarsan büyük pandemiler, yalnızca sağlık sistemlerini çökertmekle kalmamış, aynı zamanda küresel ticaret ağları kısıtlandığı için benzeri görülmemiş ekonomik krizleri de tetiklemiştir.",
        options: {
            A: "Major pandemics that severely shook societies throughout history not only collapsed healthcare systems but also triggered unprecedented economic crises because global trade networks were restricted.",
            B: "Although major pandemics that severely shake societies have collapsed healthcare systems throughout history, unprecedented economic crises are triggered as global trade networks are restricted.",
            C: "Major pandemics, which severely shook societies throughout history, did not collapse healthcare systems, but they triggered unprecedented economic crises by restricting global trade networks.",
            D: "Because global trade networks were restricted, major pandemics that severely shook societies throughout history collapsed healthcare systems and triggered unprecedented economic crises.",
            E: "Major pandemics that have severely shaken societies throughout history have not only collapsed healthcare systems but also triggered unprecedented economic crises, which restricted global trade networks."
        },
        correct: "A",
        dict: {
            "severely": "derinden/şiddetle",
            "unprecedented": "benzeri görülmemiş",
            "collapse": "çökmek/çökertmek",
            "restricted": "kısıtlanmış"
        },
        explanation: `<b>✅ Doğru Cevap: A</b><br><b>📌 Sebep:</b> Türkçe cümledeki 'Tarih boyunca toplumları derinden sarsan büyük pandemiler...' öznesi ('Major pandemics that severely shook societies throughout history'), 'yalnızca ... değil aynı zamanda ...' yapısı ('not only ... but also ...'), 'küresel ticaret ağları kısıtlandığı için' sebep-sonuç zarf cümleciği ('because global trade networks were restricted') ve geçmiş zaman kurgusu A seçeneğinde eksiksiz ve tam bir sözdizimiyle aktarılmıştır.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B)</b> 'Although' (zıtlık) eklenerek cümle yapısı ve zaman kurgusu (Present Tense kayması) bozulmuştur.<br><b>C)</b> 'did not collapse' ifadesiyle ana cümlenin anlamı olumsuza çevrilmiştir.<br><b>D)</b> 'Not only ... but also' kalıbı atılmış, sebep-sonuç ilişkisinin ana vurgusu cümlenin başına kaydırılmıştır.<br><b>E)</b> 'Because' bağlacı yerine 'which restricted' relative yapısı getirilerek mantıksal gerekçe ilişkisi zayıflatılmıştır.`
    },
    {
        id: 41,
        type: 'D',
        instruction: "37-42 sorularda, verilen Türkçe cümleye anlamca en yakın İngilizce cümleyi bulunuz.",
        text: "Albert Einstein, ışığın hem dalga hem de parçacık gibi davrandığını öne süren devrim niteliğindeki fotoelektrik etki teorisini açıkladığında, klasik fizik kuralları altüst oldu çünkü bu yaklaşım dönemin yerleşik bilimsel kabullerine tamamen meydan okuyordu.",
        options: {
            A: "When Albert Einstein explained his revolutionary photoelectric effect theory, which suggested that light behaved as both a wave and a particle, the rules of classical physics were overturned because this approach completely challenged the established scientific assumptions of the era.",
            B: "Albert Einstein explained his revolutionary photoelectric effect theory proposing that light behaves as both a wave and a particle, so the rules of classical physics were overturned, although it completely challenged the established scientific assumptions of the era.",
            C: "Because the rules of classical physics were overturned when Albert Einstein explained his revolutionary photoelectric effect theory, this approach completely challenged the established scientific assumptions of the era by suggesting that light behaved as a wave and a particle.",
            D: "While Albert Einstein was explaining his revolutionary photoelectric effect theory suggesting that light behaved as both a wave and a particle, the rules of classical physics had been overturned since this approach challenged the established scientific assumptions of the era.",
            E: "When Albert Einstein explained his revolutionary photoelectric effect theory, which suggested that light behaves as both a wave and a particle, the rules of classical physics overturned the established scientific assumptions of the era because of this complete challenge."
        },
        correct: "A",
        dict: {
            "revolutionary": "devrim niteliğinde",
            "photoelectric effect": "fotoelektrik etki",
            "overturn": "altüst etmek/devirmek",
            "established assumptions": "yerleşik kabuller"
        },
        explanation: `<b>✅ Doğru Cevap: A</b><br><b>📌 Sebep:</b> 'Albert Einstein ... açıkladığında' zaman yapısı ('When Albert Einstein explained...'), sıfat cümleciği ('...which suggested that light behaved as both a wave and a particle...'), ana cümledeki edilgen yapı ('the rules of classical physics were overturned') ve sebep bildiren yan cümle ('because this approach completely challenged...') tam ve doğru gramer ögeleriyle A şıkkında birleştirilmiştir.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B)</b> 'Because' yerine 'although' zıtlık bağlacı kullanılarak nedensellik bozulmuştur.<br><b>C)</b> Neden-sonuç ve yan cümle dizilimi ters yüz edilmiştir.<br><b>D)</b> 'While ... was explaining' ve 'had been overturned' zaman uyumsuzluğu yaratmıştır.<br><b>E)</b> Ana cümlenin edilgen çatısı ('were overturned') aktif yapılarak özne-nesne ilişkisi çarpıtılmıştır.`
    },
    {
        id: 42,
        type: 'D',
        instruction: "37-42 sorularda, verilen Türkçe cümleye anlamca en yakın İngilizce cümleyi bulunuz.",
        text: "Son evre kalp yetmezliği çeken hastaların ömrünü uzatmak için tasarlanan yapay kalp cihazları, nakil bekleyen bireyler için hayati bir köprü görevi görse de enfeksiyon ve kan pıhtılaşması gibi riskler hala tam olarak ortadan kaldırılamamıştır.",
        options: {
            A: "Although artificial heart devices that are designed to prolong the lifespan of patients suffering from end-stage heart failure serve as a vital bridge for individuals awaiting a transplant, risks such as infection and blood clotting have still not been completely eliminated.",
            B: "Artificial heart devices designed to prolong the lifespan of patients suffering from end-stage heart failure serve as a vital bridge for individuals awaiting a transplant; therefore, risks like infection and blood clotting could not be completely eliminated.",
            C: "Even though artificial heart devices prolong the lifespan of patients who suffered from end-stage heart failure by serving as a vital bridge, risks such as infection and blood clotting are never eliminated for individuals awaiting a transplant.",
            D: "Because artificial heart devices that are designed to prolong the lifespan of patients suffering from end-stage heart failure serve as a vital bridge for individuals awaiting a transplant, risks such as infection and blood clotting have still not been eliminated completely.",
            E: "Although artificial heart devices were designed to prolong the lifespan of patients suffering from end-stage heart failure, they served as a vital bridge for individuals awaiting a transplant despite the fact that risks like infection and blood clotting cannot be eliminated."
        },
        correct: "A",
        dict: {
            "prolong": "uzatmak",
            "end-stage heart failure": "son evre kalp yetmezliği",
            "vital bridge": "hayati köprü",
            "blood clotting": "kan pıhtılaşması",
            "eliminate": "ortadan kaldırmak/yok etmek"
        },
        explanation: `<b>✅ Doğru Cevap: A</b><br><b>📌 Sebep:</b> '...görevi görse de' zıtlık yan cümleciği ('Although artificial heart devices ... serve as a vital bridge...'), 'tasarlanan' nitelemesi ('that are designed to... / designed to...'), ve ana cümledeki present passive çatı ('risks ... have still not been completely eliminated') anlam ve vurgu kaybı olmadan A seçeneğinde tam olarak örtüşmektedir.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B)</b> 'Although' zıtlığı yerine 'therefore' (bu yüzden) sebep-sonuç ilişkisi kurulmuştur.<br><b>C)</b> 'who suffered' ve 'are never eliminated' kısımlarında zaman ve anlam kayması vardır.<br><b>D)</b> 'Although' yerine 'Because' kullanılmıştır.<br><b>E)</b> 'were designed' ve 'served' kullanılarak genel-geçer tıbbi bir olgu geçmiş zamana (Past Tense) hapsedilmiştir.`
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

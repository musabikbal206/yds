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
        instruction: "1-6. sorularda, cümlede boş bırakılan yerlere uygun düşen sözcük ya da ifadeyi bulunuz.",
        text: "Ever since Campylobacter species ---- as a primary cause of acute bacterial gastroenteritis in the late 1970s, strict hygiene protocols ---- in poultry processing plants across the globe.",
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
        type: 'B',
        instruction: "43-46 soruları aşağıdaki parçaya göre cevaplayınız.",
        paragraph: "In an era of relentless globalisation, contemporary corporate entities have increasingly structured their manufacturing processes around sprawling, transnational supply networks. Pioneered primarily by multinational automotive and technology conglomerates, the 'just-in-time' inventory paradigm was designed to minimise warehousing overheads and eliminate operational redundancies by coordinating component deliveries with precision schedules. Under this framework, raw materials and intermediate assemblies arrive at manufacturing facilities mere hours before they are incorporated into final consumer products. While this hyper-efficient logistical model drastically compressed operational expenditures and inflated short-term profit margins across several decades, it concurrently introduced unprecedented systemic vulnerabilities. The profound fragility inherent in such globally dispersed value chains became starkly apparent when recent geopolitical friction, regional conflicts, and international transport bottlenecks precipitated widespread industrial paralysis. With single-source suppliers unable to dispatch specialised parts across congested maritime routes, multinational assembly lines ground to an abrupt standstill worldwide. Consequently, corporate strategists and supply chain economists are now fundamentally re-evaluating the dogmatic pursuit of cost minimization. Many enterprises have begun pivoting toward 'just-in-case' resilience strategies, which prioritise localized component sourcing, regional warehousing redundancy, and supplier diversification over immediate cost efficiency, even if doing so marginally diminishes profit margins.",
        text: "Which of the following could be the best title for the passage?",
        options: {
            A: "The Irreversible Collapse of Multinational Automotive Conglomerates",
            B: "From Extreme Efficiency to Strategic Resilience: Rethinking Global Supply Chains",
            C: "The Superiority of Just-in-Time Logistics in Eliminating Geopolitical Conflicts",
            D: "How Maritime Route Congestion Permanently Ended International Trade",
            E: "Technological Innovations in Contemporary Regional Warehousing Systems"
        },
        correct: "B",
        dict: {
            "sprawling": "geniş alana yayılan/düzensiz genişleyen",
            "redundancy": "fazlalık/yedekleme",
            "precipitate": "hızlandırmak/tetiklemek",
            "resilience": "dayanıklılık/esneklik",
            "bottleneck": "darboğaz/tıkanıklık"
        },
        explanation: `<b>✅ Doğru Cevap: B) From Extreme Efficiency to Strategic Resilience: Rethinking Global Supply Chains</b><br><b>📌 Sebep:</b> Parçanın bütünü, maliyet odaklı aşırı verimli "just-in-time" tedarik zinciri modelinin krizler karşısında kırılgan kalmasını ve şirketlerin artık dayanıklılığı ("just-in-case" resilience) önceleyen yeni stratejilere yönelmesini ele almaktadır.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Otomotiv devlerinin geri dönülemez çöküşü parçanın ana fikri değildir, aşırı genellemedir.<br><b>C)</b> Modelin jeopolitik çatışmaları bitirdiğine dair bir iddia metinde yoktur.<br><b>D)</b> Uluslararası ticaretin kalıcı olarak bittiği söylenemez.<br><b>E)</b> Yalnızca depolama teknolojilerini anlatan dar kapsamlı bir başlıktır.`
    },
    {
        id: 44,
        type: 'B',
        instruction: "43-46 soruları aşağıdaki parçaya göre cevaplayınız.",
        paragraph: "In an era of relentless globalisation, contemporary corporate entities have increasingly structured their manufacturing processes around sprawling, transnational supply networks. Pioneered primarily by multinational automotive and technology conglomerates, the 'just-in-time' inventory paradigm was designed to minimise warehousing overheads and eliminate operational redundancies by coordinating component deliveries with precision schedules. Under this framework, raw materials and intermediate assemblies arrive at manufacturing facilities mere hours before they are incorporated into final consumer products. While this hyper-efficient logistical model drastically compressed operational expenditures and inflated short-term profit margins across several decades, it concurrently introduced unprecedented systemic vulnerabilities. The profound fragility inherent in such globally dispersed value chains became starkly apparent when recent geopolitical friction, regional conflicts, and international transport bottlenecks precipitated widespread industrial paralysis. With single-source suppliers unable to dispatch specialised parts across congested maritime routes, multinational assembly lines ground to an abrupt standstill worldwide. Consequently, corporate strategists and supply chain economists are now fundamentally re-evaluating the dogmatic pursuit of cost minimization. Many enterprises have begun pivoting toward 'just-in-case' resilience strategies, which prioritise localized component sourcing, regional warehousing redundancy, and supplier diversification over immediate cost efficiency, even if doing so marginally diminishes profit margins.",
        text: "According to the passage, the 'just-in-time' manufacturing model ----.",
        options: {
            A: "requires corporations to maintain expansive domestic warehouses to safeguard against shipping delays",
            B: "relies on the scheduled delivery of parts shortly before their integration into finished goods",
            C: "was initially formulated to combat international transport bottlenecks and maritime congestion",
            D: "ensures that manufacturing operations remain completely immune to sudden regional disruptions",
            E: "mandates the acquisition of identical components from multiple competing regional suppliers"
        },
        correct: "B",
        dict: {
            "overhead": "genel gider/işletme masrafı",
            "incorporate": "dahil etmek/birleştirmek",
            "vulnerability": "kırılganlık/zafiyet",
            "standstill": "durma/kesinti"
        },
        explanation: `<b>✅ Doğru Cevap: B) relies on the scheduled delivery of parts shortly before their integration into finished goods</b><br><b>📌 Sebep:</b> Parçada geçen "...raw materials and intermediate assemblies arrive at manufacturing facilities mere hours before they are incorporated into final consumer products" ifadesi doğrudan B seçeneğindeki ifadeyle eşanlamlı ve paraleldir.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Model depolamayı artırmayı değil, tam tersine depo maliyetlerini en aza indirmeyi hedefler.<br><b>C)</b> Deniz darboğazlarını çözmek için değil, maliyetleri kısmak için geliştirilmiştir.<br><b>D)</b> Bölgesel aksamalara karşı bağışık (immune) değil, aksine son derece kırılgandır.<br><b>E)</b> Tek tedarikçiye bağımlılık yaratmıştır; çoklu tedarik "just-in-case" modeline aittir.`
    },
    {
        id: 45,
        type: 'B',
        instruction: "43-46 soruları aşağıdaki parçaya göre cevaplayınız.",
        paragraph: "In an era of relentless globalisation, contemporary corporate entities have increasingly structured their manufacturing processes around sprawling, transnational supply networks. Pioneered primarily by multinational automotive and technology conglomerates, the 'just-in-time' inventory paradigm was designed to minimise warehousing overheads and eliminate operational redundancies by coordinating component deliveries with precision schedules. Under this framework, raw materials and intermediate assemblies arrive at manufacturing facilities mere hours before they are incorporated into final consumer products. While this hyper-efficient logistical model drastically compressed operational expenditures and inflated short-term profit margins across several decades, it concurrently introduced unprecedented systemic vulnerabilities. The profound fragility inherent in such globally dispersed value chains became starkly apparent when recent geopolitical friction, regional conflicts, and international transport bottlenecks precipitated widespread industrial paralysis. With single-source suppliers unable to dispatch specialised parts across congested maritime routes, multinational assembly lines ground to an abrupt standstill worldwide. Consequently, corporate strategists and supply chain economists are now fundamentally re-evaluating the dogmatic pursuit of cost minimization. Many enterprises have begun pivoting toward 'just-in-case' resilience strategies, which prioritise localized component sourcing, regional warehousing redundancy, and supplier diversification over immediate cost efficiency, even if doing so marginally diminishes profit margins.",
        text: "It can be inferred from the passage that adopting 'just-in-case' resilience strategies ----.",
        options: {
            A: "will completely eliminate the necessity for domestic manufacturing and local labour forces",
            B: "involves accepting slightly higher operational costs in exchange for enhanced supply security",
            C: "forces multinational conglomerates to abandon advanced technological components entirely",
            D: "has already proven to be far more profitable in the short term than any previous inventory model",
            E: "guarantees that international shipping corridors will operate without future maritime delays"
        },
        correct: "B",
        dict: {
            "paralysis": "felç/hareketsizlik",
            "conglomerate": "şirketler topluluğu/holding",
            "diversification": "çeşitlendirme",
            "dogmatic": "katı/sorgulanmaz"
        },
        explanation: `<b>✅ Doğru Cevap: B) involves accepting slightly higher operational costs in exchange for enhanced supply security</b><br><b>📌 Sebep:</b> Metnin sonundaki "...prioritise localized component sourcing, regional warehousing redundancy, and supplier diversification over immediate cost efficiency, even if doing so marginally diminishes profit margins" ifadesinden, şirketlerin tedarik güvenliği uğruna kâr marjlarında hafif bir düşüşü (yani daha yüksek işletme maliyetini) göze aldıkları net bir şekilde çıkarılabilir.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Yerel işgücünü ve üretimi gereksiz kılmaz; aksine yerelleşmeyi teşvik eder.<br><b>C)</b> İleri teknoloji parçalarının kullanımını terk ettirmez.<br><b>D)</b> Kısa vadede daha karlı olduğu söylenemez, kâr marjını azaltabileceği vurgulanmıştır.<br><b>E)</b> Küresel deniz trafiğindeki gecikmeleri tamamen ortadan kaldırma garantisi vermez.`
    },
    {
        id: 46,
        type: 'B',
        instruction: "43-46 soruları aşağıdaki parçaya göre cevaplayınız.",
        paragraph: "In an era of relentless globalisation, contemporary corporate entities have increasingly structured their manufacturing processes around sprawling, transnational supply networks. Pioneered primarily by multinational automotive and technology conglomerates, the 'just-in-time' inventory paradigm was designed to minimise warehousing overheads and eliminate operational redundancies by coordinating component deliveries with precision schedules. Under this framework, raw materials and intermediate assemblies arrive at manufacturing facilities mere hours before they are incorporated into final consumer products. While this hyper-efficient logistical model drastically compressed operational expenditures and inflated short-term profit margins across several decades, it concurrently introduced unprecedented systemic vulnerabilities. The profound fragility inherent in such globally dispersed value chains became starkly apparent when recent geopolitical friction, regional conflicts, and international transport bottlenecks precipitated widespread industrial paralysis. With single-source suppliers unable to dispatch specialised parts across congested maritime routes, multinational assembly lines ground to an abrupt standstill worldwide. Consequently, corporate strategists and supply chain economists are now fundamentally re-evaluating the dogmatic pursuit of cost minimization. Many enterprises have begun pivoting toward 'just-in-case' resilience strategies, which prioritise localized component sourcing, regional warehousing redundancy, and supplier diversification over immediate cost efficiency, even if doing so marginally diminishes profit margins.",
        text: "The author's primary objective in this passage is to ----.",
        options: {
            A: "criticise multinational firms for completely neglecting technological integration in manufacturing",
            B: "explain how unexpected global disruptions prompted a shift from extreme efficiency to risk management in logistics",
            C: "advocate for the immediate total prohibition of offshore manufacturing and international maritime transport",
            D: "demonstrate that local suppliers are incapable of fulfilling the demands of automotive conglomerates",
            E: "argue that warehousing overheads should remain the primary factor in determining retail prices"
        },
        correct: "B",
        dict: {
            "disruption": "aksama/kesinti",
            "prohibition": "yasaklama",
            "fulfil": "yerine getirmek/karşılamak",
            "neglect": "ihmal etmek"
        },
        explanation: `<b>✅ Doğru Cevap: B) explain how unexpected global disruptions prompted a shift from extreme efficiency to risk management in logistics</b><br><b>📌 Sebep:</b> Yazarın metindeki asıl amacı, ortaya çıkan küresel darboğazların ve krizlerin, şirketleri sadece maliyet odaklı verimlilikten ("just-in-time") risk yönetimi ve esnekliğe ("just-in-case") yönelttiği süreci açıklamaktır.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Şirketleri teknoloji entegrasyonunu ihmal etmekle suçlamaz.<br><b>C)</b> Uluslararası deniz taşımacılığının tamamen yasaklanmasını savunmaz.<br><b>D)</b> Yerel tedarikçilerin yetersiz olduğunu kanıtlamaya çalışmaz.<br><b>E)</b> Depo masraflarının perakende fiyatlarını belirleyen ana faktör kalması gerektiğini savunmaz.`
    },
    {
        id: 47,
        type: 'B',
        instruction: "47-50 soruları aşağıdaki parçaya göre cevaplayınız.",
        paragraph: "Hypertension, clinically defined as a persistent elevation of systemic arterial pressure above established physiological thresholds, represents one of the most insidious contributors to global cardiovascular morbidity. Frequently termed the 'silent killer' due to its asymptomatic progression over decades, chronic elevated pressure exerts relentless shear stress on arterial walls. This mechanical strain initiates endothelial dysfunction, precipitating a cascade of vascular remodelling characterised by arterial stiffening, luminal narrowing, and atheromatous plaque accumulation. Consequently, critical target organs—most notably the heart, kidneys, and brain—suffer progressive microvascular and macrovascular damage. Epidemiological investigations demonstrate that long-standing hypertension substantially multiplies the relative risk of myocardial infarction, chronic renal insufficiency, and cerebrovascular accidents. Primary prevention and therapeutic strategies have historically centred on sodium reduction, weight management, and aerobic exercise. However, contemporary clinical pharmacotherapy increasingly relies on multi-drug regimens that target distinct physiological pathways simultaneously, such as renin-angiotensin-aldosterone axis inhibition and calcium channel blockade. Dr. Eleanor Vance, a leading researcher at the Global Cardiovascular Consortium, notes that despite the widespread availability of efficacious anti-hypertensive agents, therapeutic inertia among clinicians and poor patient adherence remain formidable barriers to achieving optimal blood pressure control worldwide.",
        text: "As it is clearly stated in the passage, hypertension is referred to as the 'silent killer' because ----.",
        options: {
            A: "it directly eliminates cardiac muscle cells without triggering an immune response",
            B: "its pathological development advances over many years without exhibiting noticeable symptoms",
            C: "it cannot be detected by standard systemic arterial pressure measurements",
            D: "the damage it causes is exclusively confined to cerebral microvascular structures",
            E: "it develops exclusively in individuals who completely lack genetic risk factors"
        },
        correct: "B",
        dict: {
            "elevation": "yükselme/artış",
            "insidious": "sinsi/fark ettirmeden ilerleyen",
            "asymptomatic": "belirti göstermeyen",
            "shear stress": "kayma gerilmesi/damar içi basınç stresi",
            "precipitating": "tetikleyen/hızlandıran"
        },
        explanation: `<b>✅ Doğru Cevap: B) its pathological development advances over many years without exhibiting noticeable symptoms</b><br><b>📌 Sebep:</b> Metinde geçen "Frequently termed the 'silent killer' due to its asymptomatic progression over decades..." ifadesi, hipertansiyonun belirti vermeksizin on yıllarca ilerlemesi nedeniyle 'sessiz katil' olarak adlandırıldığını açıkça ortaya koymaktadır.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Kalp kası hücrelerini doğrudan yok ettiği bilgisi metinde yer almaz.<br><b>C)</b> Standart ölçümlerle tespit edilemediği iddiası yanlıştır.<br><b>D)</b> Hasarın sadece beyin damarlarıyla sınırlı olduğu ('exclusively confined') çarpıtmadır; kalp ve böbrekler de etkilenir.<br><b>E)</b> Sadece genetik yatkınlığı olmayanlarda görüldüğü ifadesi metinle çelişir.`
    },
    {
        id: 48,
        type: 'B',
        instruction: "47-50 soruları aşağıdaki parçaya göre cevaplayınız.",
        paragraph: "Hypertension, clinically defined as a persistent elevation of systemic arterial pressure above established physiological thresholds, represents one of the most insidious contributors to global cardiovascular morbidity. Frequently termed the 'silent killer' due to its asymptomatic progression over decades, chronic elevated pressure exerts relentless shear stress on arterial walls. This mechanical strain initiates endothelial dysfunction, precipitating a cascade of vascular remodelling characterised by arterial stiffening, luminal narrowing, and atheromatous plaque accumulation. Consequently, critical target organs—most notably the heart, kidneys, and brain—suffer progressive microvascular and macrovascular damage. Epidemiological investigations demonstrate that long-standing hypertension substantially multiplies the relative risk of myocardial infarction, chronic renal insufficiency, and cerebrovascular accidents. Primary prevention and therapeutic strategies have historically centred on sodium reduction, weight management, and aerobic exercise. However, contemporary clinical pharmacotherapy increasingly relies on multi-drug regimens that target distinct physiological pathways simultaneously, such as renin-angiotensin-aldosterone axis inhibition and calcium channel blockade. Dr. Eleanor Vance, a leading researcher at the Global Cardiovascular Consortium, notes that despite the widespread availability of efficacious anti-hypertensive agents, therapeutic inertia among clinicians and poor patient adherence remain formidable barriers to achieving optimal blood pressure control worldwide.",
        text: "One of the main aims of contemporary clinical pharmacotherapy in managing hypertension is to ----.",
        options: {
            A: "replace lifestyle modifications completely with single-dose synthetic remedies",
            B: "address multiple physiological mechanisms concurrently through combination drug strategies",
            C: "eliminate the necessity of monitoring renal function in chronic hypertensive patients",
            D: "ensure that blood pressure falls below normal resting physiological thresholds immediately",
            E: "reverse atheromatous plaques without intervening in arterial wall tension"
        },
        correct: "B",
        dict: {
            "remodelling": "yeniden şekillenme/yapısal bozulma",
            "luminal narrowing": "damar içi kanal daralması",
            "concurrently": "eş zamanlı olarak",
            "pharmacotherapy": "ilaçla tedavi"
        },
        explanation: `<b>✅ Doğru Cevap: B) address multiple physiological mechanisms concurrently through combination drug strategies</b><br><b>📌 Sebep:</b> Metindeki "...contemporary clinical pharmacotherapy increasingly relies on multi-drug regimens that target distinct physiological pathways simultaneously..." cümlesi, modern ilaç tedavisinin temel amacının birden fazla mekanizmayı eş zamanlı hedefleyen kombinasyon tedavileri uygulamak olduğunu belirtir.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Yaşam tarzı değişikliklerini tamamen terk ettirmeyi hedeflemez.<br><b>C)</b> Böbrek fonksiyon takibini gereksiz kılmak gibi bir hedefi yoktur.<br><b>D)</b> Basıncı aniden fizyolojik sınırların altına düşürmek doğru bir klinik yaklaşım değildir.<br><b>E)</b> Damar duvar gerilimine müdahale etmeden plakları yok etmek metin bağlamına uymaz.`
    },
    {
        id: 49,
        type: 'B',
        instruction: "47-50 soruları aşağıdaki parçaya göre cevaplayınız.",
        paragraph: "Hypertension, clinically defined as a persistent elevation of systemic arterial pressure above established physiological thresholds, represents one of the most insidious contributors to global cardiovascular morbidity. Frequently termed the 'silent killer' due to its asymptomatic progression over decades, chronic elevated pressure exerts relentless shear stress on arterial walls. This mechanical strain initiates endothelial dysfunction, precipitating a cascade of vascular remodelling characterised by arterial stiffening, luminal narrowing, and atheromatous plaque accumulation. Consequently, critical target organs—most notably the heart, kidneys, and brain—suffer progressive microvascular and macrovascular damage. Epidemiological investigations demonstrate that long-standing hypertension substantially multiplies the relative risk of myocardial infarction, chronic renal insufficiency, and cerebrovascular accidents. Primary prevention and therapeutic strategies have historically centred on sodium reduction, weight management, and aerobic exercise. However, contemporary clinical pharmacotherapy increasingly relies on multi-drug regimens that target distinct physiological pathways simultaneously, such as renin-angiotensin-aldosterone axis inhibition and calcium channel blockade. Dr. Eleanor Vance, a leading researcher at the Global Cardiovascular Consortium, notes that despite the widespread availability of efficacious anti-hypertensive agents, therapeutic inertia among clinicians and poor patient adherence remain formidable barriers to achieving optimal blood pressure control worldwide.",
        text: "It can be inferred from the passage that untreated long-term hypertension ----.",
        options: {
            A: "inevitably triggers irreversible structural changes throughout the vascular network and vital organs",
            B: "causes immediate acute failure of the central nervous system within a few weeks",
            C: "renders patient lifestyle interventions such as sodium restriction completely useless",
            D: "is less threatening to individuals with pre-existing chronic renal conditions",
            E: "primarily damages skeletal muscle tissue rather than the major organ systems"
        },
        correct: "A",
        dict: {
            "insufficiency": "yetersizlik",
            "endothelial": "damar iç zarı ile ilgili",
            "adherence": "uyum/bağlılık (tedaviye uyum)",
            "formidable": "zorlu/aşılması güç"
        },
        explanation: `<b>✅ Doğru Cevap: A) inevitably triggers irreversible structural changes throughout the vascular network and vital organs</b><br><b>📌 Sebep:</b> Metinde sürekli yüksek basıncın damar duvarlarında sertleşmeye, lümen daralmasına ve kalp, böbrek, beyin gibi hayati organlarda kalıcı mikro/makrovasküler hasara yol açtığı vurgulanmaktadır; dolayısıyla tedavi edilmeyen uzun süreli hipertansiyonun damar ağında ve organlarda yapısal bozulmalara yol açtığı çıkarılabilir.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B)</b> Birkaç hafta içinde ani merkezi sinir sistemi çöküşü yaratmaz (süreç on yıllara yayılır).<br><b>C)</b> Yaşam tarzı müdahalelerini tamamen etkisiz kılmaz.<br><b>D)</b> Böbrek hastaları için daha az tehdit edici olduğu çıkarımı yanlıştır.<br><b>E)</b> Asıl hasar iskelet kaslarında değil hayati organlardadır.`
    },
    {
        id: 50,
        type: 'B',
        instruction: "47-50 soruları aşağıdaki parçaya göre cevaplayınız.",
        paragraph: "Hypertension, clinically defined as a persistent elevation of systemic arterial pressure above established physiological thresholds, represents one of the most insidious contributors to global cardiovascular morbidity. Frequently termed the 'silent killer' due to its asymptomatic progression over decades, chronic elevated pressure exerts relentless shear stress on arterial walls. This mechanical strain initiates endothelial dysfunction, precipitating a cascade of vascular remodelling characterised by arterial stiffening, luminal narrowing, and atheromatous plaque accumulation. Consequently, critical target organs—most notably the heart, kidneys, and brain—suffer progressive microvascular and macrovascular damage. Epidemiological investigations demonstrate that long-standing hypertension substantially multiplies the relative risk of myocardial infarction, chronic renal insufficiency, and cerebrovascular accidents. Primary prevention and therapeutic strategies have historically centred on sodium reduction, weight management, and aerobic exercise. However, contemporary clinical pharmacotherapy increasingly relies on multi-drug regimens that target distinct physiological pathways simultaneously, such as renin-angiotensin-aldosterone axis inhibition and calcium channel blockade. Dr. Eleanor Vance, a leading researcher at the Global Cardiovascular Consortium, notes that despite the widespread availability of efficacious anti-hypertensive agents, therapeutic inertia among clinicians and poor patient adherence remain formidable barriers to achieving optimal blood pressure control worldwide.",
        text: "According to Dr. Eleanor Vance, the primary obstacle to controlling blood pressure globally is ----.",
        options: {
            A: "the total absence of potent and effective pharmacological medications in the market",
            B: "a combination of medical practitioner hesitancy and patients failing to follow prescribed treatments",
            C: "the severe side-effects caused by modern calcium channel blocking compounds",
            D: "the refusal of international healthcare agencies to fund dietary intervention programmes",
            E: "an incomplete scientific understanding of how shear stress damages endothelial cells"
        },
        correct: "B",
        dict: {
            "therapeutic inertia": "tedavi eylemsizliği/tedaviyi güncellememe",
            "efficacious": "etkili/yararlı",
            "hesitancy": "tereddüt/kararsızlık",
            "prescribed": "reçete edilmiş"
        },
        explanation: `<b>✅ Doğru Cevap: B) a combination of medical practitioner hesitancy and patients failing to follow prescribed treatments</b><br><b>📌 Sebep:</b> Metnin sonunda Dr. Vance'in belirttiği "...therapeutic inertia among clinicians and poor patient adherence remain formidable barriers..." ifadesi, hekimlerin tedavi konusundaki eylemsizliği/tereddütü ile hastaların tedaviye uyumsuzluğunu (adherence) doğrudan B şıkkı ile açıklar.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> İlaç eksikliği değil, aksine mevcut etkili ilaçların olduğu ('widespread availability') belirtilmiştir.<br><b>C)</b> Kalsiyum kanal blokörlerinin yan etkileri ana engel olarak sunulmamıştır.<br><b>D)</b> Sağlık kurumlarının fon desteği sağlamadığı iddiası metinde yer almaz.<br><b>E)</b> Bilimsel anlama eksikliğinden bahsedilmemiştir.`
    },
    {
        id: 51,
        type: 'B',
        instruction: "51-54 soruları aşağıdaki parçaya göre cevaplayınız.",
        paragraph: "Water scarcity is increasingly emerging as one of the most perilous socio-ecological crises of the twenty-first century, driven by an unsustainable convergence of rapid population growth, climate-induced hydrological variability, and extensive industrial contamination. Nowhere is this vulnerability more pronounced than in arid and semi-arid regions, where ancient subterranean aquifers—depleted at rates far exceeding their natural recharge capacities—are being relentlessly drained to sustain commercial agriculture. Historically perceived as an inexhaustible open-access resource, groundwater has suffered from systemic over-abstraction, precipitating irreversible land subsidence and saline intrusion into critical freshwater reserves. According to recent hydrological assessments, conventional supply-side interventions, such as large-scale dam construction and deep-well drilling, merely provide transient relief while fundamentally exacerbating long-term ecological degradation. Dr. Julian Morales, a senior researcher at the International Hydrological Institute, stresses that modern engineering efforts must transition from archaic supply-expansion paradigms toward comprehensive demand-side stewardship. This strategic shift necessitates implementing dynamic water pricing mechanisms, adopting precision drip irrigation systems, and enforcing strict regulatory caps on industrial effluents. Unless policymakers prioritize integrated water resources management that reconciles agricultural imperatives with ecological boundaries, persistent freshwater deficits will inevitably trigger widespread geopolitical friction and cross-border resource conflicts across hydrologically vulnerable river basins.",
        text: "As stated in the passage, subterranean aquifers in arid and semi-arid regions ----.",
        options: {
            A: "have been completely replenished through the rapid implementation of dynamic water pricing mechanisms",
            B: "are being extracted at speeds that significantly surpass their natural capacity to regenerate",
            C: "were historically managed through strict regulatory caps imposed on agricultural activities",
            D: "provide an inexhaustible supply of freshwater that effectively prevents land subsidence",
            E: "have become immune to saline intrusion due to modern deep-well drilling techniques"
        },
        correct: "B",
        dict: {
            "subterranean": "yeraltı",
            "aquifer": "su taşıyan katman/akifer",
            "depleted": "tüketilmiş/azaltılmış",
            "recharge": "yeniden dolma/beslenme",
            "land subsidence": "arazi çökmesi"
        },
        explanation: `<b>✅ Doğru Cevap: B) are being extracted at speeds that significantly surpass their natural capacity to regenerate</b><br><b>📌 Sebep:</b> Parçada geçen "...where ancient subterranean aquifers—depleted at rates far exceeding their natural recharge capacities—are being relentlessly drained..." ifadesi, yeraltı su kaynaklarının doğal yenilenme hızından çok daha yüksek bir hızla tüketildiğini doğrudan ifade eder.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Fiyatlandırma mekanizmalarıyla tamamen yenilendiği bilgisi yanlıştır.<br><b>C)</b> Tarihsel olarak katı kotalarla değil, açık/sınırsız bir kaynak ('open-access resource') olarak görülmüştür.<br><b>D)</b> Akiferler tükenmez değildir ve aşırı çekim arazi çökmesine ('land subsidence') yol açmaktadır.<br><b>E)</b> Derin kuyu sondajları tuzlanmayı önlemez; aksine sorunları artırır.`
    },
    {
        id: 52,
        type: 'B',
        instruction: "51-54 soruları aşağıdaki parçaya göre cevaplayınız.",
        paragraph: "Water scarcity is increasingly emerging as one of the most perilous socio-ecological crises of the twenty-first century, driven by an unsustainable convergence of rapid population growth, climate-induced hydrological variability, and extensive industrial contamination. Nowhere is this vulnerability more pronounced than in arid and semi-arid regions, where ancient subterranean aquifers—depleted at rates far exceeding their natural recharge capacities—are being relentlessly drained to sustain commercial agriculture. Historically perceived as an inexhaustible open-access resource, groundwater has suffered from systemic over-abstraction, precipitating irreversible land subsidence and saline intrusion into critical freshwater reserves. According to recent hydrological assessments, conventional supply-side interventions, such as large-scale dam construction and deep-well drilling, merely provide transient relief while fundamentally exacerbating long-term ecological degradation. Dr. Julian Morales, a senior researcher at the International Hydrological Institute, stresses that modern engineering efforts must transition from archaic supply-expansion paradigms toward comprehensive demand-side stewardship. This strategic shift necessitates implementing dynamic water pricing mechanisms, adopting precision drip irrigation systems, and enforcing strict regulatory caps on industrial effluents. Unless policymakers prioritize integrated water resources management that reconciles agricultural imperatives with ecological boundaries, persistent freshwater deficits will inevitably trigger widespread geopolitical friction and cross-border resource conflicts across hydrologically vulnerable river basins.",
        text: "As it is clear in the passage, traditional supply-side solutions like large-scale dam construction ----.",
        options: {
            A: "permanently resolve the structural imbalances between agricultural demand and water availability",
            B: "offer only temporary solutions while worsening long-term environmental deterioration",
            C: "eliminate the necessity for modern precision drip irrigation in arid river basins",
            D: "prevent international resource disputes from emerging among neighbouring countries",
            E: "have been completely replaced worldwide by dynamic water pricing frameworks"
        },
        correct: "B",
        dict: {
            "transient": "geçici/kısa süreli",
            "exacerbate": "şiddetlendirmek/kötüleştirmek",
            "degradation": "bozulma/tahribat",
            "stewardship": "sorumlu yönetim/idaresi"
        },
        explanation: `<b>✅ Doğru Cevap: B) offer only temporary solutions while worsening long-term environmental deterioration</b><br><b>📌 Sebep:</b> Metinde yer alan "...conventional supply-side interventions, such as large-scale dam construction and deep-well drilling, merely provide transient relief while fundamentally exacerbating long-term ecological degradation" cümlesi, geleneksel baraj gibi çözümlerin yalnızca geçici rahatlama sağladığını ve uzun vadeli ekolojik yıkımı artırdığını açıkça belirtir.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Dengesizlikleri kalıcı olarak çözmez.<br><b>C)</b> Damla sulama ihtiyacını ortadan kaldırmaz.<br><b>D)</b> Uluslararası kaynak çatışmalarını engellemez.<br><b>E)</b> Dünya genelinde tamamen kullanımdan kalktığı söylenemez.`
    },
    {
        id: 53,
        type: 'B',
        instruction: "51-54 soruları aşağıdaki parçaya göre cevaplayınız.",
        paragraph: "Water scarcity is increasingly emerging as one of the most perilous socio-ecological crises of the twenty-first century, driven by an unsustainable convergence of rapid population growth, climate-induced hydrological variability, and extensive industrial contamination. Nowhere is this vulnerability more pronounced than in arid and semi-arid regions, where ancient subterranean aquifers—depleted at rates far exceeding their natural recharge capacities—are being relentlessly drained to sustain commercial agriculture. Historically perceived as an inexhaustible open-access resource, groundwater has suffered from systemic over-abstraction, precipitating irreversible land subsidence and saline intrusion into critical freshwater reserves. According to recent hydrological assessments, conventional supply-side interventions, such as large-scale dam construction and deep-well drilling, merely provide transient relief while fundamentally exacerbating long-term ecological degradation. Dr. Julian Morales, a senior researcher at the International Hydrological Institute, stresses that modern engineering efforts must transition from archaic supply-expansion paradigms toward comprehensive demand-side stewardship. This strategic shift necessitates implementing dynamic water pricing mechanisms, adopting precision drip irrigation systems, and enforcing strict regulatory caps on industrial effluents. Unless policymakers prioritize integrated water resources management that reconciles agricultural imperatives with ecological boundaries, persistent freshwater deficits will inevitably trigger widespread geopolitical friction and cross-border resource conflicts across hydrologically vulnerable river basins.",
        text: "It is emphasized in the passage that failure to implement integrated water management ----.",
        options: {
            A: "will directly encourage agricultural sectors to abandon groundwater reliance entirely",
            B: "is likely to result in international tensions and disputes over shared water resources",
            C: "prompts developing countries to build deeper subterranean wells without regulation",
            D: "will instantly stabilize freshwater reserves in hydrologically vulnerable river basins",
            E: "renders modern drip irrigation techniques financially unattainable for farmers"
        },
        correct: "B",
        dict: {
            "reconcile": "uzlaştırmak/bağdaştırmak",
            "friction": "sürtüşme/anlaşmazlık",
            "effluent": "atık su/sanayi atığı",
            "imperative": "zorunluluk/ihtiyaç"
        },
        explanation: `<b>✅ Doğru Cevap: B) is likely to result in international tensions and disputes over shared water resources</b><br><b>📌 Sebep:</b> Parçanın son cümlesindeki "Unless policymakers prioritize integrated water resources management... persistent freshwater deficits will inevitably trigger widespread geopolitical friction and cross-border resource conflicts..." ifadesi, entegre su yönetimi uygulanmadığı takdirde ülkeler arası jeopolitik gerilim ve sınır ötesi çatışmaların kaçınılmaz olacağını vurgular.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Tarım sektörünün yeraltı suyu bağımlılığını bırakmasını sağlamaz.<br><b>C)</b> Derin kuyu açmaya teşvik etmesi ana vurgu değildir.<br><b>D)</b> Su rezervlerini dengeli kılmaz, aksine açık yaratır.<br><b>E)</b> Damla sulama tekniklerinin maliyetiyle ilgili bir çıkarım değildir.`
    },
    {
        id: 54,
        type: 'B',
        instruction: "51-54 soruları aşağıdaki parçaya göre cevaplayınız.",
        paragraph: "Water scarcity is increasingly emerging as one of the most perilous socio-ecological crises of the twenty-first century, driven by an unsustainable convergence of rapid population growth, climate-induced hydrological variability, and extensive industrial contamination. Nowhere is this vulnerability more pronounced than in arid and semi-arid regions, where ancient subterranean aquifers—depleted at rates far exceeding their natural recharge capacities—are being relentlessly drained to sustain commercial agriculture. Historically perceived as an inexhaustible open-access resource, groundwater has suffered from systemic over-abstraction, precipitating irreversible land subsidence and saline intrusion into critical freshwater reserves. According to recent hydrological assessments, conventional supply-side interventions, such as large-scale dam construction and deep-well drilling, merely provide transient relief while fundamentally exacerbating long-term ecological degradation. Dr. Julian Morales, a senior researcher at the International Hydrological Institute, stresses that modern engineering efforts must transition from archaic supply-expansion paradigms toward comprehensive demand-side stewardship. This strategic shift necessitates implementing dynamic water pricing mechanisms, adopting precision drip irrigation systems, and enforcing strict regulatory caps on industrial effluents. Unless policymakers prioritize integrated water resources management that reconciles agricultural imperatives with ecological boundaries, persistent freshwater deficits will inevitably trigger widespread geopolitical friction and cross-border resource conflicts across hydrologically vulnerable river basins.",
        text: "One understands from the passage that the main purpose of the author is to ----.",
        options: {
            A: "criticize the agricultural sector for its total refusal to adopt mechanical irrigation tools",
            B: "highlight the severity of water scarcity and advocate for a shift toward sustainable demand management",
            C: "demonstrate that subterranean aquifers are completely beyond the scope of scientific restoration",
            D: "argue that cross-border water conflicts can only be prevented by constructing larger dams",
            E: "prove that industrial contamination is the sole factor driving global freshwater depletion"
        },
        correct: "B",
        dict: {
            "scarcity": "kıtlık/yetersizlik",
            "advocate": "savunmak/desteklemek",
            "over-abstraction": "aşırı su çekimi",
            "perilous": "tehlikeli/vahim"
        },
        explanation: `<b>✅ Doğru Cevap: B) highlight the severity of water scarcity and advocate for a shift toward sustainable demand management</b><br><b>📌 Sebep:</b> Metnin bütününde su kıtlığının boyutları, yeraltı sularının aşırı çekilmesi ve geleneksel tedarik yöntemlerinin yetersizliği ortaya konularak, su yönetiminin talep odaklı ve sürdürülebilir politikalara kaydırılması gerektiği savunulmaktadır.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Tarım sektörünü sulama aletlerini tamamen reddetmekle suçlamaz.<br><b>C)</b> Akiferlerin bilimsel olarak asla kurtarılamayacağını kanıtlama amacı taşımaz.<br><b>D)</b> Çatışmaların daha büyük barajlar yaparak önleneceğini iddia etmez (tam tersi barajların geçici olduğunu söyler).<br><b>E)</b> Kirliliğin su kıtlığındaki tek faktör ('sole factor') olduğunu öne sürmez.`
    },
    {
        id: 55,
        type: 'B',
        instruction: "55-58 soruları aşağıdaki parçaya göre cevaplayınız.",
        paragraph: "Distance learning, once relegated to supplementary correspondence courses, has evolved into a cornerstone of contemporary higher education, accelerated primarily by advances in telecommunications and cloud computing. The integration of asynchronous digital platforms has democratized access to university curricula, allowing geographically dispersed non-traditional learners to balance professional commitments with tertiary education. However, the pedagogical efficacy of remote instruction remains a subject of intense academic scrutiny. Longitudinal educational assessments reveal that while cognitive gains in digital settings frequently match those in traditional lecture halls, attrition rates among remote cohorts remain disproportionately elevated. Educational psychologists attribute this persistent disparity to a deficit in spontaneous interpersonal interaction, which often induces transactional distance and acute feelings of isolation among students. In an attempt to mitigate these psychosocial barriers, institutional designers have increasingly embraced blended instructional paradigms. These hybrid formats combine interactive digital modules with synchronized collaborative seminars, thereby fostering sustained epistemic engagement. Dr. Miriam Sterling, an authority on instructional design, contends that the ultimate sustainability of virtual pedagogy hinges not on the sophistication of software interfaces, but on the ability of educators to scaffold collaborative communities of inquiry that cultivate high levels of intrinsic academic motivation.",
        text: "It is emphasized in the passage that the long-term success of virtual pedagogy ----.",
        options: {
            A: "is completely dependent on the deployment of advanced software algorithms rather than instructor presence",
            B: "relies fundamentally on creating collaborative learning communities that sustain student motivation",
            C: "has permanently eliminated the necessity for synchronous seminars in tertiary education",
            D: "requires higher education institutions to return exclusively to traditional face-to-face lecture methods",
            E: "guarantees identical student retention rates regardless of the level of peer-to-peer engagement"
        },
        correct: "B",
        dict: {
            "relegated": "geri plana atılmış/düşürülmüş",
            "cornerstone": "temel taşı/köşe taşı",
            "attrition": "okulu bırakma/fire verme",
            "scaffold": "yapılandırmak/desteklemek",
            "intrinsic": "içsel/öze ait"
        },
        explanation: `<b>✅ Doğru Cevap: B) relies fundamentally on creating collaborative learning communities that sustain student motivation</b><br><b>📌 Sebep:</b> Parçanın son cümlesindeki "...sustainability of virtual pedagogy hinges not on the sophistication of software interfaces, but on the ability of educators to scaffold collaborative communities of inquiry that cultivate high levels of intrinsic academic motivation" ifadesi, başarının temelinin yazılım gelişmişliğinden ziyade öğrenci motivasyonunu besleyen işbirlikçi topluluklar kurmaya dayandığını açıkça vurgular.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Yazılım algoritmalarına dayandığı iddiası metnin tam tersidir ('not on the sophistication of software').<br><b>C)</b> Eş zamanlı seminerleri gereksiz kıldığı söylenemez.<br><b>D)</b> Geleneksel yüz yüze eğitime tamamen dönülmesi gerektiğini savunmaz.<br><b>E)</b> Öğrenci etkileşiminden bağımsız olarak terk oranlarını eşitlediği çıkarımı yanlıştır.`
    },
    {
        id: 56,
        type: 'B',
        instruction: "55-58 soruları aşağıdaki parçaya göre cevaplayınız.",
        paragraph: "Distance learning, once relegated to supplementary correspondence courses, has evolved into a cornerstone of contemporary higher education, accelerated primarily by advances in telecommunications and cloud computing. The integration of asynchronous digital platforms has democratized access to university curricula, allowing geographically dispersed non-traditional learners to balance professional commitments with tertiary education. However, the pedagogical efficacy of remote instruction remains a subject of intense academic scrutiny. Longitudinal educational assessments reveal that while cognitive gains in digital settings frequently match those in traditional lecture halls, attrition rates among remote cohorts remain disproportionately elevated. Educational psychologists attribute this persistent disparity to a deficit in spontaneous interpersonal interaction, which often induces transactional distance and acute feelings of isolation among students. In an attempt to mitigate these psychosocial barriers, institutional designers have increasingly embraced blended instructional paradigms. These hybrid formats combine interactive digital modules with synchronized collaborative seminars, thereby fostering sustained epistemic engagement. Dr. Miriam Sterling, an authority on instructional design, contends that the ultimate sustainability of virtual pedagogy hinges not on the sophistication of software interfaces, but on the ability of educators to scaffold collaborative communities of inquiry that cultivate high levels of intrinsic academic motivation.",
        text: "According to the passage, the primary factor responsible for higher attrition rates in online education is ----.",
        options: {
            A: "the intellectual inferiority of curriculum materials provided via digital platforms",
            B: "a lack of spontaneous interpersonal engagement that leads to emotional and social isolation",
            C: "the complete inability of adult learners to manage their professional and personal schedules",
            D: "the high financial costs associated with installing complex cloud computing infrastructure",
            E: "the total absence of interactive digital modules in asynchronous tertiary programmes"
        },
        correct: "B",
        dict: {
            "disparity": "farklılık/uçurum",
            "spontaneous": "kendiliğinden olan/doğal",
            "transactional distance": "işlemsel/iletişimsel uzaklık",
            "isolation": "yalnızlık/izolasyon"
        },
        explanation: `<b>✅ Doğru Cevap: B) a lack of spontaneous interpersonal engagement that leads to emotional and social isolation</b><br><b>📌 Sebep:</b> Metinde geçen "...attribute this persistent disparity to a deficit in spontaneous interpersonal interaction, which often induces transactional distance and acute feelings of isolation..." ifadesi, terk oranlarının yüksekliğini doğrudan doğal etkileşim eksikliğine ve yalnızlık hissine bağlar.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Ders materyallerinin entelektüel açıdan yetersiz olduğu bilgisi metinde yoktur (bilişsel kazanımlar benzerdir).<br><b>C)</b> Yetişkin öğrencilerin zaman yönetimi yapamadığı iddiası metinde yer almaz.<br><b>D)</b> Bulut altyapısının maliyetleriyle ilgili bir gerekçe sunulmamıştır.<br><b>E)</b> Dijital modüllerin hiç bulunmadığı iddiası yanlıştır.`
    },
    {
        id: 57,
        type: 'B',
        instruction: "55-58 soruları aşağıdaki parçaya göre cevaplayınız.",
        paragraph: "Distance learning, once relegated to supplementary correspondence courses, has evolved into a cornerstone of contemporary higher education, accelerated primarily by advances in telecommunications and cloud computing. The integration of asynchronous digital platforms has democratized access to university curricula, allowing geographically dispersed non-traditional learners to balance professional commitments with tertiary education. However, the pedagogical efficacy of remote instruction remains a subject of intense academic scrutiny. Longitudinal educational assessments reveal that while cognitive gains in digital settings frequently match those in traditional lecture halls, attrition rates among remote cohorts remain disproportionately elevated. Educational psychologists attribute this persistent disparity to a deficit in spontaneous interpersonal interaction, which often induces transactional distance and acute feelings of isolation among students. In an attempt to mitigate these psychosocial barriers, institutional designers have increasingly embraced blended instructional paradigms. These hybrid formats combine interactive digital modules with synchronized collaborative seminars, thereby fostering sustained epistemic engagement. Dr. Miriam Sterling, an authority on instructional design, contends that the ultimate sustainability of virtual pedagogy hinges not on the sophistication of software interfaces, but on the ability of educators to scaffold collaborative communities of inquiry that cultivate high levels of intrinsic academic motivation.",
        text: "We understand from the passage that blended learning models have been adopted primarily to ----.",
        options: {
            A: "counteract the psychosocial barriers and feelings of disconnection experienced by distance learners",
            B: "shift all instructional responsibilities from human educators to automated assessment systems",
            C: "reduce the overall duration required to complete undergraduate degree programmes",
            D: "prove that asynchronous instruction is pedagogically superior to traditional classroom lectures",
            E: "restrict higher education access exclusively to students residing in remote geographical zones"
        },
        correct: "A",
        dict: {
            "mitigate": "hafifletmek/azaltmak",
            "blended": "harmanlanmış/karma",
            "epistemic": "bilgisel/bilişsel",
            "pedagogy": "eğitim bilimi/öğretim yöntemi"
        },
        explanation: `<b>✅ Doğru Cevap: A) counteract the psychosocial barriers and feelings of disconnection experienced by distance learners</b><br><b>📌 Sebep:</b> Parçada geçen "In an attempt to mitigate these psychosocial barriers, institutional designers have increasingly embraced blended instructional paradigms" ifadesi, karma modellerin öğrencilerin yaşadığı psikososyal engelleri ve kopukluk hissini hafifletmek amacıyla benimsendiğini açıklar.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B)</b> Eğitimi tamamen otomatik sistemlere devretmek gibi bir amacı yoktur.<br><b>C)</b> Mezuniyet süresini kısaltmayı hedeflemez.<br><b>D)</b> Asenkron eğitimin gelenekselden üstün olduğunu kanıtlama çabası taşımaz.<br><b>E)</b> Eğitimi sadece uzaktaki öğrencilerle sınırlandırmaz.`
    },
    {
        id: 58,
        type: 'B',
        instruction: "55-58 soruları aşağıdaki parçaya göre cevaplayınız.",
        paragraph: "Distance learning, once relegated to supplementary correspondence courses, has evolved into a cornerstone of contemporary higher education, accelerated primarily by advances in telecommunications and cloud computing. The integration of asynchronous digital platforms has democratized access to university curricula, allowing geographically dispersed non-traditional learners to balance professional commitments with tertiary education. However, the pedagogical efficacy of remote instruction remains a subject of intense academic scrutiny. Longitudinal educational assessments reveal that while cognitive gains in digital settings frequently match those in traditional lecture halls, attrition rates among remote cohorts remain disproportionately elevated. Educational psychologists attribute this persistent disparity to a deficit in spontaneous interpersonal interaction, which often induces transactional distance and acute feelings of isolation among students. In an attempt to mitigate these psychosocial barriers, institutional designers have increasingly embraced blended instructional paradigms. These hybrid formats combine interactive digital modules with synchronized collaborative seminars, thereby fostering sustained epistemic engagement. Dr. Miriam Sterling, an authority on instructional design, contends that the ultimate sustainability of virtual pedagogy hinges not on the sophistication of software interfaces, but on the ability of educators to scaffold collaborative communities of inquiry that cultivate high levels of intrinsic academic motivation.",
        text: "We understand from the passage that regarding cognitive achievements, students in virtual environments ----.",
        options: {
            A: "perform significantly worse than those attending traditional lecture halls due to poor software",
            B: "often attain levels of academic comprehension comparable to their peers in conventional classrooms",
            C: "experience complete academic failure unless they participate in daily physical lab sessions",
            D: "demonstrate far higher intellectual mastery than students enrolled in on-campus courses",
            E: "consistently outperform blended learning cohorts across all standardized scientific evaluations"
        },
        correct: "B",
        dict: {
            "cognitive gains": "bilişsel kazanımlar",
            "cohort": "öğrenci grubu/küme",
            "elevated": "yüksek/artmış",
            "scrutiny": "derinlemesine inceleme"
        },
        explanation: `<b>✅ Doğru Cevap: B) often attain levels of academic comprehension comparable to their peers in conventional classrooms</b><br><b>📌 Sebep:</b> Metinde yer alan "...cognitive gains in digital settings frequently match those in traditional lecture halls..." ifadesi, online öğrencilerin bilişsel kazanımlarının geleneksel amfilerdeki akranlarıyla eşdeğer / karşılaştırılabilir düzeyde olduğunu doğrudan gösterir.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Bilişsel kazanım açısından daha başarısız oldukları iddiası metinle çelişir ('frequently match').<br><b>C)</b> Fiziksel laboratuvara katılmazlarsa tamamen başarısız olacakları iddia edilmemiştir.<br><b>D)</b> Geleneksel öğrencilerden çok daha üstün başarı gösterdikleri söylenemez (aşırı genelleme).<br><b>E)</b> Karma modeldeki öğrencilerden sürekli daha iyi performans sergiledikleri metinde yer almaz.`
    },
    {
        id: 59,
        type: 'B',
        instruction: "59-62 soruları aşağıdaki parçaya göre cevaplayınız.",
        paragraph: "Probiotics, broadly defined as live microorganisms that confer physiological benefits upon the host when administered in adequate quantities, have garnered immense attention within biomedical research and nutritional science. Historically integrated into human diets through fermented foodstuffs such as yogurt and kefir, these commensal microbes—predominantly belonging to the Lactobacillus and Bifidobacterium genera—exert multifaceted influences on the gastrointestinal tract. Upon surviving transit through the harsh, acidic environment of the stomach, viable strains adhere to the intestinal mucosa, where they actively outcompete pathogenic taxa for limited metabolic substrates and cellular binding sites. Furthermore, they fortify epithelial barrier integrity by stimulating the synthesis of tight-junction proteins and modulating mucin secretion, thereby impeding systemic bacterial translocation. Recent advances in metagenomic sequencing have illuminated the role of probiotics in orchestrating the production of short-chain fatty acids (SCFAs), such as butyrate and acetate, which serve as crucial energetic substrates for colonocytes and potent mediators of systemic immune homeostasis. However, despite compelling pre-clinical evidence, clinical translational efficacy remains notably heterogeneous. Variations in host genetic background, baseline mucosal microbiota composition, and lifestyle factors often dictate whether supplemented strains successfully colonise the gut or are rapidly shed in faeces. Dr. Karen Lindqvist, an immunologist specializing in microbiome therapeutics, emphasizes that the commercial proliferation of generic over-the-counter formulations often outpaces empirical validation, necessitating a transition toward personalized probiotic regimens tailored to an individual's unique microbial and genetic profile.",
        text: "Which of the following is the main focus of the passage?",
        options: {
            A: "The historical origins and traditional fermentation methods of prebiotic dairy products",
            B: "The biochemical mechanisms and varying clinical efficacy of probiotics, alongside the need for personalized approaches",
            C: "The insurmountable physiological barriers that prevent beneficial bacteria from surviving gastric acidity",
            D: "The absolute superiority of over-the-counter dietary supplements over natural dietary sources of bacteria",
            E: "The exclusive role of short-chain fatty acids in treating chronic gastrointestinal pathologies"
        },
        correct: "B",
        dict: {
            "confer": "sağlamak/bahşetmek",
            "commensal": "birlikte yaşayan/ortak yaşam süren",
            "translocation": "yer değiştirme/organlar arası geçiş",
            "heterogeneous": "farklılık gösteren/çeşitli",
            "tailored": "özel olarak uyarlanmış"
        },
        explanation: `<b>✅ Doğru Cevap: B) The biochemical mechanisms and varying clinical efficacy of probiotics, alongside the need for personalized approaches</b><br><b>📌 Sebep:</b> Parçanın tamamı, probiyotiklerin bağırsak duvarını güçlendirme ve patojenlerle yarışma gibi etki mekanizmalarını, klinik etkinliğin kişiden kişiye neden değiştiğini ve genel takviyeler yerine kişiye özel (personalized) yaklaşımlara duyulan ihtiyacı ele almaktadır.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Fermantasyonun tarihsel kökenleri yalnızca bir arka plan cümlesidir; ana odak değildir.<br><b>C)</b> Mide asidinin aşılamaz bir engel olduğu iddia edilmez; bakterilerin bu asidi geçip tutunduğu belirtilir.<br><b>D)</b> Ticari takviyelerin doğal gıdalardan üstün olduğu savunulmaz; tam aksine ticari ürünlerin bilimsel temeli sorgulanır.<br><b>E)</b> Parçada kısa zincirli yağ asitleri tek bir mekanizma örneğidir, parçanın ana temasını kapsamaz.`
    },
    {
        id: 60,
        type: 'B',
        instruction: "59-62 soruları aşağıdaki parçaya göre cevaplayınız.",
        paragraph: "Probiotics, broadly defined as live microorganisms that confer physiological benefits upon the host when administered in adequate quantities, have garnered immense attention within biomedical research and nutritional science. Historically integrated into human diets through fermented foodstuffs such as yogurt and kefir, these commensal microbes—predominantly belonging to the Lactobacillus and Bifidobacterium genera—exert multifaceted influences on the gastrointestinal tract. Upon surviving transit through the harsh, acidic environment of the stomach, viable strains adhere to the intestinal mucosa, where they actively outcompete pathogenic taxa for limited metabolic substrates and cellular binding sites. Furthermore, they fortify epithelial barrier integrity by stimulating the synthesis of tight-junction proteins and modulating mucin secretion, thereby impeding systemic bacterial translocation. Recent advances in metagenomic sequencing have illuminated the role of probiotics in orchestrating the production of short-chain fatty acids (SCFAs), such as butyrate and acetate, which serve as crucial energetic substrates for colonocytes and potent mediators of systemic immune homeostasis. However, despite compelling pre-clinical evidence, clinical translational efficacy remains notably heterogeneous. Variations in host genetic background, baseline mucosal microbiota composition, and lifestyle factors often dictate whether supplemented strains successfully colonise the gut or are rapidly shed in faeces. Dr. Karen Lindqvist, an immunologist specializing in microbiome therapeutics, emphasizes that the commercial proliferation of generic over-the-counter formulations often outpaces empirical validation, necessitating a transition toward personalized probiotic regimens tailored to an individual's unique microbial and genetic profile.",
        text: "According to the passage, probiotics strengthen the intestinal barrier by ----.",
        options: {
            A: "eliminating the necessity for colonocytes to consume short-chain fatty acids",
            B: "promoting the production of tight-junction proteins and regulating the secretion of mucus",
            C: "neutralizing all acidic gastric juices before they reach the gastrointestinal mucosa",
            D: "transforming pathogenic bacteria directly into beneficial symbiotic strains",
            E: "preventing the immune system from identifying foreign pathogens in the bloodstream"
        },
        correct: "B",
        dict: {
            "adhere": "yapışmak/tutunmak",
            "fortify": "güçlendirmek/tahkim etmek",
            "integrity": "bütünlük/sağlamlık",
            "impede": "engellemek/önüne geçmek"
        },
        explanation: `<b>✅ Doğru Cevap: B) promoting the production of tight-junction proteins and regulating the secretion of mucus</b><br><b>📌 Sebep:</b> Metinde açıkça geçen "...they fortify epithelial barrier integrity by stimulating the synthesis of tight-junction proteins and modulating mucin secretion..." ifadesi, probiyotiklerin sıkı bağlantı proteinlerinin sentezini artırıp mukus salgısını düzenleyerek bağırsak bariyerini güçlendirdiğini belirtir.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Kolonositlerin yağ asitlerine olan ihtiyacını ortadan kaldırmazlar; aksine bu asitler kolonositler için temel enerji kaynağıdır.<br><b>C)</b> Mide asidini tamamen nötralize etmezler.<br><b>D)</b> Patojenleri iyi huylu bakteriye dönüştürmezler; onlarla kaynaklar için rekabet ederler.<br><b>E)</b> Bağışıklık sisteminin patojenleri tanımasını engellemezler.`
    },
    {
        id: 61,
        type: 'B',
        instruction: "59-62 soruları aşağıdaki parçaya göre cevaplayınız.",
        paragraph: "Probiotics, broadly defined as live microorganisms that confer physiological benefits upon the host when administered in adequate quantities, have garnered immense attention within biomedical research and nutritional science. Historically integrated into human diets through fermented foodstuffs such as yogurt and kefir, these commensal microbes—predominantly belonging to the Lactobacillus and Bifidobacterium genera—exert multifaceted influences on the gastrointestinal tract. Upon surviving transit through the harsh, acidic environment of the stomach, viable strains adhere to the intestinal mucosa, where they actively outcompete pathogenic taxa for limited metabolic substrates and cellular binding sites. Furthermore, they fortify epithelial barrier integrity by stimulating the synthesis of tight-junction proteins and modulating mucin secretion, thereby impeding systemic bacterial translocation. Recent advances in metagenomic sequencing have illuminated the role of probiotics in orchestrating the production of short-chain fatty acids (SCFAs), such as butyrate and acetate, which serve as crucial energetic substrates for colonocytes and potent mediators of systemic immune homeostasis. However, despite compelling pre-clinical evidence, clinical translational efficacy remains notably heterogeneous. Variations in host genetic background, baseline mucosal microbiota composition, and lifestyle factors often dictate whether supplemented strains successfully colonise the gut or are rapidly shed in faeces. Dr. Karen Lindqvist, an immunologist specializing in microbiome therapeutics, emphasizes that the commercial proliferation of generic over-the-counter formulations often outpaces empirical validation, necessitating a transition toward personalized probiotic regimens tailored to an individual's unique microbial and genetic profile.",
        text: "It can be inferred from the passage that the therapeutic outcome of taking probiotic supplements ----.",
        options: {
            A: "is largely consistent and produces identical physiological benefits in every patient",
            B: "depends significantly on an individual's unique biological and genetic characteristics",
            C: "is completely ineffective if the bacteria belong to the Bifidobacterium genus",
            D: "yields immediate curative results regardless of the recipient's preexisting microbiota",
            E: "remains unaffected by whether the bacteria successfully colonise the digestive tract"
        },
        correct: "B",
        dict: {
            "compelling": "ikna edici/güçlü",
            "efficacy": "etkinlik/yararlılık",
            "baseline": "başlangıç/temel düzey",
            "shed": "atılmak/dökmek"
        },
        explanation: `<b>✅ Doğru Cevap: B) depends significantly on an individual's unique biological and genetic characteristics</b><br><b>📌 Sebep:</b> Parçada yer alan "Variations in host genetic background, baseline mucosal microbiota composition, and lifestyle factors often dictate whether supplemented strains successfully colonise the gut..." cümlesi, probiyotiklerin klinik etkisinin kişinin genetik ve mikrobiyal özelliklerine bağlı olduğunu açıkça ortaya koyar.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Her bireyde aynı sonucu verdiği ('identical benefits') iddiası metindeki 'heterogeneous' tespitiyle çelişir.<br><b>C)</b> Bifidobacterium türünün etkisiz olduğu öne sürülmez; en yaygın yararlı türlerden biri olarak verilir.<br><b>D)</b> Mevcut mikrobiyotadan bağımsız olarak hemen sonuç verdiği çıkarımı yanlıştır.<br><b>E)</b> Bakterinin tutunup kolonileşmesinin sonucu etkilemediği iddiası metne terstir.`
    },
    {
        id: 62,
        type: 'B',
        instruction: "59-62 soruları aşağıdaki parçaya göre cevaplayınız.",
        paragraph: "Probiotics, broadly defined as live microorganisms that confer physiological benefits upon the host when administered in adequate quantities, have garnered immense attention within biomedical research and nutritional science. Historically integrated into human diets through fermented foodstuffs such as yogurt and kefir, these commensal microbes—predominantly belonging to the Lactobacillus and Bifidobacterium genera—exert multifaceted influences on the gastrointestinal tract. Upon surviving transit through the harsh, acidic environment of the stomach, viable strains adhere to the intestinal mucosa, where they actively outcompete pathogenic taxa for limited metabolic substrates and cellular binding sites. Furthermore, they fortify epithelial barrier integrity by stimulating the synthesis of tight-junction proteins and modulating mucin secretion, thereby impeding systemic bacterial translocation. Recent advances in metagenomic sequencing have illuminated the role of probiotics in orchestrating the production of short-chain fatty acids (SCFAs), such as butyrate and acetate, which serve as crucial energetic substrates for colonocytes and potent mediators of systemic immune homeostasis. However, despite compelling pre-clinical evidence, clinical translational efficacy remains notably heterogeneous. Variations in host genetic background, baseline mucosal microbiota composition, and lifestyle factors often dictate whether supplemented strains successfully colonise the gut or are rapidly shed in faeces. Dr. Karen Lindqvist, an immunologist specializing in microbiome therapeutics, emphasizes that the commercial proliferation of generic over-the-counter formulations often outpaces empirical validation, necessitating a transition toward personalized probiotic regimens tailored to an individual's unique microbial and genetic profile.",
        text: "According to Dr. Karen Lindqvist, the widespread commercial availability of probiotics ----.",
        options: {
            A: "has successfully eradicated gastrointestinal infections across diverse patient groups",
            B: "has advanced faster than the scientific and clinical evidence required to prove their universal efficacy",
            C: "proves that standard generic formulas are ideal for treating every microbial deficiency",
            D: "renders personalized genetic and microbiome sequencing clinically redundant",
            E: "guarantees that all over-the-counter supplements adhere permanently to the gut wall"
        },
        correct: "B",
        dict: {
            "proliferation": "hızlı artış/yayılma",
            "generic": "jenerik/genel",
            "outpace": "geride bırakmak/daha hızlı ilerlemek",
            "empirical": "deneysel/gözlemsel"
        },
        explanation: `<b>✅ Doğru Cevap: B) has advanced faster than the scientific and clinical evidence required to prove their universal efficacy</b><br><b>📌 Sebep:</b> Dr. Lindqvist'in metin sonundaki "...the commercial proliferation of generic over-the-counter formulations often outpaces empirical validation..." uyarısı, ticari ürünlerin piyasaya sürülme hızının deneysel ve bilimsel kanıtlama sürecini aştığını ('outpaces empirical validation') doğrudan doğrular.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Mide-bağırsak enfeksiyonlarını tamamen yok ettiği iddiası gerçeği yansıtmaz.<br><b>C)</b> Standart jenerik ürünlerin herkes için ideal olduğunu değil, kişiye özel reçetelerin gerektiğini savunur.<br><b>D)</b> Kişiselleştirilmiş analizleri gereksiz kılmadığı, tam tersine gerekli kıldığı ifade edilmektedir.<br><b>E)</b> Raftaki tüm ürünlerin bağırsak duvarına kalıcı olarak tutunacağını garanti etmez.`
    },
    {
        id: 63,
        type: 'A',
        instruction: "63-67 sorularda, karşılıklı konuşmanın boş bırakılan kısmını tamamlayabilecek ifadeyi bulunuz.",
        text: "Evelyn: I was reading an environmental report arguing that tropical deforestation is not solely an ecological disaster, but also an immediate economic catastrophe for local communities.\nMark: ----\nEvelyn: That's true, but we must also consider that once the topsoil is completely depleted and washed away, those agricultural gains vanish, leaving rural populations in far deeper poverty.",
        options: {
            A: "How can that be? Cleared forest land is routinely converted into lucrative cattle ranches and commercial crop fields that provide immediate revenue.",
            B: "Do international timber conglomerates share the responsibility of providing alternative employment for displaced indigenous tribes?",
            C: "I've heard that reforestation projects in sub-tropical zones take decades before they can generate any harvestable timber.",
            D: "Why don't national environmental ministries impose heavier taxation on multi-national pulp and paper manufacturing companies?",
            E: "Are local communities actively participating in tree-planting campaigns to restore the natural hydrological cycle in arid basins?"
        },
        correct: "A",
        correctReason: "Mark'ın sorusu ormansızlaşmanın ekonomik kazanç sağladığı tezine dayanmalıdır ki Evelyn 'Doğru, ancak üst toprak aşındığında o tarımsal kazançlar yok olur' diyerek karşı sav öne sürsün.",
        dict: { "deforestation": "ormansızlaşma", "topsoil": "üst toprak tabakası", "depleted": "tükenmiş/fakirleşmiş", "lucrative": "kazançlı/kârlı" },
        explanation: `<b>✅ Doğru Cevap: A) How can that be? Cleared forest land is routinely converted into lucrative cattle ranches and commercial crop fields that provide immediate revenue.</b><br><b>📌 Sebep:</b> Evelyn'in son konuşmasında "That's true, but we must also consider that once the topsoil is completely depleted..." diyerek tarımsal kazanımların kısa ömürlü olduğunu vurgulaması, Mark'ın orman arazilerinin tarım veya hayvancılıkla kısa vadede gelir sağladığını savunmuş olmasını gerektirir.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B)</b> Kereste şirketlerinin istihdam sorumluluğu Evelyn'in toprak verimliliği cevabıyla uyuşmaz.<br><b>C)</b> Yeniden ağaçlandırma projelerinin süresi bağlam dışıdır.<br><b>D)</b> Hükümet vergileri odak noktası değildir.<br><b>E)</b> Yerel halkın ağaç dikme kampanyaları diyalog akışına oturmaz.`
    },
    {
        id: 64,
        type: 'A',
        instruction: "63-67 sorularda, karşılıklı konuşmanın boş bırakılan kısmını tamamlayabilecek ifadeyi bulunuz.",
        text: "Professor: Recent biomedical studies indicate that the trillions of microbes residing in our gut do much more than simply assist digestion; they actively synthesize neurotransmitters that influence brain chemistry.\nStudent: ----\nProfessor: Exactly. In fact, clinical trials have shown that systemic microbial imbalances, or dysbiosis, are frequently correlated with chronic depression and elevated anxiety levels.",
        options: {
            A: "So our mental and emotional health might be directly regulated by the diversity of our intestinal flora?",
            B: "Does this mean that broad-spectrum antibiotics have no discernible impact on the nervous system?",
            C: "Are gastrointestinal disorders exclusively caused by genetic mutations rather than environmental factors?",
            D: "Should patients with autoimmune diseases eliminate all probiotic and fermented foodstuffs from their diets?",
            E: "Is it true that the human stomach contains a higher bacterial population than the lower digestive tract?"
        },
        correct: "A",
        correctReason: "Profesörün 'Exactly...' diyerek depresyon ve kaygı ile bağırsak dengesizliği arasındaki bağlantıyı açıklaması, öğrencinin zihinsel sağlığın bağırsak florasıyla ilişkili olup olmadığını sormuş olduğunu gösterir.",
        dict: { "gut microbiome": "bağırsak mikrobiyotası", "synthesize": "sentezlemek", "dysbiosis": "mikrobiyal dengesizlik", "correlated": "ilişkili" },
        explanation: `<b>✅ Doğru Cevap: A) So our mental and emotional health might be directly regulated by the diversity of our intestinal flora?</b><br><b>📌 Sebep:</b> Profesörün "Exactly" (Kesinlikle) diyerek bağırsak florasındaki dengesizliklerin kronik depresyon ve kaygı ile ilişkili olduğunu belirtmesi, öğrencinin bağırsak bakterileri ile zihinsel/duygusal sağlık arasındaki bağı sorguladığını gösterir.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B)</b> Antibiyotiklerin sinir sistemine etkisi profesörün açıklamasıyla doğrudan örtüşmez.<br><b>C)</b> Genetik mutasyonlar konusu odak noktasını saptırır.<br><b>D)</b> Probiyotiklerin diyetten çıkarılması tavsiyesine dair bir bağlam yoktur.<br><b>E)</b> Mide ve alt sindirim sistemi bakteri yoğunluğu kıyaslaması konuşmanın odağı değildir.`
    },
    {
        id: 65,
        type: 'A',
        instruction: "63-67 sorularda, karşılıklı konuşmanın boş bırakılan kısmını tamamlayabilecek ifadeyi bulunuz.",
        text: "Liam: Geneticists have made significant progress using cellular reprogramming and telomere extension to reverse biological aging in laboratory trials.\nSophia: ----\nLiam: That is a legitimate ethical concern, but researchers argue that the primary goal is not extreme longevity, but rather extending our 'healthspan'—the period of life spent free from debilitating disease.",
        options: {
            A: "How do telomeres maintain chromosomal stability during repeated cycles of cellular mitosis?",
            B: "Won't therapies that drastically prolong human lifespan cause severe demographic strain and worsen socio-economic inequalities?",
            C: "Has the medical community developed standard pharmaceutical protocols to suppress cellular senescence yet?",
            D: "I assume these genetic interventions will only be tested on laboratory mice rather than human subjects.",
            E: "Why do cellular mechanisms naturally deteriorate over time despite high intake of dietary antioxidants?"
        },
        correct: "B",
        correctReason: "Liam'ın 'That is a legitimate ethical concern...' ifadesi ve yaşam süresini uzatmak yerine sağlıklı yaşam süresini hedeflediklerini belirtmesi, Sophia'nın aşırı uzayan yaşamın yaratacağı demografik ve etik sorunlara değindiğini gösterir.",
        dict: { "cellular reprogramming": "hücresel yeniden programlama", "longevity": "uzun ömürlülük", "healthspan": "sağlıklı yaşam süresi", "debilitating": "güçten düşürücü" },
        explanation: `<b>✅ Doğru Cevap: B) Won't therapies that drastically prolong human lifespan cause severe demographic strain and worsen socio-economic inequalities?</b><br><b>📌 Sebep:</b> Liam'ın bir sonraki cümlesinde "That is a legitimate ethical concern..." (Bu haklı bir etik endişe...) diyerek asıl hedefin sadece ömrü uzatmak değil, hastalıkların olmadığı dönemi artırmak olduğunu söylemesi, Sophia'nın uzun ömrün getireceği toplumsal ve etik sorunları sorguladığını kanıtlar.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Telomerlerin mitoz bölünmedeki teknik işleyişi etik bir kaygı değildir.<br><b>C)</b> Standart protokollerin varlığı etik endişe bağlamını karşılamaz.<br><b>D)</b> Deneylerin sadece farelerde yapılması varsayımı etik/demografik kaygıyla ilgili değildir.<br><b>E)</b> Hücresel bozulmanın biyolojik nedenleri diyalog akışına uymaz.`
    },
    {
        id: 66,
        type: 'A',
        instruction: "63-67 sorularda, karşılıklı konuşmanın boş bırakılan kısmını tamamlayabilecek ifadeyi bulunuz.",
        text: "Nathan: It's astounding how hyperpolyglots can attain near-native fluency in upwards of ten distinct languages with seemingly minimal effort.\nChloe: ----\nNathan: I suppose you're right. When you look closely, they treat language learning like an intense daily workout rather than relying purely on some innate genetic gift.",
        options: {
            A: "Do you think childhood multilingualism guarantees superior cognitive flexibility in old age?",
            B: "It only looks effortless from the outside; most of them dedicate thousands of hours to rigorous mnemonic techniques and deliberate practice.",
            C: "Which linguistic family do you find the most challenging when attempting to learn complex grammatical rules?",
            D: "I believe traditional classroom methods are far more effective for acquiring grammatical accuracy than immersive software.",
            E: "Have neuroscientists identified the specific brain regions that enlarge when polyglots acquire a new vocabulary set?"
        },
        correct: "B",
        correctReason: "Nathan'ın 'Haklısın, yakından bakınca bunu doğuştan gelen bir yetenekten ziyade yoğun bir günlük egzersiz gibi ele alıyorlar' demesi, Chloe'nin çok çalışmaya ve sistematik pratik yapmaya vurgu yaptığını gösterir.",
        dict: { "hyperpolyglot": "çok sayıda dil bilen kimse", "near-native": "anadile yakın", "mnemonic": "bellek destekleyici/hafıza güçlendirici", "deliberate practice": "bilinçli/planlı pratik" },
        explanation: `<b>✅ Doğru Cevap: B) It only looks effortless from the outside; most of them dedicate thousands of hours to rigorous mnemonic techniques and deliberate practice.</b><br><b>📌 Sebep:</b> Nathan'ın konuşmasında "I suppose you're right..." diyerek poligloların genetik bir yetenekten çok yoğun bir egzersiz temposuyla çalıştıklarını onaylaması, Chloe'nin bu sürecin dışarıdan kolay görünse de aslında binlerce saatlik disiplinli bir çaba gerektirdiğini belirtmiş olmasını gerektirir.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Çocukluktaki çokdillilik ve yaşlılık ilişkisi Nathan'ın cevabıyla örtüşmez.<br><b>C)</b> Belirli bir dil ailesinin zorluğu konudan uzaktır.<br><b>D)</b> Sınıf yöntemleri ile yazılımların kıyaslanması diyalog akışını bozar.<br><b>E)</b> Beyin bölgelerinin nörolojik analizi genel çaba/çalışma vurgusunu içermez.`
    },
    {
        id: 67,
        type: 'A',
        instruction: "63-67 sorularda, karşılıklı konuşmanın boş bırakılan kısmını tamamlayabilecek ifadeyi bulunuz.",
        text: "Arthur: Most people believe procrastination is simply a failure of time management or sheer laziness, but psychologists view it as an emotional coping mechanism.\nBeatrice: ----\nArthur: Precisely. We avoid the task not because we don't have the time, but because starting it triggers feelings of inadequacy, boredom, or fear of failure.",
        options: {
            A: "Do you think digital tools like scheduling apps can permanently solve procrastination habits?",
            B: "Are individuals with high intrinsic motivation completely immune to chronic task avoidance?",
            C: "So you mean that putting off a demanding assignment is actually a way to escape the immediate negative emotions associated with it?",
            D: "Why do university students tend to experience higher stress levels when deadlines approach?",
            E: "Is it true that perfectionist tendencies always lead to higher academic performance in competitive environments?"
        },
        correct: "C",
        correctReason: "Arthur'un 'Precisely...' diyerek göreve başlamanın yetersizlik, sıkıntı veya başarısızlık korkusunu tetiklediğini açıklaması, Beatrice'in ertelemenin olumsuz duygulardan kaçış yolu olup olmadığını özetlediğini kanıtlar.",
        dict: { "procrastination": "erteleme alışkanlığı", "inadequacy": "yetersizlik", "coping mechanism": "başa çıkma mekanizması", "putting off": "ertelemek" },
        explanation: `<b>✅ Doğru Cevap: C) So you mean that putting off a demanding assignment is actually a way to escape the immediate negative emotions associated with it?</b><br><b>📌 Sebep:</b> Arthur'un "Precisely" (Tam olarak öyle) diyerek ertelemenin zaman yetersizliğinden değil, başarısızlık korkusu veya sıkıntı gibi olumsuz duygulardan kaynaklandığını açıklaması, Beatrice'in ertelemeyi olumsuz duygulardan kaçınma mekanizması olarak doğru yorumladığını gösterir.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Zaman yönetimi uygulamaları ertelemenin psikolojik kökenini açıklamaz.<br><b>B)</b> İçsel motivasyon sahibi kişilerin bağışıklığı Arthur'un cevabını tetiklemez.<br><b>D)</b> Üniversite öğrencilerinin yaklaşan teslim tarihleri stresi konunun özeti değildir.<br><b>E)</b> Mükemmeliyetçiliğin akademik başarıya etkisi soruyla doğrudan ilgili değildir.`
    },
    {
        id: 68,
        type: 'A',
        instruction: "68-71 sorularda, verilen cümleye anlamca en yakın cümleyi bulunuz.",
        text: "Because eating disorders cannot be classified as purely physical or psychological illnesses, successful long-term rehabilitation requires that clinical medical care be integrated with psychotherapy.",
        options: {
            A: "Eating disorders are distinct from other medical conditions since they originate from psychological trauma; therefore, psychotherapy must always precede medical intervention in clinical treatment.",
            B: "Given that eating disorders stem from an intricate blend of both somatic and mental factors, an effective recovery process depends on combining medical management with psychological therapy.",
            C: "Although eating disorders are mostly regarded as psychological dysfunctions rather than physical ailments, clinical practitioners suggest that neither medical nor psychological therapy alone is sufficient.",
            D: "If eating disorders were strictly physiological or psychological conditions, combining clinical healthcare with psychotherapeutic sessions would have been completely unnecessary.",
            E: "Unless patients suffering from eating disorders receive intensive psychotherapy, standard medical treatments will fail to alleviate the physical complications caused by the illness."
        },
        correct: "B",
        dict: {
            "somatic": "bedensel/fiziksel",
            "rehabilitation": "iyileştirme/rehabilitasyon",
            "integrate": "bütünleştirmek/birleştirmek",
            "intricate": "karmaşık/girift"
        },
        explanation: `<b>✅ Doğru Cevap: B) Given that eating disorders stem from an intricate blend of both somatic and mental factors, an effective recovery process depends on combining medical management with psychological therapy.</b><br><b>📌 Sebep:</b> Orijinal cümledeki "Because eating disorders cannot be classified as purely physical or psychological..." ifadesi B seçeneğindeki "Given that eating disorders stem from an intricate blend of both somatic and mental factors..." ile; "...requires that clinical medical care be integrated with psychotherapy" yapısı ise "...depends on combining medical management with psychological therapy" ile anlam, vurgu ve bağlaç bütünlüğü açısından birebir örtüşür.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Psikoterapinin mutlaka tıbbi müdahaleden önce gelmesi gerektiği ('must always precede') iddiası metinde yoktur.<br><b>C)</b> Yeme bozukluklarının 'çoğunlukla psikolojik' olarak görüldüğü iddiası orijinal cümlenin 'safça fiziksel ya da psikolojik değildir' ifadesiyle çelişir.<br><b>D)</b> Gerçek dışı koşul kurgusu (Type 3 / Mixed conditional) yapılarak cümlenin orijinal anlam akışı ve vurgusu bozulmuştur.<br><b>E)</b> Tıbbi tedavinin fiziksel komplikasyonları hafifletemeyeceği gibi tek taraflı bir şart koşulmuştur.`
    },
    {
        id: 69,
        type: 'A',
        instruction: "68-71 sorularda, verilen cümleye anlamca en yakın cümleyi bulunuz.",
        text: "Although modern humans exhibit remarkable phenotypic diversity across different geographic regions, genomic studies reveal that our overall genetic variation is surprisingly low compared to that of other primates.",
        options: {
            A: "Even though people living in various parts of the world display noticeable physical differences, genetic research demonstrates that human genetic diversity is unexpectedly limited when compared with that of other primates.",
            B: "Despite the fact that other primates possess much less genetic variation than humans do, genomic studies show that people across diverse geographical zones have evolved distinct physical features.",
            C: "While geographic separation has led to considerable genomic differentiation between humans and other primates, our external physical traits remain largely uniform worldwide.",
            D: "Genomic research suggests that the extraordinary physical variation observed in modern human populations is directly proportional to the high genetic diversity found in non-human primates.",
            E: "Since human beings share nearly identical phenotypic characteristics across continents, it is not surprising that our genomic variation is far less than that of any other primate species."
        },
        correct: "A",
        dict: {
            "phenotypic": "dış görünüşe ait/fenotipik",
            "genomic": "genomik/gene ait",
            "primates": "primatlar",
            "noticeable": "fark edilir/belirgin"
        },
        explanation: `<b>✅ Doğru Cevap: A) Even though people living in various parts of the world display noticeable physical differences, genetic research demonstrates that human genetic diversity is unexpectedly limited when compared with that of other primates.</b><br><b>📌 Sebep:</b> Orijinal cümledeki "Although modern humans exhibit remarkable phenotypic diversity..." kısmı "Even though people... display noticeable physical differences..." ile; "genomic studies reveal..." kısmı "genetic research demonstrates..." ile; "...surprisingly low compared to that of other primates" ifadesi ise "...unexpectedly limited when compared with that of other primates" ile tam bir eş anlamlılık ve mantıksal uyum gösterir.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B)</b> Primatların insanlardan daha az genetik varyasyona sahip olduğunu söyleyerek anlamı tersine çevirmiştir.<br><b>C)</b> İnsanların dış fiziksel özelliklerinin dünya çapında 'büyük ölçüde tekdüze' olduğunu iddia eder ki bu 'remarkable phenotypic diversity' ifadesine terstir.<br><b>D)</b> İnsanlardaki fiziksel çeşitliliğin primatların çeşitliliğiyle 'doğru orantılı' olduğunu söyleyerek yanlış bir nedensellik kurar.<br><b>E)</b> İnsanların neredeyse aynı fenotipik özelliklere sahip olduğunu ('nearly identical') öne sürerek zıtlık bağlamını sebep-sonuca ('Since') dönüştürür.`
    },
    {
        id: 70,
        type: 'A',
        instruction: "68-71 sorularda, verilen cümleye anlamca en yakın cümleyi bulunuz.",
        text: "By replacing mythological narratives with rational inquiry, early Greek philosophers laid the foundations of empirical science, though they seldom conducted systematic experiments to substantiate their theoretical claims.",
        options: {
            A: "Early Greek thinkers developed empirical science through systematic experimentation, which enabled them to completely abandon mythological explanations of natural phenomena.",
            B: "Although early Greek philosophers rarely carried out structured experiments to prove their theories, they established the basis of empirical science by shifting from mythological tales to rational examination.",
            C: "Despite relying heavily on mythological stories to explain the cosmos, ancient Greek philosophers managed to lay the groundwork for modern scientific thought through extensive physical trials.",
            D: "Because early Greek philosophers were unable to perform methodical laboratory tests, their rational theories about the natural world remained largely influenced by traditional mythologies.",
            E: "Early Greek thinkers' reluctance to formulate abstract hypotheses prevented them from establishing empirical science, even though they actively discarded mythological interpretations."
        },
        correct: "B",
        dict: {
            "substantiate": "kanıtlamak/doğrulamak",
            "rational inquiry": "akılcı araştırma/sorgulama",
            "empirical": "deneysel/gözleme dayalı",
            "seldom": "nadiren"
        },
        explanation: `<b>✅ Doğru Cevap: B) Although early Greek philosophers rarely carried out structured experiments to prove their theories, they established the basis of empirical science by shifting from mythological tales to rational examination.</b><br><b>📌 Sebep:</b> "By replacing mythological narratives with rational inquiry" ifadesi "...by shifting from mythological tales to rational examination" olarak aktarılmış; "laid the foundations of empirical science" kısmı "...established the basis of empirical science" ile eşleşmiş; "though they seldom conducted systematic experiments to substantiate their theoretical claims" zıtlık cümleciği ise "Although early Greek philosophers rarely carried out structured experiments to prove their theories..." olarak eksiksiz yeniden ifade edilmiştir.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Bilimi sistematik deneyler yoluyla geliştirdiklerini ('through systematic experimentation') söyleyerek asıl cümledeki eksikliği tersine çevirmiştir.<br><b>C)</b> Evreni açıklamak için mitolojik hikâyelere yoğun şekilde dayandıklarını iddia eder (orijinalde mitolojinin yerine akılcılık getirilmiştir).<br><b>D)</b> 'Because' sebep-sonuç bağlacı ile fikirlerin mitolojiden etkilendiğini savunarak ana düşünceyi bozar.<br><b>E)</b> Soyut hipotezler kurmaktaki isteksizliklerinin bilimin temellerini atmalarını engellediğini ('prevented them') söyler, bu tamamen zıt bir yargıdır.`
    },
    {
        id: 71,
        type: 'A',
        instruction: "68-71 sorularda, verilen cümleye anlamca en yakın cümleyi bulunuz.",
        text: "While pharmacological treatments provide immediate symptomatic relief for chronic insomnia, non-pharmacological interventions, such as cognitive behavioural therapy, are increasingly recommended by clinicians because they yield more sustainable long-term outcomes.",
        options: {
            A: "Even though medications offer rapid relief from the symptoms of chronic insomnia, medical practitioners favor non-drug therapies like cognitive behavioural therapy owing to their ability to produce longer-lasting benefits.",
            B: "Because cognitive behavioural therapy fails to offer immediate symptomatic relief to patients with insomnia, clinicians frequently advise combining it with strong sedative pharmaceuticals.",
            C: "Although non-pharmacological methods have proven to be the only permanent cure for chronic sleep disorders, healthcare providers continue to prescribe medications due to their immediate availability.",
            D: "If cognitive behavioural therapy were capable of relieving chronic insomnia symptoms as swiftly as pharmaceuticals, doctors would never prescribe sleep medications to their patients.",
            E: "Clinicians generally prefer prescribing pharmacological drugs over behavioral therapies because the long-term effectiveness of non-drug interventions remains largely unverified in clinical trials."
        },
        correct: "A",
        dict: {
            "symptomatic": "semptomatik/belirtiyle ilgili",
            "sustainable": "sürdürülebilir/kalıcı",
            "interventions": "müdahaleler",
            "clinicians": "klinisyenler/uzman hekimler"
        },
        explanation: `<b>✅ Doğru Cevap: A) Even though medications offer rapid relief from the symptoms of chronic insomnia, medical practitioners favor non-drug therapies like cognitive behavioural therapy owing to their ability to produce longer-lasting benefits.</b><br><b>📌 Sebep:</b> "While pharmacological treatments provide immediate symptomatic relief..." ifadesi "Even though medications offer rapid relief from the symptoms..." ile; "...non-pharmacological interventions, such as cognitive behavioural therapy, are increasingly recommended..." yapısı "...medical practitioners favor non-drug therapies like cognitive behavioural therapy..." ile; "...because they yield more sustainable long-term outcomes" gerekçesi ise "...owing to their ability to produce longer-lasting benefits" ile tam ve eksiksiz bir yakın anlam oluşturmaktadır.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B)</b> BDT'nin semptomları hafifletememesi sebebiyle sakinleştirici ilaçlarla birleştirilmesi gerektiği iddiası orijinal metinde yer almaz.<br><b>C)</b> İlaçsız yöntemlerin 'tek kalıcı tedavi' olduğu ve hekimlerin sadece ilaç yazmaya devam ettiği yönündeki çıkarım yanlıştır.<br><b>D)</b> 'If' yapısıyla kurgulanan varsayımsal cümle ('doctors would never prescribe') ana cümlenin karşılaştırmalı onay yapısını yansıtmaz.<br><b>E)</b> Hekimlerin ilaçları bilişsel terapilere tercih ettiğini ve alternatif yöntemlerin kanıtlanmadığını iddia ederek metnin tam zıddını savunur.`
    },
    {
        id: 72,
        type: 'A',
        instruction: "72-75 sorularda, boş bırakılan yere, parçada anlam bütünlüğünü sağlamak için getirilebilecek cümleyi bulunuz.",
        text: "Loggerhead sea turtles (Caretta caretta) are renowned for their extensive oceanic migrations, traversing thousands of kilometres between open pelagic waters and coastal foraging grounds. Throughout these distinct developmental phases, their nutritional requirements undergo a substantial transformation. While hatchlings and oceanic juveniles drift with surface currents feeding largely on macro-plankton and jellyfish, mature adults develop exceptionally powerful jaw musculature that allows them to crush hard-shelled benthic organisms. ---- As a consequence of this specialized feeding habit, mature loggerheads play a pivotal ecological role as bioturbators, modifying seabed topography and recycling nutrient deposits across benthic marine ecosystems.",
        options: {
            A: "Their gastrointestinal tracts are uniquely adapted to extract moisture directly from seawater during transoceanic crossings.",
            B: "This robust cranial morphology enables them to consume substantial quantities of crabs, conchs, and bivalves from the sea floor.",
            C: "Coastal urbanization and artificial lighting frequently disorient newly hatched turtles as they attempt to locate the sea.",
            D: "Satellite telemetry has conclusively demonstrated that adult male loggerheads never return to their original natal beaches.",
            E: "Conversely, other marine turtle species rely exclusively on continuous pelagic foraging throughout their entire lifespans."
        },
        correct: "B",
        dict: {
            "foraging": "besin arama/otlama",
            "benthic": "deniz tabanına ait",
            "bioturbator": "deniz tabanını havalandıran/kazan canlı",
            "cranial morphology": "kafatası/çene yapısı",
            "bivalves": "çift kabuklu yumuşakçalar"
        },
        explanation: `<b>✅ Doğru Cevap: B) This robust cranial morphology enables them to consume substantial quantities of crabs, conchs, and bivalves from the sea floor.</b><br><b>📌 Sebep:</b> Boşluktan önceki cümlede yetişkinlerin sert kabuklu canlıları kırmaya yarayan güçlü çene kasları ("exceptionally powerful jaw musculature that allows them to crush hard-shelled benthic organisms") geliştirdiği belirtilmiştir. B şıkkındaki "This robust cranial morphology" ifadesi bu çene yapısına doğrudan atıfta bulunur ve deniz tabanındaki kabuklu canlıları (yengeç, deniz salyangozu, midye) tükettiklerini açıklar. Boşluktan sonraki "As a consequence of this specialized feeding habit..." (Bu özelleşmiş beslenme alışkanlığının bir sonucu olarak) ifadesi de B seçeneğini mantıksal olarak tamamlar.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Su emilimi ve sindirim adaptasyonu, çene kasları ve dip canlılarıyla beslenme konusundan sapmaktadır.<br><b>C)</b> Işık kirliliği ve yavru kaplumbağaların yön kaybı beslenme ekolojisiyle ilgisizdir (Topical drift).<br><b>D)</b> Uydu takibi ve üreme kumsalları konusu çene anatomisi ve beslenme akışını bozar.<br><b>E)</b> "Conversely" zıtlığıyla diğer türlerin beslenmesine geçmek, boşluktan sonraki "this specialized feeding habit" özne ve konu bağını koparır.`
    },
    {
        id: 73,
        type: 'A',
        instruction: "72-75 sorularda, boş bırakılan yere, parçada anlam bütünlüğünü sağlamak için getirilebilecek cümleyi bulunuz.",
        text: "The catastrophic Cretaceous-Paleogene (K-Pg) extinction event approximately 66 million years ago abruptly terminated the reign of non-avian dinosaurs. While scientists historically debated whether gradual climate fluctuations or intense volcanic activity in the Deccan Traps initiated this biotic collapse, overwhelming geological evidence now points to a colossal bolide impact. The collision of a massive asteroid in the Yucatán Peninsula released immense shockwaves and ignited global wildfires. ---- Deprived of essential sunlight, photosynthetic primary producers perished en masse, precipitating the catastrophic unraveling of both terrestrial and marine food webs worldwide.",
        options: {
            A: "Furthermore, the resulting atmospheric debris and dense sulfur aerosols blocked solar radiation for years, creating an impact winter.",
            B: "Consequently, mammalian species immediately diversified into all available ecological niches across every continent.",
            C: "In contrast, paleontologists have failed to detect elevated levels of iridium in the boundary sedimentary layers.",
            D: "Pterosaurs and large marine reptiles managed to survive prolonged environmental disruption in deep subterranean shelters.",
            E: "Modern avian species descended directly from small theropod lineages that flourished during the earlier Jurassic Period."
        },
        correct: "A",
        dict: {
            "bolide impact": "büyük göktaşı/meteorit çarpması",
            "unraveling": "çözülme/çöküş",
            "aerosols": "aerosoller/asılı parçacıklar",
            "perish": "yok olmak/ölmek"
        },
        explanation: `<b>✅ Doğru Cevap: A) Furthermore, the resulting atmospheric debris and dense sulfur aerosols blocked solar radiation for years, creating an impact winter.</b><br><b>📌 Sebep:</b> Boşluktan önceki cümlede asteroit çarpması ve küresel yangınlar anlatılmıştır. A şıkkı "Furthermore" (Dahası) eklemesiyle atmosfere yayılan toz ve kükürt parçacıklarının güneş ışığını yıllarca engellediğini ("blocked solar radiation") açıklar. Bu durum, hemen ardından gelen "Deprived of essential sunlight, photosynthetic primary producers perished..." (Gerekli güneş ışığından mahrum kalan fotosentetik üreticiler yok oldu) cümlesindeki neden-sonuç bağını kusursuz şekilde kurar.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B)</b> Memelilerin çeşitlenmesi yok oluştan sonraki döneme aittir; boşluk sonrasındaki fotosentetik çöküşle bağlantı kurmaz.<br><b>C)</b> "In contrast" ile iridyum seviyesinin bulunamadığını söylemek bilimsel olguya ve parçanın akışına zıttır.<br><b>D)</b> Uçan sürüngenlerin sığınaklarda hayatta kaldığı iddiası tarihsel gerçeğe ve metnin yok oluş konusuna uymaz.<br><b>E)</b> Kuşların Jura dönemindeki evrimi K-Pg çarpışma kışı anlatısını böler.`
    },
    {
        id: 74,
        type: 'A',
        instruction: "72-75 sorularda, boş bırakılan yere, parçada anlam bütünlüğünü sağlamak için getirilebilecek cümleyi bulunuz.",
        text: "Global food security is coming under acute strain as climate-driven weather extremes, regional conflicts, and international supply chain disruptions converge. Escalating temperatures and prolonged droughts severely depress crop yields across vital agricultural breadbaskets. ---- To avert catastrophic regional famines and geopolitical volatility, multilateral institutions must urgently invest in resilient infrastructure and climate-smart agricultural technologies.",
        options: {
            A: "Similarly, consumer demand for organic and non-genetically modified foodstuffs continues to rise steadily in affluent Western markets.",
            B: "This structural shortfall in grain production is further compounded by export restrictions and soaring fertilizer costs that price low-income nations out of global markets.",
            C: "Nevertheless, traditional subsistence farming techniques remain completely impervious to sudden variations in precipitation patterns.",
            D: "Their nutritional value can be drastically improved by applying post-harvest genetic biofortification in commercial processing plants.",
            E: "Developed countries have largely eliminated domestic food waste through stringent supermarket distribution regulations."
        },
        correct: "B",
        dict: {
            "breadbaskets": "tahıl ambarı bölgeler",
            "compounded": "katmerleşmiş/daha da ağırlaşmış",
            "soaring": "hızla yükselen",
            "impervious": "etkilenmez/geçirimsiz"
        },
        explanation: `<b>✅ Doğru Cevap: B) This structural shortfall in grain production is further compounded by export restrictions and soaring fertilizer costs that price low-income nations out of global markets.</b><br><b>📌 Sebep:</b> Boşluk öncesinde aşırı sıcakların ve kuraklığın tahıl ambarlarında ürün verimini ciddi biçimde düşürdüğü ("severely depress crop yields") belirtilmiştir. B şıkkındaki "This structural shortfall in grain production" (Tahıl üretimindeki bu yapısal açık) tamlaması önceki cümleyi doğrudan referans alır ve gübre maliyetleriyle durumun daha da ağırlaştığını açıklar. Sonraki cümlede yer alan kıtlıkları önleme çağrısı ("To avert catastrophic regional famines...") bu karanlık tabloyu doğrudan sonuçlandırır.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A)</b> Batı pazarlarındaki organik gıda tercihi küresel gıda krizi ve kıtlık bağlamından uzaktır.<br><b>C)</b> Geleneksel tarımın yağış değişimlerinden etkilenmediği ("impervious") iddiası metindeki kuraklık tespitiyle çelişir.<br><b>D)</b> "Their" zamiri önceki cümlede atıfta bulunabileceği çoğul bir nesneye tam oturmaz ve genetik zenginleştirme metin akışını bozar.<br><b>E)</b> Yarım bırakılmış ve bağlaç yapısı bozuk ("Because...") bir yan cümledir.`
    },
    {
        id: 75,
        type: 'A',
        instruction: "72-75 sorularda, boş bırakılan yere, parçada anlam bütünlüğünü sağlamak için getirilebilecek cümleyi bulunuz.",
        text: "When Hernán Cortés and his Spanish conquistadors marched into the Valley of Mexico in 1519, they encountered the formidable Aztec Empire, centered at the island metropolis of Tenochtitlan. Despite being vastly outnumbered by indigenous warriors, the Spaniards succeeded in toppling this powerful Mesoamerican civilization within a mere two years. Historical analysis demonstrates that this conquest was not achieved solely through European steel and gunpowder. ---- Foremost among these was the inadvertent introduction of infectious pathogens like smallpox, which decimated the immunologically naive native populace and paralyzed their military leadership.",
        options: {
            A: "Instead, a decisive convergence of biological devastation and strategic alliances with subjugated indigenous city-states fundamentally undermined the Aztec defense.",
            B: "Consequently, Aztec religious ceremonies continued to flourish completely undisturbed throughout the colonial encomienda system.",
            C: "Moreover, the Spanish crown strictly prohibited its military expeditions from entering into diplomatic negotiations with local caciques.",
            D: "Their intricate chinampa agricultural islands were immediately dismantled to make room for European pastoral livestock grazing.",
            E: "On the contrary, archaeological excavations in Mexico City reveal that the Aztec defensive structures were impervious to artillery strikes."
        },
        correct: "A",
        dict: {
            "topple": "devirmek/çökertmek",
            "subjugated": "boyunduruk altına alınmış",
            "decimate": "kırmak/büyük kısmını yok etmek",
            "inadvertent": "kasıtsız/istem dışı"
        },
        explanation: `<b>✅ Doğru Cevap: A) Instead, a decisive convergence of biological devastation and strategic alliances with subjugated indigenous city-states fundamentally undermined the Aztec defense.</b><br><b>📌 Sebep:</b> Boşluktan önceki cümlede fethin *yalnızca* Avrupa çeliği ve barutu sayesinde kazanılmadığı ("...not achieved solely through European steel and gunpowder") vurgulanmıştır. A seçeneği "Instead" (Bunun yerine) geçişi ile fethin biyolojik yıkım ve yerli ittifaklar sayesinde gerçekleştiğini açıklar. Boşluktan hemen sonra gelen "Foremost among these was the inadvertent introduction of infectious pathogens..." (Bunların en başında çiçek hastalığı gibi bulaşıcı patojenlerin getirilmesi vardı) ifadesindeki "these", A şıkkında sıralanan etkenlere ("biological devastation and strategic alliances") doğrudan ve eksiksiz gönderme yapar.<br><br><b>❌ Diğer Seçenekler:</b><br><b>B)</b> Aztek dini törenlerinin bozulmadan devam ettiği iddiası tarihsel gerçeğe ve fethin yıkıcılığına aykırıdır.<br><b>C)</b> İspanyol krallığının ittifakları yasakladığı iddiası metnin seyrine uymaz.<br><b>D)</b> Tarım adacıklarının sökülmesi fetih sürecindeki askeri ve biyolojik çöküş mekanizmasını açıklamaz.<br><b>E)</b> Savunma yapılarının top atışlarına dayanıklı olduğu iddiası fethin kolaylaşması gerekçesiyle çelişir.`
    },
    {
        id: 76,
        type: 'A',
        instruction: "76-80 sorularda, cümleler sırasıyla okunduğunda parçanın anlam bütünlüğünü bozan cümleyi bulunuz.",
        text: "(I) Bipolar disorder is a chronic psychiatric condition characterized by extreme fluctuations in mood, oscillating between debilitating depressive episodes and hyperactive manic states. (II) During manic phases, individuals frequently exhibit grandiose delusions, decreased need for sleep, and impulsive decision-making that can impair daily functioning. (III) Major depressive episodes, by contrast, plunge patients into persistent apathy, emotional fatigue, and feelings of worthlessness. (IV) Schizophrenia, which is often misdiagnosed as bipolar disorder in early clinical assessments, primarily impairs a person's perception of reality rather than their primary mood regulation. (V) Effective therapeutic management therefore requires lifelong pharmacological stabilization, such as mood stabilizers, combined with structured psychoeducation to prevent relapse.",
        options: { A: "I", B: "II", C: "III", D: "IV", E: "V" },
        correct: "D",
        dict: { "oscillating": "dalgalanan/salınan", "debilitating": "güçten düşüren", "grandiose": "büyüklük/azamet bildiren", "apathy": "duygusuzluk/ilgisizlik", "relapse": "nüksetme" },
        explanation: `<b>✅ Doğru Cevap: D) IV</b><br><b>📌 Sebep:</b> Paragrafın bütünü Bipolar Bozukluğun doğasını (I), mani evresini (II), depresif evresini (III) ve bu iki uçlu duygu durumunun farmakolojik tedavisini (V) anlatmaktadır. IV. cümle ise odağı bipolar bozukluktan saptırıp şizofreninin temel tanımına ve gerçeklik algısına kaydırarak akışı bozmaktadır.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A) (I):</b> Bipolar bozukluğun iki uçlu yapısını tanıtan ana cümledir.<br><b>B) (II):</b> Manik fazın özelliklerini açıklar.<br><b>C) (III):</b> Depresif fazın zıtlığını ve özelliklerini vererek II. cümleyi dengeler.<br><b>E) (V):</b> İki ucu dengede tutmak için gereken tedavi sürecini özetler.`
    },
    {
        id: 77,
        type: 'A',
        instruction: "76-80 sorularda, cümleler sırasıyla okunduğunda parçanın anlam bütünlüğünü bozan cümleyi bulunuz.",
        text: "(I) Sustaining academic motivation among students is a multifaceted psychological process that directly influences academic attainment and lifelong learning habits. (II) Educational researchers consistently distinguish between intrinsic motivation, where learning is driven by inherent curiosity, and extrinsic motivation, which relies on external incentives like grades. (III) Students who cultivate strong intrinsic motivation demonstrate greater resilience when confronting cognitively demanding tasks and unfamiliar subject matter. (IV) Standardized testing formats have undergone extensive structural revisions over the last decade to better align with international university admissions criteria. (V) Educators can foster this internal drive by designing autonomous learning environments that encourage critical inquiry rather than mere rote memorization.",
        options: { A: "I", B: "II", C: "III", D: "IV", E: "V" },
        correct: "D",
        dict: { "attainment": "kazanım/başarı", "intrinsic": "içsel", "extrinsic": "dışsal", "resilience": "dayanıklılık", "rote memorization": "ezberci öğrenme" },
        explanation: `<b>✅ Doğru Cevap: D) IV</b><br><b>📌 Sebep:</b> Metin boyunca öğrencilerin öğrenme motivasyonu, içsel ve dışsal motivasyon farkı (II), içsel motivasyonun faydaları (III) ve öğretmenlerin bunu nasıl geliştirebileceği (V) işlenmektedir. IV. cümle ise konuyu pedagojik/psikolojik motivasyondan koparıp standart testlerin uluslararası üniversite kabul kriterlerine uyarlanmasına kaydırmaktadır.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A) (I):</b> Öğrenci motivasyonunun önemini belirten giriş cümlesidir.<br><b>B) (II):</b> İçsel ve dışsal motivasyon ayrımını kurar.<br><b>C) (III):</b> İçsel motivasyonun zorlu görevlerdeki katkısını açıklar.<br><b>E) (V):</b> 'this internal drive' (bu içsel dürtü) ifadesiyle III. cümleye doğrudan bağlanır.`
    },
    {
        id: 78,
        type: 'A',
        instruction: "76-80 sorularda, cümleler sırasıyla okunduğunda parçanın anlam bütünlüğünü bozan cümleyi bulunuz.",
        text: "(I) Venturing into culinary novelties and consuming exotic foods is increasingly viewed as a gateway to cultural immersion and open-mindedness. (II) Psychological studies suggest that individuals with high openness to experience exhibit lower levels of 'food neophobia'—the irrational fear or reluctance to ingest unfamiliar dishes. (III) Culinary traditions in medieval Europe were heavily dependent on the preservation of meats using coarse salt and vinegar solutions. (IV) For these adventurous eaters, tasting atypical ingredients like edible insects or pungent fermented pastes stimulates novel sensory pathways and broadens cognitive flexibility. (V) Consequently, gastronomy tourism has flourished worldwide as travellers actively seek authentic local delicacies to enrich their cross-cultural appreciation.",
        options: { A: "I", B: "II", C: "III", D: "IV", E: "V" },
        correct: "C",
        dict: { "culinary": "mutfağa ait/yemekle ilgili", "food neophobia": "yeni yemek korkusu", "ingest": "tüketmek/yutmak", "pungent": "keskin kokulu/tatlı", "delicacies": "lezzetler/özel yiyecekler" },
        explanation: `<b>✅ Doğru Cevap: C) III</b><br><b>📌 Sebep:</b> Paragraf yeni ve egzotik lezzetleri denemenin psikolojisi (I, II), açık fikirli insanların yemek seçiciliğini aşması (IV) ve bunun gastronomi turizmine etkisi (V) üzerinedir. III. cümle ise aniden Ortaçağ Avrupa'sındaki et saklama yöntemlerine geçerek tarihsel ve anlamsal bir sapma yaratmaktadır.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A) (I):</b> Egzotik yiyecekler denemenin kültürel etkisini tanıtır.<br><b>B) (II):</b> Yeni yiyecek deneme korkusu (neofobi) ile kişilik ilişkisini kurar.<br><b>D) (IV):</b> 'these adventurous eaters' ifadesiyle II. cümledeki açık fikirli bireylere atıf yapar.<br><b>E) (V):</b> Egzotik yiyecekleri deneme arzusunun turizmdeki sonucunu özetler.`
    },
    {
        id: 79,
        type: 'A',
        instruction: "76-80 sorularda, cümleler sırasıyla okunduğunda parçanın anlam bütünlüğünü bozan cümleyi bulunuz.",
        text: "(I) Albert Einstein first postulated the existence of gravitational waves in 1916 as a natural consequence of his general theory of relativity. (II) The discovery of other galaxies beyond the Milky Way had radically expanded the human perception of the observable universe during the early 20th century. (III) Einstein theorized that violent cosmic events, such as colliding black holes or exploding supernovae, would produce ripples in the fabric of space-time traveling at the speed of light. (IV) For nearly a century, however, these subtle cosmic disturbances eluded direct detection due to their unimaginably faint interaction with physical matter. (V) This elusive quest finally culminated in 2015 when the advanced LIGO interferometers successfully sensed the fleeting spatial distortions produced by two merging black holes.",
        options: { A: "I", B: "II", C: "III", D: "IV", E: "V" },
        correct: "B",
        dict: { "postulate": "ileri sürmek/varsaymak", "gravitational waves": "kütleçekim dalgaları", "ripples": "dalgalanmalar/halkalar", "eluded": "kaçmak/tespit edilememek", "culminated": "zirveye ulaşmak/sonuçlanmak" },
        explanation: `<b>✅ Doğru Cevap: B) II</b><br><b>📌 Sebep:</b> Paragraf kütleçekim dalgalarının teorik olarak ortaya atılışı (I, III), tespit edilmesinin uzun yıllar süren zorluğu (IV) ve 2015'teki LIGO keşfi (V) etrafında kuruludur. II. cümle ise Samanyolu dışındaki galaksilerin keşfi ve evren algısının genişlemesi gibi farklı bir astronomik gelişmeye değinerek akışı kırmaktadır.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A) (I):</b> Einstein'ın kütleçekim dalgaları teorisini ortaya atışını verir.<br><b>C) (III):</b> 'Einstein theorized that...' diyerek I. cümlenin teorik içeriğini detaylandırır.<br><b>D) (IV):</b> Teori ile gözlem arasındaki 100 yıllık kanıt bulma zorluğunu açıklar.<br><b>E) (V):</b> 'This elusive quest' ifadesiyle IV. cümledeki 100 yıllık arayışın başarıyla bittiğini duyurur.`
    },
    {
        id: 80,
        type: 'A',
        instruction: "76-80 sorularda, cümleler sırasıyla okunduğunda parçanın anlam bütünlüğünü bozan cümleyi bulunuz.",
        text: "(I) Social phobia, or social anxiety disorder, is defined by an overwhelming and irrational fear of being scrutinized, judged, or humiliated in social and performance contexts. (II) Sufferers frequently experience acute autonomic symptoms, such as rapid heartbeat, trembling, and profuse sweating, whenever exposure to public attention becomes unavoidable. (III) Consequently, individuals often resort to extensive avoidance behaviours, severely restricting their career advancement and personal relationships to escape potential embarrassment. (IV) Generalized anxiety disorder, however, tends to involve persistent and diffuse worrying about everyday life events rather than specific social evaluative threats. (V) Fortunately, clinical interventions combining cognitive-behavioural therapy with gradual exposure paradigms have proven highly effective in enabling patients to overcome these debilitating social fears.",
        options: { A: "I", B: "II", C: "III", D: "IV", E: "V" },
        correct: "D",
        dict: { "scrutinized": "dikkatle incelenen/eleştirilen", "humiliated": "küçük düşürülmüş", "autonomic": "otonom/istemsiz", "diffuse": "yaygın/belirsiz", "exposure": "maruz bırakma" },
        explanation: `<b>✅ Doğru Cevap: D) IV</b><br><b>📌 Sebep:</b> Metin bütünüyle Sosyal Fobinin tanımı (I), fizyolojik belirtileri (II), kaçınma davranışları (III) ve BDT ile tedavisini (V) konu almaktadır. IV. cümle ise odak noktasını yaygın anksiyete bozukluğunun (GAD) farklı doğasına kaydırarak sosyal fobi zincirini koparmaktadır.<br><br><b>❌ Diğer Seçenekler:</b><br><b>A) (I):</b> Sosyal fobinin klinik tanımını yapar.<br><b>B) (II):</b> Sosyal durumlarda ortaya çıkan fiziksel tepkileri listeler.<br><b>C) (III):</b> 'Consequently' ile bu korkuların yarattığı kaçınma davranışlarını bağlar.<br><b>E) (V):</b> 'these debilitating social fears' diyerek önceki sosyal kaygı ve kaçınmaların tedavisine geçer.`
    }
];

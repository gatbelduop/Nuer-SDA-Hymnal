// new.js

document.addEventListener("DOMContentLoaded", () => {
    const pages = document.querySelectorAll(".page");
    const navLinks = document.querySelectorAll("nav a");
    const exploreBtn = document.getElementById("explore-btn");
    const searchBtn = document.getElementById("search-btn");
    const globalSearch = document.getElementById("global-search");
    const hymnSearch = document.getElementById("hymn-search");
    const categoryFilter = document.getElementById("category-filter");
    const hymnsList = document.getElementById("hymns-list");
    const pagination = document.getElementById("pagination");
    const backToListBtn = document.getElementById("back-to-list");
    const hymnDetail = document.getElementById("hymn-detail");
    const prevHymnBtn = document.getElementById("prev-hymn");
    const nextHymnBtn = document.getElementById("next-hymn");
    const themeSelect = document.getElementById("theme-select");
    const fontSizeRange = document.getElementById("font-size");
    const fontSizeValue = document.getElementById("font-size-value");
    const resetSettingsBtn = document.getElementById("reset-settings");
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    // Sample hymn data
    const hymns = [
        {
            id: 1,
            author: "Praise God From Whom All Blessings Flows ",
            title: "1. Liakɛ Kuoth In Lo̠ny Puth Diaal Thiɛn ",
            category: "Liak Kuoth",
            lyrics: "1. Liakɛ Kuoth in lo̠ny puth diaal thiɛ̈n. Liakɛ Jɛ yɛn jɛ wec muon diaal. Liakɛ Jɛ yɛn jɛ röl nhial diaal. Liakɛ Guän, Gat, kɛ Yië in gɔaa, A-mɛn. "
        },
        {
            id: 2,
            author: "A.H 1. Praise to the Lord.",
            title: "2. A Liake Te̱ Kuär In Bum",
            category: "Liak Kuoth",
            lyrics: "1. A liak te Kuäär in bum kä ɛ Jɛn min la Kuäär Cääkä. Öɣ tieydä ku jɛ liak kɛ ɣöö ɛ Jɛn tëk kä ɛ käändu. Yɛn tin liɛŋ jɛ, bia rɛy Luaakdɛ Thieekädɛ. Ma̱tdɛ kɛ tɛ̈thlɔaac Liakäd. <br><br> 2. A liak te Kuäär in tekɛ luäŋ rui̠cä wi̠i̠ ŋɔaani̠ diaal. Kumɛ ji̠ piny kɛ Gɔ̱ɔ̱kɛ Jɛn bä luäkɛ ji̠ ni gɔaa. Jɛn /ken niɛ nɛn, kɛn ŋɔaku diaal tin go̠o̠ri̠, cɛ kɛn diaal käm ji̠ kɛ Nho̠kdɛ. <br><br> 3. A liak te Kuäär in poth lätku diaal kä Jɛn gaŋɛ ji̠. Ni̠ ciaŋ Gɔɔydɛ kɛnɛ Kɔ̱äc-lɔaacdɛ laa kämɛ kɛ ji̠. Carni̠ mi̠ gɔaa, min dee Kuäär in di̠i̠t ɛ lät. Ni̠kɛ nhök mi̠ ɛ ji̠n Määthdɛ."
        },
        {
            id: 3,
            author: "Bol Thɔɔt Kuɔth",
            title: "3. A Puɔny Te̱e̱ Ji̠ Mi̠ Ci̠ Nhial Cak",
            category: "Liak Kuoth",
            lyrics: "1. A puɔny te̱e̱ Ji̠n mi̠ ci̠ nhial cak kɛnɛ piny, Cuŋku diaal tin gɔw kɛn nyuɔth kɛ Gɔɔydu. A puɔny te̱e̱ Ji̠n mi̠ ci̠ nhial cak kɛnɛ piny, mi̠ ci̠ nhial cak puɔny kɛɛliw ɛ Duŋdu.<br><br>Puɔny kɛɛliw ɛ Duŋdu Kuothdä min gɔaa, puɔny kɛɛliw ɛ Duŋdu. Nhök ɛ Duŋdu. Buɔ̱m ɛ Duŋdu. Gɔɔy ɛ Duŋdu Kuoth. ŋɔaani̠ diaal wi̠i̠ muɔ̱ɔ̱n kɛ Nyinku. <br><br> 2. A puɔny te̱e̱ Ji̠n mi̠ ci̠ nhial cak kɛnɛ piny. Lätku diaal tin gɔw kɛn gääykɛ-ɛ naath. A puɔny te̱e̱ Ji̠n mi̠ ci̠ nhial cak kɛnɛ piny. Mi̠ ci̠ nhial cak puɔny kɛɛliw ɛ Duŋdu. <br><br> 3. A puɔny te̱e̱ Ji̠n mi̠ ci̠ nhial cak kɛnɛ piny. Nhök kɔ̱cä lɔaacdu tëë thi̠n a thiɛl pek. A puɔny te̱e̱ Ji̠n mi̠ ci̠ nhial cak kɛnɛ piny. Mi̠ ci̠ nhial cak puɔny kɛɛliw ɛ Duŋdu. <br><br>4. A puɔny te̱e̱ Ji̠n mi̠ ci̠ nhial cak kɛnɛ piny. Ji̠n di̠tni̠ Ji̠n kä kɛn ŋɔaani̠ diaal. A puɔny te̱e̱ Ji̠n mi̠ ci̠ nhial cak kɛnɛ piny. Mi̠ ci̠ nhial cak puɔny kɛɛliw ɛ Duŋdu. "
        },
        {
            id: 4,
            author: "Traditional / Unknown",
            title: "4. Baa Ji̠ Puany Kɛ Diit Kuoth",
            category: "Liak Kuoth",
            lyrics: "1. Baa Ji̠ puany kɛ diit Kuoth nhial Ji̠n mi̠ rɔ̱ŋ ni̠ jɛn kɛ liak. Bi̠ tieydä Ji̠ puany rɛy ɣɔaa ɛ jiääk ɛmɛ.  <br><br> Kuoth nhial mi̠ rɔ̱ŋni̠ Jɛn kɛ liak Nhɔkɛ ɣä. ɣän ram mi̠ jiääk Ji̠n ci̠ ɣä kɔk kɛ riɛm mi̠ gɔaa. (Mi̠ gɔaa mi̠ gɔaa) (ɛn riɛm Ruathdɛ̈ɛ̈l) ni̠ Kuray ɛ jɛn ci̠ ɣän ku gɔaa kɛ jɛ) <br><br> 2.	Baa Ji̠ puany kɛ tin ci̠ lät Ji̠n mi̠ rɔ̱ŋni̠ Jɛn kɛ liak, ku gɔaani̠ ji̠n kä rɔaadu Yier teekä. Tɛɛ kɛ kir mi̠ no̠ŋ pi̠i̠kɛ wec Kuɔth tɛ̈thlɔaac gua̱a̱th ciɛɛŋä Kuɔth, in di̠tni̠ Jɛn kä rɛl gɔɔydɛ rɔ. <br><br> 3. Ɛ pua̱r liak Lätku tin gääy naath Ji̠n mi̠ rɔ̱ŋ nɛ Jɛn kɛ liak. Ɛ Gɔɔydu latkɛ Dolädu min rɛlrɔ. <br><br>4.	Ni̠ mëë /keni̠ pääm ni̠ cak, ni̠ mëë /keni̠ ɣɔw ni̠ cak, ɛ Ji̠n Kuoth mi̠ tëë thi̠n ni̠ wal. Kä ɛ Ji̠n mi̠ jak naath kä li̠w wi̠i̠ i̠ “Luɔcɛ tuur löö gaat A-dɛm.” Kɛ ɣöö cet run ti̠ bathdɔɔr kɛ cäŋ kɛl kä Ji̠.  <br><br> 5. Dee ŋuen ni ɣöö dee ɣän a gääŋ thuɔk kal Kuɔthdä, kä ɣöö dëë ci̠ëŋ kɛɛmä kä guän nyuɔni. Gɔaani ɣöö dee raan cäŋkɛl ku thuk ni̠ rɛy Kalu, kä ni̠n ti̠ bathdɔri̠ rɛy gua̱th mi̠ dɔ̱ŋ."
        },
        {
            id: 5,
            author: "Kui̠c Gatdet Jaak",
            title: "5. Ku Gɔɔydu Lɛ Ni̠ndi̠?",
            category: "Liak Kuoth",
            lyrics: "1. Ku Gɔɔydu lɛ ni̠ndi̠? Gɔɔydu Kuothda ni̠nɛ di̠? Bi̠ nɛy Ji̠ puany kɛ diit, Kɛ ɣöö ci̠ kɔ kän.  <br><br>Buaydu Kuothda a jɛ lɛp rɛyda. A cie̱ŋ rɛyda, nyuthni̠ jɛ kɔ A cie̱ŋ rɛyda. <br><br>2. Kuoth kämni̠ kɔ Ruacdu, Kuoth la̱ŋkɔ Ji̠ kämni̠kɔ Ruacdu. Bi̠ nɛy Ji̠ puany kɛ diit, Kɛ ɣöö ci̠ kɔ kän. <br><br>3. Kuoth kämni̠kɔ Nhökdu, Kuoth la̱ŋkɔ Ji̠ kämni̠kɔ Nhökdu. Bi̠ nɛy Ji̠ puany kɛ diit, Kɛ ɣöö ci̠ kɔ kän. <br><br>4. Kuär päli̠kɔ i̠kä kɛ dueerkɔ, Kuär läŋkɔ Ji̠ päli̠kɔ i̠kɔ kɛ dueerkɔ. Bi̠ nɛy Ji̠ puany kɛ diit, Kɛ ɣöö ci̠ kɔ kän.   "
        },
        {
            id: 6,
            author: "De̱e̱-bi̠t Kɛ̈k Cuol ",
            title: "6.  Ɛ Tɛ̈thlɔac Mi̠ Ni̠ndi̠ ",
            category: "Liak Kuoth",
            lyrics: "1. Ɛ tɛ̈thlɔac mi̠ ni̠n di̠ min di̠ lar nhökdu löö Kuoth! Ɛ tɛ̈thlɔac mi̠ ni̠n di̠ min dëë lar nhökdu kɛ kɔ! <br><br>Jɛn kärɔa mi̠ ci̠ tëkdɛɛ thöp kɛ ɣöö bä kän. Jɛn kärɔa mi̠ ci̠ rɔɔdɛ thöp kɛ guäthdä. <br><br>2. Ɛ ji̠n buay kä ɣä Kuoth kɛ Rieetku tin böth kɛ ɣä. Ɛ tëthlɔac mi̠ ni̠n di̠ min dëë lar nhök Rieetni̠ku. <br><br>3. Kä bo̠o̠thda ni̠ Ji̠thɛth kä Cuumdan ni̠ Jɛn Yiëë Kuɔth, ɛ tɛthlɔac te̱e̱ Kuoth in Guän bɛ tee  i̠n, mäni cäŋ kɛl. Kä Luɔ̱ɔ̱ku kɛ cuɔ̱ŋ-cuɔ̱ɔ̱ŋ baa Ji̠ liak kɛ kuic ɛmɔ, kä Gɔɔydu jɛn di̠tdɛ bɛ tee i̠nɔ mäni̠ cäkɛl.",
        },
        {
            id: 7,
            author: "GB 685 Iam so glad that our Father  ",
            title: "7. Ɣän Tɛth lɔcdä kɛ Guändan",
            category: "Liak Kuoth",
            lyrics: "1. Ɣän tɛth lɔcdä kɛ Guändan in te̱ nhial, Nhökdɛ mi̠ lätɛ kɔn nyuthɛ kɔn ti̠ ga̱ykɛ ɣä rɛy Bay-bolä, nhök di̠i̠t Yecu lenyɛ kɛ kɛn diaal. <br><br> Ɣän lim lɔcdä Yecu nhɔk ɣä, Cuarɛ nhökdä, cuarɛ nhökdä, ɣän lim lɔcdä Yecu nhɔkɛ ɣä. Kä /cɛ ɣä lo̠k, nhɔkɛ ɣä.  <br><br>2. Cäŋ ruec wi̠cdä kä ja̱a̱l ni ɣɔw, guäth tin ta̱a̱ thi̠n ŋotdɛ kɛ mi̠ nhɔkɛ ɣä. Ɣän bä laa liɛŋä Jɔwdɛ mi̠ te̱e̱ nhök. <br><br>3. Cäŋ lua̱ŋä dit kɛl kärɔa kɛ kiet, mi̠ nɛ̈ɛ̈nä Mi-lik In Di̠i̠t cieŋ nhial kɛ wuɔ̱t. Jɛn bä di̠tdä laa kɛ̈tdä mäni̠ wal, Yecu nhɔkɛ ɣä ɛ mi̠ ŋa̱cä i̠nɔ. <br><br> 4. Yecu nhɔkɛ ɣä kä ŋa̱cä jɛ i̠ nhɔakä Jɛ, nhök ëë no̠o̠ŋ Jɛ piny bɛ tieepdä war. Ɛ jɛn ɛ nëë li̠w kɛ Jɛ ni̠ jɔk jiaath, ŋa̱cä jɛ kɛ waŋ i̠ Yecu nhɔkɛ ɣä. ",
        },
        {
            id: 8,
            author: " Bol Thɔɔt Kuɔth  ",
            title: "8. Gaat Maari Liaknɛ Kuoth ",
            category: "Liak Kuoth",
            lyrics: "1. Gaat maari̠ li̠aknɛ Kuoth kɛ tëthlɔac, gaat maari̠ li̠aknɛ Kuoth kɛ tɛ̈thlɔac. <br><br>Baa Ci̠ötdu puany kɛ diit, baa Ci̠ötdu puany kɛ tɛ̈thɔac, Kuoth a te puɔny. Baa Ci̠ötdu puany kɛ luuth, baa Ci̠ötdu puany kɛ tɛ̈thlɔac, Kuoth a te puɔny. <br><br> 2. Nyi̠eemaari̠ li̠aknɛ Kuoth kɛ tɛ̈thlɔac, nyi̠eemaari̠ li̠aknɛ Kuoth kɛ tɛ̈thlɔac. <br><br> 3. Gua̱ari̠ li̠aknɛ Kuoth kɛ tɛ̈thlɔac, maari̠ li̠aknɛ Kuoth kɛ tɛ̈thlɔac. <br><br>4. Li̠ak nɛ Jɛ kä di̠t Gɔɔydɛ kä bum ni̠ jɛn, lät kɛ tin gääy naath kɛn gɔw kɛ.    ",
        },
        {
            id: 9,
            author: " A.H. 557 Come, ye thankful people  ",
            title: "9. Yɛn Ji̠ Tɛthkä lɔaac Kua Ben",
            category: "Liak Kuoth",
            lyrics: "1. Yɛn ji̠ tɛthkä lɔaac kuaa ben, kɛ̈tɛ dit ŋër ka̱a̱kni̠ cie̱ŋ, caa kɛn diaal duɔl ciëëŋni̠kɔn, ci̠ kay-ŋua̱a̱k ku thia̱k kɛ ben. Kuoth in cak naath cɛ kɛ ŋun, kɛ kui̠dan görkɔ ni̠ mieth, biaa kä Kuoth rɛy Luaakdɛ biaa, kɛ̈tɛ diit ŋër ka̱a̱kni̠ cie̱ŋ. <br><br>2. Ɣɔw kɛɛliw ɛ kak Kuɔth, dɛy ŋɔaani̠ diaal do̠nykɛ puɔ̱ɔ̱nydɛ, jak kɛnɛ bɛl caa kɛn diaal pith, piɛthkɔ kɛ kɛ kui̠ miethda. Do̠nykädiɛn cu ji̠th cu päl, kä täämɛ cu pua̱ny bɛɛl jɔɔc, Kuäär ŋër bɛɛl ku kɔ ka̱m tɔ̱ɔ̱w, bɛl ti̠ gɔw ni̠ thukädiɛn. <br><br>3. Kɛ ɣöö bi̠ Lɔɔd Kuothdan ben, kä bɛ Bɛlkɛ ben naŋ cieŋ, rɛy Kakädɛ ɛn cäŋ ɛmɔ, kɛn yäc diaal baa kɛ naŋ raar. Kä bɛ Ja̱a̱kɛ la̱r lär, rɛy maac baa jil yuɔr thi̠n, baa tin gɔw ku naŋ tɔ̱ɔ̱wkä, rɛy gua̱th Yupkädɛ in gɔaa. <br><br>4. Lɔɔd, lapkɔ Bɛlku tin jiäk, /cu kɔ yäk kɛ jiääkda pa̱ny, dueerkɔ tin caa kɛ la̱r Ji̠, ku kɛ päl, aɣ, Lɔɔd, ca̱kɛ duer. Ji̠thɛth Kuray ɛ lueel dueeri̠, Ji̠thɛth Kuray cɛ Tëkdɛ thöp, kɛ kui̠dan kɛ ɣöö banɛ gɔw, Jɛn cio̠tɛ cɔɔlɛ kɔn täämɛ.",
        },
        {
            id: 10,
            author: "A.H 21. Immortal, Invisible God",
            title: "10.  Mi̠ Do̠raar Mi̠ /Ci̠ Jɔc ",
            category: "Liak Kuoth",
            lyrics: "1. Mi̠ do̠raar mi̠ /ci̠ jɔc Kuoth in rɔ̱ŋ Gɔɔydɛ, rɛy Buɔyädu min rɔ̱ŋ ci̠ rɔ tɔ̱w rɛydɛ. Mi̠ caa poth mi̠ te puɔny kä ɛ Ji̠n la do̠raar. Bumi̠ kä ci̠ tiëm bä ba̱a̱kɔ Ciötdu puany. <br><br> 2. mi̠  /ci̠ lɔ̱ŋ kä  /ci̠ pɛ̈th bitdɛ cetkɛ buɔy. Jin thiɛlɛ mi̠ go̠o̠ri̠ rueci̠ kɛ Buɔ̱mdu. Thuɔ̱ɔ̱ku kɛn Cuŋku cetkɛ pääm ti̠ jɔc nhial. Pua̱rku lo̠nykɛ kɛ gɔɔy amäni̠ nhök. <br><br> 3. ji̠n tho̠pi̠ tëk kä nɛy diaal tin te̱ wi̠i̠ muɔ̱ɔ̱n. Tin tëk tin te̱ wi̠i̠ muɔ̱ɔ̱n be tɛ̈kdiɛn kä ji̠. Kɔn pith nɛy cetkɛ kar tin la do̠ny puɔ̱ɔ̱ny jiaath. ŋotdɛ bä kɔn liewkɔ kä ji̠n /ci̠ rɔ gɛr. <br><br> 4. ji̠n Gua̱nda in te puɔny in wic-wic cet buay. Bi̠ jääku ji̠ puany kɛ luth in bëë kä ji̠. Bi̠ nɛy ji̠ puany kɔn diaal ööɣ lɛp wäŋkɔ ji̠n. Kɛ ŋöö bi̠ nɛy Buaydu nɛn in ci̠ rɔ̱ tɔ̱w thi̠n.  ",
        },
        {
            id: 11,
            author: "Bol Thɔɔt Kuɔth  ",
            title: "11. Kuoth Gɔaa Ni̠ Ji̠n Kärɔa",
            category: "Liak Kuoth",
            lyrics: "1. Kuoth gɔaa ni̠ jɛn kärɔa kä kɛn ŋɔaani̠ dial. Kuoth gɔɔydu kɛ Cuŋku kɛn jɔckɛ mää Thuɔ̱ɔ̱ku. <br><br> Gɔɔydu kɛ Cuŋku, kɛn jɔckɛ kɛ Thuɔ̱ɔ̱ku. Gɔɔydu kɛ Cuŋku, kɛn jɔckɛ kɛ Thuɔ̱ɔ̱ku. Kuoth Gɔɔydu kɛ Cuŋku kɛn jɔckɛ kɛ Thuɔ̱ɔ̱ku. <br><br> 2. ŋɔaak diaal kɛ Nyinku pa̱ny kɛ ɣöö cakɛ ji̠n. Kuoth Gɔɔydu kɛ Cuŋku kɛn juckɛ mää Thuɔ̱ɔ̱ku. <br><br> 3. Ji̠n di̠tni̠ ji̠n kärɔa kä kɛn ŋɔaani̠ diaal. Kuoth gɔɔydu kɛ Cuŋku kɛn jɔckɛ kɛ Thuɔ̱ɔ̱ku. <br><br> 4. Ɛ ji̠n baa ka̱m liak kärɔa kɛn ŋɔaani̠ diaal. Kuoth Gɔɔydu kɛ Cuŋku kɛn jɔckɛ kɛ Thuɔ̱ɔ̱ku. ",
        },
        {
            id: 12,
            author: " A.H. 71. Come, Thou Almighty King ",
            title: "12. Bërkɛ Ji̠n Kuäär in Di̠i̠t",
            category: "Liak Kuoth",
            lyrics: "1. Bërkɛ, ji̠n kuär in di̠i̠t, luäkɔ baa Ciötdu liak, ba̱a̱kɔ ji̠ puany. Kuäär guethä ni̠ kɛɛliw, kä ji̠n tiaami̠ ti̠ diaal. Bërkɛ, ruecni̠ rɛyda, ji̠n Ram ëë wal. <br><br> 2. Bër, Ji̠n ëë laa Riet, gelkɔ kɛ thɛpdu min di̠i̠t, la̱ŋni̠ kɔ kɛɛl. Bërkɛ, kä poth Nɛɛku, kä mockɛ riet bumä: Yiëë gɔɔyä in rɛl rɔ bërkɛ rɛyda. <br><br> 3. Bërkɛ, ji̠n Cuum in gɔaa, baa Nëndu min gɔaa dhil lat, rɛy thaakä ɛmɛ. Ɛ ji̠n laa Tääth in di̠i̠t, ruecni̠ rɛy lo̠cni̠ diaal, kä /cu lɛ jiɛɛn kä kɔ, ji̠n Yiëë bumä. <br><br> 4. Ɛ ji̠n te̱e̱ buɔ̱m kɛɛliw, ba̱a̱ kɔ la̱a̱tdu la̱t wi̠i̠ muɔ̱ɔ̱n, rɛy röli̠ diaal. A kɔ nënkɛ kuääru min do̠raar rɛy buɔyä, kä amäni̠ cäŋ kɛl, nhök kɛnɛ luth.",
        },
        {
            id: 13,
            author: " Tut Gatwec Da̱k ",
            title: "13. Kä Bi̠ Dör Diaal Buɔ̱m Kuɔth Liak",
            category: "Liak Kuoth",
            lyrics: "1. Kä bi̠ dör diaal buɔ̱m; ci̠öt Kuɔth nhi̠al luɔ̱th, kä baa Buɔ̱mdɛ luɔ̱th ɛ kuär we̱c muɔ̱n. <br><br> (Bi̠ mua̱a̱l diaal rɔ̱; bi̠ mua̱a̱l diaal rɔ̱ goŋ ) Liak kɛn gɔɔy puɔnyädu löö kuoth gɔaa i̠. <br><br> 2. Bɛ pal nɛɛni̠ tin can (tin) ci̠ cuuc liŋ, /cɛ pali̠ɛn bi̠ lo̠k jɛn ɛ Kuothdi̠ɛn. <br><br> 3. Liŋ palä löö Kuoth ɛ wi̠eedä; cup kä ji̠ /cu rɔdu teey kɛ ɣä. <br><br> 4. kä cua̱ we i̠ Kuoth ɛ ji̠n “Kuothdä, /cu ɣä päl gua̱n tɛ̈r wurɛ kɔrä”  ",
        },
        {
            id: 14,
            author: " A.H 64 Lord, Dismiss Us With Thy Blessings ",
            title: "14. Kuär Mockɔ Kɛ Puɔ̱thdu Min Rɔŋ",
            category: "Liak Kuoth",
            lyrics: "1. Kuär mockɔ kɛ puɔ̱thdu min rɔ̱ŋ, tɛth lo̠ckɔ kɛ puthku diaal. A lɔcdu kɔ̱c kɛ dueerkɔ kuär, ci̠ nɛy bath kä ci̠ nɛy jek. Ɛ gaatku diaal /ci̠ lo̠ckiɛn jiɛth, kɛ kui̠ Yie̱e̱kädu min gɔaa. <br><br> 2. Tëth lɔaac kɛnɛ pal in thöpnɛ, ɛ jɔw tɛthkä lɔaac Rieetni̠ku. Ɛ dɛy Yie̱e̱kä känädu te̱, rɛy lo̠cnikɔ mä tëkdä. Nɛy diaal tin ŋa̱th, nɛy diaal tin ŋa̱th, ɛ kɛ te̱ kä thuɔ̱k in gɔaa. ",
        },
        {
            id: 15,
            author: "Bol Thɔɔt Kuɔth   ",
            title: "15. Tëë Thi̠n Ciaŋ, Ciaŋ ",
            category: "Di̠t Ga̱a̱n",
            lyrics: "1. Tëë thi̠n ciaŋ-ciaŋ, ciaaŋ Cuŋni̠dɛ ɛn Ji̠thɛth tëë thi̠n /cɛ rɔ wany, Tëë thi̠n ciaŋ-ciaŋ; ciaaŋ Cuŋnidɛ ɛb Ji̠thɛth tëë thi̠n ciaŋ-ciaŋ. <br><br> Päärɛ nɔ runi̠ diaal, Päär ruɔ̱nɔ kɛ ruɔ̱n ɔ, Kɛ pay ɔ kɛ pay ɔ. <br><br> 2. Tëë thi̠n ciaŋ-ciaŋ; ciaŋ Bumädɛ ɛn Ji̠thɛth tëë thi̠n /cɛ rɔ wany. Tëë thi̠n ciaŋ-ciaŋ; ciaaŋ Bumädɛ ɛn Ji̠thɛth tëë thi̠n ciaŋ-ciaaŋ.  <br><br> 3. Tëë thi̠n ciaŋ-ciaŋ; ɛn kɔa̱n lɔacdɛ ɛn Ji̠thɛth tëë thi̠n /cɛ rɔ wany. Tëë thi̠n ciaŋ-ciaŋ; ɛn kɔa̱n lɔacdɛ ɛn Ji̠thɛth tëë thi̠n ciaŋ-ciaaŋ.",
        },
        {
            id: 16,
            author: " A.H.20. O praise Ye the Lord  ",
            title: "16. Öɣ Yɛn Puanyɛ Kua̱äär",
            category: "Liak Kuoth",
            lyrics: "1. Öɣ yɛn puanyɛ kuäär, puanyɛ Jɛ ni̠ Nhial. A la̱ckun tɛth pa̱ny, yɛn ja̱a̱k buɔyä nhial; yɛn ji̠ nhial luɔ̱thɛ jɛ kɛ tin cɛ ku cak. Kä palɛ ni̠ Nhiamdɛ rɛy buɔyä in gɔaa. <br><br> 2. Öɣ yɛn puanyɛ kuäär, puanyɛ jɛ wi̠i̠ muɔ̱ɔ̱n, kɛ jiööth ti̠ bɛɛr naath, yɛn gaat pay cak. Puanyɛ Ram in no̠ŋ yɛ puɔ̱th Baaŋdɛ ni̠ nhial. Puanyɛ Ram in ŋi̠i̠c yɛ, kɛ ɣöö bia Nhökdɛ kiit. <br><br>3. Öɣ yɛn puany kuäär, yɛn diaal te̱e̱ jiööth, ɛ jiööth lɔaac, diaal nyio̠k rɔ kɛ kiet. Ɛ cuɔ̱ɔ̱ŋ diaal lat Gɔɔydɛ, kä ɛ Liakdɛ reep rɔ. Ɛ kaaŋni̠ lat lɛ̈ŋdɛ, kɛ tin cɛ ku la̱t. <br><br> 4. Öɣ yen puanyɛ kuäär, ɛ tɛ̈th lɔaac mää kiet; we kä Ram in moc naath rɛy runi̠ diaal. Kɛ Nhökdɛ min te̱e̱ kɔn, cɛ ciëŋ nhial luɔ̱c kɔn, kɛ puɔ̱th baaŋ känädɛ. Ö yɛn puanyɛ Kuär.",
        },
        {
            id: 17,
            author: " A.H. 661. Holy, Holy, Holy ",
            title: "17. Mi̠ Rɛl Gɔɔydɛ Rɔ ",
            category: "Liak Kuoth",
            lyrics: "1. Mi̠ rɛl gɔɔydɛ rɔ, Kuäär rɛl gɔɔydɛ rɔ. Mi̠ rɛl gɔɔydɛ rɔ Kuoth rɛl gɔɔydɛ rɔ. Mi te̱e̱ thi̠n ni̠ ciaŋ, mi̠ /ci̠ rɔ bi̠ gɛr. Ruaacɛ piny mäni̠ nhial, ka̱mnɛ Ciötdɛ liak. <br><br> 2. Mi̠ rɛy gɔɔydɛ rɔ Kuäär rɛl Gɔɔydɛ rɔ, mi̠ rɛl Gɔɔydɛ rɔ; Kuoth rɛl Gɔɔydɛ rɔ. Mi̠ luɔ̱thkɛ mi̠ nhɔakɛ, mi̠ te̱e̱ gɔɔy puɔnyä. Mi̠ rɛl Gɔɔydɛ rɔ, Kuoth rɛl Gɔɔydɛ rɔ. ",
        },
        {
            id: 18,
            author: "A.H. 75. The Wonder of It All",
            title: "18. Tëë Kɛ Mi̠ Gääy Naath  ",
            category: "Liak Kuoth",
            lyrics: "1. Tëë mi gääy naath kä kony ca̱ŋ kɛ thiaŋ, ɣän ga̱a̱ca̱ min nɛ̈ɛ̈nä lɛ̈p ca̱ŋ, Ɛn min ga̱a̱y naath kä ci copni kä tiey. Min gääy naath diaal ɛ nhök kuɔth kɛ ɣä. <br><br> ÖÖɣ ɛ mi gääy naath, Jɛn emi gääy naath Mi̠ carä jɛ ɛn nhök Kuɔth kɛ ɣä. (x2)  <br><br> 2. Tëë mi gääy naath kä mäy kiɛ gua̱a̱th ŋɛr, kä pua̱a̱r, kɛ kuɛl, mäni ceŋ. Ɛn min gääy naath kä ci̠ copni kä tiey, ɛ min gääy naath in ci ku thuŋ tuɔk. ",
        },
        {
            id: 19,
            author: " Kaŋ Jɔc ŋut  ",
            title: "19. Ɛ mi̠ Gääy Naath ɛn Kuär Kua̱ri̠",
            category: "Liak Kuoth",
            lyrics: "1. Ɛ mi̠ gääy naath ɛn kuäär-kua̱ri̠; Kɛ ɣöö ɛ jɛn te̱e̱ buɔ̱m kärɔa, Ɛ Jɛn kärɔa min gääy naath, Ɛ jɛn te̱e̱ buɔ̱m kä ŋɔaani̠ diaal rɛy ɣɔaa. <br><br> 2. Ɛ mi̠ gääy naath ɛn kuäär-kua̱ri̠; Lätkɛ kɛ lät ti̠ ga̱ykɛ naath. Ɛ jɛn kärɔa min gääy naath. Ɛ jɛn te̱e̱ buɔ̱m kä ŋɔaani̠ diaal rɛy ɣɔaa. <br><br> 3. Liak nhial Buɔ̱mdɛ; liak piny Gɔɔydɛ, liak jɛ rɛy ɣɔaa ɛ tin cɛ cak. Ɛ jɛn kärɔa; min gääy naath ɛ jɛn te̱e̱ buɔ̱m kä ŋɔɔani̠ diaal rɛy ɣɔaa.  ",
        },
        {
            id: 20,
            author: "My God Is so Big   ",
            title: "20. Kuothdä Jɛn Di̠i̠tɛ. ",
            category: "Liak Kuoth",
            lyrics: "1. Kuothdä Jɛn di̠i̠tɛ, bumɛ kä jɛn tëë Lua̱ŋ thiɛlɛ mi̠ /ci̠ Kuothdä jɛ lät. Kuothdä jɛn di̠i̠tɛ, bumɛ kä jɛn tëë Lua̱ŋ thiɛlɛ mi̠ /ci̠ Kuothdä jɛ lät. <br><br> jɛn cɛ jiɛn cak, jɛn cɛ yier cak, kä Jɛn cɛ pääm diaal cak bä. Kuothdä Jɛn di̠i̠tɛ, bumɛ kä jɛn tëë Lua̱ŋ thiɛlɛ mi̠ /ci̠ kuothdä jɛ lät. <br><br>2. Kuothdä Jɛn di̠i̠tɛ, bumɛ kä jɛn tëë Lua̱ŋ thiɛlɛ mi̠ /ci̠ Kuothdä jɛ lät. Kuothdä jɛn di̠i̠tɛ, bumɛ kä jɛn tëë Lua̱ŋ thiɛlɛ mi̠ /ci̠ Kuothdä jɛ lät. <br><br> 3. Pääm diaal kɛ nyinkɛ, yiër diaal kɛ nyinkɛ, mää kuɛɛli̠ bä kɛnɛ maŋ baar. Kuothdä jɛn di̠i̠tɛ, bumɛ kä Jɛn tëë Lua̱ŋ thiɛlɛ mi̠ /ci̠ Kuothdä jɛ lät. Thiɛlɛ mi̠ /ci̠ Kuothdä jɛ lät, thiɛlɛ mi̠ /ci̠ kuothdä jɛ lät, kä ji̠. ",
        },
        {
            id: 21,
            author: "Ria̱ŋ Jɔɔk Duɔth  ",
            title: "21. Liakɛ Kuoth Nhial Yɛn Dör.",
            category: "Liak Kuoth",
            lyrics: "1. Liakɛ Kuoth Nhial, Yɛn dör wec-muɔ̱n diaal. kɔn liaknɛ jɛ, kɔn liaknɛ jɛ, Cɛ luäŋdɛ nyuɔ̱th. <br><br><i> (A-le-lu-ya)</i> Liak nɛ jɛ kɛ ɣöö cɛ riɛmdɛ thöp, liaknɛ jɛ kɔn ji̠ ɣɔaa. Kɔn liak nɛ jɛ, kɔn liaknɛ Jɛ, cɛ Lua̱ŋdɛ nyuɔ̱th. (x2) <br><br> 2. Nɔ̱ɔ̱ni̠ rɔɔdu kɛ nyin wec-muɔ̱n, ji̠n /cu kɛ ŋäth, ji̠n /cu kɛ ŋäth, bi̠ gua̱th diɛn thuɔ̱k. <br><br>3. Liakɛ Kuoth Nhial, Yɛn dör wec-muɔ̱n diaal, Kɔn liaknɛ jɛ, kɔn liaknɛ jɛ, Cɛ kɔa̱c lɔaac nyuɔ̱th.",
        },
        {
            id: 22,
            author: " There Is the One Beyond the Azure ",
            title: "22. Tëë Kɛ Rami̠ Te̱ Kui̠c Puɔ̱ɔ̱rä.",
            category: "Liak Kuoth",
            lyrics: "1. Tëë kɛ ram mi̠ te̱ kui̠c puɔ̱ɔ̱rä, ɛ Kuoth in /caa luäŋkɛ nën waŋ. Cɛ pua̱a̱r moc biɛl nhial ti̠ te̱e̱ dääk, kä cɛ wi̠c muɔ̱n cuŋkɛ Buɔ̱mdɛ. <br><br> Kuoth Jɛn tëë thi̠n, kä jɛn tëkɛ, tëkdan kɛɛliw, jɛn bi̠i̠ kä jɛ. Rɛy tuɔ̱ɔ̱r ci̠ Kuoth raan mockɛ tëk, Kuothdan cɔalɛ (Mi̠ Te̱ Wa̱nɔ.)  <br><br>2. Kɛ run ti̠ ŋuan tëë ci̠ we bä, Ɛ Kuoth ɛn mëë liŋ göök Jɔwdɛ, Ɛ Jɛn in dëë kɔn ɛ ŋa̱c, In Ruackɛ Rieetkɛ ti̠n tëë Yiëë. <br><br> 3. Kuothdan ëë li̠w Gatdɛ wi̠i̠ jiath Cɛ nhɔk i̠ bi̠ Gatdɛ jiɛn. Kɛ ɣöö bɛ duer ran wockɛ lia̱a̱, Kä bɛ ciëŋkɛ raan mää cäŋ kɛl.",
        },
        {
            id: 23,
            author: "Bol Thɔɔt Kuɔth",
            title: "23. Kuoth Nhial Di̠i̠t Ɛ.",
            category: "Liak Kuoth",
            lyrics: "1. Kuoth Nhial Di̠tɛ Di̠tɛ, Kuoth Nhial Di̠tɛ Di̠tɛ. A lëëp diaal liak Jɛ nikɛ Di̠tdɛ. <br><br> Kuoth di̠tɛ, di̠tɛ, di̠tɛ ( x5) Kä tëë buɔ̱m keeliw. Kuoth Nhial Di̠tɛ Jen Di̠tɛ. <br><br> 2. Kuoth Nhial Di̠tɛ Di̠tɛ, Kuoth Nhial Di̠tɛ Di̠tɛ, Lat pua̱r Gɔɔydɛ nikɛ di̠tdɛ.<br><br>3. Kuoth Nhial Di̠tɛ Di̠tɛ, Kuoth Nhial Di̠tɛ Di̠tɛ, Lat piny Gɔɔydɛ ni̠kɛ Di̠tdɛ",
        },
        {
            id: 24,
            author: "A.H 361.To God be the glory ",
            title: "24. Kä Puɔny Bɛ Tëe̱ Kuoth.",
            category: "Liak Kuoth",
            lyrics: "1. Kä puɔny bɛ te̱e̱ Kuoth kɛ buɔ̱m-buɔ̱ɔ̱m tin cɛ la̱t. Kɛ Nhökdɛ kɛ ɣɔw ɛmɛ cɛ kɔn ka̱m Gatdɛ, mi̠ ci̠ Tëkdɛ thöp kɛ wuɔ̱cdɛ kɛ dueer. Cɔ thok rɛ̈ɛ̈k teekä lɛp bi̠ kɔn diaal we thi̠n. <br><br>Liakɛ Kuoth, liakɛ Kuoth, yɛn ji̠ ɣɔaa liɛŋɛ Jɔwdɛ. Liakɛ Kuoth, liakɛ Kuoth, a lo̠c nath diaal tɛth. Aɣ, biaa kä Gua̱a̱ra, kɛ Ji̠thɛth, Gatdɛ. Mi̠ ci̠ Jɛn ɛ ka̱m puɔny, kɛ buɔ̱m-buɔ̱ɔ̱m tin cɛ la̱t. <br><br> 2. Aɣ gɔɔy mi̠ luɛl kɔn, cɛ kɔn kɔk kɛ riɛm. Kɛn diaal tin ŋa̱thkɛ Kuoth te Ruac Kuoth kɛ kɛ. Ji̠n mi̠ ŋääthi̠ Jɛ ɛlɔ̱ŋ /ci̠ mi̠ jiääk dee ben. Ɛn täämɛ rɛy Ji̠thɛth ca̱a̱kɔ ciaaŋ päli̠kä jek. <br><br> 3. Tin bum tin cɛ ŋi̠eec kɔ, tin buɔ̱m-buɔ̱ɔ̱m tin cɛ la̱t. Tɛth lo̠ckɔ ɛlɔ̱ŋ bä rey Ji̠thɛth, Gatdɛ. Kä Gɔɔydɛ kä Di̠i̠tdɛ kä Buɔ̱mdɛ, bikɛ tey. Mi̠ ga̱a̱ykɔ mi̠ ko̠tkɔ ba̱a̱kɔ Ji̠thɛth nɛn.",
        },
        {
            id: 25,
            author: " Bol Thɔɔt Kuɔth ",
            title: "25. Kɔn Diaal Käändan Ɛ Yëcu.",
            category: "Kään",
            lyrics: "1. Kɔn diaal käändan ni̠ Yëcu. (Alɛluya x3) A liak te̱kɛ Jɛ. <br><br> Alɛluya Yëcu  (Alfluya x3) A liak te̱kɛ Jɛ. <br><br>2. Kɔn diaal Luääkdan ni̠ Yëcu. (Alɛluya x3) A liak te̱kɛ Jɛ. <br><br>3. Kɔn diaal Määthdan ni̠ Yëcu. (Alɛluya x3) A liak te̱kɛ Jɛ. <br><br>1. Kɔn diaal Bo̠o̠thdan ni̠ Yëcu. (Alɛluya x3) A liak te̱kɛ Jɛ.",
        },
        {
            id: 26,
            author: " A.H. 83 Oh worship the King  ",
            title: "26. Aɣ Palnɛ Ni̠ Kuar.",
            category: "Pal Kuoth",
            lyrics: "1. Aɣ palnɛ ni̠ kuäär, puɔny kɛɛliw ni̠ nhial. Aɣ kietnɛ a gɔaa, Lua̱ŋdɛ kɛnɛ Nhökdɛ. ko̠tdä kä Gääydä, Due̱e̱lɛ, kɛ Yie̱e̱ndɛ kɛ puɔny. <br><br> 2. Aɣ larni̠ Buɔ̱mdɛ, aɣ kietnɛ Gɔɔydɛ. Jɛn mi̠ Bi̠i̠dɛ buɔy ɛ, jɛn mi̠ nyur rɛy dua̱ŋ. Thuɔ̱r-biɛɛli̠ kɛɛkä lɔaacdɛ, caa ma̱a̱r nhial nööŋ. Kä muth ɛ jɛn Duɔ̱ɔ̱pdɛ, kɛ kɔ̱tkɛ rɛy jɔam. <br><br>3. Mun kɛl kɛ due̱lɛ, duël kɛ ti̠ gääy naath. Bum-bum ɛn buɔ̱mdɛ, caa diel la̱tni̠ wal. Caa diel cuɔ̱ŋ ditni̠ buɔ̱mdɛ, kɛ rui̠c mi̠ thielɛ pek. Caa da̱k piny gua̱thni̠ diaal, caa da̱k piny rɛy ɣɔaa. <br><br> 4. Kɔ̱c gaat tupkä ɛ they, thiɛl kɛ buɔ̱m kɛ dueer. Kɔn ŋääth nɛy ni̠ Ji̠, baa buɔ̱mdu jek thi̠n. lɔc Kɔa̱cdu di̠tni̠ Gɔɔydɛ, bumɛ ɛlɔ̱ŋ thiele pek Määthdä Lueel dueeri̠kɔ, kä Cääkdä Gääŋdä.",
        },
        {
            id: 27,
            author: " Unknown ",
            title: "27. Kuoth Mi̠ Cak Ɣɔw.",
            category: "Pal Kuoth",
            lyrics: "1. Kuoth mi̠ cak ɣɔw, Ɛ jɛn Kuoth mi̠ di̠i̠t. Mi̠ mooc kɔn buɔ̱m, Ɛ jdn Kuäär nhial. <br><br> Aɣ Ji̠thɛth Kuothda, Mi̠ cak nhial kɛnɛ piny, Ɛ jɛn Rääŋ ɣɔaa, Ɛn Gat Kuɔth nhial; Ni̠ Jɛn Ji̠thɛth. <br><br> 2. Kuothda ni̠ Lɔɔd, Bi̠ nɛy läŋni̠ Ji̠. Ji̠thɛth Käändä, Bi̠ nɛy puanyni̠ Ji̠. <br><br> 3. Gua̱n nɛɛni̠ diaal, Ci̠ Jɛn ben rɛy ɣɔaa, Banɛ puany ni̠ Lɔɔd, Ɛn Kuääran in di̠i̠t.",
        },
        {
            id: 28,
            author: " Bol Thɔɔt Kuɔth ",
            title: "28. Kuoth Kɛ Nhökdɛ Päärɛ Nɛy Diaal.",
            category: "Nhök Kuoth",
            lyrics: "Kuoth kɛ nhökdɛ päärɛ nɛy diaal kɛɛl thiɛlɛ ram mi̠ lokɛ. Nikɛ Nhökdɛ kɛ kɔn gaatkɛ Nhɔke kɔn, Nhɔkɛ kɔn ni̠ kɔn diaal. <br><br> Kuoth kɛ Nhökdɛ. Kuoth kɛ Nhökdɛ nhɔkɛ gaatkɛ diaal athiɛl pe̱k. Kuoth kɛ Nhökdɛ, Kuoth kɛ Nhökdɛ nhɔkɛ gaatkɛ diaal athiɛl pe̱k. <br><br> 2. Jakɛ nhialɛ kä dɛm guathni̠ diaal ji̠ due̱e̱ri̠ mää ji̠ cuŋni̠. Nikɛ Nhökdɛ kɛ kɔn gaatkɛ nhɔkɛ kɔn, nhɔkɛ kɔn ni̠ kɔn diaal. <br><br> 3. Tëkɛ kɔ̱a̱c lɔac kɛ nɛɛkɛ diaal, nɛɛkɛ nhɔkɛ kɛ. Nikɛ Nhökdɛ kɛ kɔn gaatkɛ nhɔkɛ kɔn, nhɔkɛ kɔn ni̠ kɔn diaal. ",
        },
        {
            id: 29,
            author: " Cuɔɔl Böth Lual ",
            title: "29. Jɛ-ru-tha-lɛm Mi̠ Duŋ Gɔaa.",
            category: "Ciëŋ Kuoth",
            lyrics: " 1. Jɛ-ru-tha-lɛm mi̠ duŋ gɔaa, Ɛ jɛn gua̱a̱th tɛthkä lɔaac, Wec in rɛl gɔɔydɛ cieŋ Kuoth. <br><br> Jɛ-ru-tha-lɛm min rɛl gɔɔydɛ rɔ, ɛ ciëŋ nɛɛni̠ tin caa poth.  (2x)  Wec in rɛl rɔ, Jɛ-ru-tha-lɛm rɛl gɔɔydɛ rɔ ciëŋ Kuoth.  (2x) <br><br>2. Kɔn nɛy tin bi̠ we, Rɛy ciëŋ wec Jɛ-ru-tha-lɛm, Baa tëth lɔaac mäni̠ cäŋkɛl. <br><br>3. Tëthlɔac bä la̱r Kuoth, Kɛ ɣöö Jɛn cɛ ɣä mɛk, Kɛ Nhökdɛ kɛ ɣä cɛ ɣä cɔl. ",
        },
        {
            id: 30,
            author: " Bol Thɔɔt Kuɔth ",
            title: " 30. Kuoth Nhial ɛ Luääkdä.",
            category: "Nhök Kuoth",
            lyrics: "1. Kuoth Nhial ɛ luäkdä, Jɛn ɛ luäkdä mi̠ thiɛlɛ mi̠ paär Jɛ. Kuoth Nhial ɛ luäkdä, Jɛn ɛ luäkdä mi̠ thiɛlɛ mi̠ paär Jɛ. <br><br> Kɛ ɣöö Nhökdɛ min thiɛl pëk ɛ do̠raar. Nhökdɛ min thiel pëk ɛ do̠raar. Nhökdɛ ɛ do̠raar. <br><br>2. Kuoth Nhial ɛ Kuothdä, Jɛn tëë kɛ buɔ̱m mi̠ thiɛlɛ mi̠ päär Jɛ. Kuoth Nhial ɛ Kuothdä, Jɛn ɛ tëë kɛ buɔ̱m mi̠ thiɛlɛ mi̠ paär Jɛ.<br><br> 3. Kuoth Nhial ɛ Gääŋdä, Jɛn ɛ Gääŋdä mi̠ thiɛlɛ mi̠ päär Jɛ. Kuoth Nhial ɛ Gääŋdä, Jɛn ɛ Gääŋdä mi̠ thiɛlɛ mi̠ paär Jɛ. ",
        },
        {
            id: 31,
            author: "A.H. 516 All the way my Savour leads me ",
            title: "31. Gua̱thni̠ Diaal, Aɣ Gua̱a̱ra, Bo̠th ɣä.",
            category: "Kɔ̱a̱c Lɔaac",
            lyrics: "1. Gua̱thni̠ diaal, aɣ Gua̱a̱ra, bo̠th. Ɛ ŋu dëë lɛ nyɔk kɛ thie̱c? kiɛ dëë diw ni̠ jɛn kɔ̱a̱c lɔaacdu, min yien ɣä rɛy teekä pa̱ny? Kuoth mal-lä, aɣ tëkdä ni̠ te̱e̱kä, kɛ nhökdä min puanyä ji̠. ŋa̱cä min laa go̠o̠ri̠ kä ɣä, Ji̠thɛth Lätg ŋɔak diaal ɛ gɔw, ŋa̱cä min laa go̠o̠ri̠ kä ɣä, Ji̠thɛth Lätɛ ŋɔak diaal ɛ gɔw. <br><br>2. Gua̱thni̠ diaal, aɣ Gua̱a̱ra, bo̠th ɣä. Put jiɔm kɛl mi̠ te̱ kɛ wuɔ̱w, moc ɣä buɔ̱m mi̠ ta̱a̱ rɛy yie̱e̱nä, kämni̠ ɣä mieth Teekädu. Cäŋ diɛɛrä, kä dhil Ji̠n a luääkdä. rɛy riɛmdä cäŋ näk rɛw ɣä. Cäŋ Ja̱lä kɛ jɔak rɛy päämni̠, Jithɛth bo̠thɛ ɣä ni̠ ciaŋ, cäŋ ja̱lä kɛ jɔak rɛy päämni̠, Jithɛth bo̠thɛ ɣä ni̠ ciaŋ. <br><br> 3. Gua̱thni̠ diaal, aɣ Gua̱a̱ra, bo̠th ɣä. Ɣɔ̱ɔ̱n rɛy Nhökädu mi̠ rɔ̱ŋ, rɛy lɔ̱ɔ̱ŋä mi̠ thuɔ̱k mi̠ ya̱cä, ni̠ luaak Gua̱a̱r ni̠ cieŋ rööl nhial. Mi̠ we yiëëdä we cop Gekädu, rɛy buɔyä ɛn cäŋ ɛmɔ. Dit ɛmɛ ɛ pek runi̠kä, Ji̠thɛth Lätɛ ŋɔak diaal ɛ gɔw, dit ɛmɛ ɛ pek runi̠kä, Ji̠thɛth Lätɛ ŋɔak diaal ɛ gɔw.",
        },
        {
            id: 32,
            author: "Bol Thɔɔt Kuɔth",
            title: "32. Kuoth ɛ Ji̠n Te̱ Buɔ̱m Kɛɛliw.",
            category: "Liak Kuoth",
            lyrics: "1. Kuoth ɛ Ji̠n te̱ buɔ̱m kɛɛliw kɛ ɣöö ɛ Ji̠n cak ŋɔaani̠ diaal, Kuoth ɛ Ji̠n kärɔadu ɛnɔ te̱ buɔ̱m. Gɔɔydu min te thi̠n ni̠ ciaŋ jɛn ɛ mi̠ /ci̠ bi̠ thiɛl,Kuoth ɛ Ji̠n kärɔadu ɛnɔ te buɔ̱m. <br><br>A-le-lu-ya; Kuoth ɛ Ji̠n kärɔa te̱ buɔ̱m. Kärɔadu; ɛ ni̠ɛ Ji̠n kärɔadu te̱ buɔ̱m kärɔa mɔ. Kuoth ɛ Ji̠n kärɔadu ɛnɔ te̱ buɔ̱m.  <br><br>2. Kuoth ɛ Ji̠n te̱ wuɔ̱t kɛɛliw Ji̠n rɛli̠ rɔ ni̠ ciaŋ, Kuoth ɛ Ji̠n kärɔadu ɛnɔ te̱ buɔ̱m. Ti̠ diaal baa Ji̠ ka̱m liak kɛ ɣöö Buɔ̱mdu di̠tɛ, Kuoth ɛ Ji̠n kärɔadu ɛnɔ te̱e̱ buɔ̱m.  <br><br>3. Kuoth ɣɔw kɛɛliw ɛ duŋdu ti̠ diaal kɛ nyinku pa̱ny,  Kuoth ɛ Ji̠n kärɔadu ɛnɔ te̱ buɔ̱m. Gɔɔydu jɔɔcɛ ni̠ cie̱ŋ Nhial gɔɔydu jɔɔcɛ wi̠i̠ muɔ̱n, Kuoth ɛ Ji̠n kärɔadu ɛnɔ te̱ buɔ̱m.",
        },
        {
            id: 33,
            author: "Unknown",
            title: "33. Nënɛ Na-mana Ca Jɛ Jak Kä Gɔaa. ",
            category: "Kään",
            lyrics: "1. Nëënɛ Na-ma-na caa jɛ jak kä gɔaa, kɛ ruac ëë ca la̱r jɛ ɛ gök Nëënɛ Na-ma-na, Na-ma-na caa jɛ jak kä gɔaa. <br><br> Na-ma-na caa jɛ jak kä gɔaa kɛ ruac ëë cɛ liŋ. Nëënɛ Na-ma-na, Na-ma-na caa jɛ jak kä gɔaa. (x2)  <br><br> 2. Na-ma-na cuɛ ruac ëë caa lar liŋ, mëë caa jiök wër ɛ i̠-li-cä, wër bonyni̠ yier kä Jɔrdɛn. <br><br> 3. Na-ma-na cuŋ bony ni kä ba̱rɔw, cetkɛ mëë caa la̱r jɛ ɛ gök. Na-ma-na cu puɔ̱nydɛ cetkɛ puɔ̱ny gatdä. ",
        },
        {
            id: 34,
            author: "Bol Thɔɔt Kuɔth",
            title: "34. Kuoth Päärɛ Nɔ Gua̱thni̠ Diaal",
            category: "Nhök Kuoth",
            lyrics: "1. Kuoth päärë nɔ̱ gua̱thni diaal, Kuoth päärɛ nɔ gua̱thni diaal gua̱thni diaal päärɛ nɔ. Kuoth päärë nɔ̱ gua̱thni diaal ni ciaŋ a thiɛl pek. <br><br> Jen päärë nɔ̱ gua̱thni diaal päärɛ inɔ, jɛn päärɛ nɔ. Jɛn päärɛ nɔ gua̱th ni diaal päärɛ nɔ, Jɛn päärɛ a thiɛl pek. <br><br>2. Kuoth päärë nɔ̱ ni̠ni̠ diaal, Kuoth päärɛ nɔ ni̠ni̠ diaal, ni̠ni̠ diaal päärɛ nɔ. Kuoth päärë nɔ̱ ni̠ni̠ diaal ni ciaŋ a thiɛl pek. <br><br>Jen päärë nɔ̱ ni̠ni̠ diaal päärɛ inɔ, jɛn päärɛ nɔ. Jɛn päärɛ nɔ ni̠ni̠ diaal päärɛ nɔ, Jɛn päärɛ a thiɛl pek. <br><br>3. Kuoth päärë nɔ̱ päthni diaal, Kuoth päärɛ nɔ päthni diaal, päthni̠ diaal päärɛ nɔ. Kuoth päärë nɔ̱ päthni diaal ni ciaŋ a thiɛl pek. <br><br> Jen päärë nɔ̱ päthni diaal päärɛ inɔ, jɛn päärɛ nɔ. Jɛn päärɛ nɔ gua̱th ni diaal päärɛ nɔ, Jɛn päärɛ a thiɛl pek. <br><br>4. Kuoth päärë nɔ̱ runni̠ diaal, Kuoth päärɛ nɔ runni̠ diaal, runni̠ diaal päärɛ nɔ. Kuoth päärë nɔ̱ runni̠ diaal ni ciaŋ a thiɛl pek. <br><br>Jen päärë nɔ̱ runni̠ diaal päärɛ inɔ, jɛn päärɛ nɔ. Jɛn päärɛ nɔ runni̠ diaal päärɛ nɔ, Jɛn päärɛ a thiɛl pek.",
        },
        {
            id: 35,
            author: "Praise Ye the Father  ",
            title: "35. Liakɛ Jɛ Ɛn Gua̱ndan",
            category: "Liak Kuoth",
            lyrics: "1. Liakɛ jɛ ɛn Gua̱ndan kɛ Nhökdɛ in gääy naath, jɛn ɛ Gääŋ mi kɔ̱c kɛ gaatkɛ tin ci dueer. Liake jɛ yɛn ja̱a̱k nhial liakɛ jɛ ni cieŋ Nhial liakɛ Ja-öba. <br><br> 2. Liakɛ jɛ ɛn Käändan, kɛ kɔ̱ac lɔacdɛ min di̠i̠t. Jɛn tëë kɛ kɔ̱ac lɔac kɛ Gaatkɛ tin cɛ mɛk. ŋuɛ̈tni, yɛn la̱a̱t, män, dɔŋ, wutni, mäni gaat, liake jɛ ɛn Käändan. <br><br> 3. Liakɛ Yiëë In gɔaa, ɛ jɛn buum ji̠ Ithɛ-ruɛl. Jɛn Gua̱ndan kä gatdɛ cɛ kɔn poth; liakɛ jɛ Gua̱ndan, Gat Kuoth, Yiëë In Gɔaa, liakɛ jɛ Kuoth in diɔ̱k.",
        },
        {
            id: 36,
            author: "Bol Thɔɔt Kuɔth",
            title: "36. Kuoth Kɛ Gɔɔydɛ Min Di̠i̠t",
            category: "Liak Kuoth",
            lyrics: "1. Kuoth kɛ Gɔɔydɛ min di̠i̠t, /cɛ bi̠ thiɛl bɛ te̱ thi̠n amäni̠ cäŋ dɔ̱diɛn. Kuoth kɛ Gɔɔydɛ min di̠i̠t, /cɛ bi̠ thiɛl bɛ te̱ thi̠n amäni̠ cäŋ dɔ̱diɛn. <br><br> Kɛ ɣöö jɛn ɛ do̠raar, ɛ do̠raar bɛ te̱ thi̠n mäni̠ cäŋ dɔ̱diɛn: Kɛ ɣöö jɛn ɛ do̠raar, ɛ do̠raar bɛ te̱ thi̠n mäni̠ cäŋ dɔ̱diɛn. (x2) <br><br> 2. Kuoth kɛ Buɔ̱mdɛ min di̠i̠t, /cɛ bi̠ thiɛl bɛ te̱ thi̠n amäni̠ cäŋ dɔ̱diɛn. Kuoth kɛ Buɔ̱mdɛ min di̠i̠t, /cɛ bi̠ thiɛl bɛ te̱ thi̠n amäni̠ cäŋ dɔ̱diɛn. <br><br> 3. Kuoth kɛ Nhökdɛ min di̠i̠t, /cɛ bi̠ thiɛl bɛ te̱ thi̠n amäni̠ cäŋ dɔ̱diɛn. Kuoth kɛ Nhökdɛ min di̠i̠t, /cɛ bi̠ thiɛl bɛ te̱ thi̠n amäni̠ cäŋ dɔ̱diɛn.",
        },
        {
            id: 37,
            author: "Dhol Bita Jidamu",
            title: "37. Ji̠n Ran  Ji̠-da-mu",
            category: "Kään",
            lyrics: "1. Ji̠n ran Ji̠-da-mu, lääri̠ ram mi̠ dëc, “Bërkä I̠-li-yaa,” ciötdɛ ɛ Na-ma-na. <br><br> Na-ma-na, ëë, ëë, Na-ma-na, Aɣ Na-ma-na. Na-ma-na, ëë, ëë, Na-ma-na, cua cu jaa gɔaa. <br><br> 2.  I̠-li-yaa ruacɛ kɛ Na-ma-na, ji̠n Na-ma-na, Na-ma-na ba ji̠ buɔny rɛy yiëër. <br><br> 3. Ji̠n bër lak dueerku kɛnɛ jiääku diaal, Riɛmdɛ ɛn Yëcu bɛ jiääku lak jɔ̱ɔ̱r. <br><br> 4. Gat Kuoth ni̠ Yëcu cɛ li̠w wi̠i̠ jiath ŋa̱p, Banɛ ŋäthni̠ Jɛ, kɛ ɣöö ɛ Jɛn tëkdan. <br><br> 5. Yɛn diaal ŋuɛ̈tni̠ Kuoth ŋa̱thnɛ ni̠ Yëcu, banɛ gua̱th ni̠ gɔaa, we jek rɛy kuärä ciɛ̈ŋ Nhial.",
        },
        {
            id: 38,
            author: "Nina bi Shukuru Rabuna ",
            title: "38. Kɔn Diaal Banɛ Kuoth Liak",
            category: "Liak Kuoth",
            lyrics: "1. Kɔn diaal banɛ Kuoth liak; ɛn Gua̱ndan. Kɛ jɛn cäŋ ɛn walɛ; ɛlɔ̱ŋ pa̱ny. Kɛ ɣöö Cärɛ kui̠dan kɔn nɛy tin la Krith-cini. <br><br> Banɛ puany ni̠ jɛ, ɛn Kuoth Nhial. Nikɛ lo̠ckɔn diaal, gaatmaar. Rɛy lätni̠kɛ diaal, tin lät Kuoth kɛ, ɛ thuɔ̱k lätɛ kɛ kɛ kui̠dan. (x2) Kä te̱ kɔn diaal kɛ mal kɛɛ Kuoth. A-le-lu-ya; kä te̱ kɔn diaal kɛ mal kɛ-ɛ Kuoth. Ni̠kɛ lua̱ŋ Yëcu; kä te̱ kɔn diaal kɛ mal kɛ-ɛ Kuoth. A-le-lu-ya; kä te̱ kɔn diaal kɛ mal kɛ-ɛ Kuoth. Nikɛ lua̱ŋ Yëcu. <br><br> 2. Kɔn diaal banɛ Kuoth liak; ɛn Gua̱ndan. Kɛ ɣöö cɛ kɔn ka̱m Kuär; ni̠ Yëcu. Kä ɣöö cɛ kɔn moc mal kamdan kɛ Kuoth in la Gua̱ndan. <br><br> 3. Kuoth Nhial Jɛn go̠o̠rɛ ɣöö; banɛ lät. Ni̠kɛ lɔcdan kɛɛliw; banɛ la̱t. Kɛ ɣöö banɛ jɛ nyoth ɛn ɣöö Kuothdan Jɛn tëë kɛ nhök.    ",
        },
        {
            id: 39,
            author: "Bol Thɔɔt Kuɔth",
            title: "39. Liaknɛ Kuoth Nhial Kɛɛl Kɛ Tɛ̈thlɔac",
            category: "Liak Kuoth",
            lyrics: "1. Liakɛ Kuoth Nhial Kɛɛl Kɛ tëth lɔaac, liaknɛ jɛ kɛ ɣöö Buɔ̱mdɛ di̠tɛ. liaknɛ Jɛ ɛ Jɛn Ram mi buum. <br><br> 2. Jɛn tëë kɛ lua̱ŋ kä rɛl gɔɔydɛ rɔ, Kɛ buɔ̱mdɛ cɛ ŋɔaani diaal cak. Liaknɛ Jɛ ɛ jɛn  Ram mi̠ bum. <br><br> 3. Jɛn gɔaa ɛlɔ̱ŋ kä ŋɔaani diaal, ŋɔaani tin tee kɛ piny Bumädɛ. Liaknɛ Jɛ g jɛn Ram mi̠ bum.",
        },
        {
            id: 40,
            author: "Bol Thɔɔt Kuɔth",
            title: "40. Kuothdä Min Gɔaa",
            category: "Liak Kuoth",
            lyrics: "1. Kuothdä min gɔaa, laa ɣä a nyuurɛ kɛ nhökdɛ min di̠i̠t, gua̱th in jiääk ɣä go̠o̠l laa pɛ̈thɛ. Kɛ bär tetdädɛ, thia̱kɛ kɛ ɣä ja̱a̱lä Ti̠i̠pädɛ. Buaydɛ mɛrɛ ɣä la böthɛ ɣä rɛy muɔ̱th. <br><br> Kuoth kɛ Gɔɔydɛ Jɛn /cɛ rɔ gɛr, Nhökdɛ min di̠i̠t jɛn thiɛlɛ mi̠ wany jɛ . Ciɛŋkɛ diaal gɔwkɛ, kɛ kui̠ Gɔɔyädɛ. Nyuurɛ ɣä rɛy Ti̠pädɛ min gɔaa. <br><br> 2. Jäl Ja̱a̱kɛ ni̠ ci̠aŋ ni̠ kɛ kui̠ ga̱ŋ tekä mi̠ /ca luäŋ, puth ti /ca luäŋ kɛ kuën jäkɛ kɛ ciaŋ. Ciɛŋ tin lätɛ thiɛlɛ ram luäŋkɛ kɛ ɣöö Jɛn di̠i̠t Nhökdɛ, kɛ di̠i̠t Gɔɔyädɛ mäni̠ Buɔmdɛ di̠i̠t. <br><br> 3. Gua̱th in cä cuc gua̱th, in cä ŋɔa̱ŋ kɛ ɣa̱c duri̠kä, Jɛn la Bëë kɛ pëth kä käpɛ ɣa̱a̱ckä piny. Gua̱thdɛ të mal, gua̱thdɛ ti̠ lɔa̱ŋ kɛ ɣöö di̠t Gɔɔydɛ, pɛ̈thɛ kɛ tho̠pdɛ kɛ luäk mi̠ thia̱k-thia̱k.",
        },
        {
            id: 41,
            author: "Bol Thɔɔt Kuɔth ",
            title: "41. Kɛ Ɣöö Nhɔk Kuoth Nɛy diaal ",
            category: "Nhök Kuoth",
            lyrics: "1. Kɛ ɣöö nhɔk Kuoth nɛy diaal ɛlɔ̱ŋ; cuɛ Gat in kɛl kärɔa, in nhɔkɛ muɔc. Kɛ ɣöö ram we jɛ ŋäth bɛ te̱ kɛ tëk mi̠ thiɛl pel. <br><br> Kɛ tök mi̠ thiɛl pek, thiɛl pek. Kɛ tëk mi̠ thiɛl, kɛ ɣöö ram we jɛ ŋäth bɛ te̱ kɛ tëk mi̠ thiɛl pek. <br><br> 2. Kɛ ɣöö /caa nɛy tin ŋäth jɛ kuɛth; kä nɛy tin /caa jɛ ŋäth, caa kɛ ku thuŋ kuɛ̈th li̠th. Kɛ ɣöö ram wee jɛ ŋäth bɛ te̱ kɛ tëk mi̠ thiɛl pek. <br><br> 3. Kɛ ɣöö /ken Kuoth Gatdɛ ja̱k kɛ ɣöö;bɛ ɣɔw ben kuɛ̈th li̠th, ɛ ɣöö bɛɛ kään. Kɛ ɣöö ram we jɛ ŋäth bɛ te̱ kɛ tëk mi̠ thiɛl pek.  "
        },
        {
            id: 42,
            author: "A.H 36. O Thou in Whose Presence",
            title: "42. Ɛ ji̠n Kuoth ɛn laa lɔcdä a thiäŋ",
            category: "Nhök Kuoth",
            lyrics: "1. Ɛ ji̠n Kuoth in la lɔcdä a thiäŋ kɛ tɛ̈th lɔaac. La ji̠ a cɔaalä kɛ guäth tin bɛc. Ɛ jin la cuumdä, luääkdä, kɛnɛ määthdä, ɛ ni̠ ji̠n thiɛlɛ mi̠ ŋa̱thä. <br><br> 2. Jɔwdɛ tëë kɛ lua̱ŋ kɛ ɣöö derɛ kɔa̱k lɛp, dee liŋ mäni̠ nɛy tin ci̠ niɛn. Jiɛn La-bɛ-nɔn tin di̠i̠t guɔŋkɛ rɔ̱ nhiamdɛ, kɛ yiëëdɛ jakɛ jiɔm kä gɔaa.<br><br> 3. Rieet teekä tin gɔw ɛ kɛn ɛ bee raar thokdɛ, laa dɛy puɔ̱th baaŋä a kuirɛ. Mäni̠ jur bi̠ kɛn ka̱ndiɛn ŋa̱c kɛ kui̠dɛ, kä bi̠ lo̠ckiɛn tɛth bä nhiamdɛ. <br><br> 4. Kä bi̠ lo̠c gan Kuɔth tɛɛth kɛ ɣöö cɛ kɛ kän, bi̠ jääk ɛ ku puany ɛn kään. baa jɛ luɔ̱th kä baa ka̱m mua̱a̱l ɛ gaatkɛ diaal, mäni̠ cäŋ baa ciöötdɛ kap nhial.",
        },
        {
            id: 43,
            author: "Unknown",
            title: "43.Nhɔakä Ji̠ Ɛlɔ̱ŋ La̱nyä Ji̠ Ti̠ Diaal ",
            category: "Nhök Kuoth",
            lyrics: "1. Nhɔakä ji̠ ɛlɔ̱ŋ, la̱nyä ji̠ ti̠ diaal, kɛ lɔcdä kɛɛliw, kapä tetkä nhial.Kuɛ laa thok indiɛn, min dëë lar nhökdu,Kuoth lɔacdä; Nhökdu rɛlɛ rɔ. <br><br> Mi̠ kua̱ rɔ jëk rieet bɛ-ɛ, ti liakä ji̠ Kuothdä. Mi̠ ci̠ ben kä ɣä Kuoth maalädä, a luth te kɛ ji̠n Kuoth. <br><br> 2. Kɛl in göörä kä ji̠, min te jɔ̱ɔ̱r kä ɣä, ɛ ni̠ ji̠n kärɔa, Kuär ni̠ Kuothdä. Ji̠n mi̠ cä ji̠ jek, bä cieŋ a cä rɔ̱ŋ, kɛ ɣöö Kuothdä cä nhökdu jek <br><br> 3. Puɔ̱nydä ni̠ kɛɛliw, nhɔkɛ ni̠ ji̠ kɛ cäŋ kɛ wäär, laa caarä ni̠ ji̠. Ciaaŋdä kärɔa /ciɛ mi̠ gɔaa kɛ ɣä, tëkdä ɛ jɛn ji̠n thiɛlä mi̠ dɔ̱diɛn.",
        },
        {
            id: 44,
            author: "RH 398 New every morning is the love ",
            title: "44. Runwaŋni̠ Diaal Tee Kɛ Kɛ Nhök",
            category: "Nhök Kuoth",
            lyrics: "1. Runwaŋni̠ diaal tee kɛ kɛ nhök, këran kɛnɛ jiëcdan caa kɛ la̱t. Rɛy nien kɛ wäär ben a gɔaa, caa tëk luɔ̱c kɔn kɛ lua̱ŋ kɛnɛ ca̱r. <br><br> 2. Cäŋni̠ diaal laa kɔa̱a̱c lɔaacdɛ a bëë thi̠n, cuŋni̠ kutdä gua̱a̱th mi̠ palkɔ, jiäk ci̠kɛ wä caa dueerkɔn päl. Ca̱r laatni̠ Kuɔth kɛ ŋa̱th rööl nhial. <br><br> 3. Lät ciaŋ ti̠ thiɛl luɔt ti̠ la̱tkɛ ŋɔak diaal ti̠ thiecnɛ bi̠kɛ ben, gua̱a̱th mi̠ bi̠ kɔn ɛ jay pa̱ny kɔn, duɔ̱ɔ̱p mi̠ no̠o̠ŋ kan geekä Kuoth ciaŋ. <br><br> 4. Rɛy nho̠kädu aɣ kuäär, riali̠kɔ i̠kä kɛ lua̱ŋ mi̠ gɔaa, luäkɔ ɛn walɛ mäni̠ ciaŋ, kɛ ciaaŋ geekädu gua̱a̱th mi̠ palkɔ.  ",
        },
        {
            id: 45,
            author: "Bol Thɔɔt Kuɔth",
            title: "45. Gua̱thdan In Te̱ Nhial",
            category: "Nhök Kuoth",
            lyrics: "1. Gua̱ndan in te̱ nhial; di̠tni jɛn kä ŋɔaak diaal thiɛlɛ mi̠ päärkɛ Jɛ. Gua̱ndan in te̱ nhial; ditni jɛn kä ŋɔaak diaal thiɛlɛ mi̠ päärkɛ Jɛ. <br><br> Di̠tni̠ Jɛn pa̱ny di̠tni̠ Jɛn; thiɛlɛ mi päätkɛ Jɛ, ditni jɛn kä ŋɔaak diaal thiɛlɛ mi̠ päärkɛ Jɛ. <br><br> 2. Gua̱ndan in te̱ nhial; jɛn nhɔkɛ Gaatkɛ diaal Jɛn thiɛlɛ Nhökdɛ päär. Gua̱ndan in te̱ nhial; jɛn nhɔkɛ Gaatkɛ diaal Jɛn thiɛlɛ Nhökdɛ päär. <br><br>3. Gua̱ndan in te̱ nhial; Ɛ Jɛn cak ŋɔaani̠ diaal thiɛlɛ kuoth mi̠ päärkɛ Jɛ. Gua̱ndan in te̱ nhial; Ɛ Jɛn cak ŋɔaani̠ diaal thiɛlɛ kuoth mi̠ päärkɛ Jɛ. <br><br> 4. Gua̱ndan in te̱ nhial; piny ɛ cääk ciökni̠kɛ thiɛlɛ mi̠ päärkɛ Jɛ. Gua̱ndan in te̱ nhial; piny ɛ cääk ciökni̠kɛ thiɛlɛ mi̠ päärkɛ Jɛ.",
        },
        {
            id: 46,
            author: "A.H 73 Holy, Holy, Holy",
            title: "Gɔaa i̠, Gɔaa i̠, Gɔaa i̠,",
            category: "Liak Kuoth",
            lyrics: "1. Gɔaa i̠, gɔaa i̠, gɔaa i̠, Ji̠n Kuoth mi̠ te̱ buɔ̱m, kɛ runwaŋ ba̱a̱kɔ Ji̠ puany kɛ diit ti̠ kietkɔ Ji̠. Gɔaa i̠, gɔaa i̠, gɔaa i̠ Kuoth mi̠ laa kɔ̱c lɔcdɛ. Diɔ̱k In di̠i̠t pothkɔ Ji̠n Kuoth kɛl kärɔa. <br><br> 2. Gɔaa i̠, gɔaa i̠, gɔaa i̠, pal Ji̠ ɛ ji̠ nhial yuɔrkɛ nyin wutädiɛn piny Nhiamdu kä liakɛ Ji̠. Ma-lay-kay-ni̠ guɔ̱lkɛ nyinkiɛn piny kɛ Nhiamdu, Ji̠n mi̠ ci̠ tey, kä ti̠i̠, kä bi̠ laa ti̠i̠. <br><br> 3. Gɔaa i̠, gɔaa i̠, gɔaa i̠, laa yi̠i̠li̠ nyinkɔ, /ci̠ nyin Ji̠ deeri̠ Wuɔ̱tdu de̱e̱ luäŋ kɛ nën ɛ puc. Gɔaani̠ Ji̠n kärɔadu thiɛlɛ nyuaak kɛ dɔ̱diɛn, dhuɔɔli̠ ni̠ buɔ̱m, kɛ nhök, kɛ buay ɛ pak. <br><br> 4. Gɔaa i̠, gɔaa i̠, gɔaa i̠, Ji̠n Kuoth mi̠ te̱ bwɔ̱m, Nyinku diaal baa ciötdu liak nyin nhial kɛ piny kɛ yiër. Gɔaa i̠, gɔaa i̠, gɔaa i̠, Kuoth mi̠ laa Kɔ̱c lɔcdu. Diɔ̱k In Di̠i̠t pothkɔ Ji̠n Kuoth kɛl kärɔa. ",
        },
        {
            id: 47,
            author: "Unknown",
            title: "47. Kɔn Liakɔ Ji̠ Kuoth Kuäärä",
            category: "Liak Kuoth",
            lyrics: "1. Kɔn liakɔ Ji̠, Kuoth Kuäära, Kɛ gɔɔy kɛɛliw, kɛ nhök mi̠ di̠i̠t. Tin laa mooci̠ kɔn Nɛɛku. <br><br> Kɔn liakɔ Ji̠, Kuoth Kuäär mi̠ di̠i̠t. Kɔn liakɔ Ji̠, Gäära. <br><br> 2. Kɔn liakɔ Ji̠, Kuoth Kuäära, Kɛ ca̱k mi̠ ci̠ kɔ cak, Gua̱a̱ra. Kɛ gaŋ mi̠ gaaŋi̠ Gaatku. <br><br> 3. Kɔn liakɔ Ji̠, Kuoth Kuäära, Kɛ liak mi̠ di̠i̠t, mi̠ leny ti̠ diaal. Kɛ mëë ci̠ Gatdu naath tek. <br><br> 4. Kɔn liakɔ Ji̠, Kuoth Kuäära, Kɛ tin laa ka̱pkɔn kɛ Puɔ̱thdu. Kɛ ŋa̱th mi̠ ŋa̱thkɔ cieeŋdu. <br><br>5. Kɔn liakɔ Ji̠, Kuoth Kuäära, Baa La̱tdu laa nyuɔthkɛ kɛ la̱t. Kɛ lieŋ mi̠ ba̱a̱kɔ Ji̠ liŋ. <br><br> 6. Kɔn liakɔ Ji̠, Kuoth Kuäära, Jin Gua̱n Gua̱n, kɛ Gat, kɛ Yiëë In Gɔaa. Ji̠n Kuoth mi̠ kɛl mi̠ palkɛ.",
        },
        {
            id: 48,
            author: "A.H 16 All people that on earth dwell ",
            title: "48. Yɛn Naath Tin Cie̱ŋ Wi̠i̠ muɔ̱ɔ̱n",
            category: "Liak Kuoth",
            lyrics: "1. Yɛn naath tin cie̱ŋ wi̠i̠ muɔ̱ɔ̱n yɛn diaal. kɛte diit Kua̱ran kɛ jɔw mi̠ puɔl. Laa luɔ̱thɛ Jɛ laa puanyɛ Jɛ, biaa Nhiamdɛ kä a lo̠ckun tɛth. <br><br> 2. ŋäc yɛn kuääran ɛ Kuoth ɛ puc, Ɛ jɛn Cääkdan kä ɛ jɛn kärɔa. Lapnɛ Detkɛ laa Yienɛ Kɔn, Kɛ ɣöö cɛ kɔn jakä Detkɛ. <br><br> 3. Biaa thok Rɛ̈ɛ̈kdɛ kä puanyɛ Jɛ, Wiaa rɛy  Rɛ̈ɛ̈kdɛ kɛ lo̠c ti̠ tɛth. Liakɛ Jɛ puanyɛ Jɛ ni̠ ciaŋ, Kɛ ɣöö ɛ la̱t mi̠ dëënɛ la̱t. <br><br> 4. Kɛ ɣöö Kuääran ɛ Gua̱b nhökni̠, Kä kɔa̱c lɔaacdɛ tëë thi̠n ni̠ wal. Ruacde min thuɔ̱k cɛ cuŋ ni̠ wal, kä tëë kɛ ti̠ guɔ̱ɔ̱r kɛ rɔ̱. <br><br> 5. Ji̠n Gua̱n, kɛ Gat, kɛ Ytëë In Di̠i̠t, Kuoth mi̠ palkɛ ɛ piny kɛnɛ nhial. Naath kɛ rɛm Ma-lay-kay-ni̠ diaal, bi̠kɛ Ji̠ puany kɛ wuɔ̱t mäni̠ wal. A-a-amen. ",
        },
        {
            id: 49,
            author: "A.H 50. Abide with me",
            title: "49. Tee Ni̠ Kɛɛl Kɛ Ɣä",
            category: "Kɔ̱a̱c Lɔaac",
            lyrics: "1. Tee ni̠ kɛɛl kɛ ɣä, ci̠ thi̠aŋ ku thuŋ thi̠a̱k, muth wëë kɛ di̠t kuäär teni̠ kɛɛl kɛ ɣä! Mi̠ ci̠ lua̱k tin kɔ̱ŋ thöl, kä ci̠ tɛ̈th lɔac ji̠ɛɛn. Luääk nɛɛni̠ tin thi̠ɛl lua̱ŋ, teni̠ kɛɛl kɛ ɣä. <br><br> 2. Naŋni̠ ɣä raar kɛ pɛ̈th teekä ca̱ŋ mi̠ tɔt; tɛ̈th lɔac ɣɔaa yaawɛ ri̠aw gɔɔydɛ kɛ pɛ̈th; gëër ŋɔaathni̠ kɛnɛ ji̠ak diaal tin nɛ̈ɛ̈nä; Min /ci̠ rɔ met gɛr teni̠ kɛɛl kɛ ɣä <br><br> 3. Ɣän göörä ta̱a̱ kɛɛl kɛ ji̠ thaakni̠ diaal. Kä ɛŋu mi̠ /ci̠a puɔ̱thdu dee gua̱n tër joc? Ɛŋa cet ji̠, bo̠o̠thdä kä gua̱th ci̠ɛŋä? Rɛy pua̱ri̠ kiɛ rɛy ca̱ŋ teni̠ kɛɛl kɛ ɣä. <br><br> 4. Ci̠ Ɣän dual kɛ gua̱n tɛ̈r kɛ ɣöö ta̱a̱ tetkä du; jua̱th /ci̠ kɛn thi̠ɛk kiɛ mer thi̠ɛlɛ kɛ kɛ̈c. Li̠a̱a̱ ka̱cdu a ni̠een? kɔ̱a̱k buɔ̱mdu a nieen? Ɣän ŋuɔtä bä dhil ti̠em mi̠ ti̠i̠ kɛ ɣä!",
        },
        {
            id: 50,
            author: "Unknown",
            title: "50. Luɔ̱thɛ Ciöt Kuɔth Kuäär Mi̠ Di̠i̠t",
            category: "Liak Kuoth",
            lyrics: "1. Luɔ̱thɛ ciöt Kuɔth Kuäär mi̠ di̠i̠t, Puanyɛ Kuoth kɛ diit ni̠ ciaŋ. Kɔ̱a̱c lɔacdɛ tëë thi̠n ni̠ ciaŋ, Tëë kutdun kä /cɛ yɛ päl. <br><br> 2. Cɛ buay cak kɛ nhial kɛ piny, /Cɛ yɛ bi̠ naŋ gua̱a̱th mɛɛtä. Kɔ̱a̱c lɔacdɛ tëë thi̠n ni̠ ciaŋ, Tëë kutdun kä /cɛ yɛ päl. <br><br>3. La̱rɛ tëth lɔaac Kuoth mi̠ di̠i̠t, Jɛn Gat Kuoth bëë piny cieŋ nhial. Kɔ̱a̱c lɔacdɛ tëë thi̠n ni̠ ciaŋ, Tëë kutdun kä /cɛ yɛ päl. <br><br>4. Jakni̠ nhiaal kä dɛm rɛy ɣɔaa, Moocɛ kɔn kɛ dɛy wal diaal. Kɔ̱a̱c lɔacdɛ tëë thi̠n ni̠ ciaŋ, Tëë kutdun kä /cɛ yɛ päl. <br><br>5. Piɛthɛ bɛl kä ɛ ciɛkdiɛn gɔaa, Kɛ kui̠ mieth kɛ ɣöö banɛ cie̱ŋ. Kɔ̱a̱c lɔacdɛ tëë thi̠n ni̠ ciaŋ, Tëë kutdun kä /cɛ yɛ päl. <br><br> 6. Palnɛ Buɔ̱mdɛ kɛ kui̠ walkɔn, Thiäŋ duelu kɛ kuay wal diaal. Kɔ̱a̱c lɔacdɛ tëë thi̠n ni̠ ciaŋ, Tëë kutdun kä /cɛ yɛ päl. <br><br> 7. Ta̱a̱ rɛydun kä ta̱a̱yɛ Rɛydä, Tɛ ɣöö biaa dɛy ti̠ ŋuan kuir. Gaa̱n kakä bi̠ lɔcdɛ tɛɛth, bɛ yɛ naŋ gua̱a̱th Tɔ̱ɔ̱wädɛ. ",
        },
        {
            id: 51,
            author: "",
            title:"",
            category: "",
            lyrics:"",
        }

    ];

    let currentPage = 1;
    const hymnsPerPage = 3;
    let filteredHymns = [...hymns];
    let currentHymnIndex = 0;

    // Populate category filter dynamically
    function populateCategoryFilter() {
        // Get unique categories from hymns
        const categories = [...new Set(hymns.map(hymn => hymn.category))];

        // Clear existing options
        categoryFilter.innerHTML = "";

        // Add "All Categories" option first
        const allOption = document.createElement("option");
        allOption.value = "All Categories";
        allOption.textContent = "All Categories";
        categoryFilter.appendChild(allOption);

        // Add each unique category
        categories.forEach(category => {
            const option = document.createElement("option");
            option.value = category;
            option.textContent = category;
            categoryFilter.appendChild(option);
        });
    }

    // Call this once on page load
    populateCategoryFilter();


    // Page navigation
    function showPage(pageId) {
        pages.forEach(page => page.classList.remove("active"));
        document.getElementById(pageId).classList.add("active");
    }

    navLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            showPage(`${link.dataset.page}-page`);
        });
    });

    exploreBtn.addEventListener("click", () => {
        showPage("hymns-page");
        renderHymns();
    });

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active")
        navMenu.classList.toggle("active");
    });

    // Close menu after clicking a link
    navLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            showPage(`${link.dataset.page}-page`);
            navMenu.classList.remove("active");
        });
    });


    // Search functionality
    function performSearch(query) {
        filteredHymns = hymns.filter(hymn =>
            hymn.title.toLowerCase().includes(query.toLowerCase()) ||
            hymn.lyrics.toLowerCase().includes(query.toLowerCase())
        );
        currentPage = 1;
        renderHymns();
    }

    searchBtn.addEventListener("click", () => performSearch(globalSearch.value));
    globalSearch.addEventListener("keypress", e => {
        if (e.key === "Enter") performSearch(globalSearch.value);
    });

    hymnSearch.addEventListener("input", () => performSearch(hymnSearch.value));

    categoryFilter.addEventListener("change", () => {
        const category = categoryFilter.value;
        filteredHymns = category
            ? hymns.filter(hymn => hymn.category === category)
            : [...hymns];
        currentPage = 1;
        renderHymns();
    });

    // Hymn listing with pagination
    function renderHymns() {
        hymnsList.innerHTML = "";
        const start = (currentPage - 1) * hymnsPerPage;
        const end = start + hymnsPerPage;
        const pageHymns = filteredHymns.slice(start, end);

        pageHymns.forEach(hymn => {
            const card = document.createElement("div");
            card.className = "hymn-card";
            card.innerHTML = `
                <h4>${hymn.title}</h4>
                <p>${hymn.lyrics.substring(0, 50)}...</p>
                <a href="#" data-hymn-id="${hymn.id}" class="view-hymn">Keet Dit</a>
            `;
            hymnsList.appendChild(card);
        });

        renderPagination();
        attachHymnLinks();
    }

    function renderPagination() {
        pagination.innerHTML = "";
        const totalPages = Math.ceil(filteredHymns.length / hymnsPerPage);

        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement("button");
            btn.textContent = i;
            btn.className = i === currentPage ? "active" : "";
            btn.addEventListener("click", () => {
                currentPage = i;
                renderHymns();
            });
            pagination.appendChild(btn);
        }
    }

    // Hymn detail view
    function attachHymnLinks() {
        document.querySelectorAll(".view-hymn").forEach(link => {
            link.addEventListener("click", e => {
                e.preventDefault();
                const hymnId = parseInt(link.dataset.hymnId);
                currentHymnIndex = hymns.findIndex(h => h.id === hymnId);
                showHymnDetail();
            });
        });
    }

    function showHymnDetail() {
        const hymn = hymns[currentHymnIndex];
        hymnDetail.innerHTML = `
            <h2>${hymn.title}</h2>
            <p>${hymn.lyrics}</p>
        `;
        showPage("hymn-detail-page");
    }

    backToListBtn.addEventListener("click", () => showPage("hymns-page"));

    prevHymnBtn.addEventListener("click", () => {
        if (currentHymnIndex > 0) {
            currentHymnIndex--;
            showHymnDetail();
        }
    });

    nextHymnBtn.addEventListener("click", () => {
        if (currentHymnIndex < hymns.length - 1) {
            currentHymnIndex++;
            showHymnDetail();
        }
    });

    // Settings
    themeSelect.addEventListener("change", () => {
        document.body.className = themeSelect.value;
    });

    fontSizeRange.addEventListener("input", () => {
        const size = fontSizeRange.value + "px";
        document.body.style.fontSize = size;
        fontSizeValue.textContent = size;
    });

    resetSettingsBtn.addEventListener("click", () => {
        themeSelect.value = "light";
        document.body.className = "light";
        fontSizeRange.value = 16;
        document.body.style.fontSize = "16px";
        fontSizeValue.textContent = "16px";
    });

    // Initialize
    renderHymns();
});

// Function to get a random hymn based on the day
function getDailyHymn() {
    const today = new Date();
    const daySeed = today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate();
    const randomIndex = Math.abs(hashCode(daySeed)) % hymns.length;
    return hymns[randomIndex];
}

// Simple hash function to make the hymn consistent per day
function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

// Render hymn of the day
function renderHymn() {
    const hymn = getDailyHymn();
    const hymnCard = document.getElementById("hymn-card");
    hymnCard.innerHTML = `
      <h4>${hymn.title}</h4>
      <p>${hymn.text}</p>
      <a href="#" data-hymn-id="${hymn.id}" class="view-hymn">View Hymn</a>
    `;
}

renderHymn()
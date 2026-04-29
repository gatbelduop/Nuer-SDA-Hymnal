// script.js

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
            author: "GB 685 I am so glad that our Father  ",
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
            lyrics: "1. Tëë kɛ ram mi̠ te̱ kui̠c puɔ̱ɔ̱rä, ɛ Kuoth in /caa luäŋkɛ nën waŋ. Cɛ pua̱a̱r moc biɛl nhial ti̠ te̱e̱ dääk, kä cɛ wi̠c muɔ̱n cuŋkɛ Buɔ̱mdɛ. <br><br> Kuoth Jɛn tëë thi̠n, kä jɛn tëkɛ, tëkdan kɛɛliw, jɛn bi̠i̠ kä jɛ. Rɛy tuɔ̱ɔ̱r ci̠ Kuoth raan mockɛ tëk, Kuothdan cɔalɛ Mi̠ Te̱ Wa̱nɔ. <br><br>2. Kɛ run ti̠ ŋuan tëë ci̠ we bä, Ɛ Kuoth ɛn mëë liŋ göök Jɔwdɛ, Ɛ Jɛn in dëë kɔn ɛ ŋa̱c, In Ruackɛ Rieetkɛ ti̠n tëë Yiëë. <br><br> 3. Kuothdan ëë li̠w Gatdɛ wi̠i̠ jiath Cɛ nhɔk i̠ bi̠ Gatdɛ jiɛn. Kɛ ɣöö bɛ duer ran wockɛ lia̱a̱, Kä bɛ ciëŋkɛ raan mää cäŋ kɛl.",
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
            category: "Kɔac Lɔac",
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
            title: "46. Gɔaa i̠, Gɔaa i̠, Gɔaa i̠,",
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
            category: "Kɔac Lɔac",
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
            author: "A.H 162. Wondrous Love ",
            title: "51. Kua Nhök Mi̠ Gɔaa ɛ Di̠ ",
            category: "Nhök Kuoth",
            lyrics: "1. Kuaa nhök mi̠ gɔaa ɛ di̠, ööɣ tieydä, ööɣ tieydä? Kuaa nhök mi̠ gɔaa ɛ di̠, ööɣ tieydä? Kuaa nhök mi̠ gɔaa ɛ di̠ ɛn min jak Kuär buɔyä, kä kapɛ lam dualä ti̠yädä; ti̠yädä, kä kapɛ lam dualä ti̠yädä. <br><br>2. Kä Kuoth kɛnɛ Ruathdɛ̈ɛ̈l ɣän bä kiet, ɣän bä kiet; Kä Kuoth kɛnɛ  Ruathdɛ̈ɛ̈l ɣän bä kiet. Kä Kuoth kɛnɛ Ruathdɛ̈ɛ̈l ku gɔɔydä lɛ ni̠n di̠, gua̱a̱th in ki̠t bathdɔɔri̠ ɣän bä kiet, ɣän bä kiet, gua̱a̱th in ki̠t bathdɔɔri̠ ɣän bä kiet. <br><br>3. Kɛ gua̱a̱th in cä lɔar li̠th, ɣän bä kiet, ɣän bä kiet; kɛ gua̱a̱th in cä lɔar li̠th, ɣän bä kiet. Kɛ gua̱a̱th in cä lɔar li̠th, ɣän bä kiet kɛ tɛ̈thlɔaac, rɛy teekä mi̠ do̠raar ɣän bä kiet, ɣän bä kiet! Rɛy teekä mi̠ do̠raar, ɣän ɣä kiet.  ",
        },
        {
            id: 52,
            author: "A.H 567. Have Thy Own Way Lod ",
            title: "52. Dupku lö Kuoth Nhial Gɔwkɛ ",
            category: "Nhök Kuoth",
            lyrics: "Dupku löö Kuoth nhial gɔwkɛ kɛ ɣä, Ɛ jin tääth dha̱a̱ri kä ɛ ɣän mun. Tääth ɣä kä lätni̠ ɣä kɛ nhökdu Kuoth, guath in liɛpä ji bä kuer kɛ dɛy. <br><br> 2. Dupku löö Kuoth nhial gɔwkɛ kɛ ɣä, go̠o̠rä kɛ bi̠ ɣä jek kuäär teekädä. läk ɣä ɛn täämɛ cetni kɛ rur, cä ben nhiamdu kɛ ɣöö bä ji̠ ben pal. <br><br> 3. Dupku löö Kuoth nhial gɔwkɛ kɛ ɣä, ji̠n ram mëë ca buɔlɛ yiɛth luäkä. ji̠n ram in bum kä nɛy diaal ɛ ji̠n. thiapä kɛ tekä Kuoth känädä. <br><br> 4. Dupku löö Kuoth nhial gɔwkɛ kɛ ɣä, rɔm tekä ɛ bum Kuoth cuɛ ɣä päl ruëëc. thiaŋɛ kɛ yieedu amani̠ mi̠, bä guicni̠ Ji̠thɛth rɛy tekädä.",
        },
        {
            id: 53,
            author: "A.H.10. Come Christians Join to Sing",
            title: "53. Biaa Krith-cini Kietnɛ",
            category: "Nhök Kuoth",
            lyrics: "Biaa  Krith-cini̠ kirtnɛ, alɛluya Amen. puanynɛ kri̠tho kuäärän, Alɛluya,Amen. lo̠c diaal kɛnɛ jiööth diaal, ɛ kɛ tɛth nhiam kɔamdɛ. kä jɛn nhɔkɛ ni̠ puɔny, alɛluya Amen. <br><br> 2.Biaa  Krith-cini̠ kirtnɛ, alɛluya Amen. Ɛ puɔnydun thiääŋ ro̠l nhial, aleluya, Amen. Ɛ gääŋdan kä ɛ määthdan; jɛn bɛ kɔn lätkä gɔy, nho̠kdɛ jɛn thiɛlɛ pek, alɛluya, Amen. <br><br> 3. Puanynɛ Kri̠tho e nyɔk, aleluya Amen, tëk /cɛ puɔny dee me̱t pën, alɛluya, Amen. Thoo-yiëër tɛthkä-lɔaacdan, banɛ gɔɔydɛ dhil luɔ̱th, banɛ kiet mää cäŋkɛl, alɛluya Amen. ",
        },
        {
            id: 54,
            author: "A.H 88. I sing the mighty power of God",
            title: "54. Ɣän Bä Lua̱ŋ Kuɔth in Di̠i̠t Liak",
            category: "Nhök Kuoth",
            lyrics: "1. Ɣän bä lua̱ŋ Kuɔth in di̠i̠t dhil liak, min jak pääm diaal kä cuŋ, kä jakɛ pi̠i̠ kiɛri̠ kä lo̠ny, mäni̠ pua̱a̱r in cɛ cuŋ. ɣän bä liakni̠ pɛ̈l in jak cieŋ kä ruaacɛ cäŋ kɛɛliw; pay bä bɛ lɛ̈p ni̠ kɛ rietdɛ, luɔ̱th jɛ ɛ kuɛli̠ diaal. <br><br> 2. Ɣän bä gɔɔy Kuɔth in di̠i̠t dhil liak, min jak ɣɔw kä thiäŋ kɛ mieth; cɛ nyin cäkä diaal täth kɛ riet, kä cuɛ cu we̱e̱ i̠ gɔwkɛ. kuäär ku gɔɔydu lɛ ni̠ndi̠?, bɛ gua̱a̱th in nɛ̈ɛ̈nä kɛ thi̠n! mi̠ thɛ̈mä ɣɔw in ja̱lä thi̠n kiɛ lɛ̈nä nɛni̠ pua̱a̱r. <br><br> 3. Thiɛlɛ juac ɛ puc kiɛ gaak wi̠i̠muɔ̱ɔ̱n, mi̠ /ci̠ gɔɔydu dhil nyoth,mi̠ jäl pua̱r nhial kiɛ put jiɔam piɛny, ɛ ruacdu pa̱nyni̠ nhial.nyin cäkä diaal tin tëk kɛ ji̠, kɛ kuaku tiiti kɛ, thiɛlɛ gua̱a̱th ɛmi̠ ti̠i̠ thi̠n. ",
        },
        {
            id: 55,
            author: "A.H. 22. God is Our Song",
            title: "55. Kuoth ɛ Jɛn Ditdan",
            category: "Nhök kuoth",
            lyrics: "1.  Kuoth ɛ Jɛn Ditdan, a nɛy diaal puɔnyɛ jëkɛ buɔ̱m kɛnɛ lua̱ŋ. rami̠ puɔny Kuoth nhial, nɛy diaal tin palɛ jek kɛn tɛ̈th lɔaac mi̠ gɔaa, kämni̠ kɔ pɛ̈l ëë ca̱a̱kɔ bath ni̠ wal, kämni̠ kɔ pɛ̈l ëë ca̱a̱kɔ bath ni̠ wal. <br><br> 2. Kuoth ɛ jɛn ditdan, ci̠ Ji̠thɛth kɔn kän; mi̠ pal kɔnɛ ka̱mnɛ jɛ nyinkɔn diaal. kɛ̈tnɛ diit ti̠ pay cak kä matnɛ rɔ, bi̠ Ji̠thɛth kɔn böth nhial, bi̠ Ji̠thɛth kɔn böth nhial. <br><br> 3. Nɛmɛ ɛ jɛn la ditdan, thiɛlɛ ca̱r mi̠ dɔ̱ŋ; nɛy diaal tin puɔny Kuoth /ci̠ lɔc ran kɛ nhɔk; mi̠ ti̠i̠ kɛ nhök mi̠ bi̠ gɔɔy puɔnyädɛ ŋa̱c. Kuoth go̠rɛ ni̠ rami̠ thiɛl mi̠ te̱e̱ kɛ jɛ, Kuoth go̠o̠rɛ ni̠ rami̠ thiɛl mi̠ te̱e̱ kɛ jɛ. <br><br> 4. Kuoth ɛ jɛn bia̱a̱ biɛtdan ɔ, mi̠ thiɛlɛ dit; gua̱a̱th in ci̠ jiath lɔaac thia̱a̱ŋ rɛy löcni̠kɔn. mi̠ ti̠i̠ kɛ ŋa̱th mi̠ luthi̠ jɛ bitkä. Amäni̠ mi̠ ci̠ tɛ̈th lɔaac ben, amäni̠ mi̠ ci̠ tɛ̈th lɔaac puɔnyä ben. ",
        },
        {
            id: 56,
            author: "A.H 167 Alellujah! Sing to Jesus",
            title: "56. A Liak Te̱e̱ Ji̠thɛth in Ruec Ro̠o̠l Nhial",
            category: "Nhök Kuoth",
            lyrics: "1.A Liak Te̱e̱ Ji̠thɛth in Ruec Ro̠o̠l Nhial wi̠i̠ kɔam kuärädɛ, a liak te̱kɛ jɛ cɛ tie̱m ko̠o̠r kä  Käl-bäri̠. liɛŋä jiööth din Dha-yɔn cetkɛ ma̱a̱r nhial kɛnɛ nyɔc mi̠ bum, ji̠thɛth cɛ kɔn kän riɛmdɛ ji̠ wec muɔ̱ɔ̱n diaal cɛ kɛ kän. <br><br> 2. A liak te̱e̱ kɛ jɛ kɛ ɣöö /kenɛ kɔn ba̱ny piny cet rɛ̈tni̠. a liak te̱kɛ kɛ jɛ jɛn thia̱kɛ kɔn thiɛlɛ diw kiɛ thiecni̠. cäŋ ni̠ mëë ci̠ pua̱a̱r ɛ naŋ ŋotdɛ kɛ kɔn mäni̠ täämɛ, ka̱pnɛ riet ëë cɛ lar  i̠-i̠ ta̱a̱ kɛɛl kɛ yɛ amäni̠ guut ɣɔaa. <br><br> 3. A liak te̱e̱ kɛ jɛ juray jaakni̠ kä ɛ jɛn mieth wec muɔ̱ɔ̱n. a liak te̱kɛ jɛ kɛ ɣöö ɛ jɛn ram in riŋ ji̠ dueri̠ kä jɛ. lueel ji̠ dueeri̠, määth ji̠ dueeri̠, kään ɣɔaa ɛ jɛn la̱ŋ kɛ kui̠dä, gua̱a̱th in ki̠t ja̱a̱k nhial tin thiɛl duer thi̠n wi̠i̠ yiëër in lo̠ny kɛ tëk. ",
        },
        {
            id: 57,
            author: "De Muhaba Lehazim",
            title: "57. Nɛmɛ ɛ Nhök mi̠ Gääy Naath ",
            category: "Nhök Kuoth",
            lyrics: "1. Nɛmɛ ɛ Nhök mi̠ Gääy Naath Kuoth nhial jɛn nhɔkɛ kɔn diaal.  Nɛmɛ ɛ Nhök mi̠ Gääy Naath Kuoth nhial jɛn nhɔkɛ kɔn. <br><br> Ɛn Yecu; Jɛn cɛ gɔɔydɛ ba̱ny nhial, diɛr ni̠ jɛn kɛ kui̠dan.Ɛn Yecu; Jɛn cɛ gɔɔydɛ ba̱ny nhial, diɛr ni̠ jɛn kɛ kui̠dan. <br><br> 2. Nɛmɛ ɛ Nhök mi̠ Gääy Naath Kuoth nhial jɛn nhɔkɛ kɔn diaal. kɛ ɣöö jɛn bä cɛ kɔn luɛl kɛ riɛm Gatdɛ ni̠ Yecu. <br><br> 3. Ɛn Yecu tiɛm nɛ lia̱a̱dɛ mëë li̠wɛ kä Käl-bäri̠. kɛ ɣöö jɛn bä cɛ kɔn nyuɔ̱th duɔ̱ɔ̱p rööl nhial ni̠ kɔn diaal. <br><br> 4. Kuoth nhial jɛn nhɔkɛ kɔn diaal cɛ riɛmdɛ thöp kä Käl-bäri̠. gaat maari̠ kuanɛ car ɛn lia̱a̱ ëë li̠w kɛ Yecu.   ",
        },
        {
            id: 58,
            author: "Tɛthlɔac Pal Panɔam",
            title: "58. Luɔ̱thɛ Kuoth Kä Puanyɛ Jɛ  ",
            category: "Nhök Kuoth",
            lyrics: "1. Luɔ̱thɛ Kuoth Kä Puanyɛ Jɛ ci̠ cäŋ luɔ̱k bën öɣ ji̠ɛ̈cɛ rɔ̱ la̱tɛ kuär i̠kä bia palnɛ kään, palnɛ jɛ ɛn ram in ci̠ nhial kɛn piny cak, öɣ jiacɛ rɔ̱ la̱tɛ kuär i̠ kä bɛ lo̠ckun lak. <br><br> Yɛn nɛɛkä biaa; kɛ yɛn nɛɛkä löö biaa kɛ, pa̱lɛ lätkɛ /cuarɛ kɛ guur biaa raar kä jɛ. <br><br> 2. Ri̠etdɛ rɔ̱ kä ji̠äkun ri̠etdɛ lo̠ckun Kuoth, oɣ ci̠ ci̠aŋ kuäärä Kuoth rɔ tie̱e̱c biaa baa yɛ poth. baa yɛ lak kɛ ci̠ööt Kuoth Ji̠thɛth yi̠ëë in gɔaa, oɣ baa yɛ lɛy baa ci̠öötkun gɔ̱r pa̱lɛ nyin ɣɔaa. <br><br> 3. Kɔn pa̱lnɛ kɛ kɛn nyin ci̠ɛŋ ji̠äk ni̠ ɣɔaa ɛmɛ, oɣ ri̠etnɛ ro̠ thi̠n kɛn nyin ciɛŋ ji̠äkni̠ ɣɔaa ɛmɛ. Yecu kuär mi̠ wëë wä bën bɛ kɔn ben naŋ, oɣ wëë wä bën bɛ kɔn ben naŋ ni̠ ci̠eŋ rööl nhial.   ",
        },
        {
            id: 59,
            author: "Baraka Kwesti ta Yesu Mesia ",
            title: "59. Puɔ̱th Kuɔth Mi̠ Gɔaa",
            category: "Nhök Kuoth",
            lyrics: "1.  Puɔ̱th Kuɔth Mi̠ Gɔaa puɔ̱th Yëcu kri̠tho, rɛy kri̠tho banɛ nhök Kuoth jek. <br><br> Caa pua̱t jɔ ji̠ath, Ɛthuɔ̱k! Ci̠ puɔ̱nydɛ cuuc, Yecu! Ci̠ puɔ̱nydɛ cuuc. Kɛ ɣöö bä ro̠o̠l nhial nɛn. <br><br> 2. Car cuɔ̱c ëë ci̠ cuuc kɛ Yëcu kuray, puɔ̱ny Yëcu kuray caa thac-kuiyni̠ la̱th wi̠i̠dɛ. <br><br> 3. Car cuɔ̱c ëë ci̠ cuuc kɛ Yëcu kuray, caa Yëcu pua̱t jɔ-ji̠ath mi̠ ri̠ew. <br><br> 4. Ram mi̠ la kueel jɛn ro̠tdɛ  jɔ-ɔ jiath, caa pua̱t jɔɔ jiath kɛ ɣöö bä ro̠l nhial nɛn. <br><br> 5. Car li̠a ëë ci̠ li̠w kɛ Yëcu kuray, caa pua̱nydɛ kony ɛn wi̠i̠muɔ̱n ɛmɛ. <br><br> 6. A-le-lu-ya la̱r jɛ Yëcu kuray, bi̠ kɔn Yecu ki̠et diit kɛ tɛ̈thlɔaac. ",
        },
        {
            id: 60,
            author: "Bol Thɔɔt Kuɔth  ",
            title: "60.  Kɛ Gɔɔy Puɔnyädu Löö Cääk",
            category: "Gɔy Kuoth",
            lyrics: "1. Kɛ Gɔɔy Puɔnyädu Löö Cääk rɛlɛ rɔ, gɔɔy puɔnyädu min do̠raar. jɔcɛ kä ŋɔak diaal tin gɔw tin ci̠ cak, jɔcɛ kä kɛn tin ci̠ cak. <br><br> Kɛ Gɔɔy Puɔnyädu Löö Cääk gɔɔy puɔnyadu, ɛ jɛn in jak ŋɔak diaal kä gɔw. kɛ gɔɔy puɔnyädu löö cääk, ɛ jɛn ëë nyuth kɔ tëk. <br><br> 2. Kɛ Gɔɔy Puɔnyädu Löö Cääk ɛ jɛn in jak ŋɔak diaal kä gɔw. kä ji̠n la ti̠ puɔny mi̠ di̠i̠t, kä kɛn ŋɔani̠ diaal tin ci̠ cak. <br><br> 3. Kɛ Gɔɔy Puɔnyädu Löö Cääk. ɛ jɛn ëë nyuth kɔ tëk, kä ji̠n laa moci̠ kɔ puɔ̱th rɛy ni̠ni̠ kɔ tin yop ji̠n. <br><br> 4. Kɛ Gɔɔy Puɔnyädu Löö Cääk. curi̠ kɔ nyuɔ̱th nhökdu min thuɔ̱k, min curi̠ nyoth kɛ li̠a̱a̱ gatdu, min luɛl kɔ kä duer.",
        },
        {
            id: 61,
            author: "Ceŋ Duɔl Jäny  ",
            title: "61. Aɣ Kuoth ɛ Ji̠n Kuothdä ",
            category: "Gɔy Kuoth",
            lyrics: "1. A̱ɣ Kuoth ɛ Ji̠n Kuothdä ɣän göörä ni̠ ji̠, kä ti̠e̱ydä go̠o̠rɛ ni̠ ji̠ <br><br> Puɔ̱nydä go̠o̠rɛ ni̠ ji̠, Tieydä go̠o̠rɛ ni̠ ji̠ (x2) Ɛlɔ̱ŋ cetni̠ kɛ mun mi̠ kööt, Mi̠ ci̠ ba̱k mi̠ go̠o̠r pi̠w. <br><br>2. Kɛ ɣöö Nhökdu gɔaani̠ jɛn kɛ tëk ɣän bä ji li̠ak, nhökdu kɔa̱c-lɔacdu bi̠ ɣä kän. <br><br> 3. Päl gaak kä päl ŋɛ̈ɛ̈ny a lɔcdu /ci̠ ji̠äk, ji̠äk lɔac bɛ naŋ ni̠ ji̠ rɛy rikä. <br><br> 4. ŋäthni̠ Kuoth Nhial lätni̠ ni̠ gɔɔy bi̠ te̱ kɛ mal; ŋäthni̠ Kuoth Nhial bi̠ tëëkdu jääny.",
        },
        {
            id: 62,
            author: "A.H 250 Oh for a thousand tangues to sing ",
            title: "62.  Aɣ Bi̠ Le̱e̱p ti̠ Bath-dɔɔri̠ ku Kiet",
            category: "Gɔy Kuoth",
            lyrics: "1. Aɣ bi̠ le̱e̱p ti̠ bath-dɔɔri̠ ku kiet, Liakɛ ni̠ Ji̠n Käändä. Kɛ puɔny Kuäärä kä Jɛn Kuothdä, Kɛ tɛ̈th lɔaac Liakädɛ. <br><br>2. Kuäär puthkädä, kä Jɛn Kuothdä, Luäk ɣä, jakni̠ ɣä ruac.  Baa Ruacdu da̱k wi̠i̠ muɔ̱ɔ̱n kɛɛliw, Kɛ luth Cio̠tkädu. <br><br> 3. Ji̠thɛth ɛ ciöt mi̠ woc dualan, Jɛn cɛ jiath lɔaacdan ka̱p cuɔ̱ŋ.  Te̱ Bulɛ rɛy jieth ji̠ dueeri̠ Tin tëk, kɛ pual, kɛ mal. <br><br>4. Jɛn cɛ buɔ̱m dueeri̠kä ku to̠l, Jɛn cɛ ji̠ yie̱e̱nä lony. Riɛmdɛ derɛ nɛy ti̠ jiäk jakä gɔw, Riɛmdɛ jɛn cɛ ɣä lak. <br><br>5. Jɛn ruacɛ kä liɛŋä Jɔwdɛ Tëk mi̠ pay tuɔɔk cɛ lia̱a̱ woc. Bi̠ lo̠c ti̠ pär ti̠ jiɛth cu  tɛɛth, Bi̠ nɛy ti̠ can cu ŋa̱th. <br><br>6. Liɛŋɛ jɛ, yɛn mieŋ, puanyɛ Jɛ yɛn mieŋ, cɛ lëëpkun tin jiääk lony. Yɛn cio̠o̠r nënɛ ci̠ Kuäärun ben, Yɛn dua̱nyni̠, a löckun tɛth. ",
        },
        {
            id: 63,
            author: "Unknow",
            title: "63. Ji̠n Bër kä Nɛy Cääk ɣɔaa",
            category: "Gɔy Kuoth",
            lyrics: "1. Ji̠n bër kä nɛy Cääk ɣɔaa Gua̱a̱ra bër ri̠t lɔcda. Pek Tuɔ̱ŋni̠ku da̱ŋ ŋuaan käm ni̠ kɛ Buɔ̱mdu, palkɔ Ji̠ kɛ dueerkɔ, cäŋ kɛnɛ wäär kɛn diaal. <br><br>Kuoth niɛ Ji̠n kärɔadu, ɣɔw ɛmɛ ɛ Duŋdu, ŋa̱ckɛ Ji̠ ni̠ wi̠i̠ muɔ̱ɔ̱n Kä mäni̠ ciëŋ nhial. <br><br>2. Ji̠thɛth, woc gua̱n tɛ̈ra ba̱a̱kɔ we Nhiamdu, gua̱thdu min ti̠ thi̠n, Kuoth, thiɛlɛ mi̠ ba̱a̱kɔ guɔ̱ɔ̱r, jak ni̠ ɣä wa̱a̱ Nhiamdu rɛy ciëŋ Kuäärä nhial. <br><br>3. Kɛ Buɔ̱mdu woc jiääk ɣɔaa Ji̠n bër kä kɔ, thiɛlɛ ɣä lua̱ŋ kɛ wi̠c muɔ̱ɔ̱n ka̱m ni̠ ɣä Lua̱ŋdu, bɛ te̱e̱ ɣä ɛn gua̱a̱th ɛmɛ tɛ̈ɛ̈rä ko̠r Cɛy-ta̱n. <br><br>4. Ji̠thɛth, ɛ Jɛn Kuäär ciëŋ nhial tëë rɛy wutädɛ, pɛl dueeri̠ nhökä Kua̱r dap kɛ Jɛ kɛ Yiëë, /ciɛ ruacdä ɛ Ruacdu mi̠ rɛl gɔɔydɛ rɔ. <br><br>5. Ji̠n bërkɛ rɛy lɔaacdä, liŋ la̱ŋdä kuäärä, thiëcä Ji̠ rɛm kööra thiɛlɛ mi̠ ba̱a̱kɔ guɔ̱ɔ̱r, cäŋ thiäŋ ɣɔw kɛ ɣɔ̱ɔ̱ni̠, Ji̠thɛth ɛ jɛn Bo̠o̠thdä. <br><br> 6. Lak duɛɛrkä kɛ Riɛmdu, Gua̱n kɛ Gat kɛ Yiëë, kueŋni̠ kɛ wi̠i̠ jiaath ŋa̱p bi̠ lɔcdä cu tɛɛth, mi̠ wi̠i̠ ben rɛy Ɣɔaadu tëk mi̠ /ci̠ bi̠ thuuk. <br><br> 7. Kuoth gaŋ nɛy kɛ Buɔ̱mdu rɛy ciɛŋni̠kɔ diaal, Jithɛth ɛ Ji̠n ko̠t kööra thiɛlɛ mi̠ ba̱a̱kɔ guɔ̱ɔ̱r, bër mɛrkɔ kɛ Buaydu, Kuäär bumä mi̠ di̠i̠t. <br><br> 8. Bër guic kɔ kɔn Gaatku tin liɛŋkɛ Ruacdu, mi̠ ci̠ nhial kɛnɛ piny cak ɛ niɛ Ji̠n kärɔa, gɔw lätku Gua̱n Yecu, thiɛlɛ mi̠ ci̠ jiääk. ",
        },
        {
            id: 64,
            author: " Jiath Ko̠r Jul",
            title: "64. Kuoth Mi̠ Tëk Di̠t Lua̱ŋdu",
            category: "Gɔy Kuoth",
            lyrics: "1. Kuoth mi̠ tëk di̠t lua̱ŋdu laa ti̠ thi̠n rɛy nho̠kädä, cäŋ bathkɔ laa go̠o̠ri̠kɔ, mi̠ tëthkɔ laa jiɛci̠ kɔ. Cäŋ nyua̱nkɔ laa bumi̠kɔ, Ji̠n Kuär woc nɛy rɛy ji̠ääkä, woc ciaaŋ nyuɔni̠ rɛy Nɛɛni̠ku ri̠t ci̠aaŋda. <br><br> Tëkda ɛ duŋ Kuoth, kä lätkɔ kɛ nyin Kuoth nyinkɔ diaal kɛ nyin Kuoth, mi̠ käm naath raar rɛy muɔ̱th ɣɔaa, rɛy nyuɔni̠, rɛy rikni̠, rɛy di̠tdä lɔac, rɛy muɔ̱th ɣɔaa dup Cɛy-tän. Ji̠n Kuära bo̠th nɛɛku lepni̠ nɛy thi̠i̠k cuɔ̱c kɔ ɣɔaa, ca nɛy yian. Gua̱n ji̠äk ni̠ /ciɛ cääkda, cucɛ nɛɛku tin liɛpkɛ bendu ca nɛy yian, Kuär lonykɔ rɛy yie̱enä. <br><br> 2. Thiɛlɛ ram ŋäc cäŋ benä Yëcu, thiɛlɛ ram ŋäc thaakdɛ, ŋäcɛ Gua̱n kärɔa mää Ja̱a̱k nhial kui̠c kɛnɛ. Kɔa̱c-lɔacdu bo̠th Nɛɛku, Ji̠n Kuär bo̠th nɛy rɛy ŋäcä, woc ci̠aŋ nyuäni̠ rey Nɛɛni̠ku ri̠t ciaaŋda. <br><br> 3. /Ciɛ lua̱ŋda löö kuär mi̠ thiëckɔ kɔac-lɔacdu, ŋa̱ckɔ jɛ biɛ la̱t mi̠ thiëkɔ kuär Kɔac-lɔacdu. Woc nhökda kɛ nyin ɣɔaa, Ji̠n Kuär bo̠th nɛy rɛy Duɔ̱pdu, woc tiɛl lo̠cni̠ rɛy Nɛɛni̠ku Kuär liŋkɔ. ",
        },
        {
            id: 65,
            author: "A.H 506 A mighty fortress is our God ",
            title: "65. Gaŋkɛ kɔn ɛ Gua̱ndan ni̠ Kuoth ",
            category: "Gɔy Kuoth",
            lyrics: "1. Gaŋkɛ kɔn ɛ Gua̱ndan ni̠ Kuoth, ɛ Läät mi̠ bum mi̠ /ci̠ bi̠ thiɛl. Ɛn Luääkdan Jɛn a ni̠ däär nyɔac, cäŋ liewnɛ kɛ juew Jɛn tëëkɛ lua̱ŋ. ŋot gua̱n tɛ̈ran ëë wal, go̠rɛ ɣöö bɛ kɔn moc riɛk. Jɛn pɛ̈lɛ ŋotɛ di̠t, jɛn tëëkɛ buɔ̱m tiilä. Wi̠i̠ muɔ̱ɔ̱n thiɛlɛ ram mi̠ päär kɛ jɛ. <br><br> 2. /Ciɛ lua̱ŋdan kärɔa ɛn ɣöö banɛ ŋäth, bi̠ lua̱ŋdan ɛmɛ rɔ dhil ni̠ thiɛl. Kä Ram mi̠ Guän cuŋni̠ tëë peekdan, ɛ Jɛn raan Kuɔth ɛ̈ɛ̈ cɛ mɛk. /Cu thiec ɛ  “Kä ɛ ŋa?” Ɛ Jɛn Kuray Ji̠thɛth pa̱ny, Kuäär a Ciötdu puanykɛ, a päär rɛy runi̠ diaal. Kä Jɛn bɛ kääri̠ dhil tiam. <br><br>3. Cäŋ thiäŋ ɣɔw ɛmɛ kɛ gua̱n jiakni̠, kɛ dual jɛn bɛ kɔn jakä thiɛl. /Canɛ bi̠ duaal te̱ni̠ Kuoth kɛ buɔ̱m, bi̠ thuɔ̱kdɛ jɔɔc rɛy ciɛɛŋädan. Ɛn gat muɔ̱th mi̠ thiɛl jiath lɔaac, kɔn /cuanɛ dualkɛ jɛ. Kɔn banɛ ŋɛ̈ɛ̈nydɛ rut, kɛ ɣöö ci̠ guutdɛ thia̱k. Riet kɛl mi̠ tɔt biɛ jakä thiɛl. <br><br> 4. Ɛn ri̠et rööl lenyɛ buɔ̱m wec muɔ̱ɔ̱n, thiɛlɛ tɛ̈th  lɔaacdiɛn mi̠ bi̠ cie̱ŋ. Ɛn Yiëë kɛnɛ muc Kuɔth kɛ nyinkɔn, Rɛydɛ ɛn Ram mi̠ maar kɛ kɔn. A gɔɔy kɛnɛ maar thiɛl, mäni̠ tëk li̠eth ɛmɛ. A puɔ̱ny a jɛ na̱kɛ, kä ɛ thuɔ̱k Kuɔth ŋotni̠ thi̠n, bi̠ Kuäärɛ mäni̠ cäŋ kɛl.",
        },
        {
            id: 66,
            author: "Jɔ̱ɔ̱n Jɔk Bol",
            title: "66. Gua̱a̱ra, Gua̱a̱ra, Gua̱a̱ra ",
            category: "Gɔy Kuoth",
            lyrics: "Gua̱a̱ra, Gua̱a̱ra, Gua̱a̱ra, Gua̱a̱ra. Palkɔ Ji̠ kɛ dueerkɔ, ca̱a̱kɔ yi̠i̠c, käp tetkɔ. <br><br> 2. Gua̱a̱ra, Gua̱a̱ra, Gua̱a̱ra, Gua̱a̱ra. Liɛmkɔ Ji̠ moc tetkɔ, Ba̱a̱kɔ rɔ mat Nhiamdu. <br><br> 3. Käändä, Käändä, Käändä, Käändä. La̱ŋkɔ Ji̠ ci̠ nɛy ga̱y, Ca̱a̱kɔ wiee, poc merkɔ. <br><br> 4. Rääŋda, Rääŋda, Rääŋda, Rääŋda. Kuoth mi̠ buɔy mɛr ŋɔak diaal, Ba̱a̱kɔ nyuur Ciökni̠ku. <br><br> 5. Määthda, Määthda, Määthda, Määthda. Ji̠thɛth Kään ci̠ nɛy duer, Dueerkɔ diaal ŋapkɛ jiaath. <br><br> 6. Wäätda, Wäätda,  Wäätda,  Wäätda. Wa̱a̱kɔ cop cieŋ rööl nhial, Ji̠n Yienda, Käp cue̱cda. <br><br> 7. Yie̱nda,  Yie̱nda,  Yie̱nda,  Yie̱nda. Yecu Kuäär, ri̠t lɔcda, Ba̱a̱kɔ maath pi̠i̠ni̠ku. ",
        },
        {
            id: 67,
            author: "A.H 66 God be with you ‘till we meet again ",
            title: " Kuoth Bɛ te̱ Yɛ Amäni̠ mi̠ Wanɛ Jëk ",
            category: "Gɔy Kuoth",
            lyrics: "1.Kuoth Bɛ te̱ Yɛ Amäni̠ mi̠ Wanɛ Jëk, kɛ luäk Bo̠thädɛ bɛ yɛ käp. kä yi̠endɛ bɛ yɛ tit. Kuoth bɛ te̱ yɛ amäni̠ mi̠ wanɛ jëk. <br><br> Mi̠ wanɛ jëk, mi̠ wanɛ jëk, mi̠ wanɛ jëk, ciökni̠ Ji̠thɛth. Mi̠ wanɛ jëk, mi̠ wanɛ jëk. Kuoth bɛ te̱ yɛ amäni̠ mi̠ wanɛ jëk. 2. Kuoth Bɛ te̱ Yɛ Amäni̠ mi̠ Wanɛ Jëk, Gaŋɛ kä kumɛ yɛ. cäŋni̠ diaal moocɛ yɛ kɛ mieth Ma-na.  Kuoth bɛ te̱ yɛ, amäni̠ mi̠ wanɛ jëk. <br><br> 3. Kuoth Bɛ te̱ Yɛ Amäni̠ mi̠ Wanɛ Jëk,mi̠ ci̠ tëk wec muɔ̱ɔ̱n bɛ̈c luäkɛ yɛ. Kueŋɛ tet Nho̠kädɛ puɔ̱ɔ̱nydun. Kuoth bɛ te̱ yɛ amäni̠ mi̠ wanɛ jëk. <br><br> 4. Kuoth Bɛ te̱ Yɛ Amäni̠ mi̠ Wanɛ Jëk,Käpɛ luäk Nho̠kädɛ tëë wi̠i̠dun. tiem liethdɛ,jɛn a nhiamdu. Kuoth bɛ te̱ yɛ amäni̠ mi̠ wanɛ jëk.",
        },
        {
            id: 68,
            author: "Bol Thɔɔt Kuɔth ",
            title: "68. La̱rä Tɛ̈th lɔaac Kuoth Nhial ",
            category: "Gɔy Kuoth",
            lyrics: "1. La̱rä tɛ̈th lɔaac Kuoth nhial, kɛ kui̠ kä min cɛ la̱t min /ken me̱t tuɔɔk min cɛ la̱t kɛ kui̠dan. A tɛ̈th lɔaac te̱kɛ jɛ mäni̠ cäŋkɛl kɛ ɣöö kɛn ŋɔaani̠ diaal luɔtkɛ rɔ̱ kɛ jɛ. <br><br> Kɔn kietnɛ kɔn puanynɛ Gua̱ndan,  Kɔn kietnɛ kɔn puanynɛ Gua̱ndan, Kɛ lär tɛthkä lɔaac. kɛ kui̠ lätni̠ kɛ tin buɔ̱m-buɔ̱m, kɛ kui̠ lätni̠ kɛ tin buɔ̱m-buɔ̱m, kɛ kui̠ lätni̠ kɛ tin buɔ̱m-buɔ̱m la̱rnɛ jɛ tɛ̈th lɔaac. <br><br> 2. Ɛn Gua̱ndan puanynɛ jɛ, kɛ kui̠ lätni̠ kɛ tin buɔ̱m-buɔ̱m tin cɛ la̱t kɛ kui̠dan. A tɛ̈th lɔaac te̱kɛ jɛ, mäni̠ cäŋkɛl kɛ ɣöö kɛn ŋɔaani̠ diaal luɔtkɛ rɔ̱ kɛ jɛ. <br><br> 3.  A-lɛ-lu-ya (6x) te̱kɛ Kuoth. Kɛ ɣöö jɛn ŋäcɛ min cɛ car ɛ ŋot /kenɛ ni̠ tuɔɔk, ni̠ kä kɛɛl bɛ cu la̱t. ",
        },
        {
            id: 69,
            author: "A.H 538. Guide Me, O Thou Great. ",
            title: "69. Bo̠th ɣä  ööɣ Ja-öba Min Bum",
            category: "Gɔy Kuoth",
            lyrics: "1. Bo̠thä ɣöö Jaöba min bum, rɛy ja̱lä rɛy muɔ̱n mi̠ kööt. Kɛ ɣöö ɣän nyua̱nä kä bumni̠ ji̠n, käp ɣä kɛ tetdu min bum. Juray ciëŋ rööl nhial, Juray ciëŋ rööl nhial,  mi̠i̠thni̠ ɣä amäni̠ mi̠ cä rɔ̱ŋ, mi̠i̠thni̠ ɣä amäni̠ mi̠ cä rɔ̱ŋ. <br><br> 2. Lepni̠ ɣä löny pi̠i̠ni̠ ti̠ buay-buay; ni̠ rɛy löölä teekädu. Ɛ mac in pɛt amäni̠ wuɔ̱n, bo̠o̠th ja̱lä kɛ rɛydiɛn diaal. Ji̠n ram min bum, Ji̠n ram min bum, ŋotni̠ kɛ mi̠ ɛ Ji̠n ram min bumdä, ŋotni̠ kɛ mi̠ ɛ ji̠n gääŋdä. <br><br> 3. Mi̠ wa̱a̱ we ja̱l kɛ röm Jɔr-dɛn; woc dual in bi̠ ɣä göl piny. Cäŋ bä röm kɛ rik mäni̠ da̱k, jakni̠ ɣä kä cup mun Kɛɛ-nan. Ɣän bä ji̠ kiet, ɣän bä ji̠ kiet, diit puɔnyä amäni̠ cäŋkɛl,  diit puɔnyä amäni̠ cäŋkɛl. ",
        },
        {
            id: 70,
            author: "Unknown",
            title: "70. Kuär Bo̠thä Runwaŋ Mäni̠ Thiaŋ",
            category: "Gɔy Kuoth",
            lyrics: "Kuär bo̠thä runwaŋ mäni̠ thiaŋ, kɛ tin diaal tin dee la̱t rɛydiɛn. A thiɛlɛ mi̠ dëë la̱t a laa mi̠ jiääk, A la̱tdä ni̠ gɔɔy. <br><br> A-lɛ-lu-ya, a-lɛ-lu-ya, A liak te̱ ji̠ amäni̠ cäŋkɛl. kɔn nɛɛ Kuoth banɛ Kuoth liak. <br><br> 2. Kuäär bo̠thä cäŋ däär amäni̠ wäär,kɛ tin diaal tin dee la̱t rɛydiɛn. A thiɛlɛ mi̠ dëë la̱t a laa mi̠ jiääk, A la̱tdä ni̠ gɔɔy. <br><br>3. Kuäär bo̠thä rɛy jäli̠kä diaal,kɛ tin diaal tin dee la̱t rɛydiɛn. A thiɛlɛ mi̠ dëë la̱t a laa mi̠ jiääk, A la̱tdä ni̠ gɔɔy. ",
        },
        {
            id: 71,
            author: "A.H.530. It is Well With My Soul ",
            title: "71. Kɛn Gɔwkɛ Kɛ Tieydä",
            category: "Gɔy Kuoth",
            lyrics: "1. Mi̠ ci̠ mal cetkɛ yier kä guurɛ duɔ̱ɔ̱pdä, mi̠ cet jiath lɔaac kɛ yier mi̠ mak. ŋɔaani̠ diaal tin tuɔɔk ci̠ ɣä ŋieec i̠ bä lar, kɛn gɔwkɛ kɛn gɔwkɛ kɛ tieydä. <br><br> Kɛn gɔwkɛ; kɛn gɔwkɛ, kɛ tieydä; kɛ tieydä. Kɛn gɔwkɛ; kɛn gɔwkɛ, kɛ tieydä. <br><br> 2. Duerä nɛn tɛ̈th lɔaac puɔnyä min bi̠ ben, dueerä /ciɛ tha̱a̱ŋkiɛn ɛ kɛn diaal. Caa kɛ pua̱t jɔɔ jiaath /cä lɛ ŋot kɛ ɣa̱a̱cdiɛn. ji̠n liak Kuoth, jin liak Kuoth löö tieydä. <br><br> 3. Kɛ cäŋ kua̱r mi̠ wëë ben bi̠ ŋa̱thdä cu jɔɔc, kä baa pua̱a̱r riy cetni̠ kɛ ko̠l. kä bi̠ kaaŋ cu röt kä bi̠ kuäär ben piny nhial, cäŋ bëë kɛ, jɛn gɔaa ɛ kɛ tieydä.",
        },
        {
            id: 72,
            author: "A.H 107 God Moves in a Mysterious Way ",
            title: "72.  Kuoth Jälɛ Kɛ Ta̱a̱ Mi̠ /Ca ŋäc",
            category: "Buɔ̱m Kuoth",
            lyrics: "1. jälɛ kɛ ta̱a̱ mi̠ /caa ŋäc, lätdɛ ti̠ ga̱a̱c kɛ naath. Kuänyɛ ka̱a̱thkɛ kɛ rɛy Bäb-diit, Rɛy thuɔ̱ɔ̱l bä Jɛn tëë thi̠n. <br><br> 2. Gaat Kuɔth tin dual a lo̠ckun bum kɛ pua̱a̱r tin ga̱a̱c kɛ yɛ; ci̠ rɛydi̠ɛn thia̱a̱ŋ kɛ kɔ̱a̱c lɔac, kä bɛ puth diaal wuɔc wi̠i̠dun. <br><br> 3. /Cu Kuoth luk kɛ cär nyuäänädu, ŋäthɛ kɛ puɔ̱th baaŋdɛ; caa duɔ̱ɔ̱th nhi̠amdɛ tin gɔw gël jɔk ɛ cuɔ̱c in jɔc Nhi̠amdɛ. <br><br> 4. Kä bi̠ luɔ̱ɔ̱tni̠ Kuɔth jɔɔc kɛ pɛ̈th rɛy thaakni̠ di̠aal tin bi̠i̠; dɛy tin /kɛn lɔɔrkä la kɛc kɛ, kä tin ci̠ lɔɔr gɔwkɛ. <br><br> 5. Thi̠ɛl ŋäthä mi̠ cɔr jɛn bathɛ, kui̠cɛ ŋɔak tin go̠o̠rɛ; kä Kuoth latdɛ rɔde kä rɔa, jakɛ ŋɔak diaal kä jɔɔc.",
        },
        {
            id: 73,
            author: "Unknown",
            title: "73. Ɛŋu Mi̠ Dee Kɔn Da̱a̱k Kɛ Kuoth",
            category: "Nhök Kuoth",
            lyrics: "1. Aɣ aɣ gat maari̠, canɛ Jɛ kap nhi̠al, ɛn läät Kuoth, (Kɔn di̠aal gaat Kuoth, Kuothdan cɛ kɔn cɔal, rɛy läätädɛ min laa jɛn ŋi̠i̠c naath diaal.) <br><br> Ɛŋa mi̠ dee da̱a̱k kɛ nhök Kuɔth? Dääkɛ kɔn kɛ nhök Gua̱ndan ni̠ Yecu? Dɛra buɔth rɛɛthä? kiɛ ci̠aŋ canä? Thiɛlɛ mi̠ dee kɔn da̱a̱k kɛ nhök Kuoth. <br><br> 2. Aɣ aɣ gat maari̠, Yëcu cɛ kɔn kɔk , Ri̠ɛmdɛ min gɔaa, (cɛ lo̠ny wi̠i̠ jiath mi̠ ri̠ew, kɛ kui̠ dueri̠kɔn, dueekɔn tin tee kɔn ti̠ ci̠ thia̱a̱ŋ wi̠i̠ muɔ̱n ɛmɛ) <br><br> 3. Aɣ aɣ gat maari̠, Kuothdan cɛ kɔn nyuɔ̱ɔ̱th, (Nhökdɛ min gɔaa, canɛ Nhökdɛ nɛn kɛ Gatde ni̠ Yëcu, mi̠ ci̠ kɔn luɛl, Yëcu Kuär cɛ kɔn kän)",
        },
        {
            id: 74,
            author: "Riia̱ŋ Jɔak kɛnɛ Ay-dhɛk Luk",
            title: "74. Poth Gaatku Diaal",
            category: "Puɔth",
            lyrics: "1. Poth Gaatku di̠aal tin li̠ɛŋkɛ ruacdu Kuär, Poth Gaatku di̠aal kɛ ɣöö bi̠ kɛn thuɔ̱k ŋa̱c, Poth Gaatku di̠aal kɛ kɔa̱c-lɔacdu löö Kuär, kɛ ɣöö bi̠ kɛn thuɔ̱k ŋa̱c bi̠ thuɔ̱k kɛ jaa ci̠e̱ŋ a gɔaa. <br><br>Kɛ Nhökdu, kɛ nhökdu, kɛ kɔa̱c-lɔacdu löö kuär, kɛ ɣöö ɛ ji̠n kärɔadu rɛl Gɔɔydɛ rɔ mɔ. Kɛ Nhökdu, kɛ nhökdu, kɛ kɔa̱c-lɔacdu löö kuär, döör diaal bi̠ kɛn cu nyuur Nhiamdu kɛ ɣöö ɛ Ji̠n kuothdiɛn. <br><br>2. Puanynɛ Kuoth Nhial kɔn gaatkɛ tin cɛ mɛk, Puanynɛ Kuoth Nhial kɛ ɣöö cɛ kɔn ka̱m tëk, Puanynɛ Kuoth Nhial kɛ ɣöö bɛ kɔn diaal kän, ri̠enɛ rɔ̱ kä ji̠ääk guut a bëëni̠ nyin ɣɔaa bi̠kɛ riaw. <br><br>3. A liak te̱e̱ kɛ Kuoth in rɛl Gɔɔydɛ rɔdɛ, luɔ̱thnɛ Kuoth Nhial kɛ ɣöö ci̠ gua̱th luɔ̱k cop. Kuoth in luk kɛ thuwk pälɛ kɔn i̠kä ni̠ ci̠aŋ, rietnɛ rɔ̱ kä jiäk guut a bëëni̠ rietnɛ rɔ̱ Kuoth Nhial.",
        },
        {
            id: 75,
            author: "Unknown",
            title: "75. Liaknɛ Käändan Yɛn Tin Nhɔakɛ Yëcu",
            category: "Liak Kuoth",
            lyrics: "1. Liaknɛ Käändan yɛn tin nhɔakɛ Yëcu, ɛ ŋa mi̠ lo̠k duɔ̱ɔ̱p teekä mɛ ciwɛ. Kä ɛ ji̠n ŋa mi̠ lo̠kni̠ ɣöö bi tëkdu ka̱m Yëcu? Ɛŋa mi̠ ngɔk ni duɔ̱p ɛ jiäk ɛmɛ. <br><br> Yëcu kämni̠ kɔ ni̠ nhökdu Yëcu Kri-tho, nhökdu Ba̱ba̱, Nhäkdu Ba̱ba̱. <br><br> 2. Puɔ̱ɔ̱t lieth Riet bumä Jɛn bɛ dualä woc. Puɔ̱th Kuɔth mi̠ thiɛl mɛ̈ɛ̈ny caa jɛ ka̱m Mɛ-ri. Bëë piny cieŋ nhial kɛ ɣöö bɛ nɛy tin ti̠ li̠w ben kän kä duer. Riɛŋnɛ kɔaŋnɛ ka̱n teekädan. <br><br> 3. Kuoth maalä mockɔ buɔ̱m mi̠ tiam kɔ ɣɔw ɛmɛ, liŋkɔ rɛy la̱ŋni kɔ mi thiëckɔ Ji̠, Ci̠ guut ɣɔaa thia̱k cuɔmnɛ kɛ cäŋ kɛ wäär kɛɛliw. <br><br> 4. Ci̠ Tëkdu thöp kɛ ɣä a̱ɣ Kuär wi̠i̠ jiath mi riew, bä ji lɛ ka̱m ŋwään thiɛlɛ ɣä gɔɔy mi tɔt. Moc ɣä kɛ buay mi̠ te rɛydä a̱ɣ Kuär bi lɔɔcdä lak, kä jakni̠ ɣä kä gɔaa Nhiamdu. <br><br> 5. Bä lɔcdä ka̱m Käändä mëë cɔl ɣä raar rɛy muɔ̱th, tie̱mdä kɛ ji̠ Ba̱ba ci̠ merkä pɛ̈ɛ̈n. Käm ni ɣä, bä ji̠ ka̱m puɔny A-le-lu-ya. ",
        },
        {
            id: 76,
            author: "Kɔaŋ Puɔ̱k Kɔryɔm",
            title: "76. Kietɛ Kuoth Nhial Dit Mi̠ Pay Cak",
            category: "Liak Kuoth",
            lyrics: "1. Kietɛ Kuoth nhial dit mi̠ pay cak gaatkɛ, kietɛ Kuoth nhial dit mi pay cak kɛ tɛ̈thlɔaac. La̱rɛ Jɛ tɛ̈thlɔaac mi̠ di̠i̠t, kɛ thom, kɛ kaaŋni̠ kɛnɛ buɔ̱l. <br><br> Cet Dëë-bi̠d ni mëë, Jɛn liakɛ Kuoth kɛ thom ni̠ mëë, kɛnɛ kaaŋni̠ kɛ, kɛ diit, lärɛ Kuoth nhial tɛ̈thlɔac.  ( x3)  <br><br> 2. Mi̠ ci̠ lɔcdu jiath kɛt diit puɔnyä, liak Kuothdu kɛ diit puɔnyä kɛɛl kɛ tɛ̈thlɔaac. Bi Guur jɔwdu cu liŋni̠ nhial bɛji cu ka̱m tɛ̈thlɔaac. <br><br> 3. Mi ci lɔcdu tɛɛth jin kuɛn Bay-bol, bɛ ji gaŋ kɛ tin diaal tin go̠o̠r lɔcdu kɛ. Bɛ ji̠ gaŋ kädi̠t lɔac ɣɔaa ɛmɛ ji̠n bi̠ lɔcdu cu tɛɛth.",
        },
        {
            id: 77,
            author: "Unknown",
            title: "77. Nhökdɛ, Nhökdɛ, A-lɛ-lu-ya ",
            category: "Liak Kuoth",
            lyrics: "1. Nhökdɛ, nhökdɛ,  a-lɛ-lu-ya.  Puanynɛ Jɛ kä nhɔaknɛ Jɛ, Kɛ Riɛmdɛ mi̠ ci̠ kɔn diaal kän. Riɛmdɛ, Riɛmdɛ, tiɛmnɛ jɛ. <br><br> 2. Nhökdɛ, nhökdɛ,  a-lɛ-lu-ya. Riɛm Yëcu mi̠ ci̠ lo̠ny dɔɔr. ŋa̱thnɛ ŋuään mi̠ thiɛli̠ Yëcu, Yëcu, Yëcu cɔlɛ kɔn. <br><br> 3. Nhökdɛ, nhökdɛ,  a-lɛ-lu-ya. Kɛ kui̠ Däpkädɛ mëëdan, Caa Jɛ dap rɛy rööl Ju-di-ya. Kuäärä, Kuäärä, nhɔkɛ ɣä. <br><br> 3. Ju-di-ya. Tiɛmkɔ Da̱pkädu min gɔaa. Ɣän bä lɔcdä ka̱m Jɛn, Käändä. Riɛmdɛ, Riɛmdɛ, tiɛmnɛ jɛ.",
        },
        {
            id: 78,
            author: "A.H.330 Take My Life And Let it Be",
            title: "78. Naŋ Tëkdä a Jɛ Te̱kɛ Ji̠",
            category: "Kään",
            lyrics: "1. Naŋ tëkdä a jɛ te̱ kɛ ji̠, Riali̠ jɛ i̠kä kä ji̠. Naŋ tetkä jakni̠ kɛ kä lät. Rɛy nho̠kä rɛy Bumkädu. Rɛy nho̠kä rɛy Bumkädu. <br><br> 2. Naŋ ciökä jakni̠ kɛ kä jäl, Pɛ̈thkɛ rɛy Läätkädu. Naŋ jɔwdä jakni̠ jɛ kä ki̠t. Ni̠ ciaŋ kiɛɛtä diit kua̱rä. i̠ ciaŋ kiɛɛtä diit kua̱rä. <br><br> 3. Naŋ thokdä, jakni̠ jɛ kä ki̠i̠t, Thiäŋɛ kɛ rieet ti̠ bëë kä Ji̠. Naŋ gɔykä kɛ la̱a̱ŋkä diaal. Thiɛlɛ kɛl mi̠ dëë pën Ji̠. Thiɛlɛ kɛl mi̠ dëë pën Ji̠. <br><br> 4. Naŋ buɔ̱mdä a laa Duŋdu, /Cɛ ŋot kä ɣä a laa duŋdä. Naŋ lɔcdä a laa Duŋdu. A jɛ te̱e̱ rɛy Kuäärädu. A jɛ te̱e̱ rɛy Kuäärädu. <br><br> 5. Naŋ nhökdä, Kuäär, ɛ Duŋdu, A jɛ te̱ piny Ciöknikɛ. Ri̠t ciaaŋdä kä bä cu gɔaa. Ni̠ ciaŋ kä bä a Dungdu. Ni̠ ciaŋ kä bä a Dungdu.",
        },
        {
            id: 79,
            author: "Jɛ-mith Giil Gatluaak ",
            title: "79. Liɛpnɛ Nhökdɛ",
            category: "Nhök Kuoth",
            lyrics: "1. Liɛpnɛ Nhökdɛ, nhök Yëcu i̠ nhök Kua̱ran. Kɔn diaal bia luɔrnɛ Kuääran, kɔn diaal biaa luɔrnɛ Kuäär. Kɛ cäŋ Benkädɛ, banɛ lor kɔn diaal. <br><br> Bër, bër ci̠ Kuäär ji̠ cɔl, Kɛ cäŋ Ti̠mkädɛ. Bër, bër rɛy Bumädɛ. <br><br> 2. Mi̠ rɛl Gɔɔydɛ rɔ, Mi̠ rɛl Gɔɔydɛ rɔɔdɛ Ɛn Kuääran ni̠ Kuoth. <br><br> 3. Tin galkɛ ji̠, Tin galkɛ ji̠ kɛ ben kä Kuääran, Bäny ni̠ kɛ piny. <br><br> 4. Jɛn tho̠pɛ rɔ, Jɛn tho̠pɛ rɔ wi̠i̠ jiaath ŋa̱p, Thöpɛ rɔ kui̠ ŋa? Kɛ kui̠dä kui̠dä, kui̠ nɛɛni̠ diaal. ",
        },
        {
            id: 80,
            author: "Unknown",
            title: "80. Kuoth Gua̱n Gɔyni̠",
            category: "Gɔy Kuoth",
            lyrics: "1. Kuoth Gua̱n gɔyni̠ kä Gua̱n ruɔ̱ɔ̱tni̠, guicä kɛ waŋ mi̠ gɔaa Ɛlɔ̱ŋ. Gua̱a̱thdä baa jɛ cɔli̠ Gua̱a̱thdu, Jɛn Gatdu lunyɛ kä ɣä <br><br> Yëcu Kuäär, ɣän, thiëëcä Luäku. De̱pkä diaal teedi̠ lökä kɛ. /Cä bi̠ nyɔk kɛ dëp cäŋ dɔ̱diɛn. <br><br> 2. Kä de̱pkä ɣän, cä kɛ luɔ̱ɔ̱c rɔ, lia̱a̱ kɛnɛ can mi̠ thiɛl pek. Gua̱a̱th maacɛ ŋɔ̱a̱a̱thkɛ ni̠ jiääkɛ, tëë kɛ cäŋni̠ ti̠ thiɛl pek. <br><br> 3. Kä dëpkä ɣän cä kɛ ba̱ny piny, cukɛ böth ni̠ ɣä Kuɔth puɔ̱ɔ̱rä. Gua̱a̱th ŋäthä nɛy tin buɔy, cie̱ŋkɛ cieŋ rɛy baaŋä mi̠ thiɛl pek nho̠kä. <br><br> 4. Nɛ̈nɛ, Luääkdan wi̠i̠ jiaath li̠wɛ, wi̠i̠ jiaath mi̠ riew Käl-bä-ri̠. Wi̠c jiaath, ci̠ de̱pkä jɛ pua̱t thi̠n lo̠ny Riɛmdɛ li̠wɛ kɛ ɣä.",
        },
        {
            id: 81,
            author: "Unknown",
            title: "81. Kuoth Tɔ̱a̱cnɛ Kɛ Jɛ",
            category: "Nhök Kuoth",
            lyrics: "1. Kuoth tɔ̱a̱cnɛ kɛ Jɛ, Kuoth niɛɛnɛ kɛ Jɛ, Kuoth tɔ̱a̱cnɛ kɛ jɛ, Kuoth niɛɛnɛ kɛ Jɛ. Kuoth jiaynɛ kɛ jɛ, Kuoth ja̱lnɛ kɛ jɛ. Kuoth lɔ̱a̱ŋnɛ ni̠ kɛɛl, Kuoth miethnɛ ni̠ kɛɛl, Kuoth ma̱thnɛ ni̠ kɛɛl, ŋun yiëëdä ɛ Ji̠n. <br><br> 2. Kuoth ti̠i̠ wa̱nɔ ni̠ tukä ɣɔaa, Kuoth ti̠i̠ wa̱nɔ ni̠ tukä ɣɔaa. Kuoth ɛ buay kä Kuoth ɛ Jɛn Ruac. Cäŋ in kɛl in jio̠liɛn riet kɛl cɛ nyuɔ̱ɔ̱th a buay we rɛy ɣɔaa, cu buay ku te̱e̱ wa̱nɔ. <br><br> 3. Kuoth thiele dääk, Kuoth thiɛl tiɛɛl. Kuoth thiɛlɛ dääk, Kuoth thiɛlɛ tiɛɛl. Kuoth Duŋdɛ ɛ nhök, Kuoth Duŋdɛ kɔ̱a̱c lɔaac. Kuoth go̠o̠rä kɔ̱a̱c lɔaacdu, Kuoth göörä Nhökdu, Kuoth woc ɣä kö tiɛɛl, mi̠ ci̠ dupkä nyuɔɔn. <br><br> 4. Mi̠ go̠o̠ri̠ puaak guɔ̱th pi̠i̠ni̠ tin kɔ̱c, Mi̠ go̠o̠ri̠ puaak guɔ̱th pi̠i̠ni̠ tin kɔ̱c. Pi̠i̠ku tin kɔ̱c kuäär cɛ kɛ riali̠kä. Kɔn palnɛ Jɛ ciaŋ, kɔn thiëcnɛ Jɛ ciaŋ, kɔn la̱ŋnɛ Jɛ ciaŋ, bi̠ Kuäära kɛ nööŋ. <br><br> 5. Buɔ̱mdu, Lua̱ŋdu, Gɔɔydu min rɛy rɔɔdɛ, Ji̠n Kuäär mi̠ ci̠ li̠w jiaath. Cam nɛy Ri̠ŋdu, kä mathkɔ Riɛmdu, riɛm teekädu Ji̠n Kuäär. Tɛth lɔcda ni̠ kɛɛl, kä pär nɛy ni̠ kɛɛl, cäŋ mi̠ tiɛmkɔ Ji̠.",
        },
        {
            id: 82,
            author: "Rɛ-bë-kɛ Meer Tut ",
            title: "82. Buɔ̱m Nhial Kɛnɛ Piny Tëë kɛ Kuäär.",
            category: "Buɔ̱m Kuoth",
            lyrics: "1. Buɔ̱m nhial kɛnɛ piny tëë kɛ Kuäär. Ci̠ pi̠i̠th we pieth min pi̠thɛ, ci̠ kuay pɛn dup ci̠ diit bɛn caa kɛ kuany, ci̠ kɛ riaw. <br><br> Gua̱a̱ra a ni̠ nhial, Gua̱a̱ra a ni̠ nhial, banɛ röm kɛ jɛ rɛy jɔam. Cäŋ mi̠ wëë ben, cäŋ mi̠ wëë ben, banɛ röm kɛ Jɛ rɛy jɔam. <br><br> 2. Ja̱a̱ku kɛn tin, mi̠ ŋääth kɛn ni̠ Ji̠n Kuäär ɛ dee kɛ we ni̠ nhial, dɛl kɛl kä /cɛ dee bath. <br><br>3. Ciaaŋ Gɔɔyädu Kuäära, bi̠ lim kɛ yiëë mi̠ buɔy. Thiɛlɛ ɣä Kään mi̠ dɔ̱ŋ Jithɛth ɛ Käändä, läŋɛ Gua̱n kä jiɛth lɔcdɛ. <br><br> 4.  “Biaa wiee cäŋ guutä ɣɔaa, kua lia̱a̱ mi̠ bɛc ɛ dieen, rɛy maac mi̠ thiɛlɛ pek. Täämɛ ŋɛ̈p lɔcdä Gaatkä rölä yɛ, Riɛmdä ni̠ mëë ci̠ lo̠o̠ny.” <br><br> 5. Ɣän thiɛlɛ ɣä gɔɔy mi̠ dëë lar, ɣɔw ɛmɛ ci̠ waŋdɛ di̠t. Käni̠ buɔ̱l, cuŋni̠ bɛɛr, görni̠ gua̱a̱th in we̱e̱ ji̠. <br><br> 6. Ɣä guɛcä naath tin liak Kuoth, bɛl ni̠ ɣöö cuuc kɛn rɔ̱ baaŋ. Ɣän guɛcä kɛ kuiyni̠ kɛn, tin bi̠ wee Jɛ-ru-tha-lɛm. Ji̠thɛth Käändä, Ji̠n Gat Mɛri̠, päli̠ Gaatku i̠kä rɛy dueeri̠. ",
        },
        {
            id: 83,
            author: "Mu-thɛ Lual Ruɛ̈y ",
            title: "83. Kuäär cɛ We̱e̱ I̠  “Bä Ben Kä Yɛ…” ",
            category: "Ben Yëcu",
            lyrics: "1. Kuäär cɛ we̱e̱ i̠  “Bä Ben Kä Yɛ mi̠ ka̱pɛ rieet ti̠ti̠, ram yoop tëk piɛny kä bathɛ ni̠ tëk ciëŋ nhial. Ci̠ Yiëë ku ben wi̠i̠ muɔ̱ɔ̱n kä yɛ kä ka̱pɛ rieet ti̠ti̠, mi̠ /ciɛ bi̠ ŋäth mi̠ ŋäthi̠ ni̠ buɔ̱mdu, kɛ ɣöö ci̠ nyin wec muɔ̱ɔ̱n ku riaw bi̠ nyinku riaw.” <br><br> Kuäär cɛ we̱e̱ i̠, “Bä te̱e̱ kɛ yɛ, cäŋ mi̠ wi̠i̠ ni̠ yieer mi̠ lue̱ŋ, ɛ Ɣän bä te̱e̱ rɛy rikni̠ku mi̠ ŋa̱thi̠ nhɔki̠ ɣä“ Baa yɛ naŋ ni̠ gua̱a̱th mi̠ dɔ̱ŋ, ro̠o̠l mi̠ na̱n mi̠ thiɛlɛ raan mi̠ lo̠nyni̠ liɛɛth, kɛ cak, kɛ tuaar ɛ muc mi̠ gɔaa kä yɛ. <br><br> 2. Ci̠ Ji̠thɛth we̱e̱ i̠, “Bä ben Ɣän duɔ̱ɔ̱p mi̠ wa̱a̱ naath naŋ teekä. kä kapɛ jiathdä kä guɔ̱ɔ̱rɛ ni̠ ɣä rɛy ɣɔaa.“ Ci̠ Yi̠ëë ku ben wi̠i̠ muɔ̱ɔ̱n eme kä ka̱pɛ riëët ti̠ti̠. Mi̠ yopi̠ rɔ kä kämɛ ji̠ Pi̠i̠kɛ, ti̠ lo̠ny kɛ tëk rɛy lɔaacdu raan ci̠ lia̱a̱du thuɔ̱k. <br><br> 3. Ja̱a̱k rööl nhial cä ben kä yɛ mi̠ ɣɔr Kuäär naath kɛ ɣöö ci̠ Ji̠thɛth ben, kɛ buɔ̱m di̠i̠t mi̠ däkɛ ni̠ lät ɣɔaa. Ci̠ Uiëë ku ben ala Kuäär mi̠ raan ci̠ diwdä thuɔ̱k. <br><br> 4. Cuɔ̱mnɛ rɔ̱ nyin tɔatni̠ buɔyä Gua̱a̱r rɛy ɣɔaa diaal ci̠ kɛ ku ben. Baa yɛ näk, kä baa yɛ ɣɔam, kä baa yɛ nyir ɛ naathti̠ lo̠k Ruacdä. luk cɛ thuɔ̱k kä naath.",
        },
        {
            id: 84,
            author: "A.H 619. Lead on O King Eternal",
            title: "84. Bo̠thkɔ aɣ, Kuäär in Da̱raar",
            category: "Kɔac Lɔac",
            lyrics: "1. Bo̠thkɔ aɣ, Kuäär in do̠raar, rɛy ni̠ni̠ tin we ben, kɛ nhiam rɛy gua̱th in be kɔn bi̠ kɛɛmɛ a gua̱a̱th ciëŋdan; rɛy ni̠ni̠ riali̠kädana kɔ̱a̱c lɔaacdu buumkɔ, ɛn täämɛ aɣ, Kuäär in do̠raar, këtkɔ dit teekä köra. <br><br> 2. Bo̠thkɔ aɣ, Kuäär in do̠raar, mäni̠ mi̠ ci̠ dueerkɔ lak, kä a gɔɔydu burkɔ piny kɛnɛ mal in gɔaa i̠nɔ; /ciɛ riet kiɛ jɔw lɔrä baaŋ kiɛ jɔw buɔ̱li̠ ti̠ ro̠t, kɛ di̠t nho̠kä kɛnɛ kɔ̱a̱c lɔac, aɣ, Kuäär a ro̠l Nhialu bëë. <br><br> 3.  Bo̠thkɔ aɣ, Kuäär in do̠raar, ba̱a̱kɔ ji̠ guɔ̱ɔ̱r a thiɛl dual, kɛ buay in jɔc kɛ run waŋ gua̱a̱th in bi̠ nɛy diaal jɔɔc; jiathdu in gɛɛr cɛ kɔ göl piny, banɛ ja̱l rɛy buɔyädɛ, kuɔ̱mni̠ liip kɛn ni̠ thuɔ̱k la̱t, ba̱thkɔ aɣ kuäär teekä.",
        },
        {
            id: 85,
            author: "A.H 78. For God so Loves Us",
            title: "85. Kɛ Ɣöö Nhɔk Kuoth Kɔn",
            category: "Puɔth Baaŋ",
            lyrics: "1. Kɛ ɣöö nhɔk Kuoth kɔn Jɛn cɛ kään ja̱k, kɛ ɣöö nhɔk Kuoth kɔn kä nhɔkɛ ɣä bä <br><br> Ɛn nhök /cɛ thukɛ! Bä kiet kä liakä jɛ, Kuoth nhɔkɛ Gaatkɛ nhɔkɛ ɣä bä. <br><br> 2. Jɛn cɛ Kään ja̱k ɛn lueel in caa poth, Jɛn cɛ Kään ja̱k kɛ ɣöö bɛ ɣä ja lɔr. <br><br> 3. Cɛ ɣä ciööl kä mal kɛ riet kɔ̱cä lɔaac, cɛ ɣä ciööl kä mal ɛ jɔw nho̠kä. <br><br> 4. Puɔny kɛnɛ luth ɛn nhök mi̠ thiɛl pek, min tho̠pɛ banɛ tëk a thiɛl pek.",
        },
        {
            id: 86,
            author: "We Give You Praise Lord",
            title: "86. Ba̱a̱kɔ Ji̠ Ka̱m Puɔny ",
            category: "Liak Kuoth",
            lyrics: "Ba̱a̱kɔ ji̠ ka̱m puɔny, Kuäär ba̱a̱kɔ ji̠ ka̱m puɔny; ku ciötdu lɛ te i̠di̠ ruec ɣɔaa! Kuäär ba̱kɔ ji̠ ka̱m puɔny. <br><br> 1. Ni̠kɛ tetdu, ci̠ ŋɔaani̠ diaal cak, Kuäär ba̱a̱kɔ ji̠ ka̱m puɔny; wi̠c muɔ̱ɔ̱n kɛnɛ cäŋ, kuɛli̠ kɛnɛ pay, Kuäär ba̱a̱kɔ ji̠ ka̱m puɔny. <br><br> 2. Jaak tin te nhial kɛn puanykɛ Ciötdu, Kuäär ba̱a̱kɔ ji̠ ka̱m puɔny; wi̠c muɔ̱ɔ̱n ɛn guääth ɛmɛ, ba̱a̱kɔ Ciötdu puany, Kuäär ba̱a̱kɔ ji̠ ka̱m puɔny. <br><br> 3. Kɔm Kuäärädu, bɛ te thi̠n ni̠ ciaŋ, Kuäär ba̱a̱kɔ ji puany; mäni̠ cäŋ löö Kuäär, mäni̠ cöŋ kɛl i̠nɔ, Kuäär ba̱a̱kɔ ji̠ puany. <br><br> 4. Liak kgng puɔny kɛ luth kɛ Nyinku, Kuäär ba̱a̱kɔ ji̠ ka̱m puɔny. Mä cäŋ löö Kuäär, mäni̠ cäŋ I̠nɔnɔ, Kuäär ba̱a̱kɔ ji̠ ka̱m puɔny.",
        },
        {
            id: 87,
            author: "Kɔaŋ Puɔ̱k Kɔryɔm",
            title: "87. Liakɛ Kuoth Yɛn Dör Diaal",
            category: "Liak Kuoth",
            lyrics: "1. Liakɛ Kuoth yɛn dör diaal kietɛ Kuoth Nhial diit, kɛ rɔal yɛn ji̠ wec-muɔ̱n diaal. <br><br> A-le-lu-ya, puanynɛ Jɛ ɛn Kuäran, Kuärani Yëcu Kritho, Jɛn cɛ kɔn kän. A-le-lu-ya, puanynɛ Jɛ ɛn Kuäran, Kuäran bia Nhiamdɛ kɛ diit, tɛthkä lɔac. <br><br> 2. Puɔnyɛ Kuth Nhial kɛ tɛ̈thlɔac mi̠ di̠i̠t, bia Nhiamdɛ kɛ diit tɛthkälɔac. <br><br> 3. Yɛn ŋa̱cɛ ɣöö Kuoth Nhial ɛ Kuoth Ni̠ wal, ɛ jɛn ɛn nëë cak kɔn. <br><br> 4. Wiaa thok Rɛ̈ɛ̈kdɛ kɛ tɛ̈thlɔac wiaa rɛy kal, kɛ diit puɔnyä tɛthkälɔac. ",
        },
        {
            id: 88,
            author: "GB. Praise the Saviour, Ye who Know Him ",
            title: "88. Liaknɛ Kuääran yɛn tin ŋa̱c kɛ Jɛ",
            category: "Liak Kuoth",
            lyrics: "1. Liaknɛ Kuääran yɛn tin ŋa̱c kɛ Jɛ, Ɛŋa dee Jɛ ku gak ɔ? Gɔaa ni̠ ɣöö banɛ rɔ̱ ka̱m Jɛ, Nyinkɔn diaal, mäni̠ kɔn. <br><br> 2. Ji̠thɛth ɛ Jɛn ciöt mi̠ ŋäc kɔn ɛ, jɛn rɛy kööran mocɛ kɔn buɔ̱m. Thiɛlɛ ram bar rɔ, kä thiɛlɛ mi̠ näk kɔn, mi̠ ŋa̱th kɔn Rɛydɛ. <br><br> 3. ŋa̱thɛ Jɛ yɛn Kua̱r tin di̠t, ɛ jɛn Ram mi̠ te̱kɛ ŋa̱th. Thiɛlɛ mi̠ dee Jɛ luɔ̱ɔ̱c jɔk, kä tin ŋa̱th kɛ Jɛ. <br><br> 4. Kämni̠ nɛy Puɔ̱nydu, Ji̠n Kuääran, ŋääth nɛy ni̠ Ji̠n, Kuäär kɛɛliw. Mäni̠ gua̱a̱th mi̠ ci̠ kän, pal nhial kɛ tɛ̈th lɔaac. <br><br> 5. Gɔaa ni̠ ɣöö bi̠ nɛy te̱ Gua̱a̱thdɛ, bi̠ nɛy te̱y cetkɛ pekdɛ. ŋɔak diaal ti̠ /ci̠ rɔ̱ŋ kɛ kɔn, cäŋ kɛl bi̠ kaa nyinkɔn.",
        },
        {
            id: 89,
            author: "Bol Thɔɔt Kuɔth ",
            title: "89. Kuoth Lätɛ Gɔɔy Kɛ Nhök",
            category: "Nhök Kuoth",
            lyrics: "1. Kuoth lätɛ gɔɔy kɛ nhök gua̱th in we ja̱a̱kɛ thi̠n, kɛ ciöt Gɔɔyädɛ min cɛ ka̱m nɛy diaal. Lätɛ thuɔ̱k kɛ kui̠ Gɔɔyädɛ. <br><br> Kɛn nyin wec-muɔ̱n diaal bi̠ kɛn diaal thuɔ̱k gua̱thdiɛn a beni̠ bi̠ kɛn diall riaw. Ɛ ni̠ thuɔ̱k Kuoth kärɔa laa do̠raar ɔ. Mi̠ ci̠ bi̠ met thiɛl, kä bi̠ tee thi̠n amäni̠ cäŋkɛl. <br><br> 2. No̠o̠ŋɛ puth kɛn gɔy kɛ kui̠ kɔ̱cä-lɔacdɛ min di̠i̠t. Kɛ di̠t Nho̠kädɛ min te thi̠n ni̠ ciaŋ. Lätɛ thuɔ̱k kɛ kui Gɔɔyädɛ. <br><br> 3. Kuoth kɛ Ruacdɛ cäŋ mi̠ bi̠ nhial kɛnɛ piny ku thuuk, rɛy Rieetni̠kɛ thiɛlɛ mi̠ bi̠ thiɛl, cäŋ mi̠ bi̠ nhial kɛn piny thuuk. <br><br> 4. A-le-lu-ya kɛ kui̠ di̠tä gɔɔyä Kuothdan. A liak te̱e̱ kɛ Jɛ amäni̠ cäŋkɛl Kuoth di̠tɛ amöni̠ cäŋkɛl. ",
        },
        {
            id: 90,
            author: "Unknown",
            title: "90. Kuoth Mi̠ Leny Buɔ̱mdɛ Ti̠ Diaal",
            category: "Buɔ̱m Kuoth",
            lyrics: "1. Kuoth mi̠ leny Buɔ̱mdɛ ti̠ diaal Mi̠ cak nhial kɛnɛ piny. Kuoth baa Ji ka̱m liak. <br><br> Gua̱ra mɔ tee Nhial, A Ciöötdu luɔ̱thkɛ, Kä a Kuääru bëë. <br><br> 2. Dör diaal tin cieŋ wi̠i̠-muɔ̱n, A mäni ciëŋ Nhial, Kuoth baa ji ka̱m liak. <br><br> 3. wi̠i̠-muɔ̱n ɛ cäk Ciökni̠ku, Ciëŋ Nhial ɛ kɔm Nyuurädu, Kuoth baa ji̠ ka̱m liak. <br><br> 4. Kuoth cäŋ ɛ ɣän gua̱n dueeri̠, /Cu ɣä lɛl duäc, Ɛ ɣän ram mi̠ cɔr. <br><br> 5. Kuoth täämɛ ci̠ lɔcdä jiath, Kɛ kui̠ dueerikä, Ber ku ɣä ben luäk. ",
        },
        {
            id: 91,
            author: "Kɔaŋ Puɔ̱k Kɔryɔm",
            title: "91. A luth Te̱e̱ Kuoth Mi̠ Ci̠ Nhial",
            category: "Liak Kuoth",
            lyrics: "1. A luth tee Kuoth mi̠ ci̠ Nhial kɛnɛ piny cak liak nɛ jɛ, yɛn liaknɛ Jɛ ɛ cäŋ puɔl ciökkun bä rɛy rikni̠, yɛn liaknɛ Jɛ ɛ cäŋ puɔl ciökun bä rɛy rikni̠ ɣɔaa ɛ tii. <br><br> Ciöt in cɔal kɛ kɔn i̠  I-thɛ-rɛl ɛ jɛn ciöt ŋäthkädan, cɔal jɛ ɛ ji̠ mɛɛtä i̠  I-thɛ-rɛl ɛ do̠r mi̠ caa mi̠ mɛk ɛ Kuoth. Mi̠ nyoth yɛnɛ koc yɛn naath /ci̠ yɛn ciɛc rɛy Duɔ̱pdɛ (Ba̱, Ba̱, Ba̱, Ba̱, Ba̱, Ba̱, /cukɛ duäc kɛn nɛy tin ci̠ gua̱n jiakni̠) Kɛ pën tëk. <br><br> 2. Yɛn la̱ŋɛ Kuoth /cu kɔ jaa ɣɔamkɛ ɛ Cɛy-ta̱n wurɛ kɔɔra. Yɛn la̱ŋɛ jɛ ɛ cäŋ tee yɛn rɛy muɔ̱th gua̱n jiakni̠, Yɛn la̱ŋɛ Jɛ ɛ cäŋ tee yɛn rɛy muɔ̱th gua̱n jiakni̠ tëë rɛy ɣɔaa. <br><br>  3. Kɔn guɔ̱rnɛ Jɛ, Jɛn mi̠ la tuk kä pek kä duɔ̱p liakng Jɛ. Kä thiglg ram mi̠ we kä Gua̱ndan a /cɛ ŋäc, kä thiɛlɛ ram mi̠ we kä Gua̱ndan a /cɛ ŋäc rɛy ɣɔaa.  ",
        },
        {
            id: 92,
            author: "Gatbɛɛl Ta̱t Guëk",
            title: "1. Kɔac-lɔacdu Tëë Thi̠ni̠ Ciaŋ",
            category: "Kɔac Lɔac",
            lyrics: "Kɔac-lɔacdu tëë thi̠ni̠ ciaaŋ kɔa̱c lɔaacdu nyuthni̠ jɛ Nɛɛku. Kuäär /cu nɛy kon; /cu nɛy kon guɔ̱n jiäkni̠ /ciɛ jɛn cääkda. <br><br> Kuär /cu nɛy kon ŋa̱ckɔ jɛ /iɛ jɛn cak nɛy pa̱ny ɛ Ji̠n cakɔ. Kuär ŋa̱ckɔ jɛ Nhial kɛnɛ piny ma̱ni̠ ŋɔaak diaal pa̱ny guɔŋkɛ rɔ Nhiamdu. <br><br> 2. Nhökdu Kuoth käm niɛ Nɛɛku Nhökdu Kuoth nyuthni̠ jɛ Nɛɛku. Kuoth mockɛ kɛ nhök; mockɔ nhök mi̠ ba̱a̱kɔ tiam ni̠ gua̱n jiääkni̠. <br><br> 3. Buɔ̱mdu Kuoth käm niɛ Nɛɛku Buɔ̱mdu Kuoth käm niɛ Nɛɛku. Kuoth mockɔ buɔ̱m; mockɔ buɔ̱m mi̠ ba̱a̱kɔ tiam ni gua̱n jiäkni̠.",
        },
        {
            id: 93,
            author: "Kaŋ Jɔc ŋut",
            title: "93. Kuoth Nhial Nhɔkɛ Gaatkɛ Tin Cɛ Cak",
            category: "Nhök Kuoth",
            lyrics: "1. Kuoth Nhial nhɔkɛ gaatkɛ tin cɛ cak, Nyuthɛ kɛ gɔɔydɛ ni̠ ciaŋ. Nyothɛ nhök kɛnɛ mal mi̠ thiɛlɛ pek, Kuoth Gɔɔydɛ nyoothɛ jɛ ciaŋ. <br><br> Kuoth Nhial nhökɛ Gaatkɛ diaal, Nyuthɛ Gɔɔydɛ Gaatkɛ diaal, Kuoth Gɔɔydɛ nyoothɛ jɛ ciaŋ. <br><br>2. Kuoth Nhial nhɔkɛ gaatkɛ tin cɛ cak, Yopɛ kɛ ni̠ ciaŋ ni̠ ciaŋ, luäk ɛ kɛ kɛ ŋɔani̠ diaal ti̠ ŋuan, Kuoth Gɔɔydɛ nyoothɛ jɛ ciaŋ. <br><br> 3. Kuoth Nhial Nhɔkɛ gaatkɛ tin cɛ cak, Mi̠i̠thɛ kɛ ni̠ ciaŋ ni̠ ciaŋ. Mocɛ kɛ kɛ ŋɔaani̠ diaal ti̠ ŋuan, Kuoth Gɔɔydɛ nyoothɛ jɛ ciaŋ. <br><br> 4. Kuoth Nhial nhɔkɛ gaatkɛ tin cɛ cak, Kɛ ɣöö cɛ Kɔa̱c-lɔaacdɛ nyuɔ̱th. Kɛ ɣöö cɛ Gatdɛ min nhɔkɛ ja̱k, Kuoth Gɔɔydɛ nyoothɛ jɛ ciaŋ.  ",
        },
        {
            id: 94,
            author: "Gatbɛɛl To̠t Guɛ̈k  ",
            title: "94. Ci̠ ɣä Nyuɔ̱th Nhökdu Min",
            category: "Nhök Kuoth",
            lyrics: "1. Ci ɣä nyuɔ̱th Nhökdu min ci rɔ̱ wany,  Nhökdu min /ci̠ rɔ wany; ci̠ jɛ nyuuth kä ɣä. <br><br> Ci Riɛmdu lo̠ny jɔɔ jiath in riew /Ciɛ kuic nɛɛni diaal ɛ kui̠dä. Ci Riɛmdu lo̠ny jɔɔ jiath in riew Ci Riɛmdu lo̠ny jɔɔ jiath. <br><br> 2. Nyuthni ɣä Buaydu ɣän ja̱lä rɛy muɔ̱th, nyuthni̠ Buaydu löö Kuär. A /ci̠ ɣän jäl rɛy muth. <br><br> 3. A liak tëë kɛ Ji Kuoth in rɛl Rɔɔdɛ, A liak tëë Ji̠ täämɛ, Kuoth in rɛl rɔɔdɛ. ",
        },
        {
            id: 95,
            author: "Inta Robi Abu ta Nina",
            title: "95. Ɛ Ji̠n Kuothda kä ɛ Ji̠n Gua̱a̱ra ",
            category: "Puɔth Baaŋ",
            lyrics: "1. Ɛ Ji̠n Kuothda kä ɛ Jin Gua̱a̱ra, ci̠ kɔ ka̱m Gatdu mëë caa ŋap jiath. Kɛ ɣöö Jɛn bɛ duɛɛrkɔ diaal lak jɔ̱ɔ̱r. Ɛ kɔa̱c Lɔacdu bi̠ kɔ naŋ ro̠o̠l Nhial. <br><br> Ni̠ cieŋ Nhial, ni̠ rööl Nhial, ci̠ cieŋ Nhial; ni̠ Nhial, ɛ tɛ̈th lɔac mi̠ di̠i̠t mi̠ ŋa̱thnɛ Jɛ. <br><br> 2. Kɔn kɛ kɔn nɛy ti̠ ci̠ thia̱a̱ŋ kɛ dueer, /ci̠ nɛy ciaaŋ Kuäärädu läth guäthdɛ. Kämni̠ kɔ raar rɛy dueeri̠ ji̠ ɣɔaac, Ɛ kɔa̱c lɔacdu bi̠ kɔ naŋ ro̠o̠l Nhial. <br><br> 3. Kämni̠ nɛy buɔ̱mdu min di̠i̠t Gua̱a̱ra, kɛ ɣöö dee nɛy buɔ̱m gua̱n jiääkni̠ tiam. Kɛ Yiëëdu min rɛl Gɔɔydɛ rɔɔdɛ, kɛ ɣöö derɛ cieŋ rɛy lo̠cni̠kɔ. <br><br> 4. Aliak tee kɛ Ji̠ Kuothda kä Gua̱a̱ra, ci̠ kɔ ka̱m Gatdu mëë ca ŋap jiath.Aliak tee kɛ ji̠ Kuothda Yëcu, ɛ kɔa̱c lɔacdu bi̠ kɔ naŋ ro̠o̠l Nhial.",
        },
        {
            id: 96,
            author: "Shalla Ana Bi Wunisu ",
            title: "96. Cäŋ Mi̠ Ruacä Kɛ Thuk Jaakni̠",
            category: "Nhök",
            lyrics: "1. Cäŋ mi̠ ruacä kɛ thuk Jaakni̠, Ɣan mi̠ ŋa̱a̱thä ŋɔaani̠ diaal, kä mi̠ thiɛlɛ rɛydä nhök Kuɔth Thiɛlɛ ŋä luɔt kä ɛ ɣän baŋ. <br><br> Ɛn nhök Kuɔth, jɛn tëkɛ gɔɔy, Ɛn Ɛn nhök Kuɔth, jɛn thiɛlɛ liak, Ɛn nhök Kuɔth, jɛn thiɛlɛ tiɛɛl. Ɛn nhök Kuɔth jɛn thiɛlɛ dääk. <br><br> 2. Ɣän mi̠ guɔ̱rä pal Luak Kuoth, Kä mi̠ latdä ruaacni̠ Kuɔth, kä mi̠ thiɛlɛ rɛydä nhök Kuɔth Thiɛlɛ ŋä luɔt kä ɛ ɣän baŋ.  <br><br> 3. Mi̠ göörä ɣöö bä yio̠o̠kä thöp, Kɛ ɣöö bä kɛ ka̱m nɛy tin can. Kä mi̠ thiɛlɛ rɛydä nhök Kuɔth Thiɛlɛ ŋä luɔt kä ɛ ɣän baŋ. <br><br> 4. Mi̠ göörä ɣöö bä puɔ̱nydä thöp, Kɔ ɣöö baa jɛ waŋ kɛ maac. kä mi̠ thiɛlɛ rɛydä nhök Kuɔth Thiɛlɛ ŋä luɔt kä ɛ ɣän baŋ.",
        },
        {
            id: 97,
            author: "Allah Weri Nina Sika Bitaak ",
            title: "97. Ɛn Kuoth Cɛ Kɔn Nyuɔ̱th Duɔ̱ɔ̱p",
            category: "Puɔth Baaŋ",
            lyrics: "1. Ɛn Kuoth cɛ kɔn nyuɔ̱th duɔ̱ɔ̱p teekä, banɛ we̱ jɛ walɛ. ŋuɔtkɔ ba̱a̱kɔ ja̱l kɛ Duɔ̱ɔ̱pdu, kɛ ɣöö Ji̠n ti̠i̠ nhiamda; kɛ ɣöö Ji̠n ti̠i̠ nhiamda. <br><br> 2. Aɣ Kuär ba̱a̱ kɔ we̱ duɔ̱ɔ̱p indiɛn, kɛ ɣöö kui̠c nɛy Duɔ̱ɔ̱pdu? Kɔn ŋa̱thkɔ jɛ ɛn ɣöö ti̠i̠ thi̠n, rɛy thaakni̠ diaal ti̠i̠ thi̠n; rɛy thaakni̠ diaal ti̠i̠ thi̠n. <br><br> 3. Banɛ ku we kä Jɛ kɔn diaal kɛ cäŋ ɛmɛ walɛ; kɛ ɣöö /caakɔ Ruacdu dee lo̠k, Ruacdu mingɔaa ɛ thuɔ̱ɔ̱k; Ruacdu min gɔaa ɛ thuɔ̱ɔ̱k. <br><br> 4. Ɛ cäŋɛ duɔ̱ɔ̱r mi̠ dee lɛ ben thiɛlɛ ruac dɔ̱diɛn walɛ. Kɔn / canɛ bi̠lɛ ŋot kɛ wiee, kɛ ɣöö Kuoth ɛ Gääŋdan, kɛ ɣöö Kuoth ɛ Gääŋdan. <br><br> 5. Kɔn ŋa̱cnɛ jɛ wi̠i̠muɔ̱ɔ̱n ɛmɛ banɛ rɔ̱ nhɔk kɔn diaal. Kɛ gua̱th mi̠ tɔt bakɔ we cop, rɛydu ni̠ cieŋ rööl Nhial, Rɛydu ni̠ cieŋ rööl Nhial.",
        },
        {
            id: 98,
            author: "Nina bi Shukuru Rabuna Aleela. ",
            title: "98. Kɔn Banɛ Kuothdan Puany Ɛn Walɛ",
            category: "",
            lyrics: "1. Kɔn banɛ Kuothdan puany bä, ɛn walɛ, Kɛ ɣöö Nhökdɛ kɛnɛ Puɔ̱thdɛ ɛn walɛ cɛ jɛ nyuɔ̱th. Kɔn banɛ Kuothdan puany bä, ɛn walɛ, kɛ ɣöö Nhökdɛ kɛnɛ Puɔ̱thdɛ ɛn walɛ cɛ jɛ nyuɔ̱th. <br><br> Aɣ, ɛn walɛ ɛn Kuoth Nhial tëë rɛydan. I-ma-nu-el, I-ma-nu-ɛl ɛm walɛ tëë rɛydan. Kuoth Nhial ni̠ I-ma-nu-ɛl, ɛn walɛ ɛn Kuoth Nhial tëë reydan.  I-ma-nu-el, I-ma-nu-ɛl ɛn walɛ tëë rɛydan. <br><br> 2. Guaari, maari täämɛ yɛn ani̠? Kɛ ɣöö Kuärani̠ Yɛ̈cu Jɛn pa̱ny cɛ thia̱k bɛ luny jɔk. Damaari̠, nyieemaari̠ täämɛ yɛn a ni̠? Kɛ ɣöö Kuärani̠ Yɛ̈cu Jɛn pa̱ny cɛ thia̱k bɛ luny jɔk. <br><br> Bɛ luny jɔk, ɛn walɛ ɛn Kuoth Nhial tëë rɛydan. Ima-nuel Ima-nuel walɛ en Kuoth Nhial tëë rɛydan. Kuoth Nhial ni Manuel, en walɛ ɛn Kuoth Nhial tëë rɛydan. I-ma-nu-el, I-ma-nu-el ɛn walɛ tëë rɛydan. <br><br> 3. Guaari, kuanɛ tëkdan riali̠kä, Kɛ ɣöö Kuärani̠ Yɛ̈cu Jɛn pa̱ny cɛ thia̱k bɛ luny jɔk. Guaari, kuanɛ tëkdan riali̠kä, Kɛ ɣöö Kuärani̠ Yɛ̈cu Jɛn pa̱ny cɛ thia̱k bɛ luny jɔk. <br><br> Gaatmaari̠, ɛn walɛ ɛn Kuoth Nhial tëë rɛydan. Kuoth Nhial ni̠ Ima-nuel, Ima-nuel ɛn walɛ tëë rɛydan. I-ma-nu-el, en walɛ ɛn Kuoth Nhial tëë rɛydan. Aɣ I-ma-nu-el ɛn walɛ tëë rɛydan.",
        },
        {
            id: 99,
            author: "A.H. 38. Arise, My Soul, Arise ",
            title: "99. Tie̱ydä Jiec Rɔ Woc Dual",
            category: "Puɔth Baaŋ",
            lyrics: "1. Tieydä jiɛc rɔ woc dual in te rɛydu täämɛ, ɛn muc ëë ca näk cɛ jɔɔc nhiam kɔam Kuääradɛ, cuŋɛ nhiam Kɔamdɛ ɛn Rami̠ ci̠ ɣä luɛl kɛ dueer tieydä liak Kuoth Ciöötdɛ ca gɔ̱r rɛy Tetni̠kɛ. <br><br> 2. Jɛn cieŋɛ Nhial lätdɛ kɛ kui̠dä kɛ ɣöö bä kään, kɛ Nhökdɛ cɛ Riɛmdɛ naŋ gua̱a̱th in rɛl rɔɔdɛ, Riɛmdɛ cɛ dör wiecmuɔ̱n diaal kän, Riɛmdɛ cɛ dör wiecmuɔ̱n diaal kän, Kɔac lɔaacdɛ cɛ nyuɔ̱th dör wimuɔ̱n. <br><br> 3. Riɛm ëë ci̠ lo̠o̠ny Bua̱lädɛ kä Käl-bäri̠, Buɔ̱ɔ̱tkɛ kä Käl-bäri̠kɛn la̱ŋkɛ kɛ kui̠dä, wie kɛ i̠ “Päli̠ kɛ i̠kä, wiekɛ i̠ päl i̠ kɛ i̠kä,” A thiɛl ram kɛl mi̠ li̠w kä kɛ.  <br><br> 4. Liŋ Gua̱n palɛ ni̠ ciaŋ ɛn min ca yi̠r kɛ yier, /cɛ Gatdɛ de met pa̱l ruëëc ɛn Ram min do̠raar. Yiëëdä guicɛ ni̠ riɛm Gatdɛ, Yiëëdä guicɛ ni̠ riɛm Gatdɛ, mi̠ nyoothni̠ ɣöö ɛ ɣän raan käänä. <br><br> 5. Kuothdä cɛ maar luɔc thin kɛ riɛm Gatdɛ min gɔaa, Cɛ ɣä ka̱m Gatde kä ci̠ dualä jiɛn kɛɛliw, kɛ tɛ̈th lɔac cä ben Nhiamdu Kuoth Gua̱din liŋ wiedä ber poth ɣä liŋ lulä löö Kuothdä kä Kuärä.",
        },
        {
            id: 100,
            author: "A.H. 100. Great Is Thy Faithfullness ",
            title: "100. ŋa̱thdu Jɛn Gɔaa Ɛ",
            category: "Nhök Kuoth",
            lyrics: "1. ŋa̱thdu jɛn gɔaa ɛ ööɣ Kuoth kä Kuärä, thiɛlɛ tiep mi̠ dee rɔdɛ riet kä Ji̠. /Ci̠ rɔɔdu gɛr kä Nhökdu /cɛ dee met thiɛl. Ci̠ te̱e̱ thi̠ni̠ wal mää cäŋkɛl bi̠ te̱e̱y. <br><br> ŋa̱thdu gɔaa ɛ kɛ ɣä, ŋa̱thdu gɔaa ɛ kɛ ɣä. Run waŋ kɛ run waŋ kɔa̱c lɔaacdu tëë thi̠n. ŋɔaani̠ diaal tin göörä ci̠ kɛ ŋun kɛn diaal. ŋa̱thdu gɔaa ɛ kɛ ɣä Kuothdä Kuärä. <br><br> 2. Gua̱th ruëël kɛnɛ gua̱th jiɔm, kɛ mäy kiɛ gua̱th ŋër; Ceŋ, pay, kɛ kuɛl ni̠ gua̱th in te kɛ nhial. Mäth kɛn kɛ nyin cäkä tin nyuɔthkɛ Gɔɔydu. Kɛ ŋa̱thdu min thiɛl pek kɔa̱c lɔaac kɛn nhök. <br><br> 3. Päli̠ nɛy i̠kä kɛ dueer kä ɛ Malu te̱ thi̠n; Nhökdu min te̱e̱ thi̠n ɛ tɛ̈th lɔac kä ɛ nyuuth. Lua̱ŋdu tëë thi̠n, walɛ ŋa̱thdu bɛ tee thi̠n, Poth ŋɔaani̠kä diaal ni̠ kä bathdɔɔri̠",
        },
        {
            id: 101,
            author: "A.H. 495. There Is A Place of Quit Rest",
            title: "101.Te Kɔn Kɛ Gua̱th Ciɛŋä mi̠ Bit",
            category: "Cieŋ Kuɔth",
            lyrics: "1. Te kɔn kɛ gua̱th ciɛŋä mi̠ bit te̱ni̠ kut Kuɔth. Ɛ gua̱th mi̠ /ci̠ duer de me̱t cie̱ŋ te̱ni̠ kut Kuoth. <br><br> ÖÖɣ Ji̠thɛth luëël dueeri̠kɔ Jɛn bëë ni̠ kut Kuɔth. Luäk nɛy tin liɛpkɛ bendu, Jɛn bëëni̠ kut Kuoth. <br><br> 2. .Te kɔn kɛ gua̱th ciɛŋä mi̠ gɔaa mi̠ te̱ni̠ kut Kuɔth. Gua̱th in banɛ jëk kɛ kuäär thi̠n, te̱ni̠ kut Kuoth.<br><br> 3. .Te kɔn kɛ gua̱th ciɛŋä mi̠ lɔr te̱ni̠ kut Kuɔth. Ɛ gua̱th tɛthä lɔac mi̠ te̱ni̠ kut Kuoth."
        },
        {
            id: 102,
            author: "Bol Thɔat Kusth",
            title: "102. Kuoth ɛ Nhök",
            category: "Nhök Kuoth",
            lyrics: "1. Yɛn gaat buɔyä kuanɛ rɔ̱ nhɔk kɛ ɣöö nhök bëë kä Kuoth, kɛ ɣöö ram nhɔk naath diethɛ Kuoth kɛ ɣöö Kuoth ɛ jɛn nhök. <br><br> Kuoth ɛ nhök, Kuoth ɛ nhök, kɛn nɛy diaal tin nyuɔthkɛ ni̠ nhök Kuoth. Kɛ kɛn gaat Kuɔth kɛ ɣöö Kuoth ɛ nhök nhök ɛ pek ŋutä kä kumɛ dueer diaal piny. (Bi̠ gɔɔydɛ kula ŋu mi̠ lar raanɛ i̠ nhɔkɛ Kuoth kä ŋotɛ lo̠kɛ gaatman? Jɛn ŋotɛ rɛy muɔ̱th.) Jɛn ŋotɛ rɛy muɔ̱th kä kui̠cɛ Kuoth kɛ kɛ ɣöö Kuoth ɛ nhök. <br><br> 2. /Cuarɛ ɣɔw ɛ jiääk ɛmɛ nhɔk kiɛ ŋɔaani̠ tin te̱ rɛy ɣɔaa, mi̠ nhɔk ran ɣɔw ɛmɛ /ci̠ nhök Kuɔth lɛ ŋotkɛ mi̠ tëë rɛydɛ. <br><br> 3. Mi̠n di̠i̠tni̠ jɛn kä ti̠ diaal ɛ ɣöö nhɔak nɛ rɔ̱, nhɔak nɛ rɔ̱, kɛ nhök mi̠ /ci̠ bi̠ thuuk kɛ ɣöö, nhök kumɛ duer ti̠ ŋuan piny."
        },
        {
            id: 103,
            author: "A.H 528 A Shelter in the Time of Storm",
            title: "103.Kä Kuoth In Päm Banɛ rɔ̱, Lua̱k Jɛ",
            category: "Kään",
            lyrics: "1. Kä Kuoth in päm banɛ rɔ̱ luäk jɛ, ɛ ji̠n la gääŋda gua̱th rikni̠. Ga̱a̱ŋdu ciëŋä gua̱th mi̠ bɛc-bɛc, ɛ ji̠n la gääŋda gua̱th rikni̠. <br><br> Päm ni̠ bum-bum, rɛy muɔ̱n mi̠ kööt. Tiep mi̠ kɔ̱c rɛy maac mi̠ pɛt. ɛ ji̠n la gääŋda gua̱th in wa̱a̱ kɔ thi̠n. Ɛ ji̠n la gääŋda gua̱th rikni̠. <br><br> 2. Ɛ ji̠n la tiepda kä gääŋda, ɛ ji̠n la gääŋda gua̱th rikni̠. Thiɛlɛ dual mi̠ dee be̱n kä ɣä, ɛ ji̠n la gääŋda gua̱th rikni̠. <br><br> 3. Cäŋ mi̠ te nyɔc mi̠ di̠i̠t nhiamda, ɛ ji̠n la gääŋda gua̱th rikni̠. Ba̱a̱kɔ rɔ̱ bar kä Kuoth in di̠i̠t, ɛ ji̠n la gääŋda gua̱th rikni̠. <br><br> 4. Ji̠n Kuoth in päm, kä kään in gɔaa, ɛ ji̠n la gääŋda gua̱th rikni̠. Bi̠ ji̠n a luäk, thia̱kni̠ kɛ kɔ, ɛ ji̠n la gääŋda gua̱th rikni̠."
        },
        {
            id: 104,
            author: "AH. 537 He Leadeth Me! O Blessed Thought",
            title: "104. Jɛn Bo̠thɛ ɣä! Kɛ ŋäc Mi̠ Di̠i̠t",
            category: "Kään",
            lyrics: "1. Jɛn bo̠thɛ ɣä, kɛ ŋäc mi̠ di̠i̠t ööɣ riet cieŋ rööl nhial bum kɛn ɣä. Tin diaal tin bä la̱t ɛn täämɛ, ɛ Kuoth nhial ɛ jɛn ba̱th ɣä mɔ. <br><br> Jɛn bo̠thɛ ɣä, Jɛn bo̠thɛ ɣä, ɛ Kuoth nhial ɛ Jɛn bo̠thɛ ɣä mɔ. Nɛɛkɛ tin guur jɛ bä te thi̠n rɛy tetni̠kɛ Jɛn bo̠thɛ ɣä. <br><br> 2. La ɣän ɛ te̱ rɛy jiɛth kä lɔac mi̠ cä dueerkä tim rɛy kakä. Mi̠ ta̱a̱ rikä rɛy bäpdiit rɛy tetni̠kɛ Jɛn bo̠thɛ ɣä. <br><br> 3. Öɣ Kuäär bä ji̠ la̱r tɛ̈th lɔacdä thiɛlɛ diɛw-diɛwni̠ ti̠ bä lat, cäŋ mi̠ cä ti̠ ŋuan jek ɛ bɛc, ɛ Kuothdä ɛ jɛn böth ɣä mɔ. <br><br>4. Mi̠ wa̱a̱ la̱tdä we thuk wi̠i̠muɔ̱n ɛ puɔ̱th baaŋdɛ mi̠ wa̱a̱ tiem. Mi̠ ci̠ maŋ ɣä kum /cän bi̠ dual, rɛy Jɔr-dɛn cɛ ɣä kɔn bo̠th."
        },
        {
            id: 105,
            author: "Bol Thɔɔt Kuɔth",
            title: "105. Yɛn Tin Nhɔakɛ Kuoth",
            category: "Nhök Kuoth",
            lyrics: "1. Yɛn tin nhɔakɛ Kuoth, luɔ̱thɛ jɛ kä puanyɛ jɛ kɛ ɣöö ci̠ gua̱th luɔ̱kdɛ thia̱k. Mi̠n bɛ luk ni̠ ɣɔɔdɛ, ci̠ thaakdɛ ku cop täämɛ kɛ bendɛ min rɛwdɛ ɛn kuär ro̠o̠l nhial. <br><br> Yɛn tin nhɔakɛ jɛ kietnɛ, puanyɛ jɛ ɛn ram in ci nhial kɛnɛ piny cak, mäni̠ bääp-diitni̠ kɛnɛ tin te̱ rɛydɛ. 2. A lo̠ckun /ci diɛr, ŋa̱thɛ Kuoth kä ŋa̱thɛ ɣä bä te̱ rɛy cieŋ gua̱r kɛ duël ti̠ ŋuan, Kä mi̠ /ciɛ jɛn i̠nɔ, dëë jɛ la̱r yɛ ɛn ɣöö, wa̱a̱kɛ kɛ ɣöö bä gua̱a̱th wä rial i̠kä kɛ kui̠dun. <br><br> 3. Kɔn ka̱pnɛ ŋa̱thdan kɛɛl kɛnɛ lat cio̠tkädɛ, ɛn kuär ni̠ Yëcu gua̱a̱th in kui̠c ɣɔwɛ, bi̠ bendɛ cetkɛ ben cuëër kɛ ɣöö bëë kɛ wäärdär /cɛ jɛ a laarɛ."
        },
        {
            id: 106,
            author: "A.H. 529 Under His Wings",
            title: "106. Piny Gɔ̱ɔ̱kni̠ Kuɔth",
            category: "Kään",
            lyrics: "1. Piny gɔ̱ɔ̱k Kuɔth, ɣän cieŋä kɛ jɛ kɛɛl cäŋ ci̠ wäär rɔ rep kä ci̠ thul ku di̠t. ŋotɛ ŋa̱thä jɛ ŋa̱cä jɛ bɛ ɣä kän, jɛn kuär cɛ ɣä kän kä ɛ ɣän duŋdɛ. <br><br> Piny gɔ̱ɔ̱k Kuɔth, piny gɔ̱ɔ̱kni̠ Kuɔth rɛy nho̠kädɛ ruaacɛ ɣä. Piny gɔ̱ɔ̱k Kuɔth tieydä te jɛ kɛɛl, mäni̠ cäŋkɛl te jɛ kɛɛl. <br><br> 2. Piny gɔ̱ɔ̱k Kuɔth, ɣän rami̠ te rikä kɛ ɣöö lɔcdä go̠o̠rɛ loc nyuɔɔnikɛ, wicmuɔ̱n ɛmɛ cäŋ thiɛlɛ mi de ɣä ben jaa gɔaa. jɛn ɣä a bumɛ kä cɛ ɣä thuŋ poth. <br><br> 3. Piny gɔ̱ɔ̱k Kuɔth, tɛ̈thlɔaacdä jɛn di̠tdɛ bä rɔ tɔa̱w jɛ mäni̠ ci̠ rik diaal thuɔ̱k. Ko̠tdä kä gääŋdä thiɛlɛ riɛk mi de ɣä jek. lɔa̱ŋä rɛy Ji̠thɛth cä kään mä cäŋkɛl."
        },
        {
            id: 107,
            author: "A.H 334 I know I love Thee Better, Lord",
            title: "107. Oɣ Kuär, ŋa̱cä Jɛ i̠ Nhɔakä Ji̠",
            category: "Nhök Kuoth",
            lyrics: "1. Öɣ kuär ŋa̱cä jɛ i̠ nhɔakä ji̠, lenyɛ tɛ̈thlɔac wiecmuɔ̱n, kä ci̠ ɣä ka̱m malu löö kuäär, mi̠ thiɛlɛ mi̠ dee ɣä wany. <br><br> Cäŋ ɛ tha̱ŋdɛ /ka̱nɛ luäŋ kɛ lär, nhökdu kɛnɛ puɔ̱thdu cäŋ ɛ tha̱ŋdɛ /ka̱nɛ luäŋ kɛ lär, riɛmdɛ cɛ duer kä lak. <br><br> 2. ŋa̱cä jɛ i̠ ci̠ bendu thia̱k, mi̠ /ci̠ mɔa ŋäc wi̠i̠muɔ̱n, kä mi̠n gɔaa ni̠ jɛn ɛ ji̠n kuär, thiɛlɛ mi̠ dee ji̠ cop. <br><br> 3. Ji̠n ci̠ tɛ̈th lɔac la̱th rɛy lɔacdä, kɛ ɣöö bi̠ lɔcdä tɛɛth. Mi̠ thiɛli̠ nhökdu /cän dee tëk, dee lɔcdä tɛ̈th lɔac bath. <br><br> 4. Öɣ käändä min gɔaa ɛ duŋdä, dee gɔɔydu pa̱a̱r kɛ ŋueen. Mi̠ dëë tëk kɛ tɛ̈th lɔacdu pa̱ny, dee ja̱l kɛ ji̠ wi̠i̠muɔ̱n."
        },
        {
            id: 108,
            author: "Wäl Tɔ̱rpuɔ̱t Liɛth",
            title: "108. Kuär Ni̠ Kuoth Cɛ Lua̱ŋdɛ Nyuɔ̱th",
            category: "Puɔth Baaŋ",
            lyrics: "1. Kuär ni̠ Kuoth cɛ lua̱ŋdɛ nyuɔ̱ɔ̱th kɛ Nowa, ɛn Cääk nhial in di̠i̠t a liak te̱ kɛ jɛ I̠ nɔnɔ. <br><br> Baa kɔn diaal kän kɛ ŋa̱th mi̠ ce̱tkɛ ŋa̱th Nowa, Öɣ gaatmaari̠ puanynɛ Cääk kɛ diit rɛy luthä. Baa kɔn diaal kän kɛ ŋa̱th mi̠ ce̱tkɛ ŋa̱th Nowa, Öɣ nyieemaari̠ puanynɛ Cääk kɛ diit I̠ nɔnɔ. <br><br> 2. Puɔ̱th Baaŋdɛ cɛ ŋun kɛ Ma-tha-yɛ, ɛn mat ruac in jɔak cɛ thuk kɛ Riɛmdɛ. <br><br> 3. Cäŋ guutdä baa tɛ̈thlɔac kä nɛɛ Kri̠tho, tin liɛpkɛ ni̠ jɔac in rɛwdɛ kɛ wak kaaŋä."
        },
        {
            id: 109,
            author: "Tut Gatwec Da̱k",
            title: "109. Liakɛ Gɔɔy Puɔnyädɛ Ɛn Kuoth",
            category: "Liak Kuoth",
            lyrics: "1. Liakɛ gɔɔy Puɔnyädɛ ɛn Kuoth, liakɛ Jɛ yɛn diaal yɛn tin cɛ cak. Nhial kɛnɛ piny nyoth kɛn gɔɔy Kuɔthdiɛn, kietɛ dit puɔnyä mi̠ rɛl gɔɔydɛ rɔ. <br><br> Ci̠ Kuoth ŋɔaani̠ diaal cak rɛy ɣɔaa ti̠ baa Gɔɔydɛ nyoth ɣɔaa, tin liakɛ Jɛ, tin lar jɛ tin nyuɔth kɛ gɔɔy Kuɔthdiɛn. Ci̠ Kuoth kɛ cak kɛ ɣöö baa Gɔɔydɛ lat rɛy wi̠i̠muɔ̱ɔ̱n. Cɛ ran cak kɛ Cätdɛ bi̠ raan ɛ pal wi̠i̠muɔ̱ɔ̱n. <br><br> 2. Liake gɔɔy Puɔnyädɛ ɛn Kuoth, cɛŋ kɛnɛ pay kietdɛ latdɛ gɔɔy puɔnyä. Kuɛl buaydiɛn nyoothkɛn gɔɔy Kuothdiɛn, kiɛtdɛ dit puɔnyä mi̠ ɛrl gɔɔydɛ rɔ. <br><br> 3. Liake gɔɔy Puɔnyädɛ ɛn Kuoth, rɛc yi̠ëri̠ kietɛ latɛ gɔɔy puɔnyä. Juaac kɛnɛ jiɛn nyoothkɛn gɔɔy Kuothdiɛn, kiɛtdɛ dit puɔnyä mi̠ ɛrl gɔɔydɛ rɔ. <br><br> 4. Liake gɔɔy Puɔnyädɛ ɛn Kuoth, yɛn yi̠ër diaal kietɛ latɛ gɔɔy puɔnyä. Diit, ley, kɛ muɔɔl-piɛny jiɛn nyoothkɛn gɔɔy Kuothdiɛn, kiɛtdɛ dit puɔnyä mi̠ ɛrl gɔɔydɛ rɔ."
        },
        {
            id: 110,
            author: "We Praise Thee O Lord",
            title: "110. A Puɔny Te Kɛ Kuoth",
            category: "Liak Kuoth",
            lyrics: "1. A puɔny te kɛ Kuoth, kɛ ɣöö cɛ Gatdɛ ka̱m kɔn, cɛ li̠w wi̠i̠ jiath mi̠ riew kɛ ɣöö bi̠ kɔn diaal kän. <br><br> A-le-lu-lya, a liak te Ji̠, A-le-lu-lya, A-men. A-le-lu-lya, a liak te Ji̠, A-le-lu-lya, Ku nɛy jakä gɔaa. <br><br> 2. A puɔny te kɛ Kuoth, kɛ ɣöö cɛ ka̱m Yiëëdɛ, cɛ kɔn woc kä muth cɛ kɔn nööŋ kɛ duɔ̱ɔ̱p buɔ̱yä. <br><br> 3. Liak kɛnɛ tëth lɔac; ba jɛ ka̱m Yëcu Kuray, kɛ Riɛmdɛ min rɛl gɔɔydɛ rɔ cɛ kɔn jaa buɔy. <br><br> 4. iak kɛnɛ tëth lɔac; ba jɛ ka̱m Kua̱rni̠ Kuoth, kɛ ɣöö cɛ kɔn ka̱m Gatdɛ in kɛl kärɔadɛ."
        },
        {
            id: 111,
            author: "Nina Kulu Shabaab Libisu Ingiil",
            title: "111. Kɔn Diaal ŋuɛ̈tni̠ Kuɔth Nhial",
            category: "Liak Kuoth",
            lyrics: "1. Kɔn diaal ŋuɛ̈tni̠ Kuɔth Nhial, La̱thnɛ Ruac Kuɔth; Kä banɛ lat wi̠i̠muɔ̱ɔ̱n ɛmɛ. <br><br> Kɔn diaal banɛ Jɛ puany; A-le-lu-ya. banɛ Jɛ puany kɛ diit; a-le-lu-ya. Kɔn banɛ tëk jek; Tëkdɛ ɛn Kuoth Nhial. <br><br> 2. Kɔn diaal ki̠ri̠ciini̠, La̱thnɛ Ruac Kuɔth; Kä banɛ lat wi̠i̠muɔ̱ɔ̱n ɛmɛ. <br><br> 3. Kä yɛn gua̱ari̠. Mää yɛn maari̠. ŋa̱thnɛ Yëcu; ɛn Kri̠tho. <br><br> 4. A-le, A-le-lu-ya, A liak te̱ Kuoth, Kän puany nɛ Jɛ, Ɛn Kuär Yëcu."
        },
        {
            id: 112,
            author: "A.H 565. For the beauty of the world",
            title: "112. Kɛ Kui̠ Gɔɔykä Muɔ̱ɔ̱n Ɛmɛ",
            category: "Gɔɔy Kuoth",
            lyrics: "1. Kɛ kui̠ gɔɔykä muɔ̱ɔ̱n ɛmɛ, Kɛ kui̠ gɔɔykä mi̠ te̱ nhial. Kɛ kui̠nho̠kä däpkädan, Nhial kɛnɛ piny go̠l kɔn diaal piny. Kuray Kuothda, jiëckɔ rɔ Ji̠, Cäŋ mi̠ gɔaa mi̠ palkɔ Ji̠. <br><br> 2. Kɛ kui̠ gɔɔykä thaak ɛmɛ, Kɛ cäŋ däär amäni̠ wäär. Pääm, kɛ kuer, kɛ jiɛn, kɛ juac, Ceŋ, kɛnɛ, pay, kɛ kuɛl buɔykɛ. Kuray Kuothda, jiëckɔ rɔ Ji̠, Cäŋ mi̠ gɔaa mi̠ palkɔ Ji̠. <br><br> 3. Kɛ tëth lɔac jieth kɛnɛ waŋ, Kɛnɛ lɔc kɛ ca̱r mi̠ gɔaa. Kɛ tëth lɔac gua̱th Palädu, Kɛ kui̠ cärä kɛ lär mi̠ gɔaa. Kuray Kuothda, jiëckɔ rɔ Ji̠ Cäŋ mi̠ gɔaa mi̠ palkɔ Ji̠. <br><br> 4. Kɛ tëth lɔaac rɛy ci̠ëŋ kärɔa, dämaari̠, nyieemaari̠, diëëth, gaat. Mäthni̠ piɛny kɛ mäthni̠ nhial, gaat ɣɔaa diaal carkɛ mi̠ gɔaa. Kuray Kuothda, jieckɔ rɔ Ji̠, cäŋ mi̠ gɔaa mi̠ palkɔ Ji̠. <br><br> 5. Muc mi̠ thuɔ̱k mi̠ be kä Ji̠, riɛŋkɔ kɔɔr muckäda mi̠ gɔaa. Gaŋ kɛn yie̱y tin bä kä Ji̠, juaac piɛny diaal kɛ ti̠ te̱e̱ nhial. Kuray Kuothda, jiëckɔ rɔ Ji̠, cäŋ mi̠ gɔaa mi̠ palkɔ Ji̠."
        },
        {
            id: 113,
            author: "Tuŋ Mɛ̈ɛ̈t Bukjiöök",
            title: "113. Ɣän Mi̠ Thiɛlɛ ɣä Nhök Kuɔth",
            category: "Nhök Kuoth",
            lyrics: "1. Ɣän mi̠ thiɛlɛ ɣä nhök Kuɔth, /ci̠ ɣän rɔ dee luäŋ, kɛ ɣöö bä la̱tdu la̱t Kämni̠ ɣä nhök Kuɔth. <br><br> Ɣän mi̠ thiɛlɛ ɣä nhök Kuɔth, /ci̠ ɣän rɔ dee luäŋ, kɛ ɣöö bä la̱tdu la̱t Käm ni̠ ɣä nhök Kuɔth. <br><br> 2. Ɣän mi̠ thiɛlɛ ɣä nhök Kuɔth, /ci̠ ɣän rɔ dee luäŋ, kɛ ɣöö bä la̱tdu la̱t. Käm ni̠ ɣä tëth lɔaac. <br><br> 3. Ɣän mi̠ thiɛlɛ ɣä puaal pua̱a̱ny, /ci̠ ɣän rɔ dee luäŋ, kɛ ɣöö bä la̱tdu la̱t Kämni̠ ɣä puaal pua̱a̱ny. <br><br> 4. än mi̠ thiɛlɛ ɣä ŋa̱th, /ci̠ ɣän rɔ dee luäŋ, kɛ ɣöö bä la̱tdu la̱t Kämni̠ ɣä ŋa̱th."
        },
        {
            id: 114,
            author: "A.H 2 All Creatures of our God and King",
            title: "114. Nyin Ca̱k Diaal kɛ Nyin Kuɔth Kua̱ran",
            category: "Liak Kuoth",
            lyrics: "1. Nyin ca̱k diaal kɛ nyin Kuɔth Kua̱ran, Kapnɛ jiööthkun nhial kä kietnɛ; i̠ A-lv-lu-ya; A-lv-lu-ya! Öɣ ceŋ in lɛp kä riaaw buaydɛ, kɛ cɛk in bo̠r mä pay in lɛp. <br><br> Öɣ, kietnɛ! Öɣ, kietnɛ! A-lɛ-lu-ya, A-lɛ-lu-ya, A-lv-lu-ya! <br><br> 2. Öɣ jiam in put mä jiɔm tin kɔ̱c; Öɣ pua̱r tin gɛɛr jiam tin te̱ nhial. Öɣ, kietnɛ! Alvlu-ya! Öɣ runwaŋ ki̠tni̠ kɛ tɛ̈thlɔaac, Öɣ ɛ buay thiaŋ go̠o̠r jɔw bɛ kiet. <br><br> 3. Öɣ pi̠ diaal tin lo̠ny, gɔw kä wic, Kietdɛ diit puɔnyä Kuäär bɛɛ liŋ, Öɣ, puɔ̱ɔ̱t ti̠ diaal, Jakni̠ pa̱nykɔ kä bum kɛ buay. <br><br> 4. Ɛ nyin cäkä diaal poth Cääkdiɛn, Palɛ Jɛ ɛ cia rɔ̱ piny. Öɣ kietnɛ, Alɛluya! Öɣ puanynɛ Gua̱n kä puanynɛ Gat, Kɛɛl kɛ Yiëë in gɔaa, Kuoth in Diɔ̱k."
        },
        {
            id: 115,
            author: "A.H. 92. This Is My Father’s World",
            title: "115. Ɣɔw Ɛmɛ ɛ Duŋ Gua̱a̱r",
            category: "Liak Kuoth",
            lyrics: "1. Ɣɔw ɛmɛ ɛ duŋ Gua̱a̱r, kä ji̠thkä liŋ kɛni̠, diit tin gɔw kɛ nyin cäkä diaal; ɛn jɔw nho̠kä min gɔaa. Ɣɔw ɛmɛ ɛ duŋ Gua̱a̱r, carä ni̠ tin cɛ cak, Pääm, jiɛn kɛ pua̱r mani̠ Bääpdiitni̠, kɛ tetdɛ cɛ kɛn diaal la̱t. <br><br> 2. Ɣɔw ɛmɛ ɛ duŋ Gua̱a̱r,diit biɛli̠ tin cɛ cak, kɛ buay ruɔ̱n waŋ tuali̠ tin gɔw Kɛn diaal puany kɛ Cääkdiɛn. Ɣɔw ɛmɛ ɛ duŋ Gua̱r, jɔcɛ kä tin cɛ cak. Kɛ rɛy juaacni̠ bä liɛŋä jɔwdɛ Ruacɛ kɛ ɣä guääthni̠ diaal. <br><br> 3. Ɣɔw ɛmɛ ɛ duŋ Gua̱a̱r, laa tiɛmä jɛ ni̠ ciaŋ, cäŋ bi̠ jiääk rep ɛlɔ̱ŋ. ŋotɛ Kuärä ɛ Jɛn Kuoth. Ɣɔw ɛmɛ ɛ duŋ Gua̱r, ɛ ŋu bi̠ lɔcdä jiɛth, Käändä ɛ jɛn Kuär kä Nhial ku kiet. Ruecdɛ ɛ tɛ̈thlɔac wi̠i̠-muɔ̱n."
        },
        {
            id: 116,
            author: "Unknown",
            title: "116. Wi̠c Muɔ̱n Cɛ Thia̱ŋ Kɛ Gaakni̠",
            category: "Liak Kuoth",
            lyrics: "1. Wi̠c-muɔ̱n cɛ thia̱ŋ kɛ (gaakni̠ ti gɔw, (x3) Wi̠c-muɔ̱n cɛ thia̱ŋ kɛ gaakni̠ ti gɔw, (Ɛ Kuoth cak kɛ mɔ, x3) Wi̠c-muɔ̱n cɛ thia̱ŋ kɛ gaakni̠ ti gɔw Ɛ Kuoth cak kɛ mɔ. <br><br> 2. Wuɔ̱th jiɛn ci kɛ thia̱ŋ kɛ (diit ti̠ ki̠t, (x3) Wuɔ̱th jiɛn ci kɛ thia̱ŋ kɛ diit ti̠ ki̠t, (Ɛ Kuoth cak kɛ mɔ, x3) Wi̠c-muɔ̱n cɛ thia̱ŋ kɛ gaakni̠ ti gɔw Ɛ Kuoth cak kɛ mɔ. Wuɔ̱th jiɛn ci kɛ thia̱ŋ kɛ diit ti̠ ki̠t, Ɛ Kuoth cak kɛ mɔ. <br><br> 3. Rɛy yiëëri̠ ci kɛ thia̱ŋ kɛ (rɛc ti̠ ket, (x3) Rɛy yiëëri̠ ci kɛ thia̱ŋ kɛ rɛc ti̠ ket, (Ɛ Kuoth cak kɛ mɔ, x3) Rɛy yiëëri̠ ci kɛ thia̱ŋ kɛ rɛc ti̠ ket, Ɛ Kuoth cak kɛ mɔ. <br><br> 4. Rɛy lɔaacdä cɛ kɛ thia̱ŋ kɛ (tɛ̈th mi di̠i̠t, (x3) Rɛy lɔaacdä cɛ kɛ thia̱ŋ kɛ tɛ̈th mi di̠i̠t, (Ɛ Kuoth cak kɛ mɔ, x3) Rɛy lɔaacdä cɛ kɛ thia̱ŋ kɛ tɛ̈th mi di̠i̠t, Ɛ Kuoth cak kɛ mɔ."
        },
        {
            id: 117,
            author: "Dëc Gatwec Lɛw",
            title: "117. Lua̱ŋ Nhial Kɛnɛ Piny",
            category: "Buɔm Kuoth",
            lyrics: "Lua̱ŋ nhial kɛnɛ piny tɛkɛ Kuäär, in te̱ wi̠i̠ ŋɔaani̠ diaal. Caa ŋɔaani̠ cak kɛ Jɛ kɛ Gɔɔydɛ, kɛnɛ Nhökdɛ. <br><br> Ɣɔɔdu nɛmɛ cak ɛ ji̠n Kuäärä a cäŋ dee jiak ɣä go̠l kä thɔɔl waŋdä nën, ɣän ŋa̱a̱thä ɣöö ɛ ji̠n gäädä, a cäŋ dee jiäk ɣä go̠l kä thɔɔl waŋdä nën, bä ŋäth ni̠ ɣöö ɛ Ji̠n gääŋdä. <br><br> 2. Thuɔ̱l kɛnɛ jɔam ɣɔaa yɔ̱k kɛnɛ kɔ, luäkɔ aɣ Kuäär bum kɔ. A Yiëëdu min thuɔ̱k comkɔ kɛ Ruacdu ni̠kɛ Nhökdu. <br><br> 3. Kuäär gɔɔy Rueecädu min luki̠ kɔ, luk kɔ kɛ kɔ̱a̱c lɔaacdu, tit ci̠öötkɔ nhiam kɔaam Kuäärädu, aɣ Käändä ni̠kɛ Nhökdu."
        },
        {
            id: 118,
            author: "Kaŋ Jɔc ŋut",
            title: "118. Kuoth Kɛ Nhökdɛ Cɛ Ɣɔw Cak",
            category: "Nhök Kuoth",
            lyrics: "Kuoth kɛ nhökdɛ cɛ ɣɔw cak, cakɛ jɛ kɛ ɣöö di̠i̠t Nhökdɛ, cɛ ti̠ ga̱a̱ykɛ naath cak wi̠i̠muɔ̱n. Ti̠ gääy nëndiɛn naath cɛ kɛ cak wi̠i̠ muɔ̱n kɛ Nhökdɛ. <br><br> Kuoth cɛ ɣɔw cak kɛ Nhökdɛ, Kuoth cɛ ŋɔak diaal cak wi̠i̠muɔ̱n tin /ca pekdiɛn ŋäc, cɛ kɛ cak wi̠i̠muɔ̱n kɛ Nhökdɛ. Kuoth cɛ raan cak kɛ Nhökdɛ cɛ ŋɔaak diaal cak kɛ kui̠ raan tin gɔw kɛ kui̠c raan, cɛ kɛ cak wi̠i̠muɔ̱n kɛ Nhökdɛ. <br><br> 2. Kuoth cɛ yiër cak cɛ rɛc cak, cak ɛ kɛ kɛ ɣöö di̠i̠t Nhökdɛ, tin cɛ cak wi̠i̠muɔ̱n cakɛ kɛ. Kɛ ɣöö di̠i̠t nhökdɛ kɛ ŋɔaani̠ tin cɛ cak wi̠i̠muɔ̱n. <br><br> 3. Kuoth kɛ Nhökdɛ cɛ raan cak, cakɛ jɛ kɛ ɣöö di̠i̠t Nhökdɛ, cɛ ŋɔak diaal rialikä kɛ kui̠ raan. Thiɛlɛ mi̠ te diw kä ŋɔaani̠ tin cɛ cak kɛ kui̠ raan <br><br> 4. A-le-lu-ya kɛ Nhökdu, Nhökdu min thuɔ̱k ci̠ jɛ nyuɔ̱th, kɛ ɣöö ci̠ ŋɔaak diaal cak wi̠i̠muɔ̱n. La̱rä ji̠ tɛ̈th-lɔaac kɛ kui̠c gɔɔyä ŋɔaani̠ diaal tin ci̠ cak."
        },
        {
            id: 119,
            author: "A.H. 24. Every Star Shall Sing a Carol",
            title: "119. Bi̠ kuɛli̠ diaal dit puɔnyä kɛt",
            category: "Liak Kuoth",
            lyrics: "1. Bi̠ kuɛli̠ diaal dit puɔnyä kɛt; amäni̠ nyin cäkä diaal, biaa palnɛ Kuäär rööl nhial in di̠i̠t kɛ thuk diaal tin deri̠ ŋa̱c <br><br> Kuoth jaa nhial, raan tëë piny ŋäcɛ jɛ ɛn ɣöö rɛlɛ rɔ. <br><br> 2. Mëë ci̠ Kuäär rööl nhial be̱n piny, caa Jɛ tɔ̱a̱a̱c rɛy diëny wal ɣɔ̱ɔ̱k. ta̱a̱ pua̱a̱nydɛ jɛn rele rɔɔdɛ, amäni̠ Da̱pdɛ rɛlɛ rɔ. <br><br> 3. Ɛ kuɛli̠ diaal amäni̠ piny. A kɛn diaal rɔ̱ɔ̱diɛn goŋ nhiam Kuɔth. Kɛ ciööt diaal tin ŋäc kɛn ɛ."
        },
        {
            id: 120,
            author: "Kaŋ Jɔc ŋut",
            title: "120. Ɛ Kuoth ɛ Mëë Cak Ɣɔw",
            category: "Liak Kuoth",
            lyrics: "1. Ɛ Kuoth ɛ mëë cak ɣɔw, ɛ Kuoth ɛ mëë cak ɣɔw mi̠ thiɛli̠ Jɛn thiɛlɛ ɣɔw, ɛ Jɛn ɛ mëë cak ɣɔw mi̠ thiɛli̠ Jɛn thiɛlɛ mi̠ dëë cak. <br><br> Ɣɔw ɛmɛ kɛɛliw cakɛ Kuoth cakɛ Kuoth, ɣɔw ɛmɛ kɛɛliw cakɛ Kuoth cakɛ Kuoth, ɛ Jɛn ɛ mëë cak ɣɔw mi̠ thiɛli̠ Jɛn thiɛlɛ mi̠ dëë cak. <br><br> 2. Ɛ Kuoth ɛ mëë cak raan, ɛ Kuoth ɛ mëë cak raan mi̠ thiɛli̠ Jɛn thiɛlɛ raan, ɛ Jɛn ɛ mëë cak raan mi̠ thiɛli̠ Jɛn thiɛlɛ mi̠ dëë cak. <br><br> 3. Ɛ Kuoth ɛ mëë cak ley, ɛ Kuoth ɛ mëë cak ley mi̠ thiɛli̠ Jɛn thiɛlɛ ley, ɛ Jɛn ɛ mëë cak ley mi̠ thiɛli̠ Jɛn thiɛlɛ mi̠ dëë cak."
        },
        {
            id: 121,
            author: "A.H. 86 How Great Thou Art",
            title: "121. ÖÖɣ Kuär, Kuothdä",
            category: "Ben Yëcu",
            lyrics: "1. ÖÖɣ Kuär Kuothdä, cä te̱ rɛy gääcä mi̠ di̠i̠t, kɛ guecdä kɛ tin ci̠ cak kɛ Tetdu. Cua kuɛli̠ nɛn, kä cua̱ ma̱a̱r nhial mi̠ di̠i̠t liŋ, Lua̱ŋdu min di̠i̠t nyɔth jɛ ɛ tin ci̠ cak. <br><br> Tie̱ydä ki̠tni̠, Käändä, Luääkdä kɛ diit. Pääri̠ kɛ ŋa, pääri̠ kɛ ŋa, tie̱ydä ki̠tni̠, Käändä, Luääkdä kɛ diit. Pääri̠ kɛ ŋa, pääri̠ kɛ ŋa. <br><br> 2. Mëë cä ruɔ̱p tin di̠t jek ɛ tɛth lo̠ckiɛn, Cua̱ gäac, kä cua̱ diit Nhial liŋ ki̠tkɛ Wuɔ̱thni̠ jiɛn.Mëë cä guic piny wi̠i̠ Pa̱a̱m ni̠ kä biɛɛdɛ, cua puɔ̱l piɛny nɛn kä cua jiɔm mi̠ kɔ̱c jek. <br><br> 3. Kä mëë cä ca̱r ɛn ɣöö /kɛn Kuth Gatdɛ pën, cuɛ ja̱k kɛ ɣöö bɛ li̠w ni̠ kɛ kui̠dä. Ni̠ wi̠i̠ jiaath ŋa̱p, cuɛ ɣa̱a̱ckä kap kɛ tëth lɔac, cu riɛmdɛ lo̠ny kɛ ɣöö bɛ dueerkä woc. <br><br> 4. Mi̠ we Ji̠thɛth we ben kɛ rɔal mi̠ di̠i̠t nhiaal bɛ ɣä naŋ cieŋ, bi̠ tɛ̈th lɔaacdä rɔ̱ŋ. Bä rɔɔdä goŋ kɛ piny mi te̱ kɛ puɔny, kä bä jɛ lat i̠ Kuoth pääri̠ kɛ ŋa."
        },
        {
            id: 122,
            author: "Nyɛgo̠o̠ny Gatwec",
            title: "122. Ɛ Ji̠n Ɛ Nëë Cak Ɣɔw",
            category: "Liak Kuoth",
            lyrics: "Ɛ Ji̠n ɛ nëë cak ɣɔw; kɛ kuɛl, kɛ ceŋ, kɛ pay, rec yiër, kɛ diit, kɛ ley tin thiäŋ rɛy ɣɔaa. <br><br> 1. Jɔci̠ rɛydiɛn; Jɔci̠ rɛydiɛn, kɛn tin ci̠ cak päny, rɛy Ɣɔaadu. Nhökdu, Buɔ̱mdu, Gɔɔy Kɔ̱ac Lɔacdu. Lätku diaal nyuɔth kɛ Ji̠. <br><br> 2. Bi̠ ŋa Ji̠ kui̠c; Bi̠ ŋa Ji̠ kui̠c, kɛ ɣöö ci̠ rɔ nyoth Rɛy Ruacdu; Bay-bol ɛ Yi̠ëëdu kä ɛ Ruacdu. Lätku diaal nyuɔth kɛ Ji̠. <br><br> 3. Bi̠ nɛy Ji̠ ŋic; Bi̠ nɛy Ji̠ ŋic, kɛ gɔɔy Puɔnyädu rɛy puäri̠, A-le-lu-ya a̱ɣ Kuär mal ben. Latku diaal nyuɔth kɛ Ji̠."
        },
        {
            id: 123,
            author: "Alela Yom Jadit",
            title: "123. Ɛn Walɛ Ɛ Cäŋ mi̠ Gɔaa",
            category: "Kään",
            lyrics: "Ɛn walɛ cäŋ mi̠ gɔaa, ɣän /cän bi lɛl loc jɔc waŋdä te ni nhiam, ni nhiam dɛ ɛn Kuothdä. <br><br> 1. Ɣän cä ka̱n ku jek, ɣän /cän bi met loc jɔk, ɣän bä we ni nhiam. Ɣän bä we ni kut Kuoth. <br><br> 2. Ɛn walɛ ɛ cäŋ mi̠ gɔaa, ci̠ ɣän a ram mi̠ gɔaa, ɣän bä we ni nhiam. Ɣän bä we ni kut Kuoth. <br><br> 3. Kä ji̠n bä ji̠n dämaar, /cu lɛn loc rɛy ɣɔaa. Guic ni nhiamdu, guic ni kut Kuoth nhial. <br><br> 4. Kä ji̠n bä ji̠n dämaar, guic ni̠ Jɛn Kuothdu. Jakni tëkdu kä tëk, mi̠ te kɛ ŋa̱th mi gɔaa."
        },
        {
            id: 124,
            author: "Gatbɛɛl To̠t Guɛ̈k",
            title: "124. Tuali̠ Diaal Gɔwkɛ",
            category: "Liak Kuoth",
            lyrics: "Tuali diaal gɔ̱wkɛ te kɛ biɛɛl ti̠ ŋuan, gaakni̠ diaal gɔ̱wkɛ laa kɛn rɔ̱ɔ̱diɛn ɛ lɛp. Gua̱th in ci̠ ceŋ lɛ̈p laa kɛn rɔ̱ɔ̱diɛn ɛ lɛp, kɛ jɛn guäth ɛmɔ laa nɛ̈nä Yëcu. <br><br> Guäth in ci̠ ɣɔw rueel guäth in go̠o̠r nhiaal këër, gua̱th in nyok kɛ jiɛn guäth in do̠ny kɛ juaac tin gɔ̱w thäri̠-jiɛn; kɛnɛ rɛy yiëri̠tin tekɛ rɛc, laa Yëcu Nhökdɛ a nyooth kɛ gɔy tin cɛ ku cak. <br><br> 2. Kä mi lɛ̈n ɣä we ni rɛy ruɔ̱ɔ̱p in gɔ̱aa, laa nɛ̈nä jiɛn diaal tin gɔ̱w rɛy ruɔ̱ɔ̱p, kɛnɛ juaac tin nɛ̈ɛ̈nä gɔɔy Kuoth kɛ tin cɛ ku cak. <br><br> 3. Kä mi guicä ŋɔ̱aak tin ci̠ ku cak, liak kɛn ni̠ ciaŋ kɛ gɔɔy wutädiɛn, ci̠kɛ cak kɛ ɣöö bi̠ lɔc raan co tɛɛth. A liak tee kɛ ji mäni cäŋ guutä."
        },
        {
            id: 125,
            author: "Holy Spirit Faithful Guide",
            title: "125. Yiëë Kuoth In Gɔaa Gääŋ Mi̠ Thuɔ̱k",
            category: "Yiëë Kuoth",
            lyrics: "1. Yiëë Kuoth in gɔaa gääŋ mi̠ thuɔ̱k mi̠ thia̱k kɛ raan kɔar Yëcu. Bo̠th nɛy naŋ nɛy kä la̱tda rɛy jo̠la däär dɔar mi̠ di̠i̠t. Tɛth lɔcda mi̠ ci̠ nɛy cuuc, kɛ lieŋda kɛ jɔw mi̠ gɔaa. Cio̠tni̠ määth i̠ “Bër gatdä, gurri̠ Ɣä bä ji̠ naŋ cie̱ŋ.” <br><br> 2. Määth mi̠ te̱e̱ thi̠n ɛ määth mi̠ thuɔ̱k, mi̠ go̠o̠r ɣöö bɛ Luekdɛ thöp. /Cu nɛy bäny dual kɛnɛ diw, rɛy ja̱la rɛy muɔ̱th mi̠ di̠i̠t. Mi̠ ci̠ muaŋ ku kɛ̈c kɛ cio̠tni̠ määth i̠ “Bër gatdä, gurri̠ Ɣä bä ji̠ naŋ cie̱ŋ.” <br><br> 3. Gua̱th in we ni̠n la̱tda thuɔ̱k, liip nɛy ni̠ luɔ̱nyda min gɔaa, Duŋda pal kä guic nɛy nhial, ga̱ar nɛy mi̠ ca ci̠öötkɔ gɔ̱r nhial. Rɛy muɔ̱th mi̠ ci̠kɔ göl-piny, luääkda ɛni̠ riɛm Yëcu. Cio̠tni̠ määth i̠ “Bër gatdä, gurri̠ Ɣä bä ji̠ naŋ cie̱ŋ.”"
        },
        {
            id: 126,
            author: "A.H. 195. There Shall Be Showers of Blessing",
            title: "126. Bɛ Te̱e̱ Nhiëël Puthä Ti̠ Bi̠ Dɛ̈m",
            category: "Puɔth",
            lyrics: "1. Bɛ te̱e̱ nhiëël puthä ti̠ bi̠ dɛ̈m,Ɛ ruac mi̠ ca lar kɛ nhök, Kɛ gua̱a̱th in baa kɔn ja gɔaa thi̠n, Tin ba̱̱k ɛ Kään ni̠ Nhial. <br><br> Nhiëël puthä ti̠ bi̠ dɛ̈m, Nhiëël puthä dɛ tin görnɛ, Kɔa̱c lɔacdɛ min ci̠ kɔn diaal go̠l, Kä liɛpnɛ jɛ bɛ kɔn poth. <br><br> 2. Bɛ te̱e̱ nhiëël puthä ti̠ bi̠ dɛ̈m, Wal diaal tin gɔw ba rɔ̱ jiɛc, Wi̠i̠ päämni̠ kɛnɛ rɛy lo̠o̠li̠, Mi̠ wa jɔw Nhial in di̠i̠t liŋ. <br><br> 3. Bɛ te̱e̱ nhiëël puthä ti̠ bi̠ dɛ̈m, Aɣ Kuär jäkni̠ kɔ i̠kä. Jak ni̠ kɔ kä gɔw ɛn täämɛ, Ku rieetku ja thuɔ̱k kä kɔ. <br><br> 4. Nhiëël puthä ti̠ bi̠ dɛ̈m, Aɣ duŋ dɛm kɛ ɛn wlɛ. Min lat nɛy dueerkɔ ni̠ nhiam Kuɔth, Kä cɔɔl nɛy ni̠ Ji̠thɛth pa̱ny."
        },
        {
            id: 127,
            author: "A.H 264 O For That Flame of Living Fire",
            title: "127. Ö ɛ jɛn Bo̠l Maac Teekä ëë Ci̠ Kɔŋ Dɔap",
            category: "Puɔth Baaŋ",
            lyrics: "1. Ö ɛ jɛn bo̠l maac teekä ëë, Ci̠ kɔŋ dɔap kä jaak tëë wal. Cu tieyni̠kiɛn go̠rni̠ ro̠o̠l nhial, Rɛy cucädiɛn cu lo̠ckiɛn buɔ̱m. <br><br> 2. Ɛn Yiëë ɛmɔ jaa ni̠kä Kuäär, Mëë ci̠ A-bɛ-ram jakä Duŋdɛ. Ɛ jɛn ëë jak lɔc Puɔl kä pɛt, Kɛ lua̱ŋ Kuothä, cu dupkɛ buɔ̱m. <br><br> 3. Ɛn Yiëë ɛmɔ rɛy ri̠cni̠ diaal, Läätɛ nhökdu kɛnɛ dupku. Ɛ jɛn ëë mɛr ca̱r I-caa-yaa, Kä ɛ jɛn Yiëë ëë te Dëë-bi̠d. <br><br> 4. Ciɛ lia̱ŋdu Kuoth ɛn min bumni̠ jɛn? /Ciɛ jɛn ëë mooc I̠-li-ya bɔ̱m?Ɛ jɛn ëë ci̠ dɔap nhiam Mu-thɛ, Kä ɛ jɛn ëë jak I-yob kä bum. <br><br> 5. Ö timä Kuäär Ram min do̠raar, Locni̠ La̱tdu kɛnɛ Nhökdu thi̠n. Bi̠ nɛy lo̠ckɔ ka̱m ji̠ löö Kuäär, Bi̠ Yi̠ëë in rɛlrɔ cu te̱e̱ kɔ."
        },
        {
            id: 128,
            author: "Come, Holy Ghost, Our Heart Inspire",
            title: "128. Bër Yiëë in Di̠i̠t, Kuoth Bër",
            category: "Yiëë Kuoth",
            lyrics: "1. Bër yiëë in di̠i̠t bër, bi̠ diethkɔ ben ŋɔth, kä mɛrkɔ kɛ mac mi̠ ci̠ nööŋ cieŋ nhial. Ɛ ji̠n yiëë in di̠i̠t Kuoth mi̠ laa yi̠i̠ri̠ naath, kä laa mooci̠ kɔ kɛ muc da̱ŋ bärɔw. <br><br> 2. Yie̱e̱r puthä mi̠ ci̠ nööŋ ni̠ cieŋ Kuoth ni̠ nhial, ɛ lui̠k, kä ɛ tëk, kä ɛ nhök mi̠ di̠i̠t. Mockɔ kɛ buay Kuoth mi̠ laa tey kä thiɛl pek. Kä woc diɛɛr nyiinkɔ ti̠ /caa nën de̱e̱ lua̱ŋ. <br><br> 3. Yi̠r nhiamdä mi̠ lɔw kä luek lɔcdä mi̠ jiɛth, kɛ puɔ̱thdu min di̠i̠t laa moci̠ kɔ. Joc ji̠ tɛ̈ra mockɔ kɛ mal ciëŋni̠kɔ. Mi̠ yieeni̠ naath thiɛlɛ jiääk mi̠ dee ben. <br><br> 4. Nyuuthni̠ kɔ, ba̱a̱kɔ gua̱n ŋa̱c kɛ gatdɛ min di̠i̠t, kɛ ji̠n diɔ̱k in di̠i̠t lapi̠ Kuoth ni̠ wal. Baa Kuoth palni̠ wal mäni̠ ɣɔw mi̠ thiɛl pek, ɛ baap naath diaal ti̠ baa dit ɛmɛ kit. <br><br> 5. Bi̠ wuɔ̱t te̱kɛ ji̠ kɛ kui̠ gɔɔyä mɔ duŋdu. Ji̠n gua̱n kɛ gat kɛnɛ yiëë in di̠i̠t Kuothda. A-a-amen."
        },
        {
            id: 129,
            author: "SIS All over the world",
            title: "129. Kɛn diaal Rɛy Ɣɔaa Ɛmɛ",
            category: "Yiëë Kuoth",
            lyrics: "1. Kɛn diaal rɛy ɣɔaa ɛmɛ, a yiëë Kuɔth jäl rɛydiɛn. Kɛn diaal rɛy ɣɔaa ɛmɛ, ce̱t mëë ci̠ gök ɛ lar i̠ bɛ te̱ thi̠n. Kɛn diaal rɛy ɣɔaa ɛmɛ, ɛ buɔ̱mdɛ mëë cɛ nyuɔ̱ɔ̱th kɛ yiëëdɛ min gɔaa ɛn Kuäär, kɛ ɣöö pi̠i̠ kum kɛn ni̠ yiër. <br><br> 2. Cie̱ŋni̠ rɛy lɔaacdä, a yiëë Kuɔth jäl rɛydiɛn. Cie̱ŋ rɛy lɔaacdä, ce̱t mëë ci̠ gök ɛ lar i̠ bɛ te̱ thi̠n. Cie̱ŋni̠ rɛy lɔaacdä, kɛ buɔ̱mdɛ mëë cɛ nyuɔ̱ɔ̱th kɛ yiëëdɛ mi̠n gɔaa ɛn kuäär, kɛ ɣöö pi̠i̠ kum kɛn ni̠ yiër. <br><br> 3. Kɛn diaal rɛy duëël Kuɔth, a yiëë Kuɔth jäl rɛydiɛn. Kɛn diaal rɛy duëël Kuɔth, ce̱t mëë ci̠ gök ɛ lar i̠ bɛ te̱ thi̠n. Kɛn diaal rɛy duëël Kuɔth, kɛ buɔ̱mdɛ mëë cɛ nyuɔ̱ɔ̱th kɛ yiëëdɛ mi̠n gɔaa ɛn kuäär, kɛ ɣöö pi̠i̠ kum kɛn ni̠ yiër. <br><br> 4. Kɛn diaal rɛy Thu-dan, a yiëë Kuɔth jäl rɛydiɛn. Kɛn diaal rɛy Thu-dan, ce̱t mëë ci̠ gök ɛ lar i̠ bɛ te̱ thi̠n. Kɛn diaal rɛy Thu-dan, kɛ buɔ̱mdɛ mëë cɛ nyuɔ̱ɔ̱th kɛ yiëëdɛ mi̠n gɔaa ɛn kuäär, kɛ ɣöö pi̠i̠ lo̠k yɛn ruac gua̱a̱r ni̠ nhial?"
        },
        {
            id: 130,
            author: "Mu-thɛ Lual Ruɛ̈y",
            title: "130. Kuoth Cɛ Lar Rɛy Bay-bol",
            category: "kään",
            lyrics: "1. Kuoth cɛ lar rɛy Bay-bol yop tëkdu kɛ piethdu rɛy Yecu kä ɛn gua̱a̱th ɛmɔ, mi̠ ci̠ Yecu päl i̠kä käändu, Jɛn caa jɛ dap rɛy ciëŋ Kuäärä Kuɔth bi̠ ŋɔaak diaal ti̠ go̠o̠ri̠ käp teekä kur-ciinä. <br><br> Kɛ ɣöö yiëë Kuɔth ɛ duŋ di̠i̠t ɛmɛ, buɔ̱m ɛmɛ lenyɛ ŋɔak diaal tëë Kuoth, kan nyiathnɛ lät gua̱ndan ka̱pnɛ ruɔ̱ɔ̱t, kɛ dhie̱e̱l. Tëë ɣɔ̱ɔ̱ni̠, tëë ɣɔ̱ɔ̱ni̠ ti̠ ɣɔ̱ankɛ ci̠ Kuoth ɛ lar i̠, Ɣɔ̱ɔ̱n gɔy ɛ duŋ Kuɔth. Kuääran caa böth dɔɔr caa Ji̠thɛth ɣɔam, caa Ji̠thɛth ɣɔam ro̠o̠l Gɛ̈-lɛ-lii. Ɣɔ̱ɔ̱nɛ yiëë, te̱e̱ naath kɛ ɣɔ̱ɔ̱ni̠ lät cuŋni̠ ɣɔ̱a̱nkɛ, thuɔ̱k mi̠ gääy naath /caa dee ɣɔam. <br><br> 2. Canɛ ka̱n jek kɛ Kuɔth ɛ nho̠o̠kdan, ɛ luääkdan, ɛ te̱e̱kdan, kä ɛ kɛ̱̈ɛ̱̈ Dëë-bi̠d. päm teekä ŋun gua̱nɛ kɛ thuɔ̱k ëë kämɛ A-bɛ-ram cu mäni̠ ben Dëë-bi̠d cuɛ we̱e̱ wää kar gankɛ. Nhök ɛmɛ lenyɛ ŋɔak diaal cu gat Kuɔth nhial ɛ thöp, gat cuɛ col dueer wi̠i̠ jiaath ŋa̱a̱p wi̠i̠ jiaath ŋa̱a̱p in riew Käl-bä-ri̠. <br><br> 3. Kuäär Yecu cɛ cie̱ŋ kɛɛl kɛ ley dɔar kɛ ni̠n ti̠ti̠ jiɛn ŋuan caa buath dɔɔr ɛ yiëë Kuɔth wëë ɣɔam. Jɛn cie̱ŋɛ kɛɛl kɛ ley dɔaar thiɛlɛ duɔ̱ɔ̱r kɛl mi̠ derɛ guëër rɛy leeyni̠ kɛn diaal. <br><br> 4. ŋa̱cnɛ jɛ i̠ gua̱a̱th ben kɛ ciaaŋ ɣɔaa gua̱n jiäkni̠ nyoonɛ ɣɔw cɛ te̱e̱ gua̱a̱th rɛy ɣɔaam mɛ̈ɛ̈tdɛ nɛy tin ŋa̱thkɛ Yecu kuäär kɛ gɔɔydiɛn woocɛ thuɔ̱k lɔɔcdiɛn."
        },
        {
            id: 131,
            author: "A.H. 337. Redeemed! How I Love to Proclaim",
            title: "131. Ca̱a̱ Kän! Dëë Nho̠k Kuɔth Nyoth",
            category: "",
            lyrics: "1. Ca̱a̱ kän dëë nhök Kuɔth nyoth kä dëë lar, ca̱a̱ kän kɛ riɛm Ruath dɛ̈ɛ̈l in gɔaa. Ca̱a̱ kän kɛ kɔa̱c lɔaacdɛ min thiɛl pek, ɛ ɣän gatdɛ mäni̠ cäŋkɛl. <br><br> Ca̱a̱ kän; ca̱a̱ kän, ca̱a̱ kän kɛ riɛm ruath dɛ̈ɛ̈l in gɔaa. Ca̱a̱ kän, ca̱a̱ kän. <br><br> 2. Ca̱a̱ kän, kä tɛth lɔcdä rɛy Ji̠thɛth; Thiɛlɛ thok mi̠ dëë lar tɛ̈th lɔaac. ŋa̱cä jɛ buaydɛ tëë kɛɛl kɛ ɣä; tëë ɣä rɛy ciɛɛŋädä kɛɛliw. <br><br> 3. Ɣän caarä ni̠ käänädä min ca poth; Caarä ni̠ jɛ rɛy ni̠ni̠ diaal. Bä kiet kɛ ɣöö /ci̠ ɣän dëë met biet; nhökdɛ ɛjɛn dit in bä kiit. <br><br> 4. ŋa̱cä jɛ bä nɛn rɛy gɔɔyädɛ; ɛn kuär in tɛth lɔcdä ŋutkɛ. Jɛn ram min kuɛɛn ka̱a̱thkä kɛ nhökdɛ; kä mocɛ ɣä ditdɛ rɛy wa̱r."
        },
        {
            id: 132,
            author: "Bol Thɔɔt Kuɔth",
            title: "132. Ɛ Puɔ̱th Gɔɔyä Mi̠ Ni̠ndi̠?",
            category: "",
            lyrics: "1. Ɛ puɔ̱th gɔɔyä kɛnɛ nhök mi̠ ni̠ndi̠? tin lät Kuoth kɛ kä kämɛ gaatkɛ. Kɛ ɣöö ɛn Kuoth thiɛlɛ nhökdɛ päär, Kuoth kɛ gɔɔydɛ cɛ Yecu ka̱m kɔn. <br><br> Ci̠ Yecu tëkdɛ thöp (x3) kɛ ka̱n nɛɛni̠ diaal, Ci Yecu tëkdɛ thöp. <br><br> 2. Ɛn Yecu cɛ rɔ thöp kɛ gua̱thdan, kɛ ɣöö baa kɛn dueer diaal cuɔl puɔ̱nydɛ. Caa jɛ cɔɔl i̠ gua̱n dueeri̠ kɛ kui̠dan, Kuoth kɛ gɔɔydɛ cɛ Yecu ka̱m kɔn. <br><br> 3. Thiɛlɛ ka̱n dɔ̱ɔ̱diɛn kiɛ ciöt mi̠ dɔ̱diɛn ɛni̠ jɛn Yecu la kään ɣɔaa ɔ. Ni̠kɛ kui̠ dueri kɔn cuɛ tëkdɛ thöp,Kuoth kɛ gɔɔydɛ cɛ Yecu ka̱m kɔn."
        },
        {
            id: 133,
            author: "Come, Ye Sinner Lost And Lonely",
            title: "133. Bia Yɛn Ji Dueeri̠ ti̠ Thiɛl ŋa̱th",
            category: "",
            lyrics: "1. Bia yɛn ji dueeri̠ ti̠ thiɛl ŋa̱th, riɛm Yecu bɛ yɛ jaa lɔr. jɛn cɛ ji dueeri̠ kän rɛydun, cɛ ɣä kän ɣän ram thiɛl cuɔ̱ŋ. <br><br> ŋa̱cä jɛ ɣän ŋa̱cä jɛ. riɛm Ji̠thɛth jɛn jakɛ ji̠ dueeri̠ kä gɔaa.ŋa̱cä jɛ ɣän ŋa̱cä jɛ. riɛm Ji̠thɛth jɛn jakɛ ji̠ dueeri̠ kä gɔaa.<br><br> 2. Kämɛ lua̱ŋdɛ nɛy tin thiɛl ŋa̱th, kä bo̠thɛ kɛ rɛy päämni̠. Cu kɛn pi̠i̠ go̠o̠r gua̱th mi̠ kööt, cuɛ wäär jakä cäŋ mi̠ gɔaa. <br><br> 3. Rɛy ɣɔ̱ɔ̱ni̠ jɛn tëë kɛɛl kɛ ji̠, tëë kɛ lua̱ŋ kɛ ka̱ndu rɛy maac. Bɛ ji̠ bo̠th rɛy duɔ̱pdɛ min gɔaa, kä bɛ ji̠ ka̱m puɔ̱th ni ciaŋ. <br><br> 4. Rɛy teekädu jɛn bɛ ji̠ yop, bɛ ji̠ naŋ kä tëk mi̠ thiɛl pek, Cäŋ mi̠ dee ɣɔw ji̠ naŋ rɛy maac, bɛ mi̠ gɔaa la̱t kɛ kui̠du."
        },
        {
            id: 134,
            author: "A.H. 184. I Hear The Savior Say",
            title: "134. Ɣän Cä Jɔw Kua̱rä Liŋ",
            category: "",
            lyrics: "1. Ɣän cä jɔw kua̱rä liŋ, cɛ lar i̠, kuiy buɔ̱mdu. ji̠n gat mi̠ nyuän pali̠, Bi̠ nyinku jek kɛn diaal. <br><br> Ji̠thɛth cɛ kɔn kɔk, bä ka̱m min te̱ ɣä. Dueerkä tithkɛ ce̱tkɛ riɛm, bɛ kɛ jakä buɔy ce̱t ruur. <br><br> 2. Kuärä ɛn täämɛ cä, lua̱ŋdu jek jɛn di̠i̠tdɛ. Jɛn ram min woc rikä, kä jakɛ lɔc kä tɛth. <br><br> 3. Thiɛlɛ mi̠ gɔaa kä ɣä, Mi̠ dee puɔ̱th jekɛ jɛ. Ɣän bä rɔ riali̠kä, Kɛ riɛm ruath dɛ̈ɛ̈l in gɔaa. <br><br> 4. Mi̠ wa̱a̱ wä cop nhiamdɛ, bä cuɔ̱ŋ nhiamdɛ ɛ rɔ̱ŋ. Bä muckä ka̱m jɛ ɛn kuär, bä rɔ yuɔr piny ciök ni̠kɛ."
        },
        {
            id: 135,
            author: "A.H 520 A Wonderful Savior Is Jesus My Lord",
            title: "135. Ɛ Käändä Min Gääy Naath Ni̠ Yecu",
            category: "kään",
            lyrics: "1. Ɛ käändä min gääy naath ni̠ Yecu kuärä, Ɛ käändä min gääy naath ɛlɔ̱ŋ. Laa tɔ̱ɔ̱wɛ tieydä ni̠ rɛy kɔ̱kä pa̱a̱m, gua̱th in jëkä tɛ̈thlɔacdä thi̠n. <br><br> Laa tɔ̱ɔ̱wɛ tieydä ni̠ rɛy kɔ̱kä pa̱a̱m, min tiepdɛ mun rɛ̈w mi̠ kööt. Laa tɔ̱ɔ̱wɛ tieydä ni̠ rɛy lueŋ nho̠kädɛ, jɛn kumɛ ɣä piny kɛ nhökɛ. <br><nr> 2. Ɛ käändä min gääy naath ni̠ Yecu kuärä, cɛ ɣa̱a̱cdä min thiɛk woc kä ɣä. Ɣän cuɔ̱ŋä kä jɛ kä thiɛlɛ mi̠ bi̠ ɣä woc, Jɛn mocɛ ɣä buɔ̱m gua̱thni̠ diaal. <br><br> 3. Kɛ puth ti̠ thiɛl pek ti̠ laa kämɛ nɛɛkɛ, cɛ thia̱a̱ŋ kɛ ta̱a̱ Kuɔth ni̠ kɛɛliw. kɛ tɛ̈thlɔacdä bä kiet a liak te̱e̱ Kuoth, kɛ ɣöö cɛ ɣä moc kɛ lueel dueeri̠. <br><br> 4. Mi̠ waa ɣä kum kɛ buaydɛ naŋkɛ ɣä nhial, wa̱a̱ jëk kɛ kuär ni̠ rɛy pua̱a̱ri̠. Käändä mi̠ thiɛl pek nhökdɛ min gääy naath, bä kiet kɛ bathdɔɔri̠ ni̠ nhial."
        },
        {
            id: 136,
            author: "A.H 281 I Gave My Life for Thee",
            title: "136. Cä Tëkdä Thöp Kɛ Kuidun",
            category: "",
            lyrics: "1. Cä tëkdä thöp kɛ kui̠dun riɛmdä in gɔaa cä thöp, kɛ ɣöö bä yɛ kɔk, kä bä yɛ kän rɛy lieth in bëë, cä tëkdä thöp kɛ kui̠dun ɛ ŋu cia ka̱m ɣä mɔ, cä tëkdä thöp kɛ kui̠dun ɛ ŋu cia ka̱m ɣä mɔ. <br><br> 2. Rɛy duëël gua̱r in buɔy ro̠o̠l nhial, puɔnydä cɛ kɔm gölpiny, cä ben wicmuɔ̱n kɛ kui muɔ̱th kä rɔa rɛy jiɛth kä lɔac, (Cä gɔɔy puɔnyädä ba̱ny ro̠l nhial, ɛŋu bia ba̱ny pinyɔ.) <br><br> 3. Cä cuc ɛlɔ̱ŋ kɛ kui̠dun /ci̠ lɛp ɛ dee me̱t lar, cä cuuc ɛ bɛc ɛlɔ̱ŋ kɛ ɣöö bä yɛ kän kä maac. (Ɣän cä yɛ lätkä mi̠ duŋ gɔaa, ɛ ŋu bia lät kä ɣä mɔ.)"
        },
        {
            id: 137,
            author: "Dëc Gatwec Lɛw",
            title: "137. Pi̠i̠ Ti̠ No̠o̠ŋ Ka̱n Teekä",
            category: "",
            lyrics: "1. Pi̠i̠ ti̠ no̠o̠ŋ ka̱n teekä kɛ pi̠ Yecu kuär ram mi̠ go̠o̠rkɛ a bëë bɛ ben math, kɛ pi̠ tin noŋ naath tëk kɛnɛ lɔ̱a̱ŋ, pi̠ ti̠ kɔ̱c kä käm kɛ naath tëk. <br><br> Pi̠i̠ teekä lo̠nykɛ kɛ tëk bee kɛ nhial nhial kɔam kuäärä, pi̠i̠ lo̠nykɛ kɛ tëk. <br><br> 2. Ɣän göörä pi̠ teekä ti̠ lo̠nykɛ tëk kuärä mocä pi̠i̠ni̠ku tin gɔw, määthni̠ ɣä kuär ɣän göörä kɛ, pi̠i̠ku gɔwkɛ ɣän göörä kɛ. <br><br> 3. Bo̠thä rɛy ruaacni̠ku tin buɔ̱m kɛ ɣä, ɣän la̱ŋä ji̠ käm ni̠ ɣä ruaacni̠ku, ɣän göörä kɛ, aɣ kuäär käm ni̠ ɣä pɛ̈l, bä cie̱ŋ rɛydu kä ŋi̠i̠cni̠ ɣä."
        },
        {
            id: 138,
            author: "GB 197 Come every soul by sin oppressed",
            title: "138.Biaa Yɛn Tieep Diaal ɛ Yɔ̱ɔ̱ŋ Jiäkni̠",
            category: "",
            lyrics: "1. Biaa yɛn tieep diaal ɛ yɔ̱ɔ̱ŋ jiääkni̠, kuär mi̠ di̠i̠t a kɛ kɔ̱a̱clɔaac. Kä jɛn bɛ yɛ moc lɔ̱a̱ŋ mi̠ gɔaa, kɛ nhök ruaacni̠kɛ kä yɛ. <br><br> Liakɛ jɛ kärɔa,liakɛ jɛ kärɔa. Malɛ jɛ liak kärɔa. Bɛ yɛ ben luääk, Bɛ yɛ ben luääk. Bɛ yɛ mal luääk yɛn diaal. <br><br> 2. Kä riɛm Yecu mi̠ ci̠ lo̠o̠ny dɔɔr, bɛ kɔn ka̱m puɔ̱th mi̠ gɔaa. Yɛn yuɔrɛ rɔ̱ riɛmdɛ min tith, mi̠ lak lo̠c nath ɛ bi̠ nath ɛ bi̠ buay. <br><br> 3. Jɛn Yecu ɛ waŋ kä ɛ duɔ̱ɔ̱p, duɔ̱ɔ̱p in bo̠thkɔn gua̱a̱th lɔ̱ŋä. Malɛ jɛ nhɔk kä /cuarɛ gal, kä jɛn bɛ yɛ poth ni̠ di̠t. <br><br> 4. Bia kä ma̱tdɛ rɔ̱ kä ri̠c in gɔaa, kä wanɛ thi̠n kɛ wuɔ̱t. Banɛ piny in gɔaa cieŋ nhial we ciɛŋ, gua̱a̱th in cuar liɛm lɔaacdɛ rɔ."
        },
        {
            id: 139,
            author: "A.H 282  I hear thy welcome voice",
            title: "139. Liɛŋä Jɔwdu Min Gɔaa",
            category: "Liak Kuoth",
            lyrics: "1. Liɛŋä jɔwdu min gɔaa, cɔlɛ ɣä kä kuäär mi̠ di̠i̠t. Bi̠ lɔcdä lak kɛ riɛm mi̠ gɔaa, ci̠ lo̠o̠ny kä Käl-bäri̠. <br><br> A mal wä kuäär mi̠ di̠i̠t, Wa̱a̱ kä ji̠ täämɛ. Lak ɣä jakni̠ä buɔy kɛ riɛm, Ci̠ lo̠o̠ny kä Käl-bäri̠. <br><br> 2. Ɛ ji̠n Yecu cɔɔl ɣä mɔ, kɛ nhök mi̠ gɔaa kä liak. Kɛ ŋa̱th mi̠ gɔaa kä thia̱a̱ŋ, täämɛ mäni̠ cäŋ nhial. <br><br> 3. Ɛ ji̠n Yecu läät in di̠i̠t, poth jaak kä bum lɔcdä. Kɛ gua̱a̱th ëë cieŋ kɛ jiäk kɛn dial, kuɛ thiäŋ kɛ puɔ̱th rep ɛ. <br><br> 4. Ɛ ji̠n Yecu läät lo̠ckɔ, kɛ nhök kä bi̠kɛ lɔar. Kɛn tëë caa lat bi̠ kaa waŋni̠, Mi̠ thieecɛ kɛ kɛ nhök. <br><br> 5. Kɔn diaal liaknɛ riɛmdɛ, kɔn diaal liaknɛ nhökdɛ. Liak ji̠ kɛ puɔ̱th kɛ gɔyku diaal, tin tho̠p kuray kuäär kɛ."
        },
        {
            id: 140,
            author: "Bol Thɔɔt Kuɔth",
            title: "140.Thiɛlɛ Kuär Dɔ̱diɛn Ce̱t Ji̠thɛth",
            category: "",
            lyrics: "1. Thiɛlɛ kuäär dɔ̱diɛn ce̱t Ji̠thɛth,thiɛlɛ raan, thiɛlɛ raan. Thiɛlɛ kuäär dɔ̱diɛn ce̱t Ji̠thɛth, thiɛlɛ ram mi̠ ce̱tkɛ jɛ. <br><br> . Thiɛlɛ kuäär mi̠ dɔ̱diɛn, mi̠ ce̱tkɛ jɛ. . Thiɛlɛ kuäär mi̠ dɔ̱diɛn, mi̠ ce̱tkɛ jɛ. Thiɛlɛ ram mi̠ päär kɛ jɛ. Thiɛlɛ ram mi̠ päär kɛ jɛ. <br><br> 2. Thiɛlɛ kään dɔ̱diɛn ce̱t Ji̠thɛth,thiɛlɛ raan, thiɛlɛ raan. Thiɛlɛ kään dɔ̱diɛn ce̱t Ji̠thɛth, thiɛlɛ ram mi̠ ce̱tkɛ jɛ. <br><br> . Thiɛlɛ kään mi̠ dɔ̱diɛn, mi̠ ce̱tkɛ jɛ. . Thiɛlɛ kään mi̠ dɔ̱diɛn, mi̠ ce̱tkɛ jɛ. Thiɛlɛ ram mi̠ päär kɛ jɛ. Thiɛlɛ ram mi̠ päär kɛ jɛ. <br><br> 3. Thiɛlɛ luääk dɔ̱diɛn ce̱t Ji̠thɛth,thiɛlɛ raan, thiɛlɛ raan. Thiɛlɛ luääk dɔ̱diɛn ce̱t Ji̠thɛth, thiɛlɛ ram mi̠ ce̱tkɛ jɛ. <br><br> . Thiɛlɛ luääk mi̠ dɔ̱diɛn, mi̠ ce̱tkɛ jɛ. . Thiɛlɛ luääk mi̠ dɔ̱diɛn, mi̠ ce̱tkɛ jɛ. Thiɛlɛ ram mi̠ päär kɛ jɛ. Thiɛlɛ ram mi̠ päär kɛ jɛ. <br><br> 4.Thiɛlɛ bo̠o̠th dɔ̱diɛn ce̱t Ji̠thɛth, thiɛlɛ raan, thiɛlɛ raan. Thiɛlɛ bo̠o̠th dɔ̱diɛn ce̱t Ji̠thɛth, thiɛlɛ ram mi̠ ce̱tkɛ jɛ. <br><br> . Thiɛlɛ bo̠o̠th mi̠ dɔ̱diɛn, mi̠ ce̱tkɛ jɛ. . Thiɛlɛ bo̠o̠th mi̠ dɔ̱diɛn, mi̠ ce̱tkɛ jɛ. Thiɛlɛ ram mi̠ päär kɛ jɛ. Thiɛlɛ ram mi̠ päär kɛ jɛ. <br><br>"
        },
        {
            id: 141,
            author: "Bol Th,,t Ku,th",
            title: "141.Ni̠ kɛ Gɔɔy Kuɔth",
            category: "",
            lyrics: "1. Ni̠kɛ gɔɔy Kuɔth cuɛ gatdɛ ŋun kɛ ɣöö baa jɛ näk, jɛn cua jɛ näk kɛ dueer naath. Ni̠kɛ gɔɔy kuɔth caa Ji̠thɛth col dueer. <br><br> Riɛmdɛ cɛ lo̠o̠ny kɛ kui̠i̠ dueri̠, nikɛ gɔɔy Kuɔth ca Ji̠thɛth col dueer.(x2) <br><br> 2. Ni̠kɛ gɔɔy Kuɔth cuɛ gatdɛ ŋun kɛ ɣöö nhɔkɛ ɣɔw, jɛn cua jɛ näk kɛ dueer naath. Ni̠kɛ gɔɔy kuɔth caa Ji̠thɛth col dueer. <br><br> 3. Ni̠kɛ gɔɔy Kuɔth cuɛ gatdɛ ŋun kɛ ɣöö kɔ̱c lɔcdɛ, jɛn cua jɛ näk kɛ dueer naath. Ni̠kɛ gɔɔy kuɔth caa Ji̠thɛth col dueer."
        },
        {
            id: 142,
            author: "A.H. 300 Rock of Ages",
            title: "142. Päm Teekä Gaŋ ɣä Dueeri̠",
            category: "",
            lyrics: "1. Päm teekä gaŋä dueeri̠, A tɔwä rɔ rɛydu ni̠ ciaŋ. A pi̠i̠ku kɛnɛ riɛmdu, tëë ci̠ lo̠ny jɔ̱ɔ̱r buɔ̱lädu. A lakɛ dueerkä raar, bä cu buay rɛyduni̠ ciaŋ. <br><br> 2. /Ciɛ mɔ la̱t tekädä, min dee ŋuɔ̱tku jakä gɔw. /Ci̠ di̠t lɔaac gɔyku dee ŋa̱c, cäŋ ku merkä lo̠o̠ny ni̠ ciaŋ. Dueerkä diaal /caa ɣä dee kän, Ɛ ji̠n kään, ni̠ ji̠n kärɔa.<br><br> 3. Thiɛlɛ tetdä mi̠ nöŋä, ɣän bä rɔ ka̱pni̠ jiaathdu. Ja̱lä baaŋ ba̱a̱ kä ji̠ kɛ kum, thiɛlɛ ɣä lua̱ŋ ba̱a̱ kä ji̠ kɛ luäk. Riɛŋä pi̠i̠ni̠ku tin gɔw, lak ɣä, kuäär, kiɛ ɣän bä li̠w. <br><br> 4. Gua̱a̱th mi̠ ka̱nä yiëë ɛmɛ, gua̱a̱th mi̠ ci̠ lia̱a̱ nyinkä kum. Gua̱a̱th mi̠ ta̱a̱ ɣɔaa mi̠ kui̠cä, nɛ̈ɛ̈nä ji̠ wi̠i̠ kɔaam liɔ̱ɔ̱kni̠. Päm teekä gaŋä dueeri̠, a tɔ̱ɔ̱wä rɔ rɛydu ni̠ ciaŋ."
        },
        {
            id: 143,
            author: "A.H. 108 Amazing grace, how sweet the sound",
            title: "143. Ɛ Jɔw Nhökä Päli̠kä Mi̠ Te̱e̱ di̠?",
            category: "",
            lyrics: "1. Ɛ jɔw nhökä päli̠kä mi̠ te̱e̱ di̠? mi̠ kääni̠ ram mi̠ ce̱tkɛ ɣä? mëëdan cä bath kä cɛ ɣä jek, ɣän cɔr cɛ nyinkä lɛp. <br><br> 2. Päl lɔaacdɛ ŋi̠i̠cɛ ɣä kɛ luth, Päl lɔaacdɛ cɛ bo̠o̠ydä woc. Ɛ mi̠ gääy naath ɛn päli̠kädɛ, niɛ gua̱a̱th ëë ŋa̱th kɛ ɣä. 3. Rɛy rikni̠ ti̠ bec-bɛc ti̠ ŋuan, rik ti̠ ŋuan ni̠ kɛnɛ dual. Cä ben kä ji̠ kɛ ɣöö bi̠ kɛ ɣöö bi̠ ɣä bo̠th, ji̠n kärɔa bo̠thi̠ ɣä ni̠ ciaŋ. <br.<br> 4. Ɛn kuäär cɛ gukdɛ la̱t kɛ ɣä, rietdɛ, ŋa̱thdɛ, cɛ jɔc. Baa jɛn ko̠tdä, kä ɛ jɛn gääŋdä, niɛ gua̱a̱th in ŋuɔt dä yiëë."
        },
        {
            id: 144,
            author: "Weeping Will Not Save Me",
            title: "144. Lul /Cɛ ɣä bi̠ Kän",
            category: "",
            lyrics: "1. Lul /cv f` b5 k`n, C`x thi`x nhiamd` kv mer, /Cv dual` dee jak` jivy, /Cv dueer run5 dee lak j]]r. Lul /cv f` b5 k`n.<br><br>J5thvth cv p1r, cv l5w kv ku5d`. J5thvth cv rivk, pu]]ny jiaath s.J5thvth cv liep; bv f` k`n.  Jvn k`rsa bv f` k`n.  <br><br>2. L1t /cv f` b5 k`n. L`t diaal tin d22 l1t, C1r m5 gsaa kv ciax l1td`, /Cv yi22d` dee jak` gsaa. L1t /cv f` b5 k`n.  <br><br>3. Liep /cv f` b5 k`n. Dueerk` diaal laa f` a jak` bath,Jsw m5 gsaa t22 rvy jiethd`, C`x b` liep k` f`n b` l5w. Liep / cv f` b5 k`n.  <br><br>4. Pal / cv f` b5 k`n, Pal5 diaal tin d22 l1t, /Caa dueerk` dee lak j]]r, Dueer tin c` l1t /caa kv dee col. Pal /cv f` b5 k`n. <br><br>5. X1th Kusth bv f` k`n. F`n x11th` Gat Kusth m5 gsaa, F`n x11th` l1t m5 c` l1t. Ku``r, jak` n5 f` k` w11 Nhiamdu. X1th Kusth bv f` k`n."
        },



    ];

    function getDailyHymn() {
        const today = new Date();
        const daySeed = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

        let hash = 0;
        for (let i = 0; i < daySeed.length; i++) {
            hash = daySeed.charCodeAt(i) + ((hash << 5) - hash);
        }

        const index = Math.abs(hash) % hymns.length;
        return hymns[index];
    }

    function displaySongOfTheDay() {
        const hymn = getDailyHymn();
        const container = document.getElementById("song-of-the-day");

        if (container) {
            container.innerHTML = `
            <h2>Song of the Day</h2>
            <p><strong>Author:</strong> ${hymn.author}</p>
            <h3>${hymn.title}</h3>
            <div>${hymn.lyrics}</div>
        `;

            // Apply random theme colors
            applyThemeColors(container);
        }
    }

    function applyThemeColors(songContainer) {
        const hymnsList = document.getElementById("hymns-list");

        // Define random palettes
        const palettes = [
            { bg: "#f9f9f9", text: "#2c3e50", accent: "#3498db" },
            { bg: "#fff8e7", text: "#5d4037", accent: "#ff9800" },
            { bg: "#f0f8ff", text: "#1a237e", accent: "#3f51b5" },
            { bg: "#f3f9f1", text: "#2e7d32", accent: "#4caf50" },
            { bg: "#fff0f6", text: "#880e4f", accent: "#e91e63" },
            { bg: "#e8f5e9", text: "#1b5e20", accent: "#43a047" },
            { bg: "#e3f2fd", text: "#0d47a1", accent: "#2196f3" }
        ];

        // Pick a random palette
        const randomPalette = palettes[Math.floor(Math.random() * palettes.length)];

        if (document.body.classList.contains("dark-mode")) {
            // Dark mode overrides random palette
            songContainer.style.backgroundColor = "#121212";
            songContainer.style.color = "#f5f5f5";

            if (hymnsList) {
                hymnsList.style.backgroundColor = "#121212";
                hymnsList.style.color = "#f5f5f5";
            }
        } else {
            // Apply random palette in light mode
            songContainer.style.backgroundColor = randomPalette.bg;
            songContainer.style.color = randomPalette.text;
            songContainer.querySelector("h2").style.color = randomPalette.accent;

            if (hymnsList) {
                hymnsList.style.backgroundColor = randomPalette.bg;
                hymnsList.style.color = randomPalette.text;
            }
        }
    }

    // Run once DOM is ready
    displaySongOfTheDay();

    // Listen for theme changes
    cons = document.getElementById("theme-select");
    if (themeSelect) {
        themeSelect.addEventListener("change", () => {
            if (themeSelect.value === "dark") {
                document.body.classList.add("dark-mode");
            } else {
                document.body.classList.remove("dark-mode");
            }
            // Reapply theme colors when toggled
            const songContainer = document.getElementById("song-of-the-day");
            if (songContainer) applyThemeColors(songContainer);
        });
    }


    let currentPage = 1;
    const hymnsPerPage = 50;
    let filteredHymns = [...hymns];
    let currentHymnIndex = 1;

    

    function applyDailyTheme(container) {
        const today = new Date();
        const dayNumber = today.getDate(); // 1–31

        // Pick a color palette based on the day
        const palettes = [
            { bg: "#f9f9f9", text: "#2c3e50", accent: "#3498db" }, // soft blue
            { bg: "#fff8e7", text: "#5d4037", accent: "#ff9800" }, // warm orange
            { bg: "#f0f8ff", text: "#1a237e", accent: "#3f51b5" }, // cool indigo
            { bg: "#f3f9f1", text: "#2e7d32", accent: "#4caf50" }, // fresh green
            { bg: "#fff0f6", text: "#880e4f", accent: "#e91e63" }, // pink/red
        ];

        function displaySongOfTheDay() {
            const hymnOfTheDay = getDailyHymn();
            const container = document.getElementById("song-of-the-day");

            if (container) {
                container.innerHTML = `
            <h2>Song of the Day</h2>
            <h3>${hymnOfTheDay.title}</h3>
            <p><strong>Author:</strong> ${hymnOfTheDay.author}</p>
            <p><strong>Category:</strong> ${hymnOfTheDay.category}</p>
            <div>${hymnOfTheDay.lyrics}</div>
        `;

                // Apply dynamic theme
                applyDailyTheme(container);
            }
        }

        const palette = palettes[dayNumber % palettes.length];

        container.style.background = palette.bg;
        container.style.color = palette.text;
        container.querySelector("h2").style.color = palette.accent;
        container.querySelector("h3").style.color = palette.text;
    }

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
                <p><strong>Author:</strong> ${hymn.author}</p>
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
            <p><strong>Author:</strong> ${hymn.author}</p>
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

// --- Lock footer at bottom on small screens ---
const footer = document.querySelector("footer");
function lockFooter() {
    if (footer) {
        if (window.innerWidth <= 768) { // small screen condition
            footer.style.position = "fixed";
            footer.style.bottom = "0";
            footer.style.left = "0";
            footer.style.width = "100%";
            footer.style.zIndex = "999";
        } else {
            footer.style.position = "";
            footer.style.bottom = "";
            footer.style.left = "";
            footer.style.width = "";
            footer.style.zIndex = "";
        }
    }
}
lockFooter();
window.addEventListener("resize", lockFooter);

document.addEventListener("DOMContentLoaded", () => {
    // ... your existing code ...


    // Function to pick a random hymn
    function getRandomHymn() {
        const randomIndex = Math.floor(Math.random() * hymns.length);
        return hymns[randomIndex];
    }

    // Display the random hymn of the day
    function displaySongOfTheDay() {
        const hymnOfTheDay = getRandomHymn();
        const songOfTheDayContainer = document.getElementById("song-of-the-day");

        if (songOfTheDayContainer) {
            songOfTheDayContainer.innerHTML = `
                <h2>Song of the Day</h2>
                <h3>${hymnOfTheDay.title}</h3>
                <p><strong>Author:</strong> ${hymnOfTheDay.author}</p>
                <p><strong>Category:</strong> ${hymnOfTheDay.category}</p>
                <div>${hymnOfTheDay.lyrics}</div>
            `;
        }
    }

    // Call the function on page load
    displaySongOfTheDay();
});

document.addEventListener("DOMContentLoaded", () => {
    // ... your existing code ...

    // Function to pick a random hymn
    function getRandomHymn() {
        const randomIndex = Math.floor(Math.random() * hymns.length);
        return hymns[randomIndex];
    }

    // Display the random hymn of the day
    function displaySongOfTheDay() {
        const hymnOfTheDay = getRandomHymn();
        const songOfTheDayContainer = document.getElementById("song-of-the-day");

        if (songOfTheDayContainer) {
            songOfTheDayContainer.innerHTML = `
                <h2>Song of the Day</h2>
                <h3>${hymnOfTheDay.title}</h3>
                <p><strong>Author:</strong> ${hymnOfTheDay.author}</p>
                <p><strong>Category:</strong> ${hymnOfTheDay.category}</p>
                <div>${hymnOfTheDay.lyrics}</div>
            `;
        }
    }

    // Call the function on page load
    displaySongOfTheDay();
});


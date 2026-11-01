const timelineData = {
    2012: { title: "The University of Hong Kong", desc: "開始就讀 Food and Nutritional Science 學士學位[cite: 3]。" },
    2013: { title: "Academic Study", desc: "港大食品與營養科學系就讀中[cite: 3]。" },
    2014: { title: "Ocean Park Corporation", desc: "擔任 Education Specialist，負責展區導覽與物理科普專案[cite: 3]。" },
    2015: { title: "Ocean Park Corporation", desc: "持續進行公眾保育教育與企業培訓專案支援[cite: 3]。" },
    2016: { title: "Graduation", desc: "取得港大理學士學位[cite: 3]，並轉任 Contract Education Assistant[cite: 2, 3]。" },
    2017: { title: "Ocean Park Corporation", desc: "升任 Assistant Discovery & Education Officer，設計永續海鮮主題教案[cite: 2]。" },
    2018: { title: "Marine Mammal Training", desc: "轉任 Assistant Marine Mammal Trainer，參與海豹與海獅的行為訓練[cite: 1, 2]。" },
    2019: { title: "Marine Mammal Training", desc: "榮獲 Team Star of the Year 2019[cite: 1]。負責極地動物與海豚操作制約訓練[cite: 2]。" },
    2020: { title: "Promotion & Nutrition Study", desc: "升任 Associate Animal Care Officer[cite: 1]。開始於 HKU SPACE 進修社區營養證書[cite: 3]。" },
    2021: { title: "AFCD Field Officer II", desc: "完成 St. James' Settlement 實習[cite: 3]。11月加入 AFCD 負責流浪動物管理[cite: 1]。" },
    2022: { title: "AFCD Field Officer II", desc: "協助獸醫進行治療，並管理外展團隊處理公眾投訴[cite: 1]。" },
    2023: { title: "AFCD Field Officer II", desc: "持續負責動物照養與重新安置前的訓練[cite: 1]。" },
    2024: { title: "National Taiwan University", desc: "8月進入台大生態演化研究所攻讀碩士[cite: 3]。" },
    2025: { title: "NTU Ecology & Evolutionary Biology", desc: "碩士研究進行中，結合 Python 技能與動物行為專業[cite: 1, 3]。" },
    2026: { title: "NTU Ecology & Evolutionary Biology", desc: "碩士研究進行中[cite: 3]。" },
    2027: { title: "Expected Graduation", desc: "預計取得台大生態與演化生物學碩士學位[cite: 3]。" }
};

const slider = document.getElementById("timelineSlider");
const yearDisplay = document.getElementById("year-display");
const popupTitle = document.getElementById("popup-title");
const popupDesc = document.getElementById("popup-desc");

if (slider) {
    slider.addEventListener("input", function() {
        const year = this.value;
        yearDisplay.innerText = year;
        
        if (timelineData[year]) {
            popupTitle.innerText = timelineData[year].title;
            popupDesc.innerText = timelineData[year].desc;
        } else {
            popupTitle.innerText = "Exploring";
            popupDesc.innerText = "持續在生態與動物領域探索中。";
        }
    });
}

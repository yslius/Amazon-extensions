function getBuyDataDetail() {
    // リストを取得する
    var eleTags001 = document.getElementsByClassName("a-box-group");
    console.log(eleTags001.length);

    for (var i = 0; i < eleTags001.length; i++) {
        // 商品情報を取得する
        // 注文日
        var eleTags002 = eleTags001[i].getElementsByClassName("a-span3");
        // console.log(eleTags002.length);
        var eleTags003 = eleTags002[0].getElementsByClassName("value");
        console.log(eleTags003[0].innerText);

        // 金額
        var eleTags004 = eleTags001[i].getElementsByClassName("a-span2");
        // console.log(eleTags004.length);
        var eleTags005 = eleTags004[0].getElementsByClassName("value");
        console.log(eleTags005[0].innerText);

        // 注文番号
        var eleTags005 = eleTags001[i].getElementsByClassName("a-fixed-right-grid-col actions a-col-right");
        // console.log(eleTags005.length);
        var eleTags006 = eleTags005[0].getElementsByClassName("value");
        console.log(eleTags006[0].innerText);

        // 商品名
        var eleTags007 = eleTags001[i].getElementsByClassName("shipment");
        // console.log(eleTags007.length);
        var eleTags008 = eleTags007[0].getElementsByClassName("a-fixed-left-grid-col a-col-right");
        // console.log(eleTags008.length);
        var eleTags009 = eleTags008[0].getElementsByClassName("a-link-normal");
        console.log(eleTags009[0].innerText);

        // await _sleep(2000);
    }
}

async function getBuyData() {

    const a = document.createElement('a');
    const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // ページネーションを取得する
    var eleTagsPage = document.getElementsByClassName("a-text-center pagination-full");
    // 複数ページ合った場合はページ送りする
    if (eleTagsPage.length > 0) {
        eleLi = eleTagsPage[0].getElementsByTagName("li");
        for (var i = 0; i < eleLi.length - 2; i++) {
            // getBuyDataDetail();
            var eleTags001 = document.getElementsByClassName("a-box-group");
            console.log(eleTags001.length);

            for (var j = 0; j < eleTags001.length; j++) {
                // 商品情報を取得する
                // 注文日
                var eleTags002 = eleTags001[j].getElementsByClassName("a-span3");
                // console.log(eleTags002.length);
                var eleTags003 = eleTags002[0].getElementsByClassName("value");
                console.log(eleTags003[0].innerText);

                // 金額
                var eleTags004 = eleTags001[j].getElementsByClassName("a-span2");
                // console.log(eleTags004.length);
                var eleTags005 = eleTags004[0].getElementsByClassName("value");
                console.log(eleTags005[0].innerText);

                // 注文番号
                var eleTags005 = eleTags001[j].getElementsByClassName("a-fixed-right-grid-col actions a-col-right");
                // console.log(eleTags005.length);
                var eleTags006 = eleTags005[0].getElementsByClassName("value");
                console.log(eleTags006[0].innerText);

                // 商品名
                var eleTags007 = eleTags001[j].getElementsByClassName("shipment");
                // console.log(eleTags007.length);
                var eleTags008 = eleTags007[0].getElementsByClassName("a-fixed-left-grid-col a-col-right");
                // console.log(eleTags008.length);
                var eleTags009 = eleTags008[0].getElementsByClassName("a-link-normal");
                console.log(eleTags009[0].innerText);

            }
            eleA = eleLi[i + 1].getElementsByTagName("a");
            console.log(eleA[0].href);
            location.href = eleA[0].href;
            await _sleep(2000);
        }
    }
    // 複数ページなかった場合はページ送りしない
    else {
        // getBuyDataDetail();
        var eleTags001 = document.getElementsByClassName("a-box-group");
        console.log(eleTags001.length);

        for (var i = 0; i < eleTags001.length; i++) {
            // 商品情報を取得する
            // 注文日
            var eleTags002 = eleTags001[i].getElementsByClassName("a-span3");
            // console.log(eleTags002.length);
            var eleTags003 = eleTags002[0].getElementsByClassName("value");
            console.log(eleTags003[0].innerText);

            // 金額
            var eleTags004 = eleTags001[i].getElementsByClassName("a-span2");
            // console.log(eleTags004.length);
            var eleTags005 = eleTags004[0].getElementsByClassName("value");
            console.log(eleTags005[0].innerText);

            // 注文番号
            var eleTags005 = eleTags001[i].getElementsByClassName("a-fixed-right-grid-col actions a-col-right");
            // console.log(eleTags005.length);
            var eleTags006 = eleTags005[0].getElementsByClassName("value");
            console.log(eleTags006[0].innerText);

            // 商品名
            var eleTags007 = eleTags001[i].getElementsByClassName("shipment");
            // console.log(eleTags007.length);
            var eleTags008 = eleTags007[0].getElementsByClassName("a-fixed-left-grid-col a-col-right");
            // console.log(eleTags008.length);
            var eleTags009 = eleTags008[0].getElementsByClassName("a-link-normal");
            console.log(eleTags009[0].innerText);

            // await _sleep(2000);
        }
    }

}

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: getBuyData
    });
});
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

function getStringFromDate(date) {

    var year_str = date.getFullYear();
    //月だけ+1すること
    var month_str = 1 + date.getMonth();
    var day_str = date.getDate();
    var hour_str = date.getHours();
    var minute_str = date.getMinutes();
    var second_str = date.getSeconds();


    format_str = 'YYYYMMDDhhmmss';
    format_str = format_str.replace(/YYYY/g, year_str);
    format_str = format_str.replace(/MM/g, month_str);
    format_str = format_str.replace(/DD/g, day_str);
    format_str = format_str.replace(/hh/g, hour_str);
    format_str = format_str.replace(/mm/g, minute_str);
    format_str = format_str.replace(/ss/g, second_str);

    return format_str;
};

async function getBuyData() {

    const a = document.createElement('a');
    const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // ページネーションを取得する
    var eleTagsPage = document.getElementsByClassName("a-text-center pagination-full");

    // getBuyDataDetail();
    var eleTags001 = document.getElementsByClassName("a-box-group");
    console.log(eleTags001.length);

    var text_blob = "";
    for (var i = 0; i < eleTags001.length; i++) {
        var strDate = "";
        var strValue = "";
        var strID = "";
        var strName = "";

        // 商品情報を取得する
        // 注文日
        var eleTags002 = eleTags001[i].getElementsByClassName("a-span3");
        // console.log(eleTags002.length);
        var eleTags003 = eleTags002[0].getElementsByClassName("value");
        strDate = eleTags003[0].innerText;
        console.log(strDate);

        // 金額
        var eleTags004 = eleTags001[i].getElementsByClassName("a-span2");
        // console.log(eleTags004.length);
        var eleTags005 = eleTags004[0].getElementsByClassName("value");
        strValue = eleTags005[0].innerText;
        console.log(strValue);

        // 注文番号
        var eleTags005 = eleTags001[i].getElementsByClassName("a-fixed-right-grid-col actions a-col-right");
        // console.log(eleTags005.length);
        var eleTags006 = eleTags005[0].getElementsByClassName("value");
        strID = eleTags006[0].innerText;
        console.log(strID);

        // 商品名
        var eleTags007 = eleTags001[i].getElementsByClassName("shipment");
        // console.log(eleTags007.length);
        var eleTags008 = eleTags007[0].getElementsByClassName("a-fixed-left-grid-col a-col-right");
        // console.log(eleTags008.length);
        var eleTags009 = eleTags008[0].getElementsByClassName("a-link-normal");
        strName = eleTags009[0].innerText;
        console.log(strName);

        // text_blob = format("%s,%s,%s,%s\n", [strDate, strName, strValue, strID]);
        text_blob += strDate + "," + strName + "," + strValue + "," + strID + "\n";
        // await _sleep(2000);
    }

    // Atagを作りデータをダウンロードする
    var dateNow = new Date();
    // var strDateNow = getStringFromDate(dateNow);
    var year_str = dateNow.getFullYear();
    //月だけ+1すること
    var month_str = ("0" + (dateNow.getMonth() + 1)).slice(-2);
    var day_str = ("0" + dateNow.getDate()).slice(-2);
    var hour_str = dateNow.getHours();
    var minute_str = dateNow.getMinutes();
    var second_str = dateNow.getSeconds();
    format_str = 'YYYYMMDDhhmmss';
    format_str = format_str.replace(/YYYY/g, year_str);
    format_str = format_str.replace(/MM/g, month_str);
    format_str = format_str.replace(/DD/g, day_str);
    format_str = format_str.replace(/hh/g, hour_str);
    format_str = format_str.replace(/mm/g, minute_str);
    format_str = format_str.replace(/ss/g, second_str);
    var strDateNow = format_str;

    a.href = URL.createObjectURL(new Blob([text_blob], { type: 'text/plain' }));
    a.download = "AmazonHistory_" + strDateNow + ".csv";
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a)

}

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: getBuyData
    });
});
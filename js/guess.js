//是否有重复数字
function hasRep(num) {
    var str = num.toString();
    var arr = str.split("");
    for (var i = 0; i < arr.length; i++) {
        if (str.split(arr[i]).length - 1 >= 2) {
            return true;
        }
    }
    return false;
}

//生成随机4位数
function getRandomNum() {
    var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        if (res.length == 4) {
            break;
        } else {
            var index = Math.floor(Math.random() * arr.length);
            res[i] = arr[index];
            arr.splice(index, 1);

        }
    }
    return res;
}

//日期转换
function timeStamp2String(time) {
    var datetime = new Date();
    datetime.setTime(time);
    var year = datetime.getFullYear();
    var month = datetime.getMonth() + 1;
    var date = datetime.getDate();
    var hour = datetime.getHours();
    var minute = datetime.getMinutes();
    return year + "年" + month + "月" + date + "日 " + hour + ":" + minute;
};
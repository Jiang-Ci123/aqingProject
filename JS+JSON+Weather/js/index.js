// 接口返回的数据就是一个函数的调用
function weather(data) {

    var dateDayname = document.getElementById("date-dayname");
    var dateDay = document.getElementById("date-day");
    var location = document.getElementById("location");

    var weatherL = document.getElementById("weather-l")
    var weatherTemp = document.getElementById("weather-temp")
    var weatherDesc = document.getElementById("weather-desc")

    var pm = document.getElementById("pm")
    var humidity = document.getElementById("humidity")
    var wind = document.getElementById("wind")


    var day1 = document.getElementById("day1");
    var span1 = day1.getElementsByTagName("span");

    var day2 = document.getElementById("day2");
    var span2 = day2.getElementsByTagName("span");

    var day3 = document.getElementById("day3");
    var span3 = day3.getElementsByTagName("span");

    var day4 = document.getElementById("day4");
    var span4 = day4.getElementsByTagName("span");

    dateDayname.innerHTML = data.weather[0].date.slice(0, 3);
    dateDay.innerHTML = data.date;
    location.innerHTML = data.city;

    weatherL.innerHTML = weatherIcon(1);
    weatherTemp.innerHTML = data.weather[0].temp.slice(0, 3) + "℃";
    weatherDesc.innerHTML = data.weather[0].weather;

    //判断是否有pm25
    if (data.pm25) {
        pm.innerHTML = data.pm25;
    } else {
        pm.innerHTML = "暂无";
    }

    humidity.innerHTML = "暂无";
    wind.innerHTML = data.weather[0].wind;
    // 封装判断天气的一个函数
    // t 第几天
    function weatherIcon(t) {
        if (data.weather[t - 1].icon1.search("duoyun") != -1) {
            return "&#xe694;";
        }
        if (data.weather[t - 1].icon1.search("yin") != -1) {
            return "&#xe624;";
        }
        if (data.weather[t - 1].icon1.search("qing") != -1) {
            return "&#xe61f;";
        }
        if (data.weather[t - 1].icon1.search("xiaoyu") != -1) {
            return "&#xe622;";
        }
        if (data.weather[t - 1].icon1.search("zhongyu") != -1) {
            return "&#xe685;";
        }
        if (data.weather[t - 1].icon1.search("dayu") != -1 || data.weather[0].icon1.search("baoyu") != -1) {
            return "&#xe644;";
        }
        if (data.weather[t - 1].icon1.search("leizhenyu") != -1) {
            return "&#xe61e;";
        }
        if (data.weather[t - 1].icon1.search("zhenyu") != -1) {
            return "&#xe643;";
        }

        if (data.weather[t - 1].icon1.search("zhongxue") != -1) {
            return "&#xe684;";
        }
        if (data.weather[t - 1].icon1.search("zhongxuezhuandaxue") != -1) {
            return "&#xe686;";
        }
        if (data.weather[t - 1].icon1.search("zhenxue") != -1) {
            return "&#xe683;";
        }
        if (data.weather[t - 1].icon1.search("yangsha") != -1) {
            return "&#xe680;";
        }
        if (data.weather[t - 1].icon1.search("xiaoxue") != -1) {
            return "&#xe681;";
        }
        if (data.weather[t - 1].icon1.search("xiaoxuezhuanzhongxue") != -1) {
            return "&#xe67d;";
        }
        if (data.weather[t - 1].icon1.search("mai") != -1) {
            return "&#xe67e;";
        }
        if (data.weather[t - 1].icon1.search("shachenbao") != -1) {
            return "&#xe67b;";
        }
        if (data.weather[t - 1].icon1.search("fuchen") != -1) {
            return "&#xe67a;";
        }
        if (data.weather[t - 1].icon1.search("daxue") != -1) {
            return "&#xe675;";
        }
        if (data.weather[t - 1].icon1.search("daxuezhuanbaoxue") != -1) {
            return "&#xe676;";
        }
        if (data.weather[t - 1].icon1.search("baoxue") != -1) {
            return "&#xe674;";
        }

    }

    span1[0].innerHTML = weatherIcon(1);
    span1[1].innerHTML = data.weather[0].date.slice(0, 3);
    span1[2].innerHTML = data.weather[0].temp;

    span2[0].innerHTML = weatherIcon(2);
    span2[1].innerHTML = data.weather[1].date.slice(0, 3);
    span2[2].innerHTML = data.weather[1].temp;

    span3[0].innerHTML = weatherIcon(3);
    span3[1].innerHTML = data.weather[2].date.slice(0, 3);
    span3[2].innerHTML = data.weather[2].temp;

    span4[0].innerHTML = weatherIcon(4);
    span4[1].innerHTML = data.weather[3].date.slice(0, 3);
    span4[2].innerHTML = data.weather[3].temp;




}

window.onload = function() {

    var btn = document.getElementById("location-button");
    var city = document.getElementById("city");

    var oldScript = document.createElement("script");
    oldScript.src = `https://api.asilu.com/weather/?city=${"开封"}&callback=weather`;
    //插入到页面中去
    document.body.appendChild(oldScript);

    btn.onclick = function() {
        // 加个简单判断，输入内容是否为空
        if (city.value) {
            var newScript = document.createElement("script");
            newScript.src = `https://api.asilu.com/weather/?city=${city.value}&callback=weather`;

            //插入到页面中去
            document.body.replaceChild(newScript, oldScript);
            oldScript = newScript;
        } else {
            alert("请输入城市名称!");
        }
    }
}
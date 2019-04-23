import $ from 'jquery'

export function getAddsInfo(lat,log) {

    return $.ajax({
        url: "/proxy/ws/geocoder/v1/?location="+lat+","+log+"&get_poi=1&key=XZGBZ-OIOC6-QJJS4-EDPIP-VIXYJ-QHBCM",
        method: "get",
    }).then(
        res => {
            return res;
        }
    )
}
//腾讯地图查询距离
export function getDistance(from,to) {

    return $.ajax({
        url: "/proxy/ws/distance/v1/?mode=driving&from="+from+"&to="+to+"&key=XZGBZ-OIOC6-QJJS4-EDPIP-VIXYJ-QHBCM",
        method: "get",
    }).then(
        res => {
            return res;
        }
    )
}

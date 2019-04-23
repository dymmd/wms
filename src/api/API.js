import axios from './index'

export function api(url,method,request){
    if(method=='post'){
        return axios({
            url: url,
            method: method,
            data:request
        }).then(
            res => {
                return res;
            }
        )
    }else{
        let keys=Object.keys(request)
        let parmStr='';
        for(var i=0;i<keys.length;i++){
            parmStr=parmStr+'&'+keys[i]+'='+request[keys[i]]
        }
        url=url+'?'+parmStr.substr(1);
        return axios({
            url: url,
            method: 'get',
        }).then(
            res => {
                return res;
            }
        )
    }
}

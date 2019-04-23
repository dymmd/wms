export default {
  default: {
    reg: /./
  },
  phone: {
    reg: /^1[3|4|5|8][0-9]\d{4,8}$/,
    tips: '请输入正确的手机号'
  },
  email: {
    reg: /./,
    tips: '请输入正确的邮箱'
  },
  username: {
    reg: /^[\w\W]{6,12}$/,
    tips: '用户名由6~12位的字母或数字组成'
  },
  password: {
    reg: /^[\w\W]{6,12}$/,
    tips: '密码由6~12位的字母或数字组成'
  }
}

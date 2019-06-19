import { Base64 } from 'js-base64'

var _token = null
var _account = null

function getUrlParam(name) {
  var reg = new RegExp(name + '=([^&]*)(&|$)')
  var arr = window.location.search.match(reg)
  if (arr) {
    return decodeURI(arr[1])
  }
  return null
}

function getCookie(name) {
  var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  var arr = document.cookie.match(reg)
  if (arr) {
    return unescape(arr[2])
  }
  return null
}

/**
 * 获取单点登录账户
 */
function initAccount() {
  _token = getUrlParam('token')
  if (_token) {
    var arr = _token.split('.')
    if (arr.length === 3) {
      var str = Base64.decode(arr[1])
      try {
        var obj = JSON.parse(str)
        _account = obj.username
      } catch (err) {
      }
    }
  }

  if (!_account) {
    _account = getCookie('account')
  }
  window.account = _account
}

/**
 * 当前登录账号
 */
export const account = _account

/**
 * 初始化
 */
export function initAuth() {
  initAccount()
}

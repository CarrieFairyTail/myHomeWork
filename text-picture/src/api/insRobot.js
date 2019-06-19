import baseRequest from './base.js'

// 获取用户有权限的并且有巡检机器人的dc
export function getAuthorizedDc() {
  return baseRequest({
    url: '/robots/authorized_dc',
    data: {
    }
  })
}

// 获取巡检信息列表
export function getRobotInspResult(params) {
  return baseRequest({
    url: '/robots/robot_insp_result',
    params
  })
}

// 获取巡检详情
export function getRobotInspDetail(params) {
  return baseRequest({
    url: '/robots/robot_insp_detail',
    params
  })
}

// 查看巡检步骤拍摄的照片 返回图片数据
export function getRobotInspPhoto(params) {
  return baseRequest({
    url: '/robots/robot_insp_photo',
    params
  })
}

// 权限
export function getAuthority(params) {
  return baseRequest({
    url: '/auth/has_authority',
    params
  })
}

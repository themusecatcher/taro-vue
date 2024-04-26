import { request } from '@/http/request'

export function getAction (url: string, parameter: any, args = {}) {
  return request({
    url: url,
    method: 'GET',
    data: parameter,
    args: args
  })
}
export function postAction (url: string, parameter: any, args = {}) {
  return request({
    url: url,
    method: 'POST',
    data: parameter,
    args: args,
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}


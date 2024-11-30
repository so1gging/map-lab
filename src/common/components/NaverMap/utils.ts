const NAVER_MAP_ID = 'naver-map-script'
const NAVER_SCRIPT_SRC = 'https://oapi.map.naver.com/openapi/v3/maps.js'

export const loadNaverMapScript = (clientId: string) => {
  return new Promise<void>((resolve, reject) => {
    if (document.getElementById(NAVER_MAP_ID)) {
      resolve() // 이미 로드된 경우
      return
    }

    const script = document.createElement('script')
    script.id = NAVER_MAP_ID
    script.type = 'text/javascript'
    script.setAttribute('strategy', 'beforeInteractive')
    script.src = `${NAVER_SCRIPT_SRC}?ncpClientId=${clientId}`
    script.onload = () => {
      resolve()
    }
    script.onerror = () => reject(new Error('Failed to load Naver Map script !'))
    document.head.appendChild(script)
  })
}

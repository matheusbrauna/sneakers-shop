import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
  ssrExchange,
} from 'urql'

const isServerSide = typeof window === 'undefined'
const ssrCache = ssrExchange({ isClient: !isServerSide })

const client = createClient({
  url: 'https://api-sa-east-1.hygraph.com/v2/clbwnx8oq0mbc01t51glt5o6p/master',
  exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
  fetchOptions: {
    headers: {
      Authorization:
        'bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NzE1NjcxNTcsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuaHlncmFwaC5jb20vdjIvY2xid254OG9xMG1iYzAxdDUxZ2x0NW82cC9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiODZlNWM2MjItMWIwMy00MmQ1LWE0N2QtN2ZhNDhlZjY2ZjRjIiwianRpIjoiY2tnODM1b2FwcjRmaTAxd2U5OGpsNzgwdCJ9.vooXzM-R8JcOvVsbSeRa8te-0-6bE71WagswPbEH76eqW1Um1S0awDmPcjnCVTdp_ptG4lKv6W79UhtPenRuY-TRlDAWmuCkWR7DcWPO-9YHA9D47tjX7_dp0wZG3w-bz4NtAgzmIs9ITfmKoFe4ZX_qxPkzOZbot2aUkI8e7IP27fVi6tVR9Mxg2fv3FxkraHGrD23S-hwqNiTSoPTU02uzvnRRRisK-mjPWycCj_6HcU923BlVoWLBuSBVY1ofXEA_fwDhhwTVv8Xz29GudmQkJ9mckWGrCfBsOm-E-pHCQyJRRZvqYK5A3Xwt0lA6rIvzzSqANtRbrjJ6dGWb45Hj26Lv7fDYh1G3tXASokA4i96klvBC_DTzTAVtjpC0sEOWkvkknZYV4ZrpOgqegC_qLwsZi6YWLCfGJgvPCd9pqy6LENwo3ZS28z6gPWn_qSqZ-yEk3W8rc2Fq5FZ4zqtT4XGmpLFqjrF9LNt0FwlZYUB05W9beaWDLw7OURgFRk0DABNfmcEXfGQslylj4hbEfY5ZVaZkRPSOl8KhtXeMk3Wc4nDmo44GNebZqWv_lWAXSMDuIg8nqqnzkhSbv1MfKyulHss-Mxi5KzYkx2S9I90k8noIm5qD9dLOyEPbiwymlu_S0UtpdVptLYU3IuyQzgbO3gR35uT-siptUCk',
    },
  },
})

export { client, ssrCache }

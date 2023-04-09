export default async function getWordPressContent() {
  const url_base = 'http://espiasomarketing.com.br.loc';
  const response = await fetch(url_base + '/wp-json/espia/v1/configs', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });
  const arrayResponse = await response.json();
  return arrayResponse;
}

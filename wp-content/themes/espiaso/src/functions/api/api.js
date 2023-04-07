export async function getWordPressContent() {
  try {
    const url_base = 'https://espiasomarketing.com.br.loc'
      const settingsData = fetch(url_base + '/wordpress/index.php?rest_route=/wp/v2/settings', {
        method: 'GET',
        headers: {
          'Authorization': 'Basic ' + btoa('ms_admin:RqPid!0D)jO^TvZ39d')
        }
      })
      .then(response => {
        console.log(response);
      })
    } catch (error) {
      // console.error(error);
    }
  }
  
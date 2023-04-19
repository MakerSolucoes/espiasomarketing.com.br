async function getWordPressContent() {
  const url_base = 'https://espiasomarketing.com.br.loc';
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

async function getSiteGeneral() {
  const url_base = 'https://espiasomarketing.com.br.loc';
  const response = await fetch(url_base + '/wp-json', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });
  const arrayResponse = await response.json();
  return arrayResponse;
}

async function getPortfolio() {
  const url_base = 'https://espiasomarketing.com.br.loc';
  const response = await fetch(url_base + '/wp-json/espia/v1/portfolio', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });
  const arrayResponse = await response.json();
  return arrayResponse;
}

async function getTeam() {
  const url_base = 'https://espiasomarketing.com.br.loc';
  const response = await fetch(url_base + '/wp-json/espia/v1/time', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });
  const arrayResponse = await response.json();
  return arrayResponse;
}


async function fetchData() {
  const response = [];
  response[0] = await getWordPressContent();
  response[1] = await getTeam();
  response[2] = await getSiteGeneral();
  response[3] = await getPortfolio();
  return response;
}

async function getApiConfigs() {
  const response = await fetchData();
  return {
    site_general: response[2],
    logo: response[0].logo,
    header: response[0].header_navigation,
    main: response[0].main_configs,
    curiosidades: response[0].curiosidades_configs,
    servicos: response[0].servicos_configs,
    video: response[0].video_configs,
    depoimentos: response[0].depoimentos_configs,
    agendamento: response[0].agendamento_configs,
    parceiros: response[0].parceiros_configs,
    time: response[1],
    social: response[0].social_configs.redes_sociais,
    contato: response[0].contato_configs,
    portfolio: response[3],
  };
}

export default getApiConfigs;

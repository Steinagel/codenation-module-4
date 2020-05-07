const filterByStatus = (personagens, status) => {
  return personagens.filter((personagem) => personagem.status === status);
};

const filterByGender = (personagens, sexo) => {
  return personagens.filter((personagem) => personagem.gender === sexo);
};

const filterByEpisode = (personagens, ep) => {
  return personagens.filter((personagem) => {
    let valid_urls = personagem.episode.filter((ep_url) =>
      ep_url.endsWith("/" + ep)
    );
    return valid_urls.length > 0;
  });
};

module.exports = {
  filterByStatus,
  filterByGender,
  filterByEpisode,
};

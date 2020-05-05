import md5 from 'md5';

const gravatar = (email) => {
  const base = 'https://gravatar.com/avatar';
  const formatterEmail = (email).trim().toLowerCase();
  const hash = md5(formatterEmail, {encoding: 'binary'});
  return `${base}${hash}`;
};

export default gravatar;
//PARA PODER GENERAR UNA URL PARA EL AVATAR DEL USER.

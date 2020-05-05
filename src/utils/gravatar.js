import md5 from 'md5';

const gravatar = (email) => {
  const base = 'https://gravatar.com/avatar/';
  const formattedEmail = (email).trim().toLowerCase();
  const hash = md5(formattedEmail, {encoding: "binary"});
  return `${base}${hash}`;
};

export default gravatar;
//PARA PODER GENERAR UNA URL PARA EL AVATAR DEL USER.
//Antes el correo que el usuario registra debe tener una cuenta en gravatar
//para que la imagen de ese perfil se muestre aqui.
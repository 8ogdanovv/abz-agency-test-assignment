export const isValidName = (name) => {
  const nameRegex = /^[a-zA-Z\s'-]{2,60}$/;
  return nameRegex.test(name);
};

export const isValidEmail = (email) => {
  // eslint-disable-next-line no-control-regex
  const emailRegex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]{2,100}|"[\x01-\x09\x0b\x0c\x0e-\x7f]{1,100}")@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]$/;
  return emailRegex.test(email);
};

export const isValidPhone = (phone) => {
  const phoneRegex = /^\+380[0-9]{9}$/;
  return phoneRegex.test(phone);
};

export const isValidPhoto = (photo) => {
  if (photo) {
    const fileType = photo.type;
    const fileSize = photo.size / 1024 / 1024; // in MB
    const validTypes = ['image/jpeg', 'image/jpg'];
    const validSize = 5; // in MB

    if (!validTypes.includes(fileType)) {
      return `Photo should be image/jpeg or 'image/jpg' type`;
    }

    if (fileSize > validSize) {
      return 'Photo should not be larger than 5 MB';
    }

    return true; // No photo provided, consider it as valid
  }
};








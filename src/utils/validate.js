export const isValidName = (name) => {
  const nameRegex = /^([A-Z][a-zA-Z' -]{1,59}( [A-Z][a-zA-Z' -]{1,59})*)$/;
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

    return new Promise((resolve) => {
      const image = new Image();
      image.onload = function () {
        resolve(
          validTypes.includes(fileType) &&
            fileSize <= validSize &&
            image.width >= 70 &&
            image.height >= 70
        );
      };
      image.src = URL.createObjectURL(photo);
    });
  }

  return Promise.resolve(false);
};